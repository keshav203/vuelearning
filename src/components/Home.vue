<template>
<div>

    <div class="table center">
  <vs-table :data="users">
    
    <template slot="thead">
      <vs-th>
        Email
      </vs-th>
      <vs-th>
        Name
      </vs-th>
      <vs-th>
        Website
      </vs-th>
      <vs-th>
        Nro
      </vs-th>
    </template>

    <template slot-scope="{ data }">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="tr.email">
          {{ tr.email }}
        </vs-td>

        <vs-td :data="tr.username">
          {{ tr.username }}
        </vs-td>

        <vs-td :data="tr.website">
          {{ tr.website }}
        </vs-td>

        <vs-td :data="tr.id">
          {{ tr.id }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
  <Card :msg="cardMessage" />
</div>



    <h1 v-if="visible">Home component hello from {{name}} {{age}}</h1>
    <h1 v-else>Home is not visible </h1>
    
    <button v-on:click="hello">Click</button>
    <div id="row">
    <!-- <Users />
    <Products /> -->
    </div>
    <!-- <DataBind />
    <h1>{{ title }}</h1>
    <Child v-on:changeTitle="updateTitle($event)" /> -->
    GB : <input type="text" v-model.number="gbdata" />
    <br/>
    MB : <input type="text" v-model="mbdata" />
</div>
</template>
<script>
import DataBind from './DataBind.vue'
import Products from './Products.vue'
import Users from './Users.vue'
import Child from './Child.vue'
import Form from './Form.vue'
import Card from './Card.vue'
export default {
    name:'Home',
    components:{
    Users,
    Products,
    DataBind,
    Child,
    Form,
        Card
},
    props:{
        name:String,
        age:Number
    },
    data(){
return {
    title:"props title",
    visible:true,
    gbdata:null,
    mbdata:null,
    cardMessage: 'Card Description hereee',
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  
}
    },
    watch:{
        gbdata(value){
            this.mbdata= value * 1024
        },
        mbdata(value){
            this.gbdata= value / 1024
        }
    },
    methods:{
        hello(){
           this.visible=!this.visible
        },
        updateTitle(title){
            this.title=title
        }
    }
}
</script>
<style scoped>
.table{
    width:100%
}
#row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.table.center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .vs-table {
    width: 100%;
    border-collapse: collapse;
  }

  .vs-table th,
  .vs-table td {
    padding: 8px;
    /* border: 1px solid #ccc; */
    text-align: center;
  }

  .vs-table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
</style>