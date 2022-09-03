import { useState } from "react";

import style from "./weatherForm.module.css"

export default function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState("");

    function handleChange(event) {
        const value = event.target.value;

        /* Will take a default value */
        if(value !== "") {
            setCity(value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        /* Props which is a function that receives the value of the imput */
        onChangeCity(city)
    }
    return(
        <form onSubmit={handleSubmit} className={style.container}>
            <input type="text" onChange={handleChange} className={style.input}/>
        </form>
    )
}