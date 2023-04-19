<template>
  <div class="bg-beige pb-[7px]">
    <NavBar />
    <main>
      <SectionPromo/>
      <SectionCategories/>
      <SectionExperience/>
      <SectionDestination/>
      <SectionTopDestination/>
      <SectionCustomer/>
      <SectionNewsletter/>
    </main>
    <Footer/>
  </div>

</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import SectionPromo from "./components/SectionPromo.vue";
import SectionCategories from './components/SectionCategories.vue';
import SectionExperience from './components/SectionExperience.vue';
import SectionDestination from './components/SectionDestination.vue';
import SectionNewsletter from './components/SectionNewsletter.vue';
import SectionCustomer from './components/SectionCustomer.vue';
import SectionTopDestination from "./components/SectionTopDestination.vue";
import Footer from './components/footer.vue'
</script>

<style scoped></style>
