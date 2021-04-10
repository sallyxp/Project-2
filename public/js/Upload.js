//Upload product image 
//Main URL to cloudinary
const url = "https://api.cloudinary.com/v1_1/dibssvjip/image/upload/";
const form = document.getElementById("form");
// AskBCS test - Matthew, my guy
// console.log({
//   parent_of_form: document.querySelector(".rest-img"),
//   form
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();
  if (files.length) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      fetch(url, { //Post uploaded image to cloudinary
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          //Append to page 
          var data = JSON.parse(data); //Parse data from the uploaded image to JSON
          var imageurl = data.url; //Get the URL of the uploaded image 
          var div = document.querySelector("#restaurant-image-div");
          var image = document.createElement("img");
          image.setAttribute("id", "restaurant-image");
          image.width = "150";
          image.height = "150";
          image.src = imageurl; //Set the image source as the URL from JSON
          div.appendChild(image);
        });
    }
  }
  else
  // If no image is selected, alert user
  {
    window.alert("Please select file to upload");
  }
});