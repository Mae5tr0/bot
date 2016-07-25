'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class HelpController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    helpHandler($) {
        $.sendMessage("Supported commands: /help, /start, /ping, more awesome commands soon")
    }

    get routes() {
        return {
            'help': 'helpHandler'
        }
    }
}

module.exports = HelpController
