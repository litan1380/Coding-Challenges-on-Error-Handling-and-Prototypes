fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error occurred while fetching data');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error.message));
