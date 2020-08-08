document.addEventListener("DOMContentLoaded", function() {
  const resyButton = document.getElementById('resyButton-iOQzewhf5');

  if (resyButton) {
    resyWidget.addButton(resyButton, {"venueId":28405,"apiKey":"GAAOJEOvLVTjIAfUfu19m2OhtPUlLXQ7","replace":true,});
    document.querySelector(".resy-wrapper").querySelector("span[role=button]").classList.add("resy-button");
  }
  return;
});
