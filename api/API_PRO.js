export default {

    baseURL: 'http://192.168.43.19:8080/',

    method: 'post',

    //旅游攻略模块接口
    getStraList:{url:'index/strategy/index/time'},
    getStraDetail:{url:'index/strategy/detail'},
    getcollStraList:{},
    getMyCollStraList:{},
    collStra:{},
    uncollStra:{},

    //景区模块接口
    getSceList:{},
    getSceDetail:{},
    getSceComment:{},
    writeSceComment:{},

    //旅游线路模块接口
    getTripList:{},
    getTripDetail:{},


}
