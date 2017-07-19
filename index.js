// (function () {
  // 'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  $("#attack").hide();
  $('#playAgain').hide();


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
      $('#enemyImg')[0].setAttribute('class', 'red-box');
    } else if (fighter.currentHealth < goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'red-box');
      $('#enemyImg')[0].setAttribute('class', 'white-box');
    } else if (fighter.currentHealth === goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#enemyImg')[0].setAttribute('class', 'green-box');
    }

    if(goblin.currentHealth <= 0) {
      // window.alert('You Win!!');
      // window.location.reload();
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    } else if (fighter.currentHealth <= 0) {
      // window.alert('You Lose!!');
      // window.location.reload();
      $("#hero").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Lose!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }

  };

  let attackButton = document.getElementById('attack');
  let startButton = document.getElementById('startButton');
  let playAgain = document.getElementById('playAgain');


  attackButton.onclick = () => {
    fighter.attack(goblin);
  };

  playAgain.onclick = () => {
    window.location.reload();
  };

  startButton.onclick = () => {
    console.log("working?");
    $("#form").hide();
    $("#attack").fadeIn(8000);

    let randomEnemy = randomNum();

    if (randomEnemy <= 3) {
      $('#enemy-class')[0].innerHTML = goblin.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/QZgUpceTmclgI/giphy.gif';
    } else if (randomEnemy <= 6) {
      $('#enemy-class')[0].innerHTML = zombie.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/13bD1lqmU6fRbq/giphy.gif';
    } else if(randomEnemy < 11){
      $('#enemy-class')[0].innerHTML = ogre.type;
      $('#enemyImg')[0].src = 'http://33.media.tumblr.com/88b452b82d1120924cddda2873fae1e1/tumblr_nab7ibRLcT1qlp9j9o3_500.gif';
    }
  };



  let fighter = new Character("Fighter", 100, 100);

  let wizard = new Character("Wizard", 100, 100);

  let theif = new Character("Theif", 100, 100);

  let goblin = new Character("Goblin", 100, 100);

  let zombie = new Character("Zombie", 100, 100);

  let ogre = new Character("Ogre", 100, 100);



  // document.getElementById('hero-maxHealth').innerHTML = fighter.maxHealth;
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
        $('#playerImg')[0].src = 'https://media.tenor.com/images/cf0b99a75c8b9c273163d11013551346/tenor.gif';
        return;
      } else if (chr[0].value == 'wizard') {
        console.log(chr[0].value);
        console.log('wizard');
        $('#hero-class')[0].innerHTML = wizard.type;
        $('#hero-currentHealth')[0].innerHTML = wizard.currentHealth;
        $('#playerImg')[0].src = 'http://66.media.tumblr.com/e58d75df516a2bc5e4c90d1b7f230664/tumblr_o9uoj4AWhj1rlpicfo1_500.gif';
      } else if (chr[0].value == 'thief') {
        console.log(chr[0].value);
        console.log('thief');
        $('#hero-class')[0].innerHTML = theif.type;
        $('#hero-currentHealth')[0].innerHTML = theif.currentHealth;
        $('#playerImg')[0].src = 'https://s-media-cache-ak0.pinimg.com/originals/c4/8e/9c/c48e9c87807c4f1f02632a6cb6ce7b46.jpg';
      }
    });
  });

// }());
