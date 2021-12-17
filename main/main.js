import { checkAuth, createPoll, signOut } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const inputForm = document.querySelector('#input-form');
const currentPollSection = document.querySelector('#current-poll-section');
const incrementAButton = document.querySelector('#incrementA');
const incrementBButton = document.querySelector('#incrementB');
const closePollButton = document.querySelector('#close-poll-button');
const closedPollContainer = document.querySelector('#closed-poll-container');
const signOutButton = document.querySelector('#sign-out');

// console.log(signOutButton,
//     inputForm,
//     currentPollSection,
//     incrementAButton,
//     incrementBButton,
//     closePollButton,
//     closedPollContainer);

let question;
let optionA;
let optionB;
let resultA = 0;
let resultB = 0;

checkAuth();

signOutButton.addEventListener('click', async() =>{
    await signOut();
    // console.log('signed out!');
});

inputForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(inputForm);
    question = data.get('q');
    optionA = data.get('a');
    optionB = data.get('b');

    inputForm.reset();
    
    displayCurrentPollEl();
    // bugs to fix: disable when current poll section has content
});

incrementAButton.addEventListener('click', () => {
    if (question) {
        resultA++;
        displayCurrentPollEl();
    }

});

incrementBButton.addEventListener('click', () => {
    if (question) {
        resultB++;
        displayCurrentPollEl();
    }

});

closePollButton.addEventListener('click', async() => {
    const poll = {
        question,
        optionA,
        optionB,
        resultA,
        resultB
    };
    await createPoll(poll);

});

function displayCurrentPollEl() {
    // displays the current poll state to the current poll DOM element.
    const poll = {
        question,
        optionA,
        optionB,
        resultA,
        resultB
    };

    currentPollSection.textContent = '';

    const currentPoll = renderPoll(poll);
    currentPollSection.append(currentPoll);
}