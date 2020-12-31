angular
  .module('CustomDirective')
  .directive('myAutocomplete', function () {
    function link(scope, element, attrs) {
      $(element).autocomplete({
        source: scope.$eval(attrs.myAutocomplete),
        select: function (ev, ui) {
          ev.preventDefault();
          if (ui.item) {
            console.log(ui.item);
            scope.optionSelected(ui.item.value);
          }
        },
        focus: function (ev, ui) {
          ev.preventDefault();
          $(this).val(ui.item.label);
        },
      });
    }
    return {
      link: link,
    };
  })
  .directive('backImage', function () {
    return function (scope, element, attrs) {
      attrs.$observe('backImage', function (value) {
        element.css({
          background: 'url(' + value + ')',
          'background-size': 'cover',
          'background-position': 'center',
        });
      });
      // style="background-image:url({{repo.owner.avatar_url}}); background-position:center; background-size:cover"
    };
  });
