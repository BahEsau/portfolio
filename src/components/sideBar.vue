<template>
    <div class="sidebar absolute  grid space-y-5">
        <div class="phone" title="Call Me">

            <a href="tel:+237681070745"><svg xmlns="http://www.w3.org/2000/svg" 
            class=" ml-4
                    h-8
                    w-8 
                    hover:scale-125
                    cursor-pointer" 
            width="256" height="256" viewBox="0 0 256 256"><path fill="#ff9900" d="M152.27 37.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.23 8.23 0 0 1-2.07.27a8 8 0 0 1-7.73-5.93a70.35 70.35 0 0 0-50.33-50.34a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.55 26.33 26.34A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m72.43 78.73l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62"/></svg> </a>

      </div>
        <div class="important 
                    border
                    rounded-r-full
                    h-16
                    w-20" title="Inbox Me"  >
                <a href="mailto:eaesau@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" 
            class=" mt-3 
                    ml-3
                    h-9
                    w-9 
                    hover:scale-125
                    cursor-pointer" 
             viewBox="0 0 24 24"><path  fill="#ffffff" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg></a>

        </div>
        <div class="whatsapp" title="Whatsapp Me" >
            <a href="https://wa.me/237681070745"><svg xmlns="http://www.w3.org/2000/svg"  
             class=" ml-4
                    h-8
                    w-8 
                    hover:scale-125
                    cursor-pointer"
             viewBox="0 0 24 24"><path fill="#ff9900" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg></a>
      </div>
    </div>
</template>
<style scoped>
/* phones */
@media only screen and (max-width: 40em) {
    .sidebar{
        z-index:30;
        margin-top:180px;
    }
    
.important{
    background-color: #ff9900;
}
}

/* tablets */ /* medium screens rotate */
@media only screen and (min-width: 40em) and (max-width: 48em) {
    .sidebar{
        z-index:30;
        margin-top:100px !important;
        height: 40px;
        width: 40px;
    }
    
.important{
    background-color: #ff9900;
}   
}

/* laptops */
@media only screen and (min-width: 48em) {
    .sidebar{
        z-index:30;
        margin-top:300px;
    }
    
.important{
    background-color: #ff9900;
}
}

/* Medium devices such as tablets (768px and up)  this is one*/ 
@media only screen and (min-width: 48em) and (max-width: 64em){

}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em){
    
}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 80em){

}
</style>
