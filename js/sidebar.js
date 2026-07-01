$(function () {
  var $sidebar = $('#sidebar')
  var $toggle = $('#toggle-sidebar')

  function syncToggleState (isOpen) {
    $toggle.toggleClass('on', isOpen).attr('aria-expanded', isOpen ? 'true' : 'false')
  }

  if (!isMobile() && $sidebar.data('display')) {
    syncToggleState($sidebar.hasClass('is-open'))
    if ($sidebar.hasClass('is-open')) {
      requestAnimationFrame(function () {
        $sidebar.addClass('sidebar-animated')
      })
    }
  }

  $('#toggle-sidebar').on('click', function () {
    if (!isMobile() && $sidebar.is(':visible')) {
      var isOpen = $sidebar.hasClass('is-open')
      $sidebar.toggleClass('is-open', !isOpen).addClass('sidebar-animated')
      syncToggleState(!isOpen)
    }
  })

  function scrollActiveTocIntoView () {
    var $active = $('.sidebar-toc__content .toc-link.active')
    if (!$active.length) return

    var $container = $('.sidebar-toc__content')
    if (!$container.length) return

    var containerTop = $container.scrollTop()
    var containerHeight = $container.height()
    var linkTop = $active.position().top
    var linkHeight = $active.outerHeight()

    if (linkTop < 0) {
      $container.scrollTop(containerTop + linkTop - 12)
    } else if (linkTop + linkHeight > containerHeight) {
      $container.scrollTop(containerTop + linkTop - containerHeight + linkHeight + 12)
    }
  }

  window.scrollActiveTocIntoView = scrollActiveTocIntoView
})
