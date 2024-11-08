import React, { useEffect, useState } from 'react'
import moment from 'moment-jalaali';
const dayWeek=[
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه"
];
const month=[
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
    
];



const PesrsianDate=()=> {
    const [date,setdate]=useState();
    const [time,setTime]=useState();

    useEffect(()=>{
        let m= moment();
        let finalDate= `${dayWeek[m.day()]}  ${m.jDate()} ${month[m.jMonth()]} ${m.jYear()}`
        setdate(finalDate);
        setTime(m.format("HH:mm"));
    },[])
  return (
    <>
        <h5 className='text-xl font-bold'>{date}</h5>
        <h5 className='text-lg font-bold'>{time}</h5>
    </>
  )
}

export default PesrsianDate;
