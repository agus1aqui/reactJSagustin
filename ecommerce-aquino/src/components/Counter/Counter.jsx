import React from 'react'

const Counter = ({ subtract, counter, add, onAdd }) => {
    return (
        <>
            <div><button onClick={subtract}>subtract</button></div>
            <div>{counter}</div>
            <div><button onClick={add}>add</button></div>

            <div><button onClick={() => onAdd(count)}>Place Order</button></div>
        </>
    )
}

export default Counter