<template>
  <section>
    <b-row class="form justify-content-md-center">
      <b-col cols="2">
        <h1 class="logo">로그인</h1>
      </b-col>
    </b-row>
    <b-form-row class="justify-content-md-center">
      <b-col cols="6">
        <b-form @submit.stop="onSubmit"
                @reset="onReset">
          <b-form-group label="ID:" label-for="info-id">
            <b-form-input id="info-id"
              v-model="form.id"
              required
              placeholder="Enter ID">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password:" label-for="info-pwd">
            <b-form-input id="info-pwd"
              v-model="form.pwd"
              type="password"
              required
              placeholder="Enter Password">
            </b-form-input>
          </b-form-group>
          <b-button block size="lg" type="submit" variant="primary">Submit</b-button>
          <p>※ 관계자가 아닌 경우 해당 사이트 접근을 제한 합니다.</p>
        </b-form>
      </b-col>
    </b-form-row>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return {
      form:{
        id:'',
        pwd:''
      }
    }
  },
  computed: {
  },
  methods:{
    onSubmit(e){
      console.log(e)
    },
    onReset(){

    }
  }
}
</script>

<style lang="scss">
  .logo{
    text-align: center;
  }
</style>
