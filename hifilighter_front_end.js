$(document).ready(function() {
    var ranges = [];
    
    function nodesArray() {
        return Array.prototype.slice.call(document.querySelectorAll("p"));
    }
        
    function newRangeFirst() {
        return selObj().getRangeAt().cloneRange();
    }

    function newRangeLast() {
        return newRangeFirst().cloneRange();
    }

    function newRng() {
        return document.createRange();
    }

    function nodeCount() {
        return nodesArray().indexOf(selObj().focusNode.parentElement) - nodesArray().indexOf(selObj().anchorNode.parentElement);
    }

    function selObj() {
        return document.getSelection();
    }


    function singleNode() {
        return ( selObj().focusNode == selObj().anchorNode );
    }


    function adjustEdgeRanges() {
        newRangeFirst().setEnd( newRangeFirst().startContainer, newRangeFirst().startContainer.length );
        newRangeLast().setStart( newRangeLast().endContainer, 0 );
    }

    function adjustPushMiddleRanges() {    
        for ( var i = nodeCount()-1; i > 0; i-- ) {
            newRng().selectNodeContents(nodesArray()[nodesArray().indexOf(selObj().anchorNode.parentElement) + i]);
            ranges.push(newRng().cloneRange());
        }
    }

    function pushEdgeRanges() {
        if (singleNode) {
            ranges.push(selObj().getRangeAt());
            return;
        }

        ranges.push( newRangeFirst() );
        ranges.push( newRangeLast() );
        return;
    }

    function makeHighligtedSpan(){
        var el = document.createElement("span");
        el.classList.toggle("hilited");
        return el;
    }

    function surroundIt(){
        ranges.forEach(function( element, idx, arr ){
            element.surroundContents(makeHighligtedSpan());
        });        
    }

    function liteItUp() {

        //The function should:
        // I) add tags (w/ or w/o custom classes/attributes) to those selections

        // The essentials of this part are the following:
        // 1) See whether the selected text is in a single node

        if ( singleNode() ) {
        // 2) If yes, jump to step 4. If no, proceed to step 3
            pushEdgeRanges();
        } else {

        // 3) Determine the ranges of the selected text for each node
            if (nodeCount() == 1) {
                adjustEdgeRanges();
                pushEdgeRanges();                
            } else {
                adjustEdgeRanges();
                adjustPushMiddleRanges();
                pushEdgeRanges();
            }
                        
        }
            
        // 4) Surround the range(s) with tags & toggle '.hilited' class for the tags
        surroundIt();

        // 5) Collapse any remaining selection(s)
        document.getSelection().collapse();
    }
        


    // This happens when the person finishes highlighting
    $("p").mouseup(function(){

        // Big if: see if the selection already contains highlighting

        // If yes, remove highlighting tags before proceeding

        // If no, just proceed!
        liteItUp();

    });

});

        //What happens when a highlight is selected again? Or when it's clicked?
        // Possibility: toggle the highlighting on mouseover
        // $(".hilited").mouseenter(function(){
        //     $(this).toggleClass("hilited");
        // });

        // $(".hilited").mouseleave(function(){
        //     $(this).toggleClass("hilited");
        // });


//      // II) Put selection text into a margin popover
//      // 1) Get rid of any extra whitespace and/or carriage returns
            
//      // 2) Create a popover
//          $(selObj().anchorNode.parentElementanchorObj).attr("data-toggle", "popover");
//          $(selObj().anchorNode.parentElementanchorObj).attr("data-content", "Hi again!");
//          $(selObj().anchorNode.parentElementanchorObj).popover('show');

//      // 3) Populate popover with selection text

//      // 4) Include Twitter and Facebook sharing buttons
//         // TODO - push range location data for each selection to an array/object/json-file
//         // And put in an animation for the highlighting/unhighlighting

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