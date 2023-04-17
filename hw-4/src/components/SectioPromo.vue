<template>

  <section class="container">
  <div class="promo">
    <span class="wrap">
    <h1 class="promo__title">Discover the <br> Best Lovely <br> Places</h1>
    <p class="promo__text">Plan and book your perfect trip with expert advice, travel <br> 
      tips, destination information and inspiration from us.</p>
    </span>
    <img src="../assets/Image.png" alt="img">
  </div>
  </section>

</template>

<script setup>

</script>

<style type="text/tailwindcss">

@tailwind utilities;

  @layer utilities{
    .promo{
      @apply flex justify-between
    }

    .promo__title{
      @apply font-Sen font-700 text-7xl my-2  leading-86 
    }

    .promo__text{
      @apply font-Inter font-400 text-lg 
    }
    .wrap{
      @apply mt-20
    }

  }


</style>