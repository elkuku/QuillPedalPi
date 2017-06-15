<?php

$response = new stdClass();

$response->timestamp = time();
$response->version = 'n/a';

$path = '.git/refs/heads/master';

if (file_exists($path))
{
	$response->version = trim(file_get_contents($path));
}

header('Content-Type: application/json');

echo json_encode($response);
