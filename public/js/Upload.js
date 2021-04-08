//Upload product image 
//Main URL to cloudinary
const url = "https://api.cloudinary.com/v1_1/blushing-cow-limited/image/upload/";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();
  if(files.length)
  {
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
        //Append to product page 
        var data = JSON.parse(data); //Parse data from the uploaded image to JSON
        var imageurl = data.url; //Get the URL of the uploaded image 
        var div = document.querySelector("#product_image");
        var image = document.createElement("img");
        image.setAttribute("id", "product-image");
        image.width ="150";
        image.height ="150";
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
