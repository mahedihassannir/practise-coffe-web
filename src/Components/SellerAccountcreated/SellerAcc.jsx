import { useNavigate } from "react-router-dom";

const accountCreated = true;
// const accountCreated = false;

const navigate = useNavigate();


const SellerAcc = () => {


    if (accountCreated === true) {


        return navigate('/seller_account_created_dome')
    }


    if (accountCreated === false) {


        return navigate('/seller_register')

    }






};

export default SellerAcc;