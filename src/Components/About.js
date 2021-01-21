import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="./public/images/profilepic.jpg" class="img-responsive" alt=""></img>
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p> Full stack web developer with a background in security and criminology. I recently earned a
                  certificate in full stack web development through the Coding Boot Camp at the University of Sydney,
                    with newly developed skills in HTML, JavaScript, CSS and responsive web design.</p>
                  <p> Creating websites and applications for disadvantaged and marginalised users motivates me to
                  continue to think outside the box and come up with creative, agile solutions. I’m hard working and a
                  fast learner, with a passion for web development and creating secure, responsive websites and
                    applications. </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <p>
                              <a class="fa-icon fa-icon-2x" href="https://github.com/brandpower"> Hit up my Github
                                 <i class="fa fa-github"></i>
                              </a>
                              <br></br>
                              <a class="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/sarah-brand-619a701b1/"> Or sus out my Linkedin
                                 <i class="fa fa-linkedin"></i>
                              </a>
                           </p>
                           <p>
                              Email: brand.s@me.com
                              <br></br>
                              Phone: 0401 525 213
       </p>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href="resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
