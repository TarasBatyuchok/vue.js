<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
  name: "MyComponent",

  mounted() {
    const mySwiper = new Swiper(".slider", {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 10,
      // autoplay: {
      //     delay: 2000,
      // },
      // pagination: {
      //   el: ".navigation",
      //   clickable: true,
      // },
      navigation:{
        
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        370: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024:{
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280:{
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 6,
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

  // arr links
};


</script>

<template>
  <section class="container">
    <div class="categories">
      <div class="categories__decr">
      <span>
        <h2 class="categories__title">Categories</h2>
        <p class="categories__text">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </p>
      </span>
      <div class="navigation">
        <div class="button-next" v-on:mouseover="setActiveButton('button1')" v-on:mouseout="resetActiveButton"> 
          <img v-if="activeButton === 'button1'" class="white-left" src="../assets/icons/white-left.png" alt="arrow-right">
          <img v-else  class="black-left" src="../assets/icons/black-left.png" alt="arrow-right">
         
        </div>
        <div class="button-prev" v-on:mouseover="setActiveButton('button2')" v-on:mouseout="resetActiveButton"> 
          <img v-if="activeButton === 'button2'"  class="black-right" src="../assets/icons/white-right.png" alt="arrow-right">
          <img v-else class="black-right" src="../assets/icons/black-right.png" alt="arrow-right">
        

        </div>
      </div>
      </div>
      <div class="slider swiper-container " >
          <div class="swiper-wrapper box-border">
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Beach.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Beach</div>
              </div> 
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/desert.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Desert</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Mountain.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Mountain</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Temple.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Temple</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Tower.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Tower</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Pyramid.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Beach</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Temple.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Temple</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Temple.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Temple</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Temple.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Temple</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slider__item">
                <img src="../assets/imgSlider/Temple.png" alt="img" />
                <div class="slider__overlay">
                  <span>Visit</span>
                </div>
                <div class="slider__subTitle">Temple</div>
              </div>
            </swiper-slide>
          </div>
        </div>
      </div>

    <!-- </div> -->
  </section>
</template>

<style type="text/tailwindcss">
@tailwind utilities;

.categories{
  @apply mt-[60px]
}

.categories__title {
  @apply font-Inter font-600 text-[56px];
}

.categories__decr{
  @apply flex justify-between
}

.categories__text {
  @apply font-Inter font-400 text-[16px] max-w-[370px] leading-[26px];
}

.slider {
  @apply mt-[60px] flex w-full h-[276px] overflow-hidden ;
}

.slider__item {
  @apply w-[170px] h-[230px]  relative  rounded-full;
}

.slider__item:hover .slider__overlay {
  @apply transition duration-300 opacity-100 rounded-full;
}

.slider__overlay {
  @apply absolute rounded-full  top-0 left-0 w-full h-full transform  opacity-0 transition-transform duration-300 ease-in-out bg-black bg-opacity-30;
}
.slider__overlay span {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-[600] text-[20px] font-Inter;
}
.slider__subTitle {
  @apply mt-0 text-center font-Inter font-500 text-[26px];
}
.navigation{
  @apply flex
}

.button-next{
  @apply flex justify-center items-center w-[54px] h-[54px] border-[1px] rounded-full border-black mr-[16px] cursor-pointer hover:bg-black 
}

.button-prev{
  @apply flex justify-center items-center w-[54px] h-[54px] border-[1px] rounded-full border-black  cursor-pointer hover:bg-black
}
</style>

