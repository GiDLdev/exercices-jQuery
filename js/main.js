/*
Exercice 1 :  click(), css() et add()
Créer une bordure rouge de 2px autour de deux textareas qui s'affichera au clic sur un bouton.
Puis ajouter deux paragraphes à l'objet jQuery avec une bordure rouge de 2px au clic sur le même bouton.
*/

$(function(){

    var div1 = $('#monaire1'),
        div2 = $('#monaire2'),
        p1 = $('#paragraphe1'),
        p2 = $('#paragraphe2');
        
        $("#bouton").click(function(){
            //$("textarea").add("#paragraphe1').add("#paragraphe2').css({border:'2px solid red'});
            $("textarea").add("p").css({border:'2px solid red'});    
        });
/*
Exercice 2 : add() et appendTo()
Créer un élément contenant du texte ajouté après un paragraphe
*/

//$("#paragraphe1").add("<p>Hello</p>").appendTo(document.body);
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe1");
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe2");
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe1");

    $(p1).add("<p>hello</p>").appendTo(p1);


/*
Exercice 3 :  click(), css() et html()
Afficher la couleur du fond d'un des quatre div en cliquant sur un div.
Exemple de quatre div : 
<div style="background-color:red;"></div> 
<div style="background-color:rgb(16,99,30);"></div>    
<div style="background-color:#523456;"></div>   
<div style="background-color:#a11;"></div>
*/

$("div").click(function(){
    let color = $(this).css("background-color");
    $("p").html("La couleur du DIV cliqué est : " + color);
});



/*
Exercice 4 : last() et addClass()
Mettre une couleur de fond orange au dernier des 3 paragraphes
Exemple :
<p>HTML</p>
<p>JavaScript</p>
<p>CSS</p>
*/


$("p").last().addClass("orange");


/*
Exercice 5 : click(), addClass()
Changer la couleur du texte et du fond d'un div au clic sur un bouton.
*/

$(".bout").click(function(){
    $(".div2").addClass("newcolor");
});


/*
Exercice 6 : click() et after()
Ajouter du texte après un paragraphe au clic sur un bouton.
*/


$('button').click(function(){
    $(p2).after("<p>bye</p>");
});


});
