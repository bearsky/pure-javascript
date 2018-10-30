window.onload = function () {
  let buttonText = netlifyIdentity.currentUser() ? netlifyIdentity.currentUser().user_metadata.full_name : "Login";
  document.getElementsByClassName("netlify-identity-button")[0].innerText = buttonText;
};
