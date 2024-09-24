import { useEffect, useState } from 'react';
import './App.css';
import key from "./data/key.json"
import { SecurityPage } from './menus/securityCheck';
import { LoadingScreen } from './components/loadingScreen';
import { CheckForSavedPassword } from './functions/passwordManager';
import { ChooseTypePrivacy } from './menus/chooseTypMenu';
import { LoadData } from './functions/dataControll';
import { MainPage } from './menus/mainPage';
import { isMobile } from 'react-device-detect';


function App() 
{
  const [secPass, setSecPass] = useState(null)

  const [securitySucess, setSecuritySucess] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [mode, setMode] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (securitySucess === null){
      CheckForSavedPassword((e) => setSecPass(e), (res) => setSecuritySucess(res))
    }
  }, [securitySucess, secPass])

  if (/*!isMobile  || */securitySucess === null){ 
    return <LoadingScreen text={"Bitte warten..."}/>
  }
  else if (!securitySucess){
    return <SecurityPage setSecuritySucess={(e) => setSecuritySucess(e)} setSecPass={(e) => setSecPass(e)}/>
  }
  else if (mode === null){
    return <ChooseTypePrivacy setSecLevel={setMode}/>
  }
  else if (!dataLoaded){
    LoadData(mode, secPass, (e) => setDataLoaded(e), (e) => setData(e))
    return <LoadingScreen text={"Lade Daten"}/>
  }
  else if (dataLoaded && secPass === key.password){
    return <MainPage data={data}/>
  }

}

export default App;
