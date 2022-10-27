module.exports = () => (req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*')
    res.setHeaders('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE')
    res.setHeaders('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
}