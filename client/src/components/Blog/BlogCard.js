import React from "react";
import PropTypes from 'prop-types';
import '../Blog/Blog.css';
import Img1 from '../Blog/BlogImg/blogimg.svg';
import Cal from '../Blog/BlogImg/date.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const BlogCard=(props)=>{

    return(
    <>
    
    
    <div className="col-md-6 col-lg-3 col-10 mx-auto ">
            <div className="card blog-card">
          <img src={props.image} className="card-img-top imgcss" alt="..."/>
          <div className="card-body">
            <h5 className="card-title blog-title">{props.title}</h5>
            <p className="datecss"><span className="calspan"><img className="calcss" src={Cal} /></span>{props.date}</p>
            <p className="card-tex blogpara">{props.para}</p>
            <a href="#" className="btn  btncss">Read More 
                  <ArrowForwardIosIcon 
                      style={{ 
                        color: '#2D9CDB',
                        fontSize:'18px',
                        margin: '3px'
                    }}/>
            </a>
          </div>
        </div>
      </div>
                
    
    
    
    
    
    
    </>
    
    );
    
    };
    
    export default BlogCard;
    
    
    BlogCard.prototype= {
        
        title: PropTypes.string.isRequired, 
        date: PropTypes.string.isRequired, 
        para: PropTypes.string.isRequired, 
    };
    
    BlogCard.defaultProps = {
        
        title: "Title here", 
        date:"16 May 2022",
        para: "Para here", 
        
    };