import {useState} from 'react';

const TextAreaInput = () => {


    const string = `On a Mars where ruthless corporate interests violently 
    collide with a homegrown independence movement as Earth-based overlords 
    battle for profits and power, Hakan Veil is an ex–professional enforcer 
    equipped with military-grade body tech that's made him a human killing machine. 
    But he's had enough of the turbulent red planet, and all he wants is a ticket 
    back home—which is just what he's offered by the Earth Oversight organization, 
    in exchange for being the bodyguard for an EO investigator. It's a beyond-easy 
    gig for a heavy hitter like Veil … until it isn't.`.trim();


    const [textInput, setTextInput] = useState("")


    for (let i = 0; i < textInput.length; i++) {
        
        if (string[i] === textInput[i]) {
            //we good green
        } else {
            //red highlight bad 
        }
    }


    return (
        <>
        <textarea className="absolute opacity-0" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
            <div>
                {string.split('').map((char, index) => (
                    <span key={`${index + char}`} className="">{char}</span>)
                )}
            </div>
        </>
    )
}


export default TextAreaInput;

