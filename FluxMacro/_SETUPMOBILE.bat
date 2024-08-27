<!-- :: Batch section
@echo off
setlocal

@REM adb devices > tmpFile 
@REM set /p devices= < tmpFile 
@REM del tmpFile 
@REM echo %devices%

FOR /F "tokens=*" %%g IN ('adb devices') do (SET DEVICES=%%g)
@REM echo %DEVICES%

echo Select an option:
for /F "delims=" %%a in ('mshta.exe "%~F0"') do set "HTAreply=%%a"
echo user device name: "%HTAreply%"
adb -s "%HTAreply%" reverse tcp:8081 tcp:8081
goto :EOF

:: adb -s 354e544658463098 reverse tcp:8081 tcp:8081
-->

<HTML>
<HEAD>
<HTA:APPLICATION 
     ID=”objTestHTA”
     APPLICATIONNAME=”Setup Mobile Device for Dev”
     SINGLEINSTANCE=”yes”
>
<title>Setup Mobile Device for Dev</title>
<SCRIPT language="JavaScript">
window.resizeTo(500,350);
var fso = new ActiveXObject("Scripting.FileSystemObject");

function closeHTA(reply){
   fso.GetStandardStream(1).WriteLine(reply);
   window.close();
}

</SCRIPT>
</HEAD>
<BODY>
    <h1>Mobile Device Dev Setup</h1>
    <h3>Devices:</h3>
    <p>Below, a list of all connected devices will appear</p>
    <!--<p>A message box with all devices will appear. Please selecte the proper device and submit it below:</p>-->
    <pre><code><p id="txt"></p></code></pre>
    <script language="JavaScript">
        var wss = new ActiveXObject("Wscript.Shell");
        var env = wss.Environment("Process");
        document.getElementById("txt").innerHTML=env("DEVICES");
    </script>
    <p>Please copy your device and submit it below:</p>
    <input type="text" id="devicename"/>
    <button onclick="closeHTA(document.getElementById('devicename').value.replace(' ',''))">Submit</button>
</BODY>
<!--<script language="VBScript">

    Set Env = CreateObject("Wscript.Shell").Environment("Process")
    Set StdOut = CreateObject("Scripting.FileSystemObject").GetStandardStream(1)

    MsgBox Env("DEVICES")
    StdOut.Write("response")

    Set Env = Nothing
    Set StdOut = Nothing

</script>-->
</HTML>