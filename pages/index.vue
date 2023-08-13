<script setup lang="ts">
let openModal = ref(false);

watch(openModal, (value) => {
    if (value) {
        setTimeout(() => {
            document?.getElementById('post')?.focus();
        }, 100);
    }
});

function autoGrow(element: any) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

</script>

<template>
    <div
        class="w-full min-h-screen flex flex-col px-8 sm:flex-row items-center justify-center gap-8 gap-y-12 xl:gap-16 max-w-screen-xl m-auto">
        <div class="text-center sm:text-right flex flex-col gap-2 sm:gap-5 max-w-xl">
            <h1 class="text-3xl sm:text-5xl xl:text-7xl font-bold tracking-wide leading-snug sm:leading-normal">Let The
                <span class="text-yellow-500">Word Flow</span>
            </h1>
            <h2 class="sm:text-lg tracking-wide xl:text-xl">Sometimes everything isn't going that well but we still have to
                keep going
            </h2>
        </div>

        <div class="flex items-center flex-col gap-4 sm:gap-8 w-full relative sm:max-w-xs 2xl:max-w-xl">
            <textarea name="post" class="textarea w-full textarea-bordered bg-transparent backdrop-blur-sm text-lg h-36"
                placeholder="Yet we still dont know what happened later..."></textarea>

            <button type="button" class="btn btn-block btn-warning btn-active">Share</button>

            <div class="absolute w-full h-full cursor-pointer" @click="openModal = true"></div>
        </div>

        <dialog id="postmodal" class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': openModal }">

            <form method="dialog" class="modal-box bg-yellow-50 dark:bg-primary">
                <div class="flex items-center justify-between mb-10">
                    <h1 class="text-2xl font-bold ">Let it <span class="text-yellow-500">Out</span></h1>
                    <button class="opacity-25" @click="openModal = false">
                        <Icon name="ep:close" class="text-2xl" />
                    </button>
                </div>
                <textarea name="post" id="post"
                    class="textarea w-full textarea-bordered bg-transparent text-lg h-36 min-h-[9rem] max-h-96 focus:ring-0 focus:border-yellow-500 focus:outline-none"
                    @input="autoGrow($event.target)"
                    placeholder="Yet we still dont know what happened later..."></textarea>

                <div class="modal-action">
                    <button type="button" class="btn btn-block btn-warning btn-active">Share</button>
                </div>
            </form>

            <div class="modal-backdrop" @click="openModal = false"></div>
        </dialog>


    </div>
</template>
  