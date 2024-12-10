import React from 'react';
import './HeroSection.css';
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'

const imagesColumn1 = [
  image1,
  image2,
  image3,
  image4,
];

const imagesColumn2 = [
  image5,
  image6,
  image7,
  image8,
];

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Book an appointment with</h1>
        <span>lifestyle medicine </span>experts
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
      <div className="search-bar">
      <div className="search-inputs"> 
        <div className="search-input-wrapper"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_22)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2ZM4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5Z" fill="#8B8E9C"/>
          </g>
          <defs>
          <clipPath id="clip0_2_22">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <input type="text" className='cps' placeholder="Condition, procedure, specialty..." /> 
        </div> 
        <div className="search-input-wrapper"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#8B8E9C"/>
          </svg>
          <input type="text" className='csz' placeholder="City, state, or zipcode" /> 
        </div> 
        <div className="search-input-wrapper"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 4.5V19.5H1.5V4.5H22.5ZM24 3H0V21H24V3Z" fill="#8B8E9C"/>
          <path d="M13.5 7.5H21V9H13.5V7.5ZM13.5 10.5H21V12H13.5V10.5ZM13.5 13.5H16.5V15H13.5V13.5ZM9.75 7.5C8.85 7.5 8.1 8.4 7.5 9C6.9 8.4 6.15 7.5 5.25 7.5C3 7.5 2.1 10.35 3.75 11.85L7.5 15L11.25 11.85C12.9 10.35 12 7.5 9.75 7.5Z" fill="#8B8E9C"/>
          </svg>
          <input type="text" className='ic' placeholder="Insurance carrier" /> 
        </div> 
        <button> 
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89605 2.00628e-08C7.47736 0.000120879 6.07928 0.339494 4.81844 0.989804C3.5576 1.64011 2.47056 2.5825 1.64802 3.73835C0.825473 4.8942 0.291278 6.22998 0.0899992 7.63426C-0.111279 9.03854 0.0261946 10.4706 0.490952 11.8109C0.955709 13.1513 1.73427 14.361 2.76169 15.3393C3.7891 16.3176 5.03557 17.036 6.3971 17.4346C7.75864 17.8331 9.19575 17.9004 10.5886 17.6306C11.9813 17.3609 13.2894 16.7619 14.4037 15.8839L18.2262 19.7062C18.4236 19.8968 18.688 20.0023 18.9624 20C19.2368 19.9976 19.4994 19.8875 19.6934 19.6934C19.8875 19.4994 19.9976 19.2369 20 18.9625C20.0023 18.688 19.8968 18.4236 19.7062 18.2262L15.8837 14.4039C16.9178 13.0921 17.5617 11.5156 17.7417 9.8549C17.9216 8.19422 17.6304 6.51642 16.9013 5.01352C16.1722 3.51061 15.0347 2.24333 13.619 1.35669C12.2033 0.470054 10.5665 -0.000112141 8.89605 2.00628e-08ZM2.09261 8.89647C2.09261 7.09215 2.8094 5.36173 4.08529 4.08589C5.36118 2.81005 7.09166 2.09329 8.89605 2.09329C10.7004 2.09329 12.4309 2.81005 13.7068 4.08589C14.9827 5.36173 15.6995 7.09215 15.6995 8.89647C15.6995 10.7008 14.9827 12.4312 13.7068 13.707C12.4309 14.9829 10.7004 15.6996 8.89605 15.6996C7.09166 15.6996 5.36118 14.9829 4.08529 13.707C2.8094 12.4312 2.09261 10.7008 2.09261 8.89647Z" fill="white"/>
          </svg>
           Find now 
        </button> </div>
      </div>
      <div className="image-gallery">
        <div className="column column1">
          {imagesColumn1.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
        <div className="column column2">
          {imagesColumn2.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 4}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


