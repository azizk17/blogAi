<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app flat>
      <v-app-bar-nav-icon @click.stop="isDrawer = !isDrawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <template v-slot:extension>
        <slot name="extended" />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      :value="isDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    let isDrawer = false
    return {
      isDrawer
    }
  },
  data() {
    return {
      clipped: false,
      // drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Blog',
      items: [
        {
          action: 'local_activity',
          title: 'Importing',
          items: [
            { title: 'Import', to: '/admin/import' },
            { title: 'Sources', to: '/admin/import/sources' },
            { title: 'Fetch', to: '/admin/import/fetch' }
          ]
        },
        {
          action: 'settings',
          title: 'Settings',
          // active: false,
          items: [
            { title: 'Breakfast & brunch', to: '/' },
            { title: 'New American', to: '/' },
            { title: 'Sushi', to: '/' }
          ]
        }
      ]
    }
  }
})
</script>
