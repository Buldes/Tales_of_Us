import { faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons/faFileCircleQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function EntryViewerNone(props) {
    
    const data = props.entryData

    var bgProp = {background:""}
    if (data.background.type === "solid_color" && false) bgProp.background = data.background.properties
    else if (data.background.type === "gradient" && false) bgProp.background = `linear-gradient(${data.background.properties.start}, ${data.background.properties.end})`
    else{
        let randDeg = Math.random() * (360 - 0) + 0
        switch (data.id) {
            case 1: bgProp.background = `linear-gradient(${randDeg}deg, #c31432, #240b36)`; break; // Geil
            case 2: bgProp.background = `linear-gradient(${randDeg}deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 55%, rgba(0,128,154,1) 100%)`; break;  // Geil
            case 3: bgProp.background = `linear-gradient(${randDeg}deg, rgba(15,20,15,1) 0%, rgba(21,121,37,1) 74%, rgba(0,154,28,1) 100%)`; break; // Dunkle Blau-Töne
            case 4: bgProp.background = `linear-gradient(${randDeg}deg, #1a242e, #4CA1AF)`; break; // Kühle Blau-Grün-Verläufe
            case 5: bgProp.background = `linear-gradient(${randDeg}deg, #8b0a27, #1b0b1e)`; break; // Geil
            case 6: bgProp.background = `linear-gradient(${randDeg}deg, #0F2027, #203A43, #2C5364)`; break; // Geil
        }        
    }

    return(
        <div id={data.id} key={data.id} className="enryViewerNone"  style={{animation:`fadeIn ease-out 1s ${data.id / 4 - .5}s forwards`, ...bgProp}}>

            <div style={{width:"100%"}}><label className="dateLabel">{`${data.date.day}.${data.date.month}.`}</label></div>
            <label className="headlineViewerNone">{data.headline}</label>
            
            {Object.keys(data.body).map((item) =>{
                if (item.includes("text")){
                    return <label className="bodyText" key={item}>{data.body[item]}</label>
                }
                else if (item.includes("picture")){
                    try{
                        return <img key={item} src={require(`../../data/picture/${data.body[item]}`)}/>  
                    } catch (e){
                        return <FontAwesomeIcon icon={faFileCircleQuestion}/> 
                    }
                }
            })
            }
            <div style={{marginBottom:20}}></div>
        </div>
    )
}