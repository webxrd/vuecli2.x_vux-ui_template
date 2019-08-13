import Vue from 'vue'
import Vuex from 'vuex'
import { sesSetState, sesGetState } from "@/tools/session";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data:{
            token: '',// 身份唯一表示token
            id:'',// 身份特权
            isLogin:0,// 是否登陆 默认值0——未登录
            openid:'',// 标识符之一
            username: ''// 用户的名字
        }
    },
    getters: {
        // 获取全部state中全部data值
        Getters_GetData: (state)=>{
            return state.data
        },
    },
    mutations: {
        Mu_SetData: (state,data) => {   // 通过actions直接设置完整的data
            state.data = data;
        },
        Mu_SetToken:(state,token)=>{      // 通过actions设置token
            state.data.token = token;
        },
        Mu_SetIsLogin:(state,isLogin) => {       // 通过actions设置isLogin
            state.data.isLogin = isLogin;
        },
        Mu_SetId:(state,id)=>{       // 通过actions设置id
            state.data.id = id;
        },
        Mu_SetOpenId:(state,openid)=>{       // 通过actions设置uid
            state.data.openid = openid;
        },
        Mu_SetUserName:(state,username)=>{       // 通过actions设置uid
            state.data.username = username;
        },
        Mu_SetUpdateUserId:(state,UpdateUserId)=>{       // 通过actions设置uid
            state.data.data.UpdateUserId = UpdateUserId;
        },
    },
    actions: {  //context默认相当于子组件中的this.$store
        Ac_SetData: (context,data) => {	            // 控制mutations设置完整的 data值
            context.commit('Mu_SetData',data)
        },
        Ac_RestData: (context,data) => {
            context.commit('Mu_SetData',resetData())
        },
        Ac_Set_Gather: (context,data = {token:'', id:'', isLogin: 0,openid:'',username:''})=>{ // 登陆时，一次性设置四个值
            console.log('Ac_Set_Gather------------Ac_Set_GatherAc_Set_Gather------------Ac_Set_GatherAc_Set_Gather------------Ac_Set_Gather')
            var {token,isLogin,id,openid,username} = {...data};
            context.commit('Mu_SetToken',token);
            context.commit('Mu_SetIsLogin',isLogin);
            context.commit('Mu_SetId',id);
            context.commit('Mu_SetOpenId',openid);
            context.commit('Mu_SetUserName',username);
        },
        Ac_Set_UpdateUserId: (context,id) => {	            // 控制mutations设置完整的 data值
            context.commit('Mu_SetUpdateUserId',id)
        },
    },
});
// 缓存 state.data
window.addEventListener("beforeunload",(ev)=>{
    let stateDate = store.state.data;
    sesSetState(stateDate);
});
// 获取并还原 state.data
let stateData = sesGetState();
if (stateData) {
    store.state.data = stateData;
}
export default store
