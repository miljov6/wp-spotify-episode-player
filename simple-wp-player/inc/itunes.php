<?php
$fmt = datefmt_create("de_DE", IntlDateFormatter::LONG, IntlDateFormatter::NONE, 'Europe/Berlin', IntlDateFormatter::GREGORIAN);

$client_id = '***';
$client_secret = '****';


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret)));
$result=curl_exec($ch);
$result = json_decode($result, true);
curl_close($ch);


$id = '****';
$limit = '50';
$spotifyURL = 'https://api.spotify.com/v1/shows/****/episodes?market=DE';
$authorization = 'Authorization: Bearer '.$result["access_token"];
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization ));
curl_setopt($ch, CURLOPT_URL, $spotifyURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:x.x.x) Gecko/20041107 Firefox/x.x");
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$json = curl_exec($ch);
$json = json_decode($json, true);
curl_close($ch);
$podigee = '***';
$podigee_json = file_get_contents($podigee);
$podigee_result = json_decode($podigee_json , true);
?>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/amplitudejs@5.3.2/dist/amplitude.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<?php
$multiplier = count($json["items"]);
for($i=0; $i<count($json["items"]); $i++) {
    $src ='https://open.spotify.com/embed/episode/'.$json["items"][$i]["id"].'?utm_source=generator&theme=0';
?>
<div class="spotify">
     <div class="player" id="single-song-player">
        <img data-amplitude-song-info="cover_art_url"/>
        <div class="bottom-container">
            <progress class="amplitude-song-played-progress" data-amplitude-song-index="<?php echo $multiplier+$i; ?>" id="song-played-progress-<?php echo $multiplier+$i+1; ?>"></progress>

            <div class="time-container">
          <span class="current-time">
            <span class="amplitude-current-minutes" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></span>:<span class="amplitude-current-seconds" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></span>
          </span>
                <span class="duration">
                        <span class="amplitude-duration-minutes" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></span>:<span class="amplitude-duration-seconds" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></span>
				</span>
            </div>

            <div class="control-container">
				
                <div class="meta-container">
                        <div class="song-title">
							<marquee behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
							<?php echo $json["items"][$i]["name"]; ?>
							</marquee>	
								</div>
                    </div>
				<div class="controls">
					<div class="amplitude-previous-episode" id="previous-<?php echo $multiplier+$i; ?>" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></div>
				<div class="amplitude-play-pause" id="song-id-<?php echo $multiplier+$i; ?>" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></div>
				<div class="amplitude-next-episode" id="next-<?php echo $multiplier+$i; ?>" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></div>
					<div class="amplitude-playback-speed" data-amplitude-song-index="<?php echo $multiplier+$i; ?>"></div>
				</div>
            </div>
        </div>
    </div>
    <div class="description">
        <h5><?php  
				$input = $json["items"][$i]["release_date"];
				$date = strtotime($input);
				echo datefmt_format($fmt , $date);?></h5>
        <h4><?php  echo $json["items"][$i]["name"]; ?></h4>
		<p>
        <?php
        $description = $json["items"][$i]["description"];
            preg_match('/^([^.!?]*[\.!?]+){0,2}/', strip_tags($description), $abstract);
        echo $abstract[0];
        //echo $abstract[1];
        ?>
					</p>
    </div>
    <hr>
    </div>
<?php
}
?>
<script>
	window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};
        Amplitude.init({
			"songs": [
                <?php
                $count = count($json["items"])-1;
                for($i=0; $i<count($json["items"]); $i++) {?>
                {
                    "url": "<?php echo $podigee_result["episodes"][$i]["media"]["mp3"]; ?>",
                    "cover_art_url": "<?php echo $podigee_result["episodes"][$i]["coverUrl"]; ?>"
                },
                <?php }?>
				<?php for($i=0; $i<count($json["items"]); $i++) {
					if ($i<($count)){
				?>
				{
                    "url": "<?php echo $podigee_result["episodes"][$i]["media"]["mp3"]; ?>",
                    "cover_art_url": "<?php echo $podigee_result["episodes"][$i]["coverUrl"]; ?>"
                },
				<?php } else { ?>
					{
                    "url": "<?php echo $podigee_result["episodes"][$i]["media"]["mp3"]; ?>",
                    "cover_art_url": "<?php echo $podigee_result["episodes"][$i]["coverUrl"]; ?>"
               		}
					<?php }
				} ?>
				 
				 
            ],
			"playback_speed": 1.0
        });
        <?php
        $count = count($json["items"])-1;
        for($i=0; $i<count($json["items"]); $i++) {?>
        $('#song-played-progress-<?php echo $i+1 ?>').click(function( e ){
                var offset = this.getBoundingClientRect();
                var x = e.pageX - offset.left;
                Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
        });
		$('#previous-<?php echo $i; ?>').click(function(){
			<?php if($i==0) { ?>
			$('#song-id-<?php echo $i; ?>').click();
		<?php } else {?>
			$('#song-id-<?php echo $i-1; ?>').click();
			$('html, body').animate({
                    scrollTop: $("#song-id-<?php echo $i-1; ?>").offset().top-350
                }, 1000);
		<?php }?>
		});
		$('#next-<?php echo $i; ?>').click(function(){
			<?php if($i==(count($json["items"])-1)) { ?>
			$('#song-id-<?php echo $i; ?>').click();
		<?php } else {?>
			$('#song-id-<?php echo $i+1; ?>').click();
			$('html, body').animate({
                    scrollTop: $("#song-id-<?php echo $i+1; ?>").offset().top-350
                }, 1000);
		<?php }?>
		});
		
        <?php }
	$multiplier = count($json["items"]);
	for($i=0; $i<count($json["items"]); $i++) {?>
        $('#song-played-progress-<?php echo $multiplier+$i+1 ?>').click(function( e ){
                var offset = this.getBoundingClientRect();
                var x = e.pageX - offset.left;
                Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
        });
		$('#previous-<?php echo $multiplier+$i; ?>').click(function(){
			<?php if($i==0) { ?>
			$('#song-id-<?php echo $multiplier+$i; ?>').click();
		<?php } else {?>
			$('#song-id-<?php echo $multiplier+$i-1; ?>').click();
			$('html, body').animate({
                    scrollTop: $("#song-id-<?php echo $multiplier+$i-1; ?>").offset().top-350
                }, 1000);
		<?php }?>
		});
		$('#next-<?php echo $multiplier+$i; ?>').click(function(){
			<?php if($i==(count($json["items"])-1)) { ?>
			$('#song-id-<?php echo $multiplier+$i; ?>').click();
		<?php } else {?>
			$('#song-id-<?php echo $multiplier+$i+1; ?>').click();
			$('html, body').animate({
                    scrollTop: $("#song-id-<?php echo $multiplier+$i+1; ?>").offset().top-350
                }, 1000);
		<?php }?>
		});
        <?php }	?>

    </script>

