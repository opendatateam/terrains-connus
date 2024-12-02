<template>
  <HeaderComponent />
  <SidebarComponent />
  <MapComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import MapComponent from './components/MapComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
    MapComponent
  }
};
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
