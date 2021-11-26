const body = document.querySelector(`body`);

const IMG_NUMBER = 3;


function paintImg(imgNumber){
    const image = new Image();
    image.src = `./images/landscape${imgNumber}.jpg`
    image.classList.add(`bgImage`);
    body.prepend(image);
}

    function genRandom(){
        const number = Math.ceil(Math.random() * IMG_NUMBER )
        return number ; 
    }
function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}
init()
