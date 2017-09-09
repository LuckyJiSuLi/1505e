<template>
  <main>
      <div v-html="data.content">
        
      </div>
  </main>
 
</template>


<script>
    export default {
        data() {
            return {
                data: {
                    content: null
                }
            }
        },
        created() {
            this.axios.get(`/api/front_article/getArticle?id=${this.$route.params.id}`).then(function(data) {
                console.log(data)
                this.data = data.data.data
            }.bind(this))
        }
    }
</script>
<style>
    main {
        padding: 20px;
        background: #eee;
    }
</style>