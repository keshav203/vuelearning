<template>
<div>
   <h2>Datavbind components {{message}}</h2>
   <input type="text" v-model="message" />
</div>
</template>
<script>
export default {
    name:'DataBind',
   
    data(){
return {
    message:'hi data binding is heree'
  
}
    },
    
}
</script>
<style scoped>

</style>