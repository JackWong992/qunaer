<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- 路由内容加载一次以后就不会重新加载，直接从内容中调取数据，提高性能优化 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
