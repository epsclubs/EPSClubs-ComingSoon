<?php
header('Access-Control-Allow-Origin: *');
date_default_timezone_set('America/Los_Angeles');

function connect(){
	$host = 'localhost';
	$db = 'newcomer_epsclubsbetaaccess';
	$user = 'newcomer_epsb';
	$pass = 'epsbetaa';
	return new mysqli($host, $user, $pass, $db);
}

function addEmail($email){
	global $mysqli;
	$stmt = $mysqli->prepare("INSERT INTO `emailing_list` (time_stamp,email) VALUES (?,?)");
	$stmt->bind_param('ss',date("Y-m-d H:i:s"),$email);
	$success = $stmt->execute();
	$stmt->close();

	if ($success) {
		return true;
	} else {
		$this->errorMsg = htmlspecialchars($mysqli->error);
		return false;
	}
}

if(isset($_POST['email'])){
	$mysqli = connect();
	echo addEmail($_POST['email']);
}