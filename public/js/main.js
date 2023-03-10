// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
console.log(document.querySelector('#content'));
// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
console.log(document.querySelectorAll('#content'));
// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
console.log(document.querySelector('.important'));
// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
console.log(document.querySelectorAll('.important'));
// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule
const listItems =  document.querySelectorAll('li');
listItems.forEach(element => {
    console.log(element.textContent[element.textContent.length-1].toUpperCase());
});
// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName
let content = document.getElementById('content');
let gp = document.getElementsByClassName('grandParagraphe')[0];
