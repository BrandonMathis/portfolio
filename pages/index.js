import "../styles/style.scss"

import adwerx from "../images/adwerx.png";

const Index = () => (
  <div className="main">
    <section className="section">
      <div className="heading">
        <h1 className="italic">Brandon Mathis</h1>
      </div>
    </section>

    <section className="section">
      <p>I am a person doing web stuff</p>
      <p className='gray'>Gee... isn't that cool?</p>
      <a href="#">Click Here</a>
    </section>

    <section className="section">
      <h2>Amazing Companies I've Worked With</h2>
      {/* <h3>More Amazing Companies I've Worked With</h3> */}
      <div className='awesome-companies'>
        <img src={adwerx} />
      </div>
    </section>
  </div>
)

export default Index
