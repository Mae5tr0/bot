'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class WhoisController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    whoisHandler($) {
      let name = $.query.name
      if (name === 'Anatoliy') {
        $.sendMessage("Best designer of Barnaul")
      } else if (name === 'Kirill')  {
        $.sendMessage('Cool man')
      } else {
        $.sendMessage("It doesn't matter")
      }
    }

    get routes() {
        return {
            '/whois :name': 'whoisHandler'
        }
    }
}

module.exports = WhoisController
