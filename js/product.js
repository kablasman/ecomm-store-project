
// gallery ----------------------------------------------

const allButtons = document.querySelector('#controls');

allButtons.addEventListener('click', function(event) {
    const theBtn = event.target

    if (theBtn.matches('.gallery-button:not(.active)')) {
        const activeBtn = document.querySelector('.gallery-button.active')
        const activeImg = document.querySelector('.gallery-img.active')

        activeBtn.classList.remove('active')
        activeImg.classList.remove('active')
        
        const imgId = theBtn.getAttribute('aria-controls')
        const theImg = document.querySelector(`#${imgId}`)

        theBtn.classList.add('active')
        theImg.classList.add('active')
        console.log('clicked')
    }
});
