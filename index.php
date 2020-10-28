<?php
/**********************************************************
 * 
 * Project: Elin Kurtsdotter Portfolio
 * 
 * Written by Elin Kurtsdotter / Webbutveckling III Miun HT2020
 * 
************************************************************/
include("includes/config.php");
include("includes/header.php");



$mail = "";
$password = "";

// check if user is logged in. go to content.php if true
if(isset($_POST["username"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username == "elin" && $password == "password") {
        $_SESSION['username'] = $username;
        header("location:content.php");
    } else {
        $message = "<p class='error_msg'>Fel användarnamn eller lösenord.</p>";
    }
}


// show if not logged in
if(!isset($_SESSION['username'])) {?>   
    <!-- Login form -->
    <main>
    <div class="formBox">
        <h1>Logga in!</h1>
        <form method="post" id="logInBox" class="forms">
            <?php if(isset($message)) {echo $message;} ?>
            <br>
            <input type="text" class="input_field" name="username" placeholder="Användarnamn">
            <br>
            <input type="password" class="input_field" name="password" placeholder="Lösenord" id="password">
            <br>
            <br>
            <input type="checkbox" onclick="showPassword()">Visa lösenordet
            <br>
            <br>
            <input type="submit" name="loginButton" value="Logga in" class="btn"> 
            <br>
            
        </form>
    </div><?php
} else {
    header("location:content.php");
}





include("includes/footer.php");