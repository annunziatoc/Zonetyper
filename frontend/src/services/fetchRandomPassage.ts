interface QuotableApiResponse{
    _id?: string;
    content: string;
    author: string;
    authorSlug?: string;
    length?: number;
    tags?: string[];
}


const fetchRandomPassage = async (): Promise<QuotableApiResponse> => {

    try {

        const response = await fetch('https://api.quotable.io/quotes/random?minLength=100&maxLength=627');

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const array = await response.json()
        const data = array[0];


        return {
            content: data.content,
            author: data.author,
        };

    } catch (error) {
        console.error('failed to fetch ',error);
        throw error;
    }

}


export default fetchRandomPassage;



