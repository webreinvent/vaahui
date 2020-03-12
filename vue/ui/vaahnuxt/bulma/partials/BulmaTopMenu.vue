<template>
  <nav class="navbar zindex" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <vaah-link to="/ui/bulma" class="navbar-item">
        Bulma Blocks
      </vaah-link>


      <a role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false" data-target="navbarUIBlocks">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarUIBlocks" class="navbar-menu">
      <div class="navbar-start">

        <div class="navbar-item has-dropdown is-hoverable">

          <vaah-link class="navbar-link" to="/ui/bulma"> Layouts</vaah-link>

          <div class="navbar-dropdown">
            <vaah-link to="/ui/bulma/container" class="navbar-item">Container</vaah-link>
            <vaah-link to="/ui/bulma/level" class="navbar-item">Level</vaah-link>
            <vaah-link to="/ui/bulma/mediaobject" class="navbar-item">Media Object</vaah-link>
            <vaah-link to="/ui/bulma/hero" class="navbar-item">Hero</vaah-link>
            <vaah-link to="/ui/bulma/footer" class="navbar-item">Footer</vaah-link>
            <vaah-link to="/ui/bulma/tiles" class="navbar-item">Tiles</vaah-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <vaah-link class="navbar-link" to="/ui/bulma/general">Form</vaah-link>


          <div class="navbar-dropdown">
            <vaah-link to="/ui/bulma/general" class="navbar-item">General</vaah-link>
            <vaah-link to="/ui/bulma/input" class="navbar-item">Input</vaah-link>
            <vaah-link to="/ui/bulma/textarea" class="navbar-item">Text Area</vaah-link>
            <vaah-link to="/ui/bulma/select" class="navbar-item">Select</vaah-link>
            <vaah-link to="/ui/bulma/checkbox" class="navbar-item">Checkbox</vaah-link>
            <vaah-link to="/ui/bulma/radio" class="navbar-item">Radio Button</vaah-link>
            <vaah-link to="/ui/bulma/file" class="navbar-item">File Upload</vaah-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <vaah-link class="navbar-link" to="/ui/bulma/box">Elements</vaah-link>


          <div class="navbar-dropdown">
            <vaah-link to="/ui/bulma/box" class="navbar-item">Box</vaah-link>
            <vaah-link to="/ui/bulma/button" class="navbar-item">Button</vaah-link>
            <vaah-link to="/ui/bulma/content" class="navbar-item">Content</vaah-link>
            <vaah-link to="/ui/bulma/delete" class="navbar-item">Delete</vaah-link>
            <vaah-link to="/ui/bulma/icon" class="navbar-item">Icon</vaah-link>
            <vaah-link to="/ui/bulma/image" class="navbar-item">Image</vaah-link>
            <vaah-link to="/ui/bulma/notification" class="navbar-item">Notification</vaah-link>
            <vaah-link to="/ui/bulma/progressbar" class="navbar-item">Progress Bar</vaah-link>
            <vaah-link to="/ui/bulma/table" class="navbar-item">Table</vaah-link>
            <vaah-link to="/ui/bulma/tag" class="navbar-item">Tags</vaah-link>
            <vaah-link to="/ui/bulma/title" class="navbar-item">Title</vaah-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <vaah-link class="navbar-link" to="/ui/bulma/breadcrumbs">Components</vaah-link>


          <div class="navbar-dropdown">
            <vaah-link to="/ui/bulma/breadcrumbs" class="navbar-item">Breadcrumb</vaah-link>
            <vaah-link to="/ui/bulma/cards" class="navbar-item">Card</vaah-link>
            <vaah-link to="/ui/bulma/dropdown" class="navbar-item">Dropdown</vaah-link>
            <vaah-link to="/ui/bulma/menu" class="navbar-item">Menu</vaah-link>
            <vaah-link to="/ui/bulma/message" class="navbar-item">Message</vaah-link>
            <vaah-link to="/ui/bulma/modal" class="navbar-item">Modal</vaah-link>
            <vaah-link to="/ui/bulma/navbar" class="navbar-item">Navbar</vaah-link>
            <vaah-link to="/ui/bulma/pagination" class="navbar-item">Pagination</vaah-link>
            <vaah-link to="/ui/bulma/panel" class="navbar-item">Panel</vaah-link>
            <vaah-link to="/ui/bulma/tabs" class="navbar-item">Tabs</vaah-link>
          </div>
        </div>



      </div>


    </div>
  </nav>

</template>

<script>
  import globalComponents from '../../helpers/globalComponents'
  export default {
    data() {
      return {

      }
    },
    components:{
      ...globalComponents,
    },
  }
</script>
<style>
  .zindex{
    z-index: 10;
  }
  .zindex .navbar-brand{
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
