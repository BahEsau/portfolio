<template>
    <div class="contHead">
        <h2 class="heading
                rounded-sm 
                pt-1
                pb-1
                pr-8
                pl-8
                object-content
                text-3xl
                bg-slate-100
                font-semibold
                ">Experience
        </h2>
    </div>
    <div class="container 
                grid
                space-y-8
                grid-rows
                mt-20
                object-content
                mb-32">
        <span class="firstExp
                     grid
                     space-x-1
                     grid-cols-3
                     ml-60
                     relative">
                     <span class="company
                                 mt-12">
                        <p class="companyName
                                  text-lg
                                  font-semibold">CAMSOFT Group Sarl</p>
                        <p class="companyTime
                        ">July through October 2021</p>
                    </span>
                    <p class="activities
                                text-justify
                                w-96">
                        <b class="arrows">>></b> Work with a variety of different technologies,   platforms,           
                                frameworks,  as mentioned above. <br>
                        <b class="arrows">>></b> Did some QA testing on developed software at that time<br>
                        <b class="arrows">>></b> Interfaced with clients on a weekly basis, providing 
                                technological expertise.
                    </p>
                    <p class="box1
                     animate-pulse
                     h-32
                     w-32
                     rounded-full
                     absolute
                     top-5
                     left-28
                     -z-20">
                    </p>
                    <p class=" box2
                     animate-pulse
                     h-64
                     w-64
                     rounded-full
                     absolute
                     -top-20
                     right-32
                     -z-20">
                    </p>

                     
        </span>

        <span class="secondExp
                     grid
                     space-x-1
                     grid-cols-3
                     ml-60
                     relative">
                     <span class="company
                                  mt-12">
                        <p class="companyName
                                  text-lg
                                  font-semibold">CAMSOFT Group Sarl</p>
                        <p class="companyTime">March through May 2023</p>
                    </span>
                    <p class="activities 
                                text-justify
                                w-96">
                        <b class="arrows">>></b> Work with a variety of different technologies, platforms,     
                            frameworks, as mentioned above.<br>
                        <b class="arrows">>></b> Designed and developed an online bus booking system <br>
                        <b class="arrows">>></b> Worked with team mates for implementation of other   
                            projects
                    </p>
                    <p class="box3
                    bg-slate-200
                     animate-pulse
                     h-32
                     w-32
                     rounded-full
                     absolute
                     
                     -z-20">
                    </p>
        </span>        

    </div>
</template>
<style scoped>


    @media only screen and (min-width: 769px){
        .container{
        margin-top:100px;
    }
    .activities{
        width:60%;
        margin-top:-20px;
    }
    .firstExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .secondExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .heading, .companyName{
        font-family: 'Crimson Text', serif;
        color:#052D68;  

    }
    .companyTime{
        color:#052D68;
        font-size: small;

    }
    .contHead{
        display: flex;
        justify-content: center;  
    }
    .arrows{  
        color:#052D68;
        font-weight: normal;
        font-size: normal;  
    }
    .box1, .box2{  
    background-color:#ff990016;
    margin-top:20px;
    }
    .box3{  
    left:-20 ;
    margin-top:20px;
    } 
    }

    @media only screen and (min-width: 427px) and (max-width: 768px){
    .container{
        margin-top:100px;
    }
    .activities{
        width:60%;
        margin-top:-20px;
    }
    .firstExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .secondExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .heading, .companyName{
        font-family: 'Crimson Text', serif;
        color:#052D68;  

    }
    .companyTime{
        color:#052D68;
        font-size: small;

    }
    .contHead{
        display: flex;
        justify-content: center;  
    }
    .arrows{  
        color:#052D68;
        font-weight: normal;
        font-size: normal;  
    }
    .box1, .box2{  
    background-color:#ff990016;
    margin-top:20px;
    }
    .box3{  
    left:-20 ;
    margin-top:20px;
    }
    }

    @media only screen and  (min-width: 375px) and (max-width: 426px) {
            .container{
        margin-top:20px;
    }
    .activities{
        width:60%;
        margin-top:-20px;
    }
    .firstExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .secondExp{
    display: inline-flex;
    flex-wrap: wrap;
    gap:60px;
    justify-content: center;
    margin-left:5px;
    z-index:-30;
    margin-left:10px;
    }
    .heading, .companyName{
        font-family: 'Crimson Text', serif;
        color:#052D68;  

    }
    .companyTime{
        color:#052D68;
        font-size: small;

    }
    .contHead{
        display: flex;
        justify-content: center;  
    }
    .arrows{  
        color:#052D68;
        font-weight: normal;
        font-size: normal;  
    }
    .box1, .box2{  
    background-color:#ff990016;
    margin-top:200px;
    }
    .box3{  
    left:-20 ;
    margin-top:200px;
    }

    }

@media only screen and (max-width: 320px){
.container{
    margin-top:20px;
}
.activities{
    width:60%;
    margin-top:-20px;
}
.firstExp{
display: inline-flex;
flex-wrap: wrap;
gap:60px;
justify-content: center;
margin-left:5px;
z-index:-30;
margin-left:10px;
}
.secondExp{
display: inline-flex;
flex-wrap: wrap;
gap:60px;
justify-content: center;
margin-left:5px;
z-index:-30;
margin-left:10px;
}
.heading, .companyName{
    font-family: 'Crimson Text', serif;
    color:#052D68;  

}
.companyTime{
    color:#052D68;
    font-size: small;

}
.contHead{
    display: flex;
    justify-content: center;  
}
.arrows{  
    color:#052D68;
    font-weight: normal;
    font-size: normal;  
}
.box1, .box2{  
background-color:#ff990016;
margin-top:200px;
}
.box3{  
left:-20 ;
margin-top:200px;
}
}
</style>