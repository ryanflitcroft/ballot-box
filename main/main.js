import { signOut } from '../fetch-utils.js';

// const inputForm = document.querySelector('#input-form');
// const currentPollSection = document.querySelector('#current-poll-section');
// const incrementAButton = document.querySelector('#incrementA');
// const incrementBButton = document.querySelector('#incrementB');
// const closePollButton = document.querySelector('#close-poll-button');
// const closedPollSection = document.querySelector('#closed-poll-section');
const signOutButton = document.querySelector('#sign-out');
console.log(signOutButton);

signOutButton.addEventListener('click', async() =>{
    await signOut();
    console.log('signed out!');
});