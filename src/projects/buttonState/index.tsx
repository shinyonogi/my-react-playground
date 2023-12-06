import { useState } from "react";

import GoBackButton from "../../components/GoBackButton";

import './ButtonState.css';

const ButtonStatePage: React.FC = () => {
    const [buttonClickCount, setButtonClickCount] = useState<number>(0);

    return (
        <>
            <div>
                <h1>Click me!</h1>
                <p>(Using useState Hook)</p>
                <button onClick={() => setButtonClickCount((prev) => prev + 1)}>
                    {buttonClickCount}
                </button>
            </div>
            <GoBackButton />
        </>
  )
}

export default ButtonStatePage;
