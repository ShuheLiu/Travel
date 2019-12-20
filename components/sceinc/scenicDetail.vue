<template>
    <el-card class="card">

    </el-card>
</template>

<script>
    export default {
        name: "scenicDetail",
        props:{
            sid:'',
        },

        methods:{
            getScenicDetail(){
                let data=this.sid;

            },
        }


    }
</script>

<style scoped>

    .card{
        min-height: 560px;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>