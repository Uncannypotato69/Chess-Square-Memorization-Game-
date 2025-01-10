import { useEffect, useState } from "react"

export const useCountDown = (returnTime, initialTime) => {

    const [time, setTime] = useState(() => {
        const { minutes, seconds, milliseconds } = returnTime(initialTime)
        return {minutes, seconds, milliseconds}
    })

    useEffect(() => {
        let customInterval = null;

        // Checks If there's time remaining or not
        if( time.minutes > 0 || time.seconds > 0 || time.milliseconds > 0){
            customInterval = setInterval(() => {
                setTime((prevTime) => {
                    let newMilliseconds = prevTime.milliseconds - 1
                    let newSeconds = prevTime.seconds
                    let newMinutes = prevTime.minutes

                    if(newMilliseconds < 0){
                        newMilliseconds = 9;
                        newSeconds -= 1
                    }

                    if (newSeconds < 0) {
                        newSeconds = 59;
                        newMinutes -= 1;
                      }

                      if(newMinutes < 0){
                        clearInterval(customInterval)
                        return {minutes: 0, seconds: 0, milliseconds: 0}
                      }

                    return {
                        minutes: newMinutes,
                        seconds: newSeconds,
                        milliseconds: newMilliseconds
                    }
                })
            }, 100);

            return () => {
                if(customInterval){
                    clearInterval(customInterval)
                }
            }
        }
    }, [])

    return `${time.minutes}:${time.seconds.toString().padStart(2, '0')}.${time.milliseconds.toString()}`
}