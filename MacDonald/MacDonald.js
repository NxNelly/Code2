"use strict";
var Farm;
(function (Farm) {
    const animals = [];
    animals.push(new Farm.Animal("Bert", "cow", "moo", "grass", 5));
    animals.push(new Farm.Animal("Berta", "cow", "moo", "grass", 5));
    animals.push(new Farm.Animal("Rasmus", "lion", "rawr", "meat", 7));
    animals.push(new Farm.Animal("Chili", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Farm.Animal("Elisa", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Farm.Animal("Tonka", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Farm.Animal("Missy", "cat", "meow", "meat", 3));
    animals.push(new Farm.Animal("Rosa", "cat", "meow", "meat", 3));
    animals.push(new Farm.Animal("Partick", "pig", "oink", "grain", 6));
    animals.push(new Farm.Animal("Terry", "pig", "oink", "grain", 6));
    const storage = [];
    storage.push(new Farm.Food("grass", 50));
    storage.push(new Farm.Food("meat", 50));
    storage.push(new Farm.Food("grain", 50));
    console.log(animals);
})(Farm || (Farm = {}));
