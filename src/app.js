import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
    const books = await getFirstThreeFantasyBooks()
    console.log(books)
  // render out the books
    renderBookList(bookListEl, books) //populates container with data

   bookListEl.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log(event)
      const authorId = event.target.dataset.authorUrlKey;
  
      console.log("this is author id", authorId);
      if (authorId) {
        // Fetch author data
        const authorData = await getAuthor(authorId);
        console.log("this is author data: ", authorData)
        // Render author data
        if (authorData) {
         await renderAuthorInfo(authorInfoEl, authorData);
        }

   }}})
   renderNewUserForm(newUserFormEl)
   newUserFormEl.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (event.target.tagName === 'BUTTON') {
      console.log(event)
      const newUser = event.target.dataset;
  
      console.log("this is newUser", newUser);
      if (newUser) {
        // Fetch author data
        const userData = await renderNewUser(newUser);
        console.log("this is user data: ", userData)
        // Render author data
        if (userData) {
         await renderNewUserForm(renderNewUser, userData);
        }

   }}})
}
