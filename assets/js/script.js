/**
 * méthode qui permet de ouvrir ou fermé un accordion
 * la méthode ajoute ou supprime la classe afficher  avec jQuery
 * @param identifient
 */
function accordion(identifient){
    $(identifient).toggleClass("afficher");
}

/**
 * méthode qui permet d'ouvrir ou fermer le menu burger
 * la méthode ajoute ou supprimer la classe afficher-menu avec jQuery
 */
function menu(){
    $("#menu").toggleClass("afficher-menu");
}

