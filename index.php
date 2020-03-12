<!DOCTYPE html>
<html lang="en">
	<head>
		<title>VaahVue</title>
		<meta charset="UTF-8">
		<meta name=description content="">
		<meta name=viewport content="width=device-width, initial-scale=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">


		<meta name="csrf-token" id="_token" content="xRtD1NLfWGPIcTm5zfKleisfpynMRSezUuu2HmeL">

		<meta name="current-url" id="current_url" content="http://localhost/vaahvue/">
		<meta name="debug" id="debug" content="1">

        <?php
        $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        ?>
		<base href="<?php echo $actual_link; ?>">

		<link href="assets/css/backend.css" rel="stylesheet" media="screen">


	</head>
	<body>


		<div id="app">
			<router-view></router-view>
		</div>




		<script src="assets/builds/ui.js"></script>

	</body>
</html>