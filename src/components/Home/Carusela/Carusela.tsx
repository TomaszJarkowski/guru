import { Carousel } from 'react-responsive-carousel';

import './Carusela.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../../img/slide1.jpg';
import img2 from '../../../img/slide5.jpg';
import img3 from '../../../img/slide3.jpg';
import guruLogo from '../../../img/logoPNG.png';

const imgs = [
    {
        image: img1
    },
    {
        image: img2
    },
    {
        image: img3
    }
];

export const Carusela = () => {
    return (
        <div className='carusela'>
            <Carousel autoPlay={true} interval={7000} transitionTime={800} infiniteLoop={true}>
                {imgs.map((item, index) => (
                    <div
                        className='carusela__img'
                        key={index}
                        style={{ backgroundImage: `url('${item.image}')` }}>
                        <div className='carusela__info'>
                            <img className='img' src={guruLogo} alt='carusela in the home page' />
                            <h1>Catch & Release </h1>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
