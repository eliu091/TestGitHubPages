$(document).ready(function () {
  // code here
  $('#side-progress-bar').click(function () {
    $('#progress-bar-entity').css({display: 'block'})
    $('body').addClass('noScroll')
  })

  $('#close-side-progress-bar').on('click', function () {
    $('#progress-bar-entity').css({display: 'none'})
    $('body').removeClass('noScroll')
  })

  $('#exampleModal').off('shown.bs.modal').on('shown.bs.modal', function (e) {      
      $('body').addClass('noScroll');
  });

    $('#exampleModal').off('hide.bs.modal').on('hide.bs.modal', function (e) {      
      $('body').removeClass('noScroll');
  });
})
