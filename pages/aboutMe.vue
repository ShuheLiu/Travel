<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <div class="bodyClass">
                <el-card class="card">
                    <img src="../assets/image/photo1.png" class="image">
                    <div style="padding: 14px;">
                        <span>组长-刘歆怡</span>
                        <p>主要工作：前端代码编写</p>
                    </div>
                </el-card>
                <el-card class="card">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>组员-王紫微</span>
                        <p>主要工作：前端代码编写</p>
                    </div>
                </el-card>
                <el-card class="card">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>组员-陈子康</span>
                        <p>主要工作：后端代码编写</p>
                    </div>
                </el-card>
                <el-card class="card">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>组员-严涛涛</span>
                        <p>主要工作：数据库搭建</p>
                    </div>
                </el-card>
        </div>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    export default {
        name: "aboutMe",
        components: {TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'6',
            }
        }
    }
</script>

<style scoped>

    .bodyClass{
        width: 100%;
        min-height: 585px;
    }

    .image {
        border-radius: 2px;
        border: #7F828B solid 1px;
        width: 90%;
        margin-left: 5%;
    }

    .card{
        float: left;
        width: 21%;
        height: 400px;
        margin-left: 50px;
        margin-top: 20px;
    }
</style>