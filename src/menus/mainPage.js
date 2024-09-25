import React, { useState } from "react";
import { DropDownYear } from "../components/chooseYearPopUp";
import { EntryViewerNone } from "../components/entryViewer/fromBove";

export function MainPage(props){

    const [year, setYear] = useState(Object.keys(props.data).sort().reverse()[0])
    const [thisYearData, setThisYearData] = useState(props.data[year])

    function ChangeYear(newYear){

        var elements = document.getElementsByClassName("enryViewerNone");
    
        for (let element of elements) {
            // dissappear
            element.style.animation = "none";
            setTimeout(() => {
                element.style.animation = "fadeIn ease-out .5s 0s reverse";
            }, 10);
        }
    
        setTimeout(() => {
            setYear(newYear); 
            setThisYearData(props.data[newYear]);

            // appear
            var elements = document.getElementsByClassName("enryViewerNone");
            for (let element of elements) {
                element.style.animation = "none";
                setTimeout(() => {
                    element.style.animation = `fadeIn ease-out 1s ${element.id / 4 - .5}s forwards`;
                }, 10);
            }
        }, 1000);
    }

    return (
        <div className="MainPageBody">

            <DropDownYear keys={Object.keys(props.data).sort().reverse()} setYear={(e) => ChangeYear(e)}/>


            <div className="scrollView">
                <div className="placeholder"></div>
                {Object.keys(thisYearData).map((item) => {
                    return <EntryViewerNone key={item} entryData={props.data[year][item]}/>
                })}
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>

        </div>
    )
}