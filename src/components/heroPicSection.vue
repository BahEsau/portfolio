<template>
  <!-- <div class="divCont relative bg-red-600"> -->
    <img class="picUp
                absolute                
                " src="webpic/portup.png" alt="profile pic">
     <div class="picDev
              absolute 
              top-20 
              right-0 
              -mr-28
              border
              rounded-l-full
              w-1/2
              pb-96
              pr-40
              pl-80">
              <div class="
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
                        
                </div>
      </div>
     
    
</template>
<style scoped>
/*  */


@media  screen and (min-width: 1441px){
    
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:56%;
   margin-top:7.7%;
   height: 440px;
   width: 395px;
   /* width: 3%; */
   z-index: -1;
   transform: rotate(5deg);
}
.roundDiv1{
    margin-left:-22.5%;
    margin-top:2.8%;
    z-index:-2;
    
}
  }
@media  screen and (min-width: 1024px) and (max-width: 1440px){
    
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:58.7%;
   margin-top:5.7%;
   height: 440px;
   width: 395px;
   /* width: 3%; */
   z-index: -1;
   transform: rotate(5deg);
}
.roundDiv1{
    margin-left:-40.5%;
    margin-top:3.8%;
    z-index:-2;
    
}
  }

@media  screen and (min-width: 769px)and (max-width: 1024px){
    
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:61%;
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
  
  @media  screen and (min-width: 427px) and (max-width: 768px){

    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:53%;
   margin-top:3.8%;
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
  
  @media  screen and  (min-width: 424px) and (max-width: 426px) {
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
 
}
  .picUp{  
   margin-left:15%;
   margin-top:6%;
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
  @media  screen and  (min-width: 375px) and (max-width: 425px) {
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:8%;
   margin-top:7%;
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
  
  @media  screen and (max-width: 320px){
    .picDev{  
  transform: rotate(-25deg);
  background-color: #FF9900;
  overflow: hidden;
  z-index:-2;
}
  .picUp{  
   margin-left:2%;
   margin-top:8%;
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

</style>