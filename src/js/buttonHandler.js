import generateCards from "./generateCards"
import sortTickets from "./sortTickets"
import checkboxParms from "./checkboxHandler"




const buttonCheap = document.querySelector('.button__cheap')
const buttonFast = document.querySelector('.button__fast')
const params = checkboxParms()



buttonCheap.addEventListener('click', (async()=> {
    const tickets = await sortTickets('price', params)
    await generateCards(tickets)
    buttonCheap.classList.add('search__sort-button--active')
    buttonFast.classList.remove('search__sort-button--active')
}))
buttonFast.addEventListener('click', (async ()=> {
    const tickets = await sortTickets('time', params)
    await generateCards(tickets)
    buttonFast.classList.add('search__sort-button--active')
    buttonCheap.classList.remove('search__sort-button--active')
}))