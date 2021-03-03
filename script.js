$(document).ready(function () {
  $(function () {
    function hexFromRGB(r, g, b) {
      var hex = [r.toString(16), g.toString(16), b.toString(16)];
      $.each(hex, function (nr, val) {
        if (val.length === 1) {
          hex[nr] = '0' + val;
        }
      });
      return hex.join('').toUpperCase();
    }
    function refreshSwatchBackground() {
      var red = $('#red').slider('value'),
        green = $('#green').slider('value'),
        blue = $('#blue').slider('value'),
        hex = hexFromRGB(red, green, blue);
      $('#swatch-background').css('background-color', '#' + hex);
    }
    function refreshSwatchText() {
      var red = $('#red').slider('value'),
        green = $('#green').slider('value'),
        blue = $('#blue').slider('value'),
        hex = hexFromRGB(red, green, blue);
      $('#swatch-text').css('color', '#' + hex);
    }

    var sliderColors = {
      textRed: 0,
      textGreen: 0,
      textBlue: 0,
      bgRed: 255,
      bgGreen: 255,
      bgBlue: 255,
    };

    $('#red, #green, #blue').slider({
      orientation: 'horizontal',
      range: 'min',
      max: 255,
      slide: refreshSwatchText,
      change: refreshSwatchText,
    });
    $('#red').slider('value', 0);
    $('#green').slider('value', 0);
    $('#blue').slider('value', 0);

    function changeSliderValue(ui, textColor, bgColor) {
      if ($('input[id="radio-1"]').prop('checked') == true) {
        sliderColors[textColor] = ui.value;
      }
      if ($('input[id="radio-2"]').prop('checked') == true) {
        sliderColors[bgColor] = ui.value;
      }
    }

    $('#red').on('slidechange', function (event, ui) {
      changeSliderValue(ui, 'textRed', 'bgRed');
    });
    $('#blue').on('slidechange', function (event, ui) {
      changeSliderValue(ui, 'textBlue', 'bgBlue');
    });
    $('#green').on('slidechange', function (event, ui) {
      changeSliderValue(ui, 'textGreen', 'bgGreen');
    });

    $('input[type="radio"]').click(function () {
      if ($('input[id="radio-2"]').prop('checked') == true) {
        $('#red, #green, #blue').slider({
          orientation: 'horizontal',
          range: 'min',
          max: 255,
          slide: refreshSwatchBackground,
          change: refreshSwatchBackground,
        });

        $('#red').slider('value', sliderColors.bgRed);
        $('#green').slider('value', sliderColors.bgGreen);
        $('#blue').slider('value', sliderColors.bgBlue);
      }
      if ($('input[id="radio-1"]').prop('checked') == true) {
        $('#red, #green, #blue').slider({
          orientation: 'horizontal',
          range: 'min',
          max: 255,
          slide: refreshSwatchText,
          change: refreshSwatchText,
        });

        $('#red').slider('value', sliderColors.textRed);
        $('#green').slider('value', sliderColors.textGreen);
        $('#blue').slider('value', sliderColors.textBlue);
      }
    });
  });
});
