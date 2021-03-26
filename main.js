var pageCounter = 1;
var btn = document.getElementById('btn');
var animalInfo = document.getElementById('animal-info');

btn.addEventListener("click", function(){

  var datRequest = new XMLHttpRequest();

  datRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

  datRequest.onload = function(){
    var datData = JSON.parse(datRequest.responseText);
    // console.log(datData[0]);
    renderHTML(datData);

  };

  datRequest.send();

  pageCounter++;

  if (pageCounter > 3){
    btn.classList.add("hide-me");
  }

});



function renderHTML(data){
  var htmlString = "";

  for (i=0; i< data.length; i++){
    htmlString += "<p>" + data[i].name + "is a " + data[i].species + "that likes to eat";

    for(x =0; x < data[i].foods.likes.length; x++){
      if(x == 0){
        htmlString += data[i].foods.likes[x];
      } else {
        htmlString += " and " + data[i].foods.likes[x];
      }
    }

    htmlString += ' and dislikes ';

    for(x =0; x < data[i].foods.dislikes.length; x++){
      if(x == 0){
        htmlString += data[i].foods.dislikes[x];
      } else {
        htmlString += " and " + data[i].foods.dislikes[x];
      }
    }

    htmlString += ".</p>";


  }

  animalInfo.insertAdjacentHTML('beforeend', htmlString);


}