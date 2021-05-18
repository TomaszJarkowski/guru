import { useSelector } from 'react-redux';
import { Prompt } from 'react-router-dom';

import { Container } from '../components/UI/Container/Container';
import { Step1 } from '../components/Order/Step1/Step1';
import { Step2 } from '../components/Order/Step2/Step2';
import { Step3 } from '../components/Order/Step3/Step3';
import { Step4 } from '../components/Order/Step4/Step4';
import { StepDots } from '../components/Order/StepsDots/StepsDots';
import { selectOrderState } from '../store/order/orderSlice';

import '../scss/Order.scss';

export const Order: React.FC = () => {
    const { step, finish } = useSelector(selectOrderState);

    const FormContent = () => {
        switch (step) {

            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            default:
                return <Step1 />;

        }
    };

    return (
        <Container>
            <div className='order'>
                <div className='order__container container'>
                    <StepDots />
                    <FormContent />
                </div>
            </div>
            <Prompt when={!finish} message='Are you sure you want to leave this page?' />
        </Container>
    );
};
