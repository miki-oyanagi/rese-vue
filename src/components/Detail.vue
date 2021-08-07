<template>
<div>
  <p>shopdetail</p>
  <p>{{name}}</p>
  <p>{{area}}</p>
  <p>{{genre}}</p>
  <p>{{detail}}</p>
  <p>{{image}}</p>
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
      area:"",
      genre:"",
      detail:"",
      image:""
    };
  },
  async created(){
    const detailgetdata =await axios.get(
      'http://localhost:8001/api/v1/shops/'+this.id
    );
    this.name=detailgetdata.data;
    this.area=detailgetdata.data.area;
    this.genre=detailgetdata.data.genre.name;
    this.detail=detailgetdata.data.detail
    this.image=detailgetdata.data.image;
  } 
}
</script>