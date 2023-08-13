<script setup lang="ts">
let openModal = ref(false);


</script>

<template>
    <div class="w-full min-h-screen flex flex-col px-8 sm:flex-row items-center justify-center gap-8 gap-y-12 xl:gap-16 max-w-screen-xl m-auto">
        <div class="text-center sm:text-right flex flex-col gap-2 sm:gap-5 max-w-xl">
            <h1 class="text-3xl sm:text-5xl xl:text-7xl font-bold tracking-wide leading-snug sm:leading-normal">Let's The <span class="text-yellow-500">Word</span>
                Flow</h1>
            <h2 class="sm:text-lg tracking-wide xl:text-xl">Sometimes everything isn't going that well but we still have to keep going
            </h2>
        </div>

        <div class="flex items-center flex-col gap-4 w-full relative sm:max-w-xs 2xl:max-w-xl">
            <textarea name="post" id="post" class="textarea w-full textarea-bordered bg-transparent text-lg h-36"
                placeholder="Yet we still dont know what happened later..."></textarea>

            <button type="button" class="btn btn-block btn-warning btn-active">Share</button>

            <div class="absolute w-full h-full" @click="openModal = true"></div>
        </div>

        <dialog id="postmodal" class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': openModal }">

            <form method="dialog" class="modal-box bg-yellow-50 dark:bg-primary">
                <h1 class="text-2xl font-bold mb-10">Let it <span class="text-yellow-500">Out</span></h1>
                <textarea name="post" id="post" class="textarea w-full textarea-bordered bg-transparent text-lg h-36"
                    placeholder="Yet we still dont know what happened later..."></textarea>

                <div class="modal-action">
                    <button type="button" class="btn btn-block btn-warning btn-active">Share</button>
                </div>
            </form>

            <div class="modal-backdrop" @click="openModal = false"></div>
        </dialog>


    </div>
</template>
  