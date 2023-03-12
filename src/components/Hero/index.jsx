import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '/hero1.jpeg',
  },
  {
    url: '/hero2.jpg',
  },
  {
    url: '/hero3.avif',
  },
  {
    url: '/hero4.jpg',
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