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
      <Subtitle index="products">Produkty</Subtitle>
      <b-row>
        <b-col xs="12" sm="6" md="3" v-for="item in items" :key="item.name">
          <Product
            :name="item.name"
            :photo="item.photo"
            :description="item.description"
            :subproducts="item.subproducts"
          />
        </b-col>
      </b-row>
    </section>

    <section class="contact" id="contact">
        <b-col class="contact" xs="12" sm="12" md="6">

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
            <b-col class="tile" sm="12" md="6">
              <a href="tel: +48 124 456 789">
                <div class="icon">
                  <img src="~/assets/ph.svg" alt="Telefon" />
                </div>
                <span>+48 124 456 789</span>
              </a>
            </b-col>
            <b-col class="tile" sm="12" md="6">
              <a>
                <div class="icon">
                  <img src="~/assets/localization.svg" alt="Lokalizacja" />
                </div>
                <span>Bielicha XYZ, Radom, Polska</span>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="map" xs="12" sm="12" md="6">
          <div>
            <Subtitle index="o-nas">O nas</Subtitle>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum mollis luctus. Sed pretium est risus, non viverra quam molestie sit amet. Suspendisse at ligula venenatis, tincidunt ligula et, rhoncus sapien. Nunc sit amet venenatis metus. Vestibulum pulvinar orci eget venenatis bibendum. Aliquam non ullamcorper elit. Donec eu ultrices lorem. Nullam pellentesque ac lacus sit amet volutpat. Ut eu risus sagittis, mollis risus et, ullamcorper elit. Integer id massa dui. 
          </div>
          <div class="map-wrapper">
            <img 
              width="80%"
              src="https://www.hoothemes.com/wp-content/uploads/2015/05/20150506010146.png" />
          </div>
        </b-col>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Product from '~/components/Product.vue'
import Subtitle from '~/components/Subtitle.vue'

export default {
  components: {
    Logo,
    Product,
    Subtitle
  },
  data() {
    return {
      formName: '',
      formEmail: '',
      formMessage: '',
      items: [
        {
          name: 'Kotwy montażowe',
          description: 'Kołki szybki montaż - dostępne w różnych rozmiarach',
          photo: './kotwy.png'
        },
        {
          name: 'Kołki montażowe',
          description: 'Idealna do okien',
          photo: './kolki.png'
        },
        {
          name: 'Dyble',
          description: 'Dyble metalowe do montażu okien i drzwi - dostępne w różnych rozmiarach',
          photo: './dyble.jpg'
        },
        {
          name: 'Akcesoria do mebli',
          description: 'Produkujemy akcesoria do mebli między innymi zawiasy, rolki, haki, wieszaki...'
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
      display: none;
      @media screen and (min-width: 980px) {
        width: 150px;
        height: 150px;
        margin-right: 25px;
      }
    }

    > div {
      display: none; 
      margin-left: 15px;
      @media screen and (min-width: 980px) {
        display: block;
      }

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
    padding: 30px 0;
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
      padding: 0 2.3rem;
      @media screen and (min-width: 980px) {
        padding: 0 4.3rem;
      }

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
  
  padding-top: $offsetTop;
  justify-content: center;
  background: #595959;

  height: 100px;
  @media screen and (min-width: 980px) {
    min-height: 400px;
    height: calc(45vh - #{$offsetTop});
    display: flex;
    background: linear-gradient(#595959, #fff);
  }

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

#contact {
    display: flex;
    flex-wrap: wrap;

    > div {
      @media screen and (min-width: 980px) {
        width: 50%;
      }
    }

    .map {
      order: -1;
      padding-bottom: 3rem;
      @media screen and (min-width: 980px) {
        order: 2;
      }

      div.map-wrapper {
        padding-top: 3rem;
        text-align: center;
      }
    }
}

.products {
  padding-bottom: 3rem;
  @media screen and (min-width: 980px) {
    padding-bottom: 6rem;
  }
}
</style>
