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
      $('#hero-currentHealth')[0].innerHTML = hero.currentHealth -= enemyAttack;
      $('#hero').addClass(animation).one(animationEnd, function() {
        $(this).removeClass(animation);
      });
      if (hero.currentHealth <= 0) {
        $("#hero").fadeOut();
        $("#center").fadeOut();
        $('#message')[0].innerHTML = 'You Lose!'
        $('#playAgain').show();
        console.log(message.innerHTML);
      }
    }, 1000);

    if (heroAttack >= 7 && hero === fighter) {
      setTimeout(() => {
        $('#bash').show();
      }, 2000);
    } else if (heroAttack >= 7 && hero === wizard) {
      setTimeout(() => {
        $('#fireball').show();
      }, 2000);
    } else if (heroAttack >= 7 && hero === rogue) {
      setTimeout(() => {
        $('#poison').show();
      }, 2000);
    } else if (heroAttack >= 5 && hero === archer) {
      setTimeout(() => {
        $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= heroAttack;
        if(enemy.currentHealth <= 0) {
          $("#enemy").fadeOut();
          $("#center").fadeOut();
          $('#message')[0].innerHTML = 'You Win!'
          $('#playAgain').show();
          console.log(message.innerHTML);
        }
      }, 2000);
    }

    if (hero.currentHealth > enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'white-box');
      $('#enemyImg')[0].setAttribute('class', 'red-box');
    } else if (hero.currentHealth < enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'red-box');
      $('#enemyImg')[0].setAttribute('class', 'white-box');
    } else if (hero.currentHealth === enemy.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#enemyImg')[0].setAttribute('class', 'green-box');
    }

    if(enemy.currentHealth <= 0) {
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }
    if (hero.currentHealth <= 0) {
      $("#hero").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Lose!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }
  };

  let fighter = new Character('Fighter', 120, 120);
  let wizard = new Character('Wizard', 60, 60);
  let rogue = new Character('Rogue', 80, 80);
  let archer = new Character('Archer', 70, 70)
  let goblin = new Character('Goblin', 75, 75);
  let warlock = new Character('Warlock', 120, 120)
  let deathKnight = new Character('Death Knight', 150, 150);
  let orc = new Character('Orc', 130, 130);
  let dragon = new Character('Dragon', 250, 250)

  let attackButton = document.getElementById('attack');
  let startButton = document.getElementById('startButton');
  let playAgain = document.getElementById('playAgain');
  let bash = document.getElementById('bash');
  let fireball = document.getElementById('fireball');
  let poison = document.getElementById('poison');

  attackButton.onclick = () => {
    hero.attack(enemy);
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
    $('#attack').hide();
    setTimeout(() => {
      $('#attack').show()
    }, 2000);
  };

  bash.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 10;
    $('#bash').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
    if(enemy.currentHealth <= 0) {
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }
  };

  fireball.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 30;
    $('#fireball').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
    if(enemy.currentHealth <= 0) {
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }
  };

  poison.onclick = () => {
    $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth -= 20;
    $('#poison').hide();
    $('#enemy').addClass(animation).one(animationEnd, function() {
      $(this).removeClass(animation);
    });
    if(enemy.currentHealth <= 0) {
      $("#enemy").fadeOut();
      $("#center").fadeOut();
      $('#message')[0].innerHTML = 'You Win!'
      $('#playAgain').show();
      console.log(message.innerHTML);
    }
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
    console.log(randomEnemy);
    console.log('goblin', goblin);

    if (randomEnemy <= 2) {
      enemy = goblin;
      console.log('here', enemy);
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/QZgUpceTmclgI/giphy.gif';
    } else if (randomEnemy <= 4) {
      enemy = deathKnight;
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://68.media.tumblr.com/cf3109feb4fe951d347072b7a5014129/tumblr_o3wv8dQiCg1ujsoyno1_500.gif';
    } else if (randomEnemy <= 6) {
      enemy = orc;
      console.log('here', enemy);
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'http://33.media.tumblr.com/88b452b82d1120924cddda2873fae1e1/tumblr_nab7ibRLcT1qlp9j9o3_500.gif';

    } else if (randomEnemy <= 9) {
      enemy = warlock;
      console.log('here', enemy);
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'https://media.giphy.com/media/1ZJRNwwUesXW8/200.gif';
    } else {
      enemy = dragon;
      $('#enemyHealth')[0].innerHTML = 'HP: ';
      $('#enemy-currentHealth')[0].innerHTML = enemy.currentHealth;
      $('#enemy-maxHealth')[0].innerHTML = '/' + enemy.maxHealth;
      $('#enemy-class')[0].innerHTML = enemy.type;
      $('#enemyImg')[0].src = 'http://i.imgur.com/oc0QKRV.gif';
    }
  };

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
        $('#playerImg')[0].src = 'https://static.comicvine.com/uploads/original/14/142946/5035290-43.gif';
        return;
      } else if (chr[0].value == 'wizard') {
        hero = wizard;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'https://68.media.tumblr.com/1f2db7c53aeccb04536d8f37957bd2b3/tumblr_o7n3ihqvyX1sk8j96o1_500.gif';
      } else if (chr[0].value == 'rogue') {
        hero = rogue;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'https://s-media-cache-ak0.pinimg.com/originals/c4/8e/9c/c48e9c87807c4f1f02632a6cb6ce7b46.jpg';
      } else if (chr[0].value == 'archer') {
        hero = archer;
        $('#hero-class')[0].innerHTML = hero.type;
        $('#heroHealth')[0].innerHTML = 'HP: ';
        $('#hero-currentHealth')[0].innerHTML = hero.currentHealth;
        $('#hero-maxHealth')[0].innerHTML = '/' + hero.maxHealth;
        $('#playerImg')[0].src = 'http://49.media.tumblr.com/f05972c30d931efded9faead1acd53ac/tumblr_nxexb18MK01qlp9j9o3_r1_500.gif';
      }
    });
  });

// }());
