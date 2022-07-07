<template>
    <div class="fixed w-full h-full top-0 flex justify-center items-center text-blue-500 underline space-x-4">
          <NuxtLink to="/">Home page</NuxtLink>
          <NuxtLink :to="{name: 'airport-id', params: {id: 2}}">Child</NuxtLink>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return{
            
        }
    },
    methods: {
        localePath() {
            return 
        }
    }
}
</script>
