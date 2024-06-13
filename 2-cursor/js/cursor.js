// const mousePointerElm = document
//     .getElementById("mouse-pointer");
//
// document.addEventListener('mousemove', (e) => {
//     // const xCoordinates = e.clientX - 22;
//     // const yCoordinates = e.clientY - 18;
//     //
//     // mousePointerElm.style.left = xCoordinates + 'px';
//     // mousePointerElm.style.top = yCoordinates + 'px';
//     //
//
//     mousePointerElm.style.left = `${e.clientX - mousePointerElm.offsetWidth / 2}`;
//     mousePointerElm.style.top = `${e.clientY - mousePointerElm.offsetHeight / 2}`;
//
// });

const cursorElm = document
    .createElement('div');

cursorElm.classList.add('cursor', 'hide');

document.body.append(cursorElm);

let tmrId;

addEventListener('mousemove',
    (e)=> {
        cursorElm.style.left = `${e.clientX - cursorElm.offsetWidth / 2}px`;
        cursorElm.style.top = `${e.clientY - cursorElm.offsetHeight / 2}px`;
        if (tmrId) clearTimeout(tmrId);
        if (cursorElm.classList.contains('hide')){
            cursorElm.classList.remove('hide');
        }
        tmrId = setTimeout(()=> {
            cursorElm.classList.add('hide');
        }, 8000);
    });

document.addEventListener('mouseenter', ()=>{
    cursorElm.classList.remove('hide');
});

document.addEventListener('mouseleave', ()=>{
    cursorElm.classList.add('hide');
});