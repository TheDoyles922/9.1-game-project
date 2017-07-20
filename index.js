// (function () {
  // 'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  // $("#attack").hide();
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

  let enemy;
  let hero;
  let animation = 'animated shake';
  let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationEnd';
  Character.prototype.attack = function(opponent) {
    let heroAttack = randomNum();
    let enemyAttack = randomNum();
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= heroAttack;
    setTimeout(() => {
      $('#hero-currentHealth')[0].innerHTML = fighter.currentHealth -= enemyAttack;
      $('#hero').addClass(animation).one(animationEnd, function() {
        $(this).removeClass(animation);
      });
    }, 1000);

    if (heroAttack >= 7 && hero === fighter) {
      $('#bash').show();
    } else if (heroAttack >= 7 && hero === wizard) {
      $('#fireball').show();
    } else if (heroAttack >= 7 && hero === rogue) {
      $('#poison').show();
    }

    if (fighter.currentHealth > enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'white-box');
      $('#enemyImg')[0].setAttribute('class', 'red-box');
    } else if (fighter.currentHealth < enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'red-box');
      $('#enemyImg')[0].setAttribute('class', 'white-box');
    } else if (fighter.currentHealth === enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#enemyImg')[0].setAttribute('class', 'green-box');
    }

    if(enemy.currentHealth <= 0) {
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    } else if (fighter.currentHealth <= 0) {
      $("#hero").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Lose!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }

  };

  let fighter = new Character("Fighter", 120, 120);
  let wizard = new Character("Wizard", 60, 60);
  let rogue = new Character("Rogue", 80, 80);
  let goblin = new Character("Goblin", 75, 75);
  let zombie = new Character("Zombie", 100, 100);
  let ogre = new Character("Ogre", 150, 150);
  let dragon = new Character('Dragon', 250, 250)

  let attackButton = document.getElementById('attack');
  let startButton = document.getElementById('startButton');
  let playAgain = document.getElementById('playAgain');
  let bash = document.getElementById('bash');
  let fireball = document.getElementById('fireball');
  let poison = document.getElementById('poison');

  attackButton.onclick = () => {
    fighter.attack(enemy);
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
  };

  bash.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 10;
    $('#bash').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
  };

  fireball.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 30;
    $('#fireball').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
  };

  poison.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 20;
    $('#poison').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
  };



  playAgain.onclick = () => {
    window.location.reload();
  };

  let song = new Audio('audio/Eye of the Tiger-Survivor.mp3');

  startButton.onclick = () => {
    console.log("working?");
    $("#form").hide();
    $("#attack").fadeIn();
    song.play();

    let randomEnemy = randomNum();

    console.log('goblin', goblin);

    if (randomEnemy <= 3) {
      enemy = goblin;
      console.log('here', enemy);
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/QZgUpceTmclgI/giphy.gif';
    } else if (randomEnemy <= 6) {
      enemy = zombie;
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/13bD1lqmU6fRbq/giphy.gif';

    } else if (randomEnemy <= 9) {
      enemy = ogre;
      console.log('here', enemy);
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/XAAGfD6JdUQQE/giphy.gif';

    } else {
      enemy = dragon;
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'http://i.imgur.com/oc0QKRV.gif';
    }
  };

  // document.getElementById('hero-maxHealth').innerHTML = fighter.maxHealth;
  // document.getElementById('enemy-maxHealth').innerHTML = goblin.maxHealth;
  // $('#enemy-currentHealth')[0].innerHTML = goblin.currentHealth;

  $(function() {
    $("#chr-select").on("change",function() {
      let chr = $(this);
      console.log(chr);
      if (chr[0].value == 'fighter') {
        hero = fighter;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'https://media.tenor.com/images/cf0b99a75c8b9c273163d11013551346/tenor.gif';
        return;
      } else if (chr[0].value == 'wizard') {
        hero = wizard;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'http://66.media.tumblr.com/e58d75df516a2bc5e4c90d1b7f230664/tumblr_o9uoj4AWhj1rlpicfo1_500.gif';
      } else if (chr[0].value == 'rogue') {
        hero = rogue;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'https://s-media-cache-ak0.pinimg.com/originals/c4/8e/9c/c48e9c87807c4f1f02632a6cb6ce7b46.jpg';
      }
    });
  });

// }());
