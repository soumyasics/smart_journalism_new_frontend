import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/LOGO2.gif";
import axiosInstance from "../../baseurl";

function NavbarJournalist() {
  const [data, setdata] = useState({
    latitude: "",
    longitude: "",
    msg: null,
    jid: localStorage.getItem("journalistid"),

    mid: null,
    freelancer: null,
  });

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setdata({
        ...data,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
  }, []);

  const detailsfn = () => {
    axiosInstance
      .post(`/viewJournalistById/${localStorage.getItem("journalistid")}`)
      .then((res) => {
        console.log(res, " view journalist details");
        if (res.data.data != undefined) {
          if (res.data.data.mid) {
            setdata({
              ...data,
              freelancer: res.data.data.freelancer,
              mid: res.data.data.mid
            });
          }
          else{
            setdata({
              ...data,
              freelancer: res.data.data.freelancer,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const helpfn = () => {
    console.log(data);
    axiosInstance
      .post(`/addIssue/${localStorage.getItem("journalistid")}`, data)
      .then((res) => {
        console.log(res, "submitted");
        if(res.data.status==200){
          alert("Submitted")
          window.location.reload(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            {/* <h1 style={{fontSize:"40px", fontFamily:'Luckiest Guy, cursive'}}>  Smart Journalism</h1> */}
            <img src={logo} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <form
              class="d-flex"
              role="search"
              style={{ margin: "0px 150px 0px 0px" }}
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="btn btn-danger" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="btn btn-danger" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="btn btn-danger"
                    aria-current="page"
                    to="/Profile"
                  >
                    Profile
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="btn btn-danger"
                    aria-current="page"
                    to="/Addpost"
                  >
                    Add a new Post
                  </Link>
                </li>
                <li class="nav-item">
                <Link class="btn btn-danger" aria-current="page" to="/Journalist/viewNewsByMedia">
                    View My Posts
                  </Link>
                </li>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    localStorage.clear();
                    alert("Logged out");
                    window.location.reload(false);
                  }}
                >
                  Logout
                </button>
              </ul>
            </form>

            <button
              type="button"
              id="btnAlerta"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={detailsfn}
            >
              Help
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      What seems to be the problem?
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input
                      type="radio"
                      class="btn-check"
                      name="msg"
                      id="btnradio1"
                      autocomplete="off"
                      onChange={changefn}
                      value={`I'm under attack`}
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="btnradio1"
                      style={{ width: "100%" }}
                    >
                      I'm under attack
                    </label>

                    <hr />
                    <input
                      type="radio"
                      class="btn-check"
                      name="msg"
                      id="btnradio2"
                      autocomplete="off"
                      onChange={changefn}
                      value={`I'm being followed`}
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="btnradio2"
                      style={{ width: "100%" }}
                    >
                      I'm being followed
                    </label>
                    <hr />
                    <input
                      type="radio"
                      class="btn-check"
                      name="msg"
                      id="btnradio3"
                      autocomplete="off"
                      onChange={changefn}
                      value={`There's a crime commited near me.`}
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="btnradio3"
                      style={{ width: "100%" }}
                    >
                      There's a crime commited near me.
                    </label>
                    <hr />
                    <input
                      type="radio"
                      class="btn-check"
                      name="msg"
                      id="btnradio4"
                      autocomplete="off"
                      onChange={changefn}
                      value={`Need Urgent Backup`}
                    />
                    <label
                      class="btn btn-outline-primary"
                      for="btnradio4"
                      style={{ width: "100%" }}
                    >
                      Need Urgent Backup
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={helpfn}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarJournalist;
