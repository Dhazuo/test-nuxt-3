<template>
    <div>
        <div>
            <button @click="prueba">ASDASD</button>
        </div>
        <div>
                    {{ $route.params.id }}

        </div>
        <div>
        {{ $route.params.name }}
    </div>
    </div>
    
</template>
<script>
let available = [
    {
        id: 5,
        name: "algo"
    },
    {
        id: 4,
        name: "fksldfkl"
    }
]
export default {
    middleware(context){
        let find = available.findIndex(item => {
            return item.id == context.params.id
        })
        let find2 = available.findIndex(item => {
            return item.name == context.params.name
        })
        if(find < 0 || find2 < 0) {
            context.redirect("/")
        }
    },
    methods: {
        prueba(){
            this.$router.push("/")
        }
    }
}
</script>
