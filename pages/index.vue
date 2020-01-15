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
      <Subtitle id="products">Produkty</Subtitle>
      <b-row>
        <b-col xs="12" sm="6" md="3" v-for="item in items" :key="item.name">
          <Product
            :name="item.name"
            :photo="item.photo"
            :description="item.description"
            :subproducts="item.subproducts"
            :special="item.special || false"
          />
        </b-col>
      </b-row>
    </section>

    <section class="contact" id="contact">
        <b-col class="contact" xs="12" sm="12" md="6">

          <div class="contact-form--wrapper" v-if="formSentSuccesfully !== true">
            <h2 class="contact--header">Złóż zamówienie / zapytanie</h2>
            <p class="contact--description">Napisz do nas maila</p>
            <form class="contact--form" @submit.prevent="sendEmail">
              <input
                v-model.trim="formName"
                type="text"
                name="name"
                class="contact--input"
                placeholder="Imie i nazwisko"
              />
              <span class="contact-field__info">Minimum 5 znaków</span>
              <input
                v-model.trim="formEmail"
                name="email"
                type="email"
                class="contact--input"
                placeholder="Adres email"
              />
              <span class="contact-field__info">Minimum 7 znaków</span>
              <textarea
                v-model.trim="formMessage"
                name="message"
                class="contact--input"
                rows="5"
                placeholder="Wiadomość"
              />
              <span class="contact-field__info last">Minimum 10 znaków</span>
              <button class="contact--submit" type="submit" :disabled="!canSendEmail || isSending">Wyślij</button>
            </form>
          </div>
          <div class="contact-form--wrapper" v-else>
            <h2 class="contact--header">Dziękujemy za wysłanie maila!</h2>
            <p class="contact--description">Skontaktujemy sie z Panem/Panią jak najszybciej</p>
          </div>

          <b-row class="tile--wrapper">
            <b-col class="tile" sm="12" md="4">
              <a href="tel: +48 602 590 435">
                <div class="icon">
                  <img src="~/assets/ph.svg" alt="Telefon" />
                </div>
                <span>+48 602 590 435</span>
              </a>
            </b-col>
            <b-col class="tile" sm="12" md="4" style="text-align:center;">
              <a target="_blank" href="https://www.google.com/maps/place/Bielicha+92A,+26-601+Bielicha/@51.4076871,21.0898646,13.25z/data=!4m8!1m2!2m1!1sBielicha+92a+26-600+Radom!3m4!1s0x471859a88238ea31:0x302ad0e8848c83b9!8m2!3d51.4174221!4d21.084609">
                <div class="icon">
                  <img src="~/assets/localization.svg" alt="Lokalizacja" />
                </div>
                <span>Bielicha 92a<br>26-600 Radom<br>Polska</span>
              </a>
            </b-col>
            <b-col class="tile" sm="12" md="4" style="text-align:center;">
              <a target="_blank" href="mailto:biuro.stilko@gmail.com">
                <div class="icon">
                  <img src="~/assets/email.svg" alt="Email" />
                </div>
                <span>biuro.stilko@gmail.com</span>
              </a>
            </b-col>
          </b-row>

        </b-col>
        <b-col class="map" xs="12" sm="12" md="6">
          <div>
            <Subtitle id="about">O nas</Subtitle>
            {{ aboutUs }}
          </div>
          <div class="map-wrapper">
            <a target="_blank" href="https://www.google.com/maps/place/Bielicha+92A,+26-601+Bielicha/@51.4076871,21.0898646,13.25z/data=!4m8!1m2!2m1!1sBielicha+92a+26-600+Radom!3m4!1s0x471859a88238ea31:0x302ad0e8848c83b9!8m2!3d51.4174221!4d21.084609">
              <img 
                width="80%"
                :src="'./map.jpeg'"
              />
            </a>
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
      aboutUs: 'Zajmujemy sie obróbką metali od lat 90. Mamy, więc już prawie 30 lat doświadczenia! Jesteśmy grupą pasjonatów, ceniących sobie jakość. Uważamy, że świetnie wykonana praca jest najlepszą reklamą. Realizujemy również indywidualne projekty, według rządanej specyfikacji. Zapraszamy do kontaktu za pomocą formularza kontaktowego, bądź telefonu.',
      formName: '',
      formEmail: '',
      formMessage: '',
      formDataNameOrder: JSON.stringify('COSSS'),
      formGoogleSheetName: "responses",
      formGoogleSendEmail: 'biuro.stilko@gmail.com' || "",
      formSentSuccesfully: null,
      items: [
        {
          name: 'Kotwy montażowe',
          description: 'Kotwy montażowe do okien plastikowych(PVC,); okien drewnianych; okien aluminiowych. Wykonanie z blachy ocynkowanej grubość 1,25 mm oraz 1,50 mm. Produkujemy kotwy do wszystkich systemów PVC tj.: ALUPLAST, VEKA, SCHUCO, REHAU, KBE, TROCAL, SALAMANDER, GEALAN, THYSSEN, DECEUNINCK, KOMERLING, BRUGMANN, DECCO, AWANGARDE. I kotwy obrotowe do systemów: ALUPLAST, IGLO, SCHUCO, REHAU. Realizujemy indywidualne projekty.',
          photo: './nowe-kotwy.jpg',
          special: true
        },
        {
          name: 'Kołki montażowe',
          description: 'Kołki szybki montaż - dostępne w różnych rozmiarach',
          photo: './kolki.png'
        },
        {
          name: 'Dyble',
          description: 'Dyble metalowe do montażu okien i drzwi - dostępne w różnych rozmiarach',
          photo: './dyble.jpg'
        },
        {
          name: 'Akcesoria do mebli',
          description: 'Produkujemy akcesoria do mebli między innymi zawiasy, rolki, haki, wieszaki...',
          photo: './meblowe.png'
        }
      ]
    }
  },

  computed: {
    canSendEmail () {
      return !this.formSentSuccesfully
      && this.formName.length > 5
      && this.formEmail.length > 7
      && /\S+@\S+\.\S+/.test(this.formEmail)
      && this.formMessage.length > 10
    }
  },

  methods: {
    sendEmail(event) {

      this.isSending = true
      const url = 'https://script.google.com/macros/s/AKfycbycEP53yfqv-0hCS7a_33_KclBQ38cQ_vYPrHbfqIFBIlM6DVcf/exec'
      const xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this.formSentSuccesfully = xhr.status === 200
          } 
          if (xhr.readyState === 4) {
            this.isSending = false
          }
      }

      // url encode form data for sending as post data
      const fieldWithValue = (field) => {
        return `${field.replace('form', '').toLowerCase()}=${this[field]}`
      }

      const encoded = [
        fieldWithValue('formName'),
        fieldWithValue('formEmail'),
        fieldWithValue('formMessage'),
        fieldWithValue('formZrodlo'),
        fieldWithValue('formGoogleSheetName'),
        fieldWithValue('formGoogleSendEmail'),
        `wiadomosc=${this.formMessage}`,
        `adresat=${this.formEmail}`
      ].join('&')

      xhr.send(encoded);
    }
  }
}
</script>

<style lang="scss">
.contact-field__info {
  padding-bottom: 15px;
  font-size: .8rem;
}
.logo {
  width: 50px;
  height: 50px;

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
        margin: 0.3rem 0;
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
      margin-top: 10px;

      &:disabled {
        opacity: .6;
        cursor: not-allowed;
      }
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
