
// Le nombre max
//const MAX_NUMBER = 500; 

// Le nombre cherché
//const searchedNumber = Math.round(Math.random() * MAX_NUMBER);

// Le nombre saisi
//let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
//let attempts = 1;


const game = {
  max: 20,
  min: 10,
  attempts:1, 
  score: [],
}

//let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
//const searchedNumber = Math.round(Math.random() * game.max_number);
function searched(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function play (max, min) {
  let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
  //const searchedNumber = Math.round(Math.random() * game.max_number);
  const searchedNumber = searched(max, min);
 
  // Tant que le nombre saisi n'est pas bon on redemande un nombre
  while (enteredNumber !== searchedNumber) {
      // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
      if(!enteredNumber){
          break;
      }
      // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
      if (enteredNumber < searchedNumber) {
          enteredNumber = parseInt(prompt('C\'est plus'));
      }
      else {
          enteredNumber = parseInt(prompt('C\'est moins'));
      }
      // on incrémente le nombre d'essais
      game.attempts += 1;
      
  }

  // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
  // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
  if(enteredNumber){
      // on affiche un message de victoire
      game.score.push (game.attempts);
      alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + game.attempts );

      //ajouter une boucle for game.score 
      
      //confirm("Encore?");
      //if (window.confirm("Souhaitez-vous vraiment quitter le site ?")) {
        //window.open("exit.html", "Merci de votre visite !");
      //}
      
      play(max, min);
  } else {
      // on affiche un message d'abandon
      alert('Vous abandonnez ? Dommage...');
  }
  
}

play(game.max, game.min);

