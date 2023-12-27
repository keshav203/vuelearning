<template>
    <div>
       <h2>List of employees</h2>
       <p v-for="item in data" :key="item.id">
    {{ item?.employee_name }}
    </p>
    <table >
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td> email</td>
        </tr>
        <tr v-for="item in data" :key="item.id">
            <td>{{ item?.id }}</td>
            <td>{{ item?.username }}</td>
            <td> {{ item?.email }}</td>
        </tr>
    </table>
    </div>
    </template>
    <script>
   import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
    export default {
        name:'Employees',
       mounted(){
        console.log('mounted call')
Vue.axios.get('https://jsonplaceholder.typicode.com/users').then(resp =>{
   console.log(resp.data)
    this.data=resp.data
})
       },
        data(){
    return {
       data:[]
    }
        },
        methods:{

        }
        
    }
    </script>
    