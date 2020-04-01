<template>
  <h4>{{ hello }}</h4>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
export default defineComponent({
  layout: 'admin',
  setup() {
    const hello = 'Hello My Way to Sccuses'
    return {
      hello
    }
  }
})
</script>
