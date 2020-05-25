exports.adaptateMenu = (menu) => {
    // Сортируем меню в массивы по уровню: main / drop / deep drop
    menuStruct = { main: [], drop: [], deepDrop: [], footer: [] }

    for (var i = 0; i < menu.length; i++) {
        // Ищем main menu
        if (menu[i].parentId == null) {
            menuStruct.main.push(menu[i])
            if (menu[i].footer) menuStruct.footer.push(menu[i])


            // Ищем drop menu
            for (var j = 0; j < menu.length; j++) {

                if (menu[j].parentId == menu[i].id) {
                    menuStruct.drop.push(menu[j])
            
                    // Ищем deep drop menu
                    for (var k = 0; k < menu.length; k++) {

                        if (menu[k].parentId == menu[j].id) {
                            menuStruct.deepDrop.push(menu[k])
                        }
                    }
                }
            }

        }

    }

    return menuStruct
}

exports.adaptateNews = (news) => {
    if (news.length != 0)
    for(var i = 0; i < news.length; i++) {
        news[i].addDate = adaptateDate(news[i].addDate)
    }

    return news
}

function adaptateDate(date) {
    date = new Date(date)
        
    return date.getFullYear() + "-" + 
    (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + 
    (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate())
}
exports.adaptateDate = adaptateDate