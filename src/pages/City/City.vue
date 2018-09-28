<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :hot="hotCities" :cities="cities"
                :letter="letter"></city-list>
      <city-alphabet :cities="cities" @change="handleChangeLetter"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    import axios from 'axios'
    export default {
        name: "City",
        data() {
          return {
            hotCities: [],
            cities: {},
            letter:''
          }
        },
        components: {
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabet
        },
        methods: {
            getCityInfo(){
              axios.get('api/city.json')
                .then( this.getCityInfoSucc )
            },
            getCityInfoSucc(res){
              // const res = res.data
              res = res.data
              console.log(res)
              if( res.data && res.ret ){
                  const  data = res.data
                  this.hotCities = data.hotCities
                  this.cities = data.cities
              }
            },
            handleChangeLetter(letter){
              this.letter = letter
              console.log('父亲接收的值：'+letter)
            }
        },
        mounted(){
            this.getCityInfo()
        }

    }
</script>

<style scoped>

</style>
