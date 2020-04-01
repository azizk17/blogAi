<template>
  <div>
    <h3>Translate Articles</h3>
    <h4>{{ user }}</h4>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import { ImportArticle, SourceApi } from '@/use/use-import'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'articles',
  components: {}
})
export default class Articles extends Vue {
  setup() {
    const user = 'Aziz'
    return {
      user
    }
  }
  @Prop({ type: Array })
  polls!: []

  @Prop({ type: Array })
  votes!: []
}
</script>
