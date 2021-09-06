<template>
<div>
  <p>ご登録ありがとうございます</p>
  <button class="button" @click="login">ログインする</button>

</div>
</template>

<script>
export default{
  methods:{
    login(){
      this.$router.replace("/")
    }
  }
}
</script>

