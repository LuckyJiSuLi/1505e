<template>
 
     <el-row class="rowall">
  <el-col :span="24" style="border-radius: 4px;">
    
    <el-row class="classrowone">
  <el-col :span="6">标题</el-col>
  <el-col :span="6">分类</el-col>
  <el-col :span="6">作者</el-col>
  <el-col :span="6">发布时间</div></el-col>
</el-row>

<el-row v-for="i in datalist" class="classrow">
    <router-link :to="{name:'detail',params:{id:i.id,onedata:{cnname:i.cnname_one,oneId:i.oneId,twoId:null},twodata:{cnname:i.cnname_two,oneId:i.oneId,twoId:i.twoId}}}">
         <el-col :span="6">{{i.article_name}}</el-col>
  <el-col :span="6">{{i.cnname_one}}</el-col>
  <el-col :span="6">{{i.editer}}</el-col>
  <el-col :span="6">{{i.time}}</div></el-col>
    </router-link>
 
</el-row>
  </el-col>
</el-row>
  

</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex"
    export default {
        name: 'header',
        data() {
            return {
                activeIndex: '1',
            }
        },
        computed: {
            ...mapState({
                datalist: (state) => state.articleList
            })
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .classrow {
        height: 40px;
        background: lightcyan;
        line-height: 40px;
        margin: 10px 20px;
        border-radius: 5px;
        padding: 0 10px;
    }
    
    .classrowone {
        height: 40px;
        background: #00f5ff;
        line-height: 40px;
        margin: 10px 20px;
        border-radius: 5px;
        padding: 0 10px;
    }
    
    .rowall {
        /*border: 1px solid lightblue*/
        background: #fdfeba;
        min-height: 100%;
    }
</style>