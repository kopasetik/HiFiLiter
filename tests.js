test("First test", function(){

    equal( selObj(), document.getSelection());

});

test("Tough tests", function(){

    equal( convertToArticleJSON(), {
        article: {
            "title": "Hifilighter Front Page", 
            "url": "file:///home/wale/Code/GitHub/HiFiLiter/hifilighter_front_end.html"
        }
    });

    equal( convertToHiliteJSON( "hello" ), {
        highlight: {
            "text": "hello",
            "url": "file:///home/wale/Code/GitHub/HiFiLiter/hifilighter_front_end.html"   
        }
    });

});