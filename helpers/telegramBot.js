const Telegraf = require("telegraf")
const userModels = require("../models/user")

const bot = new Telegraf(process.env.telegramBotToken)

bot.command("enable", async (ctx) => {
    var telegramId = ctx.update.message.from.id
    var telegramSecret = ctx.update.message.text.split(" ")[1]

    var updatedResult = await userModels.enableTwoFactor(telegramId, telegramSecret)
    
    if (updatedResult.error) {
        return ctx.reply("Internal error.")
    }

    if (updatedResult.data == 0) {
        return ctx.reply("User with that telegram secret key does not exist or 2FA is already enabled or user does not has right to manage 2FA.")
    }
    
    ctx.reply("Done!")
})

bot.command("disable", async (ctx) => {
    var telegramSecret = ctx.update.message.text.split(" ")[1]

    var updatedResult = await userModels.disableTwoFactor(telegramSecret)

    if (updatedResult.error) {
        return ctx.reply("Internal error.")
    }

    if (updatedResult.data == 0) {
        return ctx.reply("User with that telegram secret key does not exist or 2FA is already disabled or user does not has right to manage 2FA.")
    }

    ctx.reply("Done!")
})

bot.launch()

exports.sendTwoFactorCode = (telegramId, code) => {
    bot.telegram.sendMessage(telegramId, code)
}