//= require 'jquery-1.11.1'
//= require jquery.ui.all
//= require_tree .

$ ->
  # $('#sidebar-menu').hide()
  $sidebarMenu = $('#sidebar-menu');

  $('#open-sidebar-button').click(() ->
    openSidebar()
  )

  $('#close-sidebar-button').click(() ->
    closeSidebar()
  )
  
  openSidebar = () ->
    $sidebarMenu.removeClass('closed-sidebar').addClass('open-sidebar')

  closeSidebar = () ->
    $sidebarMenu.removeClass('open-sidebar').addClass('closed-sidebar')
