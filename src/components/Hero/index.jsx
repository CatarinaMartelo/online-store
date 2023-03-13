import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '/online-store/hero2.jpg',
  },
  {
    url: '/online-store/hero3.avif',
  },
  {
    url: '/online-store/hero4.jpg',
  },
];

const Hero = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Hero