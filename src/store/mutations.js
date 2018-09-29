let defaultCity = '北京'

export default {

  changeCitys(state, city){
    //第一个值为state的值，第二个值为上面action外部传过来的值
    state.city = city
    try{
      localStorage.city = city
    }catch(e){}
}



}


