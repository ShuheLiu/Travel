<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    export default {
        name: "trip",
        components: {TraMenu},

        data(){
            return{
                pageIndex:'4',
            }
        }
    }
</script>

<style scoped>

</style>