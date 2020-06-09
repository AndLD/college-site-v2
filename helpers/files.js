const mammoth = require("mammoth")
const constants = require("./constants").files

exports.convertDocxToHtml = (filename) => {
    return new Promise((resolve) => {
        mammoth.convertToHtml({ path: constants.pathJoin(constants.DEFAULT_BUFFER_CATALOG, filename) }).then((result) => {
            resolve(result.value)
        })
    })
}