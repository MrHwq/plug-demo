<template>
  <div v-loading="loading">
    <el-input v-model="search" placeholder="请输入内容" clearable>
      <template slot="append">
        <el-button @click="dumpBookmarks(search)">搜索</el-button>
      </template>"
    </el-input>
    <!-- <div>{{ bookmarkNodes }}</div> -->
    <el-tree :data="bookmarkNodes" :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span style="padding-left: 30px;">
          <el-button type="text" size="mini" @click="() => append(data)">
            Append
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkNodes: [],
      search: '',
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      loading: false
    }
  },
  created() { },
  mounted() {
    this.dumpBookmarks();
  },
  methods: {
    dumpTreeNodes() {
    },
    dumpBookmarks(query) {
      console.log(query)
      this.loading = true
      this.bookmarkNodes.query = query
      chrome.bookmarks.getTree((bookmarkNodes) => {
        console.log(bookmarkNodes);
        if (!(bookmarkNodes[0] || { title: 'none' }).title) {
          bookmarkNodes[0].title = '书签栏'
        }
        console.log(bookmarkNodes)
        this.bookmarkNodes = bookmarkNodes;
        this.loading = false
      });
    }
  }
}
</script>

<style></style>