// (function () {
  // 'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  $("#attack").hide();

  console.log('dom element', $('#enemy-currentHealth')[0]);

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
    let heroAttack = randomNum();
    let enemyAttack = randomNum();
    $('#enemy-currentHealth')[0].innerHTML = goblin.currentHealth -= heroAttack;
    $('#hero-currentHealth')[0].innerHTML = fighter.currentHealth -= enemyAttack;

    if (fighter.currentHealth > goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'white-box');
      $('#goblinImg')[0].setAttribute('class', 'red-box');
    } else if (fighter.currentHealth < goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'red-box');
      $('#goblinImg')[0].setAttribute('class', 'white-box');
    } else if (fighter.currentHealth === goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#goblinImg')[0].setAttribute('class', 'green-box');
    }

    if(goblin.currentHealth <= 0) {
      // window.alert('You Win!!');
      // window.location.reload();
      $("#enemy").fadeOut();
      $("#center").fadeOut();
    } else if (fighter.currentHealth <= 0) {
      // window.alert('You Lose!!');
      // window.location.reload();
      $("#hero").fadeOut();
      $("#center").fadeOut();
    }

  };

  let attackButton = document.getElementById('attack');
  let startButton = document.getElementById('startButton');


  attackButton.onclick = () => {
    fighter.attack(goblin);
  };

  startButton.onclick = () => {
    console.log("working?");
    $("#form").hide();
    $("#attack").fadeIn(8000);
  };



  let fighter = new Character("Fighter", 100, 100);

  let wizard = new Character("Wizard", 100, 100);

  let theif = new Character("Theif", 100, 100);

  let goblin = new Character("Goblin", 100, 100);


  // document.getElementById('hero-maxHealth').innerHTML = fighter.maxHealth;
  $('#enemy-class')[0].innerHTML = goblin.type;
  // document.getElementById('enemy-maxHealth').innerHTML = goblin.maxHealth;
  $('#enemy-currentHealth')[0].innerHTML = goblin.currentHealth;

  $(function() {
    $("#chr-select").on("change",function() {
      let chr = $(this);
      console.log(chr);
      if (chr[0].value == 'fighter') {
        console.log(chr[0].value);
        console.log('fighter');
        $('#hero-class')[0].innerHTML = fighter.type;
        $('#hero-currentHealth')[0].innerHTML = fighter.currentHealth;
        $('#playerImg')[0].src = 'http://bestanimations.com/Fantasy/medieval-knight-animated-gif.gif';
        // $("#attack").fadeIn(8000);
        return;
      } else if (chr[0].value == 'wizard') {
        console.log(chr[0].value);
        console.log('wizard');
        $('#hero-class')[0].innerHTML = wizard.type;
        $('#hero-currentHealth')[0].innerHTML = wizard.currentHealth;
        $('#playerImg')[0].src = 'http://3.bp.blogspot.com/_Us3ZjqQuY6o/TR6boTUXVJI/AAAAAAAAAEI/3oROt9PUOqU/s1600/Wizard-male.gif';
        // $("#attack").fadeIn(8000);
      } else if (chr[0].value == 'thief') {
        console.log(chr[0].value);
        console.log('thief');
        $('#hero-class')[0].innerHTML = theif.type;
        $('#hero-currentHealth')[0].innerHTML = theif.currentHealth;
        $('#playerImg')[0].src = 'https://s-media-cache-ak0.pinimg.com/originals/c4/8e/9c/c48e9c87807c4f1f02632a6cb6ce7b46.jpg';
        // $("#attack").fadeIn(8000);
      }

    });
});

// }());
