$(document).ready(function() {

    function makeHighligtedSpan(){
        var el = document.createElement("span");
        el.setAttribute("data-hilited", "yes");
        return el;
    }

    function singleNode(){
            return ( selObj.focusNode == selObj.anchorNode );
        }

    // really can't use either of these since the second one is too general
    // var reggie1 = /<span class=\"hilited\">/g;
    // var reggie2 = /<\/span>/g;

    function liteItUp1(){

        //The function should:
        // I) create a selection variable and an array for ranges 
        var
            selObj = document.getSelection(),
            ranges = [];

        // II) add tags (w/ or w/o custom classes/attributes) to those selections
        // The essentials of this part are the following:
        // 1) See whether the selected text is in a single node
        var
            nodesArray = Array.prototype.slice.call(document.querySelectorAll("p"));

        if ( singleNode() ) {
            
        // 2) If yes, jump to step 5. If no, proceed to step 3            
            ranges.push(selObj.getRangeAt());
            ranges.forEach(function( element, idx, arr ){
                element.surroundContents(makeHighligtedSpan());
            });
        } else {
        // 3) Count the number of nodes across which the selected text spans
            var nodeCount = nodesArray.indexOf(selObj.focusNode.parentElement) - nodesArray.indexOf(selObj.anchorNode.parentElement);
            // old jquery version
            // var nodeCount = $('p').index(selObj.focusNode.parentElement) - $('p').index(selObj.anchorNode.parentElement);
            if (nodeCount == 1) {
                var 
                    newRangeFirst = selObj.getRangeAt().cloneRange(), 
                    newRangeLast = newRangeFirst.cloneRange();
                newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
                newRangeLast.setStart( newRangeLast.endContainer, 0 );
                ranges.push( newRangeFirst );
                ranges.push( newRangeLast );
                ranges.forEach(function( element, idx, arr ){
                    element.surroundContents(makeHighligtedSpan());
                });
            } else {
                var 
                    newRangeFirst = selObj.getRangeAt().cloneRange(), 
                    newRangeLast = newRangeFirst.cloneRange(),
                    newRng = document.createRange();
                newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
                newRangeLast.setStart( newRangeLast.endContainer, 0 );
                ranges.push( newRangeFirst );
                ranges.push( newRangeLast );

                for ( var i = nodeCount-1; i > 0; i-- ) {
                    newRng.selectNodeContents(nodesArray[nodesArray.indexOf(selObj.anchorNode.parentElement) + i]);
                    // old jquery version
                    // newRng.selectNodeContents($('p')[$('p').index(selObj.anchorNode.parentElement) + i]);
                    ranges.push(newRng.cloneRange());
                }

                ranges.forEach(function( element, idx, arr ){
                    element.surroundContents(makeHighligtedSpan());
                });

            }
          
        // 4) Determine the ranges of the selected text for each node
        // Now figure out how to get highlighting for the nodes in between the first and last ones          
        }
            
        // 5) Surround the range(s) with tags & 6) Toggle '.hilited' class for the tags
        //selObj.getRangeAt().surroundContents(makeHighligtedSpan());

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
    }

    // This happens when the person finishes highlighting
    $("p").mouseup(function(){
        // function isHilited(){
        //     var selObj1 = document.getSelection();
        //     selObj1.anchorNode.parentElement.innerHTML.match(reggie1);
        // }

        // if (isHilited() && ) {
        //     [element].outerHTML = [element].innerHTML
        //     liteItUp1();
        //     return;
        // }

        // if (isHilited()) {
        //     [element].outerHTML = [element].innerHTML
        //     liteItUp1();
        //     return;
        // }

        liteItUp1();
        return;
    });


});

    //What happens when a highlight is selected again? Or when it's clicked?
    //$(".hilited").mouseenter(function(){
    //    $(this).toggleClass("hilited");
    //});

    //$(".hilited").mouseleave(function(){
    //    $(this).toggleClass("hilited");
    //});

        // IV) Extend or eliminate highlights when they are included in selections
        // 1) Determine whether a selected node includes a highlight
        // 2) If the whole selection is a highlight already, remove the highlight
        // element.outerHTML = element.innerHTML
//
// a few possibilities to get rid of highlights...
// -split by regexes of span tags and concat
// -custom attribute for the spans