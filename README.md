# Opdrachtbeschrijving

## Inleiding
Je gaat een React formulier maken met controlled components. Hiervoor maak je gebruik van de React useState hook.

![screenshot](src/assets/screenshot.png)

In jouw formulier komen de volgende inputs te staan:
* _Naam_ - tekstveld
* _Leeftijd_ - getalveld
* _Hoe heb je dit recept gevonden?_ - selectbox met de opties "Google", "Vriend", "Advertentie", "Anders".
* _Opmerkingen_ - tekstareaveld
* _Versturen-knop_ (van type `submit`)

Dit project is opgezet met behulp van [Create React App](https://github.com/facebook/create-react-app).

## Acceptatie criteria
* Alle inputs zijn controlled components
* Wanneer de gebruiker op de versturen-knop klikt, worden alle waarden van de inputvelden in de console gelogt. 
In plaats van een `onClick` eventlistener op de button te plaatsen, mag je de `onSubmit` event-listener op het `<form>`-element plaatsen! 
Deze wordt automatisch getriggerd wanneer er geklikt wordt op een button met `type=submit` in het formulier. 
* Omdat de button een `submit` button is, zal de pagina automatisch herladen wanneer je erop klikt. Zorg dat je dit voorkomt. 
_Tip_: lees [dit](https://www.robinwieruch.de/react-preventdefault) artikel over `preventDefault()` in React.

**Bonus:**: Snel klaar met deze opdracht? Het is mogelijk (en in de parktijk ook gebruikelijk) om slechts één functie en één state variabele te 
gebruiken waarmee álle `onChange` listeners worden afgevangen. Als je hier mee wil experimenteren kun je [dit](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react) 
artikel gebruiken als leidraad. Lees vooral het kopje "Multiple Inputs" en het stuk over "Checkbox Inputs". De antwoorden voor deze aanpak staan op de branch _uitwerkingen-bonus_.

**Bonus 2:** Make it look nice! 😍

## De applicatie starten
Als je het project gecloned hebt naar jouw lokale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. Begin met het maken van wijzigingen in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

##Alles in een functie en state
### e.preventDefault();
```javascript
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

```

##aparte functies en states
```javascript
import React from 'react';
import './App.css';

function App() {
 const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [selectValue, setSelectValue] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    function getName(e) {
        setNameValue(e.target.value)
    }
    function getAge(e) {
        setAgeValue(e.target.value)
    }
    function getSelectBox(e){
        setSelectValue(e.target.value)
    }
    function getMessage(e){
        setMessageValue(e.target.value)
    }
    function sendForm(e){
        console.log(`${nameValue} ${ageValue} ${selectValue} ${messageValue}`);
        setSubmitted(true);
        e.preventDefault();
    }

```

```javascript

```