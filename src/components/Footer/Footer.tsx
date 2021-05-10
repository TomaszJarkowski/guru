import logo from '../../img/guru_logo.jpg';
import { Container } from '../Container/Container';

import './Footer.scss';

export const Footer: React.FC = () => (
    <footer className='footer'>
        <Container>
            <div className='footer__content'>
                <img className='footer__logo' src={logo} alt='guru-logo' />
                <div className='footer__socials'>
                    <a
                        href='https://www.facebook.com/Tackle.Guru'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a
                        href='https://www.instagram.com/gurufishing/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a
                        href='https://www.youtube.com/user/TackleGuruTV'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a
                        href='https://www.google.pl/search?sxsrf=ALeKk02ZbMkKZs8_5ui6m3WllVB8Wz8Dkg%3A1595620687921&source=hp&ei=Tz0bX_yxNvLB8gLKlYDYBA&q=GuruFishing&oq=GuruFishing&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAIQJzIECAAQDTIECAAQDTIGCAAQDRAeMgYIABANEB4yBggAEA0QHjIGCAAQDRAeMgYIABANEB4yBggAEAoQHjIGCAAQDRAeOggIABCxAxCDAToFCAAQsQM6AggAOgQIIxAnOgUILhCxAzoICC4QsQMQgwE6BQgAEMsBOgUILhDLAToHCAAQChDLAToHCC4QChDLAToGCAAQDRAKOgQIABAeUPUBWM4gYMQhaABwAHgAgAF9iAGTCJIBAzMuN5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi8lbGi1ubqAhXyoFwKHcoKAEsQ4dUDCAc&uact=5'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-google'></i>
                    </a>
                </div>
                <div className='footer__info'>
                    <address className='info__contact info-item'>
                        <h3>Contact:</h3>
                        <div className='contact__item'>
                            <p>
                                <i className='fas fa-map-marker-alt'></i>Location: PO Box 6313,
                                Basildon SS14 0HW, Great Britain
                            </p>
                        </div>
                        <div className='contact__item'>
                            <p>
                                <i className='fas fa-envelope'></i>Email: info@tackleguru.co.uk
                            </p>
                        </div>
                        <div className='contact__item'>
                            <p>
                                <i className='fas fa-phone'></i> Telephone: +44 1268 522417
                            </p>
                        </div>
                    </address>
                    <div className='info__oppening info-item'>
                        <h3>Opening hours:</h3>
                        <p>
                            Monday-Friday: <time>11 am</time> - <time>10 pm</time>
                        </p>
                        <p>
                            Saturday-Sunday: <time>12 am</time> - <time>10 pm</time>
                        </p>
                    </div>
                </div>
                <a
                    className='footer__map'
                    href='https://www.google.pl/maps/place/Korda/@51.5711034,0.4578503,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8c690a456e441:0x3a37f0091c46e13f!8m2!3d51.5711034!4d0.460039'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <i className='fas fa-map-marker-alt link'></i>Map
                </a>
                <p className='footer__author'>Coded by Jarkowski Tomasz</p>
            </div>
        </Container>
    </footer>
);
