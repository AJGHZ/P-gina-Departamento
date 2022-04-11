(function () {
    const slider = [...document.querySelectorAll('.slider__body')]; /*Obtiene todos los elementos de la clase*/
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));

    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        
        value  = currentElement;
        value+= change;
    
    }
})()