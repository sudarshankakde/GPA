import React from 'react'
import hostelImage from "../res/images/hostel.jpg"

export default function LoginForm(props) {
    document.title = props.title;
    function PasswordVisiblity() {
        if (window.document.getElementById("Password").type === "password") {
            window.document.getElementById("Password").type = "text";
            window.document.getElementById("passwordVisiblity").innerHTML = "Hide Password";
        }
        else {
            window.document.getElementById("Password").type = "password";
            window.document.getElementById("passwordVisiblity").innerHTML = "Show Password";
        }
    }
    return (
        <>
            <div className="container my-lg-5" id='loginForm'>
                <div className="row pt-lg-5 pt-4">
                    <div className="col-lg-6">
                        <img src={hostelImage} alt="" className="img-fluid shadow" />
                    </div>
                    <div className="col-lg-6">

                        <form className="my-5" action="home" method="post">
                            <div className="form-group mt-lg-3 ">
                                <label htmlFor="Username">Username</label>
                                <input type="text" className="form-control" id="Username" aria-describedby="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" id="Password" />
                                <span className="text-muted float-right mx-1" onClick={PasswordVisiblity}
                                    style={{ cursor: "pointer", textDecoration: "underline", userSelect: "none" }}
                                    id="passwordVisiblity">Show Password </span>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-outline-primary float-lg-right px-4 float-left mb-5 mb-lg-0">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
