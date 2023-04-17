<template>
  <header class="container py-6 items-center relative bg-beige text-black md:flex justify-between ">
    <span class="flex">
    <a href="#" class="logo">
      <!-- logo -->
      <img src="../assets/Logo.png" alt="logo" />
    </a>
    <ul  class="navbar" :class="[open ? 'left-0' : 'left-[-120%]']">
      <!-- list navbar -->
      <li class="navbar__links" v-for="link in Links"><a class="navbar__hyperlink" :href="link.link">{{link.name}}</a></li>
        <!-- btn for mobile- hidden in desktop and block < 768px  -->
      <span class="mobile-btn">
        <Button>Book Now</Button>
      </span>
    </ul>
  </span>
    <!-- burgerBtn menu hiden < 768px  -->
    <span @click="MenuOpen()" class="burger">
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
    .mobile-btn{
      @apply lg:hidden
    }
    .burger{
      @apply absolute lg:hidden right-6 top-1 cursor-pointer
    }
    .logo{
      @apply pr-20
    }
    .navbar{
      @apply

      w-auto w-full bg-red-200  top-14 duration-500 ease-in  my-2
      lg:bg-transparent lg:flex lg:items-center lg:px-0 px-7 lg:pb-0 pb-10 lg:static absolute  
    }
    .navbar__links{
      @apply lg:mx-3 lg:my-0 my-6
    }
    .navbar__hyperlink{
      @apply relative font-Poppins font-400 text-base
    }
    .navbar__hyperlink::after{
      @apply content-[''] bg-carrot absolute
       h-[2px] w-[0%] left-0 -bottom-[6px]
       rounded-xl duration-300
    }
    .navbar__hyperlink:hover::after{
      @apply w-[100%]
    }
  }

</style>
