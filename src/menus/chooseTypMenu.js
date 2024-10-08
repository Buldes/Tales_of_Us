import React, { useEffect, useState } from "react";
import { SaveMenu } from "../functions/savedSettingsManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function ChooseTypePrivacy(props){

    const [selectedButton, setSelectedButton] = useState(null)

    useEffect(() => {
        if (selectedButton !== null){
            setTimeout(() => props.setSecLevel(selectedButton), 1000)
            props.reloadData(null)
            SaveMenu(selectedButton)
        }
    }, [selectedButton, props])

    return(
        <div>
            
            <div className="choosePrivacyType">

                <label>Sicherheitslevel</label>

                <button disabled={selectedButton === "privat"} onClick={() => setSelectedButton("parent")}>
                    Eltern 
                </button>

                <button disabled={selectedButton === "parent"} onClick={() => setSelectedButton("privat")}>
                    Privat
                </button>

            </div>

            <div className="choosePrivacyTypeLogOut">

                <button onClick={() => {setTimeout(() => {localStorage.removeItem("pass"); window.location.reload();}, 750)}}>
                    <FontAwesomeIcon icon={faRightToBracket} style={{marginRight:10}}/>
                    Abmelden
                </button>
            </div>

        </div>
    )
}