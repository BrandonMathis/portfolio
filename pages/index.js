import Head from 'next/head'

import "../styles/style.scss"

import adwerx from "../images/adwerx.png";
import mac from "../images/mac.png";
import duke from "../images/duke.png";
import danafarber from "../images/danafarber.png";
import ato from "../images/ato.png";
import moogfest from "../images/moogfest.png";
import weaveup from "../images/weaveup.png";
import bioconnect from "../images/bioconnect.png";

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

const Index = () => (
  <div>
    <Head>
      <title>🕹Brandon Mathis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta name="description" content="Brandon Mathis, Freelance Fullstack Developer. Raleigh, NC" />
      <link rel="apple-touch-icon" sizes="180x180" href={applFav} />
      <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
      <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
      <link rel="mask-icon" href={favSafari} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <main className="main">
      <div className="section--lg">
        <section className="section heading">
          <div className="container">
            <h1 className="h1 italic">Brandon Mathis</h1>
            <p className="light">Freelance Full Stack Developer</p>
          </div>
        </section>

        <section className="section section--sm">
          <div className="container">
            <p>Hi! I'm Brandon Mathis - Freelance Full Stack Developer, Community Organizer, Speaker and Co-Founder of <a href="http://groundlift.io">GroundLift</a>.</p>
            <p>I specialize in helping companies build applications, improve code, and crush deadlines.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-form">
              <div className="contact-form__header">
                <h2 className='h2 light'>Let's Do Some Work Together!</h2>
              </div>

              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                netlify-honeypot="bot-field"
                action="/success"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input hidden name="bot-field" />
                <div className="form-group">
                  <input type='email' required={true} name="email" placeholder="YOUR EMAIL"/>
                </div>
                <div className="form-group">
                  <textarea required={true} name="message" placeholder="SEND A MESSAGE" />
                </div>
                <div className="form-group">
                  <button className="button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <section className="section section--tan section--xlg">
        <div className="container">
          <div className='awesome-companies'>
            <div className='awesome-companies__header'>
              <h2 className="h2">Amazing Companies I've Worked With</h2>
            </div>
            <div className="awesome-companies__companies">
              <div className="company-logo company-logo--square">
                <img className="square" src={ato} />
              </div>
              <div className="company-logo company-logo--square">
                <img className="square" src={weaveup} />
              </div>
              <div className="company-logo">
                <img src={adwerx} />
              </div>
              <div className="company-logo">
                <img src={bioconnect} />
              </div>
              <div className="company-logo">
                <img src={duke} />
              </div>
              <div className="company-logo">
                <img src={mac} />
              </div>
              <div className="company-logo">
                <img src={danafarber} />
              </div>
              <div className="company-logo">
                <img src={moogfest} />
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
                  <a href="https://blog.brandonmathis.me">
                    <img src={blog} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="https://twitter.com/brandonmathis">
                    <img src={twitter} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="https://github.com/BrandonMathis">
                    <img src={github} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="https://www.meetup.com/members/12126824/">
                    <img src={meetup} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="https://www.instagram.com/brandonmathis_/">
                    <img src={instagram} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="https://www.linkedin.com/in/mathisbrandon/">
                    <img src={linkedin} />
                  </a>
                </div>
                <div className="social-item">
                  <a href="mailto:BeMathis@gmail.com">
                    <img src={mail} />
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
)

export default Index
