# get-mod-deps
# Gets module dependencies for the given module


This module takes the name of a package published on npm and returns an array of the dependencies of the given module in an array.

## Usage

So to get the dependencies of grunt do:

``` js

var getDependencies = require("get-mod-deps");

var dependencies = getDependencies("grunt");

```

and dependencies should be
