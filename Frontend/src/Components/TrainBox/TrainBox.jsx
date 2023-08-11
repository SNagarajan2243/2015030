import styles from './TrainBox.module.css'

const TrainBox = ({train}) => {

    const trainName = (train.trainName).replace('Exp','Express')

    const { trainNumber,seatsAvailable,price,departureTime,delayedBy } = train

    return (
        <div className={styles.Trainbox}>
            <div className={styles.TrainNameNumberWrapper}>
                <div className={styles.TrainNameAndNumber}>
                        <div>
                            <p className={styles.heading}>Train Name:</p> {trainName} 
                        </div>
                        <div>
                            <p className={styles.heading}>Train Number:</p> {trainNumber}
                        </div>
                </div>
            </div>
            <div className={styles.departuredelaywrapper}>
                <div className={styles.departuredelay}>
                        <div>
                            <p className={styles.departureheading}>Departure Time: </p> {`${departureTime.Hours}:${departureTime.Minutes}`} 
                        </div>
                        <div>
                            <p className={styles.delayheading}>Delayed By:</p> {`${delayedBy} minutes`}
                        </div>
                </div>
            </div>
            <div className={styles.TrainSeatAndPriceWholeWrapper}>
                <div className={styles.TrainSeatWrapper}>
                    <div className = {styles.TrainSeat}>
                        <p className={styles.infoheading}>Seats Available:</p>
                        <div className={styles.sleeperandacdetail}>
                            <p>Sleeper: {seatsAvailable.sleeper}</p>
                            <p>AC: {seatsAvailable.AC}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.TrainPriceWrapper}>
                    <div className = {styles.TrainPrice}>
                        <p className={styles.infoheading}>Price Available:</p>
                        <div className={styles.sleeperandacdetail}>
                            <p>Sleeper: {price.sleeper}</p>
                            <p>AC: {price.AC}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainBox
