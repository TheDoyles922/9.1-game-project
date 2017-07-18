// (function () {
  // 'use strict';

  function randomNum() {
    // from 1 to 10
    return Math.floor((Math.random() * 10) + 1);
  };

  class Character {
    constructor(type, currentHealth, maxHealth) {
      this.type = type;
      this.currentHealth = currentHealth;
      this.maxHealth = maxHealth;
    }
  };

  Character.prototype.attack = function(opponent) {
    console.log(opponent.currentHealth);
    let rand = randomNum();
    opponent.currentHealth -= rand;
    console.log(opponent.currentHealth);
  };

  let fighter = new Character("Fighter", 100, 100);

  let wizard = new Character("Wizard", 100, 100);

  let theif = new Character("Theif", 100, 100);

  let goblin = new Character("Goblin", 100, 100);


  // $("form").submit(function() {
  //   let name = $("#name").text();
  //
  //   let
  // });

// }());
