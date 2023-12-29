<template>
    <div class="body relative" >
      
      <!-- <navbar></navbar> -->
       
      <nav class="navbar" id="Welcome" >
        <div class="logo
                fixed 
                min-w-40
                -mt-2 
                grid
                grid-cols-2
                ">

        <a class="E
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
                fixed" href="#Welcome" v-smooth-scroll>E
        </a>
        <a class="Esau 
                  min-w-fit
                  absolute
                  text-sm
                  ml-8
                  mt-9  
                  te
                  font-bold
                  " href="#Welcome" v-smooth-scroll>Esau
       </a>
       <div class="menu object-content bg-white">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#FF9900" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
    </div>
    </div>

    <div class="
                navbarList
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
            <li class="l" title="go to about me section" href="#About Me" v-smooth-scroll>About Me</li>
            <li class="l" title="go to projects section" href="#Projects" v-smooth-scroll>Projects</li>
            <li class="l" title="go to experience section" href="#Experience" v-smooth-scroll>Experience</li>
            <li class="l" title="go to contact me section" href="#Contact" v-smooth-scroll>Contact</li>
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
        <nav class="fixed">
          <sidebar></sidebar>
        </nav>
      <!-- <div id="sec-1"> -->
        <heropic></heropic>
      <!-- </div> -->

      <!-- <div id="sec-1"> -->
        <welcomeSection></welcomeSection>
      <!-- </div> -->

      <div class="mt-28" id="About Me">
        <aboutSection></aboutSection>
      </div>

      <div class="mt-40" id="Projects">
        <projectSection></projectSection>
      </div>

      <div class="mt-40" id="Experience">
        <experienceSection></experienceSection>
      </div>

      <div class="mt-40" id="Contact">
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



@media only screen and (max-width: 40em) {
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

.menu{
  display:absolute;
  height:24px;
  width:24px;
  z-index:100;
  margin-top:20px;
  margin-left:320px;
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
.navbarList{
    box-shadow:0px 1px 5px #dcdcff23;
    visibility: hidden;
}


}

@media only screen and (min-width: 40em) and (max-width: 48em){
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

.menu{
  display:absolute;
  height:26px;
  width:26px;
  z-index:100;
  margin-top:20px;
  margin-left:590px;
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
.navbarList{
    box-shadow:0px 1px 5px #dcdcff23;
    visibility: hidden;
}

}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
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
    display: hidden;
}
.menu{
  display:absolute;
  height:26px;
  width:26px;
  z-index:100;
  margin-top:20px;
  margin-left:590px;
  visibility: hidden;
}

}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em) {
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
    display: hidden;
}

}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 80em) {
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
    display: hidden;
}

}

</style>

<script>
// import navbar from './components/navbar';
import heropic from './components/heroPicSection';
import sidebar from './components/sideBar';
import welcomeSection from './components/welcomeSection';
import aboutSection from './components/aboutSection';
import projectSection from './components/projectSection';
import experienceSection from './components/experienceSection';
import footerSection from './components/footer.vue';
import contactSection from './components/contactSection.vue';

import axios from "axios";

export default{
  components:{
    // navbar,
    heropic, 
    sidebar,
    welcomeSection,
    aboutSection,
    projectSection,
    experienceSection,
    contactSection,
    footerSection
},
  methods: {
    async downloadItem({ url, label }) {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },

}
</script>