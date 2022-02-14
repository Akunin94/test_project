<template>
  <el-header height="auto" v-if="user">
    <el-avatar :size="100" src="https://placekitten.com/300/300"></el-avatar>
    <h3>{{user.name}}</h3>
  </el-header>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.users.user
    })
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex; 
  align-items: center; 
  justify-content: flex-end; 
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(238, 241, 246);

  .el-avatar {
    margin-right: 20px;
  }
}
</style>