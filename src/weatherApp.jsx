
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getWeatherInfo from './redux/weateher/weatherActions';
import PesrsianDate from './components/pesrsianDate';

 const WeatherApp=()=> {

const {loading,data,error}=useSelector(state=>state);
const [query, setQuery]=useState('');
const [imgWeather, setImgW]=useState('');

const dispatch=useDispatch();

const getcity=(e)=>{
  e.preventDefault();
  dispatch(getWeatherInfo(query));
  console.log(data.main);
  
}
  useEffect(()=>{

    if (!data?.main) {
      return
    }
    let tempp=Math.round(data.main.temp)-273;
    let status=data.weather[0].main;
    console.log(tempp);
    
    
    if (status==='Clear') {
      setImgW('suny');
    console.log(imgWeather);

    }else if (status==="Rain") {
      setImgW('rain');
    console.log(imgWeather);
    }else if (status==="Snow") {
      setImgW('snow');
    console.log(imgWeather);
    }else if (status==="Clouds") {
      setImgW('cludy');
    console.log(imgWeather);
    }
  
    
  },[data])
    
  return (
  
    <div className='flex flex-col justify-center items-center p-4'>
{/* header */}
<div className='w-full flex justify-between'>
    <div className='flex'>
    <i className='fa fa-map-marker text-2xl text-white px-4'></i>
    <span className='text-2xl font-bold text-white'>
      <form onSubmit={getcity}>
        <input type="text" className=' w-32 bg-transparent outline-none border-b-2 border-white' value={query} onChange={e=>setQuery(e.target.value)} />
      </form>
    </span>
    </div>
  <div className='w- h-11'></div>
</div>
{/* body */}
        <div className='flex flex-col justify-center items-center'>
            {/* images */}
    <div>
        <img src={`/images/${imgWeather}.png`} alt="" />
    </div>
{
  loading ? (
    <div className='spiner-border'>
    </div>
  ) : data.main ? (
    <>
<h2 className='text-[5rem]'>{Math.round(data.main.temp) -273} <span>°c</span></h2>
<h4 className='text-[2rem] font-bold'>{data.weather[0].main}</h4>
    
    </>

  ) : error ? (
<h4 className='text-[2rem] font-bold'>نام شهر یا کشور را  به درستی وارد کنید</h4>

  ) : (
<h4 className='text-[2rem] font-bold'>مکان مورد نظر را جستجو کنید</h4>

  )



}
<PesrsianDate/>
</div>




    </div>

  )
}

export default WeatherApp;