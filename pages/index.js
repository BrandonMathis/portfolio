import "../styles/style.scss"

import adwerx from "../images/adwerx.png";

const Index = () => (
  <body>
    <main className="main">
      <section className="section">
        <div className="container">
          <div className="heading">
            <h1 className="h1 italic">Brandon Mathis</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>I am a person doing web stuff</p>
          <p className='gray light'>Gee... isn't that cool?</p>
          <p>
            <a href="#">Click Here</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Amazing Companies I've Worked With</h2>
          {/* <h3 className="h3">More Amazing Companies I've Worked With</h3> */}
          <div className='awesome-companies'>
            <img src={adwerx} />
          </div>
        </div>
      </section>

    </main>
    <footer>
      <section className="section section--dark">
        <div className="container">
          <div className="technologies">
            <div className="technologies__header">
              <h3>Technologies I am skilled in</h3>
            </div>
            <div className="technologies__list">
              <ul>
                <li>Ruby</li>
                <li>Javascript</li>
                <li>Rails</li>
                <li>React</li>
                <li>Node</li>
                <li>REST</li>
                <li>GraphQL</li>
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
        </div>
      </section>
    </footer>
  </body>
)

export default Index
