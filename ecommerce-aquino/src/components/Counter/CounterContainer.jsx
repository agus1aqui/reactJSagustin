import React, { useState } from 'react'
import Counter from './Counter';


const CounterContainer = ({ onAdd }) => {

    const [counter, setCounter] = useState(1);

    //add
    const add = () => {
        setCounter(counter + 1);
    };
    //restar
    const subtract = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            alert("you cant subtract more")
        }
    };



    return (
        <><Counter counter={counter} add={add} subtract={subtract} onAdd={onAdd} /></>
    )
}

export default CounterContainer