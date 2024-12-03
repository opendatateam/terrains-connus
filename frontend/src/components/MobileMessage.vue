<template>
  <div class="mobile-message">
    <img src="@/assets/logosquare.svg" alt="Bird Illustration" class="mobile-image" />
    <h1>Terrains Connus</h1>
    <p>Pour une meilleure expérience, utilisez ce site sur un ordinateur.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileMessage",
});
</script>

<style scoped>
.mobile-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f5f1;
  color: #020817;
  font-family: 'Geist', sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.mobile-image {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

p {
  font-size: 1rem;
  margin: 10px 0 0;
}
</style>