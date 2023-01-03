import { useState } from 'react'
import React, { Component }  from 'react'
import '../assests/css/styles.css'
// import styled from 'styled-component'

const Todo = (props) => {
    const { size } = props;
    const [color, setColor] = useState('green');
    const MultiButton = {
        backgroundColor: `${color}`,
        border: `1px solid   ${color}`,
        fontSize: `${size}px`,
    }
    const changeColor = () => {
        setColor('red');
    }
    const resetColor = () => {
        setColor('green');
    }

//  const DescComponent = styled.h5`
//  color:orange;
//  `;
return (
    <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body" >
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a className="#" class="btn" onClick={changeColor}>Change Color</a>
            <a className="#" class="btn btn-primary" style={MultiButton}>Go somewhere</a>
            <a className="#" class="btn" onClick={resetColor}>Reset Color</a>
        </div>
    </div>
)
}

export default Todo;