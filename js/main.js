/*
Exercice 1 :  click(), css() et add()
Créer une bordure rouge de 2px autour de deux textareas qui s'affichera au clic sur un bouton.
Puis ajouter deux paragraphes à l'objet jQuery avec une bordure rouge de 2px au clic sur le même bouton.
*/

$(function(){

    var div1 = $('#monaire1'),
        div2 = $('#monaire2'),
        paragraphe = $('.paragraphe');
        

    $('button').on(click, function(e){
        $(div1).css("border","solid 2px red");
        $(div2).addClass(paragraphe);

        e.preventDefault();
    });
/*
Exercice 2 : add() et appendTo()
Créer un élément contenant du texte ajouté après un paragraphe
*/

    var div3 = $('#paragraphe2').text("du texte à ajouté dans ce nouveau paragraphe");

    $('button').on(click, function(){
        $(div3).appendTo(div2);
    });

/*
Exercice 3 :  click(), css() et html()
Afficher la couleur du fond d'un des quatre div en cliquant sur un div.
Exemple de quatre div : 
<div style="background-color:red;"></div> 
<div style="background-color:rgb(16,99,30);"></div>    
<div style="background-color:#523456;"></div>   
<div style="background-color:#a11;"></div>
*/





/*
Exercice 4 : last() et addClass()
Mettre une couleur de fond orange au dernier des 3 paragraphes
Exemple :
<p>HTML</p>
<p>JavaScript</p>
<p>CSS</p>
*/




/*
Exercice 5 : click(), addClass()
Changer la couleur du texte et du fond d'un div au clic sur un bouton.
*/




/*
Exercice 6 : click() et after()
Ajouter du texte après un paragraphe au clic sur un bouton.
*/





});
