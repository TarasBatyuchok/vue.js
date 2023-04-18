<template>
  <div class="bg-beige pb-10">
    <NavBar />
    <main>
      <SectionPromo/>
      <SectionCategories/>
      <SectionExperience/>

    </main>
  </div>

</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import SectionPromo from "./components/SectionPromo.vue";
import SectionCategories from './components/SectionCategories.vue';
import SectionExperience from './components/SectionExperience.vue'
</script>

<style scoped></style>
