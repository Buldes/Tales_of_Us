import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export class Comparison extends Component{
    constructor(props){
        super();
        this.state = {
            prozent: 50,
            oldProzent: 50,
            touchStart: null,
            distance: null
        }
    }

    handleTouchStart = (e) => {
        this.setState({ touchStart: e.touches[0].clientX });
    };

    handleTouchMove = (e) => {
        this.setState({distance: e.touches[0].clientX - this.state.touchStart})
        let newPercentage = (this.state.distance + ((window.screen.width - 100) * (this.state.oldProzent / 100))) / (window.screen.width - 100) * 100
        if (newPercentage < 5) newPercentage = 5
        else if (newPercentage > 95) newPercentage = 95
        this.setState({prozent:newPercentage})
    }

    handleTouchEnd = () => {
        this.setState({distance: null, touchStart: null, oldProzent:this.state.prozent})
    }

    render() {
        return (
            <div 
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}

                className="comparison" style={{height:this.props.data["height"]}}>
                <button style={{left:`calc(${this.state.prozent}% - 12.5px)`}}><FontAwesomeIcon icon={faSort} rotation={90}/></button>
                <div className="comparisonimgpPio" style={{width:`${this.state.prozent}%`}}>
                    <img
                        id={`${this.props.data["pic1"]}${this.props.idnum}`}
                        key={`${this.props.data["pic1"]}${this.props.idnum}`}
                        alt=""
                        src={require(`../../../data/picture/${this.props.data["pic1"]}`)}
                        style={{
                            marginTop:this.props.data["pic1Offset"][1], 
                            marginLeft:this.props.data["pic1Offset"][2], 
                            transform:`scale(${this.props.data["pic1Scale"]})`}}
                                />
                </div>
                
                <img
                    id={`${this.props.data["pic2"]}${this.props.idnum}`}
                    key={`${this.props.data["pic2"]}${this.props.idnum}`}
                    alt=""
                    src={require(`../../../data/picture/${this.props.data["pic2"]}`)}
                    style={{
                        marginTop:this.props.data["pic2Offset"][1], 
                        marginLeft:this.props.data["pic2Offset"][0],
                        transform:`scale(${this.props.data["pic2Scale"]})`}}
                            />
            </div>
        )
    }
}