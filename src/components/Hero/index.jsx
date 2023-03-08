import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://cdn.shopify.com/s/files/1/2006/5615/articles/TechniMobili-Blog-5RulesForBuying.jpg?v=1510251949',
  },
  {
    url: 'https://scandasia.com/wp-content/uploads/2021/02/shutterstock_463253993.jpg',
  },
  {
    url: 'https://www.atlantichub.com/wp-content/uploads/2020/07/consumo-capa.jpg',
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