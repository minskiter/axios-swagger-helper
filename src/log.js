/** disable-eslint */
require("colors");
//test

module.exports = {
  info: (...message) => {
    for (let key in message) {
      console.log("[INFO]".green, message[key]);
    }
  },
  warn: (...message) => {
    for (let key in message) {
      console.log("[WARN]".yellow, message[key]);
    }
  },
  error: (...message) => {
    for (let key in message) {
      console.log("[ERROR]".red, message[key]);
    }
  }
};
