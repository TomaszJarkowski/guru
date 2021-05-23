import { NavLink, Route, Switch } from 'react-router-dom';

import { Modal } from '../../Modal/Modal';
import { DefaultLink } from '../../UI/DefaultLink/DefaultLink';

import './OurTeam.scss';

import img10 from '../../../img/steve-ringer.jpg';
import img11 from '../../../img/matt-godfrey.jpg';
import img12 from '../../../img/andyBennett.jpg';
import img13 from '../../../img/adamRooney.jpg';

export const OurTeam = () => (
    <>
        <div className='Anglers'>
            <h1 className='Anglers__title'>TEAM</h1>
            <div className='Anglers__items'>
                <div className='Anglers__item'>
                    <img src={img10} alt='angler from team Steve Ringer' />
                    <h2>Steve Ringer</h2>
                </div>
                <div className='Anglers__item'>
                    <img src={img11} alt='angler from team Matt Godfrey' />
                    <h2>Matt Godfrey</h2>
                </div>
            </div>
            <DefaultLink path='/home/team'>Meet our team</DefaultLink>
        </div>
        <Switch>
            <Route path='/home/team'>
                <Modal>
                    <div className='OurTeam'>
                        <div className='OurTeam__item'>
                            <img className='OurTeam__img' src={img10} alt='Steve Ringer' />
                            <h2 className='OurTeam__title'>Steve Ringer</h2>
                        </div>
                        <div className='OurTeam__item'>
                            <img className='OurTeam__img' src={img11} alt='Matt Godfrey' />
                            <h2 className='OurTeam__title'>Matt Godfrey</h2>
                        </div>
                        <div className='OurTeam__item'>
                            <img className='OurTeam__img' src={img12} alt='Andy Bennett' />
                            <h2 className='OurTeam__title'>Andy Bennett</h2>
                        </div>
                        <div className='OurTeam__item'>
                            <img className='OurTeam__img' src={img13} alt='Adam Rooney' />
                            <h2 className='OurTeam__title'>Adam Rooney</h2>
                        </div>
                    </div>
                </Modal>
            </Route>
        </Switch>
    </>
);
