import { useEffect, useState } from 'react';
import Button from './Bottone';
function App() {
  
  const str= ['users', 'posts' , 'photos']
  
  const [content, setContent] = useState(str[0])

  const [data , setData]=useState([])

  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/'+ content)
  .then((response) => response.json())
  .then((json) => setData(json))}, [content])
  
  console.log('Componente caricata...')  

  function show(stringhe){
    setContent(stringhe)
    console.log('aggiornato')
  }

  //useEffect( bevo(), [quando mangio, quando ho sete, quando corro,...])
  //fa 'bevo' quando varia una delle dipendenze 

  

  return (<>
    <Button azione={() => show(str[0])} nome='Utenti'/>
    <Button azione={() => show(str[1])} nome='Tweet'/>
    <Button azione={() => show(str[2])} nome='Commenti'/>
    <div>{content}</div>
    
    
    {data.map((elemento)=><pre>{JSON.stringify(elemento)}</pre> )}
    </>
  );
}

export default App;