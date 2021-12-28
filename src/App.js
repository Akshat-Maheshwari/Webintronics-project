import React, {useState, useEffect, useRef} from "react";
import './App.css';
import HeaderTop from './components/HeaderTop';
import HeaderBottom from './components/HeaderBottom';
import Body from './components/Body';
import DropDown from './components/DropDown';


function App() {

  const [dropVisible,setDropVisible] = useState(false);
  function handleClick(){
    setDropVisible(!dropVisible);
  }

  let dropDownRef = useRef();

  useEffect(()=>{
    let handler = (event)=>{
      if(!dropDownRef.current.contains(event.target)){
        setDropVisible(false)
      }}
    document.addEventListener("mousedown", handler);
    return ()=>{
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom handleClick={handleClick} ref={dropDownRef} />
      <DropDown visible={dropVisible} ref={dropDownRef} />
      <Body />
    </div>
  );
}

export default App;
