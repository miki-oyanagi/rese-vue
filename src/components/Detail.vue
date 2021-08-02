<template>
<div>
  <p>shopdetail</p>
  <p>{{name}}</p>
  <p>{{area}}</p>
  <p>{{genre}}</p>
  <p>{{detail}}</p>
  <p>{{image}}</p>
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
    const item =await axios.get(
      'http://localhost:8001/api/v1/shops/'+this.id
    );
    this.name=item.data.name;
    this.area=item.data.area.name;
    this.genre=item.data.genre.name;
    this.detail=item.data.detail;
    this.image=item.data.image;
  } 
}
</script>