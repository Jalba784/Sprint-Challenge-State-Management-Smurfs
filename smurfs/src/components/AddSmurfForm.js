import React, { useContext, useState } from 'react';
import { SmurfContext } from '../context/SmurfContext.js';

const AddSmurfForm = () => {
    const [state, setState] = useState({});
    const addSmurf = useContext(SmurfContext);

    const handleChange = e => {
        e.preventDefault();
        const newSmurf = {
            [e.target.name]: e.target.value,
            id: Math.random() * Math.floor(3)
        };
        setState({
            ...state,
            ...newSmurf
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        addSmurf.setSmurfState([...addSmurf.smurfState, state]);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={state.value}
                        placeholder="John"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Age
                    <input
                        type="number"
                        name="age"
                        value={state.value}
                        placeholder="Some Number"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Height
                    <input
                        type="text"
                        name="height"
                        value={state.value}
                        placeholder="7cm"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddSmurfForm;
