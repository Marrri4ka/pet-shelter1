// Business logic for Pet

function Pet(name,age,species){
  this.name = name,
  this.age = age,
  this.species = species
}


// User Interface

var petShelter = new PetShelter();
function displayPetShelter(petShelterToDisplay){
  var petList = $("ul#pets");
  var htmlForPetInfo ="";
  petShelterToDisplay.pets.forEach(function(pet){
htmlForPetInfo+="<li id="+pet.id+">" + pet.name + "</li>";
  });
  petList.html(htmlForPetInfo);
};


function showPet(petId){
  var pet = petShelter.findPet(petId);
  $("#show-pet").show();
  $(".name").html(pet.name);
  $(".age").html(pet.age);
  $(".species").html(pet.species);

}
