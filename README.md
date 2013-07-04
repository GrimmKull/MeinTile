#MeinTile

Simple Javascript tile layout for dashboards and galleries.  

version 0.2

##Features

* Create tile grid
* Center the grid
* Mobile friendly layout for screen sizes smaller than the total tile width

##How to use

Add `meintile.css` and `meintile.js` to your html.  
Inside the `div` tag with class *tiles* add your tile in one of the following forms:

**Small tile:**
```
<div class="tile small-tile" data-width="1" data-height="1"></div>
```

**Medium horizontal tile:**
```
<div class="tile medium-tile" data-width="2" data-height="1"></div>
```

**Medium vertical tile:**
```
<div class="tile medium-2-tile" data-width="1" data-height="2"></div>
```

**Large tile:**
```
<div class="tile large-tile" data-width="2" data-height="2"></div>
```

**NOTE:** *Currently MeinTile supports only values of 1 and 2 for the data-width and data-height attributes.*

##Examples

###Colors

Example of simple web site using MeinTile to show 1000 randomized tiles of different colors.

[MeinTile Colors](http://grimmkull.github.io/MeinTile/)


###Galery

Example of simple web gallery showing random images.

*As soon as I find enough free images to fill a large gallery.*