/_ sidebar-content _/

.sidebar-content {
display: flex;
width: 100vw;
min-height: 100vh;
max-height: 100%;
position: relative;
background-color: white;
color: #000b1c;
}

.sidebar-nav {
padding: 18px;

display: flex;
flex-direction: column;
top: 0;
background-color: #000b1c;
height: 100%;
width: 17rem;
box-shadow: 2px 0px 2px gray;
color: white;
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
margin-top: 4.1rem;
}
.sidebar-nav .mobile-nav {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 75vh;
background-color: hsl(216, 100%, 4%);
margin-top: 4rem;
color: white;
box-shadow: 0 0px 1px gray;
padding: 0 2rem 0 2rem;
}

.sidebar-nav-menu-toggle {
position: relative;
display: flex;
flex-direction: column;
align-items: center;
}

.sidebar-nav-content-mobile .menu-toggle .open {
font-size: 2.8rem;
}
.sidebar-nav-mobile-blur {
position: fixed;
top: 4rem;
left: 0;
width: 100vw;
height: 100vh;
background-color: #000b1c75;
}
.sidebar-nav h3 {
margin-top: -0.6rem;
}
.sidebar-nav-content {
display: flex;
flex-direction: column;
justify-content: center;
color: white;
list-style: none;
align-items: center;
}
.sidebar-nav-content .register-btn {
position: relative;
background-color: white;
color: #000b1c;
padding: 0.5rem 0.9rem;
border-radius: 2rem;
}
.sidebar-nav-content li {
margin-right: 2rem;
font-size: 0.8rem;
}
.sidebar-nav-content .login-btn {
margin-left: 26vw;
}
.sidebar-nav-content-mobile {
display: none;
color: white;
list-style: none;
align-items: center;
margin-left: auto;
}

.sidebar-nav-content-mobile li {
font-size: 1.2rem;
padding: 1.5rem 0rem;
text-align: center;
}
.sidebar-nav-content-mobile .register-btn {
background-color: white;
color: #000b1c;
padding: 0.7rem 28vw;
border-radius: 2rem;
}

.sidebar-nav-content-mobile .open {
font-size: 2rem;
}

/_ dash nav _/
.nav-dash {
padding: 18px;
position: fixed;
z-index: 1;
display: flex;
top: 0;
background-color: #000b1c;
height: 4rem;
width: 100%;
box-shadow: 0px 0px 2px gray;
color: white;
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
}
.nav-dash-content {
display: flex;
color: white;
list-style: none;
align-items: center;
margin-left: auto;
}
.dash-category {
background-color: white;
}

/_ sidebar-options _/
.sidebar-options {
padding: 0.6rem 0;
background-color: white;
width: 100%;
color: #000b1c;
border-radius: 2rem 0.5rem 0.5rem 2rem;
margin: 0.5rem 0;
transition: 0.6s ease;
border: 0.1px solid hsl(216, 100%, 58%);
}
.sidebar-options:hover {
background-color: #f5f9ff;
margin: 0.5rem 0;
}

@media screen and (max-width: 767px) {
.sidebar-nav-content {
display: none;
}
.sidebar-nav {
width: 4rem;
}
.sidebar-nav-content-mobile {
display: flex;
}
.sidebar-nav {
box-shadow: 0px 0px 5px gray;
}
.dash-category {
margin-left: 5rem;
}
}
