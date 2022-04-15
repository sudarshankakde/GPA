import React from 'react'

function FooterComponet() {
    const ItDept = "https://gpambad.ac.in/departments/information-technology-dept/";
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <footer>
                <div className="container-fluid  bg-dark text-light pt-3">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <p className='text-left text-lg-center text-sm-center'>© {year} Gpambad. All Rights Reserved | Site Designed and maintained by <a href={ItDept} target="_blank" rel="noopener noreferrer" className='ml-1 link' >Department of Information Technology.</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponet