import React,{useRef, useState} from 'react';
import arrowIcon from "../../assets/Faq/arrow.svg";
import chevron from "../../assets/Faq/arrow1.svg";
import header from "../../assets/Faq/faq.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./faq.css";
import { Link } from 'react-router-dom';

const faq = [
  {
    id:1,
    Question: 'What is an Assignment Writing Service?',
    Answer: 'Academic website Assignment Writing Service allows students to select from hundreds of experienced writers that may aid them with their writing projects.',
  },
  {
    id:2,
    Question: 'Why Choose Assignment Writing Service?',
    Answer: 'Professional writers who have been through a rigorous four-stage hiring procedure. Work that is 100% original and of the greatest caliber is what we promise you when you work with us. The anonymity of our clients is of utmost importance to us. We promise that none of our customers personal information will ever be disclosed to a third party. Direct communication with our team gives you the opportunity to speak directly with the writers you are considering hiring before you make a payment.',
  },
  {
    id:3,
    Question: 'How does it work for students?',
    Answer: "Simply use your email address to create an account on our website, and placing your order will be a breeze. To proceed, you'll need to fill out the order form and describe your project. Our Expert Writers view your Assignment Writing Requirement and act accordingly. It's possible to see a writer's profile details, such as star ratings, customer reviews and the subjects they've written about. It's time to sit back and relax while your order is being performed by the most qualified writer.",
  },
  {
    id:4,
    Question: 'Is the work original and without Plagiarism?',
    Answer: "Because stealing someone else's work and passing it off as one's own is considered plagiarism, our authors never copy content directly from the internet.",
  },
  {
    id:5,
    Question: 'When can I expect my Assignments done?',
    Answer: "Students need not worry about the submissions of the assignments. The deadline which will be fixed between the writing expert and the student will be adhered to earnestly.",
  },
  {
    id:6,
    Question: "Is Assignment Writing Service free?",
    Answer: "We do believe in transforming the lives of students. Though our services are not free as we also need to sustain the work. But we ensure that the Assignment Service we provide is very cost effective and quality centric.",
  },
];

const FaqComponent = () => {

  /*For Search Filter and Bottom Arrow*/
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered]   = useState("");
  const [NoOfFaq,setNoOfFaq]            = useState(6);
  const [arrow,setArrow]                = useState("arrow");  

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = faq.filter((value) => {
      const result = value.Question.toLowerCase().includes(
        searchWord.toLowerCase()
      );
      return result;
    });

    // Search Filtering;
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  // Show more Faq's
  const showMore = ()=>{
    setNoOfFaq(NoOfFaq =>NoOfFaq+=4)
    if(NoOfFaq>=faq.length){
      setNoOfFaq(faq.length)
      setArrow("hide-arrow");
    }
  }

  // Faq Toggler with previous closing functionality
  const [selected,setSelected] = useState(null);

  const toggleFaq=(i)=>{
    if(selected===i){
      return setSelected(null);
    }

    setSelected(i);
  }
  

  return (
    <div className="faq-container">

      <div className="faq-block-1">
        <div className="faq-header">
          <img src={header} alt="header" className="faq-bg-header" />
          <h1>FAQ's</h1>
        </div>
        <h4>Have Any Questions?</h4>

        <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder="Search Any Question"
            value={wordEntered}
            onChange={handleFilter}
          />
          {wordEntered.length === 0 ? (
            <SearchIcon className="search-icon" />
          ) : (
            <CloseIcon className="search-icon" onClick={clearInput} />
          )}
        </div>
      </div>

      <div className='faq-block-2'>

      {filteredData.length===0?
         faq.slice(0,NoOfFaq).map((data,i)=>{
          return (
            <>
            <div key={i} className='faq-section' >
              <div className="faq-section-header" onClick={()=>toggleFaq(i)}>
                <img src={chevron} className={selected===i?"chevron rotate":"chevron"} alt="chevron" />
                <h3>{data.Question}</h3>
              </div> 
              
              <div className={selected===i? "faq showFaq": "faq"}>
                {data.Answer}
              </div>
            </div> 
            </>
            
         )}) :

         filteredData.map((data,i)=>{
          return (
            <div key={i} className='faq-section' >
              <div className="faq-section-header" onClick={()=>toggleFaq(i)}>
                <img src={chevron} className={selected===i?"chevron rotate":"chevron"} alt="chevron" />
                <h3>{data.Question}</h3>
              </div> 
              
              <div className={selected===i? "faq showFaq": "faq"}>
                <p>{data.Answer}</p>
              </div>
            </div>  
          )})       
      }
        {/* <img src={arrowIcon} className={`${arrow}`} alt="arrow" onClick={showMore}/>       */}
        <div className="faq-showMore-btn-container">
            <Link to="/faq" rel='noopener' target="_blank" className='showmore'>
              <button className={`faq-showMore-btn ${arrow}`} onClick={showMore}>
                Show More
              </button>
              </Link>
        </div>
      </div>

    </div>
  );
};

// const Accordion = ({data,key})=> {
  
//   const [selected,setSelected] = useState(null);
//   const [active,setActive] = useState("");
//   const [height,SetHeight] = useState("0px");
//   const [rotate,SetRotate] = useState("chevron");

//   const content = useRef(null);

//   const toggleFaq=(key)=>{
//     console.log(key)
//     if(selected===key){
//       return setSelected(null);
//     }

//     setActive(active===""?"active":"");
//     SetHeight(active==="active"?"0px":`${content.current.scrollHeight}px`);
//     SetRotate(active==="active"?"chevron":"chevron rotate")
//   }

//   return (
//       <div key={key} className='faq-section' >
//          <div className={`faq-section-header ${active}`} onClick={()=>toggleFaq(key)}>
//            <img src={chevron} className={`${rotate}`} alt="chevron" />
//            <h3>{data.Question}</h3>
//          </div> 
        
//          <div className='faq' ref={content} style={{maxHeight: `${height}`}}>
//           <p>{data.Answer}</p>
//          </div>
//       </div> 
//   );
// }


export default FaqComponent;