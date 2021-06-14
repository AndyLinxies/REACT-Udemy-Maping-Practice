import React from "react";
import emojipedia from '../emojipedia'
import Entry from './Entry'
//Pour la theorie voir le fichier React props practice & maping
//Mapping
//1 
function entryZ(def){
return <Entry 
key = {def.id}
emojiP={def.emoji}
nameP={def.name}
meaningP={def.meaning}
/> 
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      

      <dl className="dictionary">
        {emojipedia.map(entryZ)} {/*2- Lieu d'insertion de la carte Entry mappée */}
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


{/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div> */}

{/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div> */}
export default App;

