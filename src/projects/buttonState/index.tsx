import { useState } from "react";

import GoBackButton from "../../components/GoBackButton";

import './ButtonState.css';

const ButtonState: React.FC = () => {
    const [buttonClickCount, setButtonClickCount] = useState<number>(0);

    return (
        <>
            <div className="button-state">
                <h1>Click me!</h1>
                <button onClick={() => setButtonClickCount((prev) => prev + 1)}>
                    {buttonClickCount}
                </button>
            </div>
            <GoBackButton />
        </>
  )
}

export default ButtonState;
