fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      if (post.hasOwnProperty("title") && post.hasOwnProperty("text")) {
        const titleElement = document.createElement("h1");
        titleElement.textContent = post.title;

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const textElement = document.createElement("p");
        textElement.textContent = post.text;

        cardElement.appendChild(titleElement);
        cardElement.appendChild(textElement);

        document.body.appendChild(cardElement);
      }
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
