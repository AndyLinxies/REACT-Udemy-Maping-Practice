import React from "react";
import emojipedia from '../emojipedia'
import Entry from './Entry'
//Pour la theorie voir le fichier React props practice & maping
//Mapping
//1 
// function entryZ(def){
// return <Entry 
// key = {def.id}
// emojiP={def.emoji}
// nameP={def.name}
// meaningP={def.meaning}
// /> 
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      

      <dl className="dictionary">
        {/* {emojipedia.map(entryZ)} 2- Lieu d'insertion de la carte Entry mappée */}
        {emojipedia.map(element=>{
          return <Entry 
          key = {element.id}
          emojiP={element.emoji}
          nameP={element.name}
          meaningP={element.meaning}
          /> 
        })}
        {/* Ecriture sans mapping */}
        {/* <Entry
        emojiP= {emojipedia[0].emoji}
        nameP= {emojipedia[0].name}
        meaningP= {emojipedia[0].meaning}
      />
        <Entry
        emojiP= {emojipedia[1].emoji}
        nameP= {emojipedia[1].name}
        meaningP= {emojipedia[1].meaning}
      />
        <Entry
        emojiP= {emojipedia[2].emoji}
        nameP= {emojipedia[2].name}
        meaningP= {emojipedia[2].meaning}
      /> */}
        
        
      </dl>
    </div>
  );
}

export default App;

