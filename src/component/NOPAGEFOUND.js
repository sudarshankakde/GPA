import React from 'react'
import page404 from '../res/images/page404.svg'
import { Link } from 'react-router-dom';
function NOPAGEFOUND(props) {
    window.document.title = props.title;
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-9 mx-auto text-center my-auto py-4">
                        <img src={page404} alt="Page NOt Found" className='img-fluid' />
                        <h2 className='fontchange text-center my-3'>Seems like you are lost !
                        </h2>
                        <Link to="/home"><button className='btn btn-outline-dark text-light bg-dark mx-auto my-3'>
                            Go Back To Home
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NOPAGEFOUND