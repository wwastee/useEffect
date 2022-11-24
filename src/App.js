import { useEffect, useState } from "react";
import Bottone from "./Bottone";

function App() {

  useEffect(()=>{console.log("sussamento")})

  const [content, setContent] = useState("");
  const str=['Utenti', 'Tweet' , 'Commenti']
  
  function show(stringhe) {
    setContent(stringhe)
    console.log("aggiornato")
  }
  console.log("componente caricata")
  return (
    <div>
      <Bottone azione={() => show(str[0])} nome="Utenti"></Bottone>
      <Bottone azione={() => show(str[1])} nome="Tweet"></Bottone>
      <Bottone azione={() => show(str[2])} nome="Commenti"></Bottone>
      <div> sei un cane   {content}</div>
    </div>
  );
}

export default App;
