let allElems = document.querySelectorAll('.elem');
let allFullElems = document.querySelectorAll('.full-elem');

allElems.forEach((elem) => {
    // console.log(elem);
    elem.addEventListener('click', () => {
        // console.log(elem.id);
        // console.log(allFullElems[elem.id]);
        allFullElems[elem.id].style.display = 'block';
    })
})