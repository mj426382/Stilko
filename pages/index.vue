<template>
  <div>

    <section id="home" class="container-margin intro-jumbotron">
      <b-row>
        <b-col xs12 sm7 lg6>
          <b-jumbotron lead="Nowa generacja kotw do okien PCV - motażowe okienne">
            <template slot="header">
              Kotwy do okien.
            </template>
            <b-button class="btn-green" href="#">Dowiedz sie więcej</b-button>
          </b-jumbotron>
        </b-col>
        <b-col class="kotwy" xs12 sm5 lg6/>
      </b-row>
    </section>

    <section class="padding--y container-margin about">
      <nuxt-link 
        class="section-header"
        to="#about" 
        id="about">O nas</nuxt-link>
      <b-row>
        <b-col class="left-cover" xs12 sm6 md4>
          <!-- hidden on mobile -->
        </b-col>
        <b-col class="content flex" xs12 sm6 md4>
          <div>
            <h3 class="text--center">Nagłówek</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </b-col>
        <b-col class="right-cover" xs12 sm6 md4>
          <!-- hidden on sm -->
        </b-col>
      </b-row>
    </section>

    <section class="padding--y container-margin offer">
      <nuxt-link 
        class="section-header"
        to="#offer" 
        id="offer">Oferta</nuxt-link>
      <b-row>
        <b-col class="content flex" xs12 sm6 md4>
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </b-col>
      </b-row>
    </section>

    <section class="container-margin products">
      <nuxt-link 
        to="#products" 
        id="products"
        class="section-header">Produkty</nuxt-link>
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

    <section class="contact">
      <b-row>
        <b-col class="contact" md6>
          <div class="contact-form">
            <h2 class="contact--header">Kontakt</h2>
            <p class="contact--description">Napisz do nas maila</p>
            <div class="contact--form">
              <input
                v-model.trim="formName"
                type="text" 
                class="contact--input" 
                placeholder="Imie i nazwisko"/>
              <input
                v-model.trim="formEmail"
                type="email" 
                class="contact--input" 
                placeholder="Adres email"/>
              <textarea
                v-model.trim="formMessage"
                class="contact--input" 
                placeholder="Wiadomość"/>
              <button class="contact--submit">Wyślij</button>
            </div>
          </div>
          <b-row>
            <b-col xs6>
              <i>Icon</i>
              <a href="tel: +48 124 456 789">+48 124 456 789</a>
            </b-col>
            <b-col xs6>
              <i>Icon</i>
              <a href="tel: +48 124 456 789">+48 124 456 789</a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="map" md6>
          <img src="https://www.hoothemes.com/wp-content/uploads/2015/05/20150506010146.png"/>
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
      formName: '',
      formEmail: '',
      formMessage: '',
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

.about {

  .row {
    height: 600px;
    overflow: hidden;
    display: flex;

    .col {
      height: 100%;
    }

    .content {
      flex-wrap: wrap;
      align-items: center;

      h3 {
        font-weight: bold;
        padding-bottom: 10px;
      }
    }

    .left-cover {
      background: url('https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80');
      margin-right: 4rem;
    }

    .right-cover {
      margin-left: 4rem;
      background: url('https://images.unsplash.com/photo-1478025101087-7f1ce4c83156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    }
  }
}

.intro-jumbotron {
  // min-height: calc(100vh - #{$offsetTop});
  height: 400px;
  height: calc(100vh - #{$offsetTop});
  display: flex;
  justify-content: center;

  .row {
    height: 100%;
    width: 100%;

    // @media (min-width: 765px) {
    //   display: flex;
    // }

    .col {
      display: flex;
      align-items: center;

      .jumbotron {
        background: transparent;

        .display-3 {
          font-weight: 700;
          font-size: 2.9rem;
        }

        .lead {
          font-size: 1.23rem;
          // font-size: 1.67rem;
        }
      }

      &.kotwy {
        display: none;
        background: url('~assets/kotwy.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;

        @media (min-width: 765px) {
          display: block;
        }
      }

    }

  }
}

.padding--y {
  padding-bottom: 6rem;
}

.contact {
  .row {
    display: flex;

    > div {
      width: 50%;
    }
  }
}

.products { 
  padding-bottom: 6rem;
}

</style>
