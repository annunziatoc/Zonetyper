import {sentences} from '../data/sentences'
import {useState} from 'react'

export const TypingTest = () => {
    
    const [userInput, setUserInput] = useState('')

    const sData = sentences[0].split('')


    return <div>

        {sData.map((char, index) => (
          
            <span key={index} className={`
                    ${userInput[index] ? (userInput[index] === char ? 'text-green-300' : 'text-red-300') : 'text-stone-400'}`}>
                {char}
            </span>
        ))}

        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>


    </div>
}
