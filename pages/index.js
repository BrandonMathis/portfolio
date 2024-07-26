import react, { Component } from 'react';
import Head from 'next/head'

import adwerx from "../images/adwerx.png";
import mac from "../images/mac.png";
import duke from "../images/duke.png";
import danafarber from "../images/danafarber.png";
import ato from "../images/ato.png";
import moogfest from "../images/moogfest.png";
import weaveup from "../images/weaveup.png";
import bioconnect from "../images/bioconnect.png";
import vtestify from "../images/vtestify.png";
import vaco from "../images/vaco.png";
import castra from "../images/castra.png";
import mckesson from "../images/mckesson.png";

import blog from "../images/blog.svg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import meetup from "../images/meetup.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import mail from "../images/mail.svg";
import applFav from "../images/favicon/apple-touch-icon.png";
import fav32 from "../images/favicon/favicon-32x32.png";
import fav16 from "../images/favicon/favicon-16x16.png";
import favSafari from "../images/favicon/safari-pinned-tab.svg";

function resetForm() {
  document.getElementById('firstname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

function submitForm(e) {
}

const Index = () => {
  return (
    <div>
      <Head>
        <title>🕹Brandon Mathis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Brandon Mathis, Fullstack Developer. Raleigh, NC" />
        <link rel="apple-touch-icon" sizes="180x180" href={applFav.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16.src} />
        <link rel="mask-icon" href={favSafari.src} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="main">
        <section className="section heading">
          <div className="container slide-in slide-in__one">
            <h1 className="heading__head h1 italic">Brandon Mathis</h1>
            <h2 className="h2 heading__subheading light">
              Full Stack Engineer
            </h2>
          </div>
        </section>

        <section className="section section--sm">
          <div className="container slide-in slide-in__two">
            <p>
              Hi! I'm Brandon Mathis - Full Stack Software Engineer, and Lifelong Tinkerer. Founder of <a href="https://triangledevelopers.com/">Triangle Devs</a>.
            </p>
            <p>
              I specialize in helping companies build digital products, improve code, and make deadlines.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container slide-in slide-in__three">
            <div className="contact-form">
              <div className="contact-form__header">
                <h2 className='h2 light'>Get in touch!</h2>
              </div>

              <form
                name="contact"
                method="POST"
                action="/success"
                netlify-honeypot="firstname"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input type='email' required={true} id="email" name="email" placeholder="YOUR EMAIL"/>
                </div>
                <div className="form-group form-group--hidden">
                  <input name="firstname"/>
                </div>
                <div className="form-group">
                  <textarea required={true} id="message" name="message" placeholder="SEND A MESSAGE" />
                </div>
                <div className="form-group">
                  <button className="button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section section--tan section--xlg">
          <div className="container fade-in fade-in__four">
            <div className='awesome-companies'>
              <div className='awesome-companies__header'>
                <h2 className="h2">Amazing Companies I've Worked With</h2>
              </div>
              <div className="awesome-companies__companies">
                <div className="company-logo company-logo--white">
                  <a href="https://www.vtestify.com/">
                    <img src={vtestify.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.mckesson.com/">
                    <img src={mckesson.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.vaco.com/">
                    <img src={vaco.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.castraconsulting.com/">
                    <img src={castra.src} />
                  </a>
                </div>
                <div className="company-logo company-logo--square">
                  <a href="https://allthingsopen.org/">
                    <img className="square" src={ato.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.dukehealth.org/">
                    <img src={duke.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.adwerx.com/">
                    <img src={adwerx.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://bioconnect.com/">
                    <img src={bioconnect.src} />
                  </a>
                </div>
                <div className="company-logo company-logo--square">
                  <a href="https://weaveup.com/">
                    <img className="square" src={weaveup.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.maccosmetics.com/">
                    <img src={mac.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.dana-farber.org/">
                    <img src={danafarber.src} />
                  </a>
                </div>
                <div className="company-logo">
                  <a href="https://www.moogfest.com/">
                    <img src={moogfest.src} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="section section--dark">
          <div className="container">
            <div className="footer-content">
              <div className="technologies">
                <div className="technologies__header">
                  <h3>TECHNOLOGIES I AM SKILLED IN</h3>
                </div>
                <div className="technologies__list">
                  <ul>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                    <li>Rails</li>
                    <li>React</li>
                    <li>GraphQL API</li>
                    <li>Apollo</li>
                    <li>REST API</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>HTML/CSS</li>
                    <li>JQuery</li>
                    <li>SCSS</li>
                    <li>PHP</li>
                    <li>Wordpress</li>
                    <li>Bootstrap</li>
                  </ul>
                  <ul>
                    <li>DevOps</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Cloud</li>
                    <li>Ansible</li>
                    <li>Chef</li>
                    <li>Bash</li>
                    <li>Ubuntu</li>
                    <li>CentOS</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>NGINX</li>
                    <li>CouchDB</li>
                  </ul>
                  <ul>
                    <li>Twilio</li>
                    <li>Stripe</li>
                    <li>Auth0</li>
                    <li>Netlify</li>
                    <li>Mailgun</li>
                    <li>MailChimp</li>
                    <li>Sendgrid</li>
                    <li>Twilio</li>
                    <li>Circle CI</li>
                    <li>GitLab</li>
                    <li>NewRelic</li>
                    <li>IBM Watson</li>
                  </ul>
                </div>
              </div>
              <div className="socials">
                <div className="socials__header">
                  <h3>YOU CAN FIND ME AT</h3>
                </div>
                <div className="socials__list">
                  <div className="social-item">
                    <a href="https://medium.com/@brandonmathis">
                      <img src={blog.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="https://twitter.com/brandonmathis">
                      <img src={twitter.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="https://github.com/BrandonMathis">
                      <img src={github.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="https://www.meetup.com/members/12126824/">
                      <img src={meetup.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="https://www.instagram.com/bmath._/">
                      <img src={instagram.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="https://www.linkedin.com/in/mathisbrandon/">
                      <img src={linkedin.src} />
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="mailto:BeMathis@gmail.com">
                      <img src={mail.src} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p>📍 <span className="italic light">Raleigh-Durham, NC</span></p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Index
