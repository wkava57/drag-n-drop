const carton = document.querySelector('#carton');
const materiaux = document.querySelectorAll('.case');
let item;
let compteur = 0;

// quand on va commencer à déplacer lancer la function dragStart
document.addEventListener('dragstart', function(e){
    console.log(e.target);
      // je lance la fonction avec comme paramètre l'élément qui est en cours de déplacement 
      dragStart(e.target);
      // on stocke dans la variable item, l'élément qui est déplacé, pour s'en resservir dans l'écoute d'événement plus bas, au niveau du 'drop'
      item = e.target;

    //   console.log(item)
    // ligne de code nécessaire pour la compatibilité avec Mozilla
    // e.dataTransfer.setData('text', '');
});

// quand on va commencer à déplacer lancer la function dragEnd
document.addEventListener('dragend', function(e){
    dragEnd(e.target);
});

function dragStart(param){
    param.className += ' tenu';
}
function dragEnd(param){
    param.className = 'box';
}

for(const element of materiaux) {
    // Permet de mettre sur les 4 "cases" chacun des ses évènement d'écoute. (au lieu de faire 4x4lignes).
    element.addEventListener('dragover', dragOver);
    
    element.addEventListener('dragenter', dragEnter);
    
    element.addEventListener('dragleave', dragLeave);
        // écriture en vert = Visual Studio code prévient que c'est une classe et non une fonction
}

// sur Mozilla empêcher l'évenement de s'agrandir une fois lacher l'objet sélectionner, donc utiliser "preventDefault"
carton.addEventListener('drop', function(e){
    e.preventDefault();
    console.log("item :",item);
    dragDrop(item);
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'case';
}

function dragDrop(param) {
    carton.className = 'case';
    console.log(param);
    carton.append(param);
    // ajouter le score dès que dragDrop (objet dans le carton);
    ajoutScore();
    // afficher le score dès que le score est rajouté;
    affichageScore();
}
// déclarer la function ajouter score;
function ajoutScore(){
    compteur++;
}
// déclarer la funtion afficher le score sur le compteur;
function affichageScore(){
    document.getElementById("compteur").textContent = compteur;
}





        


