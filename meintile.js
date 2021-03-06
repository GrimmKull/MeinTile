var totalDim = 250 + 20;
var maxWidthCoef = 2;

var meintile = {
    grid: [],

	columns: 0,

	lastColumn: 0,

	lastRow: 0,

	count: 0,

	small_count: 0,
	medium_count: 0,
	medium2_count: 0,
	large_count: 0,

	init: function()
	{
		meintile.columns = Math.floor(document.body.clientWidth/totalDim);

		meintile.grid.push(meintile.emptyRow());		
	},

	isMobile: function() {
		var maxDim = meintile.getMaxTileDim();
		return !((document.body.clientWidth/(totalDim*maxDim)) > 1);
	},

	getMaxTileDim: function() {
		var tiles = document.getElementsByClassName('tile');

		var maxDim = 0;
		for(var i = 0; i < tiles.length; i++)
		{
			if (parseInt(tiles[i].dataset['width']) > maxDim)
				maxDim = parseInt(tiles[i].dataset['width']);
		};

		return maxDim;
	},

	emptyRow: function() {
		var emptyRow = [];

		for (var i = 0; i < meintile.columns; i++) {
			emptyRow.push(0);
		};

		return emptyRow;
	},

	placeTiles: function() {
		if (meintile.isMobile())
		{
			$(".tile").each(function() {
				this.classList.add('mobile-tile');
			});
			return;
		}

		var tiles = $(".tile");

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];
			var tileWidth = parseInt(tile.dataset["width"], 10);
			var tileHeight = parseInt(tile.dataset["height"], 10);
			var index = -1;
			var placing = true;

			var searchBellow = 0;
			while(placing)
			{
				//make sure there is no undefined rows
				if (meintile.lastRow + searchBellow + tileHeight >= meintile.grid.length)
				{
					meintile.grid.push(meintile.emptyRow());
				}

				//find one empty space in current row
				index = meintile.hasEmpty(meintile.lastRow + searchBellow);
				if (index == -1)
				{
					if (searchBellow == 0)
						meintile.lastRow++;
					else
						searchBellow++;
					continue;
				}

				var wasUndefined = false;

				//if not enough space continue
				for (var j = 0; j < tileHeight; j++) {						
					for (var k = 0; k < tileWidth; k++) {
						if (meintile.grid[meintile.lastRow + j + searchBellow][index + k] == 1)
						{
							wasUndefined = true;;
						}

						if (meintile.grid[meintile.lastRow + j + searchBellow][index + k] == undefined)
						{
							wasUndefined = true;
						}
					};
				};

				if (wasUndefined)
				{
					searchBellow++;
					continue;
				}

				for (var j = 0; j < tileHeight; j++) {						
					for (var k = 0; k < tileWidth; k++) {
						meintile.grid[meintile.lastRow + j + searchBellow][index + k] = 1;
					};
				};

				/*console.log(tile.style.top, meintile.lastRow, searchBellow, totalDim);
				console.log(tile.style.left, index, totalDim)*/

				tile.style.top = (meintile.lastRow + searchBellow) * totalDim + "px";
				tile.style.left = index * totalDim + "px";

				placing = false;
				searchBellow = 0;
			}
		};
		meintile.centerTiles();
	},

	/* returns index of empty field in row or -1 if there is none */
	hasEmpty: function(row) {
		return meintile.grid[row].toString().replace(/,/g,"").indexOf(0);
	},

	addSmallTile: function(image) {
		meintile.small_count++;
		$('<div/>', {
			id: 'tile-' + (meintile.count + 1),
			'class': 'tile small-tile',
			'data-width': 1,
			'data-height': 1,
			text: meintile.count + 1,
			'style': (image ? "background-image: url(250/" + meintile.small_count + ".jpg); background-size: 250;" : '')
		}).appendTo('.tiles');

		meintile.count++;
	},

	addMediumTile: function(image) {
		meintile.medium_count++;
		$('<div/>', {
			id: 'tile-' + (meintile.count + 1),
			'class': 'tile medium-tile',
			'data-width': 2,
			'data-height': 1,
			text: meintile.count + 1,
			'style': (image ? "background-image: url(500-250/" + meintile.medium_count + ".jpg); background-size: 500 250;" : '')
		}).appendTo('.tiles');

		meintile.count++;
	},

	addMedium2Tile: function(image) {
		meintile.medium2_count++;
		$('<div/>', {
			id: 'tile-' + (meintile.count + 1),
			'class': 'tile medium-2-tile',
			'data-width': 1,
			'data-height': 2,
			text: meintile.count + 1,
			'style': (image ? "background-image: url(250-500/" + meintile.medium2_count + ".jpg); background-size: 250 500;" : '')
		}).appendTo('.tiles');

		meintile.count++;
	},

	addLargeTile: function(image) {
		meintile.large_count++;
		$('<div/>', {
			id: 'tile-' + (meintile.count + 1),
			'class': 'tile large-tile',
			'data-width': 2,
			'data-height': 2,
			text: meintile.count + 1,
			'style': (image ? "background-image: url(500/" + meintile.large_count + ".jpg); background-size: 500;" : '')
		}).appendTo('.tiles');

		meintile.count++;
	},

	centerTiles: function() {
		document.getElementsByClassName("tiles")[0].style.width = totalDim*meintile.columns  + "px";
		document.getElementsByClassName("tiles")[0].style.margin = "auto";
	}
};
