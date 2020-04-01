<template>
  <h3>
    {{ title }}
  </h3>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
export default defineComponent({
  layout: 'admin',
  setup() {
    const title = 'Admin Page'
    return {
      title
    }
  }
})
</script>
