<?php


   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $year = $request->year;
   $imac = $request->imac;

   $myfile = fopen($year.".xml", "w") or die("Unable to open file!");
   fwrite($myfile, $imac);
   fclose($myfile);

   echo($imac);

?>
