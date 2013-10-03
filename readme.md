
//------------------------------------------------------------------------------
//  Stale Database Tags

> avatarPath

db.collection.update( { field: { $exists: true } }, {$unset: { field : 1 } }, false, true)

//  'field' is your deprecated field and collection is the collection it was removed from.
//  The false and true are at the end because you need to enable multi update so that the query updates all of the documents in the collection (not just the first match) and the general update command is of the form db.collection.update( criteria, objNew, upsert, multi ).


//------------------------------------------------------------------------------
//  API Dependencies
https://developers.filepicker.io/home/



//------------------------------------------------------------------------------
//  Mongo Shell Scripts

How to drop a corrupt server-side database of a running Meteor app
# meteor; meteor mongo;
> show dbs; db use meteor; show collections; db.anatomy.drop(); exit


