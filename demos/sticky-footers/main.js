document
  .querySelector("button#add-content")
  .addEventListener("click", (e) => {
    e.target.insertAdjacentHTML(
      "afterend",
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore quasi facilis id earum nulla architecto eos maiores corporis culpa reiciendis excepturi minima sequi itaque aperiam ipsa a, voluptatem, natus error deserunt amet ipsam repellat. Ab ipsa sapiente voluptates, similique ratione eveniet iure nulla unde facere vero quaerat consequatur totam.</p>`
    );
  });
