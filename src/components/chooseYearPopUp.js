import { faCheck, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export function DropDownYear(props){

    const [openDropDown, setOpenDropDown] = useState(null)
    const [selectedYear, setSelectedYear] = useState(props.keys[0])

    useEffect(() => {
        if (openDropDown){
            setOpenDropDown(false)
            props.setYear(selectedYear)
        }
    }, [selectedYear])

    return(
        <div className="navBar">
            <button className="navBarButton" onClick={() => setOpenDropDown(!openDropDown)}>
                <label style={{marginRight:"-25px"}}>{selectedYear}</label>
                <FontAwesomeIcon style={{float: "right", marginRight:"10px", marginTop:"5px"}} size="xs" icon={faSort}/>
            </button>

            <div key={"list"} className="dropDownYear" show={JSON.stringify(openDropDown)}>
                {props.keys.map((item, index) => {
                    if (props.keys.length <= 1) return <label>Keine daten</label>
                    return (
                        <button disabled={!openDropDown} onClick={() => setSelectedYear(item)} className="dropDownYearButton" key={index}>
                            {selectedYear === item ? <FontAwesomeIcon icon={faCheck} style={{marginRight:"10px"}}/>: ""}
                            {item}
                        </button>)
                })}
            </div>
        </div>
    )
}