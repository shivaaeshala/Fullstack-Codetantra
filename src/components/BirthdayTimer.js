import React, { useEffect, useState } from "react";

const curr = new Date()
const targetDate = new Date(curr.getTime() + 6000)

const sytles = {
    continer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    timer: {
        display: "flex",
        flexDirection: "row",
        padding: "20px"
    },
    compo: {
        border: "2px black solid",
        borderRadius: 10,
        margin: 20,
        padding: 20,
    }
}

function BirthdayTimer() {
    const calculateTimeLeft = () => {
        const now = new Date()
        const difference = targetDate - now
        if(difference <= 0) {
            return null
        }
        return {
            days: Math.floor(difference / (1000*60*60*24)),
            hours: Math.floor(difference / (1000*60*60) % 24),
            minutes: Math.floor(difference / (1000*60) % 60),
            seconds: Math.floor(difference / 1000 % 60)
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = calculateTimeLeft()
            setTimeLeft(updatedTime)
        }, 1000)
        
        return () => {clearInterval(timer)}
    }, [])

    if(!timeLeft){
        return (
            <>
                <h2>Happy Birthday🎂🎉</h2>
            </>
        )
    }
    return (
        <div style={sytles.continer}>
            <h2>Countdown</h2>
            <div style={sytles.timer}>
                {/* <div style={sytles.compo}>
                    <h5>Days</h5>
                    <h2>{timeLeft.days}</h2>
                </div>
                <div style={sytles.compo}>
                    <h5>Hours</h5>
                    <h2>{timeLeft.hours}</h2>
                </div>
                <div style={sytles.compo}>
                    <h5>Minutes</h5>
                    <h2>{timeLeft.minutes}</h2>
                </div> */}
                <div style={sytles.compo}>
                    <h5>Seconds</h5>
                    <h2>{timeLeft.seconds}</h2>
                </div>
            </div>
        </div>
    )
    
}

export default BirthdayTimer