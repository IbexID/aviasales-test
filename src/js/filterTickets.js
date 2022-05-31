import getTickets from "./getTickets";

const filterTickets = async (params = {
    every: false,
    noStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false
}) =>{
    const tickets = await getTickets();
    let query = Object.entries(params).filter( ([key, value]) => value===true).map(item=> item[0])
    let filteredTickets = []
    if (query.includes('every')){
        filteredTickets = tickets
    }
    if (!query.includes('every')){
        query.forEach( item =>{
            if(item==='noStops'){
                filteredTickets.push(...tickets.filter( item => !item.segments[0].stops.length && !item.segments[1].stops.length))
            }
            if(item==='oneStop'){
                filteredTickets.push(...tickets.filter( item => item.segments[0].stops.length===1 && item.segments[1].stops.length===1))
            }
            if(item==='twoStops'){
                filteredTickets.push(...tickets.filter( item => item.segments[0].stops.length===2 && item.segments[1].stops.length===2))
            }
            if(item==='threeStops'){
                filteredTickets.push(...tickets.filter( item => item.segments[0].stops.length===3 && item.segments[1].stops.length===3))
            }

        })
    }
    return  !filteredTickets.length ? tickets : filteredTickets
}

export default filterTickets;