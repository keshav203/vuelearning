<template>
<div>
    <table>
<tr>
    <td>ID</td>
     <td>Name</td>
      <td>Address</td>
</tr>
<tr v-for="item in users" :key="item.id">
    <td>{{item.id}}</td>
  <td>{{item.name}}</td>
     <td>{{item.address}}</td>
</tr>
    </table>
</div>
</template>
<script>
export default {
    name:'Users',
   
    data(){
return {
    users:[
        {id:1,name:'peter',address:'jammu'},
         {id:2,name:'john',address:'kashmir'},
          {id:3,name:'tony',address:'up'},
           {id:4,name:'sam',address:'delhi'}
    ]
}
    },
    
}
</script>
<style scoped>
div{
    background-color:aqua;
    height: 200px;
    width:200px;
    border: 1px solid black;
}
</style>