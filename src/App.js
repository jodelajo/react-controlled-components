import React from 'react';
import './App.css';

function App() {
    const [state, setState] = React.useState({
        name:'',
        age:'',
        selectBlock:'Anders',
        message:'',
        button:false
    })

    function handleChange(e) {
        const value =
             e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
        e.preventDefault();
        console.log(state.name, state.age, state.selectBlock, state.message)
    }

  return (
    <>
    <form onSubmit={handleChange}>
        <fieldset className="fieldset">
            <legend>Gegevens</legend>
        <label htmlFor="name" className="label">Naam:
            <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={handleChange}
            />
        </label>
            <label htmlFor="age" className="label">Leeftijd:
                <input
                    className="input-field"
                    type="number"
                    name="age"
                    id="age"
                    value={state.age}
                    onChange={handleChange}
                />
            </label>
        </fieldset>
        <fieldset className="fieldset-review">
            <legend>Jouw review</legend>
            <label htmlFor="select" className="label-review">Hoe heb je dit recept gevonden?
                <select
                    form=""
                    name="selectBlock"
                    id="select-block"
                value={state.selectBlock}
                onChange={handleChange}
                >
                    <option className="option" value="Google">
                        Google
                    </option>
                    <option className="option" value="Vriend">
                        Vriend
                    </option>
                    <option className="option" value="Advertentie">
                        Advertentie
                    </option>
                    <option className="option" value="Anders">
                       Anders
                    </option>
                </select>
            </label>
            <label className="label-review">Opmerkingen:
                <textarea className="textarea"
                    type="text"
                    placeholder="Wat vond je van het recept?"
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                />
            </label>

            <button
                name="button"
                type="submit"
                value={state.button}
            >Versturen</button>
        </fieldset>
    </form>
    </>
  );
}

export default App;
