<template>
  <section class="container-margin intro-jumbotron">
    <b-row>
      <b-col xs12 sm6>
        <b-jumbotron lead="Nowa generacja kotw do okien PCV - motażowe okienne">
          <template slot="header">
            Kotwy do okien.
          </template>
          <b-button class="btn-green" href="#">Dowiedz sie więcej</b-button>
        </b-jumbotron>
      </b-col>
      <b-col class="kotwy" xs12 sm6/>
    </b-row>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

.intro-jumbotron {
  height: calc(75vh - #{$offsetTop});

  .row {
    height: 100%;
    .col {
      display: flex;
      align-items: center;

      .jumbotron {
        background: transparent;

        .display-3 {
          font-weight: bold;
        }

        .lead {
          font-size: 1.67rem;
        }
      }

      &.kotwy {
        background: url('~assets/kotwy.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;
      }

    }

  }
}

</style>
