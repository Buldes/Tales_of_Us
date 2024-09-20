import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function MainPage(props){

    return (
        <div className="MainPageBody">
            <div className="navBar">
                <button>
                    <label style={{marginRight:"-25px"}}>{Object.keys(props.data).sort().reverse()[0]}</label>
                    <FontAwesomeIcon style={{float: "right", marginRight:"10px", marginTop:"5px"}} size="xs" icon={faSort}/>
                </button>
            </div>

            <div className="scrollView">
                
            </div>

        </div>
    )
}