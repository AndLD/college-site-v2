// Подключаем модели
const menuModel = require("../models/menu")
const articleModel = require("../models/article")
const newsModel = require("../models/news")
const sliderImgsModel = require("../models/sliderImg")
const imageModel = require("../models/image")
const userModel = require("../models/user")
const subjectModel = require("../models/subject")
const materialModel = require("../models/material")

// Подключаем хелперы для страниц
var pagesHelpers = require("../helpers/pages")

const fs = require("fs")
const constants = require("../helpers/constants").files
const dirname = require("../index").dirname

const TokenGenerator = require("uuid-token-generator")
const token = new TokenGenerator()

const btoa = require("btoa")

// ! ОБЩИЕ СТРАНИЦЫ

// Главная страница
exports.indexController = async (req, res) => {
    // Получаем меню
    var selectedResult = await menuModel.selectMenu()
    if (selectedResult.error) {
        res.sendStatus(400)
    }

    var menu = pagesHelpers.adaptateMenu(selectedResult.data)

    // Получаем последние новости
    var selectedNewsResult = await newsModel.selectNews(3)
    if (selectedNewsResult.error) {
        res.sendStatus(400)
    }

    var news = pagesHelpers.adaptateNews(selectedNewsResult.data)



    // ! Получение картинок для слайдеров

    // Получаем информацию о картинках для слайдеров
    let selectedSliderImgsResult = await sliderImgsModel.selectSliderImgs()
    if (selectedSliderImgsResult.error) {
        return res.sendStatus(400)
    }

    let sliderImgsInfo = selectedSliderImgsResult.data

    let whereString = "WHERE"
    let ids = ""
    for (let i = 0; i < sliderImgsInfo.length; i++) {
        whereString += " id = " + sliderImgsInfo[i].imageId + " or"
        ids += sliderImgsInfo[i].imageId + ","
    }
    
    // Получение картинок для слайдеров
    let selectedImagesResult = await imageModel.selectImages( (whereString != "WHERE" ? whereString.slice(0, -3) : null), (ids != "" ? ids.slice(0, -1) : null) ) // slice - обрезаем " and" в конце строки
    if (selectedImagesResult.error) {
        return res.sendStatus(400)
    }
    
    let sliderImgs = selectedImagesResult.data

    var slider1Imgs = []
    var slider2Imgs = []
    for (let i = 0; i < sliderImgsInfo.length; i++) {
        if (sliderImgsInfo[i].sliderId == 1) {
            slider1Imgs.push(sliderImgs[i])
        }

        if (sliderImgsInfo[i].sliderId == 2) {
            slider2Imgs.push(sliderImgs[i])
        }
    }

    res.render("index", { menu: menu, news: news, slider1Imgs: slider1Imgs, slider2Imgs: slider2Imgs })
}

// Страница статьи
exports.articleController = async (req, res) => {
    // Получаем статью
    var selectedArticleResult = await articleModel.selectArticleById(req.params.id)
    if (selectedArticleResult.error) {
        return res.sendStatus(400)
    }
    if (selectedArticleResult.data == null) {
        return res.sendStatus(204)
    }

    var article = selectedArticleResult.data
    article.type = "article"

    // Если статья представлена в виде PDF, будем открывать ее в отдельной вкладке
    if (article.viewMode == "pdf" && article.fileFormat == "pdf") {
        res.contentType("application/pdf")
        res.send(article.docx)
        return
    }
    



    // Получаем меню
    var selectedMenuResult = await menuModel.selectMenu()
    if (selectedMenuResult.error) {
        res.sendStatus(400)
    }

    var menu = pagesHelpers.adaptateMenu(selectedMenuResult.data)

    // Получаем последние новости
    var selectedNewsResult = await newsModel.selectNews(8)
    if (selectedNewsResult.error) {
        res.sendStatus(400)
    }

    var news = pagesHelpers.adaptateNews(selectedNewsResult.data)




    // Определение, к какому элементу главного меню относится данная статья
    var currentMainMenu
    
    for(var i = 0; i < menu.main.length; i++) {

        if (currentMainMenu != null) break

        var splittedMainElem = menu.main[i].link.split("/")
        if (splittedMainElem[splittedMainElem.length - 1] == article.id) {
            currentMainMenu = menu.main[i]
            break
        }

        for(var j = 0; j < menu.drop.length; j++) {

            if (menu.drop[j].parentId == menu.main[i].id) {

                if (currentMainMenu != null) break

                var splittedDropElem = menu.drop[j].link.split("/")
                if (splittedDropElem[splittedDropElem.length - 1] == article.id) {
                    currentMainMenu = menu.main[i]
                    break
                }

                for(var k = 0; k < menu.deepDrop.length; k++) {

                    if (menu.deepDrop[k].parentId == menu.drop[j].id) {
                        
                        if (currentMainMenu != null) break
                    
                        var splittedDeepDropElem = menu.deepDrop[k].link.split("/")
                        if (splittedDeepDropElem[splittedDeepDropElem.length - 1] == article.id) {
                            currentMainMenu = menu.main[i]
                            break
                        }
                    }

                }
            }
        }
    }
    
    res.render("page", { menu: menu, currentMainMenu: currentMainMenu, data: article, news: news })
}

// Страница новости
exports.singleNewsController = async (req, res) => {
    // Получаем меню
    var selectedMenuResult = await menuModel.selectMenu()
    if (selectedMenuResult.error) {
        res.sendStatus(400)
    }

    var menu = pagesHelpers.adaptateMenu(selectedMenuResult.data)

    // Получаем последние новости
    var selectedNewsResult = await newsModel.selectNews(8)
    if (selectedNewsResult.error) {
        res.sendStatus(400)
    }

    var news = pagesHelpers.adaptateNews(selectedNewsResult.data)

    // Получаем новость
    var selectedSingleNewsResult = await newsModel.selectNewsById(req.params.id)
    if (selectedSingleNewsResult.error) {
        return res.sendStatus(400)
    }
    if (selectedSingleNewsResult.data == null) {
        return res.sendStatus(204)
    }

    var singleNews = selectedSingleNewsResult.data
    singleNews.addDate = pagesHelpers.adaptateDate(singleNews.addDate)
    singleNews.type = "news"

    res.render("page", { menu: menu, data: singleNews, news: news })
}

// Страница новостей
exports.newsController = async (req, res) => {
    // Получаем меню
    var selectedMenuResult = await menuModel.selectMenu()
    if (selectedMenuResult.error) {
        res.sendStatus(400)
    }

    var menu = pagesHelpers.adaptateMenu(selectedMenuResult.data)

    // Получаем новости
    var selectedNewsResult = await newsModel.selectNews(50)
    if (selectedNewsResult.error) {
        return res.sendStatus(400)
    }

    var news = pagesHelpers.adaptateNews(selectedNewsResult.data)

    res.render("news", { menu: menu, news: news })
}

exports.contactsController = async(req, res) => {
    // Получаем меню
    var selectedMenuResult = await menuModel.selectMenu()
    if (selectedMenuResult.error) {
        res.sendStatus(400)
    }

    var menu = pagesHelpers.adaptateMenu(selectedMenuResult.data)

    res.render("contacts", { menu: menu })
}

// ! РЕГИСТРАЦИЯ И АВТОРИЗАЦИЯ

// Страница регистрации
exports.registerController = (req, res) => {
    res.render("user/register", { message: null })
}

// Страница авторизации 1 фактор
exports.loginController = (req, res) => {
    res.render("user/login")
}

// Страница авторизации 2 фактор
exports.loginOtpController = (req, res) => {
    res.render("user/login-otp")
}

// ! СЛУЖЕБНЫЕ СТРАНИЦЫ

// Профиль
exports.profileController = async (req, res) => {
    let articles
    let menu
    let news
    if (req.user.userrole == "admin") {
        // Получаем меню сайта
        const selectedMenuResult = await menuModel.selectMenu()
        if (selectedMenuResult.error) {
            res.sendStatus(400)
        }

        menu = pagesHelpers.adaptateMenu(selectedMenuResult.data)

        // Получаем статьи
        const selectedArticlesResult = await articleModel.selectArticles()
        if (selectedArticlesResult.error) {
            return res.sendStatus(400)
        }

        articles = selectedArticlesResult.data

        // Получаем новости
        const selectedNewsResult = await newsModel.selectNewsWithoutImgs(200)
        if (selectedNewsResult.error) {
            return res.sendStatus(400)
        }

        news = pagesHelpers.adaptateNews(selectedNewsResult.data)

        // // ! Получение картинок для слайдеров

        // // Получаем информацию о картинках для слайдеров
        // let selectedSliderImgsResult = await sliderImgsModel.selectSliderImgs()
        // if (selectedSliderImgsResult.error) {
        //     return res.sendStatus(400)
        // }

        // let sliderImgsInfo = selectedSliderImgsResult.data

        // let whereString = "WHERE"
        // let ids = ""
        // for (let i = 0; i < sliderImgsInfo.length; i++) {
        //     whereString += " id = " + sliderImgsInfo[i].imageId + " or"
        //     ids += sliderImgsInfo[i].imageId + ","
        // }
        
        // // Получение картинок для слайдеров
        // let selectedImagesResult = await imageModel.selectImages( (whereString != "WHERE" ? whereString.slice(0, -3) : null), (ids != "" ? ids.slice(0, -1) : null) ) // slice - обрезаем " and" в конце строки
        // if (selectedImagesResult.error) {
        //     return res.sendStatus(400)
        // }
        
        // let sliderImgs = selectedImagesResult.data

        // var slider1Imgs = []
        // var slider2Imgs = []
        // for (let i = 0; i < sliderImgsInfo.length; i++) {
        //     if (sliderImgsInfo[i].sliderId == 1) {
        //         slider1Imgs.push(sliderImgs[i])
        //     }

        //     if (sliderImgsInfo[i].sliderId == 2) {
        //         slider2Imgs.push(sliderImgs[i])
        //     }
        // }
    }

    let users
    if (req.user.userrole == "admin" || req.user.userrole == "moderator") {
        // Получаем пользователей
        const selectedUsersResult = await userModel.selectUsers( (req.user.userrole == "admin" ? null : "group") )
        if (selectedUsersResult.error) {
            return res.sendStatus(400)
        }

        users = selectedUsersResult.data

        // // Получаем предметы
        // var selectedSubjectsResult = await subjectModel.selectSubjects()
        // if (selectedSubjectsResult.error) {
        //     return res.sendStatus(400)
        // }

        // var subjects = selectedSubjectsResult.data
    }

    // if (req.user.userrole == "admin" || req.user.userrole == "moderator" || req.user.userrole == "group") {
    //     // Получаем материалы
    //     var selectedMaterialsResult = await materialModel.selectMaterials(
    //         null, // группа
    //         null, // предмет
    //         null, // семестр
    //         null // тип материала (лекция / ЛР / ПР / ...)
    //     )
    //     if (selectedMaterialsResult.error) {
    //         return res.sendStatus(400)
    //     }

    //     var materials = selectedMaterialsResult.data
    // }

    res.render("profile", { user: req.user, menu: menu, articles: articles, news: news, /*slider1Imgs: slider1Imgs, slider2Imgs: slider2Imgs,*/ users: users, /*subjects: subjects, materials: materials*/ })
}