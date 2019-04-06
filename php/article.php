<?php
$articleUrl="../files/".$_GET['xmlUrl'].".xml";
$xslDoc = new DOMDocument();
$xslDoc->load("../files/style.xsl");
$xmlDoc = new DOMDocument();
$xmlDoc->load($articleUrl);
$proc = new XSLTProcessor();
$proc->importStylesheet($xslDoc);
echo $proc->transformToXML($xmlDoc);
?>