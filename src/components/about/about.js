import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>                    
                    <span><a href={"mailto:" + resumeData.email}> { resumeData.email } </a>{}</span>
                    <br></br>     
                    <span><a href="https://drive.google.com/file/d/1_56EL4dTzx0hhV9xJeuDcaHssW74-Mac/view?usp=sharing">CV imprimable</a></span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
