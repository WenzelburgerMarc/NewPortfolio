<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>


<style lang="scss"> /* Global Styles */

 * {
   font-size: 62.5%; // 1rem = 10px
 }

 body {

   line-height: 1.5;
   overflow-x: hidden;
   min-height: 100vh;
   min-width: 300px;
   background-color: lighten(rgb(131, 149, 167), 5%);

   &.dark {
     background-color: darken(rgb(34,
           47,
           62), 10%);
   }
 }

 @media (max-width: 319px) {
   body {
     overflow-x: scroll;
   }
 }

 // Disable hover effect on touch devices
 @media (hover: none) {

   *,
   *:before,
   *:after {
     transition-duration: 0s !important;
   }

   // Generally activate effects if the element has this class
   .keep-transition:hover,
   .keep-transition:active,
   .keep-transition:focus,
   .keep-transition:visited,
   .keep-transition:target,
   .keep-transition:link,
   .keep-transition {
     transition-duration: inherit !important;
   }
 }
</style>
