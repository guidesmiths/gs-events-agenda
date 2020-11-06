<template>
  <footer class="text-center">
    <p>Made with 💙 by
      <a class="blue-text" href="https://github.com/OSWeekends/agenda/graphs/contributors"
        target="_blank">OSWeekends</a>
      🦄
    </p>
    <p>
      <span class="parrot-img"> <img src="../assets/parrot.gif" alt="parrot"> </span>
      <!-- <b-button variant="link" class="blue-text" to="/about">About</b-button> -->
      <b-button variant="link" class="blue-text" href="https://github.com/guidesmiths/gs-events-agenda">
        Código fuente
      </b-button>
      <b-button variant="link" class="blue-text" href="https://twitter.com/guidesmiths">Twitter</b-button>
      <b-button variant="link" class="blue-text" href="https://instagram.com/guidesmiths">Instagram</b-button>
      <span class="parrot-img"> <img src="../assets/parrotright.gif" alt="parrot"> </span>
    </p>
  </footer>
</template>

<script>

export default {
  name: 'BaseFooter'
}
</script>

<style lang="stylus">
footer
  background-color white
  height 230px
  padding-top 50px
  box-shadow 0 0 10px #F4F4F4

  .blue-text
    color #4C77C0

  .parrot-img
    display inline-block
    height 25px

    img
      height 100%

</style>
