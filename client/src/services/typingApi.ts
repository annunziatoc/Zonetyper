
    export const getNewText = async (): Promise<string> => {

        try {
            const response = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
                headers: {'X-Api-Key': import.meta.env.VITE_API_NINJA_KEY}
            })

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const result = await response.json();
        
            return result[0].quote
        }

        catch (error) {
            console.error((error));
            return 'There is an issue with the api call! Working on it...';
        }
    }


   

