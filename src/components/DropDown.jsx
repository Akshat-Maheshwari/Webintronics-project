import React, {forwardRef} from 'react';
import './DropDown.css'

const DropDown= forwardRef((props,ref)=>{
    return (
        <div ref={ref} className="DropDown" style={{'display':props.visible?'flex':'none'}}>
            <p className="dropDown-text">HRX350 Bike</p>
            <p className="dropDown-text">GEAR350 EB</p>
            <p className="dropDown-text">RX - AK290 EB</p>
            <p className="dropDown-text">GBM -Heavy</p>
        </div>
    )
})

export default DropDown;
