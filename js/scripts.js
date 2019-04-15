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
