import React, { useEffect, useRef, useState } from "react";
div className="carousel mt-5">
                <button className="" style={{ border: "none", position: "absolute", top: "125px", left: "75px" }} onClick={() => {
                    prevref.current.scrollBy({
                        left: -200,
                        behavior: "smooth",

                    })
                }}>
                    <img src={left} />
                </button>
                <div className="container">
                    <div ref={prevref} style={{ display: "flex", overflow: "hidden", alignItems: "center" }}>


                        {
                            items.map((x) => (
                                <div key={x.id}>
                                    <div ref={prevref} className="card me-3" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={x.image} alt="food-image" width="225px" height="275px" />
                                        <p className="text-center fw-bold text-dark bg-light p-2 rounded-pill" style={{ position: 'absolute', top: "225px", left: "125px" }}>{x.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <button className="" style={{ border: "none", position: "absolute", top: "125px", left: "1405px" }} onClick={() => {
                    prevref.current.scrollBy({
                        left: 200,
                        behavior: "smooth",
                    })
                }}>
                    <img src={right} />
                </button>

            </div>
            <br />
            <hr />
            <h1 className="ms-5 mt-5">Welcome to our site !.Find your Food</h1>
            {
                data.map((x) =>(
                    <div key={x.id}>
                        <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={x.images} />

                            

                        </div>
                    </div>

                ))
            }
        </div>
    )
}
export default Dashboard;
