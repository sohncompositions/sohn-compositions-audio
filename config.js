const whiteListedOrigins = process.env.ORIGIN_WHITELIST !== undefined ?
    process.env.ORIGIN_WHITELIST.split(' ') :
    [];
const whiteListedReferers = process.env.REFERER_WHITELIST !== undefined ?
    process.env.REFERER_WHITELIST.split(' ') :
    [];

module.exports = {
    whiteListedOrigins,
    whiteListedReferers
}