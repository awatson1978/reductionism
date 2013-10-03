------------------------------------------------------------------------------
##  Stale Database Tags  

````js
db.collection.update( { field: { $exists: true } }, {$unset: { field : 1 } }, false, true)
````
'field' is your deprecated field and collection is the collection it was removed from.  The false and true are at the end because you need to enable multi update so that the query updates all of the documents in the collection (not just the first match) and the general update command is of the form db.collection.update( criteria, objNew, upsert, multi ).  


------------------------------------------------------------------------------
##  API Dependencies
https://developers.filepicker.io/home/



------------------------------------------------------------------------------
##  Mongo Shell Scripts

How to drop a corrupt server-side database of a running Meteor app
````sh
# meteor; meteor mongo;
> show dbs; db use meteor; show collections; db.anatomy.drop(); exit
````

------------------------
### Licensing

This application is licensed under the Artistic License 2.0.  
http://opensource.org/licenses/Artistic-2.0

If you have any questions about licensing, please contact me at awatson1978@gmail.com

------------------------
### Support
Found this package to be useful?  Consider tipping the package maintainer for their time!  

[![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/awatson1978/)  

