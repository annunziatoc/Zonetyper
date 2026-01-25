import usePassage from "../services/usePassage.ts";

const passage = () => {
    
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {passage, error, loading} = usePassage();

    if (loading) return <div>Loading..</div>
    if(error) return <div>Error: {error}</div>
    if(!passage) return <div>No passage available</div>
    
   return passage.content.trim().replace(/\s+/g, ' ')
        .replace(/[–—]/g, '-').slice(0,627) + (passage.content.length > 627 ? '...': '');
    
}


export default passage;



