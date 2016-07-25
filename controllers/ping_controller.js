'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('awesome pong')
    }

    get routes() {
        return {
            'ping': 'pingHandler'
        }
    }
}

module.exports = PingController
