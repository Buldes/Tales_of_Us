import React, { useEffect, useState } from "react";

export function ChooseTypePrivacy(props){

    const [selectedButton, setSelectedButton] = useState(null)

    useEffect(() => {
        if (selectedButton !== null){
            setTimeout(() => props.setSecLevel(selectedButton), 1000)
        }
    }, [selectedButton, props])

    return(
        <div className="choosePrivacyType">

            <label>Sicherheitslevel</label>
            
            <button disabled={selectedButton === "privat"} onClick={() => setSelectedButton("parant")}>
                Eltern
            </button>

            <button disabled={selectedButton === "parant"} onClick={() => setSelectedButton("privat")}>
                Privat
            </button>

        </div>
    )
}