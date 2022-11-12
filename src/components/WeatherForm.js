import { useState } from "react";
import classes from './WeatherForm.module.css';

const WeatherForm = ({onChangeCity}) => {

    const [city, setCity] =useState('');

    const onChange = (e) => {
        const value = e.target.value;

        if (value !== '') {
        setCity(value)}
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }

    return <form className={classes.container} onSubmit={submitHandler}>
        <input className={classes.input} type='text' onChange={onChange} placeholder='Type a city...' />
    </form>
}

export default WeatherForm;