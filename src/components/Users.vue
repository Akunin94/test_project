<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-row class="tac">
      <el-col v-if="users">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item 
            :class="{active: activeUser && user.id === activeUser.id}"
            v-for="user in users" 
            :key="user.id"
            @click="getUser(user.id)"
          >
            <span>{{user.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
import {actionTypes} from '@/store/modules/users'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      users: state => state.users.data,
      activeUser: state => state.users.user
    })
  },
  methods: {
    getUser(id) {
      this.$store.dispatch(actionTypes.getUser, id)
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getUsersList)
  }
}
</script>

<style lang="scss" scoped>
.el-aside .el-menu {
  height: calc(100vh - 22px);
  overflow: auto;

  &-item.active {
    background: #409eff;
    color: #fff;
  }
}
</style>