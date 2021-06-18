<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-modal :visible="true">
      <template #modal-footer>
        <b-button v-if="false">1st</b-button>
        <b-button>2nd</b-button>
      </template>
    </b-modal>
    <b-button @click="test">테스트</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  methods: {
    async test() {
      const res = await axios.post("/api/v-product/category-list");
      console.debug("test", res);
    },
  },
};
</script>
