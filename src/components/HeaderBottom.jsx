import React, {forwardRef} from 'react';
import "./HeaderBottom.css";
import logo from "../images/logo.png";


const HeaderBottom= forwardRef((props,ref)=>{
    

    return (
        <div className="HeaderBottom">
            <img className="headerBottom__logo" src={logo} alt="logo" />
            <div className="headerBottom__options">
                <a href="#" className='headerBottom__option underline'><span>About</span></a>
                <a href="#" className='headerBottom__option underline'><span>Locate Store</span></a>
                <div style={{'display':'inline'}} ref={ref}><span href="#" className='headerBottom__option'>Scooters <i onClick={props.handleClick} class="arrow down"></i></span></div>
                <a href="#" className='headerBottom__option'>Purchase Assistance <i class="arrow down"></i></a>
            </div>
            <button className="headerBottom__button red-button">Dealership</button>
        </div>
    )
})

export default HeaderBottom;

