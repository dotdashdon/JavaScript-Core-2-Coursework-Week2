// 1. created a function called listOfNames that takes an array of objects as an argument.
// 2. Then created a variable called content and assign it to the content element of the html.
// 3. Next created a forEach loop that iterates over the array of people.
// 4. Inside the forEach loop,  two new elements were created: name and job.
// 5. Next  assigned the name and job properties of the current person to the innerText of the name and job elements.
// 6. Finally, appended the name and job elements to the content element.




function listOfNames(arrayOfPeople) {
  let content = document.querySelector('#content');

  arrayOfPeople.forEach((person) => {
    const name = document.createElement('h1');
    const job = document.createElement('h2');

    name.innerText = person.name;
    job.innerText = person.job;

    content.append(name, job);
  });
}

let people = [
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' },
];

listOfNames(people);



