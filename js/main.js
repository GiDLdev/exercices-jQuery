$(function(){
    
/*
Exercice 1 :  click(), css() et add()
Créer une bordure rouge de 2px autour de deux textareas qui s'affichera au clic sur un bouton.
Puis ajouter deux paragraphes à l'objet jQuery avec une bordure rouge de 2px au clic sur le même bouton.
*/

/*
    var div1 = $('#monaire1'),
        div2 = $('#monaire2'),
        p1 = $('#paragraphe1'),
        p2 = $('#paragraphe2');
        
        $("#bouton").click(function(){
            //$("textarea").add("#paragraphe1').add("#paragraphe2').css({border:'2px solid red'});
            $("textarea").add("p").css({border:'2px solid red'});    
        });
*/

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 2 : add() et appendTo()
Créer un élément contenant du texte ajouté après un paragraphe
*/

//$("#paragraphe1").add("<p>Hello</p>").appendTo(document.body);
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe1");
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe2");
//$("#paragraphe1").add("<p>Hello</p>").appendTo("#paragraphe1");

/*
 
$(p1).add("<p>hello</p>").appendTo(p1);

*/
//--------------------------------------------------------------------------------------------------------------------------------------
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
$("div").click(function(){
    let color = $(this).css("background-color");
    $("p").html("La couleur du DIV cliqué est : " + color);
});
*/

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 4 : last() et addClass()
Mettre une couleur de fond orange au dernier des 3 paragraphes
Exemple :
<p>HTML</p>
<p>JavaScript</p>
<p>CSS</p>
*/

/*
$("p").last().addClass("orange");
*/

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 5 : click(), addClass()
Changer la couleur du texte et du fond d'un div au clic sur un bouton.
*/

/*
$(".bout").click(function(){
    $(".div2").addClass("newcolor");
});
*/

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 6 : click() et after()
Ajouter du texte après un paragraphe au clic sur un bouton.
*/

/*
$('button').click(function(){
    $(p2).after("<p>bye</p>");
});

*/

//--------------------------------------------------------------------------------------------------------------------------------------
//EXERCICES SÉANCE 2

/*
Exercice 1 :  Animer par un déplacement de 50 px une div de gauche à droite puis de droite à gauche.
*/

$("#bouton1a").click(function() {
    $(".block").animate({ left: "-=50px" }, "slow");
});

$("#bouton1b").click(function() {
    $(".block").animate({ left: "+=50px" }, "slow");
});

$("#bouton1c").click(function() {
    $(".block").animate({ top: "-=50px" }, "slow");
});

$("#bouton1d").click(function() {
    $(".block").animate({ top: "+=50px" }, "slow");

});

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 2 : Animer 2 divs sur 3 avec la méthode .slideToggle(), 
créer un bouton qui change la couleur des 2 divs animées en utilisant la méthode toggleClass().
*/


$("#bouton2").click(function() {
    $("div:animated").toggleClass("colored ");
    //$(".divAnime").slideToggle(5000);
});

let animateIt = function() {
    $("#div1,#div2").slideToggle("slow", animateIt);
}

animateIt();

//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 3 : Animer un élément "box" en changeant sa hauteur et sa largeur puis réinitialiser.
*/

$("#bouton3a").click(function() {
    $("#box").animate({
        height: "300px",
        width: "100px",
        backgroundColor: "purple",
    }, 1500);
});

$("#bouton3b").click(function() {
    $("#box").animate({
        height: "200px",
        width: "200px",
        backgroundColor: "rgb(134, 0, 22)",
    }, 1500);
}); 


//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 4 : Faire apparaître ou disparaître un élément en 3 secondes en utilisant .fadeIn() et .fadeOut().
*/
$('#bouton4').click(function(){
    $("#boite").fadeOut(3000, function(){
        $(this).fadeIn(3000);
    });
});
/* 
// correction

$('#btn1').click(function() {
    $('div').fadeOut(3000)
});

$('#btn2').click(function() {
    $('div').fadeIn(3000)
}); 

*/




//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 5 : Faire apparaître ou disparaître un élément avec un intervalle d'une seconde en utilisant setInterval().
*/
$('#bouton5').click(function(){
    clearInterval(magie);

    function magie(){
        $("#paquet").fadeOut(3000, function(){
            $(this).fadeIn(3000);
        });
    }
    var intervalFade = setInterval(magie, 3000);
});


/* 
//correction

$('button').click(function() {
    setInterval(function() {
        $('div').toggle(2000);
    }, 3000);
}); 
*/


//--------------------------------------------------------------------------------------------------------------------------------------
/*
Exercice 6 : Faire apparaître ou disparaître un élément avec l'effet "Toggle" après l'avoir activé ou désactivé en utilisant .fx.off.
*/

var toggleFx = function() {
    $.fx.off = !$.fx.off;
    };

toggleFx();
$("#bouton6").click(toggleFx);
$("input").click(function(){
    $("#fantome").toggle("slow");
});







});