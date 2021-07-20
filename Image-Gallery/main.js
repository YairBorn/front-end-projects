const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selected-image");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `images/image-${i}.jpg`;
  image.alt = `This is image number ${i}`;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `images/image-${i}.jpg`;
    selectedImage.alt = `This is image number ${i}`;
  });

  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
