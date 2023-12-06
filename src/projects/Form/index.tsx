import { useState } from 'react';

import GoBackButton from '../../components/GoBackButton';

import './Form.css';

interface IFormInputs {
    name: string;
    favoriteProgrammingLanguage: string;
}

const StateForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState<IFormInputs>(
        {
            name: "",
            favoriteProgrammingLanguage: ""
        }
    );
    const [prevFormData, setPrevFormData] = useState<IFormInputs>(
        {
            name: "",
            favoriteProgrammingLanguage: ""
        }
    );

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setPrevFormData(formData);
        setIsFormSubmitted(true);
        setFormData({name: "",favoriteProgrammingLanguage: ""});
    }

    return (
        <>
            {isFormSubmitted && (
                <div className='form--submitted'>
                    <h2>Your previous form entry</h2>
                    <h4>Name: {prevFormData.name}</h4>
                    <h4>Favorite Programming Language: {prevFormData.favoriteProgrammingLanguage}</h4>
                </div>
            )}
            <form className="form" onSubmit={handleSubmit}>
                <h2>Please Enter your data.</h2>
                <input
                    type="text"
                    placeholder="Enter your name here"
                    name="name"
                    value={formData.name}
                    onChange={(event) => setFormData(prev => ({...prev, [event.target.name]: event.target.value}))}
                />
                <input
                    type="text"
                    placeholder="Enter your favorite Programming Language"
                    name="favoriteProgrammingLanguage"
                    value={formData.favoriteProgrammingLanguage}
                    onChange={(event) => setFormData(prev => ({...prev, [event.target.name]: event.target.value}))}
                />
                <button type="submit">Submit</button>
            </form>
            <GoBackButton />
        </>
  )
}

export default StateForm;
