<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    export default {
        name: "strategy",
        components: {TraMenu},

        data(){
            return{
                pageIndex:'3',
            }
        }
    }
</script>

<style scoped>

</style>