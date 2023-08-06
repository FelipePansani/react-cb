import { useState, useEffect } from "react";

function useDate() {
    let [today, setToday] = useState();
    let [yesterday, setYesterday] = useState();

    useEffect(() => {

        function getWorkDays() {

            function getYesterdayDate() {
                return new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
            }

            function getTwoDaysBefore() {
                return new Date(new Date().getTime() - 48 * 60 * 60 * 1000);
            }

            function getThreeDaysBefore() {
                return new Date(new Date().getTime() - 72 * 60 * 60 * 1000);
            }

            let date = new Date();
            let weekDay = String(date).split(' ')[0]
            let today;
            let yesterday;

            if (weekDay == 'Sat') {
                today = getYesterdayDate();
                yesterday = getTwoDaysBefore();
            }
            if (weekDay == 'Sun') {
                today = getTwoDaysBefore();
                yesterday = getThreeDaysBefore();
            }
            if (weekDay == 'Mon') {
                today = date;
                yesterday = getThreeDaysBefore();
            }

            let newToday = new Date(today).toLocaleDateString().split('/');
            let a = newToday[0]
            newToday[0] = newToday[1]
            newToday[1] = a
            newToday = newToday.join('-')

            let newYesterday = new Date(yesterday).toLocaleDateString().split('/');
            let b = newYesterday[0]
            newYesterday[0] = newYesterday[1]
            newYesterday[1] = b
            newYesterday = newYesterday.join('-')

            return {newToday, newYesterday}
        }

        setToday(getWorkDays().newToday)
        setYesterday(getWorkDays().newYesterday)
    }, [])

    return { today, yesterday }
}

export default useDate;