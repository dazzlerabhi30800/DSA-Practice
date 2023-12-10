const keyArr = [
  {
    key: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },

  {
    key: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },

  {
    key: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },

  {
    key: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },

  {
    key: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },

  {
    key: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },

  {
    key: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },

  {
    key: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },

  {
    key: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];


const drumPad = keyArr.map((key) => {
  return `
  <div class="drum-pad" id=${key.key}>
  <audio class="clip"  src=${key.audio} type="audio/mpeg" ></audio>
  <span>${key.key}</span>
  </div>
  
  `;
}).join("");


// document.querySelector('.pad-container').innerHTML = drumPad;


$("document").ready(function () {
  $(".pad-container").html(drumPad);
});



$(window).keydown(function (e) {
  const keyPressed = e.originalEvent.key;
  const numPad = document.getElementById(`${keyPressed.toUpperCase()}`)
  if (numPad) {
    numPad.classList.add('playing');
    $(numPad).on('transitionend', function (e) {
      numPad.classList.remove('playing');
    })
  }
  else {
    return false;
  }
})

$(".num-pad").on('transitionend', function (e) {
  console.log(e);
})