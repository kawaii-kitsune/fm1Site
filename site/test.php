<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>STUDIO fm1 105.4-Ραδιοφωνικός Σταθμός Σπουδαστών ΕΛ.ΜΕ.ΠΑ.</title>
<link rel="stylesheet" href="index.css">
<link rel="ICON" href="img/favicon.ico" type="image/ico" />
</head>
<style>
body {
  background-image: url("img/uc.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
<body>
<a href="index.html"><img src="img/logo.png" alt="STUD1O FM1 105.4-Ραδιοφωνικός Σταθμός ΕΛ.ΜΕ.ΠΑ." style="100%" class="center"  /></a><br /><br /><Br />
<div class="center"><p><font color="white">Η ιστοσελίδα του σταθμού μας βρίσκεται σε διαδικασία αναβάθμισης. Παρόλ' αυτά μπορείτε να συνεχίσετε να ακούτε ζωντανά το πρόγραμμα μας 24/7 μέσω ραδιοφώνου στους 105,4 MHz.</font></p></div></iframe></iframe>

<textarea rows="20" cols="40" style="border:none;">
<script type="text/javascript">
var xmlDoc=null;
if (window.ActiveXObject)
{// code for IE
xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
}
else if (document.implementation.createDocument)
{// code for Mozilla, Firefox, Opera, etc.
xmlDoc=document.implementation.createDocument("","",null);
}
else
{
alert('Your browser cannot handle this script');
}
if (xmlDoc!=null)
{
xmlDoc.async=false;
xmlDoc.load("cd_catalog.xml");

document.write("<table border='1'>");

var x=xmlDoc.getElementsByTagName("CD");
for (i=0;i<x.length;i++)
{ 
document.write("<tr>");
document.write("<td>");
document.write(
x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
document.write("</td>");

document.write("<td>");
document.write(
x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
document.write("</td>");
document.write("</tr>");
}
document.write("</table>");
}
</script>
</textarea>
<iframe src="https://www5.cbox.ws/box/?boxid=917512&boxtag=hbfd9d" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" class="center"></iframe>
</body>
</html>
