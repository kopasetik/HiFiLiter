    var jsonObie = {};

    var jsonRange = [];

    var ranges = [];
    
    function convertToArticleJSON(){
        var artie = {};
        artie["article"] = {"title": document.querySelector("title").text, "url": document.URL};
        return artie;
    }

    function convertToHiliteJSON( str ){
        var hailey = {};
        hailey["highlight"] = {"text": str , "url": document.URL};
        return hailey;
    }

    // jsonRange.forEach(convertToHiliteJSON)
    // jsonRange.forEach

    function sendJSONtoServer( jay ){
        $.ajax({
           url: 'http://localhost:3000/articles.json',
           type: 'POST',
           contentType:'application/json',
           data: JSON.stringify( jay ),
           dataType:'json'
        });
    }

    function makeNewElement( tagStr , attrStr ){
        var el = document.createElement( tagStr );
        if (attrStr){
            el.setAttribute( attrStr , "yes");
            return el;
        }
        return el;
    }
    
    function selObj(){
        return document.getSelection();
    }

    function singleNode( obie ){
        return ( obie.focusNode == obie.anchorNode );
    }

    function surroundAll( arr ){
        arr.forEach(function(element){
                    element.surroundContents(makeNewElement("span", "data-hilited"));
        });
    }

    function makeNodesArray( str ){
        return Array.prototype.slice.call(document.querySelectorAll(str));
    }

    function nodeDiff( arr ) {
        return arr.indexOf(selObj().focusNode.parentElement) - arr.indexOf(selObj().anchorNode.parentElement);
    }

    function reactToNodeCount(){
        var litePNodeArr = makeNodesArray("p");
        var liteDiff = nodeDiff(litePNodeArr);
        if ( liteDiff == 1 ) {
            var 
                newRangeFirst = selObj().getRangeAt().cloneRange(), 
                newRangeLast = newRangeFirst.cloneRange();
            newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
            newRangeLast.setStart( newRangeLast.endContainer, 0 );
            ranges.push( newRangeFirst, newRangeLast );
        } else {
            var 
                newRangeFirst = selObj().getRangeAt().cloneRange(), 
                newRangeLast = newRangeFirst.cloneRange(),
                newRng = document.createRange();
            newRangeFirst.setEnd( newRangeFirst.startContainer, newRangeFirst.startContainer.length );
            newRangeLast.setStart( newRangeLast.endContainer, 0 );
            ranges.push( newRangeFirst, newRangeLast );

            for ( var i = liteDiff-1; i > 0; i-- ) {
                    newRng.selectNodeContents(litePNodeArr[litePNodeArr.indexOf(selObj().anchorNode.parentElement) + i]);
                    ranges.push(newRng.cloneRange());
            }

        }
    }

    function liteItUp(){
        jsonRange.push(selObj().toString().replace(/\n\n/g, " ").trim());
        //The function should:
        // I) create a selection variable and an array for ranges 

        // II) add tags (w/ or w/o custom classes/attributes) to those selections
        // The essentials of this part are the following:
        // 1) See whether the selected text is in a single node
        if ( singleNode(selObj()) ) {
            
        // 2) If yes, jump to step 5. If no, proceed to step 3            
            ranges.push(selObj().getRangeAt());
        } else {
        // 3) Count the number of nodes across which the selected text spans
            reactToNodeCount();
          
        // 4) Determine the ranges of the selected text for each node
        // Now figure out how to get highlighting for the nodes in between the first and last ones          
        }

        // 5) Surround the range(s) with tags & Toggle '.hilited' class for the tags
        surroundAll( ranges );

        // 6) Collapse any remaining selection
        selObj().collapse();
    }

    // III) Put selection text into a margin popover
    // 1) Get rid of any extra whitespace and/or carriage returns
            
    // 2) Create a popover
    // $(selObj().anchorNode.parentElementanchorObj).attr("data-toggle", "popover");
    // $(selObj().anchorNode.parentElementanchorObj).attr("data-content", "Hi again!");
    // $(selObj().anchorNode.parentElementanchorObj).popover('show');

    // 3) Populate popover with selection text

    // 4) Include Twitter and Facebook sharing buttons
    // TODO - push range location data for each selection to an array/object/json-file
    // And put in an animation for the highlighting/unhighlighting

$(document).ready(function() {

            

    // The highlighting happens when the person finishes selecting text
    $("p").mouseup(function(){
        function isHilited( element ){
            return !!element.dataset.hilited;
        }

        // if (isHilited( $(this)) && selObj().containsNode($(this))) {
        //     [element].outerHTML = [element].innerHTML;
            
        //     liteItUp();
        //     return;
        // }

        // if (isHilited()) {
        //     [element].outerHTML = [element].innerHTML;
        //     liteItUp();
        //     return;
        // }

        liteItUp();
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