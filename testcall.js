const headers = {

    'Content-Type': 'application/json',
  
    Authorization: 'insert-token-here',
  
  };
  
   
  
  const body = {
  
    userID: 10,
  
    title: "Demo addition",
  
    body: 'This the body of the new post.'
  
  };

  fetch('https://jsonplaceholder.typicode.com/posts',
  {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  })
  .then(response=> response.json())
  .then(value => console.log(value))
  .catch(error => console.log(error.message))
   