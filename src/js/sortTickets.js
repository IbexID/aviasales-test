import filterTickets from "./filterTickets";

const sortTickets = async (method, params) =>{
    
    const filteredTickets = await filterTickets(params)
    if (!method){
        return filteredTickets
    }
    if (method==='price'){
        const sortedByPriceTickets = filteredTickets.sort((a,b)=>a.price-b.price)
        return sortedByPriceTickets
    }
    if (method==='time'){
        const sortedByDurationTickets = filteredTickets.sort((a,b)=>{
            const durFirst = a.segments.reduce((a,b)=>a.duration + b.duration)
            const durLast = b.segments.reduce((a,b)=>a.duration + b.duration)
            return durFirst - durLast
        })
        return sortedByDurationTickets
    }
}
export default sortTickets;