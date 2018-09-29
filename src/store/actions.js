export default {
   changeCity(ctx,city){
     //接收两个参数一个是上下文,一个是从dispatch触发的值,action调用mutations值必须是通过commit方法
    ctx.commit('changeCitys',city)
   }
}
