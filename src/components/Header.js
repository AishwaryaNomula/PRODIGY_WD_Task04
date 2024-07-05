import React, { useEffect, useState } from 'react'
import { NavLink, Router, Route, Switch } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../about.css';
import { Icon } from 'semantic-ui-react';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className='bgImg'>
            <div className='container-fluid navColor'>
                <div className='row'>
                <nav className={`navColor ${scrolled ? 'scrolled' : ''}`}>
                <navbar className="navbar navbar-expand-lg bg-body-tertiar">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className='col-md-12 navMenu-padding'>
                <div className="collapse navbar-collapse justify-content-end navSection" id="navbarNavDropdown">
                  <ul className="navbar-nav m-0 navItemColor">
                    <li className="nav-item">
                      <a className={`nav-link ${scrolled ? 'scrolled' : ''}`} aria-current="page" href="#home"  smooth={true} duration={500}>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${scrolled ? 'scrolled' : ''}`} href="#aboutme"  smooth={true} duration={500}>About Me</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${scrolled ? 'scrolled' : ''}`} href="#projects"  smooth={true} duration={500}>Projects</a>
                    </li>  
                  </ul>
                </div>
              </div>
            </navbar>
            </nav>
          </div>    
          </div>   
          <div className='col-md-10'>
             <div className='ui-dev'>
                <h1>UI DEVELOPER</h1>
             </div>
          </div>
          </div>
         <section id='home'>
          <div className='container'>
          <div className='row my-5'>
              <div className='col-md-6 tSkill'>
                <div className=' skill-shadow'>
                <h3 className='skillHead'>Technical Skills</h3>
                <ul>
                    <li><span>Web Technologies  :</span>   HTML5, CSS3, JSON</li>
                    <li><span>Programming Languages  :</span>   JavaScript</li>
                    <li><span>Frameworks  :</span>   React JS, Bootstrap</li>
                    <li><span>IDE’s/Text Editors  : </span>  Visual Studio Code, Notepad++</li>
                </ul>
                </div>
              </div>
           </div>
          </div>
         </section>
         <section id='aboutme'>
         <div className=' detail-bg'>
        <div className='container-fluid m-auto'>
           <div className='row'>
            <div className='col-md-12'>
              <h3 className='about-head'>About Me</h3>
            </div>
            <div className='col-md-10 mx-auto'> 
              <table className='detail-table table-hover'>
                <tr>
                  <th>Full Name</th>
                  <td>Aishwarya Nomula</td>
                  </tr>
                  <tr>
                  <th>Guardian Name</th>
                  <td>Sathish Nomula</td>
                  </tr>
                  <tr>
                  <th>DOB</th>
                  <td>10<sup>th</sup>May 2001</td>
                  </tr>
                  <tr>
                  <th>Contact Numbers</th> 
                  <td>8861710550, 9182131213</td>
                  </tr>
                  <tr>
                  <th>Email</th>
                  <td>aishwaryanomula26@gmail.com</td>
                  </tr>
                  <tr>
                  <th>Address for Communication</th>
                  <td>H.No 5-135 Vill: Pasara 
                  <p>Mdl: Govindaraopet Warangal, Telangana - 506347 </p></td>
                  </tr>
              </table>
            </div>
           </div>
         </div>  
        </div>
        <div className='row'>
          <div className='col-md-12 bg-gray'>
           <div className='edu-details'>
             <div className='edu-head'>
                <h2>Educational</h2>
                   <h4>Qualification</h4>
             </div>
             <div className='col-md-4 skill-shadow'>
               <h3 className='eduBox'>Education</h3>
               <div className='deg'>
               <p><Icon name='hand point right' />B.Sc (Statistics)
               From <strong>Kakatiya University</strong>, Warangal.</p>
               <p className='small'>2018-2021</p>
                <li>Percentage: With 78%</li>
               </div>
                <div className='deg'>
                <p><Icon name='hand point right' />Intermediate(MPC) From <strong>SR Educational Academy for Girls</strong></p>
                <p className='small'>2016-2018</p>
                <li>Percentage: With 88%</li>
                </div>
                <div className='deg'>
                <p><Icon name='hand point right' />ZPPS School Warangal </p>
                <p className='small'>2015-2016</p>
                <li>Percentage: With 87%</li>
                </div>
             </div>
           </div>
          </div>
        </div>
      </section>
      <section id='projects'>
       <div className='container-fluid'>
       <div className='row projectBg'>
          <div className='col-md-12 content'>
            <div>
               <h1 className='pro-title'>Projects</h1>
            </div>
            <div className='row pro-auto'>
                <div className='col-md-5 margin-l pro-item'>
                  <h2 className='pro-subTitle'>Project 1</h2>
                  <div>
                    <li>Project : Pestocure Pestcontrol Services</li>
                    <li>Company : ENut Technologies Pvt Ltd</li>
                    <li>Technologies : HTML, CSS, Bootstrap</li>
                    <li>IDE : Visual Studio Code</li>
                    <li>Role : UI Developer</li>
                    <li>Responsibilities : Involved in UI development</li>
                  </div>
                </div>
                <div className='col-md-5 pro-item'>
                  <h2 className='pro-subTitle'>Project 2</h2>
                  <div>
                    <li>Project : Bharat Institute of Engineering and Technology</li>
                    <li>Company : ENut Technologies Pvt Ltd</li>
                    <li>Technologies : HTML, CSS, Bootstrap, React JS</li>
                    <li>IDE : Visual Studio Code</li>
                    <li>Role : UI Developer</li>
                    <li>Responsibilities : Involved in UI development</li>
                  </div>
                </div>
            </div>
          </div> 
        </div>
       </div>
      </section>
   </div>
    )
};

export default Header;

