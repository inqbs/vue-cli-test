<template>
  <b-container class="crud" fluid="sm">
    <b-row class="justify-content-md-center mb-2">
      <b-col cols="6">
        <b-form class="crud__form  justify-content-md-center">
          <b-input-group-prepend aria-label="Toolbar with button groups and input groups">
            <b-form-input type="text" name="task" size="md" class="md-10" v-model="msg" />
            <b-button v-if="isEditMode" size="md" variant="outline-success"
              @click.stop="add">
              <b-icon-check aria-hidden="true"></b-icon-check>
            </b-button>
            <b-button v-else size="md" variant="outline-primary" @click.stop="add">
              <b-icon-plus aria-hidden="true"></b-icon-plus>
            </b-button>
          </b-input-group-prepend>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      {{taskList}}
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <b-list-group class="crud__list">
          <transition-group name="fade">
            <b-list-group-item v-for="(it, idx) in taskList" v-bind:key="it" class=" d-flex justify-content-between">
                <span>{{it}}</span>
                <b-button-group class="crud__btn-group">
                  <b-button variant="warning" @click.stop="edit(idx)">
                    <b-icon-pencil aria-hidden="true"></b-icon-pencil>
                  </b-button>
                  <b-button variant="danger" :id="'btn-remove-'+idx">
                    <b-icon-trash aria-hidden="true"></b-icon-trash>
                  </b-button>
                </b-button-group>
                <b-popover :target="'btn-remove-'+idx" triggers="hover" placement="top">
                  <template #title>삭제하시겠습니까?</template>
                  <b-button variant="danger" size="sm" @click.stop="remove(idx)">
                    <b-icon-trash aria-hidden="true"></b-icon-trash>
                  </b-button>
                </b-popover>
            </b-list-group-item>
          </transition-group>
          <b-list-group-item v-if="taskList.length <= 0">
            task is empty.
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Crud",
  computed:{
    taskList() { return this.$store.getters.taskList},
  },
  data(){
    return {
      target: 0,
      msg: '',
      isEditMode: false,
    }
  },
  methods:{
    add(){
      if(!this.msg){
        return;
      }else if(!!this.isEditMode){
        this.$store.dispatch('edit', {msg: this.msg, idx: this.target})
      }else{
        this.$store.dispatch('add', this.msg)
      }

      this.msg = ''
      this.target = 0
      this.isEditMode = false
    },
    edit(idx){
      this.target = idx
      this.msg = this.taskList[idx] || ''
      this.isEditMode = true
    },
    remove(idx){
      this.$store.dispatch('remove', idx)
    }
  }
};
</script>

<style lang="scss">
</style>