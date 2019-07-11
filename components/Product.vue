<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
    :class="{'has-subproducts': subproducts && subproducts.length > 0}"
    class="product"
  >
    <div class="photo" :class="{'no-photo': !photo}">
      <img v-if="photo" :src="photo" :alt="name" />
    </div>
    <h4 class="name">{{name}}</h4>
    <!-- <p class="description">{{description}}</p> -->
  </div>
</template>

<script>
import Product from '~/components/Product.vue'

export default {
  props: {
    photo: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    subproducts: {
      type: Array
    }
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: block;
  cursor: pointer;

  &.has-subproducts {
  }

  .photo {
    background: #ddd;
    margin-bottom: 16px;

    &.no-photo {
      height: 320px;
      width: 100%;
      background: #ddd;
    }

    img {
      width: 100%;
      height: 320px;
    }
  }

  .name,
  .description {
    text-align: center;
  }

  .name {
    margin-bottom: 4px;
  }
}
</style>