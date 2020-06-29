const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {

    // publicPath: '/Public/activities/h5/',
    publicPath: './',
    // lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('_api', resolve('src/api'))
            .set('_views', resolve('src/views'))
            .set('_utils', resolve('src/utils'))
            .set('_native', resolve('src/native'))
            .set('@images', resolve('src/assets/images'))
            .set('@miGuan', resolve('src/assets/miGuan'))
            .set('_components', resolve('src/components'))
            .set('_mixins', resolve('src/mixins'));
    },

    filenameHashing: true,



};
