<template>
    <tra-menu :pageIndex="pageIndex"></tra-menu>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    export default {
        name: "aboutMe",
        components: {TraMenu},

        data(){
            return{
                pageIndex:'6',
            }
        }
    }
</script>

<style scoped>

</style>