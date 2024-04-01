require("dotenv").config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const weblink = "https://main--testwebapppm.netlify.app/";
bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup:
    {
        keyboard: 
            [[{ 
                text: "web app", web_app: {url: weblink}
            }]],
    },
    })
);

bot.launch()

