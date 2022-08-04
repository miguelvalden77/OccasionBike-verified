const Comment = require ('../models/Comment.model.js')
const User = require ('../models/User.model.js')
const { isLogged } = require("../middlewares/auth")

const router = require("express").Router()


router.post('/:bikeId/create', isLogged, async (req, res, next) => {
   const { bikeId } = req.params 
   const { message } = req.body
   try {
      await Comment.create({
         creator: req.session.user._id, 
         bike: bikeId,
         text: message
      })
      res.redirect(`/bikes/${bikeId}`)
   } catch (error) {
      next (error)
   }
})

module.exports = router