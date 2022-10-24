document.write("Navigator <b>appCodeName</b>: " +navigator.appCodeName + "<br>");
document.write("Navigator <b>appName</b>: " +navigator.appName + "<br>");
document.write("Navigator <b>appVersion</b>: " +navigator.appVersion + "<br>");
document.write("Navigator <b>language</b>: " +navigator.language + "<br>");
document.write("Navigator <b>platform</b>: " +navigator.platform + "<br>");
document.write("Navigator <b>product</b>: " +navigator.product + "<br>");
document.write("Navigator <b>UserAgent</b>: " +navigator.userAgent + "<br>");
document.write("Navigator <b>cookies</b>: " +navigator.cookieEnabled + "<br>");
document.write("Navigator <b>onLine</b> (solo IE): " +navigator.onLine + "<br>");

if(navigator.javaEnabled()){
  document.write("El navegador esta preparado")
} else {
  document.write("no")
}