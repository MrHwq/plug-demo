<template>
  <div>
    <el-input v-model="search" placeholder="请输入内容" clearable>
      <template slot="append">
        <el-button @click="dumpBookmarks(search)">搜索</el-button>
      </template>"
    </el-input>
    <div>{{ bookmarkNodes }}</div>
  </div>
</template>

<script>
export default {
  data() { return { bookmarkNodes: {}, seeach: '' } },
  created() { },
  mounted() {
    this.dumpBookmarks();
  },
  methods: {
    dumpTreeNodes() {
    },
    dumpBookmarks(query) {
      console.log(query)
      this.bookmarkNodes.query = query
      chrome.bookmarks.getTree((bookmarkNodes) => {
        console.log(bookmarkNodes);
        this.bookmarkNodes = bookmarkNodes;
      });
    }
  }
}
</script>

<style></style>