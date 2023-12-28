<template>
    <div class="body relative">
      
      <!-- <navbar></navbar> -->
       
      <nav class="navbar">
        <div class="logo
                fixed 
                min-w-40
                -mt-2 
                grid
                grid-cols-2
                ">

        <p class="E
                pl-1
                pb-3
                pt-3
                w-4 
                w-7
                pb-1
                text-white
                rounded-br-xl
                text-2xl
                font-semibold
                fixed">E
        </p>
        <p class="Esau 
                  min-w-fit
                  absolute
                  text-sm
                  ml-8
                  mt-9  
                  te
                  font-bold
                  ">Esau
        </p>

    </div>

    <div class="
                navbar
                fixed
                z-30 
                bg-white 
                rounded-br-xl
                rounded-bl-xl
                
                w-fit
                pt-4
                pl-3
                ml-40
                font-normal">
       <ul class="grid
                 sm:gap-x-5
                 md:gap-x-10
                 lg:gap-x-16

                 lg:text-base
                 md:text-sm
                 sm:text-sm 
                 sm:text-left
                 
                 sm:grid-cols-5 
                 md:grid-cols-5 
                 lg:grid-cols-5 
                 ">
            <li class="l" title="go to about me section" href="#sec-3" v-smooth-scroll>About Me</li>
            <li class="l" title="go to projects section" href="#sec-3" v-smooth-scroll>Projects</li>
            <li class="l" title="go to experience section" href="#sec-3" v-smooth-scroll>Experience</li>
            <li class="l" title="go to contact me section" href="#sec-3" v-smooth-scroll>Contact</li>
            <li class="Resume 
                       border
                       border-solide 
                       border-2 
                       rounded-xl
                       pl-3
                       pr-2
                       pb-0.5
                       relative
                       "
                title="view my CV"
                @click.prevent="downloadItem({
                                url: href= 'files/My_CV.pdf',
                                label: 'Esau_CV.pdf',})">Resume 
                       <span class="animRs absolute inline-flex rounded-full h-2 w-2 "></span>
                       <span class="animRs animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-96"></span>
                    </li>
       </ul>
   </div>
      </nav>
      
      <heropic></heropic>
      
      <nav class="fixed">
        <sidebar></sidebar>
      </nav>
      
      <welcomeSection></welcomeSection>
      
      <div class="mt-28" id="sec-3">
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

.logo{
    position: absolute;
}
.E{
    background-color: #FF9900 !important ;
}
.animRs{
    background-color: #FF9900 !important ;
}
.Esau{
    color:#FF9900;
    position:fixed;
}
.l{
    color: #002256;  
}
.l:hover{
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #FF9900; 
}
.Resume{
    border-color: #FF9900;
}
.Resume:hover{
    cursor:pointer;
    color: #FF9900;
}
.navbar{
    box-shadow:0px 1px 5px #dcdcff23;
}

@media only screen and (min-width: 769px){
    
}

@media only screen and (min-width: 427px) and (max-width: 768px){

}

@media only screen and  (min-width: 375px) and (max-width: 426px) {

}

@media only screen and (max-width: 320px){

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