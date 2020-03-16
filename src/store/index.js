import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // dispatch-->actions-->mutations-->state
    state: {
        // 排行榜收藏的歌曲属性，有歌曲的全部属性，包括 歌名music 所属belong 状态like 
        ne: [],
        kg: [],
        qq: [],

        com: [], // 评论收藏  收藏进来的应该是一个个对象属性——ID 歌名 歌词 之类的  或者只有歌名和ID  而后点击会跳转到评论页面显示
    },
    getters: {
        getNE(state) {
            return state.ne;
        },
        getKG(state) {
            return state.kg;
        },
        getQQ(state) {
            return state.qq;
        },
        getCOM(state) {
            return state.com;
        }
    },
    mutations: {
        AddMusic(state, arg) {
            if (arg.belong == 'ne') {
                state.ne.push(arg);
            } else if (arg.belong == 'kg') {
                state.kg.push(arg);
            } else if (arg.belong == 'qq') {
                state.qq.push(arg);
            }
        },
        // 这个like方法具体实现是取反  也就是可以同时用于like=false或者true的情况  就不用多写一个dislike方法了
        LikeMusic(state, arg) {
            if (arg.belong == 'ne') {
                state.ne[state.ne.map(item => item.music).indexOf(arg.music)].like = !state.ne[state.ne.map(item => item.music).indexOf(arg.music)].like;
            } else if (arg.belong == 'kg') {
                state.kg[state.kg.map(item => item.music).indexOf(arg.music)].like = !state.kg[state.kg.map(item => item.music).indexOf(arg.music)].like;
            } else if (arg.belong == 'qq') {
                state.qq[state.qq.map(item => item.music).indexOf(arg.music)].like = !state.qq[state.qq.map(item => item.music).indexOf(arg.music)].like;
            }
        },
        // 这个方法用于把点击了收藏的评论放到com的数组里面
        AddComment(state, arg) {
            state.com.push(arg);
        },
        // 移除
        DeleteComment(state, arg) {
            state.com.splice(state.com.map(item => item.str).indexOf(arg.str), 1);
        }
    },
    actions: {
        addMusic({ commit }, arg) {
            commit("AddMusic", arg);
        },
        likeMusic({ commit }, arg) {
            commit("LikeMusic", arg);
        },
        addCom({ commit }, arg) {
            commit("AddComment", arg);
        },
        deleteCom({ commit }, arg) {
            commit("DeleteComment", arg);
        }
    },
})