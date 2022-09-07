import React,{useState} from 'react';
import arrowIcon from "../../../assets/Faq/arrow.svg";
import chevron from "../../../assets/Faq/arrow1.svg";
import header from "../../../assets/Faq/faq.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./FaqCategories.css";


const Headers = [
  {
    id:1,
    Header: 'General/Common Questions', 
  },
  {
    id:2,
    Header: 'Order/Delivery Questions',
  },
  {
    id:3,
    Header:'Writers/Experts Questions',
  },
  {
    id:4,
    Header: 'Quality/Professionalism/Satisfaction Questions',
  },
  {
    id:5,
    Header:'Pricing/Costing/Payment Questions',
  },
  {
    id:6,
    Header:'Account Privacy/Security Questions',
  },
]


const General = [
   { 
     id: 1,      
     Header: 'General/Common Questions',   
     Desc: 'Find the answers to your most asked question and understand the kind of work we do here at Assignment Writing Services. Know everything about our company, services and guarantees'
   }, 
   {
    id:2,
    Question: 'What is an Assignment Writing Service?',
    Answer: 'Academic website Assignment Writing Service allows students to select from hundreds of experienced writers that may aid them with their writing projects.',
  },
  {
    id:3,
    Question: 'Why Choose Assignment Writing Service?',
    Answer: 'Professional writers who have been through a rigorous four-stage hiring procedure. Work that is 100% original and of the greatest caliber is what we promise you when you work with us. The anonymity of our clients is of utmost importance to us. We promise that none of our customers personal information will ever be disclosed to a third party. Direct communication with our team gives you the opportunity to speak directly with the writers you are considering hiring before you make a payment.',
  },
  {
    id:4,
    Question: 'How does it work for students?',
    Answer: "Simply use your email address to create an account on our website, and placing your order will be a breeze. To proceed, you'll need to fill out the order form and describe your project. Our Expert Writers view your Assignment Writing Requirement and act accordingly. It's possible to see a writer's profile details, such as star ratings, customer reviews and the subjects they've written about. It's time to sit back and relax while your order is being performed by the most qualified writer.",
  },
  {
    id:5,
    Question: 'Is the work original and without Plagiarism?',
    Answer: "Because stealing someone else's work and passing it off as one's own is considered plagiarism, our authors never copy content directly from the internet.",
  },
  {
    id:6,
    Question: 'When can I expect my Assignments done?',
    Answer: "Students need not worry about the submissions of the assignments. The deadline which will be fixed between the writing expert and the student will be adhered to earnestly.",
  },
  {
    id:7,
    Question: "Is Assignment Writing Service free?",
    Answer: "We do believe in transforming the lives of students. Though our services are not free as we also need to sustain the work. But we ensure that the Assignment Service we provide is very cost effective and quality centric.",
  },
]

const Order = [
    {
        id:1,
        Header: 'Order/Delivery Questions',
        Desc: "Learn how to place an order, choose a writer, use the system, and receive your order.",
    },
    {
        id:2,
        Question: 'When will the Assignments be Available?',
        Answer: "The authors try their best to meet the deadlines you've set for them. As a reminder, please keep in mind that a lengthy work requires more time to finish research, write and follow all guidelines.",
    },
    {
        id:3,
        Question: "Can I check the work before the whole Assignment?",
        Answer: "At Assignment Writing Service you can check the initials of the draft on a progressive basis. Which is based on the idea of minimum writeup delivery."
    },
    {
        id:4,
        Question: "What Is the Method of Delivery of Assignment Writing Service?",
        Answer: "Once your paper has been completed, you will be contacted by email. Your paper will appear under 'List of uploaded files by writer' under 'Order page' once you log in.",
    },
    {
        id:5,
        Question: "What will happen if the Writer misses the Deadline?",
        Answer: "No matter how short the deadline may be, you can count on our writers to provide your finished product as soon as possible. You can always get a refund if you've encountered such a problem.",
    },
    {
        id:6,
        Question: 'Can I change things before final payment?',
        Answer: "As soon as you discover any errors or inconsistencies with the paper's original instructions, you should seek a revision and make your concerns known.",
    },
    {
        id:7,
        Question: 'What about the payment refund?',
        Answer: "We at Assignment Writing Service believe that there is no payment waste. We do offer payment refunds, but we have a specific policy for the same. You can read more about our refund policy in the policy section.",
    },
    {
        id:8,
        Question: "Why do I need to pay an advance for urgent Assignments?",
        Answer: "When you place an Assignment Order on an urgent basis, we have rescheduled many of the work of our experts. It is because of this urgency and the inconvenience that the writers have to face that we take an advance to make sure that you do not skip the project order.",
    },
    

]

const Writers = [
    {
        id:1,
        Header:'Writers/Experts Questions',
        Desc:   "Learn more about the people who make up our team and are ultimately in charge of the quality of your papers.",
    },
    {
        id:2,
        Question:"Who will write my Assignment?",
        Answer:"Orders are handled by a group of highly qualified writers and editors. Before they can begin working on any jobs, they all have to go through a lengthy application process.",
    },
    {
        id:3,
        Question:"What are channels of communication?",
        Answer:"Each user is urged to connect with the writer before employing one via chat. To help consumers get to know our writers, we've added an exclusive function that allows them to learn about their talents and expertise.",
    },
    {
        id:4,
        Question:"Could the expert and I share some documents?",
        Answer:"You not only have the ability, but you should take advantage of it! All necessary lectures, sources, and resources can be found in additional files that aid the writer in following the directions.",
    },
    {
        id:5,
        Question:"Is it possible to choose a Writer?",
        Answer:"Yes, you may just select the 'Best Writer' option when you place your order. For a modest additional price, our platform will match you with a writer who is best equipped to meet your specific needs.",
    },
    {
        id:6,
        Question:"How are the Assignment Writing Experts?",
        Answer:"At Assignment Writing Service we have a team of Assignment Writing Experts and Professionals who are honest and exciting to work with.",
    },
    {
        id:7,
        Question:"How can I know about the true credentials of the expert writers?",
        Answer:"We at Assignment Writing Service believe in transparency and hence we provide all information related to the credentials of the expert writers on the writers portal which you can easily access once you hire an expert writer.",
    },
    {
        id:8,
        Question:"What will happen if the expert writer leaves the Assignment Writing Service in the middle of the work?",
        Answer:"This is truly a thing that makes many students anxious. But at Assignment Writing Service we take care of that as well. When we hire an Expert Writer, we come to a contract with him/her in which we clearly mention a clause wherein they cannot leave an Assignment Order in limbo.",
    },
]


const Quality  = [
    {
        id:1,
        Header: 'Quality/Professionalism/Satisfaction Questions',
        Desc: "What to do if you're not happy with the supplied paper? That and other related questions are addressed here.",
    },
    {
        id:2,
        Question:"What Is the guarantee of excellence?",
        Answer:"Because they care about their reputation, our writers are compelled to supply you with papers of the highest quality. Once you're satisfied with the product, you'll only have to pay for it. ",
    },
    {
        id:3,
        Question:"What about the best grade guarantee?",
        Answer:"Although we cannot promise any certain grades, you may rest assured that the quality of the paper will be quite high.",
    },
    {
        id:4,
        Question:"What to do if I am not Satisfied?",
        Answer:"We are committed to achieving a satisfaction rate of one hundred percent among our patrons and will take any step necessary to achieve this goal.",
    },
    {
        id:5,
        Question: "How to check for Plagiarism free Assignment?",
        Answer:"Only custom papers are written by our company. In addition, we will carry out all of your instructions to the letter.",
    },
    {
        id:6,
        Question: "What Is a Plagiarism Report?",
        Answer:"At Assignment Writing Service we offer a Plagiarism Free Report which tells the originality of the content.",
    },
    {
        id:7,
        Question: "How professional will my Assignment be?",
        Answer:"It is our mission at Assignment Writing Service to provide quality drive, cost effect, and highly professional Assignment. This is a promise that you can rely upon us.",
    },
    {
        id:8,
        Question: "Is the work Grammar perfect?",
        Answer:"The Assignments that we provide goes through multiple stages of grammar check, and in the end we also have an expert proofreader to make sure you get the best Grammatically correct Assignment.",
    },
]

const Pricing = [
    {
        id:1,
        Header:'Pricing/Costing/Payment Questions',
        Desc:"You can find answers to frequently asked questions about payment and pricing here if you have any questions.",
    },
    {
        id:2,
        Question:'How is the price of my essay writing service determined?',
        Answer:"Prices of Assignment Writing Service’s Assignment Writing Service are determined using various factors, such as timing, complexity, deadline etc of the Assignment Topic.",
    },
    {
        id:3,
        Question:"What are the Methods of Payment?",
        Answer:"You have the choice of paying with Visa, Mastercard, American Express, or Discover; simply select the payment method that is most convenient for you",
    },
    {
        id:4,
        Question:"What About Installment Based payment?",
        Answer:"You are unable to make partial payments because you are required to increase your balance by an amount that is equivalent to the cost of the paper.",
    },
    {
        id:5,
        Question:"Can I avail the Assignment Writing Service for Free?",
        Answer:"No you can’t. It's because of this that we charge a fee for our services. The work of every writer deserves to be compensated, and that is why we offer a prepaid service."
    },
    {
        id:6,
        Question:"How to apply for a refund of an Assignment Writing Service?",
        Answer:"Because each refund request has its own unique set of circumstances, we evaluate each one individually, as stated in our Terms of Service. We may require evidence of poor quality."
    },
    {
        id:7,
        Question:"What if the payment fails?",
        Answer:"There are many reasons for a payment failure. If the failure is from our end we will ensure full correction of the issue. But if the problem is from the bank's end then you have to talk to them.",
    },
    {
        id:8,
        Question:"How expensive is the cost of your service?",
        Answer:"Our costs are most reasonable and the best. You can do a comparison in this sector and will find that they are most effective among all."
    },
]

const Account = [
    {
        id:1,
        Header:"Account Privacy/Security Questions",
        Desc:"Learn about account security so that you may manage your account and personal information without fear."
    },
    {
        id:2,
        Question:"Who can see my Private/Personal Information?",
        Answer:"All of your personal information is protected and can be removed at any time. Under no circumstances will we share your personal information."
    },
    {
        id:3,
        Question:"Would my data be shared with third party vendors?",
        Answer:"At Assignment Writing Service, we ensure that your data is safe and beyond the capacity of others to alter. We have strict norms about it.",
    },
    {
        id:4,
        Question:"Who can see the details of my Assignment Writing Service Order?",
        Answer:"No, the specifics of your order are hidden from everyone but the writer and yourself.",
    },
    {
        id:5,
        Question:"Can I remove my Account?",
        Answer:"You have complete control over deleting individual files or the entirety of your account. The account you choose to delete will be permanently deleted, and you will be unable to get it restored.",
    },
    {
        id:6,
        Question:"What to do if I forget the Password?",
        Answer:"As long as you press the 'Forgot Password' button, there's nothing to worry about. Log in to your account with the new password you'll receive through email.",
    },
    {
        id:7,
        Question:"Do you share the data to a third party vendor?",
        Answer:"It is one of our privacy policies to make sure that your data is not shared with any third party vendor. To know more about privacy policy, read the relevant section.",
    },
    {
        id:8,
        Question:"Can my account be hacked?",
        Answer:"We ensure that the cybersecurity is strong. Our servers are protected by the best in class barriers. We also do regular cyber auditing to make sure no case of hacking comes up.",
    },
]

const FaqCategories = () => {

  const [faq,setFaq] = useState(General); 
  const [selectedFaq,setSelectedFaq] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered]   = useState("");

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
  
  // Changing faqs
  const changeFaq = (e) =>{
    const faqArray = e.target.innerText 
    // console.log(e.currentTarget.className);
    if(faqArray!==""){
      e.currentTarget.className+=" faq-categories-background";
    } 

    if(faqArray==='General/Common Questions'){
      setFaq(General);
    }
    else if(faqArray==='Order/Delivery Questions'){
      setFaq(Order);
    }
    else if(faqArray==='Writers/Experts Questions'){
      setFaq(Writers)
    }
    else if(faqArray==='Quality/Professionalism/Satisfaction Questions'){
      setFaq(Quality)
    }
    else if(faqArray==='Pricing/Costing/Payment Questions'){
      setFaq(Pricing);
    }
    else if(faqArray==='Account Privacy/Security Questions'){
      setFaq(Account)
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
    <div className="faq-categories-container">

      <div className="faq-categories-block-1">
        <div className="faq-categories-header">
          <img src={header} alt="header" className="faq-categories-bg-header" />
          <h1>FAQ's</h1>
        </div>
        <h4>Have Any Questions?</h4>

        <div className="search-categories-container">
          <input
            className="input"
            type="text"
            placeholder="Search Any Question"
            value={wordEntered}
            onChange={handleFilter}
          />
          {wordEntered.length === 0 ? (
            <SearchIcon className="search-categories-icon" />
          ) : (
            <CloseIcon className="search-categories-icon" onClick={clearInput} />
          )}
        </div>
      </div>

      <div className="faq-categories-block">

      <div className="categories-container">
          <div className='faq-categories-headers'>
            {Headers.map((header)=>{
              return(
                <h1 key={header.id} className="faq-categories-headers-value" onClick={changeFaq}>{header.Header}</h1>
              )
            })}
          </div>  
      </div>

      <div className='faq-categories-block-2'>
        
        <div className="faq-header-container">
          <h1 className='faq-categories-header1'>{faq[0].Header}</h1>
          <p className="faq-categories-desc">{faq[0].Desc}</p>
        </div>
      
      {filteredData.length===0?
         faq.slice(1,faq.length).map((data,i)=>{
          return (
            <>
            <div key={data.id} className='faq-categories-section' >
              <div className="faq-categories-section-header" onClick={()=>toggleFaq(i)}>
                <img src={chevron} className={selected===i?"chevron rotate":"chevron"} alt="chevron" />
                <h3>{data.Question}</h3>
              </div> 
              
              <div className={selected===i? "faq-categories showFaq-categories": "faq-categories"}>
                {data.Answer}
              </div>
            </div> 
            </>
            
         )}) :

         filteredData.map((data,i)=>{
          return (
            <div key={data.id} className='faq--categoriessection' >
              <div className="faq-categories-section-header" onClick={()=>toggleFaq(i)}>
                <img src={chevron} className={selected===i?"chevron rotate":"chevron"} alt="chevron" />
                <h3>{data.Question}</h3>
              </div> 
              
              <div className={selected===i? "faq-categories showFaq-categories": "faq-categories"}>
                <p>{data.Answer}</p>
              </div>
            </div>  
          )})       
      }
   
      </div>


      </div>
          <div className="question-container-main">
          <div className="question-card-container">
            <div className="confused-card-heading">
              <h1 className="question-card-heading-text">Still Got Some Questions!</h1>
            </div>
            <div className="question-card-details">
              <p className="question-card-details--text">
              Couldn’t find your questions in FAQ section?
              </p>
            </div>
            <div className="question-card-button-container">
                <button className="question-card-button">Contact Us</button>
            </div>
          </div>
          </div>
    </div>
  );
}

export default FaqCategories;


