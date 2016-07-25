'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    startHandler($) {
        $.sendMessage("Hi, this awesome bot can do everything what you want, enjoy")
    }

    get routes() {
        return {
            '/start': 'startHandler'
        }
    }
}

module.exports = StartController
