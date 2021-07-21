//evento de click no teclado
document.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase())
});
//observa o input e faz um array para o som de cada tecla
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    if(song !== ''){
        let songArray= song.split('');
        playComposition(songArray);
    }
});
//Faz a ação de clicar e soltar a tecla
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`)

    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    };

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300)
    }
}
//Solta o som do input (o espaço seta um intevalo no som)
function playComposition(songArray){
    let wait = 0
    for (let songItem of songArray){
    setTimeout(()=>{
        playSound(`key${songItem}`);
        },wait);

        wait+=250;
    }
}