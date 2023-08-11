const express = require('express')

const router = express.Router()

const {getAllTrains,getTrainById} = require('./../Controller/trainController')

router.route('/trains').get(getAllTrains)

router.route('/trains/:id').get(getTrainById)

module.exports = router