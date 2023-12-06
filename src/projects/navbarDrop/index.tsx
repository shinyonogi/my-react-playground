import { useState } from 'react';

import GoBackButton from '../../components/GoBackButton';

import './NavbarDrop.css';

const NavbarDrop = () => {
    const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);

    return (
        <>
            <nav>
                <ul>
                    <li onMouseEnter={() => setDropDownVisible(true)} onMouseLeave={() => setDropDownVisible(false)}>
                        <p>Element 1</p>
                        <ul className={`drop-down__content ${dropDownVisible ? 'drop-down__content--visible' : ''}`}>
                            <li>SubElement 1</li>
                            <li>SubElement 2</li>
                            <li>SubElement 3</li>
                        </ul>
                    </li>
                    <li><p>Element 2</p></li>
                    <li><p>Element 3</p></li>
                    <li><p>Element 4</p></li>
                </ul>
            </nav>
            <GoBackButton />
        </>
  )
}

export default NavbarDrop;
