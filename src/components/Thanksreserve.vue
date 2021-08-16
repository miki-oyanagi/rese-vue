<template>
<div>
  <p>ご予約ありがとうございます</p>
  <button class="button" @click="back">戻る</button>

</div>
</template>

<script>
export default{
  methods:{
    back(){
      this.$router.replace("/mypage")
    }
  }
}
</script>