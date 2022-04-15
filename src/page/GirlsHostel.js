import React from 'react'

function GirlsHostel(props) {
    window.document.title = props.title;
    function person() {
        return (
            <>
                <th scope="row">3</th>
                <td>301</td>
                <td>XYZ Aher</td>
                <td>7612511783</td>
                <td>IF</td>
            </>
        )
    }
    return (
        <>
            <h4 className='text-center py-2  text-dark TitleText '> <i className="bi bi-person-fill "></i> Girls Hostel </h4>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-lg-3 fontChange my-3 my-lg-0">
                        <div className="nav flex-row  flex-lg-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active col-3 col-lg-auto" id="v-pills-AllYearStudents-tab" data-toggle="pill" href="#v-pills-AllYearStudents" role="tab" aria-controls="v-pills-AllYearStudents" aria-selected="true">All Year Student</a>
                            <a className="nav-link col-3 col-lg-auto" id="v-pills-ThirdYear-tab" data-toggle="pill" href="#v-pills-ThirdYear" role="tab" aria-controls="v-pills-ThirdYear" aria-selected="false">3rd Year </a>
                            <a className="nav-link col-3 col-lg-auto" id="v-pills-SecondYear-tab" data-toggle="pill" href="#v-pills-SecondYear" role="tab" aria-controls="v-pills-SecondYear" aria-selected="false">2nd Year </a>
                            <a className="nav-link mb-3 col-3 col-lg-auto" id="v-pills-FirstYear-tab" data-toggle="pill" href="#v-pills-FirstYear" role="tab" aria-controls="v-pills-FirstYear" aria-selected="false">1st Year </a>

                        </div>
                    </div>
                    <div className="col-12 col-lg-9" id='listbody'>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-AllYearStudents" role="tabpanel" aria-labelledby="v-pills-AllYearStudents-tab">
                                <ul className="list-group list-group-flush bg-transparent">
                                    {/* all student list here */}
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">EnRoll No</th>
                                                <th scope="col">Roll No</th>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Branch</th>
                                                <th scope="col">Room No</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>314</td>
                                                <td>kaasdkde</td>
                                                <td>9021767520</td>
                                                <td>IF</td>
                                            </tr>
                                            <tr>
                                                {person()}
                                            </tr>
                                            <tr>
                                                {person()}
                                            </tr>

                                        </tbody>
                                    </table>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-ThirdYear" role="tabpanel" aria-labelledby="v-pills-ThirdYear-tab">
                                <ul className="list-group list-group-flush bg-transparent">
                                    {/* all student list here */}
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">EnRoll No</th>
                                                <th scope="col">Roll No</th>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Branch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {person()}
                                            </tr>
                                        </tbody>
                                    </table>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-SecondYear" role="tabpanel" aria-labelledby="v-pills-SecondYear-tab">
                                <ul className="list-group list-group-flush bg-transparent">
                                    {/* all student list here */}
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">EnRoll No</th>
                                                <th scope="col">Roll No</th>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Branch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {person()}
                                            </tr>
                                        </tbody>
                                    </table>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="v-pills-FirstYear" role="tabpanel" aria-labelledby="v-pills-FirstYear-tab">
                                <ul className="list-group list-group-flush bg-transparent">
                                    {/* all student list here */}
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">EnRoll No</th>
                                                <th scope="col">Roll No</th>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Branch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>314</td>
                                                <td>Sudarshan kakde</td>
                                                <td>9021767520</td>
                                                <td>IF</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center'>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className=' text-light text-decoration-none btn btn-primary mt-2 mx-auto'>
                        <b><i className="bi bi-download"></i> Dowload Data file</b>
                    </a>
                </p>
            </div>
        </>
    )
}

export default GirlsHostel
