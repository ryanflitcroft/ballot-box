// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPoll } from '../render-utils.js';
const test = QUnit.test;

test('renderPoll should return a DOM element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPoll;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
