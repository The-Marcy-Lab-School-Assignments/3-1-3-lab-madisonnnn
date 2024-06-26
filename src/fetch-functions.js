export const getFirstThreeFantasyBooks = async () => {
  try{
  //fetch data with a URL
  const url = 'https://openlibrary.org/subjects/fantasy.json'
  const response = await fetch(url)
  //check to is if response is ok
  if(!response.ok) throw new Error(`Failed to get fantasy books`)

  //parse response body from json to js object
  const jsonData = await response.json()
  //console.log(jsonData)

   //returns three books
  return jsonData.works.slice(0,3).map((work) => {
    return{
      title: work.title,
      author: {
        name: work.authors[0].name,
        urlKey: work.authors[0].key,
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
    }
  })
  //check to is if response is ok
  } catch (error) {
    console.warn(error.message)
    return null
  }
};

export const getAuthor = async (urlKey) => {
  try{
    //fetch data with a URL
    const url = `https://openlibrary.org${urlKey}.json`
    const response = await fetch(url)
    //console.log("author response:" + response)
    //check to is if response is ok
    if(!response.ok) throw new Error(`Failed to get author`)

  //parse response body from json to js object
    const jsonData = await response.json()
    //cconsole.log("authorData: ", jsonData)
  //returns new author

  
    return {
      birthDate: jsonData.birth_date,
      bio: jsonData.bio,
      wikipediaUrl: jsonData.wikipedia,
      name: jsonData.personal_name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${jsonData.photos[0]}-M.jpg`
  }
  } //check to is if response is ok
  catch (error) {
    console.warn(error.message)
    return null
  }
};

// console.log(await getAuthor("/author/OL22028A"))
//console.log("author: " + await getAuthor('OL22028A'))

export const createNewUser = async (user) => {
  try{
  //fetch data with a URL
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  
  //check to is if response is ok
  if(!response.ok) throw new Error(`Failed to create new user`)

  //parse response body from json to js object
  const newUser = await response.json()
  //returns ?

  return newUser

} catch (error) {
  console.warn(error.message)
  return null
} 
}