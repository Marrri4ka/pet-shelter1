// Pet Adoption Website where users can view all of the pets available
// for adoption as well as add new pets

function PetShelter() {
  this.pets=[],
  this.currentId = 0
}

PetShelter.prototype.addPet = function(pet){
  pet.id = this.assignId();
  this.pets.push(pet);
}

PetShelter.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PetShelter.prototype.findPet = function(id){
  for (var i=0; i < this.pets.length; i++) {
    if (this.pets[i]) {
      if (this.pets[i].id == id) {
        return this.pets[i];
      }
    }
  };
  return false;
}

PetShelter.prototype.markAdopt = function(id){
  for (var i=0; i < this.pets.length; i++) {
    if (this.pets[i]) {
      if (this.pets[i].id == id) {
        this.pets[i].adopted = true;
        return true;
      }
    }
  };
  return false;
}
// Business logic for Pet
function Pet(name,age,species){
  this.name = name,
  this.age = age,
  this.species = species,
  this.adopted = false
}

// User Interface

var petShelter = new PetShelter();


var toby = new Pet("Toby", 4, 'DSH');
petShelter.addPet(toby);
console.log(petShelter);


function displayPetShelter(petShelterToDisplay){
  var petList = $("ul#pets");
  var htmlForPetInfo ="";
  petShelterToDisplay.pets.forEach(function(pet){
    // htmlForPetInfo+="<li id="+pet.id+">" + pet.name +   "<p> Adopt:<span class='adopt'>" + pet.adopted + "</span></p></li>";
  });
  petList.html(htmlForPetInfo);
};

function showPet(petId){
  var pet = petShelter.findPet(petId);
  $("#show-pet").show();
  $(".name").html(pet.name);
  $(".age").html(pet.age);
  $(".species").html(pet.species);
  $(".adopted").html(pet.adopted.toString());
  console.log(pet);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='adopt-button' id=" + pet.id + ">Adopt</button>");
};

function attachPetListeners() {
  $("ul#pets").on("click", "li", function() {
    showPet(this.id);
  });
  $("#buttons").on("click", ".adopt-button", function() {
   petShelter.markAdopt(this.id);
  displayPetShelter(petShelter);
  $("#show-pet").hide();
});
};
$(document).ready(function(){

  var petVasya = new Pet ("vasya", "1year", "cat");
  petShelter.addPet(petVasya);
  displayPetShelter(petShelter);
    attachPetListeners();
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedAge = $("input#age").val();
    var inputtedSpecies = $("input#species").val();
    var newPet = new Pet(inputtedName,inputtedAge,inputtedSpecies);
    petShelter.addPet(newPet);
    displayPetShelter(petShelter);
    $(".list").show();
    $("form#formOne").hide();
    $("#add-pet").show();
  });

  $("#add-pet").click(function(){
    $("form#formOne").show();
    $("#add-pet").hide();
    $(".list").hide();
  });


});
