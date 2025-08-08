/** disable-eslint */
require("colors");

module.exports = {
    info: (...message) => {
        console.log("[INFO]".green, ...message);
    },
    warn: (...message) => {
        console.warn("[WARN]".yellow, ...message);
    },
    error: (...message) => {
        console.error("[ERROR]".red, ...message);
    }
};
