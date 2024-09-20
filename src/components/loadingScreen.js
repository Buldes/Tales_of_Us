import React from "react";

export function LoadingScreen(props){
    return(
        <div className="LoadinPage">
            <header className="Loading..."></header>
            <div style={{display:"flex"}}>
                <div style={{animation:"loadingAni 1s -1s ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
                <div style={{animation:"loadingAni 1s -.8s ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
                <div style={{animation:"loadingAni 1s -.6s ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
                <div style={{animation:"loadingAni 1s -.4s ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
                <div style={{animation:"loadingAni 1s -.2s ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
                <div style={{animation:"loadingAni 1s  ease-in-out infinite alternate"}} className='LoadinPageDots'></div>
            </div>

            <label>{props.text}</label>
        </div>
    )
}