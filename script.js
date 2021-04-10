$(function(){
$(".lesson-hover").hover(
function(){
  $(this).find('.txt-contents').addClass('text-active');
},
function(){
  $(this).find('.txt-contents').removeClass('text-active');
}

);
});
