<template>
  <div>
    <tra-menu :pageIndex="pageIndex"></tra-menu>
    <div class="bodyClass">
      <el-carousel class="caro" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>


    </div>
    <tra-footer style="position:absolute;"></tra-footer>
  </div>
</template>

<script>
  import TraMenu from "../components/TraMenu";
  import TraFooter from "../components/TraFooter";
  export default {
    components: {TraFooter, TraMenu},

    data(){
      return{
        pageIndex:'1',
      }
    },

    mounted:function () {
      this.interesting();
    },

    methods:{
      interesting(){
        onload = function() {
          var click_cnt = 0;
          var $html = document.getElementsByTagName("html")[0];
          var $body = document.getElementsByTagName("body")[0];
          $html.onclick = function(e) {
            var $elem = document.createElement("b");
            $elem.style.color = "#b9aafc";
            $elem.style.zIndex = 9999;
            $elem.style.position = "absolute";
            $elem.style.select = "none";
            var x = e.pageX;
            var y = e.pageY;
            $elem.style.left = (x - 10) + "px";
            $elem.style.top = (y - 20) + "px";
            clearInterval(anim);
            switch (++click_cnt) {
              case 3:
                $elem.innerText = "叔和";
                break;
              case 5:
                $elem.innerText = "长庚";
                break;
              case 8:
                $elem.innerText = "佛祖";
                break;
              case 10:
                $elem.innerText = "涛涛";
                break;
              case 15:
                $elem.innerText = "老师多给点分呗";
                break;
              case 20:
                $elem.innerText = "你已经点了20次了，要继续点点看吗？";
                break;
              case 25:
                $elem.innerText = "Hello World";
                break;
              case 42:
                $elem.innerText = "恭喜你发现了网站的奥秘";
                break;
              case 50:
                $elem.innerText = "emmmm真的这么无聊的嘛";
                break;
              case 80:
                $elem.innerText = "既然你诚心诚意点了这么多次就大发慈悲的告诉你后面真的没有别的彩蛋了";
                break;
              default:
                $elem.innerText = "景点信息系统";
                break;
            }
            $elem.style.fontSize = Math.random() * 10 + 15 + "px";
            var increase = 0;
            var anim;
            setTimeout(function() {
              anim = setInterval(function() {
                if (++increase == 150) {
                  clearInterval(anim);
                  $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
              }, 8);
            }, 70);
            $body.appendChild($elem);
          };
        };
      },

    }
  }
</script>

<style scoped>

  .bodyClass{
    width: 100%;
    min-height: 650px;
    background: rgba(244, 247, 252, 0.82);
  }

  .caro{
    width: 100%;
    margin-top: 5px;
  }

  .el-carousel__item:nth-child(4n) {
    background-image: url("../assets/image/1.jpg");
  }

  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../assets/image/2.jpg");
  }

  .el-carousel__item:nth-child(4n+2) {
    background-image: url("../assets/image/3.jpg");
  }

  .el-carousel__item:nth-child(4n+3) {
    background-image: url("../assets/image/4.jpg");
  }
</style>

