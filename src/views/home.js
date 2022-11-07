import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Simple Honest Dogfish</title>
        <meta property="og:title" content="Simple Honest Dogfish" />
      </Helmet>
      <div className="home-container1"></div>
      <button className="button">Button</button>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
    </div>
  )
}

export default Home
