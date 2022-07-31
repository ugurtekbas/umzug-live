let cookieName = "gutCookie2";
let valueCreate = "rememberVisitor";
let cookieDays = 365;
let cookieExists = doesLocalCookieExist(cookieName);

function createLocalCookie(cookieName, valueCreate, cookieDays) {
  if (cookieDays) {
    var date = new Date();
    date.setTime(date.getTime() + cookieDays * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = cookieName + "=" + valueCreate + expires + "; path=/";
}

function doesLocalCookieExist(cookieName) {
  var cookieNameEQ = cookieName + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(cookieNameEQ) == 0) return c.substring(cookieNameEQ.length, c.length);
  }
  return null;
}

function closeBannerSetCookie() {
  //gtag('event', 'Close banner button click', { 'event_category': 'Button click', 'event_label': 'Banner close', 'valueCreate': 1 })
  document.getElementById("cookie-banner").style.display = "none";
  createLocalCookie(cookieName, valueCreate, cookieDays);
}

// display banner but delete it and set cookie on closing click
if (!cookieExists) {
  document.getElementById("cookie-banner").style.display= "flex";
  document.getElementById("cookie-close").addEventListener("click", closeBannerSetCookie);
} else {
  document.getElementById("cookie-banner").style.display = "none";
}
