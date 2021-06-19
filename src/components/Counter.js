import React from 'react';
import { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleClickIncrement = () => {
        setCounter(counter + 1);
    }

    const handleClickDecrement = () => {
        setCounter(counter - 1);
    }

    const handleClickReset = () => {
        setCounter(0);
    }

    return (
        <section>
            <p>Counter</p>
            <div className='counter'>{counter}</div>
            <div className='buttons'>
                <button id='button' onClick={handleClickIncrement}> + </button>
                <button id='button' onClick={handleClickDecrement}> - </button>
                <button id='button' onClick={handleClickReset}> Reset </button>
            </div>
        </section>
    );
};

export default Counter;