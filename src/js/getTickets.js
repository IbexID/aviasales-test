const getTickets = async () =>{
    const response = await fetch('http://localhost:3000/tickets')
                            .then((response)=>{
                                return response.json()
                            });
    return await response
                            
}

export default getTickets;