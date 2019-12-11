<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <strategy-list :strategyList="strategyList"></strategy-list>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import StrategyList from "../../components/strategy/strategyList";
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    export default {
        name: "myCollection",
        components: {TraFooter, TraMenu, StrategyList},

        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>