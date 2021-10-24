import "./Footer.css"
import Logo from "../../assets/logo.svg"
import Facebook from "../../assets/icon-facebook.svg"
import Twiiter from "../../assets/icon-twitter.svg"
import Instagram from "../../assets/icon-instagram.svg"
import {Link} from "react-router-dom"

const className ="Footer"

const Footer = () => {
  return (
        <footer className={`${className}Container`}> 
          <div className={`${className}LogoContainer`}> 
              <img className={`${className}Logo`} src={Logo} alt="logo" />
          </div> 


          <ul className={`${className}ListContainer`}> 
          <Link to="/"  className={`${className}ListItem1`}> HOME </Link>
          <Link to="/:Headphones" className={`${className}ListItem2`}> HEADPHONES </Link>
          <Link to="/Category/:Speakers" className={`${className}ListItem3`}> SPEAKERS</Link>
          <Link to="/Category/:Earphones" className={`${className}ListItem4`}> EARPHONES </Link>
          </ul>
          
          <p className={`${className}Paragraph`}> 
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
          and sound specialists who are devoted to helping you get the most out of personal audio. 
          Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <small className={`${className}TermsConditions`}> 
              Copyright 2021. All Rights Reserved
          </small>
          <div className={`${className}SocialMediaLogoContainer`}>
            <img className={`${className}Facebook`} src={Facebook} alt="Facebook Logo" />
            <img className={`${className}Instagram`} src={Instagram} alt="Instagram Logo" />
            <img className={`${className}Twitter`} src={Twiiter} alt="Twitter Logo" />
          </div>
        </footer>
  )
}

export default Footer