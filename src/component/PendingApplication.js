import React from 'react'

function PendingApplication(props) {
    window.document.title = props.title;
    function showSomeData() {


        return (
            <>
                <div className="col-4  border border-dark p-3 m-1 mx-auto w-75" style={{ userSelect: "auto", }}>
                    <p className='row'>
                        <div className="col-lg-9 col-12 order-2 order-lg-1 ">
                            <b>Name:</b> Sudarshan kakde.<br />
                            <b>Room No:</b> 114 <br />
                            <b>Deparment:</b> IF4I <br />

                            <b>Contact Details:</b><br />
                            <span className='mb-3'>
                                <i className="bi bi-arrow-return-right"></i>
                                <b>Mobile:</b> +919021767520
                                <br />
                                <i className="bi bi-arrow-return-right"></i>
                                <b>Mail:</b> <a href="mailto:sudarshankakde1111@gmail.com">sudarshankakde1111@gmail.com</a>
                            </span>
                            <br />
                            <b className='text-decoration-underline pb-1'>Description And Reason: <br /></b><i className="bi bi-arrow-return-right"></i><small className='pl-1'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti sapiente iusto, dignissimos voluptate omnis itaque amet totam, saepe earum expedita iste officia quas aliquam ratione, voluptates nam fugit. Officia, vitae molestiae ullam animi dicta sit exercitationem nemo minus reiciendis adipisci ducimus ipsa, commodi quaerat fugiat earum totam nostrum! Possimus.</small>
                        </div>
                        <div className="col-lg-3 col-12 order-1 order-lg-2 pb-4">
                            <img src="https://bit.ly/38FKvKz" alt="" className='img-fluid shadow ' />
                        </div>
                    </p>

                    <div className="btn-group my-3">
                        <button className='btn btn-outline-success mx-2 px-2 py-1'><i className="bi bi-check2-square"></i> Approve </button>
                        <button className='btn btn-outline-danger mx-2 px-2 py-1'> <i className="bi bi-x-square"></i> Reject  </button>
                    </div>
                    <p className='text-muted small my-auto ' style={{ float: "right", verticalAlign: "middle", textTransform: "capitalize" }}>date: 10/02/2022
                        <br />
                        time : 10:22 Pm
                    </p>
                </div>
            </>
        )

    }
    return (
        <>
            <h4 className='text-center py-2  text-dark TitleText'> <i className="bi bi-hourglass-top "></i> Pending Applications</h4>
            <div className="container my-5 ">
                <div className="row">
                    {showSomeData()}
                    {showSomeData()}
                    {showSomeData()}
                    {showSomeData()}
                </div>
            </div>
        </>
    )
}

export default PendingApplication