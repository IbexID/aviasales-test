import filterTickets from "./filterTickets"
import generateCards from "./generateCards"
import sortTickets from "./sortTickets"


const buttonCheap = document.querySelector('.button__cheap')
const buttonFast = document.querySelector('.button__fast')
const checkbox = document.querySelectorAll('input.search__filter-input')
const [everyCheckbox, noStopsCheckbox, oneStopCheckbox, twoStopsCheckbox, threeStopsCheckbox] = checkbox
const defaultParams = {
    every: false,
    noStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false
}



everyCheckbox.addEventListener('click', (async () => {
    Object.keys(defaultParams).forEach(v => defaultParams[v] = false)
    if (everyCheckbox.checked) {
        checkbox.forEach(item => {
            item !== everyCheckbox ? item.checked = false : item.checked = true
        })
    }
    const filteredTickets = await filterTickets(defaultParams)
    await generateCards(filteredTickets)

}))

noStopsCheckbox.addEventListener('click', (async () => {
    defaultParams.noStops = !defaultParams.noStops
    const filteredTickets = await filterTickets(defaultParams)
    await generateCards(filteredTickets)
}))

oneStopCheckbox.addEventListener('click', (async () => {
    defaultParams.oneStop = !defaultParams.oneStop
    const filteredTickets = await filterTickets(defaultParams)
    await generateCards(filteredTickets)
}))

twoStopsCheckbox.addEventListener('click', (async () => {
    defaultParams.twoStops = !defaultParams.twoStops
    const filteredTickets = await filterTickets(defaultParams)
    await generateCards(filteredTickets)
}))

threeStopsCheckbox.addEventListener('click', (async () => {
    defaultParams.threeStops = !defaultParams.threeStops
    const filteredTickets = await filterTickets(defaultParams)
    await generateCards(filteredTickets)
}))


checkbox.forEach(item => {
    item.addEventListener('click', (async () => {
        if (buttonCheap.classList.contains('search__sort-button--active')) {
            const tickets = await sortTickets('price', defaultParams)
            await generateCards(tickets)
        }
        if (buttonFast.classList.contains('search__sort-button--active')) {
            const tickets = await sortTickets('time', defaultParams)
            await generateCards(tickets)
        }
    }))
})


export default function checkboxParms() {
    return defaultParams
}