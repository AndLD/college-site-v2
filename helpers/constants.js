const path = require('path')

exports.files = {
    DEFAULT_BUFFER_CATALOG: path.join("resources", "buffer"),
    pathJoin: path.join
}

exports.common = {
    ALLOWED_HOSTS: process.env.ALLOWED_HOSTS.split(",")
}