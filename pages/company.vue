<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
        <p>This is agency page</p>
        <tra-footer style="position:absolute;"></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    export default {
        name: "company",
        components: {TraFooter, TraMenu},
    }

</script>

<style scoped>

</style>