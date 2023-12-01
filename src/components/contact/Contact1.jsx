import "./contact.css"
import { EnvelopePaperHeart, Github,  Linkedin,  Phone, Twitter, Whatsapp } from "react-bootstrap-icons"
import { useForm, ValidationError } from "@formspree/react"
import { Link } from "react-router-dom"



export const Contact1 = () =>{

  const [ state, handleSubmit ] = useForm ("meqbkybj")
  if (state.succeeded){
    return <h5> your message has been sent </h5>
  }

  return(
    <div>
      <div className="div1">
        <h1 className="chat"> Lets Chat! </h1>
        <div className="cont">
          <div className="me">
            <Link to = {"/"}> <img src={require("../media/macourage2.png")} alt="" /> </Link>
          </div>
        </div>
        
        <div className ="cont2">
          <div className ="div2">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name"></label>
              <input type="text" placeholder=" Name" id="name"/>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <label htmlFor="email"></label>
              <input type="email" placeholder="Email" id="email" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea placeholder="Your message" name="message" id="messsage"/>
              <ValidationError prefix ="Message" field ="message" errors={state.errors} />
              <button type={"submit"} disabled={"state.submitting"} className="subBtn">
              Submit
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