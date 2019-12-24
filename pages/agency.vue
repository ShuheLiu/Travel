<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <p>This is agency page</p>
        <tra-footer style="position:absolute;"></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    export default {
        name: "agency",
        components: {TraFooter, TraMenu},
    }

</script>

<style scoped>

</style>