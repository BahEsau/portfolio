<template>
  <Head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->
    <!-- <title><%= htmlWebpackPlugin.options.title %></title> -->
    <title>Portfolio</title>
    <meta name="site_name" content="Bah Esau Portfolio" />
    <meta property="og:site_name" content="Bah Esau Portfolio" />
    <meta name="url" content="https://bah-esau-portfolio.netlify.app" />
    <meta property="og:locale" content="en_EN" />
    <meta
      name="description"
      content=" my name is Bah Esau Taah I'm a software engineer specialized in building full-stack web application, UI/UX designs and occasionally mobile applications using up-to-date languages and technologies."
    />
    <!-- <meta
      name="keywords"
      content="Bah Esau Taah, porfolio, web developer, software engineer, cameroonian web developer, UI designer, UX designer, professional, laravel developer, php developer, vue.js developer, figma web designer, photoshop designer, adobe Xd designer, CSS and HTML, tailwind, Hire"
    /> -->
    <link rel="icon" href="webpic/MyIcon.svg" sizes="32x32" />
    <meta name="author" content="Bah Esau Taah" />

    <!-- Social -->
    <meta property="og:title" content="portfolio website" />
    <meta property="og:type" content="website" />
    <meta property="og:image:type" content="webpic/png" />
    <meta
      property="og:description"
      content=" my name is Bah Esau Taah I'm a software engineer specialized in building full-stack web application, UI/UX designs and occasionally mobile applications using up-to-date languages and technologies."
    />
    <meta property="og:image" itemprop="image" content="webpic/rounded.png" />
    <meta property="og:updated_time" content="1440432930" />
    <meta property="og:image:width" content="256" />
    <meta property="og:image:height" content="256" />
    <meta property="og:url" content="https://bah-esau-portfolio.netlify.app" />

    <!-- Twitter -->
    <meta name="twitter:title" content="portfolio website" />
    <meta
      name="twitter:description"
      content=" my name is Bah Esau Taah I'm a software engineer specialized in building full-stack web application, UI/UX designs and occasionally mobile
applications using up-to-date languages and technologies."
    />
    <meta name="twitter:image" content="webpic/rounded.png" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  <div class="body relative">
    <link itemprop="thumbnailUrl" href="webpic/rounded.png" />
    <span
      itemprop="thumbnail"
      itemscope
      itemtype="http://schema.org/ImageObject"
    >
      <link itemprop="url" href="webpic/rounded.png" />
    </span>
    <!-- <navbar></navbar> -->

    <nav class="navbar" id="Welcome">
      <div class="logo fixed min-w-40 -mt-2 grid bg-white">
        <a
          class="E pl-1 pb-3 pt-3 w-4 w-7 pb-1 text-white rounded-br-xl text-2xl font-semibold fixed"
          href="#Welcome"
          v-smooth-scroll
          ><p>E</p>
        </a>
        <a
          class="Esau min-w-fit absolute text-sm ml-8 mt-9 bg-white font-bold"
          href="#Welcome"
          v-smooth-scroll
          >Esau
        </a>
        <div
          class="menu object-content bg-white hover:pointer"
          @click="showMenu()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#FF9900" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
          </svg>
        </div>
      </div>

      <div
        class="navbarList fixed z-30 bg-white rounded-br-xl rounded-bl-xl w-fit pt-4 pl-3 ml-40 font-normal"
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul
          class="nav-items grid sm:gap-x-5 md:gap-x-10 lg:gap-x-16 lg:text-base md:text-sm sm:text-sm sm:text-left sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 object-content"
          id="myLinks"
        >
          <li
            class="l"
            title="go to about me section"
            href="#About_Me"
            v-smooth-scroll
          >
            About Me
          </li>
          <li
            class="l"
            title="go to projects section"
            href="#Projects"
            v-smooth-scroll
          >
            Projects
          </li>
          <li
            class="l"
            title="go to experience section"
            href="#Experience"
            v-smooth-scroll
          >
            Experience
          </li>
          <li
            class="l"
            title="go to contact me section"
            href="#Contact"
            v-smooth-scroll
          >
            Contact
          </li>
          <li
            class="Resume border border-solide border-2 rounded-xl pl-3 pr-2 pb-0.5 relative"
            title="view my CV"
            @click.prevent="
              downloadItem({
                url: (href = 'files/My_CV.pdf'),
                label: 'Esau_CV.pdf',
              })
            "
          >
            Resume
            <span
              class="animRs absolute inline-flex rounded-full h-2 w-2"
            ></span>
            <span
              class="animRs animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-96"
            ></span>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="fixed z-50">
      <sidebar></sidebar>
    </nav>
    <!-- <div id="sec-1"> -->
    <heropic></heropic>
    <!-- </div> -->

    <!-- <div id="sec-1"> -->
    <welcomeSection></welcomeSection>
    <!-- </div> -->

    <div class="mt-28" id="About_Me">
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
.body {
  height: 100vh;
  /* width:100vw; */
  overflow-x: hidden !important;
  overflow-y: show !important;
}

@media only screen and (max-width: 40em) {
  .logo {
    position: absolute;
    background-color: #ffffff !important ;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    font-size: large;
    position: fixed;
    /* -webkit-text-stroke:1px white; */
  }

  .menu {
    display: absolute;
    height: 24px;
    width: 24px;
    z-index: 100;
    margin-top: 20px;
    margin-left: 85%;
    position: fixed;
  }
  .l {
    color: #002256;
    text-align: center;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
    text-align: center;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbarList {
    box-shadow: 0px 1px 5px #dcdcff23;
  }

  .navbar {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    display: none;
  }
  .navbarList {
    flex-direction: column;
    z-index: 100;
    position: fixed;
    transition: all 0.2s ease-out;
    /* margin-top:40px;
  margin-left:250px; */
    margin-top: -10px;
    margin-left: 18.5%;
    width: 65.5%;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

@media only screen and (min-width: 40em) and (max-width: 45em) {
  .logo {
    position: absolute;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    position: fixed;
  }

  .menu {
    display: absolute;
    height: 26px;
    width: 26px;
    z-index: 100;
    margin-top: 20px;
    margin-left: 590px;
    position: fixed;
  }
  .l {
    color: #002256;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbarList {
    box-shadow: 0px 1px 5px #dcdcff23;
  }

  .navbar {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    display: none;
  }
  .navbarList {
    flex-direction: column;
    z-index: 100;
    position: fixed;
    transition: all 0.2s ease-out;
    margin-top: -10px;
    margin-left: 65px;
    width: 70.5%;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
@media only screen and (min-width: 45em) and (max-width: 47em) {
  .logo {
    position: absolute;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    position: fixed;
  }

  .menu {
    display: absolute;
    height: 26px;
    width: 26px;
    z-index: 100;
    margin-top: 20px;
    margin-left: 670px;
    position: fixed;
  }
  .l {
    color: #002256;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbarList {
    box-shadow: 0px 1px 5px #dcdcff23;
  }

  .navbar {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    display: none;
  }
  .navbarList {
    flex-direction: column;
    z-index: 100;
    position: fixed;
    transition: all 0.2s ease-out;
    margin-top: -10px;
    margin-left: 65px;
    width: 80.5%;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
  .logo {
    position: absolute;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    position: fixed;
  }
  .l {
    color: #002256;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbar {
    box-shadow: 0px 1px 5px #dcdcff23;
  }
  .menu {
    display: absolute;
    height: 26px;
    width: 26px;
    z-index: 100;
    margin-top: 20px;
    margin-left: 590px;
    visibility: hidden;
  }
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (min-width: 64em) {
  .logo {
    position: absolute;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    position: fixed;
  }
  .l {
    color: #002256;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbar {
    box-shadow: 0px 1px 5px #dcdcff23;
    /* display: hidden; */
  }
}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 80em) {
  .logo {
    position: absolute;
  }
  .E {
    background-color: #ff9900 !important ;
  }
  .animRs {
    background-color: #ff9900 !important ;
  }
  .Esau {
    color: #ff9900;
    position: fixed;
  }
  .l {
    color: #002256;
  }
  .l:hover {
    /* text-decoration: underline 2px #FF9900; */
    cursor: pointer;
    color: #ff9900;
  }
  .Resume {
    border-color: #ff9900;
  }
  .Resume:hover {
    cursor: pointer;
    color: #ff9900;
  }
  .navbar {
    box-shadow: 0px 1px 5px #dcdcff23;
    /* display: hidden; */
  }
}
</style>

<script>
// import navbar from './components/navbar';
import heropic from "./components/heroPicSection";
import sidebar from "./components/sideBar";
import welcomeSection from "./components/welcomeSection";
import aboutSection from "./components/aboutSection";
import projectSection from "./components/projectSection";
import experienceSection from "./components/experienceSection";
import footerSection from "./components/footer.vue";
import contactSection from "./components/contactSection.vue";

import axios from "axios";

export default {
  components: {
    // navbar,
    heropic,
    sidebar,
    welcomeSection,
    aboutSection,
    projectSection,
    experienceSection,
    contactSection,
    footerSection,
  },
  data() {
    return {
      showMobileMenu: false,
    };
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
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
