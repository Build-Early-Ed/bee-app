<template>
  <div id="About">
            <!--About Page Text-->
<section>
    <!--Our Mission Text-->
      <b-container class= "container mt-40">
            <h3>Our Mission</h3>
            <p>Build Early Ed strengthens the continuum of care for youth by connecting New Mexicans to
                Head Start programs. We help New Mexicans enroll their children into Head Start, earn higher
                education credentials, and connect with local advocates to build Head Start programs in their
                community. Together, we can build the future of early childhood education.
            </p>
      </b-container>  
</section>
    <!--End Our Mission Text-->

    <!--Our Team Text-->
<section>
    <b-container class= "container mt-40">
        <h3>Our Team</h3>
        <p>Alija Blackwell, is a Creative Technologist with a background in community planning, digital media, and data science. Alija uses strategic foresight and machine learning for design to support mission-driven organizations with equity analysis.</p>

<p>Gabriel Fosse has a background in ethical hacking and linux systems administration. After completing the Data Science program he has been working as a freelancer using neural networks for sound classification and analysis. </p>
        <b-row align-v="center"> 
       <!-- <team-card v-for="Team in TeamCard" :key="Team.id" name="Team.name"></team-card> -->
              
           <!-- <b-card
            title="Alija Blackwell"
            img-src="src/assets/images/unnamed.png"
            img-alt="Job Profile"
            img-top
            tag="article"
            style="max-width:20rem"
            class="mb-2"
            >
            <b-card-text>
             Creative Technologist
            </b-card-text>
               <b-button variant= "primary">LinkedIn</b-button>  
            </b-card>
           

<b-col md="3">
            <b-card
            title="Gabriel Fosse"
            img-src="src/assets/images/unnamed.png"
            img-alt="About Gabriel"
            img-top
            tag="article"
            style="max-width:20rem"
            class="mb-2"
            >
            <b-card-text>
             Data Scientist
            </b-card-text>
               <b-button variant= "primary">LinkedIn</b-button>  
            </b-card>
            </b-col> -->

            </b-row>
            </b-container>
      </section>
      </div> 
    <!--End Our Team Text-->
</template>

<script>
//import TeamCard from '@/components/TeamCard.vue';
//import { BIconGithub, BIconLinkedin} from 'bootstrap-vue'

export default {
  //components: {
        //"team-card" : TeamCard
    //BIconGithub,
    //BIconLinkedin
  //},
  //mounted(){
  //   this.fetchData();   
  //},
  //data(){
    //    return {
     //    Team: []  
     //   }

  //},
   //methods: {
    //  async fetchData(){
      //      const res = await fetch("Team.json");
        //    const val = await res.json();
         //   this.Team= val;
           // console.log(val);
    //  }   
  // }

}

</script>

<style lang="scss" scoped>

</style>