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
          <Link to="https://oceancapitals.net/index.php">
          <p className="see"> Visit Site </p>
          
          <div className="card">
            <img src={require("../media/ocean.png")} alt="" />
            <div className="des">
            <p>Web App: Resposive Website for Financial Website</p>
            </div>
          </div>
          </Link>
         </div>
         <div>
          <Link to="https://maxalzon.comhttps://maxalzon.com/">
          <p className="see"> Visit Site </p>
          
          <div className="card">
            <img src={require("../media/max.png")} alt="" />
            <div className="des">
            <p>Web App: Responsive Construction website for Max Alzon</p>
            </div>
          </div>
          </Link>
         </div>
    
           
          </div>
      </section>
    
  )
}