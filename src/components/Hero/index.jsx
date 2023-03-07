import { EmailIcon, FacebookIcon, Footer, HeroImg, Hyperlink, InstagramIcon } from "./styles" 

const Hero = () => {
  return (
    <div>
    <div>
    <HeroImg src={require("../../assets/hero.webp")} alt="Hero Image" />
    </div>
    <Footer>Copyright © 2023
    <Hyperlink href={"#"}><InstagramIcon src={require("../../assets/instagram.png")} alt="Logo" /></Hyperlink>
    <Hyperlink href={"#"}><FacebookIcon src={require("../../assets/facebook.png")} alt="Logo" /></Hyperlink>
    <Hyperlink href={"#"}><EmailIcon src={require("../../assets/e-mail.png")} alt="Logo" /></Hyperlink>
    </Footer>
    
    </div>
  
  )
}

export default Hero