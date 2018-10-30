window.onload = function () {
  document.getElementsByClassName("netlify-identity-button")[0].innerText = "Login";
  console.log(netlifyIdentity.currentUser());
};
