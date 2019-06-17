<template>
  <div>


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


    <section class="container-margin products">
      <nuxt-link to="#products" id="products">Produkty</nuxt-link>
      <b-row>
        <b-col xs12 sm6 md3 v-for="item in items" :key="item.name">
          <Product 
            :name="item.name" 
            :photo="item.photo"
            :description="item.description"
          />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Product from '~/components/Product.vue'

export default {
  components: {
    Logo,
    Product
  },
  data () {
    return {
      items: [
        {
          name: "Kotwa do okna",
          description: "Idealna do okien",
          photo: 'assets/kotwy.png'
        },
        {
          name: "Kotwa do drewna",
          description: "Idealna do okien",
          photo: '~/assets/kotwy.png'
        },
        {
          name: "Kotwa do metalu",
          description: "Idealna do okien",
          photo: '~/assets/kotwy.png'
        },
        {
          name: "Kotwa do wody",
          description: "Idealna do okien",
          photo: '~/assets/kotwy.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.intro-jumbotron {
  height: calc(100vh - #{$offsetTop});

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

.products {
  #products {

    font-weight: bold;
    font-size: 2.4rem;
    margin-bottom: 20px;
    display: block;
    position: relative;

    &:before {
      content: '#';
      transition: color .3s;
      padding-right: 10px;
      color: $colGreen;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 25px 25px;
      border-color: transparent transparent $colGreen transparent;
      right: 0;
      bottom: 0;
      transition: border-color .3s;

    }

    &:hover {
      &:before {
        color: $colBlue;
      }
      &:after {
        border-color: transparent transparent $colBlue transparent;
      }
    }
  }
}

</style>
