let os = require('os');

exports.files = {
    DEFAULT_BUFFER_CATALOG: os.platform() == "win32" ? "\\resources\\buffer\\" : "/resources/buffer/"
}

exports.common = {
    ALLOWED_HOSTS: process.env.ALLOWED_HOSTS.split(",")
}