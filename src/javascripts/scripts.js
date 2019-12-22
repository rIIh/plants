// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

let headerHeight = $('header').height();

$(document).ready(() => {
  headerHeight = $('header').height();
});

$(window).bind('resize', () => {
  headerHeight = $('header').height();
});

$('a').click(function handle(e) {
  e.preventDefault();
  const elementClick = $(this).attr('href');
  const destination = $(elementClick).offset().top - headerHeight;
  $('html, body').animate({
    scrollTop: destination,
  }, 0);
  return false;
});
