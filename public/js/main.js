(function(document) {
  // Sidebar
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);

  // Post crazy image
  $(".js-crazy-image-cta").on('click', function(e){
    e.preventDefault();
    $(".js-text-explanation-container").toggle();
  });
})(document);
