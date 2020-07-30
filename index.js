// Подключаем библиотеку для чтения .env файла
require("dotenv").config()

const dirname = __dirname
exports.dirname = dirname

// Подключаем библиотеку фреймворка
const express = require("express")
const server = express()

// Защитные заголовки
const helmet = require("helmet")
server.use(helmet())

// Для получения подробной информации об ip
const expressIp = require("express-ip")
server.use(expressIp().getIpInfoMiddleware)

// Ограничение количества запросов от одного ip
const expressRateLimit = require("express-rate-limit")
const limiterGuard = expressRateLimit({
    windowMs: 1 * 60 * 1000, // 1 минут
    max: 100, // максимальное количество запросов, которое может послать каждый ip за 'windowMs' времени, после чего он получит 429
    message: "Too many requests. You are blocked."
})

// Указываем шаблонизатор
server.set("view engine", "ejs")

// Указываем папку со статическими файлами (.html / .css / .js)
server.use("/resources", express.static("resources"))

// Для взятия элементов из тела запроса
server.use(express.urlencoded({ extended: false }))

// Подключаемся к MySQL
const mysql = require("./db/mysql")
mysql.init()

// Сессии
const mysqlSession = require("express-mysql-session")
const mysqlStore = mysqlSession({
    schema: {
        tableName: "sessions",
        columnNames: {
            session_id: "session_id",
            expires: "expires",
            data: "data"
        }
    }
}, mysql.connection)

const expressSession = require("express-session")
server.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mysqlStore,
    cookie: {
        expires: 60 * 60 * 1000 // 1 час
    }
}))

// Инициализируем passport.js
const passportConfig = require("./helpers/passport-config")
server.use(passportConfig.passport.initialize())
server.use(passportConfig.passport.session())
passportConfig.init()

// Вывод ошибок авторизации
const flash = require("express-flash")
server.use(flash())

const constants = require("./helpers/constants").files

const multer = require("multer")
const multerUpload = multer({ dest: constants.DEFAULT_BUFFER_CATALOG })

const userMiddlewares = require("./middlewares/user")

// ! РЕНДЕРИНГ СТРАНИЦ

// Подключаем контроллеры
const pagesControllers = require("./controllers/pages")

// Группируем запросы
const pagesRoutes = express.Router()
server.use("/", limiterGuard, pagesRoutes)

// Главная страница
pagesRoutes.get("/", pagesControllers.indexController)
// Страница статьи
pagesRoutes.get("/article/:id", pagesControllers.articleController)
// Страница новости
pagesRoutes.get("/news/:id", pagesControllers.singleNewsController)
// Страница новостей
pagesRoutes.get("/news", pagesControllers.newsController)

// Страница регистрации (закрыта)
// pagesRoutes.get("/register", userMiddlewares.ipGuard, userMiddlewares.isNotLogged, pagesControllers.registerController)
// Страница авторизации 1 фактор
pagesRoutes.get("/login", userMiddlewares.isNotLogged, pagesControllers.loginController)
// Страница авторизации 2 фактор
pagesRoutes.get("/login-otp", userMiddlewares.isLogged, userMiddlewares.is2FANotLogged, pagesControllers.loginOtpController)

// Профиль
pagesRoutes.get("/profile", userMiddlewares.isLogged, userMiddlewares.is2FALogged, pagesControllers.profileController)

// ! АВТОРИЗАЦИЯ

// Подключаем контроллеры
const userControllers = require("./controllers/user")

// Группируем запросы
const userRoutes = express.Router()
server.use("/", userMiddlewares.ipGuard, limiterGuard, userRoutes)

// Авторизоваться 1 фактор
userRoutes.post("/login", userMiddlewares.isNotLogged, passportConfig.passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), userControllers.loginController)

// Авторизоваться 2 фактор
userRoutes.post("/login-otp", userMiddlewares.isLogged, userMiddlewares.is2FANotLogged, passportConfig.passport.authenticate("custom", {
    failureRedirect: "/login-otp",
    failureFlash: true
}), userControllers.loginOtpController)

// Выйти
userRoutes.post("/logout", userMiddlewares.isLogged, userMiddlewares.is2FALogged, userControllers.logoutController)

// ! ПОЛЬЗОВАТЕЛИ

// Регистрация пользователя
userRoutes.post("/user", userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isModerator, userControllers.registerController)

// Изменение пользователя
userRoutes.put("/user/:id", userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isModerator, userControllers.putUserController)
// Удаление пользователя
userRoutes.delete("/user/:id", userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isModerator, userControllers.deleteUserController)

// ! МЕНЮ

// Подключаем контроллеры
const menuControllers = require("./controllers/menu")

// Группируем запросы
const menuRoutes = express.Router()
server.use("/menu", userMiddlewares.ipGuard, limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, menuRoutes)

// Добавить элемент меню
menuRoutes.post("/", menuControllers.postMenu)
// Изменить элемент меню
menuRoutes.put("/:id", menuControllers.putMenu)
// Удалить элемент меню и все дочерние элементы
menuRoutes.delete("/:id", menuControllers.deleteMenu)

// ! СТАТЬИ

// Подключаем контроллеры
const articleControllers = require("./controllers/article")

// Группируем запросы
const articleRoutes = express.Router()

// Подключаем мидлвар для обработки посылаемых файлов
articleRoutes.use(multerUpload.single("docx"))

server.use("/article", userMiddlewares.ipGuard, limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, articleRoutes)

// Добавить статью
articleRoutes.post("/", articleControllers.postArticle)
// Изменить статью
articleRoutes.put("/:id", articleControllers.putArticle)
// Удалить статью
articleRoutes.delete("/:id", articleControllers.deleteArticle)
// Скачать статью
articleRoutes.post("/:id", articleControllers.postDownloadArticle)

// ! НОВОСТИ

// Подключаем контроллеры
const newsControllers = require("./controllers/news")

// Группируемм запросы
const newsRoutes = express.Router()

// Подключаем мидлвар для обработки посылаемых файлов
newsRoutes.use(multerUpload.single("docx"))

server.use("/news", userMiddlewares.ipGuard, limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, newsRoutes)

// Добавить новость
newsRoutes.post("/", newsControllers.postNews)
// Изменить новость
newsRoutes.put("/:id", newsControllers.putNews)
// Удалить новость
newsRoutes.delete("/:id", newsControllers.deleteNews)
// Скачать новость
newsRoutes.post("/:id", newsControllers.postDownloadNews)

// ! ПРЕДМЕТЫ

// Подключаем контроллеры
const subjectControllers = require("./controllers/subject")

// Группируемм запросы
const subjectRoutes = express.Router()

// Подключаем мидлвар для обработки посылаемых файлов
subjectRoutes.use(multerUpload.single("docx"))

server.use("/subject", limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isModerator, subjectRoutes)

// Добавить предмет
subjectRoutes.post("/", subjectControllers.postSubject)
// Изменить предмет
subjectRoutes.post("/:id", subjectControllers.putSubject)
// Удалить предмет
subjectRoutes.delete("/:id", subjectControllers.deleteSubject)

// ! МАТЕРИАЛЫ

// Подключаем контроллеры
const materialControllers = require("./controllers/material")

// Группируемм запросы
const materialRoutes = express.Router()

// Подключаем мидлвар для обработки посылаемых файлов
materialRoutes.use(multerUpload.single("docx"))

server.use("/material", limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isModerator, materialRoutes)

// Добавить материал
materialRoutes.post("/", materialControllers.postMaterial)
// Изменить материал
materialRoutes.post("/:id", materialControllers.putMaterial)
// Удалить материал
materialRoutes.delete("/:id", materialControllers.deleteMaterial)
// Скачать материал
materialRoutes.post("/:id", materialControllers.postDownloadMaterial)

// ! СЛАЙДЕРЫ главной страницы

// Подключаем контроллеры
const sliderImgControllers = require("./controllers/sliderImg")

// Группируемм запросы
const sliderImgRoutes = express.Router()

// Подключаем мидлвар для обработки посылаемых файлов
sliderImgRoutes.use(multerUpload.single("image"))

server.use("/slider", limiterGuard, userMiddlewares.isLogged, userMiddlewares.is2FALogged, userMiddlewares.isAdmin, sliderImgRoutes)

// Добавить картинку в слайдер
sliderImgRoutes.post("/", sliderImgControllers.postSliderImg)
// Изменить картинку в слайдере
sliderImgRoutes.put("/:sliderid/:id", sliderImgControllers.putSliderImg)
// Удалить картинку из слайдера
sliderImgRoutes.delete("/sliderImg/:id", sliderImgControllers.deleteSliderImg)

// Запускаем сервер
const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log("Server started at " + PORT + " port...")
})
