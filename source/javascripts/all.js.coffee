//= require 'jquery-1.11.1'
//= require jquery.ui.all
//= require_tree .

$ ->
  # $('#sidebar-menu').hide()
  $sidebarMenu = $('#sidebar-menu');
  $main = $('main');

  $('#open-sidebar-button').click(() ->
    openSidebar()
  )

  $('#close-sidebar-button').click(() ->
    closeSidebar()
  )
  
  openSidebar = () ->
    $sidebarMenu.removeClass('closed-sidebar').addClass('open-sidebar')
    $main.removeClass('with-sidemenu-closed').addClass('with-sidemenu-open')

  closeSidebar = () ->
    $sidebarMenu.removeClass('open-sidebar').addClass('closed-sidebar')
    $main.removeClass('with-sidemenu-open').addClass('with-sidemenu-closed')
