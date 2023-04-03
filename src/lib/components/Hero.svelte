<script lang="ts">
  import { ComputerDesktop } from "svelte-heros-v2";
  import LinkedIn from "$lib/components/icons/LinkedIn.svelte";
  import GitHub from "$lib/components/icons/GitHub.svelte";
  import avatar from "$lib/assets/avatar.jpg";
</script>

<div
  class="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full ">
  <div class="flex flex-col z-20">
    <div
      class="flex flex-col items-start gap-3 border-2 border-[#3e3e3e] p-1 md:p-2 pop max-w-xs md:max-w-sm">
      <h1 class="m-0 flex flex-row items-end text-2xl md:text-3xl">
        Hello everyone
        <div class=" text-5xl md:text-6xl w-fit h-fit">👋</div>
        ,
      </h1>
      <h1 class="text-5xl md:text-7xl font-concert p-0 m-0">I'm Micael</h1>
      <h1 class="text-oxford-500 text-xs md:text-base">
        <ComputerDesktop
          tabindex="-1"
          color="black"
          variation="solid"
          size="100%"
          class="inline-block h-fit w-[18px] md:w-6" />
        Full stack developer at heart, with an emphasis on the front-end and user-friendly
        interfaces. Checkout my skills and projects.
      </h1>
    </div>
    <div
      class="z-20 hidden md:flex flex-row mt-3 ml-2 pop w-fit border-2 border-[#3e3e3e]">
      <a
        href="https://www.linkedin.com/in/micael-fernandes21/"
        class="w-12 p-2 hover:bg-black/20">
        <LinkedIn />
      </a>
      <a
        href="https://github.com/FirerPlayer"
        class="w-12 p-2 hover:bg-black/20">
        <GitHub />
      </a>
    </div>
  </div>

  <div class="z-20 flex mb-4 md:mt-0 md:-top-9 md:relative">
    <div
      class="flex md:hidden flex-col gap-3 pop mr-5 w-fit h-fit p-2 border-2 border-[#3e3e3e]">
      <a href="https://www.linkedin.com/in/micael-fernandes21/" class="w-10">
        <LinkedIn />
      </a>
      <a href="https://github.com/FirerPlayer" class="w-10">
        <GitHub />
      </a>
    </div>
    <div class="ring-2 w-fit md:ml-12">
      <img
  style=" box-shadow: none"
        class=" w-40 md:w-48 pop border-2 border-[#3e3e3e] rounded-xl"
        src={avatar}
        alt="Micael Fernandes" />
    </div>
  </div>
</div>
