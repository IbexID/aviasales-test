

const createCard = async (obj) =>{
    
const card = document.createElement('div')
card.classList.add('card')
card.innerHTML =`<div class="card__top">
                            <p class="card__price">${obj.price} Р </p>
                            <div class='card__company'>
                                <img src="http://pics.avs.io/99/36/${obj.company}.png" alt="">
                            </div>
                        </div>
                        <div class="card__info">
                            <div class="card__info-item">
                                <p class="card__info-title">${obj.firstSegment}</p>
                                <p class="card__info-text">${obj.firstDeparture}</p>
                            </div>
                            <div class="card__info-item">
                                <p class="card__info-title">В пути</p>
                                <p class="card__info-text">${obj.firstDuration}</p>
                            </div>
                            <div class="card__info-item">
                                <p class="card__info-title">${obj.firstStops.length === 0 ? 'Без пересадок' : obj.firstStops.length === 1 ? '1 пересадка' : obj.firstStops.length + ' пересадки'}</p>
                                <p class="card__info-text">${obj.firstStops.join(', ')}</p>
                            </div>
                            <div class="card__info-item">
                                <p class="card__info-title">${obj.secondSegment}</p>
                                <p class="card__info-text">${obj.secondDeparture}</p>
                            </div>
                            <div class="card__info-item">
                                <p class="card__info-title">В пути</p>
                                <p class="card__info-text">${obj.secondDuration}</p>
                            </div>
                            <div class="card__info-item">
                                <p class="card__info-title">${obj.secondStops.length === 0 ? 'Без пересадок' : obj.secondStops.length === 1 ? '1 пересадка' : obj.secondStops.length + ' пересадки'}</p>
                                <p class="card__info-text">${obj.secondStops.join(', ')}</p>
                            </div>
                        </div>`
    document.querySelector('.cards').appendChild(card)
}

export default createCard;