
    export const getNewText = async (): Promise<string> => {

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sourcetexts/random`)

            if (!response.ok) throw new Error(`Response status: ${response.status}`)
            
            const result = await response.json();
        
            return result.text
        }
        catch (error) {
            console.error((error));
            return 'There is an issue with the api call! Working on it...';
        }
    }


   

