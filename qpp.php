<?php

$response = new stdClass();

$response->version = 'n/a';
$response->hello   = 'dolly';

$path = '.git/refs/heads/master';

if (file_exists($path))
{
	$response->version = file_get_contents($path);
}

header('Content-Type: application/json');

echo json_encode($response);
