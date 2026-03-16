// find elements to use
const introDialog = document.getElementById("introDialog");
const dialogCloseButton  = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

// intro dialog setup
introDialog.showModal();

dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
    introDialog.close();
    Tone.start();
}

// tone synth init
const synth = new Tone.Synth().toDestination();



// play sound with tone
function playNote(){
    synth.triggerAttackRelease("C4", "8n");

}

playButton.addEvenListerner("click", playNote);

function starNote(){
    syntj.triggerAttack("C4")
}

function endNote(){
    synth.triggerRelease();
}

playButton.addEventListener("mousedone", starNote);
playButton.addEventListener("mouseup", endNote);