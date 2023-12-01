import "./footer.css"
import { Link } from "react-router-dom"
import { EnvelopePaperHeart, Github,  Linkedin,  Phone, Twitter, Whatsapp } from "react-bootstrap-icons"

export const Footer = ()=> {
  
  return(
  <footer>
      <div className="arrange">
        <div className="logof">
            <Link to={"/"}> <img src={require("../media/macourage.png")} alt=""/> </Link>
        </div>
        <div>
          <div className="mid2">
            <Link to = "/"> Home </Link> 
            <Link to = "/Portfolio"> Portfolio </Link>
            <Link to = "/About"> About </Link>
            <Link to = "/Contact"> Contact </Link>
          </div>
        </div>
        <div className="con">
          <div className="phn1">
            <Phone className="icns3" /> 
            <h6 className="num1">+234 8180729451, +234 9121175449</h6>
          </div>
          <div className="phn1">
            <EnvelopePaperHeart className="icns3" />
            <h6 className="num1">macourage17@gmail.com</h6>
          </div>
          <div className="icons3">
            <Link to={"https://wa.link/lle71m"} > <Whatsapp className="icns3"/> </Link>
            <Link to={"https://www.linkedin.com/in/courage-macjude-095a25220/"}> <Linkedin className="icns3"/> </Link>
            <Link to={"https://github.com/macourage18"}> <Github className="icns3"/> </Link>
            <Link to={"https://twitter.com/mac_courage"}> <Twitter className="icns3"/> </Link>
          </div>
        </div>
      </div>
  </footer>

  )
}