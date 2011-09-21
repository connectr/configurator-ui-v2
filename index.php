<?php
/**
* @package   Configurator Component
* @author    Prothemer http://www.prothemer.com
* @copyright Copyright (C) 2008 - 2009 Web Monkeys Design Studio CC.
* @license   http://www.gnu.org/copyleft/gpl.html GNU/GPL
* @desc      Originally based on Tatami from Ninja Forge. http://www.ninjaforge.com
*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title>Configurator</title>
	<!--<link rel="stylesheet" type="text/css" href="media/css/configurator.css.php" />-->
	<script type="text/javascript" src="media/js/configurator.js.php"></script>
	<link rel="stylesheet" type="text/css" href="media/css/layout.css" />
	<link rel="stylesheet" type="text/css" href="media/css/tabs.css" />
	<link rel="stylesheet" type="text/css" href="media/css/shelf.css" />
	<link rel="stylesheet" type="text/css" href="media/css/slider.css" />
	<link rel="stylesheet" type="text/css" href="media/css/pane.css" />
</head>
<body>
	<div id="cfg-wrap">
		<div id="cfg-branding">
			<?php include ('includes/branding.php'); ?>
		</div>
		<div id="cfg-shelf">
			<?php include ('includes/shelf.php'); ?>
		</div>
		<div id="cfg-main">
			<?php include ('includes/tabs.php'); ?>
			<a href="#" id="cfg-mode">Development Mode</a>
		</div>
		<div id="cfg-footer">
			<?php include ('includes/footer.php'); ?>
		</div>
	</div>
	<div id="tooltip"></div>
	
</body>
</html>