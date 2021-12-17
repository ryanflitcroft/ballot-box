# Poll Tracker

## Project Objectives

1. Sign-in and sign-up using the sign-in and sign-up form. On success, redirect to the /polls page.

1. Sign-out by clicking the sign-out button.

1. If a non-signed-in user tries to visit the polls page, redirect them to the sign-in page.

1. On the polls page load, see a form and empty current poll element.

1. On the polls page load, fetch all past polls and render them to the past polls element.

1. On submit, add the poll options and question to the current poll element.

1. On clicking add, increment the correct votes in the current poll element.

1. On clicking finish, empty the current poll element, and use Supabase to add the current poll to the database.

1. On clicking finish, clear the past polls element, then fetch all past polls from supabase and render them in the past polls element.

```zsh
git checkout -b workOnANewBranch
```

### Essential Goals

#### Home Page

* Project main page should have 2 major sections:

  1. Sign-in form section -

      *Users enter text to the input elements in this form to submit data for the following:*

      * Existing Email Input

      * Existing Password Input

      *User submit event for form data:*

      * Submit button

  1. Sign-up form section -

      *Users enter text to the input elements in this form to submit data for the following:*

      * New-user Email Input

      * New-user Password Input

      *User submit event for form data:*

      * Submit button

#### Main Page

* Project main page should contain 3 major sections:
  
1. Input form section -

    *Users enter text to the input elements in this form to submit data for the following:*

    * Question Input

    * Option A Input

    * Option B Input

    *User submit event for form data:*

    * Submit button

1. Current poll Section -

    **Elements in this section should not display text content until form data submit event.**

    *On form data submit event, display form data for the following:*

    * Question Input form data

    * Option A Input form data

    * Option B Input form data

    *User click event for the following button elements:*

    * Option A increment

    * Option A decrement

    *User click event should update state for the following text elements:*

    * Option A results text element

    * Option B results text element

        *User click event should clear section data and update state for Past Results Section data*

    * Close Poll submit

1. Past Results Section -

    * Past Results text element

    * Flexible container for *Closed Poll* elements

    **Elements in this section should not display until Close Poll Submit click  event.**

    *note*: closed poll item elements will be created in JSON.

    * Container element for closed poll items

    * Past Result Question text element

    * Past Result Option A text element

    * Past Result Option B text Element

    * Past Result Option A Result text element

    * Past Result Option B Result text element

### Stretch Goals

* **tbd**

## HTML SETUP

### Home Page Setup

  1. form element to contain:

      * 2 text input element for user to submit existing-user email, existing-user password

      * button element for user to submit form data to be applied to current poll section

  1. form element to contain:

      * 2 text input element for user to submit new-user email, new-user password

      * button element for user to submit form data to be applied to current poll section

```html
<section class="signIn-section">
  <form id="signIn-form">
    <label for="inEmail">Email
      <input type="email" class="" name="inEmail">
    </label>
    <label for="inPassword">Password
      <input type="password" class="" name="inPassword">
    </label>
    <button type="submit" form="signIn-form">Submit</button>
  </form>
</section>

<section class="signUp-section">
  <form id="signUp-form">
    <label for="upEmail">Email
      <input type="email" class="" id="upEmail-input" name="upEmail">
    </label>
    <label for="upPassword">Password
      <input type="password" class="" id="upPassword-input" name="upPassword">
    </label>
    <button type="submit" form="signUp-form" id="signUp-submit">Submit</button>
  </form>
</section>
```

### Main Page Setup

* Input form section -

  1. form element to contain:

      * 3 text input element for user to submit 'question', 'answer a', answer b'

      * button element for user to submit form data to be applied to current poll section

```html
<section class="input-section">
  <form id="input-form">
    <label for="q">Question
      <input type="text" class="" name="q" required>
    </label>
    <label for="a">Answer A
      <input type="text" class="" name="a" required>
    </label>
    <label for="b">Answer B
      <input type="text" class="" name="b" required>
    </label>
    <button type="submit" form="input-form">Submit</button>
  </form>
</section>
```

* Current poll section -

    1. h2 element to contain text content of user input 'question-input'

    1. span element for each:

        * current option a to contain text content of user input 'answerA-input'

        * current option B to contain text content of user input 'answerB-input'

        * resultA to contain text content of current state of resultA

        * resultB to reflect current state of resultB

```html
<section id="current-poll-section">
  <!-- Current Poll elements will be rendered in DOM -->
  <h2>#Question#</h2>
  <div class="">
    <span class="">#OptionA#</span>
    <span class="">#ResultA#</span>
  </div>
  <div class="">
    <span class="">#OptionB#</span>
    <span class="">#ResultB#</span>
  </div>
  <!-- -->
</section>
```

* Button Section

  1. button element for each:

      *to update current state of resultA or resultB*

      * increment 'current option a'

      * increment 'current option b'

      *to clear current text content of Current Poll Section, update state for Past Results Section

```html
<section class="button-section">
    <button class="" id="incrementA">+</button>
    <button class="" id="close-poll-button">Close Poll</button>
    <button class="" id="incrementB">+</button>
</section>
```

* Past Results Section -

```html
<section class="past-results-section">
    <h2>Past Results</h2>
    <!-- Closed Poll item elements will be stored in Supabase and rendered in DOM -->
    <div id="closed-poll-container">
        <h3>#Question#</h3>
        <div class="">
            <span>#OptionA#</span>
            <span>#ResultA#</span>
        </div>
        <div class="">
            <span>#OptionB#</span>
            <span>#ResultB#</span>
        </div>
    </div>
    <!-- -->
</section>
```

* Sign-out button element

```html
<button id="sign-out">Sign-out</button>
```

## JS SETUP
### Home

* Grab essential DOM elements:

```JS
const signInForm = document.querySelector('#signIn-form');
const signUpForm = document.querySelector('#signUp-form');
```

* addEventListener for:
  * signInForm - 'submit'

  * signUpForm - 'submit'

### Main

* Grab essential DOM elements:

```js
const inputForm = document.querySelector('#input-form');
const currentPollSection = document.querySelector('#current-poll-section');
const incrementAButton = document.querySelector('#incrementA');
const incrementBButton = document.querySelector('#incrementB');
const closePollButton = document.querySelector('#close-poll-button');
const closedPollSection = document.querySelector('#closed-poll-section');
const signOutButton = document.querySelector('#sign-out');
```

* addEventListener for:
  * inputForm - 'submit'

  * incrementAButton - 'click'
  
  * incrementBButton - 'click'

  * closePollButton - 'click'

  * signOutButton - 'click'

* Write functions for:
  * displayCurrentPollEl()
        * displays the current poll state to the current poll DOM element.

  * displayAllPolls()
        * clears out and appends to polls element.

  * renderPoll(poll)
        * returns DOM node.

  * createPoll(poll)
        * creates a poll for currently signed-in user in Supabase.

  * getPolls()
        * returns polls for currently signed-in user from Supabase.

*note*: TDD for each pure function
