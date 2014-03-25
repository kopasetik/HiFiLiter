A sequential list of the fcns involved in the highlighting process

Grokking those DOM/Jquery properties!

case 1: the whole selection has no hilighter tag

Cray banh mi artisan scenester Neutra, freegan McSweeney's jean shorts 8-bit semiotics Marfa bespoke bitters.

-hilite the selection

case 2: The whole selection is already in a highlighter tag

<hilited> Cray banh mi artisan scenester Neutra, freegan McSweeney's jean shorts 8-bit semiotics Marfa bespoke bitters. </hilited>

-figure out that it's hilited
-get rid of the highlighter tag

case 3: The beginning/middle/end of a selection is already in a highlighter tag

<hilited> Cray banh mi artisan scenester Neutra, freegan </hilited> McSweeney's jean shorts 8-bit semiotics Marfa bespoke bitters.
Cray banh mi artisan scenester Neutra, <hilited>freegan McSweeney's jean shorts 8-bit</hilited> semiotics Marfa bespoke bitters.
Cray banh mi artisan scenester Neutra, freegan McSweeney's <hilited>jean shorts 8-bit semiotics Marfa bespoke bitters.</hilited>

-identify the contained highlighter tag
-get rid of the contained highlighter tag
-hilite the selection

case 4: Disparate parts of a selection are in a highlighter tag

Cray banh mi <hilited>artisan scenester</hilited> Neutra, freegan <hilited>McSweeney's jean</hilited> shorts 8-bit semiotics Marfa bespoke bitters.
-identify the contained highlighter tags
-get rid of the contained highlighter tags
-hilite the selection
