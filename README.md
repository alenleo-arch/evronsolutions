
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Evron Solutions | Digital Agency</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #07111f;
    color: white;
    line-height: 1.6;
}

html {
    scroll-behavior: smooth;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.glass {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.25);
}

header {
    padding: 20px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    color: #71e4ee;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

nav a:hover {
    color: #71e4ee;
}

.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 60px 0;
}

.hero-content {
    flex: 1;
}

.hero h1 {
    font-size: 55px;
    line-height: 1.15;
    margin: 20px 0;
}

.gradient {
    background: linear-gradient(90deg,#71e4ee,#a99aff);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    color: #aebbd0;
    font-size: 18px;
    margin-bottom: 25px;
}

.btn {
    display: inline-block;
    padding: 13px 25px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    margin: 5px;
    background: linear-gradient(90deg,#71e4ee,#a99aff);
    color: #07111f;
}

.btn:hover {
    transform: translateY(-3px);
}

.stats {
    display: flex;
    gap: 35px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.stats h2 {
    color: #71e4ee;
}

.hero-image {
    flex: 1;
    padding: 25px;
    text-align: center;
}

.hero-image img {
    width: 100%;
    border-radius: 20px;
}

section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 38px;
    margin-bottom: 40px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 22px;
}

.card {
    padding: 25px;
    transition: .3s;
}

.card:hover {
    transform: translateY(-8px);
    border-color: #71e4ee;
}

.card h3 {
    color: #71e4ee;
    margin-bottom: 12px;
}

.card p {
    color: #aebbd0;
}

.system {
    padding: 35px;
    text-align: center;
}

.demo {
    margin-top: 25px;
    padding: 25px;
    background: rgba(113,228,238,.08);
    border-radius: 15px;
}

.tools {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
}

.tool {
    text-align: center;
    padding: 18px;
    font-weight: bold;
}

.steps {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}

.step {
    padding: 25px;
}

.step span {
    color: #71e4ee;
    font-size: 25px;
    font-weight: bold;
}

.project {
    overflow: hidden;
}

.project-img {
    height: 160px;
    background: linear-gradient(135deg,#176b82,#7560a9);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.project-info {
    padding: 20px;
}

.team-card {
    padding: 20px;
    text-align: center;
}

.team-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
}

.team-card h3 {
    color: #71e4ee;
}

.team-card p {
    color: #aebbd0;
    margin: 10px 0;
}

.review {
    padding: 25px;
}

.contact-box {
    padding: 35px;
    text-align: center;
}

footer {
    padding: 30px;
    text-align: center;
    color: #aebbd0;
    border-top: 1px solid rgba(255,255,255,.15);
}

@media(max-width:850px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero h1 {
        font-size: 40px;
    }

    .grid, .steps {
        grid-template-columns: repeat(2,1fr);
    }

    .tools {
        grid-template-columns: repeat(2,1fr);
    }

    nav {
        flex-direction: column;
        gap: 15px;
    }

    nav a {
        margin: 5px;
    }
}

@media(max-width:550px) {
    .grid, .steps {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 34px;
    }
}
</style>
</head>

<body>

<header class="container">
<nav class="glass">
    <div class="logo">EVRON SOLUTIONS</div>
    <div>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
    </div>
</nav>
</header>

<!-- HOME SECTION -->

<div class="container hero" id="home">

<div class="hero-content">
    <h4 class="gradient">WELCOME TO EVRON SOLUTIONS</h4>

    <h1>
        We Build Your
        <span class="gradient">Digital Future.</span>
    </h1>

    <p>
        We create powerful websites, eye-catching advertisements
        and digital marketing solutions that help businesses
        grow and stand out online.
    </p>

    <a href="tel:+918270596480" class="btn">
        Call Us Now
    </a>

    <a href="#work" class="btn">
        Explore Projects
    </a>

    <div class="stats">
        <div>
            <h2>10+</h2>
            <p>Projects Completed</p>
        </div>

        <div>
            <h2>100%</h2>
            <p>Satisfaction Goal</p>
        </div>

        <div>
            <h2>360°</h2>
            <p>Digital Solutions</p>
        </div>
    </div>
</div>

<div class="hero-image glass">
    <h2 class="gradient">Our Creative Team</h2>
    <p>Alen | Abhinav | Sarvesh</p>
    <br>
    <p>Upload your three team photos here.</p>
</div>

</div>

<!-- SERVICES -->

<section class="container" id="services">

<h2 class="section-title">
Our <span class="gradient">Services</span>
</h2>

<div class="grid">

<div class="card glass">
<h3>Website Building</h3>
<p>Modern, responsive and professional websites.</p>
</div>

<div class="card glass">
<h3>Ad Generation</h3>
<p>Creative advertisement designs and campaigns.</p>
</div>

<div class="card glass">
<h3>Meta Ads</h3>
<p>Facebook and Instagram advertising solutions.</p>
</div>

<div class="card glass">
<h3>Google Ads</h3>
<p>Google search and display advertising.</p>
</div>

<div class="card glass">
<h3>Social Media Handling</h3>
<p>Professional social media management.</p>
</div>

<div class="card glass">
<h3>SEO</h3>
<p>Search engine optimization for better visibility.</p>
</div>

</div>
</section>

<!-- DEMO SYSTEM -->

<section class="container">

<h2 class="section-title">
One System. <span class="gradient">Every Operation.</span>
</h2>

<div class="system glass">
<h2>Complete Digital Management</h2>

<p>
From website development to advertisements,
marketing and online growth, everything
under one connected system.
</p>

<div class="demo">
<h2 class="gradient">DEMO WEBSITE</h2>
<p>Website | Marketing | Analytics | Management</p>
</div>
</div>

</section>

<!-- TECHNOLOGY -->

<section class="container" id="tools">

<h2 class="section-title">
Tools & <span class="gradient">Technologies</span>
</h2>

<div class="tools">

<div class="tool glass">React</div>
<div class="tool glass">Node.js</div>
<div class="tool glass">TypeScript</div>
<div class="tool glass">SQL</div>
<div class="tool glass">Python</div>
<div class="tool glass">Django</div>
<div class="tool glass">FastAPI</div>
<div class="tool glass">Redis</div>
<div class="tool glass">Docker</div>
<div class="tool glass">AWS</div>
<div class="tool glass">MySQL</div>
<div class="tool glass">Next.js</div>
<div class="tool glass">Supabase</div>
<div class="tool glass">BlueJ</div>
<div class="tool glass">HTML</div>
<div class="tool glass">CSS</div>

</div>
</section>

<!-- METHODOLOGY -->

<section class="container">

<h2 class="section-title">
Our <span class="gradient">Methodology</span>
</h2>

<div class="steps">

<div class="step glass">
<span>01</span>
<h3>Discover</h3>
<p>Understand client requirements.</p>
</div>

<div class="step glass">
<span>02</span>
<h3>Design</h3>
<p>Create beautiful designs.</p>
</div>

<div class="step glass">
<span>03</span>
<h3>Build</h3>
<p>Develop the project.</p>
</div>

<div class="step glass">
<span>04</span>
<h3>Deploy</h3>
<p>Launch the website.</p>
</div>

<div class="step glass">
<span>05</span>
<h3>Train</h3>
<p>Guide clients through the system.</p>
</div>

<div class="step glass">
<span>06</span>
<h3>Support</h3>
<p>Provide ongoing support.</p>
</div>

</div>
</section>

<!-- PROJECTS -->

<section class="container" id="work">

<h2 class="section-title">
Our <span class="gradient">Projects</span>
</h2>

<div class="grid">

<div class="project glass">
<div class="project-img">WEBSITE 01</div>
<div class="project-info">
<h3>Business Website</h3>
<p>Professional website development.</p>
<a href="#">View Project</a>
</div>
</div>

<div class="project glass">
<div class="project-img">AD DESIGN 02</div>
<div class="project-info">
<h3>Advertisement Campaign</h3>
<p>Creative advertising solutions.</p>
<a href="#">View Project</a>
</div>
</div>

<div class="project glass">
<div class="project-img">WEB DESIGN 03</div>
<div class="project-info">
<h3>Landing Page</h3>
<p>Modern landing page design.</p>
<a href="#">View Project</a>
</div>
</div>

</div>
</section>

<!-- TEAM -->

<section class="container" id="team">

<h2 class="section-title">
Meet Our <span class="gradient">Team</span>
</h2>

<div class="grid">

<div class="team-card glass">
<img src="alen.jpg" alt="Alen">
<h3>Alen mon Saji</h3>
<p>BSc Second Year Student</p>
<p>Communication, Web Designing,
HTML, CSS, Python, Cybersecurity.</p>
</div>

<div class="team-card glass">
<img src="abhinav.jpg" alt="Abhinav">
<h3>Abhinav.R</h3>
<p>Editing, Python Coding,
Backend Development,
Frontend Development and Marketing.</p>
</div>

<div class="team-card glass">
<img src="sarvesh.jpg" alt="Sarvesh">
<h3>Sarvesh NS</h3>
<p>BSc Second Year Student</p>
<p>Frontend Development, Java,
Python, HTML, CSS and Marketing.</p>
</div>

</div>
</section>

<!-- CLIENT REVIEWS -->

<section class="container">

<h2 class="section-title">
Client <span class="gradient">Reviews</span>
</h2>

<div class="grid">

<div class="review glass">
<p>"Great website design and professional work."</p>
<h4>Sample Review 1</h4>
</div>

<div class="review glass">
<p>"Excellent communication and creative ideas."</p>
<h4>Sample Review 2</h4>
</div>

<div class="review glass">
<p>"Very helpful team and quality service."</p>
<h4>Sample Review 3</h4>
</div>

<div class="review glass">
<p>"The website looks modern and responsive."</p>
<h4>Sample Review 4</h4>
</div>

<div class="review glass">
<p>"A smooth and professional experience."</p>
<h4>Sample Review 5</h4>
</div>

</div>

<p style="color:#f1d69b;margin-top:15px">
Note: Replace sample reviews with genuine client feedback.
</p>

</section>

<!-- CONTACT -->

<section class="container" id="contact">

<h2 class="section-title">
Let's <span class="gradient">Work Together</span>
</h2>

<div class="contact-box glass">

<h2>EVRON SOLUTIONS</h2>

<br>

<p>Phone: 8270596480</p>

<p>Email: alanmonsaji2007@gmail.com</p>

<br>

<a href="tel:+918270596480" class="btn">
Call Now
</a>

<a href="https://wa.me/918270596480" class="btn">
WhatsApp
</a>

<a href="mailto:alanmonsaji2007@gmail.com" class="btn">
Send Email
</a>

</div>
</section>

<footer>
<p>© 2026 Evron Solutions. All Rights Reserved.</p>
<p>Designed for Digital Growth.</p>
</footer>

</body>
</html>
