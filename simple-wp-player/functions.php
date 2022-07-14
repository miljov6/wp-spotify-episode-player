<?php

function spotify_episodes() {
     include( get_stylesheet_directory() . '/inc/spotify.php');
 }
 add_shortcode ('spotify_ep' , 'spotify_episodes');

function itunes_episodes() {
     include( get_stylesheet_directory() . '/inc/itunes.php');
 }
 add_shortcode ('itunes_ep' , 'itunes_episodes');
