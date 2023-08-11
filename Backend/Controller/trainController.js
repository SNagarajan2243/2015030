const Train = require('./../Model/trainModel')

const handleError = (err,res) => {

    console.log(err)

    return res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
    })

}

exports.getAllTrains = async (req,res,next) => {

    try{

        // if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer') || !req.headers.authorization.split(' ')[1]){

        //     return res.status(401).json({
        //         status: 'error',
        //         message: 'Please login to continue'
        //     })

        // }

        const trains = await Train.find().sort({price: 1,departureTime: -1,seatsAvailable: -1,delayedBy: -1})

        if(!trains){
            return res.status(500).json({
                status: 'fail',
                message: 'No trains found'
            })
        }

        return res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: trains.length,
            data:{
                trains
            }
        })

    }
    catch(err){

        handleError(err,res)

    }
}

exports.getTrainById = async(req,res,next) => {

    try{

        const id = req.params.id

        const train = await Train.findOne({trainNumber: id})

        if(!train){

            return res.status(500).json({
                status: 'fail',
                message: 'No train found'
            })

        }

        return res.status(200).json({
            success: 'success',
            requestAt: req.requestTime,
            data: {
                train
            }
        })

    }
    catch(err){

        handleError(err,res)

    }
}
