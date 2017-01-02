# get-mod-deps
# Gets module dependencies for the given module


This module takes the name of a package published on npm and returns an array of the dependencies of the given module in an array as the first argurment in a callback..

## Usage

So to get the dependencies of grunt do:

``` js

var getDependencies = require("get-mod-deps");

var dependencies = getDependencies("grunt", function(d){
  console.log(d)
});

```
The d is an array which should  have objects like

{ name: 'rimraf', href: '/package/rimraf' }


And the depencencies as of 1/2/2017 the dependencies for grunt should be:
rimraf
path-is-absolute
nopt
minimatch
js-yaml
iconv-lite
grunt-legacy-util
grunt-legacy-log
grunt-known-options
grunt-cli
glob
findup-sync
exit
eventemitter2
dateformat
coffee-script
