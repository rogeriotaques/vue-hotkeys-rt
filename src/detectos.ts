var OS = "Unknown";
if (navigator.userAgent.indexOf("Win") != -1) OS = "Windows";
if (navigator.userAgent.indexOf("Mac") != -1) OS = "MacOS";
if (navigator.userAgent.indexOf("X11") != -1) OS = "UNIX";
if (navigator.userAgent.indexOf("Linux") != -1) OS = "Linux";


if(OS != "MacOS"){
    document.getElementById('detectOs1').innerHTML = "Ctr";
    document.getElementById('detectOs2').innerHTML = "Ctr";
    document.getElementById('detectOs3').innerHTML = "Ctr";
    document.getElementById('detectOs4').innerHTML = "Ctr";
}

