<template>
  <section class="container">
    <div class="customer">
    <div class="slider-img swiper-cantainer">
      <div class="swiper-wrapper box-border">
      <div class="wrap-for-img swiper-slide">
        <img src="../assets/Images-customer.png" alt="customer" />
      </div>
      <div class="wrap-for-img swiper-slide">
        <img src="../assets/customers/christina-wocintechchat.jpg" alt="customer" />
      </div>
      <div class="wrap-for-img swiper-slide">
        <img src="../assets/customers/brooke-cagle.jpg" alt="customer" />
      </div>
      <div class="wrap-for-img swiper-slide">
        <img src="../assets/customers/joseph-gonzalez.jpg" alt="customer" />
      </div>
    </div>
    </div>

      <div class="customer__feedback">
        <div class="customer__line"></div>
        <h4 class="customer__title">
          A customer Said <br />
          About us:
        </h4>
        <div class="customer__slider swiper-cantainer">
          <div class="swiper-wrapper box-border">
            <div class="customer__card swiper-slide">
              <span>
                <p class="customer__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eius consequatur
                   rem dolorem quod ipsum magnam minus incidunt necessitatibus officiis eligendi eveniet animi est, 
                  minima sit quis ab blanditiis atque!
                </p>
                <div class="customer__rating">
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  
                </div>

                <p class="customer__name">Andrew Sarm</p>
                <p class="customer__surname">Andrew Sarm</p>
              </span>

              <div class="customer__navigation mt-[20px]">
                <div
                  class="customer__button-next"
                  v-on:mouseover="setActiveButton('button1')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button1'"
                    class="white-left"
                    src="../assets/icons/white-left.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-left"
                    src="../assets/icons/black-left.png"
                    alt="arrow-right"
                  />
                </div>
                <div
                  class="customer__button-prev"
                  v-on:mouseover="setActiveButton('button2')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button2'"
                    class="black-right"
                    src="../assets/icons/white-right.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-right"
                    src="../assets/icons/black-right.png"
                    alt="arrow-right"
                  />
                </div>
              </div>
            </div>
            <div class="customer__card swiper-slide">
              <span>
                <p class="customer__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Consequuntur eos natus praesentium. Praesentium, 
                    labore eligendi? Explicabo laudantium assumenda 
                    ipsum molestiae expedita perspiciatis eum accusantium 
                    cumque atque, quasi ipsam porro numquam.
                </p>
                <div class="customer__rating">
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                </div>

                <p class="customer__name">Christina Wocint</p>
                <p class="customer__surname">Christina Wocint</p>
              </span>

              <div class="customer__navigation mt-[20px]">
                <div
                  class="customer__button-next"
                  v-on:mouseover="setActiveButton('button1')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button1'"
                    class="white-left"
                    src="../assets/icons/white-left.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-left"
                    src="../assets/icons/black-left.png"
                    alt="arrow-right"
                  />
                </div>
                <div
                  class="customer__button-prev"
                  v-on:mouseover="setActiveButton('button2')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button2'"
                    class="black-right"
                    src="../assets/icons/white-right.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-right"
                    src="../assets/icons/black-right.png"
                    alt="arrow-right"
                  />
                </div>
              </div>
            </div>
            <div class="customer__card swiper-slide">
              <span>
                <p class="customer__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Ratione sunt quia, corrupti 
                  ab harum minima consequuntur quaerat voluptate  
                  excepturi cum nihil quo?
                  excepturi cum nihil quo?
                </p>
                <div class="customer__rating">
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />

                </div>

                <p class="customer__name">Brooke Cagle</p>
                <p class="customer__surname">Brooke Cagle</p>
              </span>

              <div class="customer__navigation mt-[20px]">
                <div
                  class="customer__button-next"
                  v-on:mouseover="setActiveButton('button1')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button1'"
                    class="white-left"
                    src="../assets/icons/white-left.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-left"
                    src="../assets/icons/black-left.png"
                    alt="arrow-right"
                  />
                </div>
                <div
                  class="customer__button-prev"
                  v-on:mouseover="setActiveButton('button2')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button2'"
                    class="black-right"
                    src="../assets/icons/white-right.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-right"
                    src="../assets/icons/black-right.png"
                    alt="arrow-right"
                  />
                </div>
              </div>
            </div>
            <div class="customer__card swiper-slide">
              <span>
                <p class="customer__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus 
                      corrupti ut recusandae expedita accusamus quas magni debitis 
                      repudiandae doloremque. Numquam consequatur 
                      accusamus nemo dolore.
                </p>
                <div class="customer__rating">
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                  <img src="../assets/icons/star.png" alt="star" />
                </div>

                <p class="customer__name">Joseph Gonzalez</p>
                <p class="customer__surname">Joseph Gonzalez</p>
              </span>

              <div class="customer__navigation mt-[20px]">
                <div
                  class="customer__button-next"
                  v-on:mouseover="setActiveButton('button1')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button1'"
                    class="white-left"
                    src="../assets/icons/white-left.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-left"
                    src="../assets/icons/black-left.png"
                    alt="arrow-right"
                  />
                </div>
                <div
                  class="customer__button-prev"
                  v-on:mouseover="setActiveButton('button2')"
                  v-on:mouseout="resetActiveButton"
                >
                  <img
                    v-if="activeButton === 'button2'"
                    class="black-right"
                    src="../assets/icons/white-right.png"
                    alt="arrow-right"
                  />
                  <img
                    v-else
                    class="black-right"
                    src="../assets/icons/black-right.png"
                    alt="arrow-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    var mySwiper = new Swiper(".customer__slider", {
      controller: {
          control: imgSider // swiper2 - ім'я другого слайдера
      },
      // autoplay: {
      //       delay: 3000,
      //   },
      allowTouchMove: false,
      loop: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-130%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["130%", 0, -500],
        },
      },
      
      slidesPerView: 1,
      spaceBetween: 30,

      navigation: {
        nextEl: ".customer__button-prev",
        prevEl: ".customer__button-next",
      },
    });
    var imgSider = new Swiper(".slider-img", {
      controller: {
          control: mySwiper // swiper2 - ім'я другого слайдера
      },
      autoplay: {
          delay: 5000,
        },
        loop: true,
        effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-130%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["130%", 0, -500],
        },
      },
        slidesPerView: 1,
        spaceBetween: 20,
      navigation: {
        nextEl: ".customer__button-prev",
        prevEl: ".customer__button-next",
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
      if (button === "button1") {
        this.button1Active = true;
        this.button2Active = false;
      } else if (button === "button2") {
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
};
</script>

<style type="text/tailwindcss">
@tailwind utilities;
.customer {
  @apply flex-col-reverse lg:flex-row mt-[132px] lg:pl-[60px] flex justify-between items-center;
}

.wrap-for-img{
  @apply  hidden w-[390px] lg:block  rounded-full bg-transparent  overflow-hidden 
}
.img-wrap img{
  @apply bg-cover bg-center bg-no-repeat
}

.customer__feedback {
  @apply w-[350px] xs:w-[400px] sm:w-[450px] md:w-[500px] lg:ml-[20px] xl:w-[537px]; 
}

.customer__line {
  @apply w-[67px] h-[8px] bg-yellow rounded-[4px];
}

.customer__title {
  @apply font-Inter font-600 text-[42px] md:text-[56px] leading-[66px] text-black mt-[12px];
}

.customer__card {
  @apply max-w-[537px] min-h-[238px] pt-[32px] pl-[30px] pr-[34px] pb-[30px] rounded-[14px]
   bg-white mt-[26px];
}
.customer__text {
  @apply font-Inter text-[18px] font-[400px] leading-[30px];
}

.customer__rating {
  @apply flex mt-[27px];
}
.customer__rating img {
  @apply m-[3.64px];
}

.customer__name {
  @apply font-Inter font-500 text-[20px] leading-[20px] text-black mt-[17px];
}
.customer__surname {
  @apply font-Inter font-400 text-[12px] leading-[12px] text-gray-400 mt-[8px];
}

.customer__slider {
  @apply flex w-full justify-center overflow-hidden relative;
}
.slider-img{
  @apply flex w-[390px] overflow-hidden relative;
}

.customer__navigation {
  @apply flex absolute right-[30px] bottom-[30px] lg:bottom-[20px]  z-30;
}

.customer__button-next {
  @apply flex justify-center items-center w-[40px] h-[40px] border-[1px] rounded-full border-black mr-[16px] cursor-pointer hover:bg-black;
}

.customer__button-prev {
  @apply flex justify-center items-center w-[40px] h-[40px] border-[1px] rounded-full border-black  cursor-pointer hover:bg-black;
}
</style>
