// (function () {
  // 'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

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
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#goblinImg')[0].setAttribute('class', 'red-box');
    } else if (fighter.currentHealth < goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'red-box');
      $('#goblinImg')[0].setAttribute('class', 'green-box');
    } else if (fighter.currentHealth === goblin.currentHealth) {
      $('#playerImg')[0].setAttribute('class', 'green-box');
      $('#goblinImg')[0].setAttribute('class', 'green-box');
    }

    if(goblin.currentHealth <= 0) {
      window.alert('You Win!!');
      window.location.reload();
    } else if (fighter.currentHealth <= 0) {
      window.alert('You Lose!!');
      window.location.reload();
    }

  };

  let attackButton = document.getElementById('attack');
    attackButton.onclick = () => {
    fighter.attack(goblin);
  };

  let fighter = new Character("Fighter", 100, 100);

  let wizard = new Character("Wizard", 100, 100);

  let theif = new Character("Theif", 100, 100);

  let goblin = new Character("Goblin", 100, 100);

  document.getElementById('hero-class').innerHTML = fighter.type;
  document.getElementById('hero-currentHealth').innerHTML = fighter.currentHealth;
  // document.getElementById('hero-maxHealth').innerHTML = fighter.maxHealth;
  document.getElementById('enemy-class').innerHTML = goblin.type;
  // document.getElementById('enemy-maxHealth').innerHTML = goblin.maxHealth;
  document.getElementById('enemy-currentHealth').innerHTML = goblin.currentHealth;

  $(function() {
    $("#chr-select").on("change",function() {
      let chr = $(this);
      console.log(chr);
      if (chr[0].value == 'fighter') {
        console.log(chr[0].value);
        console.log('fighter');
        return;
      } else if (chr[0].value == 'wizard') {
        console.log(chr[0].value);
        console.log('wizard');
      } else if (chr[0].value == 'thief') {
        console.log(chr[0].value);
        console.log('thief');
      }

      // if (period=="") return; // please select - possibly you want something else here
      //
      // var report = "script/"+((period == "daily")?"d":"m")+"_report.php";
      // loadXMLDoc(report,'responseTag');
      // $('#responseTag').show();
      // $('#list_report').hide();
      // $('#formTag').hide();
    });
});

// }());
