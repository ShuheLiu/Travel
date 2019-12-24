<template>
    <div>

        <el-container>
            <el-header>Header</el-header>
            <tra-menu :pageIndex="pageIndex"></tra-menu>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
                <p>This is agency page</p>
            </el-container>
        </el-container>

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