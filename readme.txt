METEOR DEPENDENCIES

meteor remove insecure
meteor add accounts-password
meteor add accounts-ui
meteor remove autopublish
meteor add less
meteor add stylus



STYLE GUIDE

1.  File Names
All filenames should be lower case, with whitespaces filled with dots.  Example:

page.guest.less
tag.filter.js
page.visualization.html


2.  Javascript Function Names
All function names should be camelCase.


3.  Style Class Names
CSS classes should be in back-bone-case.  When possible, syntax keywords should be selected and used to describe the layout.

<img class="dotted drop-zone with-rounded-corners" id="drop_zone" src="images/placeholder-240x240.gif" />


4.  Javascript Variables
All function names should be camelCase.


5.  Give custom names to objects instead of accepting default object names.
BAD:   menuItem3
GOOD:  fileOpenMenuItem

6.




//------------------------------------------------------------------------------
//  Stale Database Tags

> avatarPath

db.collection.update( { field: { $exists: true } }, {$unset: { field : 1 } }, false, true)

//  'field' is your deprecated field and collection is the collection it was removed from.
//  The false and true are at the end because you need to enable multi update so that the query updates all of the documents in the collection (not just the first match) and the general update command is of the form db.collection.update( criteria, objNew, upsert, multi ).


//------------------------------------------------------------------------------
//  Help Needed

- Translate Zurb Foundation from .sass to .styl
- Translate Zurb Foundation Icons .sass to .styl


//------------------------------------------------------------------------------
//  API Dependencies
https://developers.filepicker.io/home/



//------------------------------------------------------------------------------
//  Mongo Shell Scripts
How to drop a corrupt server-side database of a running Meteor app
# meteor; meteor mongo;
> show dbs; db use meteor; show collections; db.anatomy.drop(); exit


