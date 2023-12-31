import { useNavigate } from "react-router-dom";

import './GoBackButton.css';

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className='go-back__button-navbar' onClick={() => navigate("/")}>
                Go Back
            </button>
        </>
    )
}

export default GoBackButton;
