<template>
    <el-collapse v-model="activeNames">
    <el-collapse-item title="一致性 Consistency" name="1">
        <div class="content">1</div>
        <div class="content">2</div>
        <div class="content">3</div>
    </el-collapse-item>
    <el-collapse-item title="反馈 Feedback" name="2">
        <div class="content">1</div>
        <div class="content">2</div>
        <div class="content">3</div>
    </el-collapse-item>
    <el-collapse-item title="效率 Efficiency" name="3">
        <div class="content">1</div>
        <div class="content">2</div>
        <div class="content">3</div>
    </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="4">
        <div class="content">1</div>
        <div class="content">2</div>
        <div class="content">3</div>
    </el-collapse-item>
</el-collapse>
</template>
<script>
    export default {
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
<style scoped>
    .content {
        /*height: 45px;*/
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
</style>