import { useNavigate } from 'react-router-dom';

import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg'

import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='home'>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h2>Welcome To My React Playground!</h2>
                <ul className='project-links'>
                    <li>
                        <a onClick={() => navigate("buttonstate")}>Button State (with useState)</a>
                    </li>
                    <li>
                        <a onClick={() => navigate("navbardrop")}>Navbar with DropDown Menu</a>
                    </li>
                    <li>
                        <a onClick={() => navigate("stateform")}>Form State</a>
                    </li>
                </ul>
                <div className='powered-by'>
                    <p>Powered by </p>
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </div>
            </div>
        </>
  );
}

export default Home;
