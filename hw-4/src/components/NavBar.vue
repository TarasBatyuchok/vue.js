<template>
  <header class="container py-6 items-center relative bg-beige text-black md:flex justify-between ">
    <span class="flex">
    <a href="#" class="pr-20">
      <!-- logo -->
      <img src="../assets/Logo.png" alt="logo" />
    </a>
    <ul class="lg:flex lg:items-center lg:px-0 px-7 lg:pb-0 pb-10 lg:static absolute md:w-auto w-full top-14 duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <!-- list navbar -->
      <li class="links" v-for="link in Links"><a class="hyperlink" :href="link.link">{{link.name}}</a></li>
        <!-- btn for mobile- hidden in desktop and block < 768px  -->
      <span class="lg:hidden">
        <Button>Book Now</Button>
      </span>
    </ul>
  </span>
    <!-- burger menu hiden < 768px  -->
    <span @click="MenuOpen()" class="absolute lg:hidden right-6 top-1 cursor-pointer">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']" style="font-size: 3em;"></i>
    </span>

    <!-- btn for desktop- hidden in mobile and block > 768px  -->
    <span class="hidden lg:block">
    <Button>Book Now</Button>
    </span>
  </header>
</template>

<script>
import Button from "./Button.vue";
import { ref } from 'vue';

export default {

  components:{
    Button
  },


  setup() {
    // ref
    let open = ref(false)
    // toogle function for burger menu
    function MenuOpen(){
      open.value =!open.value
    }

// arr links
    let Links = [
      { name: "Home", link: "#" },
      { name: "About us", link: "#" },
      { name: "Destinations", link: "#" },
      { name: "Tours", link: "#" },
      { name: "Blog", link: "#" },
    ];
    return { Links,open,MenuOpen };
  },


};
</script>

<style type="text/tailwindcss">

  @tailwind utilities;

  @layer utilities{
    .links{
      @apply lg:mx-3 lg:my-0 my-6
    }
    .hyperlink{
      @apply relative font-Poppins font-400
    }
    .hyperlink::after{
      @apply content-[''] bg-carrot absolute
       h-[2px] w-[0%] left-0 -bottom-[6px]
       rounded-xl duration-300
    }
    .hyperlink:hover::after{
      @apply w-[100%]
    }
  }

</style>
