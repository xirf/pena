<script setup>
let posts = ref([]);
let lastCursor = ref(0);

await useFetch(`/api/getPost`, {
    method: 'GET',
    onResponse({ request, response, options }) {
        posts.value = response._data
    }
});

async function loadMorePosts() {
    const cursor = posts.value.length > 0 ? posts.value[ posts.value.length - 1 ].id : '';
    if (lastCursor == cursor)
        return;

    try {
        const response = await fetch(`/api/getPost?cursor=${cursor}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if (data && data[ data.length - 1 ].id != lastCursor)
            lastCursor = data[ data.length - 1 ].id;

        posts.value = [ ...posts.value, ...data ];
    } catch (error) {
        console.error(error);
    }
}

function timeAgo(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) {
        return diff + ' seconds ago';
    } else if (diff < 3600) {
        return Math.floor(diff / 60) + ' minutes ago';
    } else if (diff < 86400) {
        return Math.floor(diff / 3600) + ' hours ago';
    } else {
        return Math.floor(diff / 86400) + ' days ago';
    }
}

onMounted(() => {
    const container = document.querySelector('#containers');

    container.addEventListener('scroll', () => {
        const bottomOfContainer = ((container.scrollTop + container.clientHeight) + 100) >= container.scrollHeight;
        if (bottomOfContainer) {
            loadMorePosts();
        }
    });
});

onUnmounted(() => {
    const container = document.querySelector('#containers');
    container.removeEventListener('scroll', loadMorePosts);
});


</script>

<template>
    <div
        class="max-w-screen-sm flex flex-col max-h-screen border-x-2 border-gray-300 p-1 border-opacity-10 h-screen m-auto pt-20 md:pt-4 z-50">
        <div class="max-h-full overflow-auto px-8 scrollbar-thin scrollbar-thumb-[#b6bde422] scrollbar-thumb-rounded-lg"
            id="containers">
            <div class="w-full">
                <div>
                    <h1 class="text-3xl font-bold">
                        What Other <span class="text-yellow-500">Write</span>
                    </h1>
                    <div class="divider"></div>
                </div>
                <ul v-for="post in posts" class="h-auto flex flex-col gap-4">
                    <div
                        class="bg-primary dark:bg-yellow-50 backdrop-blur-sm my-2 bg-opacity-5 dark:bg-opacity-5 rounded-xl shadow-md p-4">
                        <div class="flex gap-4">
                            <div class="flex-1">
                                <div class="flex justify-between">
                                    <div class="flex gap-4 items-center justify-between w-full">
                                        <div class="text-lg text-gray-400 font-bold">Someone</div>
                                        <div class="text-sm text-gray-500">{{ timeAgo(new Date(post.createdAt)) }}
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-4" v-for="line in post.content.split('\n')">
                                    <p>{{ line }}</p>
                                </div>
                                <div class="flex justify-between mt-4">
                                    <div class="flex gap-2 items-center">
                                        <button
                                            class="btn btn-circle btn-xs btn-ghost opacity-50 hover:bg-pink-500 hover:opacity-100 hover:bg-opacity-50 hover:text-red-500">
                                            <Icon name="bx:heart" class="text-xl" />
                                        </button>
                                        <span class="text-sm text-gray-500">{{ post.reactions }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>
