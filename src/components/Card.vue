


<template>
    <div >
 <div class="navbar">
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
<vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div>
          <span>{{ msg }}</span>
        </div>
        <div class="footer" slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" >Save</vs-button>
            <vs-button color="primary" >Cancel</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.footer{
    width: 100%;
    height: 277px;
   
}
.navbar{
    width: 100%;
}
</style>