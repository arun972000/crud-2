import Card from './header cards';
import Card2 from './card2';
import "./card2.css";
import Colorcard from './colorcard';
import "./card2.css";


const Dash=()=>{
    return(<><div className="d-flex justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <button className="btn btn-primary">Report</button>
  </div>
  <div className="row">
    <Card />
    <Card />
    <Card />
    <Card />
    
  </div>
  <div className="row">
    <Colorcard><Card2>
      <h4 className="small font-weight-bold">Server Migration<span className="float-right">25%</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h4 className="small font-weight-bold">Customer Database<span className="float-right">50%</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h4 className="small font-weight-bold">Payout Details<span className="float-right">75%</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h4 className="small font-weight-bold">Account Setup<span className="float-right">Complete!</span></h4>
      <div className="progress mb-4">
        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </Card2></Colorcard>
    <div className="col-lg-6 mb-4">
      <Card2>
        <div className="text-center">
          <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} alt="Responsive" />
        </div>
        <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
        <a target="blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
      </Card2>
      <Card2>
        <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
          Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
      </Card2>
    </div>
  </div>
  </>)
}

export default Dash;