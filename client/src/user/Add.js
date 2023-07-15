import React, { useState } from "react";
import Base from "../core/Base";
import { add } from "./helper/userapicalls";


const Add = () => {

    const [values, setValues] = useState({
        name: "",
        link: "",
        logo: "",
        description: "",
        isPaid: false,
        duration: "",
        location: "",
        organization: "",
        error: "",
        success: false
    })

    const { name, link, logo, description, isPaid, duration, location, organization, error, success } = values;



    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        add({ name, link, logo, description, isPaid, duration, location, organization })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: "",
                        link: "",
                        logo: "",
                        description: "",
                        isPaid: false,
                        duration: "",
                        location: "",
                        organization: "",
                        error:"",
                        success: true
                    })
                }
            })
            .catch(()=>{
                console.log("Error in Adding program")
            })
    }

    const successMessage = () => {
        return (

            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                        Program added Successfully
                    </div>
                </div>
            </div>

        )
    }

    const errorMessage = () => {
        return (<div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
            </div>
        </div>)
    }

    const addProgramForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">
                                Name
                            </label>
                            <input className="form-control" onChange={handleChange("name")} type="text" value={name} placeholder="Name of Program"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Link
                            </label>
                            <input className="form-control" onChange={handleChange("link")} type="text" value={link} placeholder="Place link to Program page"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            Logo
                            </label>
                            <input className="form-control" onChange={handleChange("logo")} type="text" value={logo} placeholder="Provide direct link of the Logo"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            Description
                            </label>
                            <input className="form-control" onChange={handleChange("description")} type="text" value={description} placeholder="Add some description about Program"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            isPaid
                            </label>
                            <input className="form-control" onChange={handleChange("isPaid")} type="text" value={isPaid} placeholder="True/False" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            Organization
                            </label>
                            <input className="form-control" onChange={handleChange("organization")} type="text" value={organization} placeholder="Name of the Organization/Organizer" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            Duration
                            </label>
                            <input className="form-control" onChange={handleChange("duration")} type="text" value={duration} placeholder="Duration of Program"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                            Location
                            </label>
                            <input className="form-control" onChange={handleChange("location")} type="text" value={location} placeholder="Remote/onSite(Provide Specific Place Name)" />
                        </div>
                        <button onClick={onSubmit} className="btn btn btn-primary form-control">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Add Programs" description="A page for Adding program">
            {successMessage()}
            {errorMessage()}
            {addProgramForm()}
        </Base>
    )
}

export default Add;