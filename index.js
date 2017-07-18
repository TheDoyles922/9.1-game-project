// (function () {
  // 'use strict';

  function randomNum() {
    // from 1 to 10
    return Math.floor((Math.random() * 10) + 1);
  };



  class Character {
    constructor(type, currentHealth, maxHealth, img) {
      this.type = type;
      this.currentHealth = currentHealth;
      this.maxHealth = maxHealth;
      this.img = img;
    }
  };

  Character.prototype.attack = function(opponent) {
    console.log(opponent.currentHealth);
    let heroAttack = randomNum();
    let enemyAttack = randomNum();

    console.log(opponent.currentHealth);
    document.getElementById('enemy-currentHealth').innerHTML = goblin.currentHealth -= heroAttack;
    document.getElementById('hero-currentHealth').innerHTML = fighter.currentHealth -= enemyAttack;
  };

  let fighter = new Character("Fighter", 100, 100);

  let wizard = new Character("Wizard", 100, 100);

  let theif = new Character("Theif", 100, 100);

  let goblin = new Character("Goblin", 100, 100);

  document.getElementById('hero-class').innerHTML = fighter.type;
  document.getElementById('hero-currentHealth').innerHTML = fighter.currentHealth;
  document.getElementById('hero-maxHealth').innerHTML = fighter.maxHealth;
  document.getElementById('enemy-class').innerHTML = goblin.type;
  document.getElementById('enemy-maxHealth').innerHTML = goblin.maxHealth;
  document.getElementById('enemy-currentHealth').innerHTML = goblin.currentHealth;


// }());
