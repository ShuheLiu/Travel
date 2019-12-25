export default {

    baseURL: 'http://192.168.43.19:8080/',

    //baseURL: 'http://127.0.0.1:8080/',
    method: 'post',

    //登录模块接口
    setVisitorAccount:{url:'register/visitor'},
    setAgencyAccount:{url:'register/travelagency'},
    setCompanyAccount:{url:'register/company'},
    isVisitorSuccess:{url:'login/visitor'},
    isAgencySuccess:{url:'login/travelagency'},
    isCompanySuccess:{url:'login/company'},
    settingCode:{},

    //旅游攻略模块接口
    getStraList:{url:'index/strategy/index/time'},
    getStraDetail:{url:'index/strategy/detail'},
    getcollStraList:{url:'index/strategy/index/collect'},
    getMyCollStraList:{url:'visitor/mycollection'},//未测v
    collState:{url:'visitor/collectstrategystate'},//未测v
    collStra:{url:'visitor/collectstrategy'},//未测v
    uncollStra:{url:'visitor/cancelcollectstrategy'},//未测v
    newStrategy:{url:'visitor/newstrategy'},//未测v
    like:{url:'visitor/likestrategy'},//undo v
    searchStra:{url:'index/strategy/search'},

    //景区模块接口
    getSceList:{url:'index/scenic/index'},
    getSceDetail:{url:'index/scenic/detail'},
    getSceComment:{url:'index/scenic/comment'},
    writeSceComment:{url:'visitor/commentscenic'},//未测v
    getTicket:{url:'index/ticket/searchbykeyword'},
    buySceTicket:{url:'visitor/buyticket'},//未测v
    writeSceState:{url:'visitor/commentscenicstate'},//未测v
    changeSceComment:{url:'visitor/modifysceniccomment'},//未测v
    searchSce:{url:'index/scenic/searchbykeyword'},

    //旅游线路模块接口
    getTripList:{url:'index/trip/index'},
    getTripDetail:{url:'index/trip/detail'},
    attendThisTrip:{url:'visitor/attendtrip'},//未测v
    getTraCommentList:{url:'index/trip/travelagencycomments'},
    attendState:{url:'visitor/attendtripstate'},//未测v


    //我的
    getMyMessage:{url:'visitor/myinfo'},//未测v
    changeMyMessage:{url:'visitor/modifyinfo'},//未测v
    changePwd:{},//undo v
    deleteself:{url:'visitor/deleteself'},//未测v
    getMyTicket:{url:'visitor/myticket'},//未测v
    getMyTr:{url:'visitor/mytrip'},//未测v
    commentTrip:{url:'visitor/commenttrip'},//未测v
    changeCommentTrip:{url:'visitor/modifytripcomment'},//未测v

    //旅行社
    getAgencyMessage:{url:'travelagency/myinfo'},
    changeAgencyMessage:{url:'travelagency/modifyinfo'},
    changeAgencyPwd:{url:'travelagency/modifyinfo'},
    deleteAgency:{url:'travelagency/myinfo'},
    addTrip:{url:'travelagency/newtrip'},
    deleteTrip:{url:'travelagency/deletetrip'},
    MTrip:{url:'travelagency/mytrip'},

    //承包公司
    getCompanyMessage:{url:'company/myinfo'},
    changeCompanyMessage:{url:'company/modifyinfo'},
    changeCompanyPwd:{url:'company/modifyinfo'},
    deleteCompany:{url:'company/deleteself'},
}
