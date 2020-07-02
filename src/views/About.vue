<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";

// import { List } from "firemodel";
// import { PosProduct } from "../models/PosProduct";
import Vue from "vue";
import { RealTimeClient } from "universal-fire";

export default class About extends Vue {
  async mounted() {
    const db = await RealTimeClient.connect({ mocking: true });
    console.log(db);
  }
  get products() {
    return [];
    // return List.first(PosProduct, 10, { offsets: { dispensary: "mint-mesa" } });
  }
}
</script>
