/* eslint-disable max-len */
import { Container } from '../components/UI/Container/Container';
import { Title } from '../components/UI/Title/Title';
import { Text } from '../components/UI/Text/Text';
import { Subtitle } from '../components/UI/Subtitle/Subtitle';

import './scss/Contact.scss';

import teamGuru from '../img/teamGuru.jpg';

export const Contact = () => (
    <Container>
        <Title>Contact</Title>
        <div className='ContactPage'>
            <div className='backgroungIMG'>
                <div className='ContactPage__contactUs'>
                    <Subtitle classNames='ContactPage__header'>Contact Us</Subtitle>
                    <div className='contactUs__item'>
                        <Subtitle classNames='subtitle'>Product Enquiries</Subtitle>
                        <p>
                            <i className='fas fa-envelope'></i> products@tackleguru.co.uk
                        </p>
                        <p>
                            <i className='fas fa-phone'></i> 01268 522423
                        </p>
                    </div>
                    <div className='contactUs__item'>
                        <Subtitle classNames='subtitle'>
                            Website Enquiries And General Marketing
                        </Subtitle>
                        <p>
                            <i className='fas fa-envelope'></i> info@tackleguru.co.uk
                        </p>
                        <p>
                            <i className='fas fa-phone'></i> 01268 522417
                        </p>
                    </div>
                    <div className='contactUs__item'>
                        <Subtitle classNames='subtitle'>Sales</Subtitle>
                        <p>
                            <i className='fas fa-envelope'></i> sales@tackleguru.co.uk
                        </p>
                        <p>
                            <i className='fas fa-phone'></i> 01268 522417
                        </p>
                    </div>
                    <div className='contactUs__item'>
                        <Subtitle classNames='subtitle'>Customer Services</Subtitle>
                        <p>
                            <i className='fas fa-envelope'></i> customerservices@tackleguru.co.uk
                        </p>
                        <p>
                            <i className='fas fa-phone'></i> 01268 522417
                        </p>
                    </div>
                </div>
                <div className='ContactPage__oppeningHours'>
                    <Subtitle classNames='ContactPage__header'>Opening Hours</Subtitle>
                    <div className='oppeningHours__item'>
                        <p>Monday-Friday: 11 am - 10 pm</p>
                        <p>Saturday-Sunday: 12 am - 10 pm</p>
                    </div>
                </div>
            </div>
            <div className='ContactPage__article'>
                <h2 className='article__title'>Team Guru - Knowledge is power</h2>
                <Text classNames='article__description'>
                    The most important part of what we do is making sure that the Guru products that
                    you use are the best out there, bar none. However, we also want you to be
                    completely happy with the whole Guru aftersales experience! If you need to
                    contact the team about a product or an idea, or simply for some advice, then you
                    can do just that through the contact details displayed on this page. Customer
                    service is of vital importance to us, as are your opinions, so we want you to
                    get in touch as often as you feel that you need to. Guru can only improve as a
                    company by taking your feedback on board, be that good or bad so let us know
                    what you think. We’re attending more and more of the big fishing shows so if you
                    want to come and meet a member of the Guru team in person then pop along and say
                    hello. We’ll be only too pleased to pass on any help and advice that you might
                    need or talk you through any of our new products.
                </Text>
                <img src={teamGuru} className='article__picture' alt='our team, team GuruTackle' />
            </div>
            <iframe
                title='our localization'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.8434493387545!2d0.4578503157723108!3d51.571103379645606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c690a456e441%3A0x3a37f0091c46e13f!2sKorda!5e0!3m2!1spl!2spl!4v1597586439961!5m2!1spl!2spl'
                style={{ width: '600', height: '450', border: '0' }}
                aria-hidden='false'></iframe>
        </div>
    </Container>
);
