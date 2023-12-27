<template>
    <div>
       <button v-on:click="updateTitle">Update Parent title</button>
    </div>
    </template>
    <script>
    export default {
        name:'Child',
       
        data(){
    return {
       
    }
        },
        beforeCreate:function(){
            console.log('chils is before created')
        },
        created:function(){
            console.log('chils is  created')
        },
        beforeMount:function(){
            console.log('chils is before created')
        },
        mounted:function(){
            console.log('chils is before created')
        },
        methods:{
            updateTitle(){
this.$emit("changeTitle","Parent updates")
            }
        }
        
    }
    </script>
    