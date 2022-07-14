<?php

$fmt = datefmt_create("de_DE", IntlDateFormatter::LONG, IntlDateFormatter::NONE, 'Europe/Berlin', IntlDateFormatter::GREGORIAN);

$client_id = '***';
$client_secret = '***';


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret)));
$result=curl_exec($ch);
$result = json_decode($result, true);
curl_close($ch);


$id = '***';
$limit = '50';
$spotifyURL = 'https://api.spotify.com/v1/shows/***';
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
<style>

	@import url('https://fonts.googleapis.com/css2?family=Faustina&family=Overpass&family=Roboto:wght@400&display=swap');
	
    @font-face {
        font-family: Circular;
        src:url("circular-std-medium-500.ttf");
    }

    .spotify {
        background:#ffffff;
        border-radius: 0px;
        margin: 20px 10px;
        max-width: 100%;

    }
    .spotify h4 {
        color: #000000;
        font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 30px;
		font-family: "Faustina", sans-serif;
		margin-bottom: 12px;
        padding-top: 5px;
    }

    .spotify h5 {
		color: #4e4e4e;
		font-size: 19px;
		line-height: 29px;
		font-family: "Faustina", sans-serif;
		margin-bottom: 0px;
	}

    .spotify p {
        color: #404040;
        font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 30px;
		font-family: 'Overpass', sans-serif;
		margin-bottom: 32px;
    }
    .spotify a {
        color: #5BC5F2;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 30px;
		font-family: 'Overpass', sans-serif;
    }
	
	.description {
		padding-top: 15px;
	}
	.controls {
		justify-content: center;
    display: flex;

	}
    div.control-container {
        margin-top: 2px;
        padding-bottom: 2px; 
		display: grid;
		clear: left;
	}
    div.control-container div.amplitude-play-pause {
        width: 40px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
    }
    div.control-container div.amplitude-play-pause.amplitude-paused {
        background: url(".././wp-content/themes/Impreza-child/inc/play.svg");
        background-size: cover; }
    div.control-container div.amplitude-play-pause.amplitude-playing {
        background: url(".././wp-content/themes/Impreza-child/inc/pause.svg");
        background-size: cover; }
	div.control-container div.amplitude-next-episode {
        width: 40px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
		 background: url(".././wp-content/themes/Impreza-child/inc/next.svg");
        background-size: cover;
    }
	div.control-container div.amplitude-previous-episode {
        width: 40px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
		 background: url(".././wp-content/themes/Impreza-child/inc/previous.svg");
        background-size: cover;
    }
	div.control-container div.amplitude-playback-speed {
        width: 72px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
		 background: url(".././wp-content/themes/Impreza-child/inc/forward-1.svg");
        background-size: cover;
    }
	div.control-container div.amplitude-playback-speed-15 {
        width: 72px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
		 background: url(".././wp-content/themes/Impreza-child/inc/forward-15.svg");
        background-size: cover;
    }
	div.control-container div.amplitude-playback-speed-20 {
        width: 72px;
        height: 40px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
		 background: url(".././wp-content/themes/Impreza-child/inc/forward-2.svg");
        background-size: cover;
    }
    div.control-container div.meta-container {
        float: left;
        width: calc(100% - 84px);
        text-align: center;
        color: white;
        margin-top: 0px; }
    div.control-container div.meta-container span[data-amplitude-song-info="name"] {
        font-family: 'Overpass', sans-serif;
        font-size: 16px;
        color: #fff;
        display: block;
    }
	.song-title {
        font-family:'Overpass', sans-serif;
        font-size: 12px;
		margin-bottom: -9px;
        color: #000;
        display: block;
    }
    div.control-container div.meta-container span[data-amplitude-song-info="artist"] {
        font-family: 'Overpass', sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: #fff;
        display: block; }
    div.control-container:after {
        content: "";
        display: table;
        clear: both; }

    div.time-container {
        opacity: 0.5;
        font-family: 'Overpass', sans-serif;
        font-weight: 100;
        font-size: 12px;
        color: #fff;
        height: 15px;
        padding: 0 10px;
		color:#000000;
    }
    div.time-container span.current-time {
        float: left;
        margin-left: 5px; }
    div.time-container span.duration {
        float: right;
        margin-right: 5px; }

    progress.amplitude-song-played-progress {
        background-color: #000000;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 10px;
        display: block;
        cursor: pointer;
        border: none; 
		touch-action: none;
	}
    progress.amplitude-song-played-progress:not([value]) {
        background-color: #000000; }

    progress[value]::-webkit-progress-bar {
        background-color: #000000; }

    progress[value]::-moz-progress-bar {
        background-color: #00a0ff; }

    progress[value]::-webkit-progress-value {
        background-color: #00a0ff; }

    div.bottom-container {
        background-color: #E5EBEC;
        border-bottom-right-radius: 0px;
        width: 100%;
    }

    div#single-song-player {
        border-radius: 0px;
        margin: auto;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-flow: row;
        max-width: 100%;
    }
    div#single-song-player img[data-amplitude-song-info="cover_art_url"] {
        width: 120px;
        height: 120px;
        border-top-left-radius: 0px;
    }
    @media screen and (max-width: 480px) {
        div#single-song-player img[data-amplitude-song-info="cover_art_url"] {
            display: none;
        }
        div#single-song-player {
            max-width: 360px;
        }
        div.control-container div.amplitude-play-pause {
            background-size: cover;
            width: 64px;
            height: 64px; }
        div.control-container div.meta-container {
            width: calc(100% - 74px); }
        div.control-container div.meta-container span[data-amplitude-song-info="name"] {
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            padding: 0 10px;
        }
		.song-title {
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            padding: 0 10px;
		}
        div.bottom-container {
            width: 100%;
            border-radius: 0px;
        }
        div.control-container div.amplitude-play-pause {
            width: 40px;
            height: 40px;
        }
        div.control-container div.meta-container span[data-amplitude-song-info="name"] {
            overflow: hidden;
            white-space: nowrap;
        }
		.spotify p {
		font-size: 16px;
		line-height: 24px;			
    	}
    	.spotify a {
		font-size: 16px;
		line-height: 24px;
    	}
		.spotify h4 {
		font-size: 20px;
		line-height: 28px;
    	}
	
    }
	hr {
		background: #BFBFBF;
		opacity: 0.5;
		height: 1px;
	}
</style>
<?php
for($i=0; $i<count($json["items"]); $i++) {
    $src ='https://open.spotify.com/embed/episode/'.$json["items"][$i]["id"].'?utm_source=generator&theme=0';
?>
<div class="spotify">
     <div class="player" id="single-song-player">
        <img data-amplitude-song-info="cover_art_url"/>
        <div class="bottom-container">
            <progress class="amplitude-song-played-progress" data-amplitude-song-index="<?php echo $i; ?>" id="song-played-progress-<?php echo $i+1; ?>"></progress>

            <div class="time-container">
          <span class="current-time">
            <span class="amplitude-current-minutes" data-amplitude-song-index="<?php echo $i; ?>"></span>:<span class="amplitude-current-seconds" data-amplitude-song-index="<?php echo $i; ?>"></span>
          </span>
                <span class="duration">
                        <span class="amplitude-duration-minutes" data-amplitude-song-index="<?php echo $i; ?>"></span>:<span class="amplitude-duration-seconds" data-amplitude-song-index="<?php echo $i; ?>"></span>
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
					<div class="amplitude-previous-episode" id="previous-<?php echo $i; ?>" data-amplitude-song-index="<?php echo $i; ?>"></div>
				<div class="amplitude-play-pause" id="song-id-<?php echo $i; ?>" data-amplitude-song-index="<?php echo $i; ?>"></div>
				<div class="amplitude-next-episode" id="next-<?php echo $i; ?>" data-amplitude-song-index="<?php echo $i; ?>"></div>
					<div class="amplitude-playback-speed" data-amplitude-song-index="<?php echo $i; ?>"></div>
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