*CURRENT STATUS*
Figuring out: how to make highlights permanent

*COMING SOON*
-Updates to RoR backend logic
-Twitter tie-in
-Chrome LocalStorage
-Saving highlights (via offsets, node #s, & local storage)
-Possible use of the rangy plugin for ranges/selections. Hopefully a temporary fix.

*WORK IN PROGRESS*
This will be a plugin for highlighting text on your blog and news site. The default will be that it highlights text yellow and copies the text to a social media sharing feature.

As foreseen, it will be required that users employ special tags/attributes for their article paragraphs and possibly incorporate some other light html/css/javascript.

Highlight solution has been homegrown thus far, but may begin to use rangy or another tool (temporarily!) for the most complete solution.

Grrr. Need to fix backwards highlighting. Also, need to fix highlighting where there's a bold/italic/etc element in the middle of a paragraph element.

*TARGETS*
complete functionality for highlighting between paragraphs
-in progress. highlighting of across paragraphs now possible(!), but now there are the questions of 1) unhighlighting highlighted passages 2) highlighting from the middle of one tag body(?) to the middle of another.
insert popovers
push range location data for each selection to an array/object/json-file