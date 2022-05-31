import './styles/index.scss'
import getTickets from './js/getTickets'
import generateCards from './js/generateCards'
import createCard from './js/createCard'
import filterTickets from './js/filterTickets'
import buttonHandler from './js/buttonHandler'
import checkboxHandler from './js/checkboxHandler'
import labelPreventSelection from './js/labelPreventSelection'

const defaultTickets = async () =>{
    const defaultTickets = await filterTickets()
    return await defaultTickets
}
document.onload =  generateCards(defaultTickets())
labelPreventSelection()



