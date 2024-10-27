import { faChevronLeft, faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, createRef } from "react";

export class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: 0,
            allowChange: true
        };
        this.listOfKeys = Object.keys(props.imgs);
        this.collectionRef = createRef(); 
    }

    getImageSize = (src, callback) => {
        const img = new Image(); 
        img.onload = function() {
            callback(this.width, this.height);
        };
        img.src = src;
    }

    LoadNewPic = (newPic) => {
        if (!this.state.allowChange) return;
        this.setState({ allowChange: false });

       
        if (newPic === -1) newPic = this.listOfKeys.length - 1;
        else if (newPic >= this.listOfKeys.length) newPic = 0;

        this.collectionRef.current.style.opacity = 0;
        setTimeout(() => {
            this.setState({ pic: newPic });
            this.collectionRef.current.style.opacity = 1;
            //this.collectionRef.current.style.height = document.getElementById(`pic${newPic + 1}${this.props.idnum}`).naturalHeight
        }, 250);

        setTimeout(() => this.setState({ allowChange: true }), 500);
    };

    HandleSwipe = (startX, endX) => {
        const swipeThreshold = 50;
        if (endX < startX - swipeThreshold) {
            this.LoadNewPic(this.state.pic + 1);
        } else if (endX > startX + swipeThreshold) {
            this.LoadNewPic(this.state.pic - 1);
        }
    };

    componentDidMount() {
        const element = this.collectionRef.current;
        let touchStartX = 0;
        let touchEndX = 0;

        this.onTouchStart = (event) => {
            touchStartX = event.changedTouches[0].screenX;
        };
        this.onTouchEnd = (event) => {
            touchEndX = event.changedTouches[0].screenX;
            this.HandleSwipe(touchStartX, touchEndX);
        };

        element.addEventListener("touchstart", this.onTouchStart);
        element.addEventListener("touchend", this.onTouchEnd);
    }

    componentWillUnmount() {
        const element = this.collectionRef.current;
        element.removeEventListener("touchstart", this.onTouchStart);
        element.removeEventListener("touchend", this.onTouchEnd);
    }

    render() {
        const { pic } = this.state;

        return (
            <div className="collection" ref={this.collectionRef} id={`collectionParent${this.props.idnum}`}>
                <label>{pic + 1}/{this.listOfKeys.length}</label>
                {this.listOfKeys.map((item, index) => {
                    try {
                        return (
                            <img
                                hidden={index !== pic}
                                id={`${item}${this.props.idnum}`}
                                key={`${item}${this.props.idnum}`}
                                alt=""
                                src={require(`../../../data/picture/${this.props.imgs[item]}`)}
                            />
                        );
                    } catch (e) {
                        return <FontAwesomeIcon key={`${item}${this.props.idnum}`} icon={faFileCircleQuestion} />;
                    }
                })}

                <button onClick={() => this.LoadNewPic(pic - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button onClick={() => this.LoadNewPic(pic + 1)} style={{ transform: "scaleX(-1)", left: "calc(100% - 60px)" }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
        );
    }
}

