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

const audioName = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH",
};

const drumPad = keyArr
  .map((key) => {
    return `
  <div class="drum-pad" id=${key.key}>
  <audio class="clip" id=${key.key} src=${key.audio} type="audio/mpeg" ></audio>
  <span>${key.key}</span>
  </div>
  
  `;
  })
  .join("");

// document.querySelector('.pad-container').innerHTML = drumPad;

$("document").ready(function () {
  $(".pad-container").html(drumPad);
});

function playMusic(key) {
  const numPad = document.getElementById(`${key}`);
  const audio = numPad?.querySelector(".clip");
  if (numPad && audio) {
    $(numPad).addClass("playing");
    audio.currentTime = 0;
    audio.play();
    $("#display").text(audioName[key]);
    $(numPad).on("transitionend", function () {
      $(numPad).removeClass("playing");
    });
  } else {
    return false;
  }
}

$(window).keydown(function (e) {
  const keyPressed = e.originalEvent.key.toUpperCase();
  playMusic(keyPressed);
});

$("document").ready(function () {
  $(".drum-pad").on("click", function (e) {
    const target = e.target;
    playMusic(target.id);
  });
});
