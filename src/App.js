import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import { useEffect,useState } from 'react';
import { useRef } from 'react';
function App() {
  const [openMenus, setOpenMenus] = useState({
    lead: false,
    employee: false,
    branch:false,
    client:false,
    product:false,
    project:false
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };



  return (




    <body>

      {/* <!-- <body data-layout="horizontal"> --> */}
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">


        <header id="page-topbar">
          <div class="navbar-header">
            <div class="d-flex">
              {/* <!-- LOGO --> */}
              <div class="navbar-brand-box">
                <a href="#" class="logo logo-dark">
                  <span class="logo-sm">
                    <img src="../images/logo-sm.svg" alt="" height="24" />
                  </span>
                  <span class="logo-lg">
                    <img src="../images/logo-sm.svg" alt="" height="24" /> <span class="logo-txt">Well Scaffolding</span>
                  </span>
                </a>

                <a href="#" class="logo logo-light">
                  <span class="logo-sm">
                    <img src="../images/logo-sm.svg" alt="" height="24" />
                  </span>
                  <span class="logo-lg">
                    <img src="../images/logo-sm.svg" alt="" height="24" /> <span class="logo-txt">Well Scaffolding</span>
                  </span>
                </a>
              </div>

              <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
              </button>


            </div>

            <div class="d-flex">





              <div class="dropdown d-sm-inline-block">
              <button type="button" class="btn header-item" id="mode-setting-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon icon-lg layout-mode-dark"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun icon-lg layout-mode-light"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
              </div>

              <div class="dropdown d-inline-block">
              <button type="button" class="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell icon-lg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <span class="badge bg-danger rounded-pill">105</span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown">
                  <div class="p-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h6 class="m-0"> Notifications </h6>
                      </div>
                      <div class="col-auto">
                        <a href="#!" class="small text-reset text-decoration-underline"> Unread (105)</a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight: '230px' }}>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">Quotation Approved</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Approved your Quotation, for the Lead - Asas</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>06/05/2024 04:45 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - Site Visit, for the Lead - LEAD18</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>10/04/2024 02:09 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task -    *c, for the Lead - New lead 170000</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>09/04/2024 12:16 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - Site Visit, for the Lead - Yyy</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>05/04/2024 05:50 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - Site Visit, for the Lead - ABHI TEST LEAD</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>07/03/2024 01:14 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task -    *c, for the Lead - Sdsd</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>07/03/2024 12:49 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - Site Visit, for the Lead - Infoprak 10th Oct2023</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>10/10/2023 04:24 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">Quotation Approved</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Approved your Quotation, for the Lead - Lead by asifrahiman</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>09/12/2022 03:35 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - new work, for the Lead - Lead by asifrahiman</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>09/12/2022 03:19 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="javascript:void(0)" class="text-reset notification-item">
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="fa fa-bell"></i>
                          </span>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">You have a new Task</h6>
                          <div class="font-size-13 text-muted">
                            <p class="mb-1">Asif Rahiman, Assigned a new Task - Quotation, for the Lead - Lead by asifrahiman</p>
                            <p class="mb-0"><i class="fa fa-calendar"></i> <span>09/12/2022 03:19 PM</span></p>
                          </div>
                        </div>
                      </div>
                    </a>







                  </div>
                  <div class="p-2 border-top d-grid">
                    <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                      <i class="fa fa-check-square"></i> <span>View More..</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item right-bar-toggle me-2">

                </button>
              </div>

              <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img class="rounded-circle header-profile-user" src="../images/avatar-1.jpg"
                    alt="Header Avatar" />
                  <span class="d-none d-xl-inline-block ms-1 fw-medium">Asif Rahiman</span>
                  <i class="fa-solid fa-chevron-down" style={{ fontSize: '9px' }}></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  {/* <!-- item--> */}

                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/Auth/Login"><i class="fa-solid fa-right-from-bracket me-1"></i> Logout</a>
                </div>
              </div>

            </div>
          </div>
        </header>


        {/* <!-- ========== Left Sidebar Start ========== --> */}

        <div class="vertical-menu">

          <div data-simplebar class="h-100">

            {/* <!--- Sidemenu --> */}




            <div id="sidebar-menu" >





              {/* <!-- Left Menu Start --> */}
              <ul class="metismenu list-unstyled" id="side-menu">







                <li>
                  <a href="dashboard.html">
                    <i data-feather="home"></i>
                    <span data-key="t-dashboard">Dashboard</span>
                  </a>
                </li>
                {/* <div id="sidebar-menu"> */}

    {/* </div> */}
                <li className={openMenus.lead? `mm-active`:''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('lead')}>
                    <i data-feather="book"></i>

                    <span data-key="t-apps">Lead</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.lead ? 'mm-show' : ''}`} aria-expanded={openMenus.lead}>
                    <li>
                      <a href="addlead.html">
                        <span data-key="t-calendar">Add Lead</span>

                      </a>
                    </li>
                    <li>
                      <a href="viewlead.html">
                        <span data-key="t-calendar">View Leads</span>

                      </a>
                    </li>


                  </ul>

                </li>
                <li className={openMenus.employee? 'mm-active':''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('employee')}>
                    <i data-feather="users"></i>

                    <span data-key="t-apps">Employee</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.employee ? 'mm-show' : ''}`} aria-expanded={openMenus.employee}>
                    <li>
                      <a href="addemployee.html">
                        <span data-key="t-calendar">Add Employee</span>

                      </a>
                    </li>
                    <li>
                      <a href="viewemployees.html">
                        <span data-key="t-calendar">View Employees</span>

                      </a>
                    </li>

                  </ul>

                </li>
                <li className={openMenus.branch?'mm-active':''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('branch')}>
                    <i data-feather="archive"></i>

                    <span data-key="t-apps">Branch</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.branch ? 'mm-show' : ''}`} aria-expanded={openMenus.branch}>
                    <li>
                      <a href="addbranch.html">
                        <span data-key="t-calendar">Add Branch</span>

                      </a>
                    </li>
                    <li>
                      <a href="list_branchs.html">
                        <span data-key="t-calendar">View Branches</span>

                      </a>
                    </li>
                  </ul>

                </li>
                <li className={openMenus.product?'mm-active':''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('product')}>
                    <i data-feather="box"></i>

                    <span data-key="t-apps">Product</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.product ? 'mm-show' : ''}`} aria-expanded={openMenus.product}>
                    <li>
                      <a href="addproduct.html">
                        <span data-key="t-calendar">Add Product</span>

                      </a>
                    </li>
                    <li>
                      <a href="list_products.html">
                        <span data-key="t-calendar">View Products</span>
                      </a>
                    </li>
                  </ul>

                </li>
                <li className={openMenus.project?'mm-active':''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('project')}>
                    <i data-feather="database"></i>

                    <span data-key="t-apps">Project</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.project ? 'mm-show' : ''}`} aria-expanded={openMenus.project}>
                    <li>
                      <a href="addproject.html">
                        <span data-key="t-calendar">Add Project</span>
                      </a>
                    </li>
                    <li>
                      <a href="projects.html">
                        <span data-key="t-calendar">View Projects</span>
                      </a>
                    </li>
                  </ul>

                </li>


                <li className={openMenus.client?'mm-active':''}>
                  <a href="javascript: void(0);" class="has-arrow" onClick={() => toggleMenu('client')}>
                    <i data-feather="user"></i>

                    <span data-key="t-apps">Client</span>
                    <i class="fa-solid fa-chevron-right " style={{ float: 'right', fontSize: '9px' }}></i>
                  </a>


                  <ul className={`sub-menu ${openMenus.client ? 'mm-show' : ''}`} aria-expanded={openMenus.client}>
                    <li>
                      <a href="addclient.html">
                        <span data-key="t-calendar">Add Client</span>
                      </a>
                    </li>
                    <li>
                      <a href="list_clients.html">
                        <span data-key="t-calendar">View Clients</span>
                      </a>
                    </li>
                  </ul>

                </li>


                <li>
                  <a href="Master.html">
                    <i data-feather="book"></i>
                    <span data-key="t-dashboard">Master</span>
                  </a>
                </li>

              </ul>
            </div>

            {/* <!-- Sidebar --> */}
          </div>
        </div>
        {/* <!-- Left Sidebar End --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- Start right Content here --> */}
        {/* <!-- ============================================================== --> */}
        <div class="main-content">
          <div class="page-content">




            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                    <div class="page-title-right">
                      <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <i class="fa-solid fa-chevron-right " style={{ margin: '6px 5px 0px 5px', fontSize: '9px' }}></i>
                        <li class="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}


              <div class="row">
                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-purple">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Staff Count</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>

                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-secondary">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">New Leads</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="4">4</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-danger text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col--> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-success">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Approved Leads</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">+ 0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-danger">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Pending Leads</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              <div class="row">
                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-orange">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Upcoming Projects</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>

                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-cyan">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Total Clients</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="4">4</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-danger text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col--> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-purple">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">Product List</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">+ 0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div class="col-xl-3 col-md-6">
                  {/* <!-- card --> */}
                  <div class="card card-h-100">
                    {/* <!-- card body --> */}
                    <div class="card-body bg-b-blue">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <span class="text-white mb-3 d-block text-truncate">My Calendar</span>
                          <h4 class="mb-3">
                            <span class="counter-value text-white" data-target="0">0</span>
                          </h4>
                        </div>
                        <div class="col-4 icon">
                          <i class="fa fa-bell"></i>
                        </div>
                      </div>
                      <div class="text-nowrap">
                        <span class="badge bg-soft-success text-white">0.00</span>
                        <span class="ms-1 text-white font-size-13">Since last week</span>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>

            </div>


          </div>

          <footer class="footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12 text-center">
                  © Well Scaffolding CRM.Design & Develop by <a href="#!" class="text-decoration-underline">Coinone</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <!-- end main content--> */}

      </div>
      {/* <!-- END layout-wrapper --> */}
      {/* <!-- Right Sidebar --> */}
      <div class="right-bar d-none">
        <div data-simplebar class="h-100">
          <div class="rightbar-title d-flex align-items-center p-3">

            <h5 class="m-0 me-2">Theme Customizer</h5>


          </div>

          {/* <!-- Settings --> */}
          <hr class="m-0" />

          <div class="p-4">
            <h6 class="mb-3">Layout</h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout"
                id="layout-vertical" value="vertical" />
              <label class="form-check-label" for="layout-vertical">Vertical</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout"
                id="layout-horizontal" value="horizontal" />
              <label class="form-check-label" for="layout-horizontal">Horizontal</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2">Layout Mode</h6>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-mode"
                id="layout-mode-light" value="light" />
              <label class="form-check-label" for="layout-mode-light">Light</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-mode"
                id="layout-mode-dark" value="dark" />
              <label class="form-check-label" for="layout-mode-dark">Dark</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2">Layout Width</h6>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-width"
                id="layout-width-fuild" value="fuild" onchange="document.body.setAttribute('data-layout-size', 'fluid')" />
              <label class="form-check-label" for="layout-width-fuild">Fluid</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-width"
                id="layout-width-boxed" value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed')" />
              <label class="form-check-label" for="layout-width-boxed">Boxed</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2">Layout Position</h6>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-position"
                id="layout-position-fixed" value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')" />
              <label class="form-check-label" for="layout-position-fixed">Fixed</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-position"
                id="layout-position-scrollable" value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')" />
              <label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2">Topbar Color</h6>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="topbar-color"
                id="topbar-color-light" value="light" onchange="document.body.setAttribute('data-topbar', 'light')" />
              <label class="form-check-label" for="topbar-color-light">Light</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="topbar-color"
                id="topbar-color-dark" value="dark" onchange="document.body.setAttribute('data-topbar', 'dark')" />
              <label class="form-check-label" for="topbar-color-dark">Dark</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>

            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-size"
                id="sidebar-size-default" value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')" />
              <label class="form-check-label" for="sidebar-size-default">Default</label>
            </div>
            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-size"
                id="sidebar-size-compact" value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')" />
              <label class="form-check-label" for="sidebar-size-compact">Compact</label>
            </div>
            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-size"
                id="sidebar-size-small" value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')" />
              <label class="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>

            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-color"
                id="sidebar-color-light" value="light" onchange="document.body.setAttribute('data-sidebar', 'light')" />
              <label class="form-check-label" for="sidebar-color-light">Light</label>
            </div>
            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-color"
                id="sidebar-color-dark" value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')" />
              <label class="form-check-label" for="sidebar-color-dark">Dark</label>
            </div>
            <div class="form-check sidebar-setting">
              <input class="form-check-input" type="radio" name="sidebar-color"
                id="sidebar-color-brand" value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')" />
              <label class="form-check-label" for="sidebar-color-brand">Brand</label>
            </div>

            <h6 class="mt-4 mb-3 pt-2">Direction</h6>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-direction"
                id="layout-direction-ltr" value="ltr" />
              <label class="form-check-label" for="layout-direction-ltr">LTR</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="layout-direction"
                id="layout-direction-rtl" value="rtl" />
              <label class="form-check-label" for="layout-direction-rtl">RTL</label>
            </div>

          </div>

        </div>
        {/* <!-- end slimscroll-menu--> */}
      </div>
      {/* <!-- /Right-bar --> */}
      {/* <!-- Right bar overlay--> */}

      {/* <!-- JAVASCRIPT --> */}

    </body>



  );
}

export default App;
