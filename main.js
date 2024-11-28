const translate = document.querySelectorAll('.translate')
const bigTitle = document.getElementById('bigTitle')
const header = document.getElementById('header')
const shadow = document.getElementById('shadow')
const content = document.querySelector('.content')
const section = document.querySelector('section')
const image_container = document.querySelector('.imgContainer')
const opacity = document.querySelectorAll('.opacity')
const border = document.querySelector('.border')

let header_height = header.offsetHeight
let section_height = section.offsetHeight

window.addEventListener('scroll', () => {
    let scroll = window.scrollY
    let sectionY = section.getBoundingClientRect();

    translate.forEach(e => {
        let speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * speed}px)`
    })

    opacity.forEach(e => {
        e.style.opacity = scroll / (sectionY.top + section_height)
    })

    bigTitle.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`
})