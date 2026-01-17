import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))

// Testimonials data - Global diversity
const testimonials = [
  {
    id: 1,
    name: "Lisa M.",
    location: "Ireland | Living in Dubai",
    rating: 5,
    text: "Working with Susan has been nothing short of life-changing. I came to her feeling disconnected and carrying years of unresolved tension. From the very first session, I felt seen, heard, and held in a way I had never experienced before. Susan's mastery of energy work, combined with her intuitive understanding of exactly what I needed, created profound shifts that I can only describe as miraculous. Her Deep Alignment sessions helped me release patterns I didn't even know I was holding. The integration of Anma, Reiki, and the Nir Levy Method is seamless and extraordinary. I've recommended her to everyone I know - she is truly exceptional. If you're looking for genuine, transformational healing in Dubai, Susan is the only practitioner you need.",
    image: "👩🏻"
  },
  {
    id: 2,
    name: "Catherine R.",
    location: "New York, USA | Dubai",
    rating: 5,
    text: "As someone who's experienced healing modalities across Manhattan's finest wellness centers, I can confidently say Susan's work stands in a class of its own. Her treatment room reflects her practice - refined, intentional, powerful. The combination of hypnotherapy and Ampuku abdominal work released trauma I'd been holding for decades. Susan's elegance and depth create a sanctuary where true transformation happens. This is healing for the discerning client.",
    image: "👩🏼"
  },
  {
    id: 3,
    name: "James L.",
    location: "London, United Kingdom",
    rating: 5,
    text: "As a skeptic and former attorney, I wasn't sure what to expect from energy healing. Susan's professional, grounded approach immediately put me at ease. The results speak for themselves - chronic pain I'd lived with for years has significantly reduced after her Anma sessions, and the hypnotherapy work helped me release decades of accumulated stress. I feel more present and balanced than I have in my entire adult life. Highly recommended for anyone seeking evidence-based yet spiritually intelligent healing.",
    image: "👨🏼"
  },
  {
    id: 4,
    name: "Layla S.",
    location: "Abu Dhabi, UAE",
    rating: 5,
    text: "Susan has a rare gift that transcends technique. Her Reiki sessions are deeply restorative, and I always leave feeling renewed on every level - physically, emotionally, and spiritually. She creates such a sacred, elegant space for healing. The chakra balancing work she does is the most profound I've experienced in the Middle East. I've worked with many practitioners over the years across Dubai and Abu Dhabi, and Susan stands out as truly exceptional. She is the healer other healers go to.",
    image: "👩🏻‍🦱"
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Sydney, Australia | Dubai",
    rating: 5,
    text: "The SKP Method is unlike anything I've experienced across three continents. Susan's integration of somatic work, energy medicine, and the Nir Levy Method helped me reconnect with my body in a way I never thought possible after years of disconnection following a traumatic accident. Her wisdom, professionalism, and genuine care for her clients' wellbeing shine through in every session. The Ampuku work alone was worth the investment, but combined with everything else she offers, it's truly transformational. Worth every dirham.",
    image: "👨🏻"
  },
  {
    id: 6,
    name: "Sophia Martinez",
    location: "Barcelona, Spain | Dubai",
    rating: 5,
    text: "I came to Susan after trying everything - traditional therapy, medication, various alternative treatments across Europe and the UAE. Nothing prepared me for the depth of her work. The way she combines Japanese healing arts with modern consciousness techniques is revolutionary. Her Anma sessions released tension I didn't know I was holding, and the hypnotherapy helped me finally break free from anxiety patterns that had controlled my life. Susan's space is a sanctuary of elegance and healing power. She is a true master of her craft.",
    image: "👩🏽"
  }
]

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Energy Medicine: A Holistic Approach to Healing",
    excerpt: "Energy medicine works with the body's natural electromagnetic fields to promote healing and balance. Discover how this ancient practice combines with modern understanding...",
    date: "January 15, 2026",
    category: "Energy Medicine",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Power of Reiki: Channeling Universal Life Energy",
    excerpt: "Reiki is a gentle yet powerful healing modality that works on physical, emotional, mental, and spiritual levels. Learn about the transformative effects of this Japanese technique...",
    date: "January 10, 2026",
    category: "Reiki",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Hypnotherapy for Lasting Change: Reprogramming Your Subconscious",
    excerpt: "Your subconscious mind holds the key to breaking patterns and creating lasting behavioral change. Explore how clinical hypnotherapy can help you unlock your potential...",
    date: "January 5, 2026",
    category: "Hypnotherapy",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Somatic Healing: Reconnecting with Your Body's Wisdom",
    excerpt: "Your body holds memories, emotions, and wisdom. Somatic alignment practices help you reconnect with this innate intelligence for profound healing...",
    date: "December 28, 2025",
    category: "Somatic Work",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Creating Sacred Space: Preparing for Your Healing Journey",
    excerpt: "The environment in which healing occurs matters. Learn how to create sacred space in your daily life to support your transformational journey...",
    date: "December 20, 2025",
    category: "Wellness",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Integration: Honoring Your Healing Process",
    excerpt: "True transformation requires time and conscious integration. Discover practices to help you embody the shifts from your healing sessions...",
    date: "December 15, 2025",
    category: "Integration",
    readTime: "6 min read"
  }
]

// API Routes
// Booking submission endpoint
app.post('/api/booking', async (c) => {
  try {
    const data = await c.req.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.session) {
      return c.json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      }, 400)
    }
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to Susan
    // 3. Send confirmation email to client
    
    // For now, we'll just log it and return success
    console.log('New booking request:', data)
    
    // In production, integrate with email service (SendGrid, Mailgun, etc.)
    // Example: await sendEmail(data)
    
    return c.json({
      success: true,
      message: `Thank you, ${data.name}! Your booking request has been received. I'll contact you within 24 hours to confirm your ${data.session} session.`
    })
    
  } catch (error) {
    console.error('Booking error:', error)
    return c.json({
      success: false,
      message: 'An error occurred. Please contact us directly at +971 55 177 0957'
    }, 500)
  }
})

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Susan K. Pearson | Elemental Healing</title>
        <meta name="description" content="Master-level Reiki, Energy Medicine, and Clinical Hypnotherapy in Dubai. Transformational healing at the intersection of energy, body, and consciousness.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'midnight': '#0A0A0A',
                  'charcoal': '#1A1A1A',
                  'obsidian': '#000000',
                  'gold': '#C8A974',
                  'champagne': '#D4AF37',
                  'cream': '#FAF7F3',
                  'bone': '#F4F2EF',
                  'taupe': '#7C7165',
                },
                fontFamily: {
                  'serif': ['Cormorant Garamond', 'serif'],
                  'sans': ['Montserrat', 'sans-serif'],
                }
              }
            }
          }
        </script>
        <style>
          body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0A0A0A;
            color: #FAF7F3;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Cormorant Garamond', serif;
          }
          .elegant-text {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 300;
          }
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          .hero-gradient {
            background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
            position: relative;
          }
          .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(200, 169, 116, 0.1), transparent 70%);
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(200, 169, 116, 0.2);
          }
          .section-divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #C8A974, transparent);
            margin: 4rem 0;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }
          .profile-image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid #C8A974;
            box-shadow: 0 20px 40px rgba(200, 169, 116, 0.3);
          }
          .blog-card {
            background: #1A1A1A;
            border: 1px solid rgba(200, 169, 116, 0.2);
            border-radius: 0.25rem;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(200, 169, 116, 0.3);
            border-color: rgba(200, 169, 116, 0.5);
          }
          .gold-accent {
            background: linear-gradient(135deg, #C8A974 0%, #D4AF37 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          nav {
            backdrop-filter: blur(20px);
            background: rgba(10, 10, 10, 0.95);
            border-bottom: 1px solid rgba(200, 169, 116, 0.1);
          }
        </style>
    </head>
    <body class="smooth-scroll">
        <!-- Navigation -->
        <nav class="fixed w-full bg-black backdrop-blur-sm shadow-lg z-50 border-b border-gold/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <div class="flex items-center">
                        <a href="#home" class="flex flex-col">
                            <div class="text-cream font-serif text-xl md:text-2xl tracking-wide">Susan K. Pearson</div>
                            <div class="text-gold text-xs md:text-sm tracking-widest font-light">ENERGY · BODY · CONSCIOUSNESS</div>
                        </a>
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#home" class="text-cream hover:text-gold transition-colors">Home</a>
                        <a href="#about" class="text-cream hover:text-gold transition-colors">About</a>
                        <a href="#services" class="text-cream hover:text-gold transition-colors">Services</a>
                        <a href="#pricing" class="text-cream hover:text-gold transition-colors">Pricing</a>
                        <a href="#blog" class="text-cream hover:text-gold transition-colors">Blog</a>
                        <a href="#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                    <button id="mobileMenuBtn" class="md:hidden text-cream">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobileMenu" class="hidden md:hidden bg-black border-t border-gold/20">
                <div class="px-4 py-4 space-y-3">
                    <a href="#home" class="block text-cream hover:text-gold transition-colors">Home</a>
                    <a href="#about" class="block text-cream hover:text-gold transition-colors">About</a>
                    <a href="#services" class="block text-cream hover:text-gold transition-colors">Services</a>
                    <a href="#pricing" class="block text-cream hover:text-gold transition-colors">Pricing</a>
                    <a href="#blog" class="block text-cream hover:text-gold transition-colors">Blog</a>
                    <a href="#booking" class="block text-gold hover:text-champagne transition-colors font-medium">Book Session</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="pt-20 h-[70vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden bg-black">
            <div class="absolute inset-0 z-0">
                <img src="/images/hero-v3.jpg" alt="Fundamental Healing Through Energy & Inner Guidance" class="w-full h-full object-cover">
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-cream">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Susan's Photo -->
                <div class="text-center mb-12">
                    <img src="/images/susan-professional.jpg" alt="Susan K. Pearson" class="profile-image mx-auto mb-6 shadow-2xl">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-2">Susan K. Pearson</h2>
                    <p class="text-xl text-gold/90 font-medium mb-4">Energy Medicine Practitioner | Dubai</p>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <div class="flex justify-center gap-6 text-charcoal/70">
                        <a href="tel:+971551770957" class="hover:text-gold transition-colors">
                            <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                        </a>
                        <a href="mailto:susankpearson@elementalskp.com" class="hover:text-gold transition-colors">
                            <i class="fas fa-envelope mr-2"></i>susankpearson@elementalskp.com
                        </a>
                    </div>
                </div>
                
                <!-- Bio Content -->
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                        <div class="space-y-6 text-charcoal/80 leading-relaxed">
                            <p class="text-xl font-medium text-charcoal text-center mb-8">
                                I work at the intersection of energy, body, and consciousness—combining Master-level Reiki, 
                                Energy Medicine, and Clinical Hypnotherapy to create lasting shifts in the nervous system 
                                and subconscious.
                            </p>
                            
                            <div class="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p class="mb-4">
                                        My practice is a sanctuary for high-end, discreet, results-oriented healing. Based in Dubai, 
                                        I offer precise, transformational work that honors the holistic nature of true wellness.
                                    </p>
                                    <p>
                                        With over 15 years of experience in the healing arts, I've had the privilege of working with 
                                        clients from around the world—from corporate executives seeking stress relief to individuals 
                                        navigating major life transitions.
                                    </p>
                                </div>
                                <div>
                                    <p class="mb-4">
                                        My approach is grounded in both ancient wisdom and contemporary understanding of trauma, 
                                        the nervous system, and the subconscious mind.
                                    </p>
                                    <p>
                                        I am currently completing certification in the Nir Levy Method (February 2026), an advanced 
                                        somatic and energetic healing modality that complements my existing toolkit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Credentials -->
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-sm shadow-lg border-l-4 border-gold">
                            <h3 class="text-xl font-serif text-charcoal mb-4 flex items-center">
                                <i class="fas fa-award text-gold mr-3"></i>
                                Credentials & Training
                            </h3>
                            <ul class="space-y-2 text-sm text-charcoal/80">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Master-level Reiki Practitioner (Usui & Karuna)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Certified Energy Medicine Specialist</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Clinical Hypnotherapy Certification (NGH)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Somatic Alignment & Trauma-Informed Bodywork</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Anma (Traditional Japanese Massage)</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-sm shadow-lg border-l-4 border-gold">
                            <h3 class="text-xl font-serif text-charcoal mb-4 flex items-center">
                                <i class="fas fa-certificate text-gold mr-3"></i>
                                Specializations
                            </h3>
                            <ul class="space-y-2 text-sm text-charcoal/80">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Ampuku (Japanese Abdominal Therapy)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Chakra Balancing & Energy Clearing</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Nir Levy Method Certification (February 2026)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Based in Dubai | Sharjah-Registered LLC</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>15+ Years Professional Practice</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Philosophy Quote -->
                    <div class="bg-charcoal p-8 rounded-sm mt-8 text-center shadow-lg">
                        <div class="max-w-3xl mx-auto">
                            <i class="fas fa-quote-left text-gold text-3xl mb-4 block"></i>
                            <p class="text-cream/90 text-lg italic leading-relaxed mb-4">
                                True healing happens when we address not just the symptoms, but the root causes held 
                                in the body, energy field, and subconscious mind. My work creates a safe, sacred space 
                                for transformation—where ancient wisdom meets contemporary understanding, and where 
                                lasting change becomes possible.
                            </p>
                            <i class="fas fa-quote-right text-gold text-3xl block"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Services Section -->
        <section id="services" class="py-20 bg-cream">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Core Offerings</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        Transformational healing modalities designed for lasting change
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Deep Alignment Session -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-spa text-sage text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-charcoal mb-2">Deep Alignment Session</h3>
                            <p class="text-sm text-gold mb-4">Flagship Integration</p>
                        </div>
                        <p class="text-charcoal/70 mb-6 leading-relaxed">
                            My signature integration of Reiki, energy medicine, and somatic touch. 
                            This comprehensive session addresses the full spectrum of mind, body, and spirit.
                        </p>
                        <ul class="space-y-2 text-sm text-charcoal/70 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Master-level Reiki energy work</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Somatic alignment techniques</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Energy medicine protocols</span>
                            </li>
                        </ul>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <!-- Clinical Hypnotherapy -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-brain text-gold text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-charcoal mb-2">Clinical Hypnotherapy</h3>
                            <p class="text-sm text-gold mb-4">Subconscious Transformation</p>
                        </div>
                        <p class="text-charcoal/70 mb-6 leading-relaxed">
                            Access and reprogram limiting beliefs at the subconscious level. 
                            Powerful work for breaking patterns and creating lasting behavioral change.
                        </p>
                        <ul class="space-y-2 text-sm text-charcoal/70 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Pattern interruption & release</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Belief system restructuring</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Nervous system regulation</span>
                            </li>
                        </ul>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <!-- SKP Method -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-earth/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-hands-helping text-earth text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-charcoal mb-2">SKP Method</h3>
                            <p class="text-sm text-gold mb-4">Nir Levy Integration</p>
                        </div>
                        <p class="text-charcoal/70 mb-6 leading-relaxed">
                            Combining advanced somatic practices with energy medicine. 
                            My unique approach to holistic healing informed by the Nir Levy Method.
                        </p>
                        <ul class="space-y-2 text-sm text-charcoal/70 mb-6">
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Body-centered awareness</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Energetic realignment</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-circle text-gold mr-2 mt-1 text-xs"></i>
                                <span>Conscious integration</span>
                            </li>
                        </ul>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium">
                            Coming February 2026 <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-midnight">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-cream mb-4">Investment in Your Wellness</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-cream/70 max-w-2xl mx-auto">
                        Transparent pricing for transformational healing work
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <!-- Deep Alignment Session Pricing -->
                    <div class="bg-charcoal border-2 border-gold/30 p-8 rounded-sm hover:border-gold transition-all duration-300">
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-spa text-gold text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-cream mb-2">Deep Alignment</h3>
                            <p class="text-gold/80 text-sm mb-4">90-Minute Session</p>
                        </div>
                        <div class="text-center mb-6">
                            <div class="text-4xl font-serif text-gold mb-2">AED 950</div>
                            <p class="text-cream/60 text-sm">≈ $260 USD</p>
                        </div>
                        <ul class="space-y-3 text-sm text-cream/70 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Master-level Reiki energy work</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Somatic alignment & bodywork</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Energy medicine protocols</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Chakra balancing & clearing</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Integration guidance</span>
                            </li>
                        </ul>
                        <a href="#booking" class="block w-full bg-gold text-midnight text-center py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                            Book Now
                        </a>
                    </div>

                    <!-- Clinical Hypnotherapy Pricing -->
                    <div class="bg-charcoal border-2 border-gold p-8 rounded-sm transform md:scale-105 shadow-2xl">
                        <div class="absolute top-0 right-0 bg-gold text-midnight text-xs font-bold px-3 py-1 rounded-bl-sm">
                            POPULAR
                        </div>
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-brain text-gold text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-cream mb-2">Hypnotherapy</h3>
                            <p class="text-gold/80 text-sm mb-4">75-Minute Session</p>
                        </div>
                        <div class="text-center mb-6">
                            <div class="text-4xl font-serif text-gold mb-2">AED 850</div>
                            <p class="text-cream/60 text-sm">≈ $230 USD</p>
                        </div>
                        <ul class="space-y-3 text-sm text-cream/70 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Deep subconscious reprogramming</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Pattern interruption work</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Belief system restructuring</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Nervous system regulation</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Audio recording for home practice</span>
                            </li>
                        </ul>
                        <a href="#booking" class="block w-full bg-gold text-midnight text-center py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                            Book Now
                        </a>
                    </div>

                    <!-- SKP Method Pricing -->
                    <div class="bg-charcoal border-2 border-gold/30 p-8 rounded-sm hover:border-gold transition-all duration-300">
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-infinity text-gold text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-serif text-cream mb-2">SKP Method</h3>
                            <p class="text-gold/80 text-sm mb-4">120-Minute Session</p>
                        </div>
                        <div class="text-center mb-6">
                            <div class="text-4xl font-serif text-gold mb-2">AED 1,200</div>
                            <p class="text-cream/60 text-sm">≈ $325 USD</p>
                        </div>
                        <ul class="space-y-3 text-sm text-cream/70 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Full-spectrum integration</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Nir Levy Method protocols</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Advanced somatic techniques</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Energy medicine & Reiki</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                <span>Personalized integration plan</span>
                            </li>
                        </ul>
                        <a href="#booking" class="block w-full bg-gold text-midnight text-center py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                            Book Now
                        </a>
                    </div>
                </div>

                <!-- Package Options -->
                <div class="bg-charcoal border border-gold/20 p-8 rounded-sm">
                    <h3 class="text-2xl font-serif text-cream mb-6 text-center">Healing Packages</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-midnight p-6 rounded-sm">
                            <h4 class="text-xl font-serif text-gold mb-3">Foundation Package</h4>
                            <p class="text-3xl font-serif text-cream mb-2">AED 2,550 <span class="text-lg text-cream/60">/ 3 sessions</span></p>
                            <p class="text-sm text-gold/80 mb-4">Save AED 300 • Best for: Initial transformation</p>
                            <ul class="space-y-2 text-sm text-cream/70 mb-4">
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Choice of any modality</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Email support between sessions</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Valid for 3 months</span>
                                </li>
                            </ul>
                            <a href="#booking" class="text-gold hover:text-champagne transition-colors text-sm font-medium">
                                Inquire About Package <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                        
                        <div class="bg-midnight p-6 rounded-sm border-2 border-gold/50">
                            <h4 class="text-xl font-serif text-gold mb-3">Transformation Package</h4>
                            <p class="text-3xl font-serif text-cream mb-2">AED 5,100 <span class="text-lg text-cream/60">/ 6 sessions</span></p>
                            <p class="text-sm text-gold/80 mb-4">Save AED 600 • Best for: Deep, lasting change</p>
                            <ul class="space-y-2 text-sm text-cream/70 mb-4">
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Mix & match any modalities</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Priority scheduling</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Ongoing email & WhatsApp support</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-star text-gold mr-3 mt-1 text-xs"></i>
                                    <span>Valid for 6 months</span>
                                </li>
                            </ul>
                            <a href="#booking" class="text-gold hover:text-champagne transition-colors text-sm font-medium">
                                Inquire About Package <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Payment & Policies -->
                <div class="mt-12 text-center">
                    <p class="text-cream/60 text-sm mb-4">
                        <i class="fas fa-info-circle text-gold mr-2"></i>
                        All sessions include pre-session consultation and post-session integration support
                    </p>
                    <div class="flex flex-wrap justify-center gap-6 text-sm text-cream/60">
                        <span><i class="fas fa-credit-card text-gold mr-2"></i>Cash & Bank Transfer Accepted</span>
                        <span><i class="fas fa-calendar-check text-gold mr-2"></i>48-Hour Cancellation Policy</span>
                        <span><i class="fas fa-map-marker-alt text-gold mr-2"></i>Dubai Studio Location</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-charcoal">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-cream mb-4">Client Experiences</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-cream/70 max-w-2xl mx-auto">
                        Real stories from clients around the world
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${testimonials.map((testimonial, index) => `
                        <div class="bg-midnight border border-gold/20 p-8 rounded-sm card-hover ${index === 0 ? 'lg:col-span-2' : ''}">
                            <div class="flex items-center mb-6">
                                <div class="text-4xl mr-4">${testimonial.image}</div>
                                <div>
                                    <h4 class="font-serif text-xl text-gold">${testimonial.name}</h4>
                                    <p class="text-sm text-cream/60">${testimonial.location}</p>
                                    <div class="flex mt-1">
                                        ${Array(testimonial.rating).fill('').map(() => '<i class="fas fa-star text-gold text-xs"></i>').join('')}
                                    </div>
                                </div>
                            </div>
                            <p class="text-cream/80 leading-relaxed italic">"${testimonial.text}"</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-12 text-center">
                    <p class="text-cream/70 mb-6">Ready to begin your healing journey?</p>
                    <a href="#booking" class="inline-block bg-gold text-midnight px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                        Book Your Session
                    </a>
                </div>
            </div>
        </section>

        <!-- Approach Section -->
        <section id="approach" class="py-20 bg-charcoal">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-cream mb-4">What to Expect</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center bg-midnight border border-gold/20 p-8 rounded-sm card-hover">
                        <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-serif text-gold">1</span>
                        </div>
                        <h4 class="font-medium text-cream mb-3">Initial Consultation</h4>
                        <p class="text-sm text-cream/70">We'll discuss your intentions and create a personalized healing plan</p>
                    </div>
                    <div class="text-center bg-midnight border border-gold/20 p-8 rounded-sm card-hover">
                        <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-serif text-gold">2</span>
                        </div>
                        <h4 class="font-medium text-cream mb-3">Healing Session</h4>
                        <p class="text-sm text-cream/70">Experience deep work tailored to your unique needs and goals</p>
                    </div>
                    <div class="text-center bg-midnight border border-gold/20 p-8 rounded-sm card-hover">
                        <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-serif text-gold">3</span>
                        </div>
                        <h4 class="font-medium text-cream mb-3">Integration Support</h4>
                        <p class="text-sm text-cream/70">Guidance for integrating your experience into daily life</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Section -->
        <section id="blog" class="py-20 bg-midnight">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-cream mb-4">Insights & Wisdom</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-cream/70 max-w-2xl mx-auto">
                        Articles on energy medicine, healing practices, and conscious living
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    ${blogPosts.map(post => `
                        <article class="blog-card">
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="text-xs text-gold font-medium uppercase tracking-wider">${post.category}</span>
                                    <span class="text-xs text-cream/60">${post.readTime}</span>
                                </div>
                                <h3 class="text-xl font-serif text-cream mb-3 leading-tight">${post.title}</h3>
                                <p class="text-sm text-cream/70 mb-4 leading-relaxed">${post.excerpt}</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-cream/60"><i class="far fa-calendar mr-2"></i>${post.date}</span>
                                    <a href="/blog/${post.id}" class="text-gold hover:text-champagne transition-colors text-sm font-medium">
                                        Read More <i class="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
                
                <div class="text-center mt-12">
                    <a href="/blog" class="inline-block bg-gold text-midnight px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                        View All Articles
                    </a>
                </div>
            </div>
        </section>

        <!-- Booking Section -->
        <section id="booking" class="py-20 bg-white">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Book Your Session</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        Complete the form below to request a session. I'll respond within 24 hours to confirm your appointment.
                    </p>
                </div>
                
                <!-- Booking Form -->
                <div class="bg-cream p-8 rounded-sm shadow-lg">
                    <form id="bookingForm" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Full Name *</label>
                                <input type="text" name="name" required 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                            </div>
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Email Address *</label>
                                <input type="email" name="email" required 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Phone Number *</label>
                                <input type="tel" name="phone" required 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                            </div>
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Preferred Session *</label>
                                <select name="session" required 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                                    <option value="">Select a service...</option>
                                    <option value="deep-alignment">Deep Alignment Session (90 min) - AED 950</option>
                                    <option value="hypnotherapy">Clinical Hypnotherapy (75 min) - AED 850</option>
                                    <option value="skp-method">SKP Method (120 min) - AED 1,200</option>
                                    <option value="consultation">Free Consultation (15 min)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Preferred Date</label>
                                <input type="date" name="date" 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                            </div>
                            <div>
                                <label class="block text-charcoal font-medium mb-2">Preferred Time</label>
                                <select name="time" 
                                    class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                                    <option value="">Select time...</option>
                                    <option value="morning">Morning (9am - 12pm)</option>
                                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                                    <option value="evening">Evening (4pm - 8pm)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-charcoal font-medium mb-2">Message / Special Requests</label>
                            <textarea name="message" rows="4" 
                                class="w-full px-4 py-3 bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                                placeholder="Please share any specific concerns or questions..."></textarea>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" 
                                class="bg-gold text-midnight px-12 py-4 rounded-sm hover:bg-champagne transition-all duration-300 font-medium text-lg shadow-lg hover:scale-105 transform">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Request Booking
                            </button>
                            <p class="mt-4 text-sm text-charcoal/60">
                                I'll respond within 24 hours to confirm your session
                            </p>
                        </div>
                        
                        <div id="formMessage" class="hidden mt-4 p-4 rounded-sm"></div>
                    </form>
                    
                    <div class="mt-8 text-center text-sm text-charcoal/70 border-t border-gold/20 pt-6">
                        <p class="mb-3 font-medium text-charcoal">Prefer to reach out directly?</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+971551770957" class="text-gold hover:text-champagne transition-colors font-medium">
                                <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                            </a>
                            <a href="mailto:susankpearson@elementalskp.com" class="text-gold hover:text-champagne transition-colors font-medium">
                                <i class="fas fa-envelope mr-2"></i>susankpearson@elementalskp.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-cream">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Get in Touch</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        Have questions? I'm here to support you on your healing journey.
                    </p>
                </div>
                
                <div class="bg-white p-12 rounded-sm shadow-sm">
                    <form id="contactForm" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Name</label>
                                <input type="text" required class="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:border-gold transition-colors" placeholder="Your name">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Email</label>
                                <input type="email" required class="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:border-gold transition-colors" placeholder="your@email.com">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Phone (Optional)</label>
                            <input type="tel" class="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:border-gold transition-colors" placeholder="+971 ...">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Service Interest</label>
                            <select class="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:border-gold transition-colors">
                                <option>Deep Alignment Session</option>
                                <option>Clinical Hypnotherapy</option>
                                <option>SKP Method</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Message</label>
                            <textarea rows="5" required class="w-full px-4 py-3 border border-sage/30 rounded-sm focus:outline-none focus:border-gold transition-colors" placeholder="Tell me about your healing journey and intentions..."></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="bg-gold text-cream px-10 py-4 rounded-sm hover:bg-gold/90 transition-colors text-lg font-medium">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div class="mt-12 text-center">
                    <p class="text-charcoal/70 mb-4">Based in Dubai | Sharjah-Registered</p>
                    <div class="flex justify-center space-x-6">
                        <a href="mailto:susankpearson@elementalskp.com" class="text-gold hover:text-gold/80 transition-colors">
                            <i class="fas fa-envelope text-xl"></i>
                        </a>
                        <a href="tel:+971551770957" class="text-gold hover:text-gold/80 transition-colors">
                            <i class="fas fa-phone text-xl"></i>
                        </a>
                        <a href="#" class="text-gold hover:text-gold/80 transition-colors">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" class="text-gold hover:text-gold/80 transition-colors">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-charcoal text-cream/70 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <div class="mb-6">
                        <span class="text-4xl font-serif font-light text-cream tracking-widest">SKP</span>
                    </div>
                    <p class="mb-4 elegant-text text-lg">Susan K. Pearson | Elemental Healing</p>
                    <p class="text-sm mb-2">Energy Medicine • Reiki Master • Hypnotherapy • Somatic Alignment</p>
                    <p class="text-sm mb-2">
                        <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                    </p>
                    <p class="text-sm mb-6">
                        <i class="fas fa-envelope mr-2"></i>susankpearson@elementalskp.com
                    </p>
                    <div class="section-divider opacity-30"></div>
                    <p class="text-xs mt-6">© 2026 Elemental Healing LLC. All rights reserved. | Confidential & Proprietary</p>
                </div>
            </div>
        </footer>

        
        <script>
          // Booking Form Handler
          document.addEventListener('DOMContentLoaded', function() {
            const bookingForm = document.getElementById('bookingForm');
            const formMessage = document.getElementById('formMessage');
            
            if (bookingForm) {
              bookingForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = new FormData(bookingForm);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const response = await fetch('/api/booking', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                  });
                  
                  const result = await response.json();
                  
                  if (response.ok) {
                    formMessage.className = 'mt-4 p-4 rounded-sm bg-green-100 border border-green-400 text-green-700';
                    formMessage.textContent = result.message || 'Thank you! Your booking request has been received. I will contact you within 24 hours.';
                    formMessage.classList.remove('hidden');
                    bookingForm.reset();
                  } else {
                    throw new Error(result.message || 'Something went wrong');
                  }
                } catch (error) {
                  formMessage.className = 'mt-4 p-4 rounded-sm bg-red-100 border border-red-400 text-red-700';
                  formMessage.textContent = 'There was an error submitting your request. Please contact us directly at +971 55 177 0957 or susankpearson@elementalskp.com';
                  formMessage.classList.remove('hidden');
                }
                
                setTimeout(() => {
                  formMessage.classList.add('hidden');
                }, 8000);
              });
            }
          });
        </script>
        
        <script>
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('#mobileMenu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const offset = 80;
                        const targetPosition = target.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Contact form handling
            document.getElementById('contactForm').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your interest. Your message has been received. I will respond within 24 hours.\\n\\nFor immediate assistance, please call +971 55 177 0957 or email susankpearson@elementalskp.com');
                e.target.reset();
            });

            // Add fade-in animations on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        </script>
    </body>
    </html>
  `)
})

// Blog listing page
app.get('/blog', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog | Susan K. Pearson</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          body { font-family: 'Montserrat', sans-serif; background-color: #F5F1E8; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="pt-20">
        <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div class="max-w-7xl mx-auto px-4 py-4">
                <a href="/" class="text-2xl font-serif text-gray-800">← Back to Home</a>
            </div>
        </nav>
        
        <div class="max-w-7xl mx-auto px-4 py-16">
            <h1 class="text-5xl font-serif text-center mb-8">All Blog Posts</h1>
            <div class="grid md:grid-cols-3 gap-8">
                ${blogPosts.map(post => `
                    <article class="bg-white p-6 rounded shadow-sm">
                        <span class="text-xs text-gold font-medium">${post.category}</span>
                        <h3 class="text-xl font-serif mt-2 mb-3">${post.title}</h3>
                        <p class="text-sm text-gray-600 mb-4">${post.excerpt}</p>
                        <div class="flex justify-between items-center text-xs text-gray-500">
                            <span>${post.date}</span>
                            <a href="/blog/${post.id}" class="text-gold">Read More →</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    </body>
    </html>
  `)
})

export default app
