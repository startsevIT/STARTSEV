import React from "react";
import { IChar } from "./IChar";
import { NavLink} from "react-router-dom";

interface CharProps {
  char: IChar
}

function Char( {char}: CharProps) {
    let [over,setOver]=React.useState(false);
    let [active,setActive]=React.useState("");
    let content=char.char
    let style = "header_item_char";
    if(over){     
      content =char.word;
      style = "header_item_char_big";
    }
    else{
      content =char.char;
      style = "header_item_char";
    }

    let Activate = (isActive: any,path: string) =>{
      if(isActive) {
        setActive(path)
        return "header_item_char_big";
      }
      if(!isActive){
        setActive("");
      }
      return style;
    }

    return (
      <NavLink to= {char.link}
      className={(activeNav) => Activate(activeNav.isActive, char.word)}
      onMouseOver={()=>setOver(true)} 
      onMouseOut={()=>setOver(false)}>
        {active === char.word ? char.word: content}
      </NavLink>
    ); 
  }
  
  export default Char;
  