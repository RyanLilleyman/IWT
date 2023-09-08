function injectNav(navHtml) {
  //Fetch the navbar content and insert it into the page
  fetch(navHtml)
    .then(function (response) {
      return response.text();
    })
    .then(function (content) {
      document.getElementById("navbar-placeholder").innerHTML = content;
    })
    .catch(function (error) {
      console.error("Could not fetch nav.", error);
    });
}
injectNav("/src/routes/navBar.html");
