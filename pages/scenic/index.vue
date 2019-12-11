<template>
    <div class="bodyClass">
        <tra-menu :page-index="pageIndex"></tra-menu>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    export default {
        name: "index",
        components: {TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'2',
            }
        }
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
    }
</style>