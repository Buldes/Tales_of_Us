import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { securityCheck } from "../functions/securityCheck";

export function SecurityPage(setSecuritySucess){

    const [inputPass, setInputPass] = useState("")
    const [rememberPassword, setRememberPassword] = useState(false)
    const [unlockPress, setUnlockPress] = useState(false)
    const [securityCheckResponse, setSecurityCheckResponse] = useState(null)

    useEffect(() => {
        if (unlockPress){
            securityCheck(inputPass, (e) => setSecurityCheckResponse(e)).then(()=>{
                if (securityCheckResponse !== null){

                    if (!securityCheckResponse){
                        document.getElementById("hintText").textContent = "Falsche Eingabe..."
                        document.getElementById("hintText").style.color = "#ff0000"
                        document.getElementById("passI").style.borderColor = "#ff0000"

                        setUnlockPress(false)
                        setSecurityCheckResponse(null)
                    }

                    else{
                        document.getElementById("hintText").textContent = "Passwort korrekt. Bitte warten..."
                        document.getElementById("hintText").style.color = "#00ff00"
                        document.getElementById("passI").style.borderColor = "#00ff00"
                    }

                }
            })
        }
    }, [unlockPress, inputPass, securityCheckResponse])

    return(
    <div className="SecurityCheck">
        <header className="Tales of us - SecurityCheck">
        </header>
        
        <div className="parant">

            <label className="message">Passwort eingeben</label>

            <input id="passI" disabled={unlockPress} value={inputPass} onChange={(e) => setInputPass(e.target.value)} type="password" placeholder=""></input>

            <div className="toLeftDiv">
                <label id="hintText" className="hint">Passwort eingeben...</label>
            </div>

            <button disabled={unlockPress} onClick={() => setUnlockPress(true)} className="unlock"
                style={unlockPress ? {color:"grey", backgroundColor:"#003ea9"}: {}}>Entsperren</button>

            <div className="toLeftDiv">
                <button disabled={unlockPress} className="checkBoxButton" onClick={() => setRememberPassword(!rememberPassword)} style={rememberPassword ? {color:"#63E6BE"}: {}}>
                    {rememberPassword ? <FontAwesomeIcon icon={faCircleDot} style={{color: "#63E6BE",}}/>: <FontAwesomeIcon icon={faCircle} style={{color: "#eeeeee",}}/>}  Passwort merken
                </button>
            </div>
        </div>

    </div>
    )
}