const blueButton = document.querySelector('#blueBtn');
const orangeButton = document.querySelector('#orangeBtn');
const greenButton = document.querySelector('#greenBtn');

function updateColourTheme(colourTheme) {
  const styleLink = document.querySelector('#theme');
  styleLink.href = `styles/${colourTheme}.css`;
}

blueButton.addEventListener('click', () => updateColourTheme('blue-theme'));
orangeButton.addEventListener('click', () => updateColourTheme('orange-theme'));
greenButton.addEventListener('click', () => updateColourTheme('green-theme'));

const submitButton = document.querySelector('button[type=submit]');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    validateInput(input);
  });
});

function validateInput(input) {
  if (input.value.length === 0) alert('One of the fields is empty!');

  if (input.type === 'email') {
    if (!input.value.includes('@')) alert('Must contain an @ symbol');
  }
}