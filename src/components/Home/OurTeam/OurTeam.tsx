import { NavLink, Route, Switch } from 'react-router-dom';

import { Modal } from '../../Modal/Modal';

import './OurTeam.scss';

import img10 from '../../../img/steve-ringer.jpg';
import img11 from '../../../img/matt-godfrey.jpg';
import img12 from '../../../img/andyBennett.jpg';
import img13 from '../../../img/adamRooney.jpg';

export const OurTeam = () => (
    <>
        <div className='angler__container'>
            <h1>TEAM</h1>
            <div className='anglers'>
                <div className='angler'>
                    <img src={img10} alt='angler from team Steve Ringer' />
                    <h2>Steve Ringer</h2>
                </div>
                <div className='angler'>
                    <img src={img11} alt='angler from team Matt Godfrey' />
                    <h2>Matt Godfrey</h2>
                </div>
            </div>
            <NavLink to='/home/team'>
                <button>Meet our team </button>
            </NavLink>
        </div>
        <Switch>
            <Route path='/home/team'>
                <Modal>
                    <div className='ourTeam'>
                        <div className='outTeam__item'>
                            <img src={img10} alt='Steve Ringer' />
                            <h2>Steve Ringer</h2>
                        </div>
                        <div className='outTeam__item'>
                            <img src={img11} alt='Matt Godfrey' />
                            <h2>Matt Godfrey</h2>
                        </div>
                        <div className='outTeam__item'>
                            <img src={img12} alt='Andy Bennett' />
                            <h2>Andy Bennett</h2>
                        </div>
                        <div className='outTeam__item'>
                            <img src={img13} alt='Adam Rooney' />
                            <h2>Adam Rooney</h2>
                        </div>
                    </div>
                </Modal>
            </Route>
        </Switch>
    </>
);
