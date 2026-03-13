import quoteList from '../../static/quotes.json'

export const getNewText = (): string => {

    const randomIndex = Math.floor(Math.random() * quoteList.length)
    return quoteList[randomIndex].text

}




