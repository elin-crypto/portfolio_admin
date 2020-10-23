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
    
if(isset($_SESSION['username'])) {


?>


<main>

    
    <!-- **********************************
        UTBILDNING 
    ********************************** -->
    <h1>Utbildning</h1>
    <table class="table">
        <thead>
            <td>Utbildning</td>
            <td>Lärosäte</td>
            <td>Start</td>
            <td>Slut</td>
        </thead>
        <!-- insert courses from api -->
        <tbody id="education"></tbody>
    </table>

    <h3 id="showEducationForm">Lägg till ny kurs</h3>

        <form action="post" id="addEducationForm">
            <?php if(isset($messageEdu)) {echo $messageEdu;} ?>
            <!--<label for="eduName">Utbildning</label>
            <br>-->
            <input type="text" name="eduName" id="eduName" placeholder="Utbildning">
            <br>
            <!--<label for="school">Lärosäte</label>
            <br>-->
            <input type="text" name="school" id="school" placeholder="Lärosäte">
            <br>
            <!--<label for="eduStart">Startade</label>
            <br>-->
            <input type="date" name="eduStart" id="eduStart" 
            min="2000-01-01" max="2025-12-31" >
            <br>
            <!--<label for="eduStop">Slutade</label>
            <br>-->
            <input type="date" name="eduStop" id="eduStop" 
            min="2000-01-01" max="2025-12-31" >
            <br>
            <span id="addEducation" class="btn">Lägg till utbildning</span> <span class="btn" id="hideEducation">Dölj formulär</span>

        </form>


    <!-- **********************************
        ARBETE 
    ********************************** -->
    <h1>Arbetslivserfarenhet</h1>
    <table class="table">
        <thead>
            <td>Arbetsgivare</td>
            <td>Titel</td>
            <td>Stad</td>
            <td>Start</td>
            <td>Slut</td>
        </thead>
        <!-- insert courses from api -->
        <tbody id="work"></tbody>
    </table>

    <h3 id="showWorkForm">Lägg till nytt jobb</h3>

    <form action="post" id="addWorkForm">
        <input type="text" name="workPlace" id="workPlace" placeholder="Arbetsgivare">
        <br>
        <input type="text" name="workTitle" id="workTitle" placeholder="Titel">
        <br>
        <input type="text" name="workCity" id="workCity" placeholder="Stad">
        <br>
        <input type="date" name="workStart" id="workStart" min="2000-01-01" max="2025-12-31" >
        <br>
        <input type="date" name="workStop" id="workStop" min="2000-01-01" max="2025-12-31" >
        <br>
        <span id="addWork" class="btn" >Lägg till jobb</span> <span class="btn" id="hideWork">Dölj formulär</span>
    </form>


    <!-- **********************************
        WEBBPLATSER 
    ********************************** -->    
    <h1>Webbplatser jag byggt</h1>

    <div id="websites" contenteditable="true">Hej jag testar </div>
    
    <h3 id="showWebsiteForm">Lägg till ny webbplats</h3>
    <form action="post" id="addWebsiteForm" enctype="multipart/form-data">
        <input type="hidden" name="MAX_FILE_SIZE" value="700000"> <!-- Max 700kb storlek-->
        <input type="text" name="wsTitle" id="wsTitle" placeholder="Titel">
        <br>
        <input type="text" name="wsUrl" id="wsUrl" placeholder="Url">
        <br>
        <input type="text" name="wsDescription" id="wsDescription" placeholder="Beskrivning">
        <br>
        <input type="file" name="file" id="file">
        <br>
        <span id="addWebsiteBtn" class="btn" >Lägg till webbplats</span> <span class="btn" id="hideWebsite">Dölj formulär</span>
    </form>

<?php
} else {
    ?>
    <div id="login_ftw">
        <h1>Du måste logga in för att se den här sidan.</h1>
        <h3><a href="index.php"> Klicka här</a></h3>
    </div>
    <?php
}
include("includes/footer.php");