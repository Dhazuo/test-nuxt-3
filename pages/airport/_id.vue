<template>
    <div class="fixed top-0 w-full h-full flex justify-center items-center text-red-500">
        {{ text }}
    </div>
</template>

<script>

export default {
    name: "id",
    data(){
        return {
            text: `Parametro: ${this.$route.params.id}`
        }
    }
}
</script>
