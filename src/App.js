
import { ButtonItem, ButtonStl } from "./Components/Button/styles";
import Header from "./Components/Header";
import { useState } from "react";
import React from "react";
import { PhotoStl } from "./Components/Photos/styled";

const apiSecret = process.env.REACT_APP_CONVERTKIT_API_SECRET;

function convertExib (urlUser, altUser) {
  

  return (`
      <div class="containerPhoto">
        <img src=${urlUser} class="photoImg" alt=${altUser}/>
        <div class="topLeftText">${altUser}</div>
      </div>
      
  `); 
}






function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  
  
  //
  
  async function handleSearchRepo() { 
  
    
  const ResultsLopp = document.getElementById('photosIndex')
  
  
    
      await fetch(`https://api.unsplash.com/photos/random?client_id=${apiSecret}&query=${currentRepo}&count=30`)
      .then(response => response.json())
      .then(data => {  
        
        
        for (let i = 0; i < data.length; i++) {
          try {
          const dataItems = data[i]

          const urlUser = dataItems.urls.regular
          const titleUser = String(dataItems.alt_description);
          const altUser = String(dataItems.alt_description);
          const convertedContent = convertExib(urlUser, titleUser, altUser);
          ResultsLopp.innerHTML = convertedContent + ResultsLopp.innerHTML;         
        
          }catch (error) {
          console.error(`Erro ao processar o item ${i}: ${error}`);
          continue;
        }
      }
      
    })
    
    
      
  } 


  //




  return (
    <>
      <Header value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <div id="topo"></div>
          <ButtonStl>
          <ButtonItem onClick={handleSearchRepo}>Me dê Ibagens...</ButtonItem>
          </ButtonStl>
            <PhotoStl>
            <div id="photosIndex">

            </div>
            </PhotoStl>
      <a href="#topo" class="btn-topo">TOP</a>
                
    </>
  );
}

export default App;
