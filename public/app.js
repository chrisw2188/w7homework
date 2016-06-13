window.onload = function(){
  main();
}

var main = function(){
  people()
}

var people = function(){
  var url = "http://swapi.co/api/people/?format=json";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if (request.status === 200)
    console.log('got the data')
  
  var jsonString = request.responseText;
  var info = JSON.parse(jsonString)
  var characters = info.results
  var dropdown = document.getElementById('dropdown')
  characterSelector(characters, dropdown);
  characterDetails(characters);
  numberOfMovies(characters);
    
    dropdown.onchange = function(){
    characterDetails(characters)
    }
  }
  request.send(null);
}

var characterSelector = function(characters, dropdown){
    for (var character of characters){
    var option = document.createElement('option')
    option.innerText = character.name
    dropdown.appendChild(option)
    }
  }

var characterDetails = function(characters){
  var p = document.getElementById('character-name')
  var p2 = document.getElementById('gender')
  var p3 = document.getElementById('height')
  for (character of characters){
    if (character.name === dropdown.value){
      homeworld(character.homeworld)
      species(character.species)
      console.log(character) 
      p.innerText = "Character Full Name: "  + character.name
      p2.innerText = "Gender: " + character.gender
      p3.innerText = "Height: " + character.height
    }
  }
}

var homeworld = function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      // if (request.status === 200)
      // console.log('got the homeworld')
    var jsonString = request.responseText;
    var homeworld = JSON.parse(jsonString)
    var p = document.getElementById('homeworld')
    p.innerText = "Homeworld: " + homeworld.name
    }
    request.send(null);
}

var species = function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      // if (request.status === 200)
      // console.log('got the species')
    var jsonString = request.responseText;
    var species = JSON.parse(jsonString)
    var p = document.getElementById('species')
    p.innerText = "Species: " + species.name
    }
    request.send(null);
}

var numberOfMovies = function(characters){
var characterMovieData = [];
  for (character of characters){
    characterMovieData.push({
      name: character.name,
      y: character.films.length
    })  
  }
  new PieChart('Number of Films Featured in', characterMovieData)
}









  