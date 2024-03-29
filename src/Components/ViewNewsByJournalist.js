import React, { useEffect, useState } from "react";
import axiosInstance from "../baseurl";
import { Link, useNavigate } from "react-router-dom";

function ViewNewsByJournalist() {
  const Navigate = useNavigate();

  const [data, setdata] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("journalistid") == null) {
      Navigate("/home");
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/viewNewsByJid/${localStorage.getItem("journalistid")}`)
      .then((res) => {
        console.log(res);
        if (res.data.data != undefined) {
          setdata(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delfn = (id) => {
    axiosInstance
      .post(`/deleteNewsById/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
          alert("Post deleted")
          window.location.reload(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <div className="main" style={{ minHeight: "400px", padding: "40px" }}>
      <div className="container">
        <div className="row">
          {data.length
            ? data.map((a) => {
                return (
                  <div className="col-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-5">
                          <img
                            src={`http://localhost:4001/${a.image}`}
                            alt=""
                            height={290}
                            width={`100%`}
                          />
                        </div>

                        <div className="col-7 newsdiv">
                          <Link to={`/ViewNews/${a._id}`}>
                            <h4>{a.title}</h4>
                            <h5>
                              {a.mid ? (
                                <span class="badge bg-secondary">
                                  {a.mid.name}
                                </span>
                              ) : null}
                              {a.jid.name}/{a.date.slice(3, 15)} - {a.loc}
                            </h5>

                            <p>{a.content.slice(0, 190) + "...read more"}</p>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              delfn(a._id);
                            }}
                          >
                            {" "}
                            Delete this post
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default ViewNewsByJournalist;
