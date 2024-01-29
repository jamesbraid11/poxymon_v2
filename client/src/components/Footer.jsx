import { FaInstagram, FaGithub } from "react-icons/fa"

// import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialFacebook } from "react-icons/ti"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer>
      <p className='footer-title'>&copy;Poxymon</p>
      <div className="github">
        <FaGithub />Created by <span><a href='https://github.com/jamesbraid11' className="github-link">James Braid</a></span>
      </div>
      <div className='socials'>
        <a href='https://www.instagram.com' className='footer-icon'><FaInstagram /></a>
        {/* <a href='#' className='social-icons'><TiSocialFacebookCircular /></a> */}
        <a href='https://www.facebook.com' className='footer-icon'><TiSocialFacebook /></a>
        <a href='https://twitter.com' className='footer-icon'><FaXTwitter /></a>
      </div>
    </footer>
  )
}