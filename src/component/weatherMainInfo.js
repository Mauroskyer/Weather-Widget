
import style from "./weitherMainInfo.module.css";

export default function WeatherMainInfo({weather}) {
    return(
        <div className={style.mainInfo}>
            <div className={style.city}>{weather?.location.name}</div>
            <div className={style.country}>{weather?.location.country}</div>
            <div className={style.row}>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} />
                </div>
                <div className={style.weatherConditions}>
                    <div className={style.condition}>{weather?.current.condition.text}</div>
                    <div className={style.current}>{weather?.current.temp_c}</div>
                </div>
            </div>
            <iframe
            title= "map"
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d997.4506137737776!2d${weather?.location.lon}!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1662152444386!5m2!1ses!2sec`}
            width="100%"
            height="450"
            style= {{border: 0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" >
            </iframe>
        </div>
    )

}