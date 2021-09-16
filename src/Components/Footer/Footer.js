import "./Footer.css"
import Logo from "../../assets/logo.svg"
import Facebook from "../../assets/icon-facebook.svg"
import Twiiter from "../../assets/icon-twitter.svg"
import Instagram from "../../assets/icon-instagram.svg"

const className ="Footer"

const Footer = () => {
  return (
        <footer className={`${className}Container`}> 
          <div className={`${className}LogoContainer`}> 
              <img className={`${className}Logo`} src={Logo} alt="logo" />
          </div> 
          <ul className={`${className}ListContainer`}> 
            <li className={`${className}ListItem1`}> HOME </li>
            <li className={`${className}ListItem2`}> HEADPHONES </li>
            <li className={`${className}ListItem3`}> SPEAKERS</li>
            <li className={`${className}ListItem4`}> EARPHONES </li>
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