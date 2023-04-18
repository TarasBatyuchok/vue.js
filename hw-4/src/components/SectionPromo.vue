<template>
  <section class="container">
    <div class="promo">
      <span class="wrap">
        <h1 class="promo__title">Discover the Best Lovely Places</h1>
        <p class="promo__text">
          Plan and book your perfect trip with expert advice, travel <br />
          tips, destination information and inspiration from us.
        </p>
        <div class="data-bar">
          <span class="data-bar__box-location">
            <span class="data-bar__title">Where</span>
            <span class="data-bar__wrap">
              <p class="data-bar__text">Center Point, Lo...</p>
              <img
                class="data-bar__icon"
                src="../assets/icons/marker.png"
                alt="icon"
              />
            </span>
          </span>
          <span class="data-bar__box-data">
            <span>
            <span class="data-bar__title">Date</span>
            <span class="data-bar__wrap">
              <p class="data-bar__text">09th March,2021</p>
              <img
                class="data-bar__icon"
                src="../assets/icons/Union.png"
                alt="icon"
              />
            </span>
          </span>
            <img
            class="data-abr__search"
            src="../assets/icons/search.png"
            alt="icon"
          />
          </span>
        </div>
      </span>
      <img class="promo__img" src="../assets/Image.png" alt="img" />
    </div>
  </section>
</template>

<script setup></script>

<style type="text/tailwindcss">
@tailwind utilities;

@layer utilities {
  .promo {
    @apply flex flex-col justify-center items-center
      lg:justify-between lg:flex-row lg:items-start;
  }

  .promo__img {
    @apply w-full
      sm:w-[400px]
      lg:w-[450px]
      xl:w-[500px];
  }

  .promo__title {
    @apply font-Sen  text-4xl text-center font-600 leading-30 max-w-[577px]
       md:font-700 md:text-4xl my-2  md:leading-30 md:text-left 
       lg:text-6xl lg:font-700 lg:leading-[70px]
       xl:text-7xl xl:font-700 xl:leading-86;
  }

  .promo__text {
    @apply font-Inter font-400 text-center  max-w-[500px] mx-auto mt-10 mb-10
      lg:text-left lg:mt-6 lg:mb-0 lg:mx-0;
  }
  .data-bar {
    @apply flex justify-between  relative w-[350px] bg-white mt-[44px] rounded-full pt-[11px] pb-[11px] pl-[28px] pr-[20px] box-border  mx-auto my-10
      md:w-[450px]
      lg:mt-[30px] lg:mb-0 lg:mx-0 lg:w-[500px]; 
  }
  .data-bar::after {
    @apply content-[''] bg-gray-200 absolute
      h-[47px] w-[2px] top-[14px] left-[40%];
  }
  .data-bar__title {
    @apply font-Inter font-500 text-[12px] leading-[18px]
    md:text-[18px];
  }
  .data-bar__wrap {
    @apply flex  items-center;
  }
  .data-bar__text {
    @apply flex mt-[6px] mr-[10px] font-Inter font-400 text-gray-400 text-[10px]
    md:text-[12px] md:mr-[26px];
    
  }
  .data-bar__icon {
    @apply w-[10px];
  }

  .data-bar__box-data{
    @apply flex
  }
  .data-abr__search{
    @apply ml-[20px] md:ml-[57px]
  }

  .wrap {
    @apply md:mt-9;
  }
}
</style>
