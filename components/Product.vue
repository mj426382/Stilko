<template>
  <nuxt-link to="/abc" class="product">
    <div class="photo">
      <img :src="photo" :alt="name"/>
    </div>
    <h4 class="name">{{name}}</h4>
    <p class="description">{{description}}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {

    display: block;

    .photo {
      background: #ddd;
      margin-bottom: 16px;

      img {
        width: 100%;
        height: 320px;
      }
    }
    
    .name, .description {
      text-align: center;
    }

    .name {
      margin-bottom: 4px;
    }
  }
</style>