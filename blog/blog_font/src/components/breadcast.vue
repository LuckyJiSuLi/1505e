<template>
  <el-breadcrumb separator="/" class="breadCrumb">
    <el-breadcrumb-item v-for="i in datalist">{{i.cnname}}</el-breadcrumb-item>
   
</el-breadcrumb>
</template>
<script>
    import {
        mapState
    } from "vuex"
    export default {
        computed: {
            ...mapState({
                datalist: (state) => state.breadcast
            })
        }
    }
</script>