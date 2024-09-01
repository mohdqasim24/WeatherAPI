// const apiKey='380a9a1054adf5e4769f10ddad03ad00'

const getWeather=async(city)=>{
    

    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=380a9a1054adf5e4769f10ddad03ad00`)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    })
}

export default getWeather;