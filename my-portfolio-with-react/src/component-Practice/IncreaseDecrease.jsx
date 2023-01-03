import React, { useState } from "react";
function IncreaseDecrease() {

    const [count, setCount] = useState(0);
    const [style, setStyle] = useState({
        color:'black',
        fontSize:'12px'

    });
    const increase = () => {
        setCount((count)=>{
            const val = count+1;
            changeStyle(val);
            return val;

        });
    }
    const decrease = () => {
        setCount((count)=>{
            const val = count-1;
            changeStyle(val);
            return val;
        });

    }
    const changeStyle = (val) => {
        if(val>=0){
            setStyle({
                color:'green',
                fontSize: `${val+12}px`
            })
        }
        else{
            setStyle({
                color:'red',
                fontSize: `${-val+12}px`
            })
            
        }
    }


    return (
        <div className="buttonContainer" style={{ margin: '20px' }}>
            <button className="btn btn-success" onClick={increase} >Inc+</button>
            <p style={style}>{count}</p>
            <button className="btn btn-danger" onClick={decrease} >Dec+</button>
        </div>
    )
}
export default IncreaseDecrease;
