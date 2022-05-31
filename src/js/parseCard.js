import createCard from "./createCard"

const parseCard = async (i, generatedTickets) =>{
    const firstTimeDeparture = new Date(await generatedTickets[i].segments[0].date).toLocaleTimeString().slice(0, 5)
        const firstTimeArrival = new Date(new Date(generatedTickets[i].segments[0].date).getTime() + 60000*generatedTickets[i].segments[0].duration).toLocaleTimeString().slice(0, 5)
        const secondTimeDeparture = new Date(generatedTickets[i].segments[1].date).toLocaleTimeString().slice(0, 5)
        const secondTimeArrival = new Date(new Date(generatedTickets[i].segments[1].date).getTime() + 60000*generatedTickets[i].segments[1].duration).toLocaleTimeString().slice(0, 5)
        
        const flightObj = {
            price:String(generatedTickets[i].price).slice(0,-3) + ' ' + String(generatedTickets[i].price).slice(-3) ,
            company: generatedTickets[i].carrier, 
            firstSegment: generatedTickets[i].segments[0].origin + ' – ' + generatedTickets[i].segments[0].destination,
            firstDeparture: firstTimeDeparture + ' - ' + firstTimeArrival,
            firstDuration: Math.floor(generatedTickets[i].segments[0].duration/60) + 'м ' + generatedTickets[i].segments[0].duration%60 + 'ч',
            firstStops: generatedTickets[i].segments[0].stops,
            secondSegment: generatedTickets[i].segments[1].origin +' – '+ generatedTickets[i].segments[1].destination,
            secondDeparture: secondTimeDeparture + ' - ' + secondTimeArrival,
            secondDuration: Math.floor(generatedTickets[i].segments[1].duration/60) + 'м ' + generatedTickets[i].segments[1].duration%60 + 'ч',
            secondStops: generatedTickets[i].segments[1].stops
        }
        createCard(flightObj)
}
export default parseCard