const url = "https://jsonplaceholder.typicode.com/photos";

function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.status === 200) {
      console.log("Success:", data);
      renderPhotos(data);
    } else {
      console.log("Server Error", data);
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }
}

getData();
