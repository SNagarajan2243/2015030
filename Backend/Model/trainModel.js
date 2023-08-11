const mongoose = require('mongoose')

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String,
    departureTime: Object,
    seatsAvailable: Object,
    price: Object,
    delayedBy: Number
})

const trainModel = mongoose.model('trainSchedule',trainSchema)

module.exports = trainModel

// const train = new trainModel({
//     trainName: "naruto Express",
//     trainNumber: '7',
//     departureTime: {
//         Hours: 7,
//         Minutes: 30,
//         Seconds: 0
//     },
//     searsAvailable: {
//         Sleeper: 4,
//         AC: 8,
//     },
//     price: {
//         Sleeper: 200,
//         AC: 482
//     },
//     delayedBy: 4

// })

// train.save().then((doc)=>{
//     console.log(doc)
// }
// ).catch((err)=>{
//     console.log(err)
// }
// )
