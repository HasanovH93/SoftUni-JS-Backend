const { verifyToken } = require("../services/user");


module.exports = () => (req, res , next) => {
    const token = req.cookies.token;
    if(token){
        
        try {
            const userData = verifyToken(token);
            req.user = userData;
            
        } catch (error) {
            console.log('Invalid Token')
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }
    next();
}