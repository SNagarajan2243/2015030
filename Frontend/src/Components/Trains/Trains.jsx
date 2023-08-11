import Navbar from "../Navbar/Navbar"

import styles from './Trains.module.css'

import {useState,useEffect} from 'react'

import TrainBox from '../trainBox/trainBox'

const Trains = () => {
    
    const [isLoading,setIsLoading] = useState(true)

    const [trains,setTrains] = useState([])

    useEffect(()=>{
        const getTrainData = async () => {
            const response = await fetch('http://localhost:3000/api/v1/train/trains')
            const trainsData = await response.json()
            if(response.ok){
                console.log(trainsData)
                setTrains(trainsData.data.trains)
                setIsLoading(false)
                console.log(trains)
            }
            else{
                console.log(trainsData)   
            }
        }
        getTrainData()
    },[])
  return (
    <div>
      <Navbar />
      {isLoading && <div className={styles.wholePage}>Loading...</div>}
      {!isLoading && !trains.length && <div className={styles.wholePage}>No data found</div>}
      {!isLoading && trains && 
        // trains.map((train)=><TrainBox key={train.trainNumber} train={train}/>)
        <div className={styles.trainScheduleList}>
          <div className={styles.trainSchedule}>
              {
                trains.map((train,index)=><TrainBox key={index} train={train}/>)
              }
          </div>
        </div>
      }
    </div>
  )
}

export default Trains
