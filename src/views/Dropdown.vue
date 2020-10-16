<template>
  <div class="dropdown">
    <div class="title row">
      <h1>This is Dropdown Page</h1>
    </div>
    <section class="row">
      <div class="md-4">
        <b-dropdown id="dropdown" 
                    class="m-md-2"
                    :text="channelDropdownLabel"
                    >
          <b-dropdown-header id="dropdown-channel-label">채널 선택</b-dropdown-header>
          <b-dropdown-item v-for="(channel, i) in channelList" 
                          :key="i"
                          @click="searchFormData.channel = channel.value"
                          :value="channel.value">
              {{channel.text}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="md-8">
        <p>selected channel : {{searchFormData.channel}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data(){
    return {
      searchFormData:{
        channel: 0,
      },
      channelList: [
        {
          value:0,
          text:'채널 전체'
        },
        {
          value:1,
          text:'이메일'
        },
        {
          value:2,
          text:'Facebook'
        },
        {
          value:3,
          text:'카카오계정'
        },
        {
          value:4,
          text:'네이버'
        },
        {
          value:11,
          text:'Apple ID'
        },
      ]
    }
  },
  computed: {
    channelDropdownLabel(){
      const selectedChannel = this.searchFormData.channel;
      return !!selectedChannel ? (this.channelList.filter(it=>it.value == selectedChannel)[0].text) : '채널 선택'
    }
  },
  methods:{
  }
}
</script>