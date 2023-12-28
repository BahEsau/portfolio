<template>
    <div class="body relative">
      
      <navbar></navbar>
      
      <heropic></heropic>
      
      <nav class="fixed">
        <sidebar></sidebar>
      </nav>
      
      <welcomeSection></welcomeSection>
      
      <div class="mt-28">
        <aboutSection></aboutSection>
      </div>

      <div class="mt-40">
        <projectSection></projectSection>
      </div>

      <div class="mt-40">
        <experienceSection></experienceSection>
      </div>

      <div class="mt-40">
        <contactSection></contactSection>
      </div>
      
      <div class="">
        <footerSection></footerSection>
      </div>

    </div>
</template>
<style scoped>
.body{
  height:100vh;
  /* width:100vw; */
  overflow-x: hidden !important;
  overflow-y: show !important;
}

</style>

<script>
import navbar from './components/navbar';
import heropic from './components/heroPicSection';
import sidebar from './components/sideBar';
import welcomeSection from './components/welcomeSection';
import aboutSection from './components/aboutSection';
import projectSection from './components/projectSection';
import experienceSection from './components/experienceSection';
import footerSection from './components/footer.vue';
import contactSection from './components/contactSection.vue';

export default{
  components:{
    navbar,
    heropic, 
    sidebar,
    welcomeSection,
    aboutSection,
    projectSection,
    experienceSection,
    contactSection,
    footerSection
}
}
</script>