import { useEffect, useState } from 'react';
import './App.css';
import key from "./data/key.json"
import { SecurityPage } from './menus/securityCheck';


function App() 
{
  const [keyDataLoaded, setKeyDataLoaded] = useState(false)
  const [securitySucess, setSecuritySucess] = useState(false)

  function LoadKeyData(){
    const data = JSON.stringify(key, null, 2)
    setKeyDataLoaded(true)
  }

  useEffect(() => {
    LoadKeyData()
  })

  if (!keyDataLoaded){
    return(
      <div className="LoadinPage">
        <header className="Loading...">
        </header>
        <label>Loading... Please Wait.</label>
      </div>
    )
  }
  return <SecurityPage/>
}

export default App;
