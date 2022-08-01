const router = require('express').Router()
const Bike = require('../models/Bike.model')
const User = require('../models/User.model')


// GET "/bikes" => lista todas las bicicletas por name
router.get('/allBikes', async (req, res, next) => {
   try {
      if(req.session.user === undefined){
         req.app.locals.isUserActive = false
         res.redirect("/auth/login")
      }

      const allBikes = await Bike.find()
      res.render('bikes/allBikes.hbs', {allBikes})
   } catch (error) {
      next(error)
   }
})


router.post('/allBikes/precio-descendente', async (req, res, next) => {
   try {
      if(req.session.user === undefined){
         req.app.locals.isUserActive = false
         res.redirect("/auth/login")
      }

      const allBikes = await Bike.find().sort({price: -1})
      res.render('bikes/allBikes.hbs', {allBikes})

   } catch (error) {
      next(error)
   }
})

router.post('/allBikes/precio-ascendente', async (req, res, next) => {
   try {
      if(req.session.user === undefined){
         req.app.locals.isUserActive = false
         res.redirect("/auth/login")
      }

      const allBikes = await Bike.find().sort({price: 1})
      res.render('bikes/allBikes.hbs', {allBikes})

   } catch (error) {
      next(error)
   }
})

router.post('/allBikes/peso-descendente', async (req, res, next) => {
   try {
      if(req.session.user === undefined){
         req.app.locals.isUserActive = false
         res.redirect("/auth/login")
      }

      const allBikes = await Bike.find().sort({weight: -1})
      res.render('bikes/allBikes.hbs', {allBikes})

   } catch (error) {
      next(error)
   }
})

router.post('/allBikes/peso-ascendente', async (req, res, next) => {
   try {
      if(req.session.user === undefined){
         req.app.locals.isUserActive = false
         res.redirect("/auth/login")
      }

      const allBikes = await Bike.find().sort({weight: 1})
      res.render('bikes/allBikes.hbs', {allBikes})

   } catch (error) {
      next(error)
   }
})


router.get('/:bikeId', async (req, res, next) => {
   const { bikeId } = req.params
   try {
      const oneBike = await Bike.findById(bikeId).populate("owner")
      res.render('bikes/oneBike.hbs', {oneBike, bikeId})
   } catch (error) {
      next(error)
   }
})


module.exports = router