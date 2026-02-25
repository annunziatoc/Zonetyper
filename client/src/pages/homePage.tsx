import { useEffect, useState } from "react";
import styles from './homePage.module.css'

const HomePage = () => {

    // we need to somehow make a caret overlay via :: after
    // we need to validate via regex or some other way that what we typed is in fact what is displayed.


    // store currChar and check if its equal to input

    const [char, setChar] = useState<string | null>('')

    useEffect(() => {
        console.log(char);
    }, [char])

    // /[a-zA-Z]+/

    return (
        <main className={styles.main}>
            <div className={styles.typingMask}>
                <div onKeyDown={(ev) => setChar(ev.key)}
                    onClick={(e) => e.currentTarget.focus()}
                    className={styles.surface}
                    onFocus={() => console.log('focused')}
                    tabIndex={0}>
                    {char}
                </div>
            </div>
        </main>
    )

}


export default HomePage;
