<template>
  <section class="container">
    <div class="topDestination">
      <h2 class="topDestination__title">
        Top Destination
      </h2>
      <h4 class="topDestination__subTitle">
        Sort Briliant reasons Entrada should be your one-stop-shop!
      </h4>
    <div class="topDestination__wrap">
      <button class="topDestination__btn_london">
        London
      </button>
      <button class="topDestination__btn">
        Bangkok
      </button>
      <button class="topDestination__btn">
        England
      </button>
      <button class="topDestination__btn">
        Singapore
      </button>
      <button class="topDestination__btn">
        Italy
      </button>
    </div>
    </div>
    <div class="mt-[51px]">
      <div class="grid grid-cols-12 grid-rows-2 gap-4">
        <div class=" bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-01.png')] h-[250px]  col-span-5 xs:col-span-4 md:col-span-3 row-span-1  text-white rounded-lg p-4 text-2xl relative">
          <img src="../assets/grid/Group.png"/>
          <h5 class="absolute bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-03.png')] col-span-7  xs:col-span-8 md:col-span-4 row-span-1 lg:row-span-2  text-white rounded-lg p-4 text-2xl relative">
          <img src="../assets/grid/blackRating.png"/>
          <h5 class="absolute bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-04.png')] col-span-12 xs:col-span-5 row-span-1  text-white rounded-lg p-4 text-2xl relative">
          <img src="../assets/grid/blackRating.png"/>
          <h5 class="absolute bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-02.png')] col-span-12 row-span-6 xs:col-span-7  xs:row-span-1  md:col-start-1 md:col-end-4 md:col-span-3 md:row-span-1  text-white rounded-lg p-4 text-2xl relative">
          <img src="../assets/grid/Group.png"/>
          <h5 class="absolute right-4 xs:right-auto bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-05.png')] col-span-12  row-span-6 xs:col-span-5  md:col-span-2 md:row-span-1  text-white rounded-lg p-4 text-2xl relative">
          <img src="../assets/grid/Group.png"/>
          <h5 class="absolute right-4 xs:right-auto bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('src/assets/grid/Card-06.png')] col-span-12 row-span-6 xs:col-span-7 md:col-span-7 md:row-span-1 lg:col-span-3 lg:row-span-1  text-white rounded-lg p-4 text-2xl relative">
          <h5 class="absolute bottom-[30px] text-[20px] font-600">
            Vietnam
            <span class="block text-[14px] font-300">Worefall</span>
          </h5>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup>


</script>

<style type="text/tailwindcss">
@tailwind utilities;

@layer utilities {
  .topDestination{
    @apply text-center mt-[139px]
  }
  .topDestination__title{
    @apply font-Inter font-600 text-[56px];
  }
  .topDestination__subTitle{
    @apply font-Inter font-400 text-[16px] text-[#5B5F62] mt-[16px]
  }
  .topDestination__wrap{
    @apply mt-[28px]  w-[100%] flex justify-center
  }

  .topDestination__wrap div{
    @apply  w-[100px] h-[34px] bg-transparent mr-[14px] text-center  text-black flex justify-center   border-2 
    rounded-full 
    border-black  hover:text-white hover:bg-black cursor-pointer
  }
  .topDestination__btn{
    @apply  font-Inter font-400 text-[14px]  px-[10px] py-[20] h-[30px] mr-[14px] border-[1px] border-black text-black bg-transparent rounded-[46px]
    hover:text-white hover:bg-black hover:border-[1px] 
    hover:shadow-black
    hover:shadow-md
    transition 
    duration-300
  }
  .topDestination__btn_london{
    @apply  font-Inter font-400 text-[14px]  px-[10px] py-[20] h-[30px] mr-[14px] text-white bg-black rounded-[46px]
    hover:text-black hover:bg-transparent hover:border-[1px] border-black
    hover:shadow-black
    hover:shadow-md
    transition 
    duration-300
  }
}

</style>