
const isLogged = (req, res, next)=>{

    if(req.session.user === undefined){
        res.redirect("/auth/login")
        req.app.locals.isUserActive = false
        return
    }
    next()

}

const isAdmin = (req, res, next) => {
    if (req.session.user.role === "admin") {
        next()
    } else {
        req.app.locals.isUserActive = false
        res.redirect('/auth/login')
        return
    }
}

module.exports = {
    isLogged,
    isAdmin
}