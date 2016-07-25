'use strict'

const config = require('./config')

const Telegram = require('telegram-node-bot')
const tg = new Telegram.Telegram(config.telegramToken)

const PingController = require('./controllers/ping_controller')
const HelpController = require('./controllers/help_controller')
const StartController = require('./controllers/start_controller')

tg.router
    .when(['ping'], new PingController())
    .when(['help'], new HelpController())
    .when(['start'], new StartController())

console.log('started')    
