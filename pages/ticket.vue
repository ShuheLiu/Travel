<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>

    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    export default {
        name: "ticket",
        components: {TraMenu},

        data(){
            return{
                pageIndex:'2',
            }
        }
    }
</script>

<style scoped>

</style>