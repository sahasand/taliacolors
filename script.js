// Language translations
const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-services': 'Serviços',
        'nav-about': 'Sobre',
        'nav-gallery': 'Galeria',
        'nav-ai-colors': 'IA Cores',
        'nav-contact': 'Contato',

        // Hero Section
        'hero-title': 'Transforme Seu Cabelo Em<br><span class="highlight">Obra de Arte</span>',
        'hero-subtitle': 'Onde criatividade encontra expertise. Serviços premium de coloração capilar que dão vida à sua visão com resultados vibrantes e saudáveis.',
        'hero-cta': 'Agende Sua Transformação',

        // Services Section
        'services-title': 'Nossos Serviços Exclusivos',
        'services-subtitle': 'Arte encontra técnica em cada transformação de cor',
        'service-correction-title': 'Correção de Cor',
        'service-correction-desc': 'Correção especializada para corrigir colorações anteriores e alcançar o visual desejado com precisão.',
        'service-balayage-title': 'Balayage & Luzes',
        'service-balayage-desc': 'Técnicas de iluminação pintadas à mão para dimensão natural, beijada pelo sol e fluidez perfeita de cor.',
        'service-fantasy-title': 'Cores Fantasia',
        'service-fantasy-desc': 'Cores vibrantes e ousadas que expressam sua personalidade única com pigmentos profissionais.',
        'service-consultation-title': 'Consultoria de Cor',
        'service-consultation-desc': 'Análise personalizada de cor para encontrar os tons perfeitos que complementam seu tom de pele e estilo de vida.',
        'feature-mapping': 'Mapeamento de Cor',
        'feature-ph': 'Balanceamento pH',
        'feature-repair': 'Reparo de Danos',
        'feature-handpainted': 'Pintado à Mão',
        'feature-dimension': 'Dimensão Natural',
        'feature-maintenance': 'Baixa Manutenção',
        'feature-pigments': 'Pigmentos Vibrantes',
        'feature-custom': 'Misturas Personalizadas',
        'feature-lasting': 'Longa Duração',
        'feature-analysis': 'Análise de Pele',
        'feature-lifestyle': 'Adequação ao Estilo',
        'feature-plan': 'Plano de Manutenção',
        'before-after': 'Galeria Antes/Depois',

        // About Section
        'about-title': 'Conheça a Talia',
        'about-subtitle': 'Artista Apaixonada por Coloração',
        'about-description': 'Com mais de 8 anos de experiência em técnicas avançadas de coloração capilar, Talia traz arte e precisão para cada transformação. Sua jornada começou com uma profunda fascinação pela teoria das cores e evoluiu para o domínio de técnicas de ponta.',
        'philosophy-title': 'Minha Filosofia de Cor',
        'philosophy-text': '"Cada cliente é uma tela, e cada cor conta uma história. Acredito em criar cabelos lindos e saudáveis que reflitam sua personalidade única, mantendo a integridade do seu cabelo natural."',
        'expertise-title': 'Técnicas Especializadas',
        'technique-1': 'Balayage & Foilayage Avançado',
        'technique-2': 'Formulação Corretiva de Cor',
        'technique-3': 'Aplicação de Cores Fantasia',
        'technique-4': 'Fusão e Mistura de Cores',
        'technique-5': 'Reconstrução Olaplex',
        'certifications-title': 'Certificações & Treinamentos',
        'certifications-text': 'Certificação Colorista Avançada • Certificada Olaplex • Especialista Redken Color • Educação Continuada em Técnicas Modernas',
        'professional-photo': 'Foto Profissional',

        // Gallery Section
        'gallery-title': 'Galeria de Transformações',
        'gallery-subtitle': 'Testemunhe a arte em cada transformação de cor',
        'filter-all': 'Todas',
        'filter-natural': 'Natural',
        'filter-bold': 'Ousadas',
        'filter-pastel': 'Pastel',
        'filter-correction': 'Correção',
        'gallery-natural': 'Balayage Natural',
        'gallery-bold': 'Cor Fantasia Ousada',
        'gallery-pastel': 'Sonho Pastel',
        'gallery-correction': 'Correção de Cor',
        'gallery-highlights': 'Luzes & Reflexos',
        'gallery-ombre': 'Ombré Vibrante',

        // Testimonials
        'testimonials-title': 'Amor dos Clientes',
        'testimonial-1': '"A Talia é uma verdadeira artista! Ela transformou meu cabelo danificado no balayage mais lindo. A cor é exatamente o que eu imaginei, e meu cabelo nunca esteve tão saudável."',
        'testimonial-1-author': '- Sarah M.',
        'testimonial-2': '"Sou cliente da Talia há mais de dois anos, e ela nunca deixa de me surpreender. Sua atenção aos detalhes e expertise em cores é incomparável. Super recomendo!"',
        'testimonial-2-author': '- Jessica L.',
        'testimonial-3': '"Desde a consulta até o resultado final, a Talia me fez sentir confortável e confiante. Minha cor fantasia ficou incrível e durou lindamente!"',
        'testimonial-3-author': '- Maria R.',

        // AI Color Picker
        'ai-picker-title': 'IA Consultora de Cores',
        'ai-picker-subtitle': 'Descubra sua cor perfeita com nossa inteligência artificial especializada',
        'ai-step1-title': 'Análise de Tom de Pele',
        'ai-step1-desc': 'Faça upload de uma selfie para analisarmos seu tom de pele',
        'ai-step2-title': 'Questionário de Estilo de Vida',
        'ai-step2-desc': 'Conte-nos sobre suas preferências e rotina',
        'ai-step3-title': 'Suas Recomendações Personalizadas',
        'ai-step3-desc': 'Baseado na análise da sua foto e preferências',
        'upload-title': 'Clique para fazer upload',
        'upload-desc': 'ou arraste sua foto aqui',
        'analyze-btn': 'Analisar Foto',
        'q1-title': 'Quanto tempo você dedica aos cuidados capilares?',
        'q1-low': 'Mínimo (5-10 min)',
        'q1-medium': 'Moderado (15-30 min)',
        'q1-high': 'Dedicado (30+ min)',
        'q2-title': 'Qual seu objetivo principal?',
        'q2-natural': 'Look Natural',
        'q2-dramatic': 'Mudança Dramática',
        'q2-trendy': 'Seguir Tendências',
        'q3-title': 'Com que frequência você vem ao salão?',
        'q3-rare': 'Raramente (6+ meses)',
        'q3-occasional': 'Ocasional (3-6 meses)',
        'q3-regular': 'Regular (1-3 meses)',
        'get-rec-btn': 'Obter Recomendações IA',
        'skin-analysis': 'Análise do Tom de Pele',
        'recommended-colors': 'Cores Recomendadas para Você',
        'why-these-colors': 'Por que essas cores funcionam para você?',
        'try-again-btn': 'Tentar Novamente',
        'book-consult-btn': 'Agendar Consulta',

        // Price Calculator
        'price-calc-title': 'Calculadora de Preços',
        'price-calc-subtitle': 'Obtenha uma estimativa para sua transformação de cor',
        'calc-service': 'Tipo de Serviço',
        'calc-select': 'Selecione um serviço',
        'calc-consultation': 'Consultoria de Cor',
        'calc-single': 'Coloração Simples',
        'calc-highlights': 'Luzes/Reflexos',
        'calc-balayage': 'Balayage',
        'calc-correction': 'Correção de Cor',
        'calc-fantasy': 'Cor Fantasia',
        'calc-length': 'Comprimento do Cabelo',
        'calc-select-length': 'Selecione o comprimento',
        'calc-short': 'Curto (Acima dos ombros)',
        'calc-medium': 'Médio (Ombros até meio das costas)',
        'calc-long': 'Longo (Abaixo do meio das costas)',
        'calc-condition': 'Condição Atual do Cabelo',
        'calc-select-condition': 'Selecione a condição',
        'calc-virgin': 'Virgem/Natural',
        'calc-colored': 'Previamente Colorido',
        'calc-damaged': 'Danificado/Super-processado',
        'calc-estimated': 'Preço Estimado:',
        'calc-note': '*O preço final pode variar baseado na consulta e requisitos específicos',

        // Booking Section
        'booking-title': 'Agende Sua Transformação',
        'booking-subtitle': 'Pronta para transformar seu cabelo? Vamos criar magia juntas!',
        'form-name': 'Nome Completo *',
        'form-email': 'Endereço de Email *',
        'form-phone': 'Número de Telefone *',
        'form-service': 'Serviço Preferido',
        'form-select': 'Selecione um serviço',
        'form-consultation': 'Consultoria de Cor',
        'form-balayage': 'Balayage',
        'form-highlights': 'Luzes',
        'form-fantasy': 'Cor Fantasia',
        'form-correction': 'Correção de Cor',
        'form-other': 'Outro',
        'form-message': 'Conte-me sobre seus objetivos capilares *',
        'form-placeholder': 'Descreva seu cabelo atual, visual desejado e quaisquer preocupações específicas...',
        'form-virtual': 'Tenho interesse em uma consulta virtual primeiro',
        'form-submit': 'Enviar Mensagem',

        // Contact Info
        'info-hours': 'Horário do Estúdio',
        'hours-mon-tue': 'Segunda - Terça',
        'hours-closed': 'Fechado',
        'hours-wed-fri': 'Quarta - Sexta',
        'hours-sat': 'Sábado',
        'hours-sun': 'Domingo',
        'info-location': 'Localização',
        'info-address': 'Estúdio Premium de Cabelo<br>Rua da Beleza, 123<br>Distrito Criativo<br>Cidade, Estado 12345',
        'info-map': 'Ver no Mapa',
        'info-connect': 'Conecte-se Conosco',
        'info-instagram': 'Feed do Instagram',

        // Footer
        'footer-tagline': 'Transformando cabelos com arte e paixão',
        'footer-links': 'Links Rápidos',
        'footer-contact': 'Informações de Contato',
        'footer-address': 'Rua da Beleza, 123<br>Distrito Criativo<br>Cidade, Estado 12345',
        'footer-phone-email': 'Telefone: (11) 9 1234-5678<br>Email: ola@taliacolors.com',
        'footer-copyright': '© 2024 Talia Colors. Todos os direitos reservados.',
        'footer-crafted': 'Website criado com ❤️ para arte capilar',

        // Lightbox
        'lightbox-title': 'Imagem da Galeria'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-gallery': 'Gallery',
        'nav-ai-colors': 'AI Colors',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-title': 'Transform Your Hair Into<br><span class="highlight">Artistic Masterpiece</span>',
        'hero-subtitle': 'Where creativity meets expertise. Premium hair coloring services that bring your vision to life with vibrant, healthy results.',
        'hero-cta': 'Book Your Transformation',

        // Services Section
        'services-title': 'Our Signature Services',
        'services-subtitle': 'Artistry meets technique in every color transformation',
        'service-correction-title': 'Color Correction',
        'service-correction-desc': 'Expert color correction to fix previous coloring mishaps and achieve your desired look with precision.',
        'service-balayage-title': 'Balayage & Highlights',
        'service-balayage-desc': 'Hand-painted highlighting techniques for natural, sun-kissed dimension and seamless color flow.',
        'service-fantasy-title': 'Fantasy Colors',
        'service-fantasy-desc': 'Bold, vibrant colors that express your unique personality with professional-grade pigments.',
        'service-consultation-title': 'Color Consultation',
        'service-consultation-desc': 'Personalized color analysis to find the perfect shades that complement your skin tone and lifestyle.',
        'feature-mapping': 'Color Mapping',
        'feature-ph': 'pH Balancing',
        'feature-repair': 'Damage Repair',
        'feature-handpainted': 'Hand-Painted',
        'feature-dimension': 'Natural Dimension',
        'feature-maintenance': 'Low Maintenance',
        'feature-pigments': 'Vibrant Pigments',
        'feature-custom': 'Custom Blends',
        'feature-lasting': 'Long-Lasting',
        'feature-analysis': 'Skin Analysis',
        'feature-lifestyle': 'Lifestyle Match',
        'feature-plan': 'Maintenance Plan',
        'before-after': 'Before/After Gallery',

        // About Section
        'about-title': 'Meet Talia',
        'about-subtitle': 'Passionate Hair Color Artist',
        'about-description': 'With over 8 years of experience in advanced hair coloring techniques, Talia brings artistry and precision to every transformation. Her journey began with a deep fascination for color theory and has evolved into a mastery of cutting-edge techniques.',
        'philosophy-title': 'My Color Philosophy',
        'philosophy-text': '"Every client is a canvas, and every color tells a story. I believe in creating beautiful, healthy hair that reflects your unique personality while maintaining the integrity of your natural hair."',
        'expertise-title': 'Specialized Techniques',
        'technique-1': 'Advanced Balayage & Foilayage',
        'technique-2': 'Corrective Color Formulation',
        'technique-3': 'Fantasy Color Application',
        'technique-4': 'Color Melting & Blending',
        'technique-5': 'Olaplex Bond Building',
        'certifications-title': 'Certifications & Training',
        'certifications-text': 'Advanced Colorist Certification • Olaplex Certified • Redken Color Specialist • Continuous Education in Latest Techniques',
        'professional-photo': 'Professional Photo',

        // Gallery Section
        'gallery-title': 'Hair Transformation Gallery',
        'gallery-subtitle': 'Witness the artistry in every color transformation',
        'filter-all': 'All',
        'filter-natural': 'Natural',
        'filter-bold': 'Bold',
        'filter-pastel': 'Pastel',
        'filter-correction': 'Correction',
        'gallery-natural': 'Natural Balayage',
        'gallery-bold': 'Bold Fantasy Color',
        'gallery-pastel': 'Pastel Dream',
        'gallery-correction': 'Color Correction',
        'gallery-highlights': 'Highlights & Lowlights',
        'gallery-ombre': 'Vibrant Ombré',

        // Testimonials
        'testimonials-title': 'Client Love',
        'testimonial-1': '"Talia is a true artist! She transformed my damaged hair into the most beautiful balayage. The color is exactly what I envisioned, and my hair has never been healthier."',
        'testimonial-1-author': '- Sarah M.',
        'testimonial-2': '"I\'ve been going to Talia for over two years now, and she never fails to amaze me. Her attention to detail and color expertise is unmatched. Highly recommend!"',
        'testimonial-2-author': '- Jessica L.',
        'testimonial-3': '"From consultation to final result, Talia made me feel comfortable and confident. My fantasy color looks amazing and has lasted beautifully!"',
        'testimonial-3-author': '- Maria R.',

        // AI Color Picker
        'ai-picker-title': 'AI Hair Color Consultant',
        'ai-picker-subtitle': 'Discover your perfect color with our specialized artificial intelligence',
        'ai-step1-title': 'Skin Tone Analysis',
        'ai-step1-desc': 'Upload a selfie so we can analyze your skin tone',
        'ai-step2-title': 'Lifestyle Questionnaire',
        'ai-step2-desc': 'Tell us about your preferences and routine',
        'ai-step3-title': 'Your Personalized Recommendations',
        'ai-step3-desc': 'Based on your photo analysis and preferences',
        'upload-title': 'Click to upload',
        'upload-desc': 'or drag your photo here',
        'analyze-btn': 'Analyze Photo',
        'q1-title': 'How much time do you dedicate to hair care?',
        'q1-low': 'Minimal (5-10 min)',
        'q1-medium': 'Moderate (15-30 min)',
        'q1-high': 'Dedicated (30+ min)',
        'q2-title': 'What is your main goal?',
        'q2-natural': 'Natural Look',
        'q2-dramatic': 'Dramatic Change',
        'q2-trendy': 'Follow Trends',
        'q3-title': 'How often do you visit the salon?',
        'q3-rare': 'Rarely (6+ months)',
        'q3-occasional': 'Occasional (3-6 months)',
        'q3-regular': 'Regular (1-3 months)',
        'get-rec-btn': 'Get AI Recommendations',
        'skin-analysis': 'Skin Tone Analysis',
        'recommended-colors': 'Recommended Colors for You',
        'why-these-colors': 'Why do these colors work for you?',
        'try-again-btn': 'Try Again',
        'book-consult-btn': 'Book Consultation',

        // Price Calculator
        'price-calc-title': 'Service Price Calculator',
        'price-calc-subtitle': 'Get an estimate for your color transformation',
        'calc-service': 'Service Type',
        'calc-select': 'Select a service',
        'calc-consultation': 'Color Consultation',
        'calc-single': 'Single Process Color',
        'calc-highlights': 'Highlights/Lowlights',
        'calc-balayage': 'Balayage',
        'calc-correction': 'Color Correction',
        'calc-fantasy': 'Fantasy Color',
        'calc-length': 'Hair Length',
        'calc-select-length': 'Select length',
        'calc-short': 'Short (Above shoulders)',
        'calc-medium': 'Medium (Shoulder to mid-back)',
        'calc-long': 'Long (Below mid-back)',
        'calc-condition': 'Current Hair Condition',
        'calc-select-condition': 'Select condition',
        'calc-virgin': 'Virgin/Natural',
        'calc-colored': 'Previously Colored',
        'calc-damaged': 'Damaged/Over-processed',
        'calc-estimated': 'Estimated Price:',
        'calc-note': '*Final price may vary based on consultation and specific requirements',

        // Booking Section
        'booking-title': 'Book Your Transformation',
        'booking-subtitle': 'Ready to transform your hair? Let\'s create magic together!',
        'form-name': 'Full Name *',
        'form-email': 'Email Address *',
        'form-phone': 'Phone Number *',
        'form-service': 'Preferred Service',
        'form-select': 'Select a service',
        'form-consultation': 'Color Consultation',
        'form-balayage': 'Balayage',
        'form-highlights': 'Highlights',
        'form-fantasy': 'Fantasy Color',
        'form-correction': 'Color Correction',
        'form-other': 'Other',
        'form-message': 'Tell me about your hair goals *',
        'form-placeholder': 'Describe your current hair, desired look, and any specific concerns...',
        'form-virtual': 'I\'m interested in a virtual consultation first',
        'form-submit': 'Send Message',

        // Contact Info
        'info-hours': 'Studio Hours',
        'hours-mon-tue': 'Monday - Tuesday',
        'hours-closed': 'Closed',
        'hours-wed-fri': 'Wednesday - Friday',
        'hours-sat': 'Saturday',
        'hours-sun': 'Sunday',
        'info-location': 'Location',
        'info-address': 'Premium Hair Studio<br>123 Beauty Lane<br>Creative District<br>City, State 12345',
        'info-map': 'View on Map',
        'info-connect': 'Connect With Us',
        'info-instagram': 'Instagram Feed',

        // Footer
        'footer-tagline': 'Transforming hair with artistry and passion',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact Info',
        'footer-address': '123 Beauty Lane<br>Creative District<br>City, State 12345',
        'footer-phone-email': 'Phone: (555) 123-4567<br>Email: hello@taliacolors.com',
        'footer-copyright': '© 2024 Talia Colors. All rights reserved.',
        'footer-crafted': 'Website crafted with ❤️ for hair artistry',

        // Lightbox
        'lightbox-title': 'Gallery Image'
    }
};

// Current language
let currentLanguage = 'pt';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupLanguageSelector();
    setupSmoothScrolling();
    setupGallery();
    setupTestimonialsCarousel();
    setupColorPicker();
    setupPriceCalculator();
    setupContactForm();
    setupScrollAnimations();
    setupParallaxEffects();
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(248, 250, 252, 0.98)';
        } else {
            navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        }
    });
}

// Language Selector Setup
function setupLanguageSelector() {
    const langToggle = document.querySelector('.lang-toggle');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');

    // Toggle dropdown
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.language-selector').classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        document.querySelector('.language-selector').classList.remove('active');
    });

    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Update current language display
            currentLangSpan.textContent = selectedLang.toUpperCase();
            
            // Change language
            changeLanguage(selectedLang);
            
            // Close dropdown
            document.querySelector('.language-selector').classList.remove('active');
        });
    });
}

// Change Language Function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update price calculator currency
    updatePriceCalculatorCurrency(lang);
}

// Update Price Calculator Currency
function updatePriceCalculatorCurrency(lang) {
    const priceAmount = document.getElementById('calculated-price');
    if (priceAmount) {
        const currentAmount = priceAmount.textContent.replace(/[^\d]/g, '');
        const currency = lang === 'pt' ? 'R$' : '$';
        priceAmount.textContent = `${currency} ${currentAmount}`;
    }
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery Setup
function setupGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery item click handlers
    galleryItems.forEach(item => {
        const galleryBtn = item.querySelector('.gallery-btn');
        if (galleryBtn) {
            galleryBtn.addEventListener('click', function() {
                const title = item.querySelector('.image-placeholder span').textContent;
                openLightbox(title);
            });
        }
    });
}

// Testimonials Carousel Setup
function setupTestimonialsCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all cards
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current card
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance carousel with cleanup
    const carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Store interval for potential cleanup
    window.testimonialCarouselInterval = carouselInterval;
}

// AI Color Picker Setup
function setupColorPicker() {
    // Initialize AI Color Picker
    setupAIColorPicker();
}

function setupAIColorPicker() {
    let currentStep = 1;
    let uploadedPhoto = null;
    let skinToneAnalysis = null;
    let userPreferences = {};

    // Cache DOM elements for better performance
    const domCache = {
        photoUpload: document.getElementById('photo-upload'),
        photoInput: document.getElementById('photo-input'),
        photoPreview: document.getElementById('photo-preview'),
        uploadedPhotoImg: document.getElementById('uploaded-photo'),
        removePhotoBtn: document.getElementById('remove-photo'),
        analyzeBtn: document.getElementById('analyze-photo'),
        validationError: document.getElementById('validation-error'),
        errorMessage: document.getElementById('error-message'),
        retryBtn: document.getElementById('retry-upload'),
        getRecommendationsBtn: document.getElementById('get-recommendations'),
        restartBtn: document.getElementById('restart-ai'),
        bookConsultationBtn: document.getElementById('book-consultation'),
        progressFill: document.getElementById('progress-fill')
    };

    // Destructure for easier access
    const { 
        photoUpload, photoInput, photoPreview, uploadedPhotoImg, 
        removePhotoBtn, analyzeBtn, validationError, errorMessage,
        retryBtn, getRecommendationsBtn, restartBtn, bookConsultationBtn,
        progressFill
    } = domCache;

    // Upload zone click
    photoUpload.addEventListener('click', () => {
        photoInput.click();
    });

    // Drag and drop with touch improvements
    photoUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        photoUpload.style.borderColor = '#553c9a';
        photoUpload.classList.add('drag-over');
    });

    photoUpload.addEventListener('dragleave', (e) => {
        // Only trigger if leaving the actual upload zone, not child elements
        if (!photoUpload.contains(e.relatedTarget)) {
            photoUpload.style.borderColor = '#6b46c1';
            photoUpload.classList.remove('drag-over');
        }
    });

    photoUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        photoUpload.style.borderColor = '#6b46c1';
        photoUpload.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handlePhotoUpload(files[0]);
        }
    });

    // Touch feedback for mobile
    photoUpload.addEventListener('touchstart', (e) => {
        photoUpload.style.transform = 'scale(0.98)';
    });

    photoUpload.addEventListener('touchend', (e) => {
        photoUpload.style.transform = 'scale(1)';
    });

    // File input change
    photoInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handlePhotoUpload(e.target.files[0]);
        }
    });

    // Remove photo
    removePhotoBtn.addEventListener('click', () => {
        uploadedPhoto = null;
        photoPreview.style.display = 'none';
        photoUpload.style.display = 'block';
        analyzeBtn.disabled = true;
        photoInput.value = '';
    });

    // Handle photo upload with error handling
    function handlePhotoUpload(file) {
        try {
            // Basic validation
            if (!validateImageFile(file)) {
                return;
            }

            const reader = new FileReader();
            
            // Error handling for FileReader
            reader.onerror = () => {
                const message = currentLanguage === 'pt' 
                    ? '❌ Erro ao ler o arquivo. Tente novamente.'
                    : '❌ Error reading file. Please try again.';
                showBasicError(message);
            };
            
            reader.onload = (e) => {
                try {
                    uploadedPhoto = e.target.result;
                    uploadedPhotoImg.src = e.target.result;
                    photoUpload.style.display = 'none';
                    photoPreview.style.display = 'block';
                    
                    // Simulate AI pre-validation with delay
                    setTimeout(() => {
                        try {
                            const validationResult = simulateImageValidation(file);
                            if (validationResult.error) {
                                showValidationError(validationResult.error);
                                return;
                            }
                            analyzeBtn.disabled = false;
                            // Auto-scroll to analyze button when photo is successfully uploaded
                            setTimeout(() => {
                                scrollToAISection('analyze-photo', 180);
                            }, 300);
                        } catch (error) {
                            console.error('Validation error:', error);
                            const message = currentLanguage === 'pt' 
                                ? '❌ Erro na validação da imagem.'
                                : '❌ Image validation error.';
                            showBasicError(message);
                        }
                    }, 800);
                } catch (error) {
                    console.error('Photo processing error:', error);
                    const message = currentLanguage === 'pt' 
                        ? '❌ Erro ao processar a imagem.'
                        : '❌ Error processing image.';
                    showBasicError(message);
                }
            };
            
            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Upload error:', error);
            const message = currentLanguage === 'pt' 
                ? '❌ Erro no upload. Tente novamente.'
                : '❌ Upload error. Please try again.';
            showBasicError(message);
        }
    }

    // Basic file validation
    function validateImageFile(file) {
        // Check file type
        if (!file.type.startsWith('image/')) {
            const message = currentLanguage === 'pt' 
                ? '📄 Por favor, envie um arquivo de imagem válido (JPG, PNG, etc.).'
                : '📄 Please upload a valid image file (JPG, PNG, etc.).';
            showBasicError(message);
            return false;
        }

        // Check file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            const message = currentLanguage === 'pt'
                ? '📏 Imagem muito grande. Por favor, envie uma foto menor (máximo 5MB).'
                : '📏 Image too large. Please upload a smaller photo (max 5MB).';
            showBasicError(message);
            return false;
        }

        return true;
    }

    // Show basic validation errors
    function showBasicError(message) {
        errorMessage.textContent = message;
        validationError.style.display = 'block';
        photoUpload.style.display = 'none';
        
        // Auto-scroll to error message
        setTimeout(() => {
            scrollToAISection('validation-error', 150);
        }, 200);
    }

    // Simulated AI image validation with weighted errors
    function simulateImageValidation(file) {
        const random = Math.random();
        
        // 4% chance of "detecting" issues (reduced from 8%)
        if (random < 0.04) {
            // Weighted error distribution - more realistic errors more common
            const weightedErrors = [
                { type: 'poor_quality', weight: 50 },    // 50% of errors - most believable
                { type: 'no_face', weight: 30 },         // 30% of errors - common issue
                { type: 'multiple_faces', weight: 15 },  // 15% of errors - plausible
                { type: 'non_human', weight: 5 }         // 5% of errors - rare but funny
            ];
            
            // Calculate total weight
            const totalWeight = weightedErrors.reduce((sum, error) => sum + error.weight, 0);
            const randomWeight = Math.random() * totalWeight;
            
            // Select error based on weights
            let cumulativeWeight = 0;
            for (const error of weightedErrors) {
                cumulativeWeight += error.weight;
                if (randomWeight <= cumulativeWeight) {
                    return { error: error.type };
                }
            }
        }
        
        return { success: true };
    }

    // Show validation error with humor
    function showValidationError(errorType) {
        const errorMessages = {
            pt: {
                no_face: '🤔 Não conseguimos detectar um rosto claro na imagem. Pode tentar com uma selfie bem iluminada?',
                multiple_faces: '👥 Detectamos múltiplos rostos! Para uma análise precisa, envie uma foto só sua.',
                poor_quality: '📸 A qualidade da imagem está um pouco baixa. Que tal tentar com melhor iluminação?',
                non_human: '🐕 Essa parece ser uma foto adorável, mas precisamos de uma selfie sua para análise de tom de pele!'
            },
            en: {
                no_face: '🤔 We couldn\'t detect a clear face in the image. Could you try with a well-lit selfie?',
                multiple_faces: '👥 We detected multiple faces! For accurate analysis, please upload just a selfie.',
                poor_quality: '📸 The image quality is a bit low. How about trying with better lighting?',
                non_human: '🐕 That looks like an adorable photo, but we need a selfie of you for skin tone analysis!'
            }
        };

        const message = errorMessages[currentLanguage][errorType];
        
        // Hide photo preview and show error
        photoPreview.style.display = 'none';
        
        // Show elegant error display
        errorMessage.textContent = message;
        validationError.style.display = 'block';
        
        // Keep analyze button disabled
        analyzeBtn.disabled = true;
        
        // Auto-scroll to error message
        setTimeout(() => {
            scrollToAISection('validation-error', 150);
        }, 300);
    }

    // Reset photo upload state
    function resetPhotoUpload() {
        uploadedPhoto = null;
        photoPreview.style.display = 'none';
        validationError.style.display = 'none';
        photoUpload.style.display = 'block';
        analyzeBtn.disabled = true;
        photoInput.value = '';
    }

    // Retry upload functionality
    retryBtn.addEventListener('click', () => {
        resetPhotoUpload();
        // Auto-scroll back to upload area
        setTimeout(() => {
            scrollToAISection('step-photo', 100);
        }, 200);
    });

    // Photo analysis
    analyzeBtn.addEventListener('click', () => {
        const analyzingText = currentLanguage === 'pt' ? '<i class="fas fa-spinner fa-spin"></i> Analisando...' : '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        analyzeBtn.innerHTML = analyzingText;
        analyzeBtn.disabled = true;

        // Simulate AI analysis
        setTimeout(() => {
            skinToneAnalysis = performSkinToneAnalysis(uploadedPhoto);
            goToStep(2);
            analyzeBtn.innerHTML = translations[currentLanguage]['analyze-btn'];
            analyzeBtn.disabled = false;
        }, 2000);
    });

    // Questionnaire functionality
    const questionInputs = document.querySelectorAll('.questionnaire input[type="radio"]');

    questionInputs.forEach(input => {
        input.addEventListener('change', () => {
            checkQuestionnaireComplete();
        });
    });

    function checkQuestionnaireComplete() {
        const maintenance = document.querySelector('input[name="maintenance"]:checked');
        const goal = document.querySelector('input[name="goal"]:checked');
        const frequency = document.querySelector('input[name="frequency"]:checked');

        if (maintenance && goal && frequency) {
            userPreferences = {
                maintenance: maintenance.value,
                goal: goal.value,
                frequency: frequency.value
            };
            getRecommendationsBtn.disabled = false;
            // Auto-scroll to recommendations button when questionnaire is complete
            setTimeout(() => {
                scrollToAISection('get-recommendations', 180);
            }, 300);
        }
    }

    // Get recommendations
    getRecommendationsBtn.addEventListener('click', () => {
        const processingText = currentLanguage === 'pt' ? '<i class="fas fa-brain"></i> IA Processando...' : '<i class="fas fa-brain"></i> AI Processing...';
        getRecommendationsBtn.innerHTML = processingText;
        getRecommendationsBtn.disabled = true;

        // Simulate AI processing
        setTimeout(() => {
            const recommendations = generateAIRecommendations(skinToneAnalysis, userPreferences);
            displayResults(recommendations);
            goToStep(3);
            getRecommendationsBtn.innerHTML = translations[currentLanguage]['get-rec-btn'];
        }, 3000);
    });

    // Restart functionality

    restartBtn.addEventListener('click', () => {
        resetAIPicker();
        // Auto-scroll back to the beginning of AI section
        setTimeout(() => {
            scrollToAISection('ai-color-picker-heading', 80);
        }, 300);
    });

    bookConsultationBtn.addEventListener('click', () => {
        // Scroll to booking section
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });

    // Smart scroll function with offset
    function scrollToAISection(targetElementId = null, offset = 100) {
        let targetElement;
        
        if (targetElementId) {
            targetElement = document.getElementById(targetElementId);
        } else {
            // Default to AI section header
            targetElement = document.getElementById('ai-color-picker-heading');
        }
        
        if (targetElement) {
            const elementPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: Math.max(0, elementPosition),
                behavior: 'smooth'
            });
        }
    }

    // Helper functions
    function goToStep(step) {
        document.querySelectorAll('.ai-step').forEach(s => s.classList.remove('active'));
        const stepElement = document.getElementById(`step-${step === 1 ? 'photo' : step === 2 ? 'questionnaire' : 'results'}`);
        stepElement.classList.add('active');
        
        document.querySelectorAll('.progress-step').forEach(s => s.classList.remove('active'));
        document.querySelector(`[data-step="${step}"]`).classList.add('active');
        
        progressFill.style.width = `${(step / 3) * 100}%`;
        
        currentStep = step;
        
        // Auto-scroll to the new step with a slight delay for smooth transition
        setTimeout(() => {
            scrollToAISection(stepElement.id, 120);
        }, 100);
    }

    function performSkinToneAnalysis(photo) {
        // Simulate AI skin tone analysis
        const skinTones = ['warm', 'cool', 'neutral'];
        const selectedTone = skinTones[Math.floor(Math.random() * skinTones.length)];
        
        return {
            tone: selectedTone,
            undertone: selectedTone === 'warm' ? 'golden' : selectedTone === 'cool' ? 'pink' : 'olive',
            confidence: Math.floor(Math.random() * 20) + 80 // 80-100%
        };
    }

    function generateAIRecommendations(skinAnalysis, preferences) {
        // AI recommendation algorithm
        const colorDatabase = {
            warm: [
                { 
                    name: { pt: 'Castanho Chocolate', en: 'Chocolate Brown' }, 
                    gradient: 'linear-gradient(45deg, #8B4513, #D2691E)', 
                    maintenance: { pt: 'Baixa', en: 'Low' }, 
                    time: { pt: '2-3 horas', en: '2-3 hours' } 
                },
                { 
                    name: { pt: 'Loiro Dourado', en: 'Golden Blonde' }, 
                    gradient: 'linear-gradient(45deg, #DAA520, #F4A460)', 
                    maintenance: { pt: 'Média', en: 'Medium' }, 
                    time: { pt: '3-4 horas', en: '3-4 hours' } 
                },
                { 
                    name: { pt: 'Caramelo', en: 'Caramel' }, 
                    gradient: 'linear-gradient(45deg, #8B4513, #CD853F)', 
                    maintenance: { pt: 'Média', en: 'Medium' }, 
                    time: { pt: '3-4 horas', en: '3-4 hours' } 
                },
                { 
                    name: { pt: 'Mel Trigo', en: 'Honey Wheat' }, 
                    gradient: 'linear-gradient(45deg, #A0522D, #DEB887)', 
                    maintenance: { pt: 'Média', en: 'Medium' }, 
                    time: { pt: '3-5 horas', en: '3-5 hours' } 
                }
            ],
            cool: [
                { 
                    name: { pt: 'Expresso', en: 'Espresso' }, 
                    gradient: 'linear-gradient(45deg, #2F1B14, #654321)', 
                    maintenance: { pt: 'Baixa', en: 'Low' }, 
                    time: { pt: '2-3 horas', en: '2-3 hours' } 
                },
                { 
                    name: { pt: 'Platinado', en: 'Platinum' }, 
                    gradient: 'linear-gradient(45deg, #F5DEB3, #FFFACD)', 
                    maintenance: { pt: 'Alta', en: 'High' }, 
                    time: { pt: '4-6 horas', en: '4-6 hours' } 
                },
                { 
                    name: { pt: 'Cinza Prateado', en: 'Silver Gray' }, 
                    gradient: 'linear-gradient(45deg, #C0C0C0, #E8E8E8)', 
                    maintenance: { pt: 'Alta', en: 'High' }, 
                    time: { pt: '4-5 horas', en: '4-5 hours' } 
                }
            ],
            neutral: [
                { 
                    name: { pt: 'Castanho Natural', en: 'Natural Brown' }, 
                    gradient: 'linear-gradient(45deg, #8B4513, #A0522D)', 
                    maintenance: { pt: 'Baixa', en: 'Low' }, 
                    time: { pt: '2-3 horas', en: '2-3 hours' } 
                },
                { 
                    name: { pt: 'Loiro Acinzentado', en: 'Ashy Blonde' }, 
                    gradient: 'linear-gradient(45deg, #D2B48C, #F5F5DC)', 
                    maintenance: { pt: 'Média', en: 'Medium' }, 
                    time: { pt: '3-4 horas', en: '3-4 hours' } 
                }
            ]
        };

        let recommendedColors = colorDatabase[skinAnalysis.tone] || colorDatabase.neutral;

        // Filter by maintenance preference
        if (preferences.maintenance === 'low') {
            recommendedColors = recommendedColors.filter(color => color.maintenance.pt === 'Baixa');
        } else if (preferences.maintenance === 'medium') {
            recommendedColors = recommendedColors.filter(color => color.maintenance.pt === 'Média' || color.maintenance.pt === 'Baixa');
        }

        // Take top 3 recommendations
        return {
            skinTone: skinAnalysis,
            colors: recommendedColors.slice(0, 3),
            reasoning: generateReasoning(skinAnalysis, preferences)
        };
    }

    function generateReasoning(skinAnalysis, preferences) {
        const reasons = [];
        
        if (currentLanguage === 'pt') {
            if (skinAnalysis.tone === 'warm') {
                reasons.push('Seu tom de pele quente combina perfeitamente com cores douradas e terrosas.');
            } else if (skinAnalysis.tone === 'cool') {
                reasons.push('Seu tom de pele frio é realçado por cores acinzentadas e platinadas.');
            } else {
                reasons.push('Seu tom de pele neutro permite flexibilidade entre cores quentes e frias.');
            }

            if (preferences.maintenance === 'low') {
                reasons.push('Selecionamos cores de baixa manutenção que se adequam ao seu estilo de vida.');
            } else if (preferences.maintenance === 'high') {
                reasons.push('Como você dedica tempo aos cuidados capilares, incluímos opções mais sofisticadas.');
            }

            if (preferences.goal === 'natural') {
                reasons.push('As cores escolhidas proporcionam um visual natural e elegante.');
            } else if (preferences.goal === 'dramatic') {
                reasons.push('Selecionamos cores que criarão uma transformação marcante.');
            }
        } else {
            if (skinAnalysis.tone === 'warm') {
                reasons.push('Your warm skin tone pairs perfectly with golden and earthy colors.');
            } else if (skinAnalysis.tone === 'cool') {
                reasons.push('Your cool skin tone is enhanced by ashy and platinum colors.');
            } else {
                reasons.push('Your neutral skin tone allows flexibility between warm and cool colors.');
            }

            if (preferences.maintenance === 'low') {
                reasons.push('We selected low-maintenance colors that suit your lifestyle.');
            } else if (preferences.maintenance === 'high') {
                reasons.push('Since you dedicate time to hair care, we included more sophisticated options.');
            }

            if (preferences.goal === 'natural') {
                reasons.push('The chosen colors provide a natural and elegant look.');
            } else if (preferences.goal === 'dramatic') {
                reasons.push('We selected colors that will create a striking transformation.');
            }
        }

        return reasons.join(' ');
    }

    function displayResults(recommendations) {
        // Display skin tone analysis
        const skinToneDisplay = document.getElementById('skin-tone-display');
        const skinToneText = currentLanguage === 'pt' 
            ? (recommendations.skinTone.tone === 'warm' ? 'Quente' : recommendations.skinTone.tone === 'cool' ? 'Frio' : 'Neutro')
            : (recommendations.skinTone.tone === 'warm' ? 'Warm' : recommendations.skinTone.tone === 'cool' ? 'Cool' : 'Neutral');
        
        const undertoneText = currentLanguage === 'pt'
            ? (recommendations.skinTone.undertone === 'golden' ? 'Dourado' : recommendations.skinTone.undertone === 'pink' ? 'Rosado' : 'Azeite')
            : (recommendations.skinTone.undertone === 'golden' ? 'Golden' : recommendations.skinTone.undertone === 'pink' ? 'Pink' : 'Olive');
            
        const skinToneLabel = currentLanguage === 'pt' ? 'Tom de Pele:' : 'Skin Tone:';
        const undertoneLabel = currentLanguage === 'pt' ? 'Subtom:' : 'Undertone:';
        const confidenceLabel = currentLanguage === 'pt' ? 'Confiança da IA:' : 'AI Confidence:';
        
        skinToneDisplay.innerHTML = `
            <div class="analysis-card">
                <strong>${skinToneLabel}</strong> ${skinToneText}
                <br>
                <strong>${undertoneLabel}</strong> ${undertoneText}
                <br>
                <strong>${confidenceLabel}</strong> ${recommendations.skinTone.confidence}%
            </div>
        `;

        // Display recommended colors
        const colorsGrid = document.querySelector('.recommended-colors-grid');
        const maintenanceLabel = currentLanguage === 'pt' ? 'Manutenção:' : 'Maintenance:';
        const timeLabel = currentLanguage === 'pt' ? 'Tempo:' : 'Time:';
        
        colorsGrid.innerHTML = recommendations.colors.map(color => `
            <div class="recommended-color">
                <div class="color-swatch" style="background: ${color.gradient}"></div>
                <h5>${color.name[currentLanguage]}</h5>
                <p>${maintenanceLabel} ${color.maintenance[currentLanguage]}</p>
                <p>${timeLabel} ${color.time[currentLanguage]}</p>
            </div>
        `).join('');

        // Display reasoning
        const explanationText = document.querySelector('.explanation-text');
        explanationText.innerHTML = `<p>${recommendations.reasoning}</p>`;
    }

    function resetAIPicker() {
        currentStep = 1;
        uploadedPhoto = null;
        skinToneAnalysis = null;
        userPreferences = {};
        
        // Reset UI
        photoPreview.style.display = 'none';
        photoUpload.style.display = 'block';
        analyzeBtn.disabled = true;
        getRecommendationsBtn.disabled = true;
        photoInput.value = '';
        
        // Clear questionnaire
        questionInputs.forEach(input => input.checked = false);
        
        // Go to step 1
        goToStep(1);
    }
}

// Price Calculator Setup
function setupPriceCalculator() {
    const serviceSelect = document.getElementById('service-type');
    const lengthSelect = document.getElementById('hair-length');
    const conditionSelect = document.getElementById('hair-condition');
    const priceDisplay = document.getElementById('calculated-price');

    function calculatePrice() {
        const service = serviceSelect.value;
        const length = lengthSelect.value;
        const condition = conditionSelect.value;

        if (!service || !length || !condition) {
            priceDisplay.textContent = currentLanguage === 'pt' ? 'R$ 0' : '$ 0';
            return;
        }

        const servicePrice = parseInt(serviceSelect.selectedOptions[0].getAttribute('data-price')) || 0;
        const lengthMultiplier = parseFloat(lengthSelect.selectedOptions[0].getAttribute('data-multiplier')) || 1;
        const conditionAdjustment = parseInt(conditionSelect.selectedOptions[0].getAttribute('data-adjustment')) || 0;

        const totalPrice = Math.round((servicePrice * lengthMultiplier) + conditionAdjustment);
        const currency = currentLanguage === 'pt' ? 'R$' : '$';
        priceDisplay.textContent = `${currency} ${totalPrice}`;
    }

    // Add event listeners
    [serviceSelect, lengthSelect, conditionSelect].forEach(select => {
        select.addEventListener('change', calculatePrice);
    });
}

// Contact Form Setup
function setupContactForm() {
    const form = document.getElementById('booking-form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    // Form validation
    function validateField(field) {
        const value = field.value.trim();
        const errorElement = document.getElementById(field.id + '-error');
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            isValid = false;
            errorMessage = currentLanguage === 'pt' ? 'Este campo é obrigatório.' : 'This field is required.';
        } else if (field.type === 'email' && !isValidEmail(value)) {
            isValid = false;
            errorMessage = currentLanguage === 'pt' ? 'Por favor, insira um email válido.' : 'Please enter a valid email address.';
        } else if (field.type === 'tel' && !isValidPhone(value)) {
            isValid = false;
            errorMessage = currentLanguage === 'pt' ? 'Por favor, insira um telefone válido.' : 'Please enter a valid phone number.';
        }

        if (errorElement) {
            errorElement.textContent = errorMessage;
        }

        field.classList.toggle('error', !isValid);
        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Simulate form submission
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            
            submitBtn.querySelector('span').textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(currentLanguage === 'pt' ? 
                    'Mensagem enviada com sucesso! Entraremos em contato em breve.' : 
                    'Message sent successfully! We\'ll be in touch soon.');
                
                form.reset();
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
}



// Scroll Animations Setup
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
}

// Parallax Effects Setup
function setupParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Hero background parallax
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }

        // Color swatches parallax
        const swatches = document.querySelectorAll('.swatch');
        swatches.forEach((swatch, index) => {
            const speed = 0.2 + (index * 0.1);
            swatch.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize animations on load
window.addEventListener('load', function() {
    // Trigger any load-specific animations
    document.body.classList.add('loaded');
});

// Lightbox functionality
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('#lightbox-title');
    
    // Create image element for lightbox
    lightboxImage.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="width: 100%; height: auto; max-height: 90vh; object-fit: contain;">`;
    lightboxTitle.textContent = img.alt;
    
    // Show lightbox
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    setTimeout(() => {
        lightbox.querySelector('.lightbox-close').focus();
    }, 100);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

// Event listeners for lightbox
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Close button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Click outside image to close
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});

// Handle resize events
window.addEventListener('resize', debounce(function() {
    // Handle any resize-specific functionality
}, 250));