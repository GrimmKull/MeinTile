$(function () {
    for (var i = 0; i < 1040; i++) {
		var rand = Math.ceil(Math.random()*1000)%10;

		if (rand >= 0 && rand < 7)
			meintile.addSmallTile();
		else if (rand >= 7 && rand < 8)
			meintile.addMediumTile();
		else if (rand >= 8 && rand < 9)
			meintile.addMedium2Tile();
		else if (rand >= 9)
			meintile.addLargeTile();
	}
 
	meintile.init();
	meintile.placeTiles();

	meintile.centerTiles();
});