import { useEffect, useState } from 'react';
import './StateForm.css';

interface IStateForm {
    name: string;
    favoriteProgrammingLanguage: string;
}

const StateForm = () => {
    const [formEntry, setFormEntry] = useState<IStateForm>(
        {
            name: "",
            favoriteProgrammingLanguage: ""
        }
    );

    useEffect(() => {
        console.log(formEntry);
    }, [formEntry]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`You have submitted the form with following entries: \nYour name: ${formEntry.name} \nYour favorite Programming Language: ${formEntry.favoriteProgrammingLanguage}`);
    };

    return (
        <>
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
        </>
  )
}

export default StateForm;
