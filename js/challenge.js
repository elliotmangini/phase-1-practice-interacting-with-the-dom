
// Internal Vocabulary + Data
let counterText = document.querySelector('#counter');
let plusButton = document.querySelector('#plus');
let minusButton = document.querySelector('#minus');
let likeList = document.querySelector('.likes');
let heart = document.querySelector('#heart');
let likeTracker = {};
let pauseButton = document.querySelector('#pause');
let playState = true;
let commentSubmitButton = document.querySelector('#comment-form');
let commentInput = document.querySelector('#comment-input');
let commentList = document.querySelector('#list');

// Functions
const incrementCounter = () => {

    if (playState === true) {
        counterText.textContent = (parseInt(counterText.textContent) + 1).toString();
        counterText.style.background = 'green';
    }
}

const decrementCounter = () => {
    counterText.textContent = (parseInt(counterText.textContent) - 1).toString();
}

const postComment = () => {

    let newComment = document.createElement('li');
    newComment.classList.add(`likes-for-${counterText.textContent}`)

    if (likeTracker[counterText.textContent]) {
        likeTracker[counterText.textContent] += 1;
        document.querySelector(`.likes-for-${counterText.textContent}`).textContent = `${counterText.textContent} has ${likeTracker[counterText.textContent]} likes.`;
    } else {
        likeTracker[counterText.textContent] = 1;
        newComment.textContent = `${counterText.textContent} has 1 like.`;
        likeList.append(newComment);
    }

}

function leaveComment (e) {
    e.preventDefault();
    let newComment = document.createElement('p');
    newComment.innerHTML = `${commentInput.value} <br><em><small><small>at ${Date().slice(0, 21)}</small></small></em>`;
    commentList.append(newComment);
}



// Clock
setInterval(incrementCounter, 1000);

// Events
plusButton.addEventListener('click', incrementCounter);

minusButton.addEventListener('click', decrementCounter);

heart.addEventListener('click', postComment)

pauseButton.addEventListener('click', () => {
    playState = !playState;
    counterText.style.background = 'red';
})

console.log(commentSubmitButton)
commentSubmitButton.addEventListener('submit', leaveComment)



