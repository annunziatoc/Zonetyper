import fetchRandomPassage from "./fetchRandomPassage.ts";
import {useEffect, useState} from 'react';

const usePassage = (): {passage : {content: string, author: string} | null,
    loading: boolean, error: string | null, genNewPassage: () => Promise<void>} => {

    const [passage, setPassage] = useState<{ content: string, author: string } | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const genNewPassage = async () => {
        try {
            setLoading(true)
            const data = await fetchRandomPassage();
            setPassage(data)
        } catch (err) {
            setError('Failed to load')
            console.error(err)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        genNewPassage();
    },[])

    return {passage, loading, error, genNewPassage};
}



export default usePassage;




    
