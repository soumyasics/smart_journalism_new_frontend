import React from 'react'
import img1 from '../Assets/images/about.gif'
// import img2 from '../Assets/Images/about-2.jpg'
function About() {
  return (
    <>
        <div class="container-xxl py-5" style={{minHeight:"450px"}}>
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="text-dark text-uppercase">About Us</h1>
                    <h2 class="mb-4">Welcome to Smart Journalism</h2>
                    <h6 class="mb-4">Your trusted source for intelligent and insightful news coverage. We are committed to delivering high-quality journalism that goes beyond the headlines, providing in-depth analysis, context, and diverse perspectives on the most important issues of our time.</h6>
                    
                  <h6> Join us in our quest for intelligent journalism that enlightens, inspires, and empowers. Together, let's stay informed and shape a better future.</h6>
                </div>
                <div class="col-lg-6 pt-4" style={{minHeight: "500px;"}}>
                    <div class="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                         <img class="position-absolute img-fluid w-100 h-100" src={img1} style={{objectFit: "contain", padding: "0 0 50px 100px;"}} alt=""/>
                       {/* <img class="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" src={img2} style={{objectFit: "cover"}} alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About