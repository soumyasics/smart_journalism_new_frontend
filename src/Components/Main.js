import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import JournalistHome from "./JournalistHome";
import axiosInstance from "../baseurl";
import PublicHome from "./PublicHome";

function Main({ auth }) {
  const [homenews, sethnews] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewNewsForHome`)
      .then((res) => {
        console.log(res, "home news");
        if (res.data.data != undefined) {
          sethnews(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (auth == 0) {
    console.log(homenews.length);
    if (homenews.length > 12) {
      return (
        <div
          className="maindiv"
          style={{ padding: "30px", borderRadius: "40px" }}
        >
          <section className="section first-section">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  {/* <div className="">
                    <img src="https://cdn.dribbble.com/users/925704/screenshots/6513438/scrolling.gif" height={400} width={350} />
                  </div> */}
                  <div className="col-6">
                    <h1 style={{ color: "darkred" }}>
                      {/* Newseeker
                      <hr /> */}
                      Your Source for Timely and Reliable Online News
                    </h1>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/login/Journalist`}>
              <div className="container" id="hidediv">
                <div class="row">
                  <div class="column">
                    <img
                      src={`http://localhost:4001/${homenews[0].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[0].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[1].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[1].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[3].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[3].title}</h5>
                    
                  </div>
                  <div class="column">
                    <img
                      src={`http://localhost:4001/${homenews[2].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[2].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[4].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[4].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[11].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[11].title}</h5>
                  </div>
                  <div class="column">
                    <img
                      src={`http://localhost:4001/${homenews[7].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[7].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[5].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[5].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[8].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[8].title}</h5>
                  </div>
                  <div class="column">
                    <img
                      src={`http://localhost:4001/${homenews[9].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[9].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[10].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[10].title}</h5>
                    <img
                      src={`http://localhost:4001/${homenews[6].image}`}
                      style={{ width: "100%" }}
                    />
                    <h5 class="card-title">{homenews[6].title}</h5>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <Link
                      to="/Login/Public"
                      className="btn btn-primary"
                      style={{ width: "60%", margin: "40px" }}
                    >
                      Login to See More News
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* <div className="container" id="hidediv">
              <div class="row">
                <div class="column">
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[4].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[4].title}</h5>
                    </div>
                  </div>
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[3].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[3].title}</h5>{" "}
                    </div>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[2].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[2].title}</h5>{" "}
                    </div>
                  </div>
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[3].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[3].title}</h5>{" "}
                    </div>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[1].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[1].title}</h5>{" "}
                    </div>
                  </div>
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[4].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[4].title}</h5>{" "}
                    </div>
                  </div>
                  <div class="card">
                    <img src={`http://localhost:4001/${homenews[2].image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{homenews[2].title}</h5>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <Link
                      to="/Login/Public"
                      className="btn btn-primary"
                      style={{ width: "60%", margin: "40px" }}
                    >
                      Login to See More News
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div>
      );
    } else {
      return (
        <div
          className="maindiv"
          style={{ padding: "30px", borderRadius: "40px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="https://cdn.dribbble.com/users/925704/screenshots/6513438/scrolling.gif" />
              </div>
              <div className="col-6">
                <h1>
                  Newseeker
                  <hr />
                  Your Source for Timely and Reliable Online News
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (auth == 3) {
    return <PublicHome />;
  } else {
    return <JournalistHome />;
  }
}

export default Main;
