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
//         var selRange = selObj.getRangeAt();
//         var singleNode = function(){
            // return ( selObj.focusNode == selObj.anchorNode );
        // };
//         var ranges = [];
//         var newNode = $('<strong style="background-color: yellow"></strong>');
//         // alert(selectedText);

//         // II) add tags (w/ or w/o custom classes/attributes) to those selections
//             // The essentials of this part are the following:
//             // 1) See whether the selected text is in a single node
//             if ( singleNode ) {
            
//             // 2) If yes, jump to step 5. If no, proceed to step 3
            
//                 // ranges.push(selObj.getRangeAt());
//                //ranges.forEach(function(element, idx, arr){
//                      element.surroundContents()
//                  });
//             } else {
//             // 3) Count the number of nodes across which the selected text spans
            
//             // 4) Determine the ranges of the selected text for each node
            
//             }
            
//             // 5) Surround the range(s) with tags
            
//             // 6) Toggle '.hilited' class for the tags
            
//         // III) Put selection text into a margin popover
//             // 1) Get rid of any extra whitespace and/or carriage returns
            
//             // 2) Determine whether popover should be on left or right side
            
//             // 3) Create a popover
            
//             // 4) Populate popover with selection text
            
//             // 5) Include Twitter and Facebook sharing buttons
            
//     });
// });

var selObj = document.getSelection();
        // var selRange = selObj.getRangeAt();
        var singleNode = function(){
            return ( selObj.focusNode == selObj.anchorNode );
        };
        var ranges = [];
        var newNode = $('<strong style="background-color: yellow"></strong>');
