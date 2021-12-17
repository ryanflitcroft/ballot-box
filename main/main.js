import { checkAuth, createPoll, getPolls, signOut } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const inputForm = document.querySelector('#input-form');
const currentPollSection = document.querySelector('#current-poll-section');
const incrementAButton = document.querySelector('#incrementA');
const incrementBButton = document.querySelector('#incrementB');
const closePollButton = document.querySelector('#close-poll-button');
const closedPollContainer = document.querySelector('#closed-poll-container');
const signOutButton = document.querySelector('#sign-out');
const buttonSection = document.querySelector('.button-section');
const pastResultsTextEl = document.querySelector('h2');

let question;
let optionA;
let optionB;
let resultA = 0;
let resultB = 0;

checkAuth();

signOutButton.addEventListener('click', async() =>{
    await signOut();
});

inputForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(inputForm);
    question = data.get('q');
    optionA = data.get('a');
    optionB = data.get('b');

    inputForm.reset();
    
    displayCurrentPollEl();
    buttonSection.classList.add('visible');
    inputForm.classList.add('invisible');
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
    clearState();
    currentPollSection.textContent = '';
    buttonSection.classList.remove('visible');
    inputForm.classList.remove('invisible');
    displayAllPolls();
});

function displayCurrentPollEl() {
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

async function displayAllPolls() {
    closedPollContainer.textContent = '';
    const polls = await getPolls();

    for (let poll of polls) {
        const closedPoll = renderPoll(poll);
        closedPollContainer.append(closedPoll);
    }

    if (closedPollContainer.textContent !== '') {
        pastResultsTextEl.textContent = 'Past Results';
    } else {
        pastResultsTextEl.textContent = '';
    }
}

function clearState() {
    question;
    optionA;
    optionB;
    resultA = 0;
    resultB = 0;
}

displayAllPolls();