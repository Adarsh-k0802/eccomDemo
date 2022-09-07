import React from 'react'
import './SubjectCard.css'
import PropTypes from 'prop-types';

const SubjectCard = (props) => {
  return (
    <>
        <div className="subject-card--container">
            <div className="subject-card--image-container">
                <img src={props.source} alt="logo" />
            </div>
            <div className="subject-card--text-container"> 
                <p className="subject-card--text">{props.firstText}</p>
            </div>
        </div>
    </>
  )
}

export default SubjectCard
SubjectCard.prototype= {
    firstText: PropTypes.string.isRequired, 
    secondText: PropTypes.string.isRequired, 
    source: PropTypes.string.isRequired, 
};

SubjectCard.defaultProps = {
    firstText: "Merketing", 
    secondText: "Statistics", 
    source: "", 
};