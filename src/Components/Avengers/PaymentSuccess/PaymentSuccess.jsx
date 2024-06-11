// AVENGERS
//TOMA
//PAYMENT SUCCESS TEST 
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const { tranId } = useParams();

    return (
        <div>
            PaymentSuccess: {tranId}
        </div>
    );
};

export default PaymentSuccess;