var musics = [];
document.onkeydown = function (e){
	if(!e) e = window.event;
    if(e.keyCode > 48 && e.keyCode < 58){
        const music = new Audio(musics [e.keyCode - 49]);
        music.play();
    };
};
