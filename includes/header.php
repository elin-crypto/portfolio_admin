<!--/**********************************************************
 * 
 * Project: Elin Kurtsdotter Portfolio
 * 
 * Written by Elin Kurtsdotter / Webbutveckling III Miun HT2020
 * 
************************************************************/-->
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elins Portfolio</title>
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <!-- FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bitter&display=swap" rel="stylesheet">
    <!-- FAVICON -->
    <link rel="shortcut icon" href="images/favicon_fbk.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon_fbk.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon_fbk.png" type="image/png">
    
</head>
<body>

    <header id="pageHeader">



        <div id="logo"><a href="index.php">elins <span class="colorize">portfolio</span> </a></div>

        <?php

            if(isset($_SESSION['username'])) {?>
                <form action="index.php" method="post" id ="logoutButton">
                    <input type="submit"  class="btn loggedIn" name="logout" value="Logga ut"> 
                </form>
            <?php 
            }
        

        // If logout is pressed
        if(isset($_POST["logout"])){
            session_unset();
            session_destroy();

            header("location:index.php");
            exit();
        } ?>


    </header>
    <div id="container">