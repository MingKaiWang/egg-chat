<template>
  <row type='flex' class='content'>
    <i-col span='6'>
      <Tabs type='card'>
        <TabPane class='list' label="聊天" name="name1">聊天配置</TabPane>
        <TabPane class='list' label="好友" name="name2">好友列表</TabPane>
        <TabPane class='list' label="设置" name="name3">设置信息</TabPane>
      </Tabs>
    </i-col>
    <i-col span='18'>
      <p>聊天标题</p>
      <hr class='titleline'>
    </i-col>
  </row>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {}
  }
}
</script>

<style scoped>
.titleline {
  margin-top: 13px;
  border: 0.3px solid #dddee1
}
.list {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
}
</style>
