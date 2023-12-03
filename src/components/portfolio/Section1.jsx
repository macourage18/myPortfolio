import { Link } from "react-router-dom"

export const Section1 =() =>{
  return(
    <section className="sec2">
        <div className="image2">
          <p className="txt3">====================</p>
          <p className="txt2"> My Works </p>
          <p className="txt5">====================</p>
          <img src= {require("../media/MacBook Pro 16_ - 5.png")} alt="" />
        </div>
        <div className="container">
         <div>
          <Link to="">
          <p className="see"> Visit Site </p>
          </Link>
          <div className="card">
            <img src={require("../media/webimage.png")} alt="" />
            <div className="des">
                <p>Professional 4 Landing Page Portfolio</p>
            </div>
          </div>
         </div>
         <div>
          <Link to="">
          <p className="see"> Visit Site </p>
          </Link>
          <div className="card">
            <img src={require("../media/webimage.png")} alt="" />
            <div className="des">
            <p>Professional 4 Landing Page Portfolio</p>
            </div>
          </div>
         </div>
         <div>
          <Link to="">
          <p className="see"> Visit Site </p>
          </Link>
          <div className="card">
            <img src={require("../media/webimage.png")} alt="" />
            <div className="des">
            <p>Professional 4 Landing Page Portfolio</p>
            </div>
          </div>
         </div>
           
          </div>
      </section>
    
  )
}