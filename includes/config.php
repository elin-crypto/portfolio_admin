<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();    //Start session
}
    

/* Autoload of classes */
function __autoload($class_name) {
    include "classes/" . $class_name . ".class.php";
} 



// use while developing
error_reporting(-1);            //Report all type of errors
ini_set("display_errors", 1);   //Display all error



