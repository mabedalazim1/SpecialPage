// Selecte Landing Page Elmentes
let landingPage = document.querySelector(".landing-page");

//Get Array of Imgs
let imgName = "/imgs/comp";
let imgExt = ".jpg";
let imgArray = [];
for (i = 1; i <= 5; i++) {
  imgArray.push(`${imgName}${i}${imgExt}`);
}
// Chang Background img Url
landingPage.style.backgroundImage = `url("${imgArray[0]}")`;
setInterval(() => {
  let ranadomNomber = Math.floor(Math.random() * imgArray.length);
  landingPage.style.backgroundImage = `url("${imgArray[ranadomNomber]}")`;
}, 10000);
