<template>
  <Section class="container">
    <div class="destination__wrap">
    <div class="destination__descr">
      <h2 class="destination__title">
        Find Popular<br>Destination
      </h2>
      <div class="destination__navigation mt-[80px]">
        <div class="destination__button-next" v-on:mouseover="setActiveButton('button1')" v-on:mouseout="resetActiveButton"> 
          <img v-if="activeButton === 'button1'" class="white-left" src="../assets/icons/white-left.png" alt="arrow-right">
          <img v-else  class="black-left" src="../assets/icons/black-left.png" alt="arrow-right">
         
        </div>
        <div class="destination__button-prev" v-on:mouseover="setActiveButton('button2')" v-on:mouseout="resetActiveButton"> 
          <img v-if="activeButton === 'button2'"  class="black-right" src="../assets/icons/white-right.png" alt="arrow-right">
          <img v-else class="black-right" src="../assets/icons/black-right.png" alt="arrow-right">
        </div>
      </div>
    </div>
    <div class="sliderDestination swiper-cantainer">
      <div class="swiper-wrapper box-border">
        <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/HikingTour.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Machu Picchu, Peru</h4>
             <p class="card__subTitle">Machu Picchu, Peru</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$99</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Arizona.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">The Grand Canyon, Arizona</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$70</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class='card__img' src="../assets/secondSlider/Peru.png" alt="Hiking tour">
           <div class="card__descr">
             <h4 class="card__title">Mountain Hiking Tour</h4>
             <p class="card__subTitle">Mountain Hiking Tour</p>
           </div>
           <div class="card__price">
            <p class="price__descr"> <span class="cost">$89</span> /Person</p>
            <button class="card__btn">
              Book Now
            </button>
           </div>
        </div>
      </swiper-slide>
      </div>
    </div>
    </div>

  </Section>

</template>

<script>
  import Swiper from "swiper/bundle";
  import "swiper/swiper-bundle.css";
export default {

  mounted() {
    const mySwiper = new Swiper(".sliderDestination", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
          delay: 2000,
      },
      navigation:{
        
        nextEl: ".destination__button-next",
        prevEl: ".destination__button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        370: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024:{
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
    });
  },
  data() {
    return {
      activeButton: null,
      button1Active: false,
      button2Active: false,
    };
  },
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
      if (button === 'button1') {
        this.button1Active = true;
        this.button2Active = false;
      } else if (button === 'button2') {
        this.button1Active = false;
        this.button2Active = true;
      }
    },
    resetActiveButton() {
      this.activeButton = null;
      this.button1Active = false;
      this.button2Active = false;
    },
  },

}



</script>

<style type="text/tailwindcss">

  @tailwind utilities;

  @layer utilities{
   .destination__wrap{
    @apply mt-[55px] 
   }
   .destination__title{
    @apply font-600 font-Inter text-[56px] mt-[44px] leading-[66px]
   }
   .destination__descr{
    @apply flex flex-col md:flex-row justify-between
   }

   .destination__navigation{
    @apply flex
  }

  .sliderDestination{
    @apply mt-[35px] flex w-full justify-center overflow-hidden
  }

  .card__subTitle{
    @apply font-Inter font-400 text-[14px] leading-[14px] mt-[14px] text-gray-400
  }

  .card{
    @apply max-w-[386px]  border-2  rounded-[16px] border-white px-[12px] pt-[12px] pb-[36px] mx-auto
  }

  .card__descr{
    @apply mt-[24px]  
  }

  .card__title{
    @apply font-Inter font-600 text-[24px] leading-[24px]
  }

  .card__price{
    @apply mt-[27px] flex justify-between
  }
  
  .destination__button-next{
    @apply flex justify-center items-center w-[54px] h-[54px] border-[1px] rounded-full border-black mr-[16px] cursor-pointer hover:bg-black 
  }
  
  .destination__button-prev{
    @apply flex justify-center items-center w-[54px] h-[54px] border-[1px] rounded-full border-black  cursor-pointer hover:bg-black
  }


  .price__descr{
    @apply font-Inter font-400 text-[16px] text-gray-400
  }

  .cost{
    @apply font-Inter font-600 text-[24px] text-black
  }

  .card__btn{
    @apply  font-Inter font-400 text-[14px]  px-[16px] py-[12] text-white bg-black rounded-[46px]
    hover:text-black hover:bg-transparent hover:border-[1px] border-black
    hover:shadow-black
    hover:shadow-md
    transition 
    duration-300
  }



  }

</style>

<!-- flex flex-col md:flex-row justify-between -->