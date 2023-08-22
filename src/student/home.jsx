import axios from "axios";
import { Url } from "../url";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './card.css'

const SHome = () => {
    const [data, setData] = useState([]);

const deleteuser= async(id)=>{
 await axios.delete(`${Url}/student/${id}`)
 lists()

}

    const lists = async () => {
        try {
            const response = await axios.get(`${Url}/student`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        lists();
    }, []);

    return (
<>
<Link to="/student/create"><button className="btn btn-primary mb-4">Create</button></Link>
        <div className="container ">
            
          <div className="table-responsive px-5">
                <table className="table shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                    <thead className="custom-thead">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(({ id, Name, Age, email }) => (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td >{Name}</td>
                                <td >{Age}</td>
                                <td >{email}</td>
                                <td >
                                    <Link to={`/student/edit/${id}`} className="btn btn-outline-secondary mb-1" style={{ marginRight: '2rem' }}>Edit</Link>
                                    <Link className="btn btn-outline-danger mb-1"style={{ marginRight: '2rem' }} onClick={()=>deleteuser(id)}>Delete</Link>
                                </td>

                            </tr>
                        ))}


                    </tbody>
                </table>
                </div>
               
            
        </div>
        </>
    );
};

export default SHome;
