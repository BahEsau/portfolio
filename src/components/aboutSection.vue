<template>
    <h2 class="heading
                rounded-sm 
                pt-1
                pb-1
                pr-3
                pl-3
                text-3xl
                ml-44
                bg-slate-100
                font-semibold">About Me
    </h2>
    
    <div class="container
                grid
                grid-cols-3
                mt-20
                ml-20
                relative"
                id="AboutMeSection">

        <span class="roundDiv2
                    rounded-full
                    mt-20
                    ml-10
                    relative">
                    <img class="picDown 
                                object-fill
                                rounded-full
                                h-72
                                w-64" src="webpic/portdown.png" alt="profile pic">
        </span>
        
        <span 
        class="aboutMe
            text-justify
            h-80
            w-80
            relative">
            <p>
                I am passionate about building software systems to respond to needs and enjoy working with teams to achieve big projects.<br><br>
                I have had the privilege of studying software engineering in the university and got a HND (Higher National Diploma) and Bachelor's degree which has led me to create many project and do some internships. My main focus now is designing and building accessible, inclusive products and digital experiences at Up-statement for a variety of clients.<br><br>
                I also followed some courses on Udemy UI/UX designing, front-end and in back-end which has improved my skill significantly. Below are a few technologies i mostly work  with:
            </p>
            <p class="bg-slate-100
                        animate-pulse
                        h-16
                        w-16
                        rounded-full
                        absolute
                        top-5
                        -z-20">
            </p>
            <p class="secondBox
                        animate-pulse  
                        h-10
                        w-10
                        rounded-full
                        absolute
                        top-64
                        left-40
                        -z-20">
            </p>
        </span>
        <span class="skils relative">
            <b class="ml-11
                    skilHead">My Kills</b><br><br>
            <p> 
                <b class="arrows">>></b> CSS and HTML<br>
                <b class="arrows">>></b> PHP<br>
                <b class="arrows">>></b> Laravel<br>
                <b class="arrows">>></b> Photoshop<br>
                <b class="arrows">>></b> Ajax<br>
                <b class="arrows">>></b> tailwinds<br>
                <b class="arrows">>></b> bootstrap<br>
                <b class="arrows">>></b> Vue.js<br>
                <b class="arrows">>></b> Adobe XD<br>
                <b class="arrows">>></b> Figma<br>
                <b class="arrows">>></b> javascript<br>
                <b class="arrows">>></b> Git/Github<br>
                <b class="arrows">>></b> SQL (MySQL)<br>
                <b class="arrows">>></b> Postman
            </p>
            <p class="bg-slate-100
                    animate-pulse
                    h-16
                    w-16
                    rounded-full
                    absolute
                    top-72
                    left-20
                    -z-20">
            </p>
        </span>
    </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
/* .heading{
    font-family: 'Crimson Text', serif;
    color:#052D68;
    width: fit-content;
}
.roundDiv2{
    background-color: #FF9900; 
    border: solid 8px #ffffffcf !important;
    height: fit-content;
    width: fit-content;
}
.secondBox{
    background-color: #ff990021; 
}
.arrows{  
    color: #FF9900;
    font-weight: normal;
    font-size: normal;  
}
.skilHead{  
    color:#052D68;   
} */

@media only screen and (max-width: 37.5em){
.heading{
    font-family: 'Crimson Text', serif;
    color:#052D68;
    width: fit-content;
    margin-left:110px;
}
.roundDiv2{
    background-color: #FF9900; 
    border: solid 8px #ffffffcf !important;
    height: fit-content;
    width: fit-content;
    margin-left:0px;
    margin-right:-10px;
    z-index:-30;
}
.secondBox{
    background-color: #ff990021; 
}
.arrows{  
    color: #FF9900;
    font-weight: normal;
    font-size: normal;  
}
.skilHead{  
    color:#052D68;   
}
.container{
    margin-top:-20px;
    width:67%;
    display: inline-flex;
    flex-wrap:wrap;
    flex: 50%;
    justify-content: center;
    gap: 60px;
    margin-left:45px;
    z-index:-1;
    
}
.skils{
    margin-top:280px;
}
.aboutMe{
    margin-left:10px;
}
}


@media only screen and (min-width: 2559px) {
    .heading{
        font-family: 'Crimson Text', serif;
        color: #052D68;
        width: fit-content;
        margin-top:100px;
    }
    .roundDiv2{
        background-color: #FF9900; 
        border: solid 8px #ffffffcf !important;
        height: fit-content;
        width: fit-content;
    }
    .secondBox{
        background-color: #ff990021; 
    }
    .arrows{  
        color: #FF9900;
        font-weight: normal;
        font-size: normal;  
    }
    .skilHead{  
        color:#052D68;   
    }
    .container{
        margin-top:100px;
        width:100%;
        display: inline-flex;
        flex-wrap:wrap;
        flex: 50%;
        justify-content: start;
        gap: 300px;
        
    }

}
@media only screen and (min-width: 1025px)and (max-width: 2559px) {
    .heading{
        font-family: 'Crimson Text', serif;
        color:#052D68;
        width: fit-content;
    }
    .roundDiv2{
        background-color: #FF9900; 
        border: solid 8px #ffffffcf !important;
        height: fit-content;
        width: fit-content;
    }
    .secondBox{
        background-color: #ff990021; 
    }
    .arrows{  
        color: #FF9900;
        font-weight: normal;
        font-size: normal;  
    }
    .skilHead{  
        color:#052D68;   
    }
    .container{
        margin-top:20px;
        width:100%;
        display: inline-flex;
        flex-wrap:wrap;
        flex: 50%;
        justify-content: start;
        gap: 100px;
        
    }

}

@media only screen and (min-width: 769px)and (max-width: 1024px) {
    .heading{
        font-family: 'Crimson Text', serif;
        color:#052D68;
        width: fit-content;
    }
    .roundDiv2{
        background-color: #FF9900; 
        border: solid 8px #ffffffcf !important;
        height: fit-content;
        width: fit-content;
    }
    .secondBox{
        background-color: #ff990021; 
    }
    .arrows{  
        color: #FF9900;
        font-weight: normal;
        font-size: normal;  
    }
    .skilHead{  
        color:#052D68;   
    }
    .container{
        margin-top:20px;
        width:100%;
        display: inline-flex;
        flex-wrap:wrap;
        flex: 50%;
        justify-content: start;
        gap: 40px;
        
    }

}

@media only screen and (min-width: 427px) and (max-width: 768px)  {
    .heading{
        font-family: 'Crimson Text', serif;
        color:#052D68;
        width: fit-content;
        margin-left:44%;
    }
    .roundDiv2{
        background-color: #FF9900; 
        border: solid 8px #ffffffcf !important;
        height: fit-content;
        width: fit-content;
    }
    .secondBox{
        background-color: #ff990021; 
    }
    .arrows{  
        color: #FF9900;
        font-weight: normal;
        font-size: normal;  
    }
    .skilHead{  
        color:#052D68;   
    }
    .container{
        margin-top:-20px;
        width:80%;
        display: inline-flex;
        flex-wrap:wrap;
        flex: 50%;
        justify-content: center;
        gap: 60px;
        
    }
    /* .skils{
        margin-top:100px;
    } */
}

@media only screen and  (min-width: 375px) and (max-width: 426px)  {
    .heading{
        font-family: 'Crimson Text', serif;
        color:#052D68;
        width: fit-content;
        margin-left:110px;
    }
    .roundDiv2{
        background-color: #FF9900; 
        border: solid 8px #ffffffcf !important;
        height: fit-content;
        width: fit-content;
        margin-left:-20px;
        z-index:-30;
        margin-left:0px;
        margin-right:-10px;
    }
    .secondBox{
        background-color: #ff990021; 
    }
    .arrows{  
        color: #FF9900;
        font-weight: normal;
        font-size: normal;  
    }
    .skilHead{  
        color:#052D68;   
    }
    .container{
        margin-top:-20px;
        width:76%;
        display: inline-flex;
        flex-wrap:wrap;
        flex: 50%;
        justify-content: center;
        gap: 60px;
        margin-left:45px;
        z-index:-1;
        
    }
    .skils{
        margin-top:180px;
    }
    .aboutMe{
        margin-left:8px;
    }
}

@media only screen and (max-width: 320px) {

}
</style>