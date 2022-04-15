import React from 'react'
import dte from '../res/images/dte.jpg'
import '../res/css/style.css'
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    const logostyle = {
        height: "10vh",
        zIndex: 15,
    };

    return (
        <>
            <div className="text-center navbar-light bg-dark  py-2 " id='navbar'>
                <a className="navbar-brand float-lg-left ml-lg-5 px-auto  mx-auto mx-lg-5 px-2" href='/Home'>
                    <img src={dte} alt="DTE" className="img-fluid shadow"
                        style={logostyle} id="logo" /></a>
                <b className="navbar-text text-center text-light ml-lg-5 px-auto  mx-auto mx-lg-5 px-2">
                    <h4 id='navtext'>शासकीय तंत्रनिकेतन अंबड</h4>
                </b>
                <b className="btn btn-trasperent ml-lg-5 px-auto  ml-0 mx-lg-5 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#manu" id="manubars" aria-controls="manu"><i className="bi bi-list h3 text-light"></i></b>


            </div>
            <div className="offcanvas offcanvas-end bg-dark text-light" tabIndex="-1" id="manu" aria-labelledby="manuLabel" data-bs-backdrop="true" data-bs-scroll="false" data-bs-toggle="offcanvas">
                <div className="offcanvas-header m-3 align-self-end">
                    <button type="button" className="btn-close text-reset text-light btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" id='navLinks'>
                    <ul>
                        <p className='text-center'><i className="bi bi-house-fill h4"></i></p>
                        <li>
                            <Link to="/Home">Home</Link></li>
                        <hr />
                        <p className='text-center'><i className="bi bi-clock-history h4"></i></p>
                        <li>
                            <Link to="/History">History</Link></li>
                        <li><Link to="/PendingApplication">Pending Application</Link></li>
                        <li><Link to="/RejectedApplications">Rejected Application</Link></li>
                        <hr />
                        <p className='text-center'><i className="bi bi-person-fill h4"></i></p>
                        <li>
                            <Link to="/BoysHostel">Boys Hostel</Link></li>
                        <li>
                            <Link to="/GirlsHostel">Girls Hostel</Link></li>
                        <hr />
                        <p className='text-center'><i className="bi bi-door-open-fill h4"></i></p>
                        <li>
                            <NavLink to="/Login">LogIn</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
