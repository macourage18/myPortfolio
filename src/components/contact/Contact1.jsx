import "./contact.css"
import { EnvelopePaperHeart, Github,  Linkedin,  Phone, Twitter, Whatsapp } from "react-bootstrap-icons"
import { useForm, ValidationError } from "@formspree/react"
import { Link } from "react-router-dom"



export const Contact1 = () =>{

  const [ state, handleSubmit ]= useForm("mqkvvoan")
  if (state.succeeded){
    return (<div className="susPage">
    <div className="cont3">
      <img className="img" src={require("../media/emial.png")} alt="" />
      <h5 className="success"> Your message Has Been Sent !!! </h5>
    </div>
    </div>
    )
  }

  return(
    <div>
      <div className="div1">
        <h1 className="chat"> Lets Chat! </h1>
        <div className="cont">
        <Link to = {"/"}> 
          <div className="me">
            <img src={require("../media/macourage2.png")} alt="" /> 
          </div>
          </Link>
        </div>
        
        <div className ="cont2">
          <div className ="div2">
            <form onSubmit={handleSubmit}>
              <input type="text" id="name" placeholder="Your name" required />
              <ValidationError className="err" prefix="Text" field="text" errors={state.errors} />
              <input type="email" placeholrequiredder="Email" id="email" required />
              <ValidationError className="err" prefix="Email" field="email" errors={state.errors} />
              <textarea placeholder="Your message" name="message" id="messsage" required />
              <ValidationError className="err" prefix ="Message" field ="message" errors={state.errors} />
              <button type="submit" disabled={state.submitting} className="subBtn">
              Send
              </button>
            </form>

            <div className="div3"> </div>

            <p>Contact</p>

            <div className="icons2">
              <Link to={"https://wa.link/lle71m"} > <Whatsapp className="icns2"/> </Link>
              <Link to={"https://www.linkedin.com/in/courage-macjude-095a25220/"}> <Linkedin className="icns2"/> </Link>
              <Link to={"https://github.com/macourage18"}> <Github className="icns2"/> </Link>
              <Link to={"https://twitter.com/mac_courage"}> <Twitter className="icns2"/> </Link>
            </div>

            <div className="phn">
              <Phone className="icns3" /> 
              <h6 className="num">+234 8180729451, +234 9121175449</h6>
              <EnvelopePaperHeart className="icns3" />
              <h6 className="num">macourage17@gmail.com</h6>
            </div>

          </div>
          
        </div>
      </div>

    </div>
  )
}