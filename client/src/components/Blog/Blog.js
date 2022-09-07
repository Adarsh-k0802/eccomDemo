import React from "react";
import '../Blog/Blog.css';
import Img1 from '../Blog/BlogImg/blogimg.svg';
import BlogCard from "./BlogCard";
import Blogss from "./BlogImg/Blogs.svg"



const Blog=()=>{

    return(
        <>

<div className="container-fluid bckcolor">
<div className="blogs-main-heading-container">
          <img src={Blogss} alt="" className="blogs-background" />
          <h1 className="blogs-main-heading">Blogs</h1>
        </div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="serPara">
            We not only help you write outstanding essays and assignments, but we also help you get all <br/>the resources you may need to enhance your writing skills.<br/><br/>
            Get your hands on the best tips and tricks from our writing experts through our various blogs<br/> and enter the new era of Online Assignment Help. Read on and know more!
            </p>
            </div>
            </div>
            </div>


            <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            

           <BlogCard
           image={Img1}
           title="Tips For Writting Awesome Essays"
           date="16 May 2022"
           para="An essay is a very important part of your academic life. It helps you build a resume and helps you get the best job..."
           />
              <BlogCard
           image={Img1}
           title="Tips For Writting Awesome Essays"
           date="16 May 2022"
           para="An essay is a very important part of your academic life. It helps you build a resume and helps you get the best job..."
           />
              <BlogCard
           image={Img1}
           title="Tips For Writting Awesome Essays"
           date="16 May 2022"
           para="An essay is a very important part of your academic life. It helps you build a resume and helps you get the best job..."
           />
              <BlogCard
           image={Img1}
           title="Tips For Writting Awesome Essays"
           date="16 May 2022"
           para="An essay is a very important part of your academic life. It helps you build a resume and helps you get the best job..."
           />




</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};


 export default Blog;