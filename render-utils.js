export function renderPoll(poll) {
    // returns DOM node.
    const pollContainerEl = document.createElement('div');
    const questionEl = document.createElement('h3');
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

    pollContainerEl.classList.add('container');
    // containerAEl.classList.add('container');
    // containerBEl.classList.add('container');

    containerAEl.append(optionAEl, resultAEl);
    containerBEl.append(optionBEl, resultBEl);

    pollContainerEl.append(questionEl, containerAEl, containerBEl);

    return pollContainerEl;
}
