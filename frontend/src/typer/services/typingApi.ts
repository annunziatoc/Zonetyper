import quoteList from '../../../static/quotes.json'

export const getNewText = () => {

    const randomIndex = Math.floor(Math.random() * quoteList.length)
    return quoteList[randomIndex]
}




