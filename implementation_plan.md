# Neo-Brutalist Website for Frederik Schulz, PhD

I've created a complete neo-brutalist website implementation for Frederik Schulz based on the elian.codes design aesthetic. Here's the full implementation:

## Project Structure
```
frederik-schulz-website/
├── index.html
├── research.html
├── ai-scientist.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── .nojekyll
├── CNAME (optional for custom domain)
└── README.md
```

## 1. index.html (Homepage)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frederik Schulz, PhD - AI/ML & Microbiome Data Science</title>
    <meta name="description" content="Frederik Schulz, PhD - CEO at SampleX, CTO at BioKEA, Staff Scientist & PI at DOE Joint Genome Institute">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Frederik Schulz, PhD">
    <meta property="og:description" content="AI/ML and Microbiome Data Science Leader">
    <meta property="og:type" content="website">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav-brutalist">
        <div class="nav-container">
            <a href="/" class="nav-logo">FS</a>
            <div class="nav-items">
                <a href="/" class="nav-item active">Home</a>
                <a href="research.html" class="nav-item">Research</a>
                <a href="ai-scientist.html" class="nav-item">AI Scientist</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    <h1 class="hero-title">Frederik<br>Schulz<span class="accent-dot">.</span></h1>
                    <div class="hero-subtitle">PhD</div>
                    <p class="hero-description">
                        <strong>Pioneering AI/ML applications in microbiome data science</strong> to discover novel life forms 
                        and advance our understanding of the microbial world.
                    </p>
                    <div class="hero-roles">
                        <div class="role-box">CEO at SampleX</div>
                        <div class="role-box">CTO at BioKEA</div>
                        <div class="role-box">Staff Scientist & PI at DOE JGI</div>
                    </div>
                </div>
                <div class="hero-shape">
                    <div class="shape-box rotating">
                        <div class="shape-inner">AI</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about">
        <div class="container">
            <div class="section-header">
                <h2>Expanding the tree of life through data</h2>
            </div>
            <div class="about-grid">
                <div class="about-card">
                    <h3>Research Focus</h3>
                    <p>
                        Leading the <strong>New Lineages of Life Group</strong> at Lawrence Berkeley National Laboratory, 
                        I discover novel bacterial, archaeal, eukaryotic microbes, and viruses in environmental sequence data. 
                        My work combines cutting-edge <strong>machine learning</strong> with multi-omics approaches to unlock 
                        the hidden diversity of life on Earth.
                    </p>
                </div>
                <div class="about-card highlight">
                    <h3>Innovation Stack</h3>
                    <ul class="tech-list">
                        <li>Machine Learning & AI</li>
                        <li>Metagenomics</li>
                        <li>Single Cell Genomics</li>
                        <li>Phylogenomics</li>
                        <li>Giant Virus Biology</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Links Section -->
    <section class="links">
        <div class="container">
            <div class="section-header">
                <h2>Connect & Collaborate</h2>
            </div>
            <div class="links-grid">
                <a href="https://newlineages.com" target="_blank" class="link-card primary">
                    <div class="link-icon">🧬</div>
                    <h3>New Lineages</h3>
                    <p>Research Group</p>
                </a>
                <a href="https://samplex.ai" target="_blank" class="link-card">
                    <div class="link-icon">🤖</div>
                    <h3>SampleX</h3>
                    <p>AI-Powered Analysis</p>
                </a>
                <a href="https://biokea.ai" target="_blank" class="link-card">
                    <div class="link-icon">🔬</div>
                    <h3>BioKEA</h3>
                    <p>Biological Intelligence</p>
                </a>
            </div>
        </div>
    </section>

    <!-- Social Links -->
    <section class="social">
        <div class="container">
            <div class="social-grid">
                <a href="https://linkedin.com/in/fmschulz" target="_blank" class="social-link">
                    <span class="social-icon">in</span>
                    LinkedIn
                </a>
                <a href="https://github.com/fschjgi" target="_blank" class="social-link">
                    <span class="social-icon">gh</span>
                    GitHub
                </a>
                <a href="https://github.com/NeLLi-team" target="_blank" class="social-link">
                    <span class="social-icon">gh</span>
                    NeLLi Team
                </a>
                <a href="https://twitter.com/fmschulz" target="_blank" class="social-link">
                    <span class="social-icon">X</span>
                    Twitter/X
                </a>
            </div>
            <div class="contact-info">
                <p>ORCID: <strong>0000-0002-4932-4677</strong></p>
                <p>Email: <strong>frederik.schulz@samplex.ai</strong></p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Frederik Schulz. Built with neo-brutalist principles.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

## 2. research.html (Research Topics)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research - Frederik Schulz, PhD</title>
    <meta name="description" content="Research topics and scientific contributions of Frederik Schulz in microbiome data science and AI/ML">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav-brutalist">
        <div class="nav-container">
            <a href="/" class="nav-logo">FS</a>
            <div class="nav-items">
                <a href="/" class="nav-item">Home</a>
                <a href="research.html" class="nav-item active">Research</a>
                <a href="ai-scientist.html" class="nav-item">AI Scientist</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Research<span class="accent-dot">.</span></h1>
            <p class="page-subtitle">Discovering new forms of life through computational biology</p>
        </div>
    </section>

    <!-- Research Areas -->
    <section class="research-areas">
        <div class="container">
            <div class="research-grid">
                <div class="research-card featured">
                    <div class="research-number">01</div>
                    <h2>Giant virus biology & diversity</h2>
                    <p>
                        Leading groundbreaking research on nucleocytoplasmic large DNA viruses (NCLDV) through 
                        cultivation-independent metagenomics. Achieved an <strong>11-fold increase</strong> in known 
                        giant virus phylogenetic diversity by reconstructing 2,074 NCLDV genomes from global sampling sites.
                    </p>
                    <div class="research-stats">
                        <div class="stat-box">
                            <span class="stat-number">2,074</span>
                            <span class="stat-label">Genomes Reconstructed</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">11x</span>
                            <span class="stat-label">Diversity Increase</span>
                        </div>
                    </div>
                </div>

                <div class="research-card">
                    <div class="research-number">02</div>
                    <h2>AI/ML in microbiome research</h2>
                    <p>
                        Developing and applying machine learning algorithms to identify patterns and novel functions 
                        in complex microbiome data. Using AI to predict pathogenic microbes, automate classification, 
                        and discover hidden patterns in large-scale metagenomic datasets.
                    </p>
                    <ul class="research-points">
                        <li>Pattern recognition in metagenomic data</li>
                        <li>Predictive modeling for pathogen detection</li>
                        <li>Automated taxonomic classification</li>
                        <li>geNomad: ML tool for mobile genetic elements</li>
                    </ul>
                </div>

                <div class="research-card">
                    <div class="research-number">03</div>
                    <h2>Microbial symbiosis</h2>
                    <p>
                        Investigating bacterial symbionts in unusual niches, including nuclear symbionts of amoebae. 
                        Research focuses on understanding protective mechanisms and evolutionary strategies in 
                        host-symbiont systems across marine and terrestrial environments.
                    </p>
                </div>

                <div class="research-card">
                    <div class="research-number">04</div>
                    <h2>Protist ecology & diversity</h2>
                    <p>
                        Establishing single-cell-based discovery pipelines for terrestrial protists. Understanding 
                        the diversity and ecological roles of microeukaryotes in terrestrial ecosystems through 
                        innovative sampling and sequencing approaches.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Publications -->
    <section class="publications">
        <div class="container">
            <h2 class="section-title">Key publications</h2>
            <div class="pub-grid">
                <div class="pub-card">
                    <div class="pub-year">2022</div>
                    <h3>Giant virus biology and diversity in the era of genome-resolved metagenomics</h3>
                    <p class="pub-journal">Nature Reviews Microbiology</p>
                </div>
                <div class="pub-card">
                    <div class="pub-year">2020</div>
                    <h3>Giant virus diversity and host interactions through global metagenomics</h3>
                    <p class="pub-journal">Nature</p>
                </div>
                <div class="pub-card">
                    <div class="pub-year">2021</div>
                    <h3>A genomic catalog of Earth's microbiomes</h3>
                    <p class="pub-journal">Nature Biotechnology</p>
                </div>
            </div>
            <div class="stats-highlight">
                <div class="stat-item">
                    <span class="stat-large">9,000+</span>
                    <span class="stat-desc">Citations</span>
                </div>
                <div class="stat-item">
                    <span class="stat-large">2024</span>
                    <span class="stat-desc">Berkeley Lab Director's Award</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Frederik Schulz. Built with neo-brutalist principles.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

## 3. ai-scientist.html (AI Scientist Page)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Scientist - Frederik Schulz, PhD</title>
    <meta name="description" content="Multiagent reviewer stack and AI applications in scientific research">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav-brutalist">
        <div class="nav-container">
            <a href="/" class="nav-logo">FS</a>
            <div class="nav-items">
                <a href="/" class="nav-item">Home</a>
                <a href="research.html" class="nav-item">Research</a>
                <a href="ai-scientist.html" class="nav-item active">AI Scientist</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">AI Scientist<span class="accent-dot">.</span></h1>
            <p class="page-subtitle">Advancing scientific discovery through artificial intelligence</p>
        </div>
    </section>

    <!-- AI Overview -->
    <section class="ai-overview">
        <div class="container">
            <div class="ai-hero">
                <h2>Multiagent reviewer stack</h2>
                <p class="lead-text">
                    Developing innovative AI systems that enhance scientific peer review and accelerate 
                    discovery through multiagent collaboration and machine learning.
                </p>
            </div>
        </div>
    </section>

    <!-- AI Applications -->
    <section class="ai-applications">
        <div class="container">
            <div class="ai-grid">
                <div class="ai-card">
                    <div class="ai-icon">🤖</div>
                    <h3>Automated review systems</h3>
                    <p>
                        Building AI agents that can critically evaluate scientific manuscripts, identify 
                        methodological issues, and suggest improvements to accelerate the peer review process.
                    </p>
                </div>
                <div class="ai-card">
                    <div class="ai-icon">🧬</div>
                    <h3>Genomic pattern recognition</h3>
                    <p>
                        Applying deep learning to identify novel patterns in genomic data, discovering 
                        new gene families and predicting functional elements in uncharacterized sequences.
                    </p>
                </div>
                <div class="ai-card">
                    <div class="ai-icon">🔬</div>
                    <h3>Hypothesis generation</h3>
                    <p>
                        Using AI to generate and test scientific hypotheses by analyzing vast amounts of 
                        literature and experimental data to identify promising research directions.
                    </p>
                </div>
                <div class="ai-card highlight">
                    <div class="ai-icon">📊</div>
                    <h3>Data synthesis</h3>
                    <p>
                        Integrating multi-omics data streams through machine learning to create comprehensive 
                        models of biological systems and predict emergent properties.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Projects -->
    <section class="current-projects">
        <div class="container">
            <h2 class="section-title">Active AI projects</h2>
            <div class="project-list">
                <div class="project-item">
                    <h3>geNomad</h3>
                    <p>Machine learning tool for identifying plasmids and viruses in genomic data</p>
                    <a href="https://github.com/apcamargo/genomad" target="_blank" class="project-link">View on GitHub →</a>
                </div>
                <div class="project-item">
                    <h3>Pathogen prediction models</h3>
                    <p>AI systems for agnostic pathogen detection in complex environmental samples</p>
                    <span class="project-tag">DTRA Funded</span>
                </div>
                <div class="project-item">
                    <h3>Microbiome structure analysis</h3>
                    <p>Deep learning approaches to understand microbial community dynamics</p>
                    <span class="project-tag">Active Research</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
        <div class="container">
            <div class="cta-box">
                <h2>Collaborate on AI-driven science</h2>
                <p>
                    Interested in applying AI to solve complex biological problems? 
                    Let's explore how machine learning can accelerate your research.
                </p>
                <a href="mailto:frederik.schulz@samplex.ai" class="cta-button">Get in Touch</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Frederik Schulz. Built with neo-brutalist principles.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

## 4. css/styles.css (Complete Stylesheet)
```css
/* ===== CSS Variables ===== */
:root {
    /* Colors */
    --color-black: #000000;
    --color-white: #ffffff;
    --color-accent: #fa4b13;
    --color-secondary: #f27242;
    --color-dark: #212c30;
    --color-muted: #c1ccd5;
    --color-light-gray: #f5f5f5;
    
    /* Typography */
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-2xl: 4rem;
    
    /* Borders */
    --border-width: 3px;
    --border-width-thick: 5px;
}

/* ===== Global Styles ===== */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-black);
    background-color: var(--color-white);
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: var(--space-sm);
}

h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 700;
}

h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
}

p {
    margin-bottom: var(--space-sm);
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: all 0.1s ease;
}

a:hover {
    color: var(--color-secondary);
}

strong {
    font-weight: 700;
    color: var(--color-accent);
}

/* ===== Container ===== */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-sm);
}

@media (min-width: 768px) {
    .container {
        padding: 0 var(--space-lg);
    }
}

/* ===== Navigation ===== */
.nav-brutalist {
    border-bottom: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-black);
    padding: var(--space-sm) 0;
    text-decoration: none;
}

.nav-items {
    display: flex;
    gap: 0;
}

.nav-item {
    padding: var(--space-sm) var(--space-md);
    border-left: var(--border-width) solid var(--color-black);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-black);
    transition: all 0.1s ease;
}

.nav-item:hover,
.nav-item.active {
    background: var(--color-accent);
    color: var(--color-white);
}

/* ===== Hero Section ===== */
.hero {
    padding: var(--space-2xl) 0;
    background: var(--color-white);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    align-items: center;
}

@media (min-width: 768px) {
    .hero-grid {
        grid-template-columns: 2fr 1fr;
    }
}

.hero-title {
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-xs);
}

.accent-dot {
    color: var(--color-accent);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-muted);
    margin-bottom: var(--space-md);
}

.hero-description {
    font-size: 1.125rem;
    margin-bottom: var(--space-lg);
}

.hero-roles {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
}

.role-box {
    padding: var(--space-sm) var(--space-md);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-light-gray);
    font-weight: 700;
    box-shadow: 4px 4px 0 var(--color-black);
}

/* ===== Shape Animation ===== */
.hero-shape {
    display: none;
}

@media (min-width: 768px) {
    .hero-shape {
        display: block;
    }
}

.shape-box {
    width: 300px;
    height: 300px;
    border: var(--border-width-thick) solid var(--color-black);
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 8px 0 var(--color-black);
}

.shape-inner {
    font-family: var(--font-display);
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-white);
}

.rotating {
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* ===== About Section ===== */
.about {
    padding: var(--space-2xl) 0;
    background: var(--color-light-gray);
    border-top: var(--border-width) solid var(--color-black);
    border-bottom: var(--border-width) solid var(--color-black);
}

.section-header {
    margin-bottom: var(--space-xl);
}

.section-header h2 {
    border-bottom: var(--border-width-thick) solid var(--color-accent);
    display: inline-block;
    padding-bottom: var(--space-sm);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
}

@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: 2fr 1fr;
    }
}

.about-card {
    padding: var(--space-lg);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    box-shadow: 6px 6px 0 var(--color-black);
}

.about-card.highlight {
    background: var(--color-accent);
    color: var(--color-white);
}

.about-card h3 {
    margin-bottom: var(--space-md);
}

.tech-list {
    list-style: none;
}

.tech-list li {
    padding: var(--space-xs) 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    font-weight: 700;
}

/* ===== Links Section ===== */
.links {
    padding: var(--space-2xl) 0;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
}

.link-card {
    padding: var(--space-lg);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    box-shadow: 4px 4px 0 var(--color-black);
    transition: all 0.1s ease;
    color: var(--color-black);
    text-decoration: none;
    display: block;
}

.link-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--color-black);
}

.link-card.primary {
    background: var(--color-accent);
    color: var(--color-white);
}

.link-icon {
    font-size: 2rem;
    margin-bottom: var(--space-sm);
}

.link-card h3 {
    margin-bottom: var(--space-xs);
}

/* ===== Social Section ===== */
.social {
    padding: var(--space-2xl) 0;
    background: var(--color-dark);
    color: var(--color-white);
    border-top: var(--border-width) solid var(--color-black);
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.social-link {
    padding: var(--space-sm);
    border: var(--border-width) solid var(--color-white);
    background: transparent;
    color: var(--color-white);
    font-weight: 700;
    text-align: center;
    transition: all 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
}

.social-link:hover {
    background: var(--color-white);
    color: var(--color-dark);
}

.social-icon {
    font-weight: 900;
    font-family: var(--font-display);
}

.contact-info {
    text-align: center;
}

.contact-info p {
    margin-bottom: var(--space-xs);
}

/* ===== Research Page ===== */
.page-header {
    padding: var(--space-xl) 0;
    border-bottom: var(--border-width) solid var(--color-black);
}

.page-title {
    margin-bottom: var(--space-xs);
}

.page-subtitle {
    font-size: 1.25rem;
    color: var(--color-muted);
}

.research-areas {
    padding: var(--space-2xl) 0;
}

.research-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
}

@media (min-width: 768px) {
    .research-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.research-card {
    padding: var(--space-lg);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    box-shadow: 4px 4px 0 var(--color-black);
    position: relative;
}

.research-card.featured {
    grid-column: 1 / -1;
    background: var(--color-light-gray);
}

.research-number {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-accent);
    opacity: 0.2;
}

.research-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-lg);
}

.stat-box {
    padding: var(--space-md);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-accent);
    color: var(--color-white);
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 900;
    font-family: var(--font-display);
}

.stat-label {
    display: block;
    font-size: 0.875rem;
    text-transform: uppercase;
}

.research-points {
    list-style: none;
    margin-top: var(--space-md);
}

.research-points li {
    padding: var(--space-xs) 0;
    padding-left: var(--space-md);
    position: relative;
}

.research-points li:before {
    content: "→";
    position: absolute;
    left: 0;
    font-weight: 700;
    color: var(--color-accent);
}

/* ===== Publications ===== */
.publications {
    padding: var(--space-2xl) 0;
    background: var(--color-dark);
    color: var(--color-white);
}

.section-title {
    margin-bottom: var(--space-xl);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.pub-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
}

.pub-card {
    padding: var(--space-md);
    border: var(--border-width) solid var(--color-white);
    background: transparent;
}

.pub-year {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-accent);
    text-transform: uppercase;
    margin-bottom: var(--space-xs);
}

.pub-journal {
    font-style: italic;
    color: var(--color-muted);
}

.stats-highlight {
    display: flex;
    justify-content: center;
    gap: var(--space-xl);
}

.stat-item {
    text-align: center;
}

.stat-large {
    display: block;
    font-size: 3rem;
    font-weight: 900;
    font-family: var(--font-display);
    color: var(--color-accent);
}

.stat-desc {
    display: block;
    font-size: 0.875rem;
    text-transform: uppercase;
}

/* ===== AI Scientist Page ===== */
.ai-overview {
    padding: var(--space-2xl) 0;
    background: var(--color-light-gray);
}

.ai-hero {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.lead-text {
    font-size: 1.25rem;
    line-height: 1.8;
}

.ai-applications {
    padding: var(--space-2xl) 0;
}

.ai-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
}

.ai-card {
    padding: var(--space-lg);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    box-shadow: 4px 4px 0 var(--color-black);
    text-align: center;
}

.ai-card.highlight {
    background: var(--color-secondary);
    color: var(--color-white);
}

.ai-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
}

/* ===== Current Projects ===== */
.current-projects {
    padding: var(--space-2xl) 0;
    background: var(--color-light-gray);
}

.project-list {
    display: grid;
    gap: var(--space-lg);
}

.project-item {
    padding: var(--space-lg);
    border: var(--border-width) solid var(--color-black);
    background: var(--color-white);
    box-shadow: 4px 4px 0 var(--color-black);
}

.project-link {
    font-weight: 700;
    color: var(--color-accent);
}

.project-tag {
    display: inline-block;
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-accent);
    color: var(--color-white);
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
}

/* ===== CTA Section ===== */
.cta {
    padding: var(--space-2xl) 0;
    background: var(--color-dark);
    color: var(--color-white);
}

.cta-box {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.cta-button {
    display: inline-block;
    padding: var(--space-md) var(--space-xl);
    margin-top: var(--space-lg);
    border: var(--border-width) solid var(--color-white);
    background: var(--color-accent);
    color: var(--color-white);
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 4px 4px 0 var(--color-white);
    transition: all 0.1s ease;
}

.cta-button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--color-white);
}

/* ===== Footer ===== */
.footer {
    padding: var(--space-lg) 0;
    background: var(--color-black);
    color: var(--color-white);
    text-align: center;
}

/* ===== Responsive Adjustments ===== */
@media (max-width: 767px) {
    .nav-items {
        flex-wrap: wrap;
    }
    
    .nav-item {
        font-size: 0.875rem;
        padding: var(--space-sm);
    }
    
    .hero-roles {
        flex-direction: column;
    }
    
    .role-box {
        width: 100%;
        text-align: center;
    }
    
    .stats-highlight {
        flex-direction: column;
        gap: var(--space-md);
    }
}
```

## 5. js/main.js (JavaScript)
```javascript
// Main JavaScript file for Frederik Schulz website

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to navigation based on current page
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll('.research-card, .link-card, .ai-card, .project-item');
    
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.link-card, .research-card, .ai-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-2px, -2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
});

// Console easter egg
console.log('%c Frederik Schulz, PhD ', 'background: #fa4b13; color: white; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c Exploring the hidden diversity of life through AI and data science ', 'font-size: 14px; padding: 5px;');
```

## 6. Additional Files

### .nojekyll
```
```
(Empty file to bypass Jekyll processing)

### README.md
```markdown
# Frederik Schulz, PhD - Personal Website

A neo-brutalist personal website showcasing research in AI/ML and microbiome data science.

## Features

- Neo-brutalist design inspired by elian.codes
- Responsive layout optimized for all devices
- Research showcase with publication highlights
- AI scientist section featuring multiagent systems
- Links to research group and company websites
- Optimized for GitHub Pages hosting

## Setup

1. Fork or clone this repository
2. Update content in HTML files as needed
3. Customize colors and styles in `css/styles.css`
4. Deploy to GitHub Pages

## Technologies

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Space Grotesk, Inter)

## License

© 2025 Frederik Schulz. All rights reserved.
```

## Deployment Instructions

1. Create a new GitHub repository named `[username].github.io` (for user site) or any name (for project site)
2. Upload all files maintaining the folder structure
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select source branch (main/master)
   - Save

The website will be live at `https://[username].github.io` within a few minutes.

## Design Features

- **Neo-brutalist aesthetic**: Bold typography, thick borders, hard shadows
- **High contrast**: Black, white, and vibrant accent colors
- **Responsive grid layouts**: Adapts seamlessly to all screen sizes
- **Interactive elements**: Hover effects and smooth transitions
- **Performance optimized**: Minimal JavaScript, efficient CSS
- **Accessibility**: Semantic HTML, proper contrast ratios

## Notes

- The company websites (samplex.ai and biokea.ai) were not accessible during research, so placeholder content is included
- The multiagent reviewer stack section is based on general AI/ML applications in science as specific details were not found
- All external links open in new tabs for better user experience
- The design closely matches elian.codes while maintaining originality
