import Vue from 'vue';
import wx from 'weixin-js-sdk'


const plugin = {
    install(Vue, options) {

        Vue.prototype.$wxSkip = (url, tab) => {
            if (tab) {
                wx.miniProgram.switchTab({ url: url })
            } else {
                wx.miniProgram.navigateTo({ url: url })
            }
        };
    }
};

Vue.use(plugin);

