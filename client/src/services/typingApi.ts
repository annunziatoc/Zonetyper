
    export const getNewText = async (): Promise<string> => {

        try {
            const response = await fetch("https://api.quotable.io/random")

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const result = await response.json();
        
            return result.content
        }

        catch (error) {
            console.error((error));
            return 'Culture is like a smog. To live within it, you must breathe some of it in and, inevitably, be contaminated.';
        }
    }


   

