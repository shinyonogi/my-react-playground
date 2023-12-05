import { useNavigate } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg'

import './Root.css';

const Root = () => {
    const navigate = useNavigate();

    return (
        <>
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h2>Welcome To React Playground!</h2>
            <a onClick={() => navigate("buttonstate")}>Button State (with useState)</a>
            <a onClick={() => navigate("navbardrop")}>Navbar with DropDown Menu</a>
            <div className='powered-by'>
                <p>Powered by </p>
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
            </div>
        </>
  )
}

export default Root
