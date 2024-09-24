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
            
            <button disabled={selectedButton === "privat"} /*onClick={() => setSelectedButton("parant")}*/ onClick={(e) => e.currentTarget.blur()} style={{color:"grey"}}>
                Eltern 
                <label style={{fontSize:15, marginLeft:10, fontFamily:"sans-serif",color:"grey"}}>  [in arbeit...]</label>
            </button>

            <button disabled={selectedButton === "parant"} onClick={() => setSelectedButton("privat")}>
                Privat
            </button>

        </div>
    )
}