<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash; {{ user }} ---- {{ f }}</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import Form from '@/use/form'
export default defineComponent({
  setup() {
    const user = {
      firstName: 'Azzi',
      lastName: 'khalil'
    }

    const f = new Form().validate()
    return { user, f }
  }

  // get fullName(): string {
  //   // return `${this.user.firstName} ${this.user.lastName}`
  // }
})
</script>
