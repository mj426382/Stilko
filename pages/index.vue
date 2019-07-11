<template>
  <div>
    <section id="home" class="container-margin intro-jumbotron">
      <b-row class="header-bg">
        <b-col xs12>
          <div class="logo--wrapper" href="/">
            <img src="~/assets/logo_small.svg" alt="logo stilko" class="logo" />
            <div>
              <span class="title">STILKO</span>
              <p class="logo__description">i wszystko w metalu</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>

    <section class="container-margin products">
      <nuxt-link to="#products" id="products" class="section-header">Produkty</nuxt-link>
      <b-row>
        <b-col xs12 sm6 md3 v-for="item in items" :key="item.name">
          <ProductWrapper
            :name="item.name"
            :photo="item.photo"
            :description="item.description"
            :subproducts="item.subproducts"
          />
        </b-col>
      </b-row>
    </section>

    <section class="padding--y container-margin about">
      <nuxt-link class="section-header" to="#about" id="about">O nas</nuxt-link>
      <b-row>
        <b-col class="left-cover" xs12 sm6 md4>
          <!-- hidden on mobile -->
        </b-col>
        <b-col class="content flex" xs12 sm6 md4>
          <div>
            <p>Produkujemy kotwy montażowe do okien i drzwi PCV, drewnianych oraz aluminiowych. Kotwy wykonane są z blachy ocynkowanej o grubości 1,25 mm lub 1,50 mm. Posiadamy kotwy montażowe do wszystkich obecnych na rynku profili PCV, jak również do profili aluminiowych. Do montażu okien i drzwi drewnianych oferujemy kotwy wbijane. Wykonujemy kotwy pod indywidualne zamówienie klienta.</p>
          </div>
        </b-col>
        <b-col class="right-cover" xs12 sm6 md4>
          <!-- hidden on sm -->
        </b-col>
      </b-row>
    </section>

    <section class="contact" id="contact">
      <b-row>
        <b-col class="contact" md6>
          <div class="contact-form--wrapper">
            <h2 class="contact--header">Złóż zamówienie / zapytanie</h2>
            <p class="contact--description">Napisz do nas maila</p>
            <div class="contact--form">
              <input
                v-model.trim="formName"
                type="text"
                class="contact--input"
                placeholder="Imie i nazwisko"
              />
              <input
                v-model.trim="formEmail"
                type="email"
                class="contact--input"
                placeholder="Adres email"
              />
              <textarea
                v-model.trim="formMessage"
                class="contact--input"
                rows="5"
                placeholder="Wiadomość"
              />
              <button class="contact--submit">Wyślij</button>
            </div>
          </div>
          <b-row class="tile--wrapper">
            <b-col class="tile" xs6>
              <a href="tel: +48 124 456 789">
                <div class="icon">
                  <img src="~/assets/ph.svg" alt="Telefon" />
                </div>
                <span>+48 124 456 789</span>
              </a>
            </b-col>
            <b-col class="tile" xs6>
              <a>
                <div class="icon">
                  <img src="~/assets/localization.svg" alt="Lokalizacja" />
                </div>
                <span>Bielicha XYZ, Radom, Polska</span>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="map" md6>
          <img src="https://www.hoothemes.com/wp-content/uploads/2015/05/20150506010146.png" />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ProductWrapper from '~/components/ProductWrapper.vue'

export default {
  components: {
    Logo,
    ProductWrapper
  },
  data() {
    return {
      formName: '',
      formEmail: '',
      formMessage: '',
      items: [
        {
          name: 'Akcesoria do okien',
          description: 'Idealna do okien',
          photo: '/kotwy.png',
          subproducts: [
            {
              name: 'Kotwy do montażu PCV',
              description: 'Idealna do okien',
              photo: '/kotwy.png'
            },
            {
              name: 'Kotwy do okien',
              description: 'Idealna do okien',
              photo: '/kotwy.png'
            },
            {
              name: 'Kotwy do drewna',
              description: 'Idealna do okien',
              photo: '/kotwy.png'
            }
          ]
        },
        {
          name: 'Kołki montażowe',
          description: 'Idealna do okien',
          photo: '/kolki.png'
        },
        {
          name: 'Dyble',
          description: 'Idealna do okien',
          photo: '/dyble.jpg'
        },
        {
          name: 'Akcesoria do mebli',
          description: 'Idealna do okien'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.logo {
  width: 30px;
  height: 30px;

  &__description {
    font-size: 0.9rem;
    margin: 0;
    color: #666;
    margin-top: -9px;
    text-transform: capitalize;
  }

  &--wrapper {
    display: flex;
    align-items: center;

    .logo {
      width: 150px;
      height: 150px;
      margin-right: 25px;
    }

    > div {
      margin-left: 15px;

      .title {
        font-size: 10rem;
        font-weight: bold;
        cursor: default;
        color: #000;
      }

      .logo__description {
        cursor: default;
        margin-top: -60px;
        font-size: 3rem;
        letter-spacing: 6px;
        text-transform: uppercase;
      }
    }
  }
}

section.contact {
  > .row {
    max-width: 100%;

    > .contact {
      padding: 2rem;
    }
  }
}

.tile {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  &--wrapper {
    padding-top: 30px;
  }

  span {
    font-size: 1.3rem;
  }

  .icon {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

    img {
      height: 100px;
    }

    + a {
      display: block;
      width: 100%;
    }
  }
}

.contact {
  .map {
    overflow: hidden;
  }
  .contact-form--wrapper {
    .contact--header,
    .contact--description {
      text-align: center;
    }

    .contact--header {
      font-weight: 700;
    }

    .contact--description {
      letter-spacing: 1px;
    }

    .contact--form {
      padding: 0 4.3rem;

      .contact--input {
        width: 100%;
        margin: 0.6rem 0;
        text-align: center;
        padding: 12px 0;

        background: rgba(0, 0, 0, 0.13);
        border: 0;
      }
    }

    .contact--submit {
      width: 100%;
      padding: 7px 0;
      background: #222;
      color: #eee;
      text-transform: uppercase;
      border: 0;
      position: relative;
      overflow: hidden;
    }
  }
}

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
      text-align: center;

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
  min-height: 400px;
  padding-top: $offsetTop;
  height: calc(45vh - #{$offsetTop});
  display: flex;
  justify-content: center;
  background: linear-gradient(#ccc, #fff);

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
        background: url('/kotwy.png');
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
