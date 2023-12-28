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
                font-semibold">Projects
    </h2>
    </div>

    <div class="container
                object-content
                bg-slate-100
                pt-5
                ">

        <h3 class="secTitle
                    text-lg
                    ml-7
                    mb-6
                    ">
                   Some  Projects I Have Realized
        </h3>

        <div class="projects
                    border
                    rounded-xl
                    shadow-sm
                    w-64
                    h-72
                    "
                    v-for="(project, index) in projectStr "
                    :key = "index">
                
                <div class="box
                            " object-content > 
                        <a class="logo
                                    object-content
                                    mt-2
                                    "
                                    href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path class="git" fill="currentColor"  d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"/></svg>
                        </a>
                              
                        <p class="projectTitle
                            justify-center
                            flex
                            mb-2
                           ">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12m96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"/></svg>{{ project.projectTitle }}
                        </p>
                            
                        <p class="projectContent
                                    text-justify
                                    mb-4
                                     ">
                            {{ project.projectContent }}
                        </p>

                        <p class="projectTechnologies
                                  text-justify">
                            {{ project.projectTechnologies }}
                        </p>
                    
                </div>
        </div>

    </div>
</template>

<script>
 import projects from '/public/projects.json'; 
 let project = JSON.stringify(projects)
 const projectStr = JSON.parse(project)
export default{
        created(){
            this.projectStr    
        },
        data(){
            return{
                projectStr
            }
        }
}
</script>
<style scoped>
/* 
@media only screen and (min-width: 1024px){
    
} */

@media only screen and (min-width: 2560px){
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin-bottom:30px;
        margin-left:40px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 100%;
        margin-left: 16%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}
@media only screen and (min-width: 1440px) and (max-width: 2559){
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:40px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 90%;
        margin-left: 8.5%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}
@media only screen and (min-width: 1023px) and (max-width: 1440px){
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:40px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 90%;
        margin-left: 8.5%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}

@media only screen and (min-width: 427px) and (max-width: 768px){
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:50px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 85%;
        margin-left: 12%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}

@media only screen and  (min-width: 376px) and (max-width: 426px) {
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:40px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 80%;
        margin-left: 16%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}

@media only screen and  (max-width: 376px) {
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:15px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 80%;
        margin-left: 16%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}


@media only screen and (max-width: 320px){
    .heading, .secTitle{
        font-family: 'Crimson Text', serif;
        color:#052D68;

    }

    .contHead{
        display: flex;
        justify-content: center;  
    }
    .projectContent{
        font-size: small;
        margin-left: 5%;
        margin-right: 5%;

    }
    .projectTitle{
    color:#ff9900;

    }
    .logo:hover{
    color:#ff9900;

    }

    .projectTechnologies{
        font-size: small;
        color:#052D68;
    }
    .logo{
    display:flex;
    margin-left:200px;
    width: fit-content;
    }
    .projects{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        margin-bottom:30px;
        margin-left:15px;
        background-color: white;
        padding:0px  10px;
        justify-content: center;
        
        /* display:inline-flex;
        flex-wrap:wrap; */
    }
    .container{
        width: 90%;
        margin-left: 7%;
        margin-right: 7%;
        margin-top: 4%;
        border-top-right-radius: 5%;
    }

}
</style>