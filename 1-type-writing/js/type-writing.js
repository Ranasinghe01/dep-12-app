const txtContainerElm = document
    .getElementById("text-container");

const textElm = document
    .querySelector("#text-container > span");

const texts = [
    'Direct Entry Program 12',
    'We',
    'are',
    'born to code...!'
];

let index = 0;
let i = 0;
let k = 1;
let reverse = false;

setInterval(() => {
    const text = texts[index];
    textElm.innerText = text.substring(0, !reverse ? k++ % 3 ? i : ++i : i--);
    if (i === (text.length + 20)) {
        reverse = true;
    }
    if (k === 4) k = 1;

    if (i === -2) {
        reverse = false;
        index++;
        if (index === text.length) index = 0;
        k = 1;
        i = 0;
    }
}, 25);
