const synth = new Tone.Synth({      //FMSynth
    oscillator: {
        type: "sine",               //pwm
        modulationFrequency: 0.9    //0.2
    },
    envelope: {
        attack: 0.01,   // 0.02
        decay: 0.2,     //0.2
        sustain: 0.2,   //0.2
        release: 0.1,   //0.9
    }
}).toMaster();
toggle();

let note;

function getkey(note) {
    synth.triggerAttack(note);
    document.getElementById(note).classList.replace('white', 'white-dark');
    document.getElementById(note).classList.replace('black', 'black-light');
}

function keyRele(note) {
    synth.triggerRelease();
    document.getElementById(note).classList.replace('white-dark', 'white');
    document.getElementById(note).classList.replace('black-light', 'black');
}

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    switch (event.which) {
        case 65:
            getkey('C4'); //a
            break;
        case 87:
            getkey('C#4'); //w
            break;
        case 83:
            getkey('D4'); //s
            break;
        case 69:
            getkey('D#4'); //e
            break;
        case 68:
            getkey('E4'); //d
            break;
        case 70:
            getkey('F4'); //f
            break;
        case 84:
            getkey('F#4'); //t
            break;
        case 71:
            getkey('G4'); //g
            break;
        case 89:
            getkey('G#4'); //y
            break;
        case 72:
            getkey('A4');//h
            break;
        case 85:
            getkey('A#4'); //u
            break;
        case 74:
            getkey('B4');//j
            break;
        case 75:
            getkey('C5');//k
            break;
        case 79:
            getkey('C#5'); //o
            break;
        case 76:
            getkey('D5');//l
            break;
        case 80:
            getkey('D#5'); //p
            break;
        case 59:
            getkey('E5');//;
            break;

    }
})

document.addEventListener("keyup", function (event) {
    console.log(event.which);
    switch (event.which) {
        case 65:
            keyRele('C4'); //a
            break;
        case 87:
            keyRele('C#4'); //w
            break;
        case 83:
            keyRele('D4'); //s
            break;
        case 69:
            keyRele('D#4'); //e
            break;
        case 68:
            keyRele('E4'); //d
            break;
        case 70:
            keyRele('F4'); //f
            break;
        case 84:
            keyRele('F#4'); //t
            break;
        case 71:
            keyRele('G4'); //g
            break;
        case 89:
            keyRele('G#4'); //y
            break;
        case 72:
            keyRele('A4');//h
            break;
        case 85:
            keyRele('A#4'); //u
            break;
        case 74:
            keyRele('B4');//j
            break;
        case 75:
            keyRele('C5');//k
            break;
        case 79:
            keyRele('C#5'); //o
            break;
        case 76:
            keyRele('D5');//l
            break;
        case 80:
            keyRele('D#5'); //p
            break;
        case 59:
            keyRele('E5');//;
            break;

    }
})

function toggle(){
    var x = document.getElementById('checkbox').checked;
    var noteholder = document.querySelectorAll('.note');
    var i = 0, l = noteholder.length;
    if(!x){
        for(i = 0; i < l; i++){
            noteholder[i].style.display = 'none';
        }
    } else {
        for(i = 0; i < l; i++){
            noteholder[i].style.display = 'block';
        }
    }
}