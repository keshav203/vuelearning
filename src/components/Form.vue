<template>
    <div>
        <h1>Add a new post</h1>
        <input type="text" placeholder="enter Title " v-model="name"/> <br/>
        <input type="text" placeholder="enter Author name" v-model="title"/> <br/>
       <select>
        <option>Science</option>
        <option>Math</option>
        <option>Bio</option>
       </select><br/>
        <button v-on:click="addPost">Add Post</button>
        <br/>
        <br/>
        <br/>
        <br/>

        <p v-for="item in posts" :key="item.name">
        {{ item.name + item.title }}
        </p>
        <p v-for="item in products" :key="item.name">
        {{ item.name }}
        </p>
        
    </div>
    </template>
    <script>
    export default {
        name:'Form',
       
        data(){
    return {
       products:this.$store.state.productModule.products,
       name:null,
       title:null,
      
       options:null,
       posts:[]
  
}
        },
       
        methods:{
            updateTitle(){
this.$emit("changeTitle","Parent updates")
            },
            addPost(){
                let addedPost={
                    name : this.name,
                    title :this.title,
                    options:this.options
                }
                this.posts.push(addedPost)
                
            }
        }
        
    }
    </script>
    