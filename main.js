// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(heart => activateHeart(heart))

function activateHeart(heart) {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(response => {
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.classList.add("activated-heart")
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
      
    })
    .catch(error => {
      document.querySelector("#modal").classList.remove("hidden")
      document.querySelector("#modal-message").innerHTML = error
      setTimeout(removeError, 5000)

      function removeError() {
        document.querySelector("#modal").classList.add("hidden")
      }
    })
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
