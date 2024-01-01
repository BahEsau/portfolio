<template>
   
    <div class="welcome
                w-11/12
                ml-32
                grid
                space-y-7
                grid-rows
                mt-28
                ">
        <span class="greetings
                     w-64
                     rounded-sm 
                     pt-1
                     pb-1
                     pl-3
                     text-base
                     ">Welcome Sir/Madam my name is</span>
        <div class="audience
                    w-1/4
                    ml-28">
            <h1 class="name
                       text-4xl
                       font-normal">Bah Esau Taah</h1>
            <hr>
            <p class="intro 
                     text-base
                     text-justify
                     mt-5">I'm a software engineer specialized in 
                            building full-stack web application, UI/UX 
                            designs and occasionally mobile
                            applications using up-to-date languages 
                            and technologies.
            </p>
            <div class="buttons 
                        grid 
                        grid-cols-2
                        space-x-16
                        mt-16">
                        <a href="mailto:eaesau@gmail.com"> <button class="hirebtn
                                font-semibold
                                rounded-lg
                                w-28
                                pt-1
                                pb-1
                                pl-2
                                pr-2
                                animate-bounce
                                hover:animate-none"
                                title="Hire Me"          
                                >Hire Me</button>
                        </a>
                                
            
                <button class="cvbtn
                               font-semibold
                               rounded-lg
                               w-28
                               pt-1
                               pb-1
                               pl-2
                               pr-2
                               flex
                               space-x-2"
                               title="download/view my CV" 
                @click.prevent="downloadItem({
                                url: href= 'files/My_CV.pdf',
                                label: 'Esau_CV.pdf',})"> <span class=" ml-2">My CV</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="svgDonwload ml-4" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="14;0"/></path><path fill="currentColor" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default{
  name: "welcomeSection",
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
};
</script>

<style scoped>
/* small devices like phones */
@media only screen and (max-width: 40em) {
    .welcome{
        margin-left:10%;
        width: 90%;
        margin-top:530px;
        z-index:-30;
        /* margin-top: 137%; */
    }
    .audience{
        margin-left:0%;
        width: 90%;
        margin-top:60%;
    }
    .greetings{
        background-color:#ff99000a;
        color:#a66400fe;
        margin-left:-10%;
        z-index:-30;
    }
    
    .buttons{
        margin-right:20px;
        z-index:-30;
      
    }
    .hirebtn{
        background-color:#ff9900;
        color:white;
        border: solid 2px #ff9900;
        width:90px;
        z-index:-100;
    }
    .hirebtn:hover{
        background-color:#e68e0a;
        border: solid 2px #e68e0a;
    }
    .cvbtn{
        background-color:white;
        color:#ff9900;
        border: solid 2px #ff9900;
        width:90px;
        font-size:smaller;
        

    }
    .svgDonwload{
        width:14px;
        height:14px;
        margin-left:20px;
        margin-top:4px;
    }
    .cvbtn:hover{
        background-color:#ff9900;
        color:white;
    }
    hr{
        border: solid 1px #ff9900;

    }
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
    .name{
        font-family: 'Crimson Text', serif;
        color: #002256;
        font-size: 30px;
    }
}


/* medium screens rotate */
@media only screen and (min-width: 40em) and (max-width: 48em){

    .welcome{
        margin-left:15%;
        width: 85%;
        margin-top:80%;
    }
    .audience{
        margin-left:0%;
        width: 90%;
        margin-top:60%;
        
    }
    .greetings{
        background-color:#ff99000a;
        color:#a66400fe;
        margin-left:-10%;
    }
    
    
    .hirebtn{
        background-color:#ff9900;
        color:white;
        border: solid 2px #ff9900;
        width:90px;
        z-index:-100;
    }
    .hirebtn:hover{
        background-color:#e68e0a;
        border: solid 2px #e68e0a;
    }
    .cvbtn{
        background-color:white;
        color:#ff9900;
        border: solid 2px #ff9900;
        width:90px;
        font-size:smaller;
        margin-right:20px;

    }
    .svgDonwload{
        width:14px;
        height:14px;
        margin-left:20px;
        margin-top:4px;
    }
    .cvbtn:hover{
        background-color:#ff9900;
        color:white;
    }
    hr{
        border: solid 1px #ff9900;

    }
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
    .name{
        font-family: 'Crimson Text', serif;
        color: #002256;
        font-size: 30px;
    }
}

/* Medium devices such as tablets (768px and up)  this is one*/ 
@media only screen and (min-width: 48em) and (max-width: 64em){
    .welcome{
        margin-left:15%;
        width: 40%;
        
    }
    .audience{
        margin-left:0%;
        width: 90%;
        margin-top:60%;
    }
    .greetings{
        background-color:#ff99000a;
        color:#a66400fe;
        margin-left:-10%;
    }
    
    .hirebtn{
        background-color:#ff9900;
        color:white;
        border: solid 2px #ff9900;
        width:90px;
    }
    .hirebtn:hover{
        background-color:#e68e0a;
        border: solid 2px #e68e0a;
    }
    .cvbtn{
        background-color:white;
        color:#ff9900;
        border: solid 2px #ff9900;
        width:90px;
        font-size:smaller;
        margin-right:20px;

    }
    .svgDonwload{
        width:14px;
        height:14px;
        margin-left:20px;
        margin-top:4px;
    }
    .cvbtn:hover{
        background-color:#ff9900;
        color:white;
    }
    hr{
        border: solid 1px #ff9900;

    }
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
    .name{
        font-family: 'Crimson Text', serif;
        color: #002256;
        font-size: 30px;
    }
    
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em){
    .welcome{
        margin-left:15%;
        width: 35%;
        
    }
    .audience{
        margin-left:0%;
        width: 90%;
        margin-top:60%;
    }
    .greetings{
        background-color:#ff99000a;
        color:#a66400fe;
        margin-left:-10%;
    }
    
    .hirebtn{
        background-color:#ff9900;
        color:white;
        border: solid 2px #ff9900;
        width:90px;
    }
    .hirebtn:hover{
        background-color:#e68e0a;
        border: solid 2px #e68e0a;
    }
    .cvbtn{
        background-color:white;
        color:#ff9900;
        border: solid 2px #ff9900;
        width:90px;
        font-size:smaller;
        margin-right:20px;

    }
    .svgDonwload{
        width:14px;
        height:14px;
        margin-left:20px;
        margin-top:4px;
    }
    .cvbtn:hover{
        background-color:#ff9900;
        color:white;
    }
    hr{
        border: solid 1px #ff9900;

    }
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
    .name{
        font-family: 'Crimson Text', serif;
        color: #002256;
        font-size: 30px;
    }


}


</style>
