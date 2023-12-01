import "./nav.css"
import { Whatsapp, Twitter, Linkedin, Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom"
import { useEffect, useState} from  "react"


export const Navbar = () =>{

  const [active, setActive] = useState("not-active")
  const [useToggle, setUseToggle] = useState (false)
  const [show, setShow] = useState (false)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [overlay, setOverlay] = useState ("not-active")


  const controlNav = ()=>{
    if (typeof window !== "undefined"){
      if(window.scrollY > lastScrollY){
        setShow(true)
      }else{
        setShow(false)
      }
    }
    setLastScrollY(window.scrollY);
  }


    
  useEffect (()=>{
    if (typeof window !== "undefined"){
      window.addEventListener("scroll", controlNav )
      return () =>{
        window.removeEventListener("scroll", controlNav)
      
    }
    }
  //eslint-disable-next-line
  }, [lastScrollY])
  //eslint-disable-next-line

  function handleOverlay (){
    return useToggle? setOverlay(setActive) : ""
  }
  useEffect (()=>{
    if (typeof window !== "undefined"){
      window.addEventListener("scroll", handleOverlay)
    }
  //eslint-disable-next-line
  }, [overlay])
  //eslint-disable-next-line

  

  const handleChange = ()=>{
    setUseToggle(!useToggle)
  }

  const handleActive = ()=> {
    return useToggle ? setActive("not-active") : setActive("is-active") 
  }

 return (
    <div>

      <div className={`overlay ${active}`} onClick={handleOverlay}></div>
      
      <nav className={`mobilenav ${active}`} >
        <Link to = "/"> Home </Link> 
        <Link to = "/Portfolio"> Portfolio </Link>
        <Link to = "/About"> About </Link>
        <Link to = "/Contact"> Contact </Link>

       
        <Link to={"https://wa.link/lle71m"}> <Whatsapp className="icns" /> </Link>
        <Link to={"https://github.com/macourage18"}> <Github className="icns" /> </Link>
        <Link to= {"https://twitter.com/mac_courage"} > <Twitter className="icns" /> </Link>
        <Link to= {"https://www.linkedin.com/in/courage-macjude-095a25220/"}> <Linkedin className="icns" /> </Link>

      </nav>
      <nav className={ show ? "is-hidden" : "is-visible" } >
      
      <div className="logo">
        <Link to= "/" > <img src= {require('../components/media/macourage.png')} alt="" /> </Link>
      </div>

      <div className="mid">
      <Link to = "/"> Home </Link>
      <Link to = "/Portfolio"> Portfolio </Link>
      <Link to = "/About"> About </Link>
      <Link to = "/Contact"> Contact </Link>
      </div>

      <div className="icons">
        <Link to={"https://wa.link/lle71m"}> <Whatsapp className="icns" /> </Link>
        <Link to={"https://github.com/macourage18"}> <Github className="icns" /> </Link>
        <Link to= {"https://twitter.com/mac_courage"} > <Twitter className="icns" /> </Link>
        <Link to= {"https://www.linkedin.com/in/courage-macjude-095a25220/"}> <Linkedin className="icns" /> </Link>
      </div>
      <button onClick={() => {
        handleChange()
        handleActive();
        }} className={`hamburger ${active} `}>
        <div class="bar"></div>
      </button>
      {useToggle}
    </nav>
    </div>
    
  ) 
} 