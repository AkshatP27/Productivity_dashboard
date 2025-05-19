let allElems = document.querySelectorAll('.elem');
let fullElemsPage = document.querySelectorAll('.full-elem');
let fullElemsPageBackBtn = document.querySelectorAll('.full-elem .back');

allElems.forEach((elem) => {
    // console.log(elem);
    elem.addEventListener('click', () => {
        // console.log(elem.id);
        // console.log(allFullElems[elem.id]);
        fullElemsPage[elem.id].style.display = 'block';
    })
})

fullElemsPageBackBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log(btn.id);
        fullElemsPage[btn.id].style.display = 'none';
    })
    
});