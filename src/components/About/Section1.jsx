import { Link } from "react-router-dom"
// import DownloadLink from "react-download-link";
import CvPdf from "../cv/CV.pdf"


export const Section1 =() =>{
  return(
    <section className="sec1">
      <div className=" intro">
        
          <div className="txt1">
            <div className="bg1"></div>
            <h4>Hi There! I Am</h4>
            <h1>Macourage</h1>
            <p>Developer, UI/UX Designer <br/><span>Residing in Port Harcourt...</span></p>
            
            <div>
              <Link to={CvPdf} target="_blank" rel="noopner noreferrer" download={""}> 
              <button className="hireMe">
                  Download CV
                </button> 
              </Link>
              <Link to={'/Contact'}>
                <button className="contactMe">
                  Contact Me !
                </button>
              </Link>
            </div>
          </div>
          <div className="image1">
            <img src = {require ("../media/macourage2.png")} alt="" />
          </div>
      </div>
    </section>
  )
}