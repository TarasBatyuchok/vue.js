<template>
  <section class="container">
    <div class="newsletter">
        <div class="newsletter__block">
          <div class="skin-deep"></div>
          <h4 class="newsletter__title">Sign up to our newsletter</h4>
          <h5 class="newsletter__subtitle">Reciev latest news, update, and many other things<br> every week.</h5>
          <div class="newsletter__input">
            <input type="text" placeholder="Enter Your email address">
            <div class="input__icon">
              <img src="../assets/icons/telegram.png" alt="icon">
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>


</script>


<style type="text/tailwindcss">
@tailwind utilities;
.newsletter{
  @apply mt-[124px] 
}
.newsletter__block{
  @apply bg-yellow relative pb-[75px] pt-[75px] px-[10px] xl:px-[200px] xxl:px-[341px] rounded-[12px] text-center flex flex-col items-center 
}

.newsletter__title{
  @apply font-Inter font-600 text-[20px] lg:text-[40px] 
}
.newsletter__subtitle{
  @apply font-Inter font-400 text-[13px] lg:text-[16px] mt-[16px] text-gray-600
}

.newsletter__input{
  @apply bg-white sm:w-[60%] lg:w-[50%] xl:w-[450px] flex rounded-[12px]  mt-[40px] relative  p-[10px]
}
.newsletter__input input{
  @apply w-full rounded-[12px] pl-[26px] text-black  border-0  focus:outline-none  caret-carrot font-Inter font-400 text-[14px]
}

.input__icon{
  @apply h-[40px] w-[40px] bg-carrot rounded-[12px] overflow-hidden p-[12px]
  hover:shadow-carrot
  hover:shadow-md
  transition 
  duration-300
  cursor-pointer
}


.skin-deep{
  @apply absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('../assets/layout.png')]
}


</style>
