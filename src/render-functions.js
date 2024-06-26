export const renderBookList = (bookListEl, books) => {
  //take in container and data
  //render data in the container

  bookListEl.innerHTMl = ""

  books.forEach((book) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const button = document.createElement('button')

    img.src = book.coverUrl
    img.alt = `An old cover of ${book.title}`

    p.textContent = `Title: ${book.title}`

    button.textContent = `View ${book.author.name}`
    button.setAttribute('data-author-url-key', book.author.urlKey)
    //button.dataset.authorURLKey = book.author.urlKey

    li.append(img, p, button)
    bookListEl.append(li)
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTMl = ''

  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  const p2 = document.createElement('p')
  const img = document.createElement('img')
  const a = document.createElement('a')

  img.src = author.pictureUrl
  img.alt = `A picture of ${author.name}`
console.log(img.src)
  p.textContent = `Born: ${author.birthDate}`
  p2.textContent = `${author.bio}`
  h2.textContent = `${author.name}`

  a.href = author.wikipediaUrl
  a.textContent = 'Wikipedia Link'

  authorInfoEl.append(h2, p, p2, img, a)
}

export const renderNewUserForm = (newUserFormEl) => {
  const usernameLabel = document.createElement('label')
  const isCoolLabel = document.createElement('label')
  const languageLabel = document.createElement('label')
  const usernameInput = document.createElement('input')
  const isCoolInput = document.createElement('input')
  const select = document.createElement('select')
  const button = document.createElement('button')

  usernameLabel.textContent = 'Username'
  isCoolLabel.textContent = "Is this user cool?"
  languageLabel.textContent = "Favorite Language"

  usernameInput.id = 'username'
  usernameInput.name = 'username'
  isCoolInput.id = 'is-cool'
  isCoolInput.name = "isCool"
  isCoolInput.type = 'checkbox'

  select.id = 'favorite-language'
  select.name = "favoriteLanguage"

  const options = ['None', 'JavaScript', 'Python', 'Ruby'];

  options.forEach(optionText => {
    const optionEl = document.createElement('option');
    optionEl.value = optionText;
    optionEl.textContent = optionText;
    select.appendChild(optionEl);
  })

  button.textContent = "Create User"

  newUserFormEl.append(usernameLabel,usernameInput,isCoolLabel,isCoolInput,languageLabel,select,button)
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTMl = ''

  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  const p2 = document.createElement('p')

  p.textContent = newUser.isCool ? 'The hippest in the house!': 'A real square.'
  p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`

  h2.textContent = newUser.username
  h2.dataset.userId = newUser.id

  newUserEl.append(h2,p,p2)
}