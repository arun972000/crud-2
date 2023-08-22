
import "./card.css"


const Card =()=>{
    return(<div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 py-2 shadow-sm bg-body-tertiary rounded bcolor">
    <div className="card-body">
        <div className="row">
      <div className="col"><div style={{fontSize:12}}><b>EARNINGS (MONTHLY)</b></div><div><h5 >$40,000</h5></div></div>
      <div className="col-auto d-flex justify-content-center align-items-center"><div><i className="fa-solid fa-calendar-days fa-2x"></i></div></div>
      </div>
    </div>
  </div>
  </div>)
}

export default Card;