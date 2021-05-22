import { Carusela } from '../components/Home/Carusela/Carusela';
import { Newslatter } from '../components/Home/Newslatter/Newslatter';
import { YouTubeChanel } from '../components/Home/YT/YouTubeChanel';
import { Articles } from '../components/Home/Articles/Articles';
import { Container } from '../components/UI/Container/Container';
import { OurTeam } from '../components/Home/OurTeam/OurTeam';
import { Illustration } from '../components/Home/Illustration/Illustration';
import { LatestProduct } from '../components/Home/LatestProduct/LatestProduct';
import { NewProducts } from '../components/Home/NewProducts/NewProducts';

import './scss/Home.scss';

export const Home = () => (
    <Container>
        <div className='HomePage'>
            <Carusela />
            <Illustration />
            <Articles />
            <LatestProduct />
            <div className='HomePage__about'>
                <h2 className='title'>Guru Fishing Tackle</h2>
                <p className='description'>
                    In 2009 saw the launch of Korda’s sister brand, Guru. A fantastic new company
                    striving to take match & coarse fishing tackle to the next level. The most
                    important part of what Guru do is making sure that the products that you use are
                    the best out there, bar none. They have been producing reliable end tackle for
                    years and really listen to the customer to ensure their items meet the demands
                    of anglers. We stock a massive array of Guru products like Feeders, Hooks,
                    Tools, Leads & Lines with many more products due to be launched over the coming
                    months. At Tackleuk so we are sure that you will find what you need.
                </p>
            </div>
            <NewProducts />
            <OurTeam />
            <YouTubeChanel />
            <Newslatter />
        </div>
    </Container>
);
