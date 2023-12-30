<template>
  <!-- <div class="divCont relative "> -->
    
    <div class="picDevCont relative">
      <img class="picUp
                 absolute 
                                
                " src="webpic/rounded.png" alt="profile pic"> 
   
     <div class="picDev
              absolute 
              
              top-20 
              right-0 
              -mr-28
              border
              rounded-l-full
              w-full
              
              pb-96
              pr-40
              pl-80">
              
                <!-- <div class="
                          roundDiv1
                          bg-slate-100
                          border
                          border-solide
                          border-8
                          border-white
                          w-80
                          h-80
                          absolute
                          rounded-full
                          ">  
                         
                  </div> -->
      </div>

  </div>
<!-- </div> -->
     
    
</template>
<style scoped>


  /* Small devices such as small phones (640px and down) */
@media only screen and (max-width: 40em)  {
    .picDev{  
    transform: rotate(-25deg);
    background-color: #FF9900;
    overflow: hidden;
    z-index:-2;
    width:120%;
    
  }
    .picUp{  
    margin-left:10%;
    margin-top:10%;
    height: 400px;
    width: 345px;
    z-index: -1;
    transform: rotate(5deg);
  }
  .roundDiv1{
      margin-left:-57.5%;
      margin-top:7%;
      z-index:-2;
      
  }
}
/* medium screens rotate */
@media only screen and (min-width: 40em) and (max-width: 48em) {
  .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
  width:100%;
  
}
.picUp{  
    margin-left:20%;
    margin-top:7%;
    height: 440px;
    width: 395px;
    z-index: -1;
    transform: rotate(5deg);
  }
.roundDiv1{
    margin-left:-44.5%;
    margin-top:5%;
    z-index:-2;
    
}
}


/* Medium devices such as tablets (768px and up)  this is one*/ 
@media only screen and (min-width: 48em) and (max-width: 64em) {
  .picDev{  
  transform: rotate(-25deg);
  background-color: #ff9900;
  overflow: hidden;
  z-index:-2;
  width:60%;
  
}
  .picUp{  
   margin-left:53%;
   margin-top:3%;
   height: 440px;
   width: 395px;
   z-index: -1;
   transform: rotate(5deg);
}
.roundDiv1{
      margin-left:-40.5%;
      margin-top:4%;
      z-index:-2;
    
}
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em) {
  .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
  width:60%;
}
  .picUp{  
   margin-left:52%;
   margin-top:4%;
   height: 440px;
   width: 395px;
   /* width: 3%; */
   z-index: -1;
   transform: rotate(5deg);
}
.roundDiv1{
    margin-left:-57.5%;
    margin-top:7%;
    z-index:-2;
    
}
}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 80em) {
  
  .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
  width:53%;
}
  .picUp{  
   margin-left:57%;
   margin-top:4.5%;
   height: 440px;
   width: 395px;
   /* width: 3%; */
   z-index: -1;
   transform: rotate(5deg);
}
.roundDiv1{
    margin-left:-40.5%;
    margin-top:4%;
    z-index:-2;
    
}
}

</style>