<template>
  <div>
    <b-navbar class="navbar" toggleable="lg">
    <b-navbar-brand href="#">STILKO</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item href="#home" v-scroll-to="'#home'">Home</b-nav-item>
          <b-nav-item href="#about" v-scroll-to="'#about'">O nas</b-nav-item>
          <b-nav-item href="#offer" v-scroll-to="'#offer'">Oferta</b-nav-item>
          <b-nav-item href="#products" v-scroll-to="'#products'">Produkty</b-nav-item>
        </b-navbar-nav>

        <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template slot="button-content">Produkty</template>
          <b-dropdown-item href="#">Kotwy 1</b-dropdown-item>
          <b-dropdown-item href="#">Kotwy 2</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <b-nav-item class="special-link" href="#">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss">

  .navbar{
    padding: 10px $marginX;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    // border-bottom: 1px solid #ccc;
    z-index: 10;

    .navbar-brand {
      font-family: 'Ubuntu';
    }
  }

  .main-content {
    margin-top: $offsetTop;
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 1.66rem;
  }

  .navbar-toggler {
    border: none;

    .navbar-toggler-icon {
      width: 1.2em;
      height: 1.2em;
    }
  }

  .navbar-light {
    .navbar-nav {
      .nav-item {
        font-family: 'Ubuntu';
        
        padding: 0 15px;
        &.special-link {
          border: 2px solid $colGreen;
          margin-left: 5px;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 20px;
          font-size: .85rem;
          transition: border .5s, padding .4s;
          position: relative;

          &:before {
            content: '';
            position:absolute;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            border: 2px solid $colGreen;
            background: linear-gradient($colGreen, #3fcc7c);
            z-index: -1;
            opacity: 0;
            transition: opacity .7s;
          } 
          
          &:hover {
            border: 2px solid transparent;
            // padding: 0px 18px;

            &:before {
              opacity: 1;
            }
            // background: linear-gradient($colGreen, #3fcc7c);
          }
        }

        .dropdown-toggle::after {
          margin-left: .9em;
          color: $colBlue;
        }
        
        a {
          color: #000;
        }
      }
    }
  }
  


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
