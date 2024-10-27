import { useEffect, useState } from 'react';
import './App.css';
import key from "./data/key.json"
import { SecurityPage } from './menus/securityCheck';
import { LoadingScreen } from './components/loadingScreen';
import { CheckForSavedPassword } from './functions/passwordManager';
import { ChooseTypePrivacy } from './menus/chooseTypMenu';
import { LoadData } from './functions/dataControll';
import { MainPage } from './menus/mainPage';
import { isAndroid } from 'react-device-detect';
import { GetSavedMenu, SaveMenu } from './functions/savedSettingsManager';


function App() 
{
  const [secPass, setSecPass] = useState(null)

  const [securitySucess, setSecuritySucess] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [mode, setMode] = useState(GetSavedMenu())
  const [data, setData] = useState(null)

  useEffect(() => {
    document.title = "Tales of us <3"

    if (securitySucess === null){
      CheckForSavedPassword((e) => setSecPass(e), (res) => setSecuritySucess(res))
    }
    else if (securitySucess !== null && mode !== "parent" && secPass === key.parantPass){
      setMode("parent")
      SaveMenu("parent")
    }
    else if (securitySucess !== null && secPass === key.password && mode == null){
      SaveMenu(null)
    }
  }, [securitySucess, secPass, mode])

  if (!isAndroid  || securitySucess === null){ 
    return <LoadingScreen text={"Bitte warten..."}/>
  }
  else if (!securitySucess){
    return <SecurityPage setSecuritySucess={(e) => setSecuritySucess(e)} setSecPass={(e) => setSecPass(e)}/>
  }
  else if (mode === null){
    return <ChooseTypePrivacy setSecLevel={setMode} reloadData={setDataLoaded}/>
  }
  else if (!dataLoaded){
    LoadData(mode, secPass, (e) => setDataLoaded(e), (e) => setData(e))
    return <LoadingScreen text={"Lade Daten"}/>
  }
  else if (dataLoaded && (secPass === key.password || secPass === key.parantPass)){
    return <MainPage data={data} setMode={(e) => setMode(e)} passCode={secPass}/>
  }

}

export default App;
