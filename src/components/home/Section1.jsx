import "./home.css"



export const Section1 = ()=>{
 
  
  return(
    <div >
      <section className="sect">
      <div className="box">
      <img className="mac" src={require("../media/macourage.png")} alt="" />
      </div>

      <div className="box">
      <div className="text">
        <h1>Welcome !</h1>
        <h2>I'm MaCourage</h2>
      </div>
      </div>
      </section>
    </div>
  )
}