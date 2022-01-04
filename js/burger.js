window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#nav__list').classList.toggle('active')
  })

  $(document).ready(function() {
    $('.burger').click(function(event) {
      $('.burger,.nav').toggleClass('active')
    })
  })
})
