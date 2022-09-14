import React from "react"

export function MainDetails({contract, project}) {


    return (
        <div className="cardItem">
            <a href=""
                className="text-decoration-none"
               data-bs-toggle="modal"
               data-bs-target="#addTaskModal_2"
            >
            <div className="row"
            >
                <div className="col-8">
                    <div className="cardTitleText bold">{contract.contract_no}</div>
                    <p className="text-muted">{contract.packages}</p>
                </div>
                <div className="col-4 ttt">
                    <div className="flexing">

                        <div className="image--flex">


                        </div>
                        <div className="buttons">
                            <button className="btn tools iconsize">
                                <i className="fa-solid fa-list-check px-1"></i>
                                2/3
                            </button>
                            {/* <button className="btn">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
              </button> */}
                            {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button> */}
                            <div className="dropdown">
                                {/* className="dropdown-toggle" */}
                                <button
                                    className="btn tools"
                                    type="button"
                                    id="dropdown1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdown1">
                                    <li>
                                        <a
                                            className="dropdown-item text-primary"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-danger" href="#">
                                            Archive
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <div className="taskBottom">
                    <p className="cardText bold">
                        <i className="fa-solid fa-clock"></i> 
                    </p>
                    <h6>
                        {/* <span className={`badge mt-1 bg-${status == "Normal" ? "primary" : status == "pending" ? "warning" : "danger"}`}>{status}</span> */}
                    </h6>
                </div>
                {/* <button
                    type="button"
                    name="addTask"
                    className="btn btn-secondary rounded-circle circle-width"
                    data-bs-toggle="modal"
                    data-bs-target="#addTaskModal"
                >
                    <i className="fa-solid fa-plus "></i>
                </button> */}
            </div>
            </a>
            <div
                className="modal fade"
                id="addTaskModal_2"
                tabIndex="-1"
                role="dialog"
                // aria-lablledby="addTaskModalTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title cl-light text-light" id="addTaskModalTitle">
                                New Task
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >

                                <i className="fa-duotone fa-circle-xmark close-icon"></i>
                            </button>

                        </div>
                        <div className="modal-body">
                            <ul
                                className="nav nav-pills nav-justified"
                                id="mytab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="home-tab-pane"
                                        aria-selected="true"
                                    >
                                        Details
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile-tab-pane"
                                        aria-selected="false"
                                    >
                                        Members
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="home-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex="2"
                                >
                                    <form>
                                        {/* <div className="input-group flex-nowrap mt-3">
                                <span
                                  className="input-group-text"
                                  id="addon-wrapping"
                                >
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Find customer"
                                  aria-label="Username"
                                  aria-describedby="addon-wrapping"
                                  ref={contractNoRef}
                                />
                              </div> */}
                                        <div className="input-group mb-3 mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Find customer"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"

                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="submit"
                                                id="button-addon2"
                                            >
                                                Find
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mb-5">
                                        <div className="row">
                                            <div className="col-1 col-sm-1">
                                                <label
                                                    htmlFor="project"
                                                    className="col-form-label text-muted"
                                                >
                                                    Project
                                                </label>
                                            </div>
                                            <div className="col-3 col-sm-3 mt-2">
                                                {project}
                                            </div>
                                            <div className="col-2"></div>
                                            {/* <div className="col-2 col-sm-1"></div> */}
                                            <div className="col-1 col-sm-1">
                                                <label
                                                    htmlFor="project"
                                                    className="col-form-label text-muted"
                                                >
                                                    Customer
                                                </label>
                                            </div>
                                            <div className="col-5 col-sm-5">
                                                <div className="input-group mb-3">
                                                    {contract.contract_no}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1 col-sm-1">
                                                <label
                                                    htmlFor="deadline"
                                                    className="col-form-label text-muted"
                                                >
                                                    Deadline
                                                </label>
                                            </div>
                                            <div className="col-3 col-sm-4">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                            <div className="col-1">
                                                <label
                                                    htmlFor="tag"
                                                    className="col-form-label text-muted"
                                                >
                                                    Tag
                                                </label>
                                            </div>
                                            <div className="col-5 col-sm-5">
                                                <div className="input-group">
                                                    <label
                                                        className="input-group-text"
                                                        htmlFor="tag"
                                                    >
                                                        <i className="fa-solid fa-tag"></i>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="tag"
                                                        aria-label="Default select example"
                                                    >
                                                        <option >Normal</option>
                                                        <option value="1">Urgent</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="profile-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabindex="0"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export function Details(props) {
    return (
        <>
            <div className="row">
                <div className="col-10 offset-md-1">
                    <div className="card">
                        <div className="card-header">
                           
                        </div>
                        <div className="card-body">
                            {/* <div className="cardItem">
                        <div className="row">
                          <div className="col-8">
                            <div className="cardTitleText bold">Mohammad Reza Rahimi</div>
                            <p className='text-muted'>Package-85GB-2Month-1Mbps-(0-8)Free</p>
                            <br />
                            <p className="cardText bold">Today</p>
                          </div>
                          <div className="col-4 ttt">
                            <img src="/dist/img/avatar1.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar2.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar3.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar4.jpg" alt="avatar" className="avatar" />
                          </div>
                        </div>
                      </div> */}
                           

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



