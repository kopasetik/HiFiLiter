// $(document).ready(function() {

//     //Toggles "prompt" class nodes/elements
//     $("body").click(function() {
//         $(".prompt").toggle();
//     });


//     //This happens when the person finishes highlighting
//     $("p").mouseup(function(){

//         //TODO make a function that properly can...
//         // I) return *.toString() of selections
//         // Looks like I need to put this in an event (to create a closure?)
//         // so that it shows up in the console
//         var selObj = document.getSelection();
//         var singleNode = function(){
            // return ( selObj.focusNode == selObj.anchorNode );
        // };
//         var ranges = [];
//         var newNode = $('<strong style="background-color: yellow"></strong>');
//         // alert(selectedText);

//         // II) add tags (w/ or w/o custom classes/attributes) to those selections
//             // The essentials of this part are the following:
//             // 1) See whether the selected text is in a single node
                // var singleNode = function(){
                //     return ( selObj.focusNode == selObj.anchorNode );
                // };
//             if ( singleNode ) {
            
//             // 2) If yes, jump to step 5. If no, proceed to step 3
            
//                 // ranges.push(selObj.getRangeAt());
//                //ranges.forEach(function(element, idx, arr){
//                      element.surroundContents()
//                  });
//             } else {
//             // 3) Count the number of nodes across which the selected text spans
            // $('p').index(selObj.focusNode.parentElement) - $('p').index(selObj.anchorNode.parentElement)
//             // 4) Determine the ranges of the selected text for each node
            
//             }
            
//             // 5) Surround the range(s) with tags & 6) Toggle '.hilited' class for the tags
                // selObj.getRangeAt().surroundContents($(document.createElement("span")).toggleClass('hilited')[0]);

//         // III) Put selection text into a margin popover
//             // 1) Get rid of any extra whitespace and/or carriage returns
            
//             // 2) Create a popover
                // $(selObj.anchorNode.parentElementanchorObj).attr("data-toggle", "popover");
                // $(selObj.anchorNode.parentElementanchorObj).attr("data-content", "Hi again!");
                // $(selObj.anchorNode.parentElementanchorObj).popover('show');
            
//             // 3) Populate popover with selection text
            
//             // 4) Include Twitter and Facebook sharing buttons
            
//     });
// });

var selObj = document.getSelection();
var ranges = [];
var newNode = document.createElement("span");
$(newNode).toggleClass('hilited');

$(document).ready(function() {
    $('p').mouseup(function() {
        selObj.getRangeAt().surroundContents($(document.createElement("span")).toggleClass('hilited')[0]);
        // TODO - push range location data for each selection to an array/object/json-file
        // And put in an animation for the highlighting
    });

});
