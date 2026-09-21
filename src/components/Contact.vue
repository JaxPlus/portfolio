<script setup lang="ts">
</script>

<template>
    <div class="w-full mb-24 flex flex-col items-center">
        <h2 class="text-4xl text-center mb-6">{{ $t("contact_title") }}</h2>
        <div class="w-fit p-4 flex justify-center items-center border-2 rounded-2xl bg-black">
            <form class="flex flex-col justify-center items-center" action="https://formspree.io/f/mbglorkr" method="POST">
                <label>
                    <span class="">Your name:</span> <br />
                    <input class="m-2 p-2 border rounded-lg" type="text" name="sender-name">
                </label>
                <label>
                    <span>Your email:</span> <br />
                    <input class="m-2 p-2 border rounded-lg" type="email" name="email">
                </label>
                <label>
                    <span>Your message:</span> <br />
                    <textarea class="m-2 p-2 px-4 border rounded-lg" name="message"></textarea>
                </label>
                <button class="cursor-pointer" type="submit">Send</button>
            </form>
        </div>
    </div>
</template>
