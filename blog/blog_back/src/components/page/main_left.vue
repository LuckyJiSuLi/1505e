<template>
   <el-row class="tac">
  <el-col :span="8">
 
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>文章管理</template>

<el-menu-item index="1-1">添加文章</el-menu-item>
<el-menu-item index="1-2">文章列表</el-menu-item>
</el-submenu>
<el-submenu index="2">
    <template slot="title"><i class="el-icon-setting"></i>分类管理</template>

    <router-link to="/main/add_class_one">
        <el-menu-item index="2-1">增加一级分类</el-menu-item>
    </router-link>

    <el-menu-item index="2-2">增加二级分类</el-menu-item>
</el-submenu>
</el-menu>
</el-col>
</el-row>
</template>


<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>

<script>
    export default {
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>