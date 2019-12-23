<template>
    <div class="bodyClass">
        <tra-menu :page-index="pageIndex"></tra-menu>
        <el-card style="width: 80%;min-height: 585px">

        </el-card>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    export default {
        name: "new",
        components: {TraFooter, TraMenu}
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        background: rgba(244, 247, 252, 0.82);
    }
</style>