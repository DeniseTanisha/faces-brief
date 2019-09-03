import React, { Component } from "react";
import styles from "./face.module.scss";
import face from "../assets/Shea.png";
import leftEye from "../assets/left.png";
import rightEye from "../assets/right.png";
import PropTypes from "prop-types";


class Face extends Component {

  state = {
    normal: true
  };
  
  handleClick = () => {
    this.setState ({
     normal: !this.state.normal
    })
  };

  render() {
    
    const leftEyeRotated = this.state.normal 
    ? {}
    : { transform: `rotateZ(${this.props.leftEyeAngle}deg)`};

    const rightEyeRotated = this.state.normal 
    ? {}
    : { transform: `rotateZ(${this.props.rightEyeAngle}deg)`};
    
    
    return (
          <div className={styles.container}  onClick = { this.handleClick }> 

            <img 
                src={face} 
                className={styles.face} 
                alt=""
            />

            <img 
                src={leftEye} 
                className={styles.leftEye} 
                style={leftEyeRotated}
                alt=""
            />

            <img 
                src={rightEye} 
                className={styles.rightEye} 
                style= {rightEyeRotated}
                alt="" 
            />

          </div>
       )};
    };

                
       Face.propTypes = {
         leftEyeAngle: PropTypes.number.isRequired,
         rightEyeAngle: PropTypes.number.isRequired,
       };
     
   
export default Face;