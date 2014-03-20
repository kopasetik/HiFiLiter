$(document).ready(function() {

        var
            selObj = document.getSelection(),
            ranges = [];
        var
            nodesArray = Array.prototype.slice.call(document.querySelectorAll("p")),
            singleNode = function(){
            return ( selObj.focusNode == selObj.anchorNode );
        };
            var nodeCount = nodesArray.indexOf(selObj.focusNode.parentElement) - nodesArray.indexOf(selObj.anchorNode.parentElement);
    
                var 
                    newRangeFirst = selObj.getRangeAt().cloneRange(),
                    newRangeLast = newRangeFirst.cloneRange();
                    newRng = document.createRange();

    function surroundIt() {
        ranges.forEach(function( element, idx, arr ){
            element.surroundContents(makeHighligtedSpan());
        });
        
    }

    var liteItUp = function() {
        //The function should:
        // I) create a selection variable and an array for ranges

        // II) add tags (w/ or w/o custom classes/attributes) to those selections
        // The essentials of this part are the following:
        // 1) See whether the selected text is in a single node

        if ( singleNode() ) {
            
        // 2) If yes, jump to step 5. If no, proceed to step 3
            ranges.push(selObj.getRangeAt());
        } else {
        // 3) Count the number of nodes across which the selected text spans

        // 4) Determine the ranges of the selected text for each node
            if (nodeCount == 1) {
                newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
                newRangeLast.setStart( newRangeLast.endContainer, 0 );
                ranges.push( newRangeFirst );
                ranges.push( newRangeLast );
            } else {
                newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
                newRangeLast.setStart( newRangeLast.endContainer, 0 );
                ranges.push( newRangeFirst );
                ranges.push( newRangeLast );

            // Get highlighting for the nodes in between the first and last ones
                for ( var i = nodeCount-1; i > 0; i-- ) {
                    newRng.selectNodeContents(nodesArray[nodesArray.indexOf(selObj.anchorNode.parentElement) + i]);
                    ranges.push(newRng.cloneRange());
                }

            }
                        
        }
            
        // 5) Surround the range(s) with tags & 6) Toggle '.hilited' class for the tags
        surroundIt();

        //What happens when a highlight is selected again? Or when it's clicked?
        // Possibility: toggle the highlighting on mouseover
        // $(".hilited").mouseenter(function(){
        //     $(this).toggleClass("hilited");
        // });

        // $(".hilited").mouseleave(function(){
        //     $(this).toggleClass("hilited");
        // });

        // 7) Collapse any remaining selection
        document.getSelection().collapse();

//      // III) Put selection text into a margin popover
//      // 1) Get rid of any extra whitespace and/or carriage returns
            
//      // 2) Create a popover
//          $(selObj.anchorNode.parentElementanchorObj).attr("data-toggle", "popover");
//          $(selObj.anchorNode.parentElementanchorObj).attr("data-content", "Hi again!");
//          $(selObj.anchorNode.parentElementanchorObj).popover('show');

//      // 3) Populate popover with selection text

//      // 4) Include Twitter and Facebook sharing buttons
//         // TODO - push range location data for each selection to an array/object/json-file
//         // And put in an animation for the highlighting/unhighlighting
    };

    var parseHTML = function(str) {
        var tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = str;
        return tmp.body.children;
    };

    var makeHighligtedSpan = function(){
        var el = document.createElement("span");
        el.classList.toggle("hilited");
        return el;
    };

    // This happens when the person finishes highlighting
    $("p").mouseup(function(){

        // Big if: see if the selection already contains highlighting

        // If yes, remove highlighting tags before proceeding

        // If no, just proceed!
        liteItUp();

    });

    // $(".hilited").mouseenter(function(){
    //     $(this).toggleClass("hilited");
    // });

    // $(".hilited").mouseleave(function(){
    //     $(this).toggleClass("hilited");
    // });

        // IV) Extend or eliminate highlights when they are included in selections
        // 1) Determine whether a selected node includes a highlight
        // 2) If the whole selection is a highlight already, remove the highlight
        // element.outerHTML = element.innerHTML
//

});