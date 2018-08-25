console.log('hello world!')

const storyArray = [
	"As I walked beneath the tall trees, the freshly fallen rainstorm left imprints on my cheek, like cold kisses on a Winter's Eve.",
	"The light came on in a flash. Immediately he looked onto the sea of twinkling eyes -- almost unrecognizable as a crowd -- and thought, 'What if they don't like me?",
	"The ocean calmly waved back at me, the trickle of the water caressing my feet.",
  "When the night sky wears the moon as its pendant, I shall await you at the dock.",
  "Between the fraction of time and space where the dimensions of day and night seem almost intertwined, he cries.",
  "The air is cold and lonely as if it were an iceberg, and she doesn't know how long she can keep rubbing her temples to keep this fuck - ing migraine down.",
  "'But you love me, right?' 'I love you times infinity.'",
  "His blood is seeping through his hand now, crimson leaking slowly between the spaces of his fingers.",
]

const backgroundArray = [
	"./image/bg1.jpg",
	"./image/bg2.jpg",
  "./image/bg3.jpg",
  "./image/bg4.jpg",
  "./image/bg5.jpg",
  "./image/bg6.jpg",
  "./image/bg7.jpg",
  "./image/bg8.jpg",
  "./image/bg9.jpg",
  "./image/bg10.jpg",
  "./image/bg11.jpg",
  "./image/bg12.jpg",
  "./image/bg13.jpg",
]

// const randomStory = storyArray[Math.floor(2 * Math.random())]
// const randomBackground = backgroundArray[Math.floor(2 * Math.random())]

// function textAppearsOnScreen() {
//   console.log('checking to see if my text will work');
//   for (let i = 0; i < storyArray.length; i++) {
//     const $storyText = $('#storyMain');
//     $storyText.text(randomStory);
//   }
// }

// function backgroundAppearsOnScreen() {
//   console.log('checking to see if my background will change');
//   for (let i = 0; i < backgroundArray.length; i++) {
//     const $pictureBackground = $('body');
//     $pictureBackground.css('background-image', 'url(' + randomBackground +')');
//   }
// }

// function storyOne () {
//   console.log('story 1?');
//   for (let i = 0; i < storyArray.length; i++) {
//     const $storyText = $('#storyMain');
//     $storyText.text(storyArray[0]);
//   } for (let i = 0; i < backgroundArray.length; i++) {
//     const $pictureBackground = $('body');
//     $pictureBackground.css('background-image', 'url(' + backgroundArray[0] +')');
//   }
// }

// function storyTwo () {
//   console.log('story 2?');
//   for (let i = 0; i < storyArray.length; i++) {
//     const $storyText = $('#storyMain');
//     $storyText.text(storyArray[1]);
//   } for (let i = 0; i < backgroundArray.length; i++) {
//     const $pictureBackground = $('body');
//     $pictureBackground.css('background-image', 'url(' + backgroundArray[1] +')');
//   }
// }

// // function displayedStory() {
// //   const stories = Math.floor(Math.random * storyArray.length)
// //   document.getElementById('storyMain').innerHTML = storyArray[stories]
// // }

// window.onload = function() {
//   // $('#nextMain').on('click', storyOne); 
//   for (i = 0; i < storyArray.length; i++) { 
//     storyOne() 
//     storyTwo()
//   }}

var getRandomStory = function () {
      return storyArray[Math.floor(Math.random() * storyArray.length)];
    }

 var getRandomBackground = function () {
      return backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
    }

$('.next').on('click', function(){
  console.log('click works')
    $('#storyMain').fadeIn(1000)
    $('#storyMain').text(getRandomStory()); 
    const $pictureBackground = $('body');
    $pictureBackground.css('background-image', 'url(' + getRandomBackground() +')')
  })

// $('.next').on('click', function(){
//     const $pictureBackground = $('body');
//     $pictureBackground.css('background-image', 'url(' + getRandomBackground() +')')
//   })

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

