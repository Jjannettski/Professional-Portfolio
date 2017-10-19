$(document)
    .ready(function() {

$('.ui.styled.fluid.accordion').accordion();

$(".ui.large.top.fixed.hidden.menu").hide();
      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

      $("#hire-me-form").hide();

function hireMeFormGenerator(){

  $("#hire-me-form").show();
  $("#story-form").hide();

}
function storyFormGenerator(){

  $("#story-form").show();
  $("#hire-me-form").hide();

}

      $("#hire-me-button").on("click",function(){

        hireMeFormGenerator();

      });
      $("#story-button").on("click",function(){

        storyFormGenerator();

      });

    })
  ;