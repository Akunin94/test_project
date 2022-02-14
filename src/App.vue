<template>
  <el-container style="border: 1px solid #eee">
    <users />
    
    <el-container direction="vertical">
      <user-profile />
      <el-main>
        <chat />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Users from '@/components/Users'
import UserProfile from '@/components/UserProfile'
import Chat from '@/components/Chat'

export default {
  name: 'App',
  components: {
    Users,
    UserProfile,
    Chat
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 10px;
}
</style>
