$(function(){

    var div1 = $('#monaire1'),
        div2 = $('#monaire2'),
        paragraphe = $('.paragraphe');
        

    $('button').on(click, function(e){
        $(div1).css("border","solid 2px red");
        $(div2).addClass(paragraphe);

        e.preventDefault();
    });


    var div3 = $('#paragraphe2').add({text: "du texte à ajouté dans ce nouveau paragraphe"});

    $('button').on(click, function(e){
        $(div3).appendTo(div2);
    });


});
