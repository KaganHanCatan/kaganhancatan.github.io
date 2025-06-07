// Enhanced Content Management System
// This file loads content from content.json and provides translation utilities

let websiteContent = null;

// Embedded content as backup (automatically populated from content.json)
const EMBEDDED_CONTENT = {
  "personal": {
    "name": "Kagan Han Catan",
    "title": "AI Engineer & Data Scientist",
    "email": "kagan.catan@gmail.com",
    "linkedin": "https://www.linkedin.com/in/kaganhancatan/",
    "github": "https://github.com/KaganHanCatan",
    "resume": "Assets/Resume.pdf",
    "profileImage": "Assets/Icons/logo1.png"
  },
  "navigation": {
    "en": {
      "home": "Home",
      "about": "About",
      "experience": "Experience",
      "projects": "Projects",
      "blog": "Blog"
    },
    "tr": {
      "home": "Ana Sayfa",
      "about": "Hakkımda",
      "experience": "Deneyim",
      "projects": "Projeler",
      "blog": "Blog"
    }
  },
  "hero": {
    "en": {
      "greeting": "Hi, I'm",
      "subtitle": "AI Engineer & Data Scientist",
      "description": "Curiosity-driven AI Engineer with 4+ years of experience in deep learning, machine learning, statistical analysis, and data visualization. I transform data into actionable insights.",
      "portfolioButton": "My Portfolio",
      "resumeButton": "Resume"
    },
    "tr": {
      "greeting": "Merhaba, Ben",
      "subtitle": "Yapay Zeka Mühendisi & Veri Bilimci",
      "description": "Derin öğrenme, makine öğrenmesi, istatistiksel analiz ve veri görselleştirme alanlarında 4+ yıl deneyimli, merak odaklı bir yapay zeka mühendisiyim. Veriyi eyleme dönüştürülebilir içgörülere çeviririm.",
      "portfolioButton": "Portföyüm",
      "resumeButton": "Özgeçmiş"
    }
  },
  "about": {
    "en": {
      "title": "About Me",
      "description1": "I'm a passionate AI Engineer with expertise in deep learning, machine learning, statistical analysis, and data visualization. My journey began with a B.S. in Statistics, and I've since developed strong skills in Python, Statistical Analysis, and various ML/DL frameworks.",
      "description2": "Currently working as an AI Engineer at OrbislabAI, I focus on AI Agents, Transformers Architecture, and creating AI-driven solutions that help organizations be more productive.",
      "statYears": "4+",
      "statYearsLabel": "Years Experience",
      "statProjects": "10+",
      "statProjectsLabel": "Projects Completed",
      "statCompanies": "3+",
      "statCompaniesLabel": "Companies Worked"
    },
    "tr": {
      "title": "Hakkımda",
      "description1": "Derin öğrenme, makine öğrenimi, istatistiksel analiz ve veri görselleştirme konularında uzmanlaşmış tutkulu bir Yapay Zeka Mühendisiyim. Yolculuğum İstatistik lisans eğitimiyle başladı ve o zamandan beri Python, istatistiksel analiz ve çeşitli ML/DL (Makine Öğrenimi/Derin Öğrenme) framework'lerinde güçlü beceriler geliştirdim.",
      "description2": "Şu anda OrbislabAI'da Yapay Zeka Mühendisi olarak çalışıyor, AI Agents, Transformers Mimarisi ve organizasyonların daha verimli olmalarına yardımcı olan AI odaklı çözümler geliştirmeye odaklanıyorum.",
      "statYears": "4+",
      "statYearsLabel": "Yıl Deneyim",
      "statProjects": "10+",
      "statProjectsLabel": "Tamamlanan Proje",
      "statCompanies": "3+",
      "statCompaniesLabel": "Çalışılan Şirket"
    }
  },
  "skills": [
    "Python",
    "Deep Learning",
    "Machine Learning",
    "Statistical Analysis",
    "Data Visualization",
    "Transformers Architecture",
    "AI Agents",
    "AI Tracing & Observability"
  ],
  "experience": {
    "en": {
      "title": "Experience",
      "subtitle": "My professional journey",
      "items": [
        {
          "period": "May 2025 - Present",
          "title": "AI Engineer",
          "company": "OrbislabsAI",
          "description": "Agents, agents and agents..."
        },
        {
          "period": "January 2024 - May 2025",
          "title": "AI Engineer",
          "company": "Softtech",
          "description": "Enhanced organizational productivity by fine-tuning large language models on internal codebases, enabling tailored AI-driven development workflows."
        },
        {
          "period": "July 2022 - January 2024",
          "title": "Jr. Data Scientist",
          "company": "Peopleoma",
          "description": "Developing HR analytics solutions, predictive models, and data quality modules. Working on forecasting systems and correlation analytics for employee turnover analysis."
        },
        {
          "period": "April 2022 - July 2022",
          "title": "Data Science Intern",
          "company": "Peopleoma",
          "description": "Gained hands-on experience in data analysis, machine learning model development, and statistical analysis in the HR domain."
        },
        {
          "period": "2018 - 2022",
          "title": "B.S. in Statistics",
          "company": "Eskisehir Technical University",
          "description": "Built strong foundation in statistical theory, probability, and data analysis methods."
        }
      ]
    },
    "tr": {
      "title": "Deneyim",
      "subtitle": "Profesyonel yolculuğum",
      "items": [
        {
          "period": "Mayıs 2025 - Şu an",
          "title": "AI Engineer",
          "company": "OrbislabsAI",
          "description": "Ajanlar, ajanlar ve ajanlar..."
        },
        {
          "period": "Ocak 2024 - Mayıs 2025",
          "title": "AI Engineer",
          "company": "Softtech",
          "description": "Kurumsal verimliliği artırmak amacıyla, şirket içi kod tabanları üzerinde büyük dil modellerini fine-tune yaparak, özelleştirilmiş yapay zeka destekli geliştirme iş akışları sağladım."
        },
        {
          "period": "Temmuz 2022 - Ocak 2024",
          "title": "Jr. Veri Bilimci",
          "company": "Peopleoma",
          "description": "İK analitik çözümleri, tahmin modelleri ve veri kalitesi modülleri geliştirme. Tahmin sistemleri ve çalışan devir oranı analizi için korelasyon analitiği üzerinde çalışma."
        },
        {
          "period": "Nisan 2022 - Temmuz 2022",
          "title": "Veri Bilimi Stajyeri",
          "company": "Peopleoma",
          "description": "Veri analizi, makine öğrenmesi model geliştirme ve İK alanında istatistiksel analiz konularında uygulamalı deneyim kazandım."
        },
        {
          "period": "2018 - 2022",
          "title": "İstatistik Lisans Derecesi",
          "company": "Eskişehir Teknik Üniversitesi",
          "description": "İstatistiksel teori, olasılık ve veri analizi yöntemlerinde güçlü temel oluşturdum."
        }
      ]
    }
  },
  "projects": {
    "en": {
      "title": "Featured Projects",
      "items": [
        {
          "title": "HR Forecasting System",
          "description": "Developed a predictive algorithm for Human Resources to implement an early warning system that informs companies about expected risks or changes in the next three months.",
          "tags": ["Python", "Machine Learning", "Forecasting"],
          "link": "https://github.com/KaganHanCatan/hr-forecasting-system"
        },
        {
          "title": "Data Quality Module",
          "description": "Created a comprehensive data quality assessment and monitoring system for the Peopleoma HR analytics platform to ensure data reliability and accuracy.",
          "tags": ["Python", "Data Quality", "ETL"],
          "link": "https://github.com/KaganHanCatan/data-quality-module"
        },
        {
          "title": "Correlation Analytics Dashboard",
          "description": "Built an intuitive correlation dashboard to reveal employee turnover dynamics and help HR teams understand variables associated with employee retention.",
          "tags": ["Python", "Streamlit", "Data Viz"],
          "link": "https://github.com/KaganHanCatan/correlation-analytics-dashboard"
        },
        {
          "title": "Statistical Analysis Web App",
          "description": "Created a web application for statistical analysis and machine learning algorithms with R and Python, featuring data upload, analysis, and visualization capabilities.",
          "tags": ["R", "Python", "Web App"],
          "link": "https://github.com/KaganHanCatan/statistical-analysis-webapp"
        },
        {
          "title": "Gender Gap Forecast",
          "description": "Developed a forecasting model that uses historical data to predict gender diversity metrics for the next three years, helping companies achieve their diversity goals.",
          "tags": ["Python", "Forecasting", "HR Analytics"],
          "link": "https://github.com/KaganHanCatan/gender-gap-forecast"
        }
      ]
    },
    "tr": {
      "title": "Öne Çıkan Projeler",
      "items": [
        {
          "title": "İK Tahmin Sistemi",
          "description": "İnsan Kaynakları için önümüzdeki üç ayda beklenen riskler veya değişiklikler hakkında şirketleri bilgilendiren bir erken uyarı sistemi uygulayan tahmine dayalı algoritma geliştirdim.",
          "tags": ["Python", "Makine Öğrenmesi", "Tahmin"],
          "link": "https://github.com/KaganHanCatan/hr-forecasting-system"
        },
        {
          "title": "Veri Kalitesi Modülü",
          "description": "Peopleoma İK analitik platformu için veri güvenilirliği ve doğruluğunu sağlamak amacıyla kapsamlı bir veri kalitesi değerlendirme ve izleme sistemi oluşturdum.",
          "tags": ["Python", "Veri Kalitesi", "ETL"],
          "link": "https://github.com/KaganHanCatan/data-quality-module"
        },
        {
          "title": "Korelasyon Analitik Paneli",
          "description": "Çalışan devir dinamiklerini ortaya çıkaran ve İK ekiplerinin çalışan elde tutmayla ilişkili değişkenleri anlamasına yardımcı olan sezgisel bir korelasyon panosu oluşturdum.",
          "tags": ["Python", "Streamlit", "Veri Görselleştirme"],
          "link": "https://github.com/KaganHanCatan/correlation-analytics-dashboard"
        },
        {
          "title": "İstatistiksel Analiz Web Uygulaması",
          "description": "Veri yükleme, analiz ve görselleştirme özelliklerine sahip R ve Python ile istatistiksel analiz ve makine öğrenmesi algoritmaları için bir web uygulaması oluşturdum.",
          "tags": ["R", "Python", "Web Uygulaması"],
          "link": "https://github.com/KaganHanCatan/statistical-analysis-webapp"
        },
        {
          "title": "Cinsiyet Açığı Tahmini",
          "description": "Şirketlerin çeşitlilik hedeflerine ulaşmasına yardımcı olarak, önümüzdeki üç yıl için cinsiyet çeşitliliği metriklerini tahmin etmek üzere geçmiş verileri kullanan bir tahmin modeli geliştirdim.",
          "tags": ["Python", "Tahmin", "İK Analitikleri"],
          "link": "https://github.com/KaganHanCatan/gender-gap-forecast"
        }
      ]
    }
  },
  "blog": {
    "en": {
      "title": "Latest Blog Posts",
      "subtitle": "Insights and thoughts from my journey",
      "viewAllButton": "View All Posts on Medium",
      "posts": [
        {
          "date": "Dec 15, 2024",
          "title": "Getting Started with Machine Learning",
          "excerpt": "A comprehensive guide to understanding the fundamentals of machine learning and how to start your journey in data science.",
          "tags": ["Machine Learning", "Data Science", "Python"],
          "link": "#",
          "linkText": "Read on Medium"
        },
        {
          "date": "Nov 28, 2024",
          "title": "Building Robust Data Pipelines",
          "excerpt": "Learn best practices for creating scalable and maintainable data pipelines that can handle real-world challenges.",
          "tags": ["Data Engineering", "Python", "ETL"],
          "link": "#",
          "linkText": "Read on Medium"
        },
        {
          "date": "Nov 10, 2024",
          "title": "The Future of AI in Business",
          "excerpt": "Exploring how artificial intelligence is transforming business operations and what it means for the future of work.",
          "tags": ["AI", "Business", "Future"],
          "link": "#",
          "linkText": "Read on Medium"
        }
      ]
    },
    "tr": {
      "title": "Son Blog Yazıları",
      "subtitle": "Yolculuğumdan anılar ve düşünceler",
      "viewAllButton": "Medium'da Tüm Yazıları Gör",
      "posts": [
        {
          "date": "15 Aralık 2024",
          "title": "Makine Öğrenmesine Başlangıç",
          "excerpt": "Makine öğrenmesinin temellerini anlama ve veri bilimi yolculuğunuza nasıl başlayacağınıza dair kapsamlı bir rehber.",
          "tags": ["Makine Öğrenmesi", "Veri Bilimi", "Python"],
          "link": "#",
          "linkText": "Medium'da Oku"
        },
        {
          "date": "28 Kasım 2024",
          "title": "Sağlam Veri Pipeline'ları Oluşturma",
          "excerpt": "Gerçek dünya zorluklarıyla başa çıkabilen ölçeklenebilir ve sürdürülebilir veri pipeline'ları oluşturmak için en iyi uygulamaları öğrenin.",
          "tags": ["Veri Mühendisliği", "Python", "ETL"],
          "link": "#",
          "linkText": "Medium'da Oku"
        },
        {
          "date": "10 Kasım 2024",
          "title": "İş Dünyasında AI'nın Geleceği",
          "excerpt": "Yapay zekanın iş operasyonlarını nasıl dönüştürdüğünü ve çalışmanın geleceği için ne anlama geldiğini keşfetmek.",
          "tags": ["AI", "İş Dünyası", "Gelecek"],
          "link": "#",
          "linkText": "Medium'da Oku"
        }
      ]
    }
  }
};

// Load content from JSON file
async function loadContent() {
    try {
        // Try multiple possible paths for the content file
        const possiblePaths = [
            './data/content.json',
            'data/content.json',
            '/data/content.json'
        ];
        
        let response = null;
        let error = null;
        
        for (const path of possiblePaths) {
            try {
                console.log(`Trying to load content from: ${path}`);
                response = await fetch(path);
                if (response.ok) {
                    console.log(`Successfully loaded content from: ${path}`);
                    break;
                }
            } catch (e) {
                error = e;
                console.warn(`Failed to load from ${path}:`, e.message);
            }
        }
        
        if (!response || !response.ok) {
            throw new Error(`All paths failed. Last error: ${error?.message || 'Unknown error'}`);
        }
        
        websiteContent = await response.json();
        console.log('Content loaded and parsed successfully');
        console.log('Available sections:', Object.keys(websiteContent));
        return true;
    } catch (error) {
        console.error('Failed to load content from JSON file:', error);
        console.log('Using embedded fallback content...');
        
        // Use embedded content as fallback
        websiteContent = EMBEDDED_CONTENT;
        console.log('Embedded content loaded successfully');
        console.log('Available sections:', Object.keys(websiteContent));
        return false; // Still return false to indicate JSON loading failed
    }
}

// Enhanced translation system
class TranslationManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
        this.translations = {};
        this.observers = [];
    }

    // Initialize translation mappings from loaded content
    initializeTranslations() {
        if (!websiteContent) {
            console.error('Content not loaded, cannot initialize translations');
            return false;
        }

        try {
            this.translations = {
                en: this.buildTranslationMap('en'),
                tr: this.buildTranslationMap('tr')
            };
            console.log('Translations initialized successfully');
            return true;
        } catch (error) {
            console.error('Failed to initialize translations:', error);
            return false;
        }
    }

    // Build translation map for a specific language
    buildTranslationMap(lang) {
        const translations = {};
        
        // Navigation
        if (websiteContent.navigation?.[lang]) {
            Object.keys(websiteContent.navigation[lang]).forEach(key => {
                translations[`nav-${key}`] = websiteContent.navigation[lang][key];
            });
        }

        // Hero section
        if (websiteContent.hero?.[lang]) {
            Object.keys(websiteContent.hero[lang]).forEach(key => {
                translations[`hero-${key}`] = websiteContent.hero[lang][key];
            });
        }

        // About section
        if (websiteContent.about?.[lang]) {
            Object.keys(websiteContent.about[lang]).forEach(key => {
                translations[`about-${key}`] = websiteContent.about[lang][key];
            });
        }

        // Experience section
        if (websiteContent.experience?.[lang]) {
            translations['experience-title'] = websiteContent.experience[lang].title;
            translations['experience-subtitle'] = websiteContent.experience[lang].subtitle;
        }

        // Projects section
        if (websiteContent.projects?.[lang]) {
            translations['projects-title'] = websiteContent.projects[lang].title;
        }

        // Blog section
        if (websiteContent.blog?.[lang]) {
            translations['blog-title'] = websiteContent.blog[lang].title;
            translations['blog-subtitle'] = websiteContent.blog[lang].subtitle;
            translations['blog-viewAllButton'] = websiteContent.blog[lang].viewAllButton;
        }

        return translations;
    }

    // Update language with error handling and fallbacks
    updateLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not available`);
            return false;
        }

        this.currentLanguage = lang;
        
        // Update all elements with data-translate attribute
        const translatableElements = document.querySelectorAll('[data-translate]');
        let updatedCount = 0;
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[lang][key];
            
            if (translation) {
                element.textContent = translation;
                updatedCount++;
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
                // Keep original text as fallback
            }
        });

        console.log(`Updated ${updatedCount} translations for language: ${lang}`);

        // Update language buttons
        this.updateLanguageButtons(lang);
        
        // Re-render dynamic content
        this.renderDynamicContent();
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);

        // Notify observers
        this.notifyObservers(lang);
        
        return true;
    }

    // Update language button states
    updateLanguageButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    // Render dynamic content that depends on current language
    renderDynamicContent() {
        this.renderExperienceTimeline();
        this.renderBlogPosts();
        this.renderProjects();
        this.renderSkills();
    }

    // Render experience timeline with current language
    renderExperienceTimeline() {
        const timeline = document.getElementById('experience-timeline');
        if (!timeline || !websiteContent?.experience) return;

        const experiences = websiteContent.experience[this.currentLanguage]?.items || [];
        timeline.innerHTML = '';

        experiences.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-period">${exp.period}</div>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <h4 class="timeline-company">${exp.company}</h4>
                    <p class="timeline-description">${exp.description}</p>
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });
    }

    // Render blog posts with current language
    renderBlogPosts() {
        const blogGrid = document.getElementById('blog-grid');
        if (!blogGrid || !websiteContent?.blog) return;

        const blogData = websiteContent.blog[this.currentLanguage];
        if (!blogData?.posts) return;

        blogGrid.innerHTML = '';

        blogData.posts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            
            blogCard.innerHTML = `
                <div class="blog-content">
                    <span class="blog-date">${post.date}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${post.link}" class="blog-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        ${post.linkText}
                    </a>
                </div>
            `;
            
            blogGrid.appendChild(blogCard);
        });
    }

    // Render projects with current language
    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !websiteContent?.projects) return;

        const projectsData = websiteContent.projects[this.currentLanguage];
        if (!projectsData?.items) return;

        projectsGrid.innerHTML = '';

        projectsData.items.forEach(project => {
            const projectCard = document.createElement('a');
            projectCard.href = project.link;
            projectCard.className = 'project-card';
            projectCard.target = '_blank';
            
            projectCard.innerHTML = `
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }

    // Render skills tags
    renderSkills() {
        const skillsContainer = document.getElementById('about-skills');
        if (!skillsContainer || !websiteContent?.skills) return;

        skillsContainer.innerHTML = '';

        websiteContent.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'about-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }

    // Add observer for language changes
    addObserver(callback) {
        this.observers.push(callback);
    }

    // Notify observers of language change
    notifyObservers(lang) {
        this.observers.forEach(callback => {
            try {
                callback(lang);
            } catch (error) {
                console.error('Error in translation observer:', error);
            }
        });
    }

    // Get translation for a specific key
    getTranslation(key, lang = this.currentLanguage) {
        return this.translations[lang]?.[key] || key;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Check if content is loaded
    isContentLoaded() {
        return websiteContent !== null;
    }
}

// Global translation manager instance
const translationManager = new TranslationManager();

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Initializing enhanced translation system...');
    
    // Load content from JSON
    const contentLoaded = await loadContent();
    
    if (!contentLoaded) {
        console.error('Failed to load content, using fallback');
    }
    
    // Initialize translations
    const translationsInitialized = translationManager.initializeTranslations();
    
    if (!translationsInitialized) {
        console.error('Failed to initialize translations');
        return;
    }
    
    // Set initial language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    translationManager.updateLanguage(savedLanguage);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translationManager.updateLanguage(lang);
        });
    });
    
    console.log('Translation system initialized successfully');
});

// Legacy compatibility - keep these functions for existing code
function updateLanguage(lang) {
    return translationManager.updateLanguage(lang);
}

function renderExperienceTimeline() {
    return translationManager.renderExperienceTimeline();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translationManager, loadContent };
} 