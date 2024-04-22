const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    white: "\x1b[37m"
}

const logMessage = (color, message) => {
    if (color in colors) {
        const coloredMessage = colors[color] + message + colors.reset;
        console.log(coloredMessage);
    }
}

module.exports = {logMessage}