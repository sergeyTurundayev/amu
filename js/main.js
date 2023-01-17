document.addEventListener('DOMContentLoaded', () => {

  let landing = false;
  if(document.querySelectorAll('.landing').length > 0){
    landing = true;
  }

  const headerNavLinks = document.querySelectorAll('.header-nav a');

  headerNavLinks.forEach((element) => {
    element.addEventListener('click', (event) => {

      if(landing){
        event.preventDefault();
        let pathname = '';

        if(event.target.nodeName == 'I'){
          pathname = 'intro';
        }else{
          pathname = event.target.pathname.split('/')[1];
        }

        let scrollEl = document.querySelector('#' + pathname);

        if(scrollEl){
          $("html, body").animate(
            {
              scrollTop: parseInt( document.querySelector('#' + pathname).offsetTop - 57),
            },
            600
          );
        }
      }

    });
  });

});




// getCookie
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// setCookie
function setCookie(name, value, options = {}) {

  options = {
    path: "/",
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}