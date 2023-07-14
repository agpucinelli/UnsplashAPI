import React from "react";
import {Input, InputTxt, Logo, NavBar} from "./styles";


function Header({value, onChange}) {
    return (
        
        <NavBar>
            <Logo>Unsplash API</Logo>
              <InputTxt>
              
              <h2>Em uma palavra, do que você gosta?</h2>
              <Input type="search" placeholder="Digite aqui" value={value} onChange={onChange}/>

              </InputTxt>            
      </NavBar>     
      
    );
    
  }
 
  export default Header;
