<template>
<div>
  <p>shopdetail</p>
  <p>{{name}}</p>
  <p>{{area}}</p>
  <p>{{genre}}</p>
  <p>{{detail}}</p>
  <a><img class="img" :src="image"></a>
</div>
</template>

<script>
import axios from "axios";
export default {
  props:["id"],
  data(){
    return{
      name:"",
      // area:"",
      // genre:"",
      // detail:"",
      // image:""
    };
  },
  async created(){
    const detailgetdata =await axios.get(
      'http://localhost:8001/api/v1/shops/'+this.id
    );
    this.name=detailgetdata.data.data[this.id].name;
    this.area=detailgetdata.data.data[this.id].area.name;
    this.genre=detailgetdata.data.data[this.id].genre.name;
    this.detail=detailgetdata.data.data[this.id].detail;
    this.image=detailgetdata.data.data[this.id].image;
  } 
}
</script>