import { useState } from 'react';

import GoBackButton from '../../components/GoBackButton';

import './StateForm.css';

interface IStateForm {
    name: string;
    favoriteProgrammingLanguage: string;
}

const StateForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [formEntry, setFormEntry] = useState<IStateForm>(
        {
            name: "",
            favoriteProgrammingLanguage: ""
        }
    );
    const [prevFormEntry, setPrevFormEntry] = useState<IStateForm>(
        {
            name: "",
            favoriteProgrammingLanguage: ""
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setPrevFormEntry(formEntry);
        setIsFormSubmitted(true);
    };

    return (
        <>
            {isFormSubmitted && (
                <div className='form--submitted'>
                    <h2>Your previous form entry</h2>
                    <h4>Name: {prevFormEntry.name}</h4>
                    <h4>Favorite Programming Language: {prevFormEntry.favoriteProgrammingLanguage}</h4>
                </div>
            )}
            <form className="stateform" onSubmit={handleSubmit}>
                <h2>Please Enter your data.</h2>
                <input
                    type="text"
                    placeholder="Enter your name here"
                    name="name"
                    value={formEntry.name}
                    onChange={(e) => setFormEntry(prev => ({...prev, [e.target.name]: e.target.value}))}
                />
                <input
                    type="text"
                    placeholder="Enter your favorite Programming Language"
                    name="favoriteProgrammingLanguage"
                    value={formEntry.favoriteProgrammingLanguage}
                    onChange={(e) => setFormEntry(prev => ({...prev, [e.target.name]: e.target.value}))}
                />
                <button type="submit">Submit</button>
            </form>
            <GoBackButton />
        </>
  )
}

export default StateForm;
