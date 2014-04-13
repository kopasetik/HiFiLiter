test("First test", function(){

    deepEqual( selObj(), document.getSelection());

});

test("Tough tests", function(){

    deepEqual( convertToArticleJSON(), {
        article: {
            "title": "Hifilighter Front Page", 
            "url": "file:///home/wale/Code/GitHub/HiFiLiter/hifilighter_front_end.html"
        }
    });

    deepEqual( convertToHiliteJSON( "hello" ), {
        highlight: {
            "text": "hello",
            "url": "file:///home/wale/Code/GitHub/HiFiLiter/hifilighter_front_end.html"   
        }
    });

});