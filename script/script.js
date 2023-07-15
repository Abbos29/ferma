
// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.popup-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });

  // Функция для открытия модального окна 1
  $('#btn1').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 1
  $('#btn2').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal2'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 1
  $('#btn3').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal3'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 1
  $('#btn4').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal4'
      },
      type: 'inline'
    });
  });

});


