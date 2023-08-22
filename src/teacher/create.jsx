import { useState } from "react";
import axios from "axios";
import { Url } from "../url";
import { useNavigate, Link } from "react-router-dom";
const Create = () => {
    const navigate = useNavigate()
    const apicall = async () => {
        const res = await axios.post(`${Url}/teacher`, Formdata);
        console.log(res)

    }

    const [Formdata, setFormdata] = useState({
        name: "",
        role: "",
        subject: "",
        class: "",
        language: ""
    })

    function Handleclick(e) {
        const { name, value } = e.target
        setFormdata({ ...Formdata, [name]: value })
    }



    function submit(e) {
        e.preventDefault()

        if (Formdata.name == "" || Formdata.role == "" || Formdata.subject == "" || Formdata.class == "" || Formdata.language == "") {
            alert("type details")
        } else {
            setFormdata({
                name: "",
                role: "",
                subject: "",
                class: "",
                language: ""
            })
            apicall()
            navigate("/teacher/home")
        }

    }

    return (
        <> <Link to="/teacher/home"> <button className="btn btn-secondary">Back</button></Link>
            <form onSubmit={submit}>
                <fieldset>
                    <div className="container">
                        <div>
                           
                            <div className="form-group">
                                <label htmlFor="exampleInputname1" className="form-label mt-4">Name</label>
                                <input type="text" className="form-control" name="name" id="exampleInputname1" value={Formdata.name} onChange={Handleclick} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputrole1" className="form-label mt-4">Role</label>
                                <input type="text" className="form-control" name="role" id="exampleInputrole1" value={Formdata.role} onChange={Handleclick} placeholder="Role" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputsub1" className="form-label mt-4">Subject</label>
                                <input type="text" className="form-control" name="subject" id="exampleInputsub1" value={Formdata.subject} onChange={Handleclick} placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputclass1" className="form-label mt-4">Class</label>
                                <input type="number" className="form-control" name="class" id="exampleInputclass1" value={Formdata.class} onChange={Handleclick} placeholder="Class" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputlanguage1" className="form-label mt-4">Language</label>
                                <input type="text" className="form-control" name="language" id="exampleInputlanguage1" value={Formdata.language} onChange={Handleclick} placeholder="Language" />
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                                <div id="liveAlertPlaceholder"></div>
                                <button className="btn btn-primary" id="liveAlertBtn" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>)
}

export default Create