import {useState, type RefObject} from 'react';

interface TextAreaInputProps {
    inputRef: RefObject<HTMLTextAreaElement | null>;
}

const TextAreaInput = ({inputRef}: TextAreaInputProps) => {


    const testStr = `On a Mars where ruthless corporate interests violently 
    collide with a homegrown independence movement as Earth-based overlords 
    battle for profits and power, Hakan Veil is an ex–professional enforcer 
    equipped with military-grade body tech that's made him a human killing machine. 
    But he's had enough of the turbulent red planet, and all he wants is a ticket 
    back home—which is just what he's offered by the Earth Oversight organization, 
    in exchange for being the bodyguard for an EO investigator. It's a beyond-easy 
    gig for a heavy hitter like Veil … until it isn't.`.trim();


    const [textInput, setTextInput] = useState("")


    function checkInput(index: number) {
        if (index >= textInput.length) return 'text-typing-surface-text dark:text-typing-surface-text-dark';
        if (textInput[index] === testStr[index]) return 'text-green-500';
        return 'text-red-500';
    }


    return (
        <div className="relative w-full h-full">
            <textarea
                ref={inputRef}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                style={{
                    position: 'absolute',
                    left: '-10000px'
                }}
            />

            <div>
                {testStr.split('').map((char, index) => (
                    <span key={index} className={checkInput(index)}>{char}</span>)
                )}
            </div>
        </div>
    )
}


export default TextAreaInput;

