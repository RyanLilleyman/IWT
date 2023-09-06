function injectNav(navHtml: string) {
  //Fetch the navbar content and insert it into the page
  fetch(navHtml)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("navbar-placeholder").innerHTML = content;
    })
    .catch((error) => {
      console.error("Could not fetch nav.", error);
    });
}

injectNav("/midterm/src/routes/navBar.html");
