import axios from "axios"
import "./home.css"
import { Url } from "../url"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

  const [data, setdata] = useState([])

  async function read() {
    const res = await axios.get(`${Url}/teacher`)
    setdata(res.data)
  }

  useEffect(() => {
    read()
  }, [])

  async function del(id) {
    await axios.delete(`${Url}/teacher/${id}`)
    read()
  }


  return (<>
  <Link to="/teacher/create"><button className="btn btn-primary mb-4">Create</button></Link>
  <div className="row">
    {data.map(item => (
      <div className="col col-sm-12 col-md-6 col-lg-4 mb-4" key={item.id}>
        <div className="card Cards_card__border__xEgVC">
          <div className="p-4">
            <div className="media">
              <div className="media-body">
                <h5 className="mt-0 mb-1">{item.name}</h5>
                <h6 className="mt-0 mb-1">{item.role}</h6>
              </div>

              <div className="profile-icon">
                {/* Include font-awesome icon */}
                <i className="fa-solid fa-user fa-2x mb-5"></i>
                <Link to={`/teacher/edit/${item.id}`}><i className="fa-solid fa-gear fa-2x mb-5" style={{ color: "#a4a7ad" }}></i></Link>
                <Link onClick={() => del(item.id)}><i className="fa-solid fa-trash fa-2x"></i></Link>
              </div>
            </div>
            <hr />
            <div className="portfolioDetails">
              <div className="p-status mb-2">Subject: <strong>{item.subject}</strong></div>
              <div className="p-mentor mb-2">Standard: <strong>{item.class}</strong></div>
              <div className="p-comments mb-2">Language: <strong>{item.language}</strong></div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  </>
  )
}

export default Home;