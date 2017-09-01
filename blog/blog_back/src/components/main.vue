<template>
    <div class="container">
        <header>
            <div class="log">
                <p>个人博客</p>
            </div>
            <div class="welcome">
                欢迎'三岁先生'登录
            </div>
        </header>
        <main>
            <div class="pageLiat">
                <page-list></page-list>
            </div>
            <div class="pageContent">
                <page-content></page-content>
            </div>
        </main>
    </div>
</template>
<script>
    import pageList from './page/main_left.vue'
    import pageContent from './page/main_right'
    export default {
        data() {
            return {
                activeNames: ['1']
            };
        },
        components: {
            pageList,
            pageContent
        }
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: 100%;
    }
    
    .container header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        background: cadetblue;
        color: #fff;
    }
    
    .container header .log {
        float: left;
    }
    
    .container header .welcome {
        float: right;
    }
    
    .container main .pageLiat {
        float: left;
        width: 200px;
    }
    
    .container main .pageContent {
        float: left;
        padding-left: 15px;
    }
</style>