<template>
  <div class="hello">
        测试非prop
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                state: true,
                name: "",
                email: ""
            }
        },
        methods: {
            fn() {
                console.log(this.email)
                this.state = !this.state
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>