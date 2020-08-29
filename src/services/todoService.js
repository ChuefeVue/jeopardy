function getTodo(id = 1) {
  console.log("First");
  fetch("https://jsonplaceholder.typicode.com/todos/" + id)
    .then((response) => {
      console.log("Second");
      return response.json();
    })

    .then((payload) => {
      console.log("Third");
      console.log(payload);
    });
  console.log("Fourth");

  // First Console is synchronous (runs immediately, in the order written)
  // "Second" Consol is asynchronous and cannot run until the HTTP request/response succeeds
  // "Third" Console is asynchrous and cannont run til the HTTP response body is finally hydrated into a JS object
  // "Fourth" Console is synchronous, so run immediately after the previous sync thing

  //   .then((response) => response.json())
  //     .then((json) => console.log(json));
}

export default getTodo;

// asynchronous
