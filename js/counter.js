const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-targtet')
        console.log(target)
    }

    updateCounter()
})