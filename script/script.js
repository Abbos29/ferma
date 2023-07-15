
// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.popup-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });


  $('#btnBalance').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalBalance'
      },
      type: 'inline',
      removalDelay: 3,
      closeOnBgClick: false,
    });
  });

  $('#btnDepos').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalDepos'
      },
      type: 'inline',
    });
  });

  $('#btnVivod').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalVivod'
      },
      type: 'inline',
    });
  });

  $('#btnReferal').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalReferal'
      },
      type: 'inline'
    });
  });

  $('#btnLogin').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalLogin'
      },
      type: 'inline'
    });
  });

  $('#btnOut').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalOut'
      },
      type: 'inline'
    });
  });



  $('#btn1').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });


});


