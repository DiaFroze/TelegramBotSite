from telegram import Update, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "8066084245:AAGdVNL-gAgjYeXxjb9o7AzwaB9-_xkNqw0"
WEBAPP_URL = "https://6852960ed89750a004cf6f3b--dynamic-stardust-3e7453.netlify.app/"  # Замени на свою ссылку

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[
        KeyboardButton("Открыть веб-приложение", web_app=WebAppInfo(url=WEBAPP_URL))
    ]]
    reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    await update.message.reply_text("Привет! Нажми кнопку ниже 👇", reply_markup=reply_markup)

# Команда /ping
async def ping(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Понял, соединение есть ✅")

# Основной запуск
def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ping", ping))

    print("Бот запущен ✅. Нажми Ctrl+C чтобы остановить.")
    app.run_polling()

if __name__ == "__main__":
    main()
