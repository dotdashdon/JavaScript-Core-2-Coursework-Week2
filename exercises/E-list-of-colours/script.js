// 1. Create a list of colours.
// 2. Create a function that will create a list of colours.
// 3. Create a function that will display the chosen colour.
// 4. Create a function that will create a select menu.
// 5. Create a function that will create a paragraph.
// const content = document.querySelector('#content');

function displayChosenColour(colour) {
  const colourInfo = document.querySelector('p');
  const chosenColourMessage = `You have chosen the colour ${colour}`;
  colourInfo.innerText = chosenColourMessage;
  colourInfo.style.color = colour;
}

function listOfColours(colours) {
  const colourSelectMenu = document.createElement('select');
  const colourInfo = document.createElement('p');

  colours.forEach((colour) => {
    const colourOption = document.createElement('option');

    colourOption.innerText = colour;
    colourOption.addEventListener('click', () => displayChosenColour(colour));
    colourSelectMenu.appendChild(colourOption);
  });

  content.appendChild(colourSelectMenu);
  content.appendChild(colourInfo);
}

const colours = ['red', 'blue', 'green', 'yellow', 'pink', 'brown'];

listOfColours(colours);



