const TelegramBot = require('node-telegram-bot-api');
const token = '7568357254:AAG93FU-wPTekjavywIXfWFners-PsCGYKM'; // Thay 'YOUR_BOT_TOKEN' bằng token của bot từ BotFather
const bot = new TelegramBot(token, { polling: true });



// Xử lý sự kiện mỗi khi bot nhận được tin nhắn
let messageCount = 0;

bot.on('message', (msg) => {
    messageCount++;
    bot.sendMessage(msg.chat.id, `ok tin ${messageCount}`);
});
