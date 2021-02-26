const boxes = document.querySelectorAll('.box')

window.onload = setTimeout(() => {
    checkBoxes()

}, 1500);

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5 * 4)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}