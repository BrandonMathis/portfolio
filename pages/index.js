import Head from 'next/head'

import "../styles/style.scss"

import adwerx from "../images/adwerx.png";
import mac from "../images/mac.svg";
import duke from "../images/duke.png";
import danafarber from "../images/danafarber.png";
import ato from "../images/ato.svg";
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

const Index = () => (
  <div>
    <Head>
      <title>Brandon Mathis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main className="main">
      <div className="section--lg">
        <section className="section">
          <div className="container">
            <h1 className="h1 italic">Brandon Mathis</h1>
          </div>
        </section>

        <section className="section">
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

              <form name="contact" method="POST" netlify="true" action="/success">
                <div className="form-group">
                  <input type='text' placeholder="YOUR EMAIL"/>
                </div>
                <div className="form-group">
                  <textarea placeholder="SEND A MESSAGE" />
                </div>
                <div className="form-group">
                  <button className="button" type="submit">Send</button>
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
                <h3>Technologies I am skilled in</h3>
              </div>
              <div className="technologies__list">
                <ul>
                  <li>Ruby</li>
                  <li>JavaScript</li>
                  <li>Rails</li>
                  <li>React</li>
                  <li>Flux</li>
                  <li>Redux</li>
                  <li>Node</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                  <li>Apollo</li>
                  <li>Unstated</li>
                </ul>
                <ul>
                  <li>Docker</li>
                  <li>Ansible</li>
                  <li>Chef</li>
                  <li>Bash</li>
                  <li>Ubuntu</li>
                  <li>CentOS</li>
                </ul>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JQuery</li>
                  <li>SCSS</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                </ul>
              </div>
            </div>
            <div className="socials">
              <div className="socials__header">
                <h3>You Can Find Me At</h3>
              </div>
              <div className="socials__list">
                <a href="https://blog.brandonmathis.me">
                  <img src={blog} />
                </a>
                <a href="https://twitter.com/brandonmathis">
                  <img src={twitter} />
                </a>
                <a href="https://github.com/BrandonMathis">
                  <img src={github} />
                </a>
                <a href="https://www.meetup.com/members/12126824/">
                  <img src={meetup} />
                </a>
                <a href="https://www.instagram.com/brandonmathis_/">
                  <img src={instagram} />
                </a>
                <a href="https://www.linkedin.com/in/mathisbrandon/">
                  <img src={linkedin} />
                </a>
                <a href="mailto:BeMathis@gmail.com">
                  <img src={mail} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
)

export default Index
