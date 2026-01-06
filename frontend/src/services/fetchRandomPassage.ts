import axios from "axios";
import { z } from 'zod';


const QuoteSchema = z.object({
    _id: z.string().optional(),
    content: z.string(),
    author: z.string(),
    authorSlug: z.string().optional(),
    length: z.number().optional() ,
    tags: z.array(z.string()).optional(),
});

type QuotableApiResponse = z.infer<typeof QuoteSchema>;


const fetchRandomPassage = async (): Promise<QuotableApiResponse> => {

    try {
        const response = await axios.get('https://api.quotable.io/quotes/random?minLength=100&maxLength=627');
        const validatedQS = QuoteSchema.parse(response.data[0]);
        return {
            content: validatedQS.content,
            author: validatedQS.author,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}




export default fetchRandomPassage;


