$(function () {
  $('.layout')
    .velocity('stop')
    .velocity('transition.slideUpIn', {
      delay: 200,
      duration: 600,
      easing: 'easeOutQuart'
    })
  $('#top-container')
    .velocity('stop')
    .velocity('transition.fadeIn', {
      delay: 200,
      duration: 600,
      easing: 'easeOutQuart'
    })
})
