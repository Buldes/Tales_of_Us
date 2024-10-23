import { faChevronLeft, faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export function Collection(props){
    const [pic, setPic] = useState(0)
    const [listOfKeys] = useState(Object.keys(props.imgs))
    const [allowChange, setAllowChanges] = useState(true)

    const LoadNewPic = (newPic) => {
        if (!allowChange) return
        setAllowChanges(false)

        if (newPic === -1) newPic = listOfKeys.length - 1
        else if (newPic > listOfKeys.length - 1) newPic = 0

        document.getElementById("collectionParent").style.opacity = 0
        setTimeout(() => {setPic(newPic); document.getElementById("collectionParent").style.opacity = 1}, 250)
        setTimeout(() => setAllowChanges(true), 500)
    }

    const HandleSwipe = (startX, endX) => {
        let swipeThreshold = 50
    
        // check if left/right swipe
        if (endX < startX - swipeThreshold){
            LoadNewPic(pic + 1)
        }
        else if (endX > startX + swipeThreshold ){
            LoadNewPic(pic - 1)
        }
    }

    useEffect(() => {
        //swipe gesture
        const element = document.getElementById("collectionParent")
        let touchStartX = 0
        let touchEndX = 0
                
        element.addEventListener("touchstart", function(event){
            touchStartX = event.changedTouches[0].screenX
        })
        element.addEventListener("touchend", function(event){
            touchEndX = event.changedTouches[0].screenX
            HandleSwipe(touchStartX, touchEndX)

        })
    })    

    return(
        <div className="collection" id="collectionParent">

            <label>{pic + 1}/{listOfKeys.length}</label>
            {
                listOfKeys.map((item,index) => {
                    try{
                        return <img hidden={index !== pic} id={item} key={item} alt="" src={require(`../../../data/picture/${props.imgs[item]}`)}/>  
                    } catch (e){
                        return <FontAwesomeIcon key={item} icon={faFileCircleQuestion}/> 
                    }
                })
            }

            <button onClick={() => LoadNewPic(pic - 1)}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>

            <button onClick={() => LoadNewPic(pic + 1)} style={{transform:"scaleX(-1)", left:"calc(100% - 50px)"}}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
        </div>
    )
}