import React from 'react'
var data = [
    {
        name: "sudarshan kakde",
        RoomNo: 311,
        Deparment: 'IF6I',
        contactDetails: {
            Mobile: 9021767520,
            mail: "sidop@gmail.com"
        },
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti sapiente iusto, dignissimos voluptate omnis itaque amet totam, saepe earum expedita iste officia quas aliquam ratione, voluptates nam fugit. Officia, vitae molestiae ullam animi dicta sit exercitationem nemo minus reiciendis adipisci ducimus ipsa, commodi quaerat fugiat earum totam nostrum! Possimus.",
        time: new Date().toLocaleTimeString(),
        date: "10/july/2022",
        image: "https://bit.ly/38FKvKz",
    },
    {
        name: "Avi Aher",
        RoomNo: 310,
        Deparment: 'IF6I',
        contactDetails: {
            Mobile: 7666381783,
            mail: "sidop@gmail.com"
        },
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti sapiente iusto, dignissimos voluptate omnis itaque amet totam, saepe earum expedita iste officia quas aliquam ratione, voluptates nam fugit. Officia, vitae molestiae ullam animi dicta sit exercitationem nemo minus reiciendis adipisci ducimus ipsa, commodi quaerat fugiat earum totam nostrum! Possimus.",
        time: new Date().toLocaleTimeString(),
        date: "10/sep/2022",
        image: "https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg"
    },
    {
        name: "OM Kasar",
        RoomNo: 301,
        Deparment: 'IF6I',
        contactDetails: {
            Mobile: 128475253,
            mail: "sidop@gmail.com"
        },
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deleniti sapiente iusto, dignissimos voluptate omnis itaque amet totam, saepe earum expedita iste officia quas aliquam ratione, voluptates nam fugit. Officia, vitae molestiae ullam animi dicta sit exercitationem nemo minus reiciendis adipisci ducimus ipsa, commodi quaerat fugiat earum totam nostrum! Possimus.",
        time: new Date().toLocaleTimeString(),
        date: "2/june/2022",
        image: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
    },
]
function RejectedApplications(props) {
    window.document.title = props.title;
    return (
        <>
            <h4 className='text-center py-2  text-dark TitleText'> <i className="bi bi-x-square-fill  "></i> Rejected Applications</h4>
            <div className="container my-5 ">
                <div className="row">
                    {data.map(function (i, index) {
                        return (
                            <div className="col-4  border border-dark p-3 m-1 mx-auto w-75" style={{ userSelect: "auto", }}>
                                <p className='row'>
                                    <div className="col-lg-9 col-12 order-2 order-lg-1 ">
                                        <b>Name:</b> {i.name}<br />
                                        <b>Room No:</b> {i.RoomNo} <br />
                                        <b>Deparment:</b> {i.Deparment} <br />

                                        <b>Contact Details:</b><br />
                                        <span className='mb-3'>
                                            <i className="bi bi-arrow-return-right"></i>
                                            <b>Mobile:</b> {i.contactDetails.Mobile}
                                            <br />
                                            <i className="bi bi-arrow-return-right"></i>
                                            <b>Mail:</b> <a href="mailto:">{i.contactDetails.mail}</a>
                                        </span>
                                        <br />
                                        <b className='text-decoration-underline pb-1'>Description And Reason: <br /></b><i className="bi bi-arrow-return-right"></i><small className='pl-1'>
                                            {i.description}</small>
                                    </div>
                                    <div className="col-lg-3 col-12 order-1 order-lg-2 pb-4">
                                        <img src={i.image} alt="" className='img-fluid shadow ' />
                                    </div>
                                </p>
                                <p className='text-muted small my-auto ' style={{ float: "right", verticalAlign: "middle", textTransform: "capitalize" }}>date: {i.date}
                                    <br />
                                    time : {i.time}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default RejectedApplications