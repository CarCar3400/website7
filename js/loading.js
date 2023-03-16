const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(loading, 30)



function loading() {
    load++
    loadtext.innerText = `${load}%`
    bg.style.filter = `blur(${30 - 0.3*load}px)`
    loadtext.style.opacity = `${1 - load/100}`

    if(load == 100){
        clearInterval(int)
    }
}