import parseCard from "./parseCard";

const generateCards = async (tickets) =>{
    document.querySelector('.cards').innerHTML = ''
    const generatedTickets = await tickets

    for (let i=0; i<5; i++){
        parseCard(i, generatedTickets)
    }
    return generatedTickets
    
}

export default generateCards;