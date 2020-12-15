// 1. DOM Selection
// 2. Event Listener
// 3. Basic Validation
// 4. Creating Element
// 5. Append

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
    if(title.value == '' && author.value == '' && year.value == '') {
        alert('Please fill up all the fields!');
    } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new Year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});