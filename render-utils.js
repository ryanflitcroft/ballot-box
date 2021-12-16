export function renderPoll(poll) {
    // returns DOM node.
    const pollContainerEl = document.createElement('div');
    const questionEl = document.createElement('h2');
    const containerAEl = document.createElement('div');
    const optionAEl = document.createElement('span');
    const resultAEl = document.createElement('span');
    const containerBEl = document.createElement('div');
    const optionBEl = document.createElement('span');
    const resultBEl = document.createElement('span');

    questionEl.textContent = poll.question;
    optionAEl.textContent = poll.optionA;
    resultAEl.textContent = poll.resultA;
    optionBEl.textContent = poll.optionB;
    resultBEl.textContent = poll.resultB;

    containerAEl.append(optionAEl, resultAEl);
    containerBEl.append(optionBEl, resultBEl);

    pollContainerEl.append(questionEl, containerAEl, containerBEl);

    return pollContainerEl;
}

export function displayAllPolls() {
    // clears out and appends to polls element.

}
