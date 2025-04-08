const base = {
    get() {
        return {
            url : "http://localhost:8080/wangluoke/",
            name: "wangluoke",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangluoke/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网络类课程思政学习系统"
        } 
    }
}
export default base
