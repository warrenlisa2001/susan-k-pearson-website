import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

type Bindings = {
  DB?: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

function daisyIcon(size: number, stroke: string, center: string) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  const petals = angles.map(a =>
    `<path d="M0 0 C-4 -11,-5 -24,0 -35 C5 -24,4 -11,0 0 Z" transform="translate(50,50) rotate(${a})" fill="none" stroke="${stroke}" stroke-width="1.1" stroke-linejoin="round"/>`
  ).join('')
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${petals}<circle cx="50" cy="50" r="3" fill="${center}"/></svg>`
}

function renderInitiativeSection() {
  const principles: [string, string][] = [
    ['Honor Life', 'Every living being possesses inherent value.'],
    ['Respect All Creatures', 'Compassion extends beyond species to every living being.'],
    ['Act With Integrity', 'We lead with transparency, responsibility, and care.'],
    ['Build Sustainability', 'We create systems of care that endure generations.'],
    ['Leave a Legacy', 'We invest in a future where life can flourish with dignity.'],
  ]
  return `
        <section id="initiative" class="bg-[#050505] text-[#FAF7F3] py-24 md:py-32 border-b border-[#C8A974]/20">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
              <div class="mb-8 flex justify-center">${daisyIcon(72, '#FAF7F3', '#D4AF37')}</div>
              <p class="text-[11px] tracking-[0.35em] uppercase text-[#C8A974] mb-5 font-['Montserrat',sans-serif]">An Initiative by Susan K. Pearson</p>
              <h2 class="font-['Cormorant_Garamond',serif] font-light text-4xl md:text-6xl mb-5 tracking-wide">Animal Advocate Initiative</h2>
              <p class="font-['Cormorant_Garamond',serif] italic text-xl md:text-2xl text-[#D4AF37]">Honoring Life. Respecting All Creatures.</p>
            </div>

            <div class="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-20 pb-20 border-b border-[#C8A974]/15">
              <div class="font-['Cormorant_Garamond',serif] text-[#C8A974] text-2xl">01</div>
              <div>
                <h3 class="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl mb-6 tracking-wide">A Founder's Vision</h3>
                <p class="font-['Cormorant_Garamond',serif] italic text-lg text-[#D4AF37] mb-6">I am building something.</p>
                <p class="text-[#EDE7DD]/85 leading-relaxed mb-6 max-w-2xl">
                  Not just a response to need, but a sustainable framework of compassion, stewardship, and respect &mdash;
                  where every being has the opportunity to live with dignity and every voice has the chance to be heard.
                </p>
                <p class="text-[#EDE7DD]/85 leading-relaxed max-w-2xl">This is the beginning of a legacy of care.</p>
              </div>
            </div>

            <div class="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-20 pb-20 border-b border-[#C8A974]/15">
              <div class="font-['Cormorant_Garamond',serif] text-[#C8A974] text-2xl">02</div>
              <div>
                <h3 class="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl mb-6 tracking-wide">Our Purpose</h3>
                <p class="text-[#EDE7DD]/85 leading-relaxed mb-4 max-w-2xl">We exist to honor life and respect all creatures.</p>
                <p class="text-[#EDE7DD]/85 leading-relaxed mb-4 max-w-2xl">We believe every life has inherent value and deserves compassion, protection, and the opportunity to thrive.</p>
                <p class="text-[#EDE7DD]/85 leading-relaxed max-w-2xl">Our purpose is to create the conditions in which life &mdash; in all its forms &mdash; can flourish with dignity.</p>
              </div>
            </div>

            <div class="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-20 pb-20 border-b border-[#C8A974]/15">
              <div class="font-['Cormorant_Garamond',serif] text-[#C8A974] text-2xl">03</div>
              <div>
                <h3 class="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl mb-10 tracking-wide">Our Guiding Principles</h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
                  ${principles.map(([title, desc]) => `
                  <div>
                    <div class="mb-4">${daisyIcon(40, '#EDE7DD', '#D4AF37')}</div>
                    <h4 class="font-['Cormorant_Garamond',serif] text-lg mb-2 tracking-wide">${title}</h4>
                    <p class="text-[#EDE7DD]/70 text-sm leading-relaxed">${desc}</p>
                  </div>`).join('')}
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-16">
              <div class="font-['Cormorant_Garamond',serif] text-[#C8A974] text-2xl">04</div>
              <div>
                <h3 class="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl mb-6 tracking-wide">Our Commitment</h3>
                <p class="font-['Cormorant_Garamond',serif] italic text-lg text-[#D4AF37] mb-6">We collaborate. We educate. We advocate. We create.</p>
                <p class="text-[#EDE7DD]/85 leading-relaxed max-w-2xl">
                  Together, we build a world where compassion is active, stewardship is enduring, and life is honored in all its forms.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[11px] tracking-[0.25em] uppercase text-[#C8A974]/80 border-t border-[#C8A974]/15 pt-10">
              <span>Presence</span><span class="text-[#C8A974]/40">&bull;</span>
              <span>Curiosity</span><span class="text-[#C8A974]/40">&bull;</span>
              <span>Respect</span><span class="text-[#C8A974]/40">&bull;</span>
              <span>Attention</span><span class="text-[#C8A974]/40">&bull;</span>
              <span>Possibility</span>
            </div>
            <p class="text-center text-[#C8A974]/60 text-xs tracking-[0.2em] uppercase mt-8">Founded by Susan K. Pearson &nbsp;&middot;&nbsp; Version 1.0 &mdash; This is the beginning.</p>
          </div>
        </section>
`
}

function renderInitiativeTeaser() {
  return `
        <!-- Animal Advocate Initiative -->
        <section class="py-24 bg-[#050505] text-[#FAF7F3] text-center">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-8 flex justify-center">${daisyIcon(64, '#FAF7F3', '#D4AF37')}</div>
            <p class="text-[11px] tracking-[0.35em] uppercase text-[#C8A974] mb-5 font-['Montserrat',sans-serif]">An Initiative by Susan K. Pearson</p>
            <h2 class="font-['Cormorant_Garamond',serif] font-light text-3xl md:text-5xl mb-5 tracking-wide">Animal Advocate Initiative</h2>
            <p class="font-['Cormorant_Garamond',serif] italic text-lg md:text-xl text-[#D4AF37] mb-8">Honoring Life. Respecting All Creatures.</p>
            <p class="text-[#EDE7DD]/80 leading-relaxed max-w-xl mx-auto mb-10">
              To create the conditions in which life &mdash; in all its forms &mdash; can flourish with dignity.
              A sustainable framework of compassion, stewardship, and respect for every being.
            </p>
            <a href="/cat-rescue#initiative" class="inline-block border border-[#C8A974]/60 text-[#FAF7F3] px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#C8A974]/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              Meet the Cats We're Rescuing
            </a>
          </div>
        </section>
`
}

app.use('/api/*', cors())
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))

// Testimonials data - Global diversity
const testimonials = [
  {
    id: 1,
    name: "Lisa M.",
    location: "Ireland",
    rating: 5,
    text: "Working with Susan has been nothing short of life-changing. I came to her feeling disconnected and carrying years of unresolved tension. From the very first session, I felt seen, heard, and held in a way I had never experienced before. Susan's depth of understanding, combined with her intuitive awareness of exactly what I needed, created profound shifts that I can only describe as miraculous. Her Deep Alignment sessions helped me release patterns I didn't even know I was holding. The integration of Anma, Reiki, and body-led awareness is seamless and extraordinary. I've recommended her to everyone I know - she is truly exceptional. If you're looking for genuine, transformational work, Susan is the practitioner you need.",
    image: "/images/lisa-ireland.jpg",
    isPhoto: true
  },
  {
    id: 2,
    name: "Pırıl",
    location: "Istanbul, Turkey",
    rating: 5,
    text: "Receiving a session from Susan felt something unique - each and every time. There's a softness and ease in how she works, but at the same time you can feel the depth and experience behind it. What I love with Susan's sessions most is how she blends energy work with the Nir Levi Method body work in her own unique way - no two sessions feel the same. She really tunes into what you and your soul need in that moment. Bonus is the elegance of her space which is carefully curated, allowing you to feel safe, ease and drop in. Thank you dear Susan!",
    image: "/images/piril-turkey.jpg",
    isPhoto: true
  },
  {
    id: 3,
    name: "Carole Damour",
    location: "France",
    rating: 5,
    text: "I want to share my experience with the Reiki sessions I've been fortunate to attend with this practitioner for several years, and it continues. The sessions took place in various formats - in person, via video call, and outdoors in nature. All these sessions have been an opportunity for profound learning in letting go and experiencing total well-being. Susan's voice, her expertise, her gentleness, and her kindness carry you toward serenity. This has significantly increased my ability to manage my emotions, and as a result, the quality of my sleep has improved. I highly recommend these Reiki sessions with Susan to anyone seeking to reconnect with themselves and stimulate their vital energy.",
    image: "/images/carole-france.jpg",
    isPhoto: true
  },
  {
    id: 4,
    name: "Fatima",
    location: "Canada (based in Dubai)",
    rating: 5,
    text: "I'm originally from Canada, 46 years old, and have been based in Dubai for the past 23 years. I recently experienced a session with Susan that integrates Nir Levi Method alongside energy healing components, and I can honestly say it was exceptional. I went into the session carrying a fair amount of stress, and left feeling deeply elevated, grounded, and restored. What stood out most was the profound sense of safety she creates. I rarely allow myself to fully let go in sessions, yet I found myself completely relaxed - I even fell asleep, which almost never happens for me. That, in itself, speaks volumes about the space she holds. Susan has a very calming, genuine, and reassuring presence. Her energy allows your nervous system to truly unwind and reset. After the session, I felt fully regulated, clear, and at ease. This is someone I would return to consistently and confidently recommend.",
    image: "/images/fatima-canada.jpg",
    isPhoto: true
  },
  {
    id: 5,
    name: "Matthieu",
    location: "Dubai",
    rating: 5,
    text: "With a background in tennis, squash, and now padel, I've occasionally experienced some back discomfort over time. My session with Susan was a standout experience. She creates a calm, grounded environment where you immediately feel at ease. Her approach is intuitive and tailored, combining different techniques in a way that feels both seamless and highly effective. I was able to fully switch off during the session, which is not always easy for me. I left feeling deeply relaxed, rebalanced, and lighter overall. A truly refined and restorative experience. I would return without hesitation.",
    image: "/images/matthieu-dubai.jpg",
    isPhoto: true
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
    readTime: "5 min read",
    content: `
      <p class="lead">Energy medicine is based on the scientific principle that all matter, including our bodies, is made of energy. This ancient healing modality works with the body's subtle energy systems to promote healing, balance, and vitality.</p>

      <h3>The Science Behind Energy Medicine</h3>
      <p>Modern physics has confirmed what ancient healers have known for millennia: everything in the universe is energy vibrating at different frequencies. Our bodies are not just physical structures—they're complex energy systems with electromagnetic fields that can be measured and influenced.</p>

      <p>The human body generates various forms of energy:</p>
      <ul>
        <li><strong>Bioelectromagnetic fields</strong> created by electrical activity in the heart and brain</li>
        <li><strong>Biochemical energy</strong> from cellular metabolism</li>
        <li><strong>Photonic energy</strong> emitted by cells (biophotons)</li>
        <li><strong>Subtle energy</strong> flowing through meridian pathways</li>
      </ul>

      <h3>How Energy Medicine Works</h3>
      <p>Energy medicine practitioners work with these energy systems to:</p>
      <ul>
        <li>Remove energetic blockages that impede natural healing</li>
        <li>Restore balance to disrupted energy flows</li>
        <li>Strengthen the body's energy field (aura)</li>
        <li>Support the body's innate healing intelligence</li>
      </ul>

      <h3>The Chakra System</h3>
      <p>Central to energy medicine is the chakra system—seven major energy centers running from the base of the spine to the crown of the head. Each chakra corresponds to specific physical, emotional, and spiritual aspects of our being:</p>
      
      <ul>
        <li><strong>Root Chakra (Muladhara):</strong> Foundation, survival, security</li>
        <li><strong>Sacral Chakra (Svadhisthana):</strong> Creativity, emotions, sexuality</li>
        <li><strong>Solar Plexus (Manipura):</strong> Personal power, confidence, will</li>
        <li><strong>Heart Chakra (Anahata):</strong> Love, compassion, connection</li>
        <li><strong>Throat Chakra (Vishuddha):</strong> Communication, truth, expression</li>
        <li><strong>Third Eye (Ajna):</strong> Intuition, wisdom, insight</li>
        <li><strong>Crown Chakra (Sahasrara):</strong> Spiritual connection, consciousness</li>
      </ul>

      <h3>Benefits of Energy Medicine</h3>
      <p>Regular energy medicine sessions can help with:</p>
      <ul>
        <li>Chronic pain and inflammation</li>
        <li>Stress and anxiety reduction</li>
        <li>Emotional trauma healing</li>
        <li>Enhanced immune function</li>
        <li>Better sleep quality</li>
        <li>Increased energy and vitality</li>
        <li>Accelerated post-surgery recovery</li>
        <li>Greater mental clarity and focus</li>
      </ul>

      <h3>What to Expect in a Session</h3>
      <p>An energy medicine session typically involves:</p>
      <ol>
        <li><strong>Assessment:</strong> Evaluation of your energy field and chakra system</li>
        <li><strong>Energy Clearing:</strong> Removal of stagnant or blocked energy</li>
        <li><strong>Balancing:</strong> Harmonizing chakras and energy pathways</li>
        <li><strong>Integration:</strong> Grounding and anchoring the energetic shifts</li>
      </ol>

      <p>Most people report feeling deeply relaxed, peaceful, and energized after a session. Some experience emotional releases or profound insights as blocked energy begins to move.</p>

      <h3>Combining Ancient Wisdom with Modern Science</h3>
      <p>What makes energy medicine so powerful is its integration of time-tested healing traditions with contemporary scientific understanding. Research in quantum physics, neuroscience, and bioelectromagnetics continues to validate what energy medicine practitioners have always known: we are energetic beings, and healing happens on multiple levels.</p>

      <p class="mt-6"><em>Ready to experience energy medicine for yourself? Book a Deep Alignment Session to explore how this transformative modality can support your healing journey.</em></p>
    `
  },
  {
    id: 2,
    title: "The Power of Reiki: Channeling Universal Life Energy",
    excerpt: "Reiki is a gentle yet powerful healing modality that works on physical, emotional, mental, and spiritual levels. Learn about the transformative effects of this Japanese technique...",
    date: "January 10, 2026",
    category: "Reiki",
    readTime: "6 min read",
    content: `
      <p class="lead">Reiki (pronounced "ray-key") is a Japanese healing technique that channels universal life force energy to promote healing, reduce stress, and restore balance. Developed by Mikao Usui in the early 1920s, Reiki has become one of the most widely practiced energy healing modalities worldwide.</p>

      <h3>What is Reiki?</h3>
      <p>The word Reiki comes from two Japanese words:</p>
      <ul>
        <li><strong>Rei:</strong> Universal, spiritual wisdom</li>
        <li><strong>Ki:</strong> Life force energy (similar to Chi or Prana)</li>
      </ul>

      <p>Reiki practitioners serve as channels for this universal life force energy, allowing it to flow through their hands to the recipient. This energy is intelligent—it goes where it's needed most, working on physical, emotional, mental, and spiritual levels simultaneously.</p>

      <h3>The Five Reiki Principles</h3>
      <p>Reiki is not just about hands-on healing; it's also a spiritual practice based on five principles (Gokai):</p>
      <ol>
        <li><strong>Just for today, I will not worry</strong></li>
        <li><strong>Just for today, I will not be angry</strong></li>
        <li><strong>Just for today, I will be grateful</strong></li>
        <li><strong>Just for today, I will do my work honestly</strong></li>
        <li><strong>Just for today, I will be kind to every living thing</strong></li>
      </ol>

      <p>These principles guide practitioners toward mindful living and spiritual growth.</p>

      <h3>How Reiki Works</h3>
      <p>During a Reiki session, the practitioner places their hands on or slightly above specific areas of the body, allowing universal life force energy to flow through. This energy:</p>
      <ul>
        <li>Activates the body's natural healing processes</li>
        <li>Releases energetic blockages</li>
        <li>Balances the chakras and energy meridians</li>
        <li>Promotes deep relaxation and stress relief</li>
        <li>Supports emotional healing and release</li>
      </ul>

      <h3>The Reiki Attunement Process</h3>
      <p>Becoming a Reiki practitioner involves receiving "attunements"—sacred ceremonies that open and align your energy channels to channel Reiki. There are traditionally three levels:</p>
      
      <ul>
        <li><strong>Level 1 (Shoden):</strong> Physical healing, self-treatment</li>
        <li><strong>Level 2 (Okuden):</strong> Mental/emotional healing, distance healing</li>
        <li><strong>Level 3 (Shinpiden/Master):</strong> Spiritual healing, teaching capability</li>
      </ul>

      <p>As a Master-level Reiki practitioner trained in both Usui and Karuna Reiki systems, I work with advanced energy techniques and sacred symbols to facilitate profound healing.</p>

      <h3>What to Expect in a Reiki Session</h3>
      <p>A typical Reiki session lasts 60-90 minutes and includes:</p>
      <ol>
        <li><strong>Intention Setting:</strong> We discuss your healing goals and intentions</li>
        <li><strong>Energy Assessment:</strong> I scan your energy field to identify blockages</li>
        <li><strong>Hands-On Healing:</strong> Gentle hand placements on or above the body</li>
        <li><strong>Integration:</strong> Time to process and ground the energy</li>
      </ol>

      <h3>Benefits of Regular Reiki</h3>
      <p>Research and clinical experience show that Reiki can help with:</p>
      <ul>
        <li><strong>Stress Reduction:</strong> Deep relaxation response, lower cortisol levels</li>
        <li><strong>Pain Management:</strong> Reduced chronic pain, faster surgical recovery</li>
        <li><strong>Emotional Healing:</strong> Release of trauma, anxiety, and depression</li>
        <li><strong>Better Sleep:</strong> Improved sleep quality and duration</li>
        <li><strong>Enhanced Clarity:</strong> Greater mental focus and decision-making</li>
        <li><strong>Spiritual Growth:</strong> Deeper connection to your higher self</li>
        <li><strong>Immune Support:</strong> Strengthened immune system function</li>
      </ul>

      <h3>Scientific Research on Reiki</h3>
      <p>While Reiki is an ancient practice, modern science is beginning to understand its mechanisms. Studies have shown that Reiki:</p>
      <ul>
        <li>Affects the autonomic nervous system, promoting parasympathetic activation</li>
        <li>Influences brainwave patterns, inducing theta and alpha states</li>
        <li>May affect cellular healing through bioelectromagnetic fields</li>
        <li>Reduces biomarkers of stress and inflammation</li>
      </ul>

      <h3>Reiki as Complementary Care</h3>
      <p>Reiki is increasingly used in hospitals, hospices, and medical settings as a complementary therapy. It enhances conventional medical treatments without interfering with them, making it a safe addition to any healthcare regimen.</p>

      <p class="mt-6"><em>Experience the transformative power of Master-level Reiki. Book a session to restore balance, release stress, and reconnect with your innate healing capacity.</em></p>
    `
  },
  {
    id: 3,
    title: "Hypnotherapy for Lasting Change: Reprogramming Your Subconscious",
    excerpt: "Your subconscious mind holds the key to breaking patterns and creating lasting behavioral change. Explore how clinical hypnotherapy can help you unlock your potential...",
    date: "January 5, 2026",
    category: "Hypnotherapy",
    readTime: "7 min read",
    content: `
      <p class="lead">Clinical hypnotherapy is a powerful therapeutic tool that accesses the subconscious mind to create lasting behavioral change. By working directly with the part of your mind that controls 95% of your thoughts, emotions, and behaviors, hypnotherapy can help you break free from limiting patterns and step into your full potential.</p>

      <h3>Understanding the Subconscious Mind</h3>
      <p>Your mind operates on two levels:</p>
      <ul>
        <li><strong>Conscious Mind (5%):</strong> Logical thinking, willpower, short-term memory</li>
        <li><strong>Subconscious Mind (95%):</strong> Habits, beliefs, emotions, automatic behaviors, long-term memory</li>
      </ul>

      <p>The subconscious mind is like an incredibly powerful computer running programs installed during childhood, traumatic events, and repeated experiences. These programs run automatically, often outside your awareness, controlling your reactions, habits, and beliefs.</p>

      <h3>What is Hypnotherapy?</h3>
      <p>Hypnotherapy is a therapeutic technique that induces a deeply relaxed, focused state of consciousness (trance) where the subconscious mind becomes more receptive to positive suggestions and change. Despite common misconceptions:</p>
      <ul>
        <li>You remain fully in control at all times</li>
        <li>You cannot be made to do anything against your will</li>
        <li>You're not asleep—you're in a heightened state of awareness</li>
        <li>You'll remember the session (unless therapeutic amnesia is specifically requested)</li>
      </ul>

      <h3>How Hypnotherapy Creates Change</h3>
      <p>Traditional therapy works with the conscious mind—using logic, willpower, and understanding. While valuable, this approach often falls short because:</p>
      <ul>
        <li>Willpower is limited and easily depleted</li>
        <li>Understanding a problem doesn't automatically change behavior</li>
        <li>Conscious resolutions often conflict with subconscious programming</li>
      </ul>

      <p>Hypnotherapy works differently. By accessing the subconscious mind directly, we can:</p>
      <ol>
        <li><strong>Identify Root Causes:</strong> Discover the original events that created limiting beliefs</li>
        <li><strong>Release Emotional Charges:</strong> Process and release stored emotions from past events</li>
        <li><strong>Rewrite Programs:</strong> Install new, empowering beliefs and behaviors</li>
        <li><strong>Integrate Changes:</strong> Allow new patterns to become automatic</li>
      </ol>

      <h3>What Hypnotherapy Can Help With</h3>
      <p>Clinical hypnotherapy is highly effective for:</p>
      
      <h4>Behavioral Change</h4>
      <ul>
        <li>Smoking cessation</li>
        <li>Weight management and healthy eating</li>
        <li>Nail biting, skin picking, hair pulling</li>
        <li>Procrastination and motivation</li>
      </ul>

      <h4>Emotional Healing</h4>
      <ul>
        <li>Anxiety and panic attacks</li>
        <li>Depression and low mood</li>
        <li>Phobias and fears</li>
        <li>Grief and loss</li>
        <li>Anger management</li>
      </ul>

      <h4>Performance Enhancement</h4>
      <ul>
        <li>Public speaking confidence</li>
        <li>Sports performance</li>
        <li>Test anxiety and exam performance</li>
        <li>Creative blocks</li>
      </ul>

      <h4>Trauma Resolution</h4>
      <ul>
        <li>PTSD symptoms</li>
        <li>Childhood trauma</li>
        <li>Relationship trauma</li>
        <li>Accident or injury recovery</li>
      </ul>

      <h4>Physical Symptoms</h4>
      <ul>
        <li>Chronic pain management</li>
        <li>IBS and digestive issues</li>
        <li>Tension headaches</li>
        <li>Insomnia and sleep disorders</li>
      </ul>

      <h3>The Hypnotherapy Process</h3>
      <p>A typical hypnotherapy session includes:</p>

      <h4>1. Pre-Talk & Goal Setting (15-20 minutes)</h4>
      <p>We discuss your goals, address any concerns about hypnosis, and ensure you understand the process. This builds trust and rapport—essential for effective hypnotherapy.</p>

      <h4>2. Induction (5-10 minutes)</h4>
      <p>Using guided relaxation techniques, I help you enter a comfortable trance state. This might include progressive muscle relaxation, breathing exercises, or visualization.</p>

      <h4>3. Deepening (5-10 minutes)</h4>
      <p>We deepen the trance state to access the subconscious mind more effectively. You'll feel deeply relaxed while remaining fully aware.</p>

      <h4>4. Therapeutic Work (30-40 minutes)</h4>
      <p>This is where the transformation happens. Depending on your goals, this might include:</p>
      <ul>
        <li>Age regression to heal past events</li>
        <li>Parts therapy to resolve internal conflicts</li>
        <li>Positive suggestion and affirmation</li>
        <li>Future pacing to rehearse new behaviors</li>
        <li>Metaphor and storytelling</li>
      </ul>

      <h4>5. Emergence & Integration (5-10 minutes)</h4>
      <p>I guide you back to full conscious awareness, feeling refreshed and empowered. We discuss your experience and any insights gained.</p>

      <h3>My Approach: Ericksonian Hypnotherapy</h3>
      <p>I practice Ericksonian hypnotherapy, developed by Dr. Milton Erickson, which is:</p>
      <ul>
        <li><strong>Permissive rather than authoritarian:</strong> Gentle suggestions instead of commands</li>
        <li><strong>Conversational and indirect:</strong> Natural, story-based language</li>
        <li><strong>Client-centered:</strong> Tailored to your unique needs and learning style</li>
        <li><strong>Solution-focused:</strong> Emphasizing resources and possibilities</li>
      </ul>

      <h3>Scientific Validation</h3>
      <p>Hypnotherapy is recognized as an evidence-based treatment by:</p>
      <ul>
        <li>American Psychological Association</li>
        <li>British Medical Association</li>
        <li>National Institute of Health</li>
      </ul>

      <p>Brain imaging studies show that hypnosis creates measurable changes in brain activity, affecting areas involved in attention, pain perception, and emotional regulation.</p>

      <h3>How Many Sessions Do You Need?</h3>
      <p>This varies by individual and issue:</p>
      <ul>
        <li><strong>Simple habits:</strong> 1-3 sessions</li>
        <li><strong>Phobias or specific fears:</strong> 3-5 sessions</li>
        <li><strong>Anxiety or confidence:</strong> 5-8 sessions</li>
        <li><strong>Complex trauma or deeply rooted patterns:</strong> 8-12+ sessions</li>
      </ul>

      <p>Many clients notice improvements after just one session, with changes deepening over subsequent sessions.</p>

      <h3>Is Hypnotherapy Right for You?</h3>
      <p>Hypnotherapy works best for people who:</p>
      <ul>
        <li>Are motivated to change</li>
        <li>Are open to the process</li>
        <li>Can focus and follow instructions</li>
        <li>Want to understand and heal root causes</li>
      </ul>

      <p>It's not recommended for people with certain mental health conditions (active psychosis, severe personality disorders) without coordination with their mental health provider.</p>

      <p class="mt-6"><em>Ready to break free from limiting patterns? Book a Hypnotherapy session to access your subconscious mind's incredible capacity for transformation.</em></p>
    `
  },
  {
    id: 4,
    title: "Somatic Healing: Reconnecting with Your Body's Wisdom",
    excerpt: "Your body holds memories, emotions, and wisdom. Somatic alignment practices help you reconnect with this innate intelligence for profound healing...",
    date: "December 28, 2025",
    category: "Somatic Work",
    readTime: "5 min read",
    content: `
      <p class="lead">Somatic healing recognizes a profound truth: your body is not just a vehicle for your mind—it's an intelligent system that stores memories, processes emotions, and holds the key to deep, lasting healing. Through somatic practices, we can access and release what's been held in the tissues, nervous system, and cellular memory.</p>

      <h3>What is Somatic Healing?</h3>
      <p>The word "somatic" comes from the Greek "soma," meaning "the body." Somatic healing encompasses various body-centered therapeutic approaches that work with the mind-body connection to:</p>
      <ul>
        <li>Release stored trauma and tension</li>
        <li>Regulate the nervous system</li>
        <li>Restore natural movement patterns</li>
        <li>Reconnect with body wisdom and intuition</li>
        <li>Process emotions held in the tissues</li>
      </ul>

      <h3>The Body Keeps the Score</h3>
      <p>Research by Dr. Bessel van der Kolk and other trauma experts has shown that traumatic experiences are stored not just in our minds, but in our bodies. When we experience stress or trauma:</p>
      <ul>
        <li>The nervous system can become dysregulated</li>
        <li>Muscles contract and hold tension</li>
        <li>Breathing patterns become restricted</li>
        <li>Emotions get "frozen" in the tissues</li>
        <li>The body remains in a state of hypervigilance or collapse</li>
      </ul>

      <p>Traditional talk therapy alone often can't access or release these somatic holdings. This is where somatic healing becomes essential.</p>

      <h3>Your Nervous System: The Key to Healing</h3>
      <p>Understanding your nervous system is crucial to somatic healing. Your autonomic nervous system has three states:</p>

      <h4>1. Ventral Vagal (Social Engagement)</h4>
      <p>This is your natural, balanced state:</p>
      <ul>
        <li>Feeling safe and connected</li>
        <li>Open and receptive</li>
        <li>Creative and playful</li>
        <li>Able to rest and digest</li>
      </ul>

      <h4>2. Sympathetic (Fight or Flight)</h4>
      <p>Activated by perceived threats:</p>
      <ul>
        <li>Racing heart, rapid breathing</li>
        <li>Anxiety and restlessness</li>
        <li>Difficulty relaxing</li>
        <li>Hypervigilance</li>
      </ul>

      <h4>3. Dorsal Vagal (Freeze/Shutdown)</h4>
      <p>Occurs when overwhelmed:</p>
      <ul>
        <li>Numbing and dissociation</li>
        <li>Fatigue and depression</li>
        <li>Feeling disconnected</li>
        <li>Low energy and motivation</li>
      </ul>

      <p>Somatic healing helps you recognize these states and gently guide your nervous system back to safety and regulation.</p>

      <h3>Somatic Modalities I Practice</h3>

      <h4>Somatic Experiencing (SE)</h4>
      <p>Developed by Dr. Peter Levine, SE works with the body's innate ability to heal from trauma by:</p>
      <ul>
        <li>Tracking sensations and impulses</li>
        <li>Completing incomplete defensive responses</li>
        <li>Releasing stored survival energy</li>
        <li>Restoring nervous system regulation</li>
      </ul>

      <h4>Anma (Traditional Japanese Massage)</h4>
      <p>Anma is one of the oldest forms of massage therapy, dating back over 1,000 years. This rhythmic, pressure-based technique:</p>
      <ul>
        <li>Releases deep muscle tension</li>
        <li>Improves energy flow through meridians</li>
        <li>Promotes circulation and vitality</li>
        <li>Grounds and centers the body</li>
      </ul>

      <h4>Ampuku (Abdominal Therapy)</h4>
      <p>Ampuku is a specialized Japanese technique focusing on the hara (abdomen)—considered the body's energetic center. This gentle yet profound work:</p>
      <ul>
        <li>Releases tension in the digestive system</li>
        <li>Addresses emotional holdings in the belly</li>
        <li>Improves organ function</li>
        <li>Restores connection to your core/center</li>
        <li>Supports deep emotional release</li>
      </ul>

      <p>The abdomen stores tremendous emotional energy—fear, anxiety, and grief often lodge here. Ampuku provides a safe, nurturing way to release these holdings.</p>

      <h3>Trauma-Informed Approach</h3>
      <p>All somatic work I offer is trauma-informed, meaning:</p>
      <ul>
        <li><strong>You remain in control:</strong> You always have choice about touch, pace, and depth</li>
        <li><strong>We work within your window of tolerance:</strong> Never overwhelming your nervous system</li>
        <li><strong>Consent is ongoing:</strong> You can pause, adjust, or stop at any time</li>
        <li><strong>We track your body's responses:</strong> Honoring what emerges without forcing</li>
        <li><strong>Pendulation is key:</strong> Moving between activation and resource to prevent overwhelm</li>
      </ul>

      <h3>What Somatic Healing Can Help With</h3>
      <ul>
        <li><strong>Trauma and PTSD:</strong> Releasing stored trauma without re-traumatization</li>
        <li><strong>Chronic Pain:</strong> Addressing tension patterns and nervous system dysregulation</li>
        <li><strong>Anxiety:</strong> Calming an overactive nervous system</li>
        <li><strong>Depression:</strong> Bringing energy and aliveness back into the body</li>
        <li><strong>Digestive Issues:</strong> Releasing abdominal tension and supporting organ function</li>
        <li><strong>Disconnection:</strong> Restoring the mind-body connection</li>
        <li><strong>Emotional Numbness:</strong> Helping you feel again in a safe way</li>
      </ul>

      <h3>What to Expect in a Somatic Session</h3>
      <p>Sessions typically include:</p>
      <ol>
        <li><strong>Check-In (10 minutes):</strong> We discuss what's present for you today</li>
        <li><strong>Grounding (5 minutes):</strong> Establishing safety and presence</li>
        <li><strong>Bodywork (60 minutes):</strong> Anma, Ampuku, and gentle somatic techniques</li>
        <li><strong>Integration (15 minutes):</strong> Processing what emerged, grounding new awareness</li>
      </ol>

      <p>You remain fully clothed for most somatic work. Sessions are designed to feel safe, nurturing, and empowering.</p>

      <h3>The Power of Presence</h3>
      <p>One of the most healing aspects of somatic work is simply being present with your body without judgment or agenda. Many of us have learned to:</p>
      <ul>
        <li>Ignore body signals</li>
        <li>Override discomfort</li>
        <li>Disconnect from sensations</li>
        <li>View the body as an object rather than an ally</li>
      </ul>

      <p>Somatic healing invites you to listen deeply, trust your body's wisdom, and allow healing to unfold organically.</p>

      <h3>Integration Practices</h3>
      <p>Between sessions, I may recommend simple practices:</p>
      <ul>
        <li><strong>Body Scans:</strong> Bringing mindful awareness to sensations</li>
        <li><strong>Orienting:</strong> Using your senses to establish presence and safety</li>
        <li><strong>Grounding:</strong> Feeling your connection to the earth</li>
        <li><strong>Pendulation:</strong> Moving between sensation and resource</li>
        <li><strong>Self-Holds:</strong> Gentle hand placements for self-soothing</li>
      </ul>

      <p class="mt-6"><em>Your body has been waiting for you to listen. Book a Somatic Healing session to reconnect with your body's innate wisdom and release what no longer serves you.</em></p>
    `
  },
  {
    id: 5,
    title: "Creating Sacred Space: Preparing for Your Healing Journey",
    excerpt: "The environment in which healing occurs matters. Learn how to create sacred space in your daily life to support your transformational journey...",
    date: "December 20, 2025",
    category: "Wellness",
    readTime: "4 min read",
    content: `
      <p class="lead">Sacred space is not just about physical environment—it's about creating conditions that support healing, transformation, and deep inner work. Whether preparing for a healing session or cultivating daily practices, learning to create and hold sacred space is an essential skill for your wellness journey.</p>

      <h3>What is Sacred Space?</h3>
      <p>Sacred space is a container—energetic, physical, and psychological—that supports presence, healing, and transformation. It's a space where:</p>
      <ul>
        <li>You feel safe to be vulnerable</li>
        <li>Distractions fade into the background</li>
        <li>Time seems to slow down</li>
        <li>Deeper truths can emerge</li>
        <li>Healing becomes possible</li>
      </ul>

      <p>Think of sacred space as the difference between rushing through a meal standing at the kitchen counter versus sitting down for a nourishing dinner by candlelight. The food might be the same, but the experience—and the digestion—are completely different.</p>

      <h3>Creating Physical Sacred Space</h3>

      <h4>1. Choose Your Space</h4>
      <p>Select a quiet area where you won't be disturbed. This might be:</p>
      <ul>
        <li>A corner of your bedroom</li>
        <li>A dedicated meditation room</li>
        <li>A comfortable chair near a window</li>
        <li>A spot in your garden</li>
      </ul>

      <h4>2. Clear the Energy</h4>
      <p>Before creating sacred space, clear stagnant energy:</p>
      <ul>
        <li><strong>Sound:</strong> Bells, singing bowls, or chanting</li>
        <li><strong>Smoke:</strong> Sage, palo santo, or incense (if appropriate)</li>
        <li><strong>Intention:</strong> Visualize white light filling the space</li>
        <li><strong>Physical:</strong> Clean and declutter the area</li>
      </ul>

      <h4>3. Set the Atmosphere</h4>
      <p>Engage all five senses:</p>
      <ul>
        <li><strong>Sight:</strong> Candles, soft lighting, meaningful objects, flowers</li>
        <li><strong>Sound:</strong> Gentle music, nature sounds, or silence</li>
        <li><strong>Scent:</strong> Essential oils, incense, or fresh flowers</li>
        <li><strong>Touch:</strong> Comfortable cushions, soft blankets, smooth stones</li>
        <li><strong>Taste:</strong> Herbal tea or water infused with intention</li>
      </ul>

      <h4>4. Create Boundaries</h4>
      <p>Protect your sacred space:</p>
      <ul>
        <li>Turn off phones and devices</li>
        <li>Put a "do not disturb" sign on your door</li>
        <li>Let household members know you need uninterrupted time</li>
        <li>Set a specific time frame to honor your commitment</li>
      </ul>

      <h3>Creating Energetic Sacred Space</h3>

      <h4>Opening a Sacred Space</h4>
      <p>Begin with intention-setting:</p>
      <ol>
        <li><strong>Ground yourself:</strong> Feel your connection to the earth</li>
        <li><strong>Center in your heart:</strong> Bring awareness to your heart center</li>
        <li><strong>Call in protection:</strong> Invite supportive energies (guides, angels, ancestors)</li>
        <li><strong>State your intention:</strong> Clearly express why you're creating this space</li>
        <li><strong>Visualize a boundary:</strong> Imagine a sphere of light surrounding you</li>
      </ol>

      <h4>The Four Directions</h4>
      <p>Many traditions honor the four cardinal directions. You might face each direction and offer gratitude or invoke specific qualities:</p>
      <ul>
        <li><strong>East:</strong> New beginnings, air, mental clarity</li>
        <li><strong>South:</strong> Passion, fire, emotional healing</li>
        <li><strong>West:</strong> Release, water, intuition</li>
        <li><strong>North:</strong> Wisdom, earth, grounding</li>
      </ul>

      <h3>Sacred Space in Your Daily Life</h3>

      <h4>Morning Sacred Space</h4>
      <p>Start your day with intention:</p>
      <ul>
        <li>5 minutes of silent meditation</li>
        <li>Gratitude practice</li>
        <li>Setting intentions for the day</li>
        <li>Gentle stretching or yoga</li>
      </ul>

      <h4>Mealtime as Sacred Space</h4>
      <p>Transform eating into a mindful practice:</p>
      <ul>
        <li>Pause before eating to offer gratitude</li>
        <li>Eat without distractions (no phone, TV, computer)</li>
        <li>Notice colors, textures, flavors</li>
        <li>Chew slowly and breathe</li>
      </ul>

      <h4>Evening Wind-Down</h4>
      <p>Create transition time before sleep:</p>
      <ul>
        <li>Gentle yin yoga or stretching</li>
        <li>Journaling</li>
        <li>Gratitude reflection</li>
        <li>Releasing the day's concerns</li>
      </ul>

      <h3>Sacred Space for Healing Sessions</h3>

      <h4>Before Your Session</h4>
      <p>To prepare for a healing session with me:</p>
      <ul>
        <li><strong>Hydrate well:</strong> Drink plenty of water the day before</li>
        <li><strong>Avoid heavy meals:</strong> Eat lightly 2 hours before</li>
        <li><strong>Minimize stimulants:</strong> Reduce caffeine and sugar</li>
        <li><strong>Set an intention:</strong> Reflect on what you want to receive</li>
        <li><strong>Arrive early:</strong> Give yourself time to settle</li>
      </ul>

      <h4>After Your Session</h4>
      <p>Honor the integration period:</p>
      <ul>
        <li><strong>Rest:</strong> Avoid rushing back to activities</li>
        <li><strong>Hydrate:</strong> Drink plenty of water to support release</li>
        <li><strong>Journal:</strong> Note insights, sensations, or emotions</li>
        <li><strong>Gentle movement:</strong> Walk in nature if possible</li>
        <li><strong>Early bedtime:</strong> Deep healing often occurs during sleep</li>
      </ul>

      <h3>Portable Sacred Space</h3>
      <p>You can create sacred space anywhere:</p>
      <ul>
        <li><strong>In your car:</strong> Take three deep breaths before driving</li>
        <li><strong>At work:</strong> Close your eyes for a 2-minute reset</li>
        <li><strong>In line at the store:</strong> Practice present-moment awareness</li>
        <li><strong>Before difficult conversations:</strong> Center in your heart</li>
      </ul>

      <h3>Sacred Space as Practice</h3>
      <p>The more you practice creating sacred space, the more easily you'll be able to access that state of presence, peace, and openness. Over time, you might find that:</p>
      <ul>
        <li>You need fewer external tools</li>
        <li>Your intention alone creates the container</li>
        <li>You can hold sacred space for others</li>
        <li>Life itself becomes more sacred</li>
      </ul>

      <h3>Common Obstacles</h3>

      <h4>"I don't have time"</h4>
      <p>Sacred space can be as simple as three conscious breaths. Start with 5 minutes and build from there.</p>

      <h4>"I don't have a special place"</h4>
      <p>Any space becomes sacred through your intention. A chair, a cushion on the floor, a spot under a tree—all can work.</p>

      <h4>"I feel silly or self-conscious"</h4>
      <p>This is your journey. What matters is not how it looks, but how it feels to you. Start simple and let your practice evolve.</p>

      <h4>"My mind wanders"</h4>
      <p>This is completely normal. Gently return to your breath, your intention, or your senses. There's no perfect way to do this.</p>

      <h3>The Invitation</h3>
      <p>Creating sacred space is ultimately an act of self-respect and self-love. It's a way of saying:</p>
      <ul>
        <li>"I matter"</li>
        <li>"My healing matters"</li>
        <li>"I deserve this time and space"</li>
        <li>"I honor the sacred within me"</li>
      </ul>

      <p>When you consistently create sacred space in your life, you'll find that healing naturally deepens, insights arrive more easily, and transformation becomes possible.</p>

      <p class="mt-6"><em>Every session in my practice is held within sacred space—a container of safety, respect, and reverence for your healing journey. I invite you to experience the power of healing within sacred space.</em></p>
    `
  },
  {
    id: 6,
    title: "Integration: Honoring Your Healing Process",
    excerpt: "True transformation requires time and conscious integration. Discover practices to help you embody the shifts from your healing sessions...",
    date: "December 15, 2025",
    category: "Integration",
    readTime: "6 min read",
    content: `
      <p class="lead">In our results-driven culture, we often expect healing to be linear and immediate. But true, lasting transformation is a process—one that requires conscious integration. Integration is the bridge between insight and embodiment, between healing session and daily life, between who you've been and who you're becoming.</p>

      <h3>What is Integration?</h3>
      <p>Integration is the process of:</p>
      <ul>
        <li>Absorbing and anchoring healing experiences</li>
        <li>Allowing new patterns to become automatic</li>
        <li>Releasing old identities and stories</li>
        <li>Embodying insights at the cellular level</li>
        <li>Living from your healed state</li>
      </ul>

      <p>Think of integration like planting a seed. The healing session plants the seed, but integration is the watering, sunlight, and tending that allows it to take root and grow.</p>

      <h3>Why Integration Matters</h3>
      <p>Without conscious integration:</p>
      <ul>
        <li>Profound sessions can fade quickly</li>
        <li>Old patterns reassert themselves</li>
        <li>Insights remain intellectual rather than embodied</li>
        <li>You return to baseline without lasting change</li>
        <li>The nervous system reverts to familiar patterns</li>
      </ul>

      <p>With conscious integration:</p>
      <ul>
        <li>Changes deepen and stabilize</li>
        <li>New neural pathways strengthen</li>
        <li>The body adapts to new states</li>
        <li>Transformation becomes sustainable</li>
        <li>You build on each session's progress</li>
      </ul>

      <h3>The Integration Timeline</h3>

      <h4>Immediately After a Session (0-2 hours)</h4>
      <p><strong>What's Happening:</strong> Your nervous system is processing the session. Energy is reorganizing. You may feel spacey, emotional, or deeply peaceful.</p>

      <p><strong>How to Support:</strong></p>
      <ul>
        <li>Rest if possible—avoid rushing back to activities</li>
        <li>Drink plenty of water</li>
        <li>Avoid making major decisions</li>
        <li>Notice sensations, emotions, or insights without judgment</li>
        <li>Journal if inspired</li>
      </ul>

      <h4>The First 24 Hours</h4>
      <p><strong>What's Happening:</strong> The body is processing on multiple levels—physical, emotional, energetic. You might experience:</p>
      <ul>
        <li>Fatigue or increased energy</li>
        <li>Emotional releases (tears, laughter, anger)</li>
        <li>Vivid dreams</li>
        <li>Physical sensations or temporary soreness</li>
        <li>Shifts in appetite or sleep</li>
      </ul>

      <p><strong>How to Support:</strong></p>
      <ul>
        <li>Gentle movement (walking, stretching, yin yoga)</li>
        <li>Continue hydrating</li>
        <li>Early bedtime—healing deepens during sleep</li>
        <li>Avoid alcohol, heavy foods, or numbing behaviors</li>
        <li>Spend time in nature if possible</li>
      </ul>

      <h4>Days 2-7: The Integration Week</h4>
      <p><strong>What's Happening:</strong> New patterns are beginning to stabilize. Old patterns may try to reassert themselves. This is normal and part of the process.</p>

      <p><strong>How to Support:</strong></p>
      <ul>
        <li>Continue self-care practices</li>
        <li>Notice when old patterns arise—observe without judgment</li>
        <li>Practice new behaviors consciously</li>
        <li>Journal about changes you notice</li>
        <li>Be patient with the process</li>
      </ul>

      <h4>Weeks 2-4: Deepening</h4>
      <p><strong>What's Happening:</strong> Changes become more automatic. New neural pathways strengthen. Your identity begins to shift.</p>

      <p><strong>How to Support:</strong></p>
      <ul>
        <li>Maintain consistent self-care</li>
        <li>Notice positive changes and acknowledge them</li>
        <li>Be compassionate when old patterns appear</li>
        <li>Consider scheduling your next session</li>
      </ul>

      <h3>Integration Practices</h3>

      <h4>Body-Based Integration</h4>
      <p><strong>Grounding Practices:</strong></p>
      <ul>
        <li>Walk barefoot on earth</li>
        <li>Sit with your back against a tree</li>
        <li>Feel your feet on the floor</li>
        <li>Lie on the ground and feel supported</li>
      </ul>

      <p><strong>Gentle Movement:</strong></p>
      <ul>
        <li>Yin or restorative yoga</li>
        <li>Qi gong or tai chi</li>
        <li>Dance or free movement</li>
        <li>Swimming or water activities</li>
      </ul>

      <p><strong>Breathwork:</strong></p>
      <ul>
        <li>Three-part breath (belly, ribs, chest)</li>
        <li>Extended exhales (inhale 4, exhale 6-8)</li>
        <li>Alternate nostril breathing</li>
        <li>Simply noticing your natural breath</li>
      </ul>

      <h4>Emotional Integration</h4>
      <p><strong>Journaling Prompts:</strong></p>
      <ul>
        <li>"What am I noticing in my body?"</li>
        <li>"What emotions are present?"</li>
        <li>"What insights arose during my session?"</li>
        <li>"What's different now?"</li>
        <li>"What do I need right now?"</li>
      </ul>

      <p><strong>Emotional Release:</strong></p>
      <ul>
        <li>Allow tears without trying to stop them</li>
        <li>Sound release (humming, toning, sighing)</li>
        <li>Shaking or trembling (allow natural release)</li>
        <li>Creative expression (art, music, writing)</li>
      </ul>

      <h4>Mental Integration</h4>
      <p><strong>Reflection Questions:</strong></p>
      <ul>
        <li>What beliefs are shifting?</li>
        <li>What's my relationship with this pattern now?</li>
        <li>What am I learning about myself?</li>
        <li>How am I different than before?</li>
      </ul>

      <p><strong>Affirmations & Anchoring:</strong></p>
      <ul>
        <li>Create affirmations based on your session insights</li>
        <li>Repeat them while in a relaxed state</li>
        <li>Pair them with a physical anchor (hand on heart)</li>
        <li>Write them where you'll see them daily</li>
      </ul>

      <h4>Spiritual Integration</h4>
      <p><strong>Meditation & Contemplation:</strong></p>
      <ul>
        <li>Sit in silence daily</li>
        <li>Notice what arises without attachment</li>
        <li>Ask for guidance or clarity</li>
        <li>Trust the unfolding process</li>
      </ul>

      <p><strong>Gratitude Practice:</strong></p>
      <ul>
        <li>Appreciate your willingness to heal</li>
        <li>Honor the courage it takes to change</li>
        <li>Thank your body for its wisdom</li>
        <li>Acknowledge progress, however small</li>
      </ul>

      <h3>Common Integration Experiences</h3>

      <h4>The Integration Dip</h4>
      <p>Sometimes, 2-3 days after a session, you might feel worse before feeling better. This is called an "integration dip" or "healing crisis." You might experience:</p>
      <ul>
        <li>Fatigue or low energy</li>
        <li>Emotional sensitivity</li>
        <li>Temporary return of symptoms</li>
        <li>Vivid or intense dreams</li>
      </ul>

      <p><strong>This is actually a good sign!</strong> It means:</p>
      <ul>
        <li>Deep processing is occurring</li>
        <li>Old patterns are releasing</li>
        <li>Your system is reorganizing at a fundamental level</li>
      </ul>

      <p><strong>How to Navigate:</strong></p>
      <ul>
        <li>Rest and be gentle with yourself</li>
        <li>Trust the process</li>
        <li>Reach out if you need support</li>
        <li>Remember: this is temporary</li>
      </ul>

      <h4>Resistance and Backsliding</h4>
      <p>Sometimes the old pattern feels comfortable, even if it's painful. You might notice:</p>
      <ul>
        <li>Self-sabotage</li>
        <li>Reverting to old habits</li>
        <li>Minimizing progress</li>
        <li>Creating drama or crisis</li>
      </ul>

      <p><strong>This is your nervous system's attempt to maintain homeostasis.</strong> It's not failure—it's information.</p>

      <p><strong>How to Work With Resistance:</strong></p>
      <ul>
        <li>Notice it without judgment</li>
        <li>Get curious: "What's this protecting?"</li>
        <li>Acknowledge the fear of change</li>
        <li>Gently redirect toward new patterns</li>
        <li>Reach out for support</li>
      </ul>

      <h3>Integration Support Between Sessions</h3>
      <p>As your practitioner, I'm available for integration support:</p>
      <ul>
        <li><strong>Email check-ins:</strong> Brief questions or concerns</li>
        <li><strong>WhatsApp support:</strong> For clients in ongoing work</li>
        <li><strong>Integration sessions:</strong> Shorter sessions to support processing</li>
        <li><strong>Adjusting plans:</strong> We can modify our approach as needed</li>
      </ul>

      <h3>Creating an Integration Routine</h3>
      <p>A simple daily routine supports ongoing integration:</p>

      <p><strong>Morning (10 minutes):</strong></p>
      <ul>
        <li>Gratitude for your healing journey</li>
        <li>Intention for the day</li>
        <li>Brief body scan or meditation</li>
      </ul>

      <p><strong>Throughout the Day:</strong></p>
      <ul>
        <li>Pause for three conscious breaths</li>
        <li>Notice sensations and emotions</li>
        <li>Choose new responses when old patterns arise</li>
      </ul>

      <p><strong>Evening (10 minutes):</strong></p>
      <ul>
        <li>Reflect on changes noticed</li>
        <li>Journal briefly</li>
        <li>Release the day</li>
        <li>Gratitude practice</li>
      </ul>

      <h3>Long-Term Integration</h3>
      <p>True integration continues long after sessions end. You might find:</p>
      <ul>
        <li><strong>Layered healing:</strong> Deeper layers reveal themselves over time</li>
        <li><strong>Spiral pattern:</strong> You revisit themes at new levels of understanding</li>
        <li><strong>Embodied wisdom:</strong> Changes become so integrated you forget you ever struggled</li>
        <li><strong>Ripple effects:</strong> Healing in one area affects other areas of life</li>
      </ul>

      <h3>Honoring Your Unique Process</h3>
      <p>Remember:</p>
      <ul>
        <li>There's no "right" way to integrate</li>
        <li>Your timeline is your own</li>
        <li>Healing is not linear</li>
        <li>Progress isn't always obvious</li>
        <li>Trust your body's wisdom</li>
      </ul>

      <h3>The Gift of Integration</h3>
      <p>Integration is where the magic really happens. It's in the quiet moments of noticing you responded differently. It's in the subtle shifts that compound over time. It's in the realization that something that once triggered you no longer does.</p>

      <p>Integration is the gift you give yourself—the gift of patience, self-compassion, and trust in your own healing journey.</p>

      <p class="mt-6"><em>Integration is an ongoing conversation between you and your healing process. I'm here to support you every step of the way. Together, we'll honor your unique timeline and create conditions for lasting transformation.</em></p>
    `
  },
  {
    id: 7,
    title: "The Nir Levy Method: When the Body Remembers What the Mind Forgot",
    excerpt: "A transformational journey through ancient Anma bodywork and Five Elements Body Reading. One woman's story of returning to herself through the Nir Levy Method...",
    date: "February 2, 2026",
    category: "Nir Levy Method",
    readTime: "12 min read",
    content: `
      <p class="lead">Elena sat across from me in our first consultation, her shoulders drawn forward, arms crossed protectively over her chest. "I don't know what's wrong with me," she said quietly. "I just... I can't seem to move forward."</p>

      <p>She was a high-achieving executive who'd spent the last decade building a successful career. On paper, her life looked perfect. But inside, she felt frozen—stuck in patterns of overwork, perfectionism, and a persistent sense that she wasn't doing enough, being enough, <em>existing</em> enough.</p>

      <p>"I've tried therapy," she told me. "I've tried meditation. I understand intellectually what's happening. But I can't seem to <em>change</em> it."</p>

      <p>This is where the Nir Levy Method becomes profound. Because sometimes, the body carries stories the conscious mind has forgotten—or never fully processed in the first place.</p>

      <h3>What is the Nir Levy Method?</h3>
      
      <p>The Nir Levy Method is a holistic bodywork modality rooted in <strong>Anma</strong>—a traditional Japanese form of therapeutic touch with origins in China dating back approximately 5,000 years. Unlike massage (which works primarily with muscles), Anma works with the body's meridian system—the energetic pathways through which life force (Qi) flows.</p>

      <p>Nir Levy, an Israeli bodywork master, studied classical Anma in Japan and integrated it with:</p>
      <ul>
        <li><strong>Five Elements Body Reading</strong> — an assessment system that observes physical structure, posture, breath, and tissue quality to understand internal energetic states</li>
        <li><strong>Taoist philosophy</strong> — principles of Yin and Yang, balance, and natural flow</li>
        <li><strong>Somatic awareness</strong> — understanding that emotions, memories, and patterns live in the body's tissues and nervous system</li>
      </ul>

      <p>The result is a deeply intelligent treatment that addresses the <strong>whole person</strong>—not just physical tension, but the emotional and energetic blockages that create it.</p>

      <h3>The Three Levels of Blockage</h3>

      <p>In the Nir Levy Method, we understand that blockages exist on three interconnected levels:</p>

      <h4>1. Physical Blockages</h4>
      <p>These are the tangible manifestations we can feel and see:</p>
      <ul>
        <li>Chronic tension in shoulders, neck, or lower back</li>
        <li>Restricted movement or flexibility</li>
        <li>Digestive issues, shallow breathing</li>
        <li>Postural imbalances (forward head, collapsed chest, locked knees)</li>
        <li>Tissue that feels dense, rigid, or "stuck"</li>
      </ul>

      <h4>2. Energetic Blockages</h4>
      <p>When Qi (life force) can't flow freely through meridians:</p>
      <ul>
        <li>Fatigue or depletion despite adequate rest</li>
        <li>Feeling "disconnected" from your body</li>
        <li>Numbness or hypersensitivity in specific areas</li>
        <li>Difficulty grounding or feeling present</li>
        <li>Sense of being "held" or constricted energetically</li>
      </ul>

      <h4>3. Emotional Blockages</h4>
      <p>Unprocessed emotions and protective patterns stored in tissue:</p>
      <ul>
        <li>Chronic anxiety or hypervigilance</li>
        <li>Difficulty expressing needs or emotions</li>
        <li>Patterns of collapse or shutdown under stress</li>
        <li>Grief, anger, or fear that "lives" in specific body areas</li>
        <li>Protective armor that no longer serves but won't release</li>
      </ul>

      <p><em>Elena's body told the story before she did. Her collapsed chest protected a heart that had learned it wasn't safe to be open. Her rigid shoulders carried the weight of impossible standards. Her shallow breath kept big emotions at bay.</em></p>

      <h3>Elena's First Session: The Body Reading</h3>

      <p>In Nir Levy Method, we begin with <strong>Five Elements Body Reading</strong>—a comprehensive observation that reveals how the body is organizing itself and where it's holding patterns.</p>

      <p>I observed Elena standing, walking, breathing. I noticed:</p>
      <ul>
        <li>Her shoulders rolled forward (protection around the heart)</li>
        <li>Her breath was high and shallow (nervous system in low-grade fight-or-flight)</li>
        <li>Her pelvis was tucked (disconnection from creative and emotional centers)</li>
        <li>Her jaw was clenched (unexpressed words, unspoken truths)</li>
        <li>Her lower back was rigid (inability to receive support, fear of letting go)</li>
      </ul>

      <p>"Your body is working so hard to keep you safe," I told her gently. "But the strategies that protected you once are now keeping you stuck."</p>

      <p>She nodded, tears filling her eyes. "I didn't realize how much I've been holding."</p>

      <h3>The Hands-On Work: Where Release Begins</h3>

      <p>Anma is not a gentle, flowing massage. It's firm, intentional, and deeply penetrating. We work meridian by meridian, addressing blockages with:</p>
      <ul>
        <li><strong>Pressure and stretches</strong> to release fascial restrictions</li>
        <li><strong>Rhythmic compression</strong> along energy pathways</li>
        <li><strong>Joint mobilization</strong> to restore natural movement</li>
        <li><strong>Breathwork</strong> to support nervous system regulation</li>
      </ul>

      <p>When I worked Elena's upper back and shoulders, I felt the tissue begin to soften. And then—suddenly—a wave of grief.</p>

      <p>She began to cry, quietly at first, then with deep, shaking sobs.</p>

      <p>"I don't even know what this is," she whispered.</p>

      <p>"You don't need to know," I said. "Your body knows. Let it move."</p>

      <p>This is the power of somatic work: <strong>the body releases what the mind can't always name.</strong></p>

      <h3>Session Two: The Layers Beneath</h3>

      <p>Elena returned two weeks later. She looked softer somehow—less braced.</p>

      <p>"Something shifted after our first session," she said. "I've been sleeping better. And I actually set a boundary with my boss—something I've never been able to do."</p>

      <p>In this session, we went deeper. I worked her hara (belly center) using <strong>Ampuku</strong>—a specialized form of abdominal therapy that addresses:</p>
      <ul>
        <li>Digestive stagnation</li>
        <li>Emotional holding in the gut ("second brain")</li>
        <li>Disconnection from personal power and instinct</li>
        <li>Stored fear and unprocessed emotions</li>
      </ul>

      <p>As I applied slow, steady pressure to specific points on her abdomen, Elena's breathing deepened. Her whole body began to relax in a way it hadn't in our first session.</p>

      <p>"I can feel my belly," she said with wonder. "I haven't felt this part of my body in... I don't know how long."</p>

      <p>The hara is our center—our connection to instinct, intuition, and grounded presence. When it's shut down (often as a protective mechanism), we lose access to our deeper knowing. Ampuku helps restore that connection.</p>

      <h3>The Integration: When Healing Becomes Life</h3>

      <p>Over the next several months, Elena continued regular Nir Levy Method sessions. Each session revealed new layers:</p>

      <ul>
        <li>Release of chronic lower back pain that had been with her for 8 years</li>
        <li>Reconnection with her creative expression (she started painting again)</li>
        <li>Deeper capacity to feel and express emotions</li>
        <li>Improved digestion and energy</li>
        <li>A newfound ability to rest without guilt</li>
      </ul>

      <p>But the most profound shift wasn't physical. It was in how she inhabited her life.</p>

      <p>"I feel like I'm <em>in</em> my body now," she told me in month four. "Before, I was always in my head, analyzing, trying to figure everything out. Now I can actually <em>feel</em> what I need. And I trust it."</p>

      <h3>What Makes the Nir Levy Method Different</h3>

      <p>There are many bodywork modalities. What makes Nir Levy Method unique is its integration of:</p>

      <h4>1. Precision and Depth</h4>
      <p>This isn't surface-level relaxation. Anma works deep into fascia, meridians, and holding patterns with focused intention.</p>

      <h4>2. Energetic and Physical Integration</h4>
      <p>We're not just releasing tight muscles—we're restoring energetic flow through the meridian system, which affects every aspect of health and vitality.</p>

      <h4>3. Body Reading as Assessment</h4>
      <p>Before we even begin hands-on work, the body reading reveals exactly where you're holding, why, and what needs support. This makes treatment highly targeted and effective.</p>

      <h4>4. Somatic Intelligence</h4>
      <p>Nir Levy Method recognizes that the body has its own wisdom. We're not imposing healing—we're supporting the body's natural capacity to release, reorganize, and return to balance.</p>

      <h4>5. Emotional Release is Welcome</h4>
      <p>Unlike modalities that focus only on physical structure, Nir Levy Method honors that emotion lives in the body. Tears, laughter, anger, grief—all are welcomed and supported as part of the healing process.</p>

      <h3>Who is the Nir Levy Method For?</h3>

      <p>This work is particularly powerful for:</p>
      <ul>
        <li><strong>People who feel chronically tense, braced, or "stuck"</strong> — Those who sense they're holding patterns but can't seem to release them through talk therapy or relaxation techniques alone</li>
        <li><strong>High-achievers carrying stress in their bodies</strong> — Executives, entrepreneurs, and professionals who live in their heads and have lost connection with their body's signals</li>
        <li><strong>Those with chronic pain or physical restrictions</strong> — Especially when the root cause isn't purely structural but has an emotional or energetic component</li>
        <li><strong>People healing from trauma</strong> — Trauma lives in the body. Nir Levy Method offers a way to process what talk therapy can't always reach</li>
        <li><strong>Anyone seeking deeper embodiment</strong> — Those who want to feel more present, grounded, and alive in their physical form</li>
      </ul>

      <h3>What to Expect in a Nir Levy Method Session</h3>

      <h4>Step 1: Arrive and Settle</h4>
      <p>We begin with a brief conversation about what's present for you—physically, emotionally, energetically. There's no need to "prepare" or analyze. Just arrive as you are.</p>

      <h4>Step 2: Five Elements Body Reading</h4>
      <p>I'll observe how your body is organizing itself: posture, breath, movement patterns, areas of holding or collapse. This reading informs the entire session and reveals exactly where support is needed.</p>

      <h4>Step 3: Hands-On Work and Movement</h4>
      <p>You'll lie on a comfortable treatment table (fully clothed) as I work specific meridians, release fascial restrictions, and support your body in letting go of what it's been holding. Sessions may include:</p>
      <ul>
        <li>Deep meridian-based compression and stretching</li>
        <li>Ampuku (abdominal work) to release core holding</li>
        <li>Joint mobilization and alignment</li>
        <li>Breathwork to support nervous system regulation</li>
      </ul>

      <h4>Step 4: Integration</h4>
      <p>After the hands-on work, we allow time for your system to integrate. This might include gentle movement, breath, or simply resting. Integration is not a passive step—it's where the body reorganizes around the new patterns we've supported.</p>

      <h3>The Journey Continues</h3>

      <p>Six months after her first session, Elena sent me a message:</p>

      <blockquote class="border-l-4 border-gold pl-4 italic text-charcoal/70 my-6">
        "I wanted to thank you. Not just for the sessions, but for helping me remember that I have a body—and that it's been trying to tell me things for years. I feel like I've come home to myself. The Nir Levy work didn't just release my physical pain. It gave me back access to my instincts, my emotions, and my life force. I didn't realize how much I'd been living in my head until I dropped back into my body. Everything has changed."
      </blockquote>

      <p>This is the gift of the Nir Levy Method. It's not a quick fix or a temporary relief. It's a <strong>return to embodied presence</strong>—a reconnection with the wisdom, intelligence, and vitality that lives in your physical form.</p>

      <h3>Your Body Remembers</h3>

      <p>Our bodies hold the full record of our lives—every joy, every loss, every moment we had to brace or protect or shut down to survive. And while the conscious mind may forget, <strong>the body remembers.</strong></p>

      <p>The Nir Levy Method offers a way back—a way to listen to what the body has been trying to say, to release what it's been holding, and to restore the natural flow of energy, breath, and life force that is your birthright.</p>

      <p>If you've been living in your head, if you feel stuck in patterns you can't think your way out of, if your body feels like a stranger you're dragging through life—this work is for you.</p>

      <p class="mt-6"><em>The Nir Levy Method is available as a standalone session or integrated into the Deep Alignment and Full Frequency offerings. Book your first session and discover what your body has been waiting to tell you.</em></p>
    `
  },
  {
    id: 8,
    title: "The Ancient Art of Reiki: Healing Energy, Chakras, and the Path to Balance",
    excerpt: "Discover the profound history of Reiki, understand the seven chakras and their meanings, and learn how to identify and release energetic blockages for optimal wellbeing...",
    date: "February 3, 2026",
    category: "Reiki",
    readTime: "15 min read",
    content: `
      <p class="lead">Reiki is one of the most powerful yet gentle healing modalities available to us today. Originating in Japan in the early 20th century, this sacred practice has transformed millions of lives by working with the body's natural energy systems to restore balance, release blockages, and activate the body's innate healing intelligence.</p>

      <h3>The History of Reiki: From Ancient Wisdom to Modern Practice</h3>

      <p>The word <strong>Reiki</strong> (霊気) is composed of two Japanese characters: <em>Rei</em> (spiritual wisdom) and <em>Ki</em> (life force energy). Together, they represent "spiritually guided life force energy."</p>

      <h4>The Founder: Mikao Usui</h4>
      
      <p>Reiki was rediscovered by <strong>Dr. Mikao Usui</strong> (1865-1926), a Japanese Buddhist monk, scholar, and seeker. After years of studying ancient texts and undertaking a 21-day meditation and fasting retreat on Mount Kurama near Kyoto, Usui experienced a profound spiritual awakening.</p>

      <p>During this retreat, he received a divine revelation—an understanding of how to access and channel universal life force energy for healing. This became the foundation of what we now know as <strong>Usui Reiki Ryoho</strong> (Usui Spiritual Energy Healing Method).</p>

      <h4>The Journey to the West</h4>

      <p>Reiki remained primarily in Japan until the 1930s when <strong>Hawayo Takata</strong>, a Japanese-American woman, traveled to Japan seeking healing for serious health conditions. After experiencing miraculous healing through Reiki treatments, she trained under Dr. Chujiro Hayashi (one of Usui's senior students) and eventually brought Reiki to Hawaii and the United States.</p>

      <p>From there, Reiki spread across the Western world, evolving into various lineages and forms while maintaining its core principles of channeling universal healing energy.</p>

      <h4>Modern Reiki Lineages</h4>

      <p>Today, several powerful Reiki systems exist, including:</p>
      <ul>
        <li><strong>Usui Reiki Ryoho</strong> — The original system founded by Mikao Usui</li>
        <li><strong>Holy Fire® Reiki</strong> — A refined, higher-frequency energy brought through by William Lee Rand of the International Center for Reiki Training</li>
        <li><strong>Karuna Reiki®</strong> — Compassionate action energy, also developed by William Lee Rand, working with deeper layers of suffering and trauma</li>
        <li><strong>Traditional Japanese Reiki</strong> — Practices preserved in Japan, including techniques like Reiji-ho (intuitive guidance) and Byosen Reikan (scanning)</li>
      </ul>

      <h3>How Reiki Works: The Science and the Sacred</h3>

      <p>Reiki operates on the principle that we are more than physical bodies—we are complex energy systems. When energy flows freely through our bodies, we experience health, vitality, and emotional balance. When energy becomes blocked or stagnant, dis-ease manifests.</p>

      <h4>What Happens During a Reiki Session?</h4>

      <p>During a Reiki treatment, the practitioner acts as a clear channel for universal life force energy. Through gentle hand placements on or above the body, Reiki energy flows to wherever it is needed most, guided by the recipient's own healing intelligence.</p>

      <p>Reiki energy:</p>
      <ul>
        <li>Activates the parasympathetic nervous system (rest and repair mode)</li>
        <li>Releases energetic blockages in the chakras and meridians</li>
        <li>Balances the body's electromagnetic field</li>
        <li>Supports emotional processing and release</li>
        <li>Enhances the body's natural healing capacity</li>
        <li>Brings the mind into a meditative, receptive state</li>
      </ul>

      <h4>The Benefits of Reiki</h4>

      <p>Research and thousands of testimonials confirm that Reiki can:</p>
      <ul>
        <li><strong>Reduce stress and anxiety</strong> by calming the nervous system</li>
        <li><strong>Relieve pain</strong> — both acute and chronic</li>
        <li><strong>Improve sleep quality</strong> and restore natural rhythms</li>
        <li><strong>Support emotional healing</strong> from grief, trauma, and loss</li>
        <li><strong>Enhance mental clarity</strong> and focus</li>
        <li><strong>Accelerate physical recovery</strong> from surgery or illness</li>
        <li><strong>Deepen spiritual connection</strong> and inner peace</li>
        <li><strong>Release suppressed emotions</strong> and energetic patterns</li>
        <li><strong>Boost immune function</strong> and overall vitality</li>
      </ul>

      <h3>Understanding the Seven Chakras</h3>

      <p>Central to energy healing is the concept of <strong>chakras</strong>—spinning wheels of energy located along the central channel of the body. The word "chakra" comes from Sanskrit, meaning "wheel" or "disk."</p>

      <p>Each chakra corresponds to specific physical, emotional, and spiritual aspects of our being. When chakras are balanced and open, energy flows freely. When they are blocked, we experience physical symptoms, emotional distress, and spiritual disconnection.</p>

      <h4>1. Root Chakra (Muladhara) — "I Am"</h4>
      
      <p><strong>Location:</strong> Base of the spine<br>
      <strong>Color:</strong> Red<br>
      <strong>Element:</strong> Earth<br>
      <strong>Function:</strong> Survival, safety, grounding, physical vitality</p>

      <p><strong>When Balanced:</strong> You feel grounded, safe, secure in your body, financially stable, and rooted in the present moment.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Chronic anxiety or fear</li>
        <li>Financial instability or survival fears</li>
        <li>Feeling ungrounded, spacey, disconnected from reality</li>
        <li>Lower back pain, leg issues, digestive problems</li>
        <li>Difficulty trusting life or feeling safe</li>
      </ul>

      <p><strong>How to Unblock:</strong> Grounding practices (walking barefoot, gardening), physical exercise, eating root vegetables, working with red crystals (garnet, red jasper), affirmations like "I am safe, I am supported."</p>

      <h4>2. Sacral Chakra (Svadhisthana) — "I Feel"</h4>
      
      <p><strong>Location:</strong> Lower abdomen, below the navel<br>
      <strong>Color:</strong> Orange<br>
      <strong>Element:</strong> Water<br>
      <strong>Function:</strong> Creativity, sexuality, emotions, pleasure, flow</p>

      <p><strong>When Balanced:</strong> You experience healthy sensuality, creative expression, emotional fluidity, and joyful connection to pleasure.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Creative blocks or lack of inspiration</li>
        <li>Sexual dysfunction or discomfort with intimacy</li>
        <li>Emotional numbness or overwhelming emotions</li>
        <li>Reproductive issues, lower back pain</li>
        <li>Difficulty experiencing pleasure or joy</li>
        <li>Feeling emotionally rigid or controlling</li>
      </ul>

      <p><strong>How to Unblock:</strong> Creative expression (art, dance, music), water therapy (baths, swimming), hip-opening yoga, sacral massage, working with orange crystals (carnelian, orange calcite), exploring healthy pleasure.</p>

      <h4>3. Solar Plexus Chakra (Manipura) — "I Do"</h4>
      
      <p><strong>Location:</strong> Upper abdomen, stomach area<br>
      <strong>Color:</strong> Yellow<br>
      <strong>Element:</strong> Fire<br>
      <strong>Function:</strong> Personal power, confidence, willpower, self-esteem</p>

      <p><strong>When Balanced:</strong> You feel confident, empowered, purposeful, and able to take action aligned with your truth.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Low self-esteem or lack of confidence</li>
        <li>Difficulty making decisions or taking action</li>
        <li>People-pleasing or inability to set boundaries</li>
        <li>Digestive issues, ulcers, chronic fatigue</li>
        <li>Perfectionism or need to control everything</li>
        <li>Feeling powerless or victimized</li>
      </ul>

      <p><strong>How to Unblock:</strong> Core-strengthening exercises, breathwork (breath of fire), spending time in sunlight, setting healthy boundaries, working with yellow crystals (citrine, tiger's eye), affirmations like "I am powerful, I trust myself."</p>

      <h4>4. Heart Chakra (Anahata) — "I Love"</h4>
      
      <p><strong>Location:</strong> Center of the chest<br>
      <strong>Color:</strong> Green (also pink)<br>
      <strong>Element:</strong> Air<br>
      <strong>Function:</strong> Love, compassion, forgiveness, connection, emotional healing</p>

      <p><strong>When Balanced:</strong> You give and receive love freely, feel compassionate toward yourself and others, and experience deep heart-centered connection.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Difficulty giving or receiving love</li>
        <li>Holding grudges, inability to forgive</li>
        <li>Fear of intimacy or abandonment</li>
        <li>Heart problems, respiratory issues, upper back pain</li>
        <li>Feeling isolated, lonely, or emotionally closed</li>
        <li>Codependency or excessive self-sacrifice</li>
      </ul>

      <p><strong>How to Unblock:</strong> Heart-opening yoga poses, loving-kindness meditation, forgiveness practices, spending time in nature, working with green/pink crystals (rose quartz, jade, malachite), giving and receiving hugs, heart-centered breathing.</p>

      <h4>5. Throat Chakra (Vishuddha) — "I Speak"</h4>
      
      <p><strong>Location:</strong> Throat<br>
      <strong>Color:</strong> Blue<br>
      <strong>Element:</strong> Ether (Sound)<br>
      <strong>Function:</strong> Communication, self-expression, truth, authenticity</p>

      <p><strong>When Balanced:</strong> You express yourself clearly and authentically, speak your truth with confidence, and listen deeply to others.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Difficulty expressing thoughts or emotions</li>
        <li>Fear of speaking up or being judged</li>
        <li>Chronic sore throat, thyroid issues</li>
        <li>Jaw tension, neck pain, teeth grinding</li>
        <li>Lying or withholding truth</li>
        <li>Talking excessively without substance</li>
      </ul>

      <p><strong>How to Unblock:</strong> Singing, chanting, journaling, speaking affirmations aloud, throat massage, working with blue crystals (aquamarine, blue lace agate), practicing authentic communication, saying "no" when needed.</p>

      <h4>6. Third Eye Chakra (Ajna) — "I See"</h4>
      
      <p><strong>Location:</strong> Between the eyebrows<br>
      <strong>Color:</strong> Indigo<br>
      <strong>Element:</strong> Light<br>
      <strong>Function:</strong> Intuition, insight, imagination, wisdom, clarity</p>

      <p><strong>When Balanced:</strong> You trust your intuition, see clearly beyond the physical, and access inner wisdom and guidance.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Difficulty trusting intuition or inner knowing</li>
        <li>Lack of clarity or vision for your life</li>
        <li>Headaches, vision problems, sinus issues</li>
        <li>Overthinking or inability to quiet the mind</li>
        <li>Nightmares or disturbed sleep</li>
        <li>Feeling disconnected from spiritual guidance</li>
      </ul>

      <p><strong>How to Unblock:</strong> Meditation, visualization practices, limiting screen time, spending time in darkness or soft candlelight, working with indigo crystals (lapis lazuli, sodalite), trusting intuitive hits, third eye massage.</p>

      <h4>7. Crown Chakra (Sahasrara) — "I Understand"</h4>
      
      <p><strong>Location:</strong> Top of the head<br>
      <strong>Color:</strong> Violet or White<br>
      <strong>Element:</strong> Cosmic energy<br>
      <strong>Function:</strong> Spiritual connection, enlightenment, divine wisdom, unity consciousness</p>

      <p><strong>When Balanced:</strong> You feel connected to something greater than yourself, experience spiritual peace, and trust in the divine flow of life.</p>

      <p><strong>Signs of Blockage:</strong></p>
      <ul>
        <li>Feeling spiritually disconnected or lost</li>
        <li>Lack of purpose or meaning</li>
        <li>Depression, apathy, or existential crisis</li>
        <li>Migraines, neurological issues</li>
        <li>Rigid thinking or closed-mindedness</li>
        <li>Materialism or spiritual bypassing</li>
      </ul>

      <p><strong>How to Unblock:</strong> Meditation, prayer, spending time in nature, silence and stillness, working with white/violet crystals (clear quartz, amethyst), connecting to a higher power or universal energy, releasing the need to control.</p>

      <h3>How Reiki Clears and Balances the Chakras</h3>

      <p>During a Reiki session, I place my hands on or above each chakra, allowing universal life force energy to flow where it is needed. The energy naturally seeks out blockages, stagnation, or imbalances and works to restore harmony.</p>

      <p>You might experience:</p>
      <ul>
        <li>Warmth, tingling, or pulsing sensations</li>
        <li>Emotional releases (tears, laughter, sighs)</li>
        <li>Visual images, colors, or memories arising</li>
        <li>Deep relaxation and a meditative state</li>
        <li>Physical sensations as energy begins to move</li>
      </ul>

      <p>Reiki doesn't force or manipulate—it simply offers the body what it needs to return to balance. Your own inner wisdom guides the healing process.</p>

      <h3>The Holistic Benefits of Regular Reiki</h3>

      <p>Reiki is not a one-time fix—it's a journey of ongoing balance and alignment. Regular Reiki sessions create:</p>
      <ul>
        <li>A cumulative clearing effect as layers of old energy are released</li>
        <li>Greater sensitivity to your own energy and needs</li>
        <li>Increased resilience to stress and energetic disruption</li>
        <li>Deeper spiritual connection and inner peace</li>
        <li>Enhanced intuition and clarity</li>
      </ul>

      <h3>Is Reiki Right for You?</h3>

      <p>Reiki is gentle, non-invasive, and safe for everyone—including children, pregnant women, and those with serious health conditions. It works beautifully alongside medical treatment, therapy, and other healing modalities.</p>

      <p>Consider Reiki if you:</p>
      <ul>
        <li>Feel energetically depleted or stuck</li>
        <li>Struggle with chronic stress or anxiety</li>
        <li>Want to deepen your spiritual practice</li>
        <li>Are navigating grief, loss, or major life transitions</li>
        <li>Experience unexplained physical symptoms</li>
        <li>Desire greater balance and inner peace</li>
      </ul>

      <p class="mt-6"><em>Experience the profound healing power of Reiki. As a Usui Reiki Ryoho Master and Holy Fire® III Reiki Master with 20+ years of practice, I offer deeply restorative sessions that honor both ancient tradition and modern understanding. Book your Energetic Recalibration session today.</em></p>
    `
  },
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
        <title>Susan K Pearson | Elemental Healing</title>
        <meta name="description" content="Susan K. Pearson — practitioner, facilitator, and witness. A space to listen, explore, and reconnect with your own capacity for balance and change. Dubai and worldwide.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Raleway:wght@200;300;400;500;600&display=swap" rel="stylesheet">

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.start'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
        <!-- End Google Tag Manager -->

        <style>
    <style>
/* ===== RESET & ROOT ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
    --black: #0a0a0a;
    --dark: #111111;
    --dark2: #1a1a1a;
    --gold: #c9a96e;
    --gold-light: #e8d5a3;
    --gold-dim: rgba(201,169,110,0.15);
    --cream: #f5f0e8;
    --white: #ffffff;
    --gray: #888888;
    --gray-light: #cccccc;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Raleway', sans-serif;
}

html { scroll-behavior: smooth; }
body {
    background: var(--black);
    color: var(--cream);
    font-family: var(--font-body);
    font-weight: 300;
    line-height: 1.8;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: 0.02em;
}

/* ===== NAVIGATION ===== */
nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 1.2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease;
    background: transparent;
}

nav.scrolled {
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,169,110,0.15);
    padding: 0.8rem 3rem;
}

.nav-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    gap: 2px;
}

.logo-box {
    width: 64px;
    height: 64px;
    background: var(--dark2);
    border: 1px solid var(--gold);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    transition: all 0.3s ease;
}
.logo-box:hover { background: var(--gold-dim); }

.logo-skp {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: var(--gold);
    letter-spacing: 0.2em;
    font-weight: 500;
}

.logo-lotus {
    font-size: 1.2rem;
    color: var(--gold);
    line-height: 1;
}

.logo-name {
    font-family: var(--font-body);
    font-size: 0.55rem;
    color: var(--gold);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 400;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: var(--cream);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 400;
    transition: color 0.3s;
    position: relative;
}
.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0;
    width: 0; height: 1px;
    background: var(--gold);
    transition: width 0.3s;
}
.nav-links a:hover { color: var(--gold); }
.nav-links a:hover::after { width: 100%; }

.nav-dropdown { position: relative; }
.nav-dropdown > a::after { display: none; }
.dropdown-menu {
    position: absolute;
    top: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    background: var(--dark2);
    border: 1px solid rgba(201,169,110,0.2);
    min-width: 220px;
    padding: 0.8rem 0;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    z-index: 100;
}
.nav-dropdown:hover .dropdown-menu {
    opacity: 1;
    pointer-events: all;
    top: calc(100% + 0.5rem);
}
.dropdown-menu a {
    display: block;
    padding: 0.6rem 1.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gray-light);
    transition: all 0.2s;
}
.dropdown-menu a:hover {
    color: var(--gold);
    background: var(--gold-dim);
    padding-left: 2rem;
}
.dropdown-menu a::after { display: none; }

.nav-caret {
    font-size: 0.6rem;
    margin-left: 0.3rem;
    color: var(--gold);
}

.btn-book {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 0.6rem 1.8rem;
    font-family: var(--font-body);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 400;
}
.btn-book:hover {
    background: var(--gold);
    color: var(--black);
}

/* ===== HERO ===== */
.hero {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    background: var(--black);
}

.hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center 20%;
    opacity: 0.92;
    transform: scale(1.05);
    animation: heroZoom 20s ease-in-out infinite alternate;
}

@keyframes heroZoom {
    from { transform: scale(1.05); }
    to { transform: scale(1.12); }
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(10,10,10,0.05) 0%,
        rgba(10,10,10,0.05) 60%,
        rgba(10,10,10,0.35) 85%,
        rgba(10,10,10,0.65) 100%
    );
}

.hero-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.particle {
    position: absolute;
    width: 1px;
    height: 1px;
    background: var(--gold);
    border-radius: 50%;
    animation: particleFloat linear infinite;
}

@keyframes particleFloat {
    0% { transform: translateY(100vh) translateX(0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.4; }
    100% { transform: translateY(-10vh) translateX(30px); opacity: 0; }
}

.hero-ornament {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    border: 1px solid rgba(201,169,110,0.08);
    border-radius: 50%;
    animation: rotateSlow 40s linear infinite;
    pointer-events: none;
}
.hero-ornament::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(201,169,110,0.05);
    border-radius: 50%;
}

@keyframes rotateSlow { to { transform: translate(-50%, -50%) rotate(360deg); } }

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    padding: 2rem 2rem 5rem;
    margin-top: 0;
}

.hero-eyebrow {
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeUp 1s ease forwards 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.hero-eyebrow::before, .hero-eyebrow::after {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--gold);
    opacity: 0.5;
}

.hero h1 {
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 300;
    line-height: 1.1;
    color: var(--white);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 1s ease forwards 0.8s;
}
.hero h1 em {
    font-style: italic;
    color: var(--gold);
}

.hero-tagline {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    color: var(--gray-light);
    letter-spacing: 0.08em;
    font-weight: 300;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeUp 1s ease forwards 1.1s;
}

.hero-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeUp 1s ease forwards 1.3s;
}
.hero-divider span { width: 60px; height: 1px; background: rgba(201,169,110,0.4); }
.hero-divider i { color: var(--gold); font-size: 0.6rem; }

.hero-cta {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 1s ease forwards 1.5s;
}

.btn-primary {
    background: var(--gold);
    color: var(--black);
    padding: 1rem 3rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}
.btn-primary:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201,169,110,0.3);
}

.btn-ghost {
    background: transparent;
    color: var(--cream);
    padding: 1rem 3rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,0.3);
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 400;
}
.btn-ghost:hover {
    border-color: var(--gold);
    color: var(--gold);
}

.hero-scroll {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--gold);
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    opacity: 0;
    animation: fadeUp 1s ease forwards 2s;
}
.scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.1); }
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== SECTION BASE ===== */
section { position: relative; }

.section-label {
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 300;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 1.5rem;
}
.section-title em { font-style: italic; color: var(--gold); }

.gold-line {
    width: 50px;
    height: 1px;
    background: var(--gold);
    margin-bottom: 2rem;
}

.section-text {
    color: var(--gray-light);
    font-size: 0.95rem;
    line-height: 1.9;
    font-weight: 300;
    max-width: 520px;
}

/* ===== STRIP DIVIDER ===== */
.strip-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2.5rem 0;
}
.strip-divider span { width: 80px; height: 1px; background: rgba(201,169,110,0.25); }
.strip-divider .lotus { color: var(--gold); font-size: 1.2rem; opacity: 0.6; }

/* ===== ABOUT SECTION ===== */
.about-section {
    padding: 8rem 5vw;
    background: var(--dark);
}

.about-grid {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
}

.about-img-container {
    position: relative;
}

.about-img-main {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    object-position: center top;
    display: block;
}

.about-img-accent {
    position: absolute;
    bottom: -3rem;
    right: -2rem;
    width: 55%;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;
    border: 4px solid var(--dark);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.about-img-frame {
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    border: 1px solid rgba(201,169,110,0.2);
    pointer-events: none;
}

.about-text { padding-bottom: 3rem; }

.credentials {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 2.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(201,169,110,0.15);
}

.credential-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--gray-light);
    letter-spacing: 0.05em;
}
.credential-dot {
    width: 4px;
    height: 4px;
    background: var(--gold);
    border-radius: 50%;
    flex-shrink: 0;
}

/* ===== SERVICES SECTION ===== */
.services-section {
    padding: 8rem 5vw;
    background: var(--black);
}

.services-header {
    max-width: 1300px;
    margin: 0 auto 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: end;
}

.services-header-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 0.5rem;
}

.services-header-right p {
    font-size: 0.85rem;
    color: var(--gray);
    max-width: 320px;
    text-align: right;
    line-height: 1.8;
}

.services-grid {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
}

.service-card {
    background: var(--dark2);
    padding: 3rem 2.5rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s ease;
    border-top: 1px solid transparent;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 0;
    background: var(--gold-dim);
    transition: height 0.4s ease;
    z-index: 0;
}

.service-card:hover {
    border-top-color: var(--gold);
}

.service-card:hover::before { height: 100%; }
.service-card > * { position: relative; z-index: 1; }

.service-number {
    font-family: var(--font-display);
    font-size: 3.5rem;
    color: rgba(201,169,110,0.1);
    font-weight: 300;
    line-height: 1;
    margin-bottom: 1.5rem;
    transition: color 0.4s;
}

.service-card:hover .service-number { color: rgba(201,169,110,0.25); }

.service-name {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 0.8rem;
    line-height: 1.3;
}

.service-duration {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
}

.service-desc {
    font-size: 0.85rem;
    color: var(--gray);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.service-price {
    font-family: var(--font-display);
    font-size: 1.8rem;
    color: var(--gold);
    font-weight: 300;
    margin-bottom: 1.5rem;
}

.service-includes {
    list-style: none;
    margin-bottom: 2rem;
}
.service-includes li {
    font-size: 0.75rem;
    color: var(--gray-light);
    padding: 0.4rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    display: flex;
    align-items: center;
    gap: 0.7rem;
}
.service-includes li::before {
    content: '—';
    color: var(--gold);
    font-size: 0.6rem;
}

.service-link {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap 0.3s;
}
.service-card:hover .service-link { gap: 1rem; }

/* ===== HEALING PHILOSOPHY (with full-width image) ===== */
.philosophy-section {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.philosophy-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/philosophy-bg.jpg');
    background-size: cover;
    background-position: center 30%;
    opacity: 0.45;
}

.philosophy-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to right,
        rgba(10,10,10,0.92) 0%,
        rgba(10,10,10,0.75) 40%,
        rgba(10,10,10,0.4) 70%,
        rgba(10,10,10,0.2) 100%
    );
}

.philosophy-content {
    position: relative;
    z-index: 2;
    max-width: 1300px;
    margin: 0 auto;
    padding: 6rem 5vw;
    max-width: 700px;
}

.philosophy-quote {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 300;
    font-style: italic;
    color: var(--white);
    line-height: 1.4;
    margin-bottom: 2rem;
}
.philosophy-quote span { color: var(--gold); }

.philosophy-attr {
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
}

/* ===== SESSION PHOTOS (Healing in action) ===== */
.healing-section {
    padding: 8rem 5vw;
    background: var(--dark);
}

.healing-inner {
    max-width: 1300px;
    margin: 0 auto;
}

.healing-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    margin-bottom: 5rem;
}

.healing-photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.healing-photo {
    overflow: hidden;
}
.healing-photo img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
}
.healing-photo:hover img { transform: scale(1.04); }
.healing-photo.tall img { height: 380px; }

/* ===== STUDIO / SPACE SECTION ===== */
.studio-section {
    padding: 0;
    background: var(--black);
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.studio-image {
    overflow: hidden;
    min-height: 600px;
}
.studio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.8s ease;
}
.studio-image:hover img { transform: scale(1.03); }

.studio-text {
    padding: 6rem 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--dark2);
}

/* ===== TESTIMONIALS ===== */
.testimonials-section {
    padding: 8rem 5vw;
    background: var(--black);
}

.testimonials-inner {
    max-width: 1300px;
    margin: 0 auto;
}

.testimonials-header {
    text-align: center;
    margin-bottom: 5rem;
}
.testimonials-header .gold-line { margin: 0 auto 2rem; }

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-bottom: 5rem;
}

.testimonial-card {
    background: var(--dark2);
    padding: 3rem 2.5rem;
    position: relative;
}

.testimonial-card::before {
    content: '"';    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-family: var(--font-display);
    font-size: 5rem;
    color: rgba(201,169,110,0.1);
    line-height: 1;
}

.testimonial-text {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.05rem;
    color: var(--gray-light);
    line-height: 1.7;
    margin-bottom: 2rem;
    font-weight: 300;
}

.testimonial-author {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
}

.testimonial-location {
    font-size: 0.7rem;
    color: var(--gray);
    margin-top: 0.3rem;
    letter-spacing: 0.05em;
}

.testimonial-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    overflow: hidden;
}

.testimonial-feature-img {
    overflow: hidden;
}
.testimonial-feature-img img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.6s ease;
}
.testimonial-feature-img:hover img { transform: scale(1.04); }

.testimonial-feature-text {
    background: var(--dark2);
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.testimonial-feature-text blockquote {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    color: var(--white);
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 2rem;
}

/* ===== GALLERY ===== */
.gallery-section {
    padding: 8rem 5vw;
    background: var(--dark);
}

.gallery-inner { max-width: 1300px; margin: 0 auto; }

.gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 320px;
    gap: 4px;
}

.gallery-item {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: var(--dark2);
}
.gallery-item::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(201,169,110,0);
    transition: background 0.3s;
    pointer-events: none;
}
.gallery-item:hover::after { background: rgba(201,169,110,0.1); }
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
}
.gallery-item:hover img { transform: scale(1.06); }

/* ===== CTA SECTION ===== */
.cta-section {
    padding: 8rem 5vw;
    background: var(--black);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%);
    pointer-events: none;
}

.cta-inner {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
}

.cta-section .section-title { font-size: clamp(2.2rem, 5vw, 4rem); }

.cta-contacts {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 3rem 0;
    flex-wrap: wrap;
}

.cta-contact-item {
    font-size: 0.8rem;
    color: var(--gray);
    letter-spacing: 0.05em;
}
.cta-contact-item a {
    color: var(--gold);
    text-decoration: none;
    transition: color 0.3s;
}
.cta-contact-item a:hover { color: var(--gold-light); }

/* ===== FOOTER ===== */
footer {
    background: var(--dark2);
    border-top: 1px solid rgba(201,169,110,0.1);
    padding: 3rem 5vw;
    text-align: center;
}

footer p {
    font-size: 0.75rem;
    color: var(--gray);
    letter-spacing: 0.05em;
    margin: 0.4rem 0;
}

footer .footer-gold { color: var(--gold); }

/* ===== ANIMATIONS ON SCROLL ===== */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
.reveal-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal-left.visible { opacity: 1; transform: translateX(0); }
.reveal-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal-right.visible { opacity: 1; transform: translateX(0); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    nav { padding: 1rem 2rem; }
    .nav-links { gap: 1.2rem; }
    .about-grid, .healing-top, .studio-section { grid-template-columns: 1fr; }
    .about-img-accent { display: none; }
    .about-img-frame { display: none; }
    .services-grid, .testimonials-grid { grid-template-columns: 1fr 1fr; }
    .testimonial-feature { grid-template-columns: 1fr; }
    .testimonial-feature-img img { height: 300px; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-item.tall img, .gallery-item img { height: 220px; }
    .services-header { grid-template-columns: 1fr; gap: 1rem; }
    .services-header-right { justify-content: flex-start; }
    .services-header-right p { text-align: left; }
    .service-card { padding: 2.2rem 1.8rem; }
}

@media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .btn-book { display: none; }
    .services-grid, .testimonials-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    .healing-photos { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.2rem; }
    .hero-ornament { width: 300px; height: 300px; }
    .cta-contacts { gap: 1.5rem; }
    .studio-text { padding: 3rem 1.5rem; }
    .hero-content { margin-top: 58vh; }
    .service-card { padding: 2rem 1.5rem; }
    .service-number { font-size: 2.5rem; }
    #services { padding: 5rem 1.2rem !important; }
    .services-grid { gap: 2px; }
}
    </style>

        </style>
        <style>
          /* ===== Entrance / Splash Gate ===== */
          #splash-gate {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            text-align: center;
            background:
              radial-gradient(circle at 50% 40%, rgba(200, 169, 116, 0.16), transparent 60%),
              linear-gradient(160deg, #050505 0%, #100E0B 55%, #050505 100%);
            opacity: 1;
            visibility: visible;
            transition: opacity 1s ease, visibility 1s ease;
          }
          #splash-gate.splash-gate-hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
          html.skp-entered #splash-gate {
            display: none;
          }
          body.gate-open {
            position: fixed;
            inset: 0;
            width: 100%;
            overflow: hidden;
          }
          .splash-content {
            max-width: 620px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .splash-daisy {
            width: 320px;
            height: 320px;
            margin-bottom: 20px;
            perspective: 1000px;
          }
          .splash-daisy-svg {
            width: 100%;
            height: 100%;
            display: block;
            overflow: visible;
            animation: splashDaisyIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) both;
          }
          @keyframes splashDaisyIn {
            0% { opacity: 0; transform: scale(0.5) rotateX(58deg); }
            55% { opacity: 1; }
            100% { opacity: 1; transform: scale(1) rotateX(11deg); }
          }
          .daisy-spin {
            transform-box: view-box;
            transform-origin: 250px 250px;
            animation: splashRotate 100s linear infinite;
            animation-delay: 2s;
          }
          @keyframes splashRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .daisy-glow {
            opacity: 0;
            animation: daisyGlowIn 2.6s ease-out 0.1s both;
          }
          @keyframes daisyGlowIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .petal {
            transform-box: view-box;
            transform-origin: 0px 0px;
            opacity: 0;
            animation-name: petalBloom;
            animation-duration: 1s;
            animation-timing-function: cubic-bezier(0.34, 1.42, 0.64, 1);
            animation-fill-mode: both;
          }
          @keyframes petalBloom {
            0% { opacity: 0; transform: scale(0.08) rotate(-34deg); }
            50% { opacity: 1; }
            72% { transform: scale(1.08) rotate(4deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          .daisy-sphere {
            transform-box: view-box;
            transform-origin: 250px 250px;
            opacity: 0;
            animation: sphereBloom 0.7s ease-out 1s both;
          }
          @keyframes sphereBloom {
            0% { opacity: 0; transform: scale(0.15); }
            60% { opacity: 1; transform: scale(1.3); }
            100% { opacity: 1; transform: scale(1); }
          }
          .splash-daisy.is-idle .splash-daisy-svg {
            animation: splashBreathe 7s ease-in-out infinite;
          }
          @keyframes splashBreathe {
            0%, 100% { transform: scale(1) rotateX(11deg); opacity: 0.97; }
            50% { transform: scale(1.035) rotateX(11deg); opacity: 1; }
          }
          .splash-eyebrow {
            font-family: 'Raleway', sans-serif;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            color: #C8A974;
            margin: 0 0 22px;
          }
          .splash-headline {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 500;
            font-size: clamp(2.5rem, 5.4vw, 4rem);
            color: #FAF7F3;
            margin: 0 0 20px;
            line-height: 1.18;
            max-width: 15ch;
          }
          .splash-subline {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-weight: 400;
            font-size: clamp(1.1rem, 2.1vw, 1.4rem);
            color: #D9CFC0;
            margin: 0 0 46px;
            line-height: 1.6;
          }
          .splash-enter {
            background: transparent;
            border: 1px solid rgba(200, 169, 116, 0.55);
            color: #FAF7F3;
            font-family: 'Raleway', sans-serif;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            padding: 16px 48px;
            cursor: pointer;
            transition: all 0.4s ease;
          }
          .splash-enter:hover,
          .splash-enter:focus-visible {
            background: rgba(200, 169, 116, 0.12);
            border-color: #D4AF37;
            color: #D4AF37;
            letter-spacing: 0.4em;
            outline: none;
          }
          @media (max-width: 480px) {
            .splash-daisy { width: 190px; height: 190px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .splash-daisy-svg,
            .daisy-spin,
            .daisy-glow,
            .petal,
            .daisy-sphere,
            .splash-daisy.is-idle .splash-daisy-svg {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
            #splash-gate { transition: none; }
          }
        </style>

        </style>
    </head>
    <body>
        <script>
          (function () {
            try {
              if (sessionStorage.getItem('skpEntered') === '1') {
                document.documentElement.classList.add('skp-entered');
              }
            } catch (e) {}
          })();
        </script>

        <!-- Entrance / Splash Gate -->
        <div id="splash-gate" role="dialog" aria-modal="true" aria-label="Enter Susan K Pearson">
          <div class="splash-content">
            <div class="splash-daisy" aria-hidden="true">
              <svg class="splash-daisy-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="splashGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.34"/>
                    <stop offset="100%" stop-color="#D4AF37" stop-opacity="0"/>
                  </radialGradient>
                  <linearGradient id="outerFill" x1="20%" y1="100%" x2="80%" y2="0%">
                    <stop offset="0%" stop-color="#0A0906" stop-opacity="0.55"/>
                    <stop offset="45%" stop-color="#3A3226" stop-opacity="0.55"/>
                    <stop offset="75%" stop-color="#FAF7F3" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#FFFDF8" stop-opacity="0.75"/>
                  </linearGradient>
                  <linearGradient id="midFill" x1="20%" y1="100%" x2="80%" y2="0%">
                    <stop offset="0%" stop-color="#5C4A22" stop-opacity="0.65"/>
                    <stop offset="50%" stop-color="#C8A974" stop-opacity="0.7"/>
                    <stop offset="100%" stop-color="#F3DFAE" stop-opacity="0.85"/>
                  </linearGradient>
                  <linearGradient id="innerFill" x1="20%" y1="100%" x2="80%" y2="0%">
                    <stop offset="0%" stop-color="#8A5A16" stop-opacity="0.8"/>
                    <stop offset="55%" stop-color="#D4AF37" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="#FFF3CE" stop-opacity="1"/>
                  </linearGradient>
                  <radialGradient id="splashCenterSphere" cx="32%" cy="28%" r="75%">
                    <stop offset="0%" stop-color="#FFFCF2"/>
                    <stop offset="30%" stop-color="#FFE9A8"/>
                    <stop offset="65%" stop-color="#D4AF37"/>
                    <stop offset="100%" stop-color="#8A5D1E"/>
                  </radialGradient>
                  <filter id="petalShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="6" stdDeviation="7" flood-color="#000000" flood-opacity="0.45"/>
                  </filter>
                  <filter id="softGlint" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.2"/>
                  </filter>
                </defs>
                <g class="daisy-spin">
                  <circle class="daisy-glow" cx="250" cy="250" r="215" fill="url(#splashGlow)"/>
                  <g transform="translate(250,250) rotate(0)">
                    <g class="petal petal-outer" style="animation-delay:0.05s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(45)">
                    <g class="petal petal-outer" style="animation-delay:0.095s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(90)">
                    <g class="petal petal-outer" style="animation-delay:0.14s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(135)">
                    <g class="petal petal-outer" style="animation-delay:0.185s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(180)">
                    <g class="petal petal-outer" style="animation-delay:0.23s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(225)">
                    <g class="petal petal-outer" style="animation-delay:0.275s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(270)">
                    <g class="petal petal-outer" style="animation-delay:0.32s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(315)">
                    <g class="petal petal-outer" style="animation-delay:0.365s">
                      <path d="M 0 0 C -20 -58.24, -29 -123.76, 0 -182 C 29 -123.76, 20 -58.24, 0 0 Z" fill="url(#outerFill)" stroke="#FAF7F3" stroke-width="1.1" stroke-linejoin="round" opacity="0.92" filter="url(#petalShadow)"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(22.5)">
                    <g class="petal petal-mid" style="animation-delay:0.42s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(67.5)">
                    <g class="petal petal-mid" style="animation-delay:0.455s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(112.5)">
                    <g class="petal petal-mid" style="animation-delay:0.49s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(157.5)">
                    <g class="petal petal-mid" style="animation-delay:0.525s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(202.5)">
                    <g class="petal petal-mid" style="animation-delay:0.56s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(247.5)">
                    <g class="petal petal-mid" style="animation-delay:0.595s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(292.5)">
                    <g class="petal petal-mid" style="animation-delay:0.63s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(337.5)">
                    <g class="petal petal-mid" style="animation-delay:0.665s">
                      <path d="M 0 0 C -15 -42.24, -22 -89.76, 0 -132 C 22 -89.76, 15 -42.24, 0 0 Z" fill="url(#midFill)" stroke="#E9CE93" stroke-width="0.9" stroke-linejoin="round" opacity="0.95"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(11.25)">
                    <g class="petal petal-inner" style="animation-delay:0.7s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(56.25)">
                    <g class="petal petal-inner" style="animation-delay:0.73s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(101.25)">
                    <g class="petal petal-inner" style="animation-delay:0.76s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(146.25)">
                    <g class="petal petal-inner" style="animation-delay:0.79s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(191.25)">
                    <g class="petal petal-inner" style="animation-delay:0.82s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(236.25)">
                    <g class="petal petal-inner" style="animation-delay:0.85s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(281.25)">
                    <g class="petal petal-inner" style="animation-delay:0.88s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <g transform="translate(250,250) rotate(326.25)">
                    <g class="petal petal-inner" style="animation-delay:0.91s">
                      <path d="M 0 0 C -10 -27.52, -15 -58.480000000000004, 0 -86 C 15 -58.480000000000004, 10 -27.52, 0 0 Z" fill="url(#innerFill)" stroke="#FFE9A8" stroke-width="0.7" stroke-linejoin="round" opacity="1"/>
                    </g>
                  </g>
                  <circle class="daisy-sphere" cx="250" cy="250" r="15" fill="url(#splashCenterSphere)"/>
                  <ellipse class="daisy-sphere daisy-glint" cx="244" cy="244" rx="5.5" ry="3.5" fill="#FFFFFF" opacity="0.85" filter="url(#softGlint)"/>
                  <circle class="daisy-sphere" cx="250" cy="250" r="22" fill="none" stroke="#D4AF37" stroke-width="0.8" opacity="0.4"/>
                </g>
              </svg>
            </div>
            <p class="splash-eyebrow">Susan K. Pearson</p>
            <h1 class="splash-headline">Stop carrying what was never yours to hold.</h1>
            <p class="splash-subline">One session can shift what years of thinking couldn't.</p>
            <button id="splash-enter-btn" class="splash-enter" type="button">Enter the Site</button>
          </div>
        </div>
        <script>
          (function () {
            var gate = document.getElementById('splash-gate');
            if (!gate) return;
            if (document.documentElement.classList.contains('skp-entered')) {
              gate.style.display = 'none';
              return;
            }
            document.body.classList.add('gate-open');
            var btn = document.getElementById('splash-enter-btn');
            var entered = false;
            function openSite() {
              if (entered) return;
              entered = true;
              gate.classList.add('splash-gate-hide');
              document.body.classList.remove('gate-open');
              try { sessionStorage.setItem('skpEntered', '1'); } catch (e) {}
              setTimeout(function () { gate.style.display = 'none'; }, 900);
            }
            if (btn) btn.addEventListener('click', openSite);
            gate.addEventListener('click', function (e) { if (e.target === gate) openSite(); });
            document.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === 'Escape') openSite();
            });
            setTimeout(function () { if (btn) btn.focus(); }, 350);
            var daisyEl = gate.querySelector('.splash-daisy');
            if (daisyEl) {
              setTimeout(function () { daisyEl.classList.add('is-idle'); }, 2050);
            }
          })();
        </script>


        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

<nav id="mainNav">
    <a href="#home" class="nav-logo" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:5px;">
        <svg width="44" height="42" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(44,52)">
            <path d="M0,-48 C-4,-32 -4,-16 0,0 C4,-16 4,-32 0,-48Z" fill="#c9a96e"/>
            <path d="M0,0 C-5,-20 -18,-38 -28,-48 C-18,-34 -8,-18 0,0Z" fill="#c9a96e" opacity="0.9"/>
            <path d="M0,0 C5,-20 18,-38 28,-48 C18,-34 8,-18 0,0Z" fill="#c9a96e" opacity="0.9"/>
            <path d="M0,0 C-10,-16 -28,-30 -44,-38 C-30,-26 -16,-12 0,0Z" fill="#c9a96e" opacity="0.75"/>
            <path d="M0,0 C10,-16 28,-30 44,-38 C30,-26 16,-12 0,0Z" fill="#c9a96e" opacity="0.75"/>
            <path d="M0,0 C-16,-8 -40,-12 -58,-12 C-40,-6 -20,-2 0,0Z" fill="#c9a96e" opacity="0.5"/>
            <path d="M0,0 C16,-8 40,-12 58,-12 C40,-6 20,-2 0,0Z" fill="#c9a96e" opacity="0.5"/>
            <line x1="-62" y1="0" x2="62" y2="0" stroke="#c9a96e" stroke-width="1" opacity="0.7"/>
            <circle cx="0" cy="-52" r="2" fill="#c9a96e"/>
          </g>
        </svg>
        <span style="font-family:'Raleway',sans-serif;font-size:0.55rem;color:#c9a96e;letter-spacing:0.3em;text-transform:uppercase;font-weight:500;line-height:1;">Susan K Pearson</span>
    </a>
    <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="nav-dropdown">
            <a href="#services">Services <span class="nav-caret">▾</span></a>
            <div class="dropdown-menu" style="min-width:280px;">
                <div style="padding:0.8rem 1.5rem 0.3rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;border-bottom:none;transition:all 0.2s;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">The Nir Levy Method</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">Holistic bodywork with Five Elements</p>
                    </a>
                </div>
                <div style="padding:0.3rem 1.5rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">Deep Alignment Therapy</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">Body, energy &amp; subconscious together</p>
                    </a>
                </div>
                <div style="padding:0.3rem 1.5rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">Hara Release</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">Anma &amp; Ampuku bodywork</p>
                    </a>
                </div>
                <div style="padding:0.3rem 1.5rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">Energetic Recalibration</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">Reiki + Chakra harmonizing</p>
                    </a>
                </div>
                <div style="padding:0.3rem 1.5rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">Subconscious Shift Therapy</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">Subconscious · Pattern · Nir Levy Method</p>
                    </a>
                </div>
                <div style="padding:0.3rem 1.5rem 0.8rem;">
                    <a href="#services" style="display:block;padding:0.6rem 0;text-decoration:none;" onmouseover="this.querySelector('p').style.color='var(--gold)'" onmouseout="this.querySelector('p').style.color='var(--white)'">
                        <p style="font-size:0.78rem;color:var(--white);font-weight:500;margin:0 0 0.2rem;letter-spacing:0.05em;transition:color 0.2s;">The Full Frequency Session</p>
                        <p style="font-size:0.68rem;color:var(--gray);margin:0;font-weight:300;">All modalities | One deep journey</p>
                    </a>
                </div>
                <div style="padding:0.8rem 1.5rem 1rem;border-top:1px solid rgba(201,169,110,0.15);margin-top:0.3rem;">
                    <a href="#services" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;font-weight:500;">View All Services →</a>
                </div>
            </div>
        </li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/cat-rescue">Cat Rescue</a></li>
        <li><a href="/intake-form">Intake Form</a></li>
    </ul>
    <button class="btn-book" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Book Session</button>
</nav>

<!-- HERO -->
<section id="home" class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-particles" id="particles"></div>
    <div class="hero-ornament"></div>
    <div class="hero-scroll">
        <div class="scroll-line"></div>
    </div>
</section>

<!-- HERO TEXT — below the image, face never covered -->
<section style="background:var(--black);padding:5rem 5vw 4rem;text-align:center;">
    <div style="max-width:780px;margin:0 auto;">
        <p style="font-family:var(--font-body);font-size:0.7rem;letter-spacing:0.4em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;opacity:0;animation:fadeUp 1s ease forwards 0.3s;">Dubai · Worldwide</p>
        <h1 style="font-family:var(--font-display);font-size:clamp(2.2rem,4.5vw,4rem);font-weight:300;color:var(--white);line-height:1.2;margin-bottom:1.5rem;opacity:0;animation:fadeUp 1s ease forwards 0.6s;">Where Attention<br>Becomes <em style="color:var(--gold);font-style:italic;">Possibility</em></h1>
        <p style="font-family:var(--font-body);font-size:0.8rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gray);margin-bottom:3rem;opacity:0;animation:fadeUp 1s ease forwards 0.9s;">Presence · Listening · The space where your own process can unfold</p>
        <div style="display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;opacity:0;animation:fadeUp 1s ease forwards 1.2s;">
            <button class="btn-primary" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Explore Working Together</button>
            <button class="btn-ghost" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">Discover the Work</button>
        </div>
    </div>
</section>


<!-- ABOUT -->
<section id="about" class="about-section">
    <div class="about-grid">
        <div class="about-img-container reveal-left">
            <img class="about-img-main" src="/images/about-main.jpg" alt="Susan K. Pearson">
            <div class="about-img-frame"></div>
        </div>
        <div class="about-text reveal-right">
            <p class="section-label">About Susan</p>
            <h2 class="section-title">The Work Begins<br>With <em>Attention</em></h2>
            <div class="gold-line"></div>
            <p class="section-text">
                I bring presence, experience, curiosity, and careful attention to what is seeking to be understood.
                I do not believe healing is something that is done to a person. Each individual carries
                an innate capacity for balance, insight, and transformation — and my role is to create the conditions
                in which that process can unfold.
            </p>
            <br>
            <p class="section-text">
                I will meet you where you are. I listen deeply, observe carefully, and support your process —
                drawing on decades of experience and a range of modalities as tools, not as the focus.
                The relationship comes first. The person comes first. The rest unfolds from there.
            </p>
            <div style="margin-top:2.5rem;padding-top:2.5rem;border-top:1px solid rgba(201,169,110,0.15);display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;">

                <!-- Credentials -->
                <div>
                    <p style="font-family:var(--font-body);font-size:0.62rem;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;">Credentials &amp; Training</p>
                    <div style="display:flex;flex-direction:column;gap:0.65rem;">
                        <div class="credential-item"><span class="credential-dot"></span>Usui Reiki Ryoho Master</div>
                        <div class="credential-item"><span class="credential-dot"></span>Holy Fire® III Reiki Master</div>
                        <div class="credential-item"><span class="credential-dot"></span>Holy Fire® III Karuna Reiki Master</div>
                        <div class="credential-item"><span class="credential-dot"></span>Nir Levy Method Therapist</div>
                        <div class="credential-item"><span class="credential-dot"></span>Certified Hypnotherapist</div>
                    </div>
                </div>

                <!-- Areas of Focus -->
                <div>
                    <p style="font-family:var(--font-body);font-size:0.62rem;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;">Areas of Focus</p>
                    <div style="display:flex;flex-direction:column;gap:0.65rem;">
                        <div class="credential-item"><span class="credential-dot"></span>Anma — Traditional Japanese Bodywork</div>
                        <div class="credential-item"><span class="credential-dot"></span>Ampuku — Japanese Abdominal Therapy</div>
                        <div class="credential-item"><span class="credential-dot"></span>Chakra Balancing &amp; Energetic Clearing</div>
                        <div class="credential-item"><span class="credential-dot"></span>Subconscious Work &amp; Pattern Release</div>
                        <div class="credential-item"><span class="credential-dot"></span>Multidimensional Therapeutic Practice</div>
                        <div class="credential-item" style="color:var(--gold);"><span style="width:4px;height:4px;background:var(--gold);border-radius:50%;flex-shrink:0;display:inline-block;margin-right:1rem;"></span>Worldwide · Remote &amp; In-Person</div>
                        <div class="credential-item" style="color:var(--gold);"><span style="width:4px;height:4px;background:var(--gold);border-radius:50%;flex-shrink:0;display:inline-block;margin-right:1rem;"></span>20+ Years Professional Experience</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<div class="strip-divider"><span></span><span class="lotus">✿</span><span></span></div>

<!-- SERVICES -->
<section id="services" style="padding:8rem 5vw;background:var(--black);">
    <div style="max-width:1300px;margin:0 auto;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:5rem;">
            <div class="reveal">
                <p class="section-label">Modalities</p>
                <h2 class="section-title">The <em>Sessions</em></h2>
                <div class="gold-line"></div>
            </div>
            <div class="reveal" style="padding-bottom:0.5rem;">
                <p style="font-size:0.85rem;color:var(--gray);line-height:1.9;max-width:420px;">Each session is uniquely tailored — I begin by listening to your body, your energy, and your story. Available in Dubai and worldwide via distance sessions.</p>
            </div>
        </div>

        <!-- SERVICE 1 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">01</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">Holistic Bodywork</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">The Nir Levy Method</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">A body-centered approach working with the Five Elements. Deep tissue work combined with energetic awareness — supporting the physical and subtle body in releasing held patterns and reorganising toward greater ease.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Five Elements</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Deep Tissue</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Energetic Release</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Somatic Awareness</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Book Session →</a>
            </div>
        </div>

        <!-- SERVICE 2 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">02</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">Body · Energy · Subconscious</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">Deep Alignment Therapy</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">A comprehensive session supporting the body, nervous system, and energy field in reorganizing toward balance. Through a blend of hara-centered bodywork, meridian balancing, subtle-energy work, and subconscious facilitation, the system is invited into clarity, regulated breath, and inner spaciousness.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Hara Bodywork</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Meridian Balancing</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Subtle Energy Work</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Subconscious Facilitation</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Schedule a Session →</a>
            </div>
        </div>

        <!-- SERVICE 3 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">03</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">Anma &amp; Ampuku</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">Hara Release</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">A grounding, body-led process focused on the abdominal center. Gentle, attentive touch supports the release of held patterns, improves internal communication, and restores connection to the body's core.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Traditional Japanese Bodywork</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Abdominal Therapy</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Core Restoration</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Learn More →</a>
            </div>
        </div>

        <!-- SERVICE 4 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">04</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">Reiki + Chakra Harmonizing</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">Energetic Recalibration</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">Reiki combined with chakra balancing to clear energetic congestion, restore flow, and support regulation across subtle body systems.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Usui Reiki</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Holy Fire® III</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Chakra Balancing</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Energetic Clearing</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Explore This Session →</a>
            </div>
        </div>

        <!-- SERVICE 5 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">05</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">Subconscious &amp; Consciousness Work</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">Subconscious Shift Therapy</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">A collaborative process working with the subconscious as an ally rather than an obstacle. Sessions support the system in updating outdated patterns, allowing new responses to emerge organically and sustainably.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Nir Levy Method</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Pattern Release</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Subconscious Repatterning</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Request an Appointment →</a>
            </div>
        </div>

        <!-- SERVICE 6 -->
        <div class="reveal" style="display:grid;grid-template-columns:220px 1fr auto;gap:3rem;align-items:start;padding:3.5rem 0;border-top:1px solid rgba(201,169,110,0.12);border-bottom:1px solid rgba(201,169,110,0.12);transition:border-color 0.3s;"
             onmouseover="this.style.borderTopColor='var(--gold)'" onmouseout="this.style.borderTopColor='rgba(201,169,110,0.12)'">
            <div>
                <p style="font-family:var(--font-display);font-size:3.5rem;color:rgba(201,169,110,0.1);font-weight:300;line-height:1;margin-bottom:0.5rem;">06</p>
                <p style="font-size:0.62rem;letter-spacing:0.28em;text-transform:uppercase;color:var(--gold);">All Modalities · One Deep Journey</p>
            </div>
            <div>
                <h3 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);font-weight:400;color:var(--white);margin-bottom:1rem;line-height:1.2;">The Full Frequency Session</h3>
                <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:580px;">The most complete offering — bringing together every modality into one immersive, deeply personalised session. For those who feel ready to go deeper. A carefully held space for whatever wants to emerge.</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:1.5rem;">
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);padding:0.3rem 0.9rem;">Signature Session</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">All Modalities</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Full Integration</span>
                    <span style="font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gray-light);border:1px solid rgba(201,169,110,0.2);padding:0.3rem 0.9rem;">Deeply Personalised</span>
                </div>
            </div>
            <div style="padding-top:0.5rem;">
                <a href="/intake-form" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;white-space:nowrap;transition:gap 0.3s;"
                   onmouseover="this.style.gap='1rem'" onmouseout="this.style.gap='0.6rem'">Enquire Now →</a>
            </div>
        </div>

        <div class="reveal" style="text-align:center;margin-top:4rem;">
            <a href="/pricing" style="display:inline-flex;align-items:center;gap:0.8rem;font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);text-decoration:none;border:1px solid rgba(201,169,110,0.3);padding:1rem 2.5rem;transition:all 0.3s;"
               onmouseover="this.style.background='var(--gold-dim)';this.style.borderColor='var(--gold)'"
               onmouseout="this.style.background='transparent';this.style.borderColor='rgba(201,169,110,0.3)'">View Pricing →</a>
        </div>

    </div>
</section>

<!-- QUOTE SECTION with full image -->
<section style="background:var(--black);display:grid;grid-template-columns:1fr 1fr;min-height:85vh;">
    <!-- Left: full image -->
    <div style="overflow:hidden;position:relative;">
        <img src="/images/philosophy-bg.jpg" 
             alt="Susan K. Pearson" 
             style="width:100%;height:100%;min-height:500px;object-fit:cover;object-position:center 20%;display:block;transition:transform 0.8s ease;"
             onmouseover="this.style.transform='scale(1.03)'"
             onmouseout="this.style.transform='scale(1)'">
        <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 60%,rgba(10,10,10,0.6) 100%);pointer-events:none;"></div>
    </div>
    <!-- Right: quote -->
    <div style="display:flex;flex-direction:column;justify-content:center;padding:6rem 5vw;background:var(--dark2);position:relative;" class="reveal-right">
        <div style="position:absolute;top:3rem;right:3rem;font-family:var(--font-display);font-size:8rem;color:rgba(201,169,110,0.06);line-height:1;pointer-events:none;">"</div>
        <div class="gold-line"></div>
        <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1.4rem,2.2vw,2.2rem);color:var(--white);line-height:1.55;font-weight:300;margin-bottom:2.5rem;">
            "I cannot fix people. What I can do is create a space where people feel safe enough
            to listen to themselves, reconnect with their own <span style="color:var(--gold);">inner resources,</span>
            and discover new possibilities for balance, insight, and change."
        </p>
        <div style="display:flex;align-items:center;gap:1rem;">
            <div style="width:30px;height:1px;background:var(--gold);"></div>
            <p style="font-family:var(--font-body);font-size:0.7rem;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);">Susan K. Pearson</p>
        </div>
    </div>
</section>

<!-- 3 PRACTICE IMAGES -->
<section style="background:var(--black);padding:6rem 0 0;">
    <div style="max-width:1300px;margin:0 auto;padding:0 5vw;">
        <div class="reveal" style="text-align:center;margin-bottom:3.5rem;">
            <p class="section-label">The Work</p>
            <h2 class="section-title">The Work, <em>in Practice</em></h2>
            <div class="gold-line" style="margin:1rem auto 0;"></div>
        </div>
    </div>

    <!-- IMAGE 1: Full-width cinematic — Photo 5, full outdoor scene -->
    <div style="position:relative;overflow:hidden;margin-bottom:4px;" class="reveal">
        <img src="/images/gallery-outdoor.jpg"
             alt="Energy healing session"
             style="width:100%;height:75vh;min-height:500px;object-fit:cover;object-position:22% 48%;display:block;transition:transform 1s ease;"
             onmouseover="this.style.transform='scale(1.02)'"
             onmouseout="this.style.transform='scale(1)'">
        <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,0.6) 0%,rgba(10,10,10,0) 40%,rgba(10,10,10,0) 70%,rgba(10,10,10,0.5) 100%);pointer-events:none;"></div>
        <div style="position:absolute;bottom:3rem;left:5vw;">
            <p style="font-family:var(--font-display);font-size:clamp(1.2rem,2.5vw,2rem);color:var(--white);font-style:italic;margin:0 0 0.5rem;font-weight:300;">The Work in Practice</p>
            <div style="display:flex;align-items:center;gap:0.8rem;">
                <div style="width:30px;height:1px;background:var(--gold);"></div>
                <p style="font-size:0.65rem;letter-spacing:0.3em;color:var(--gold);text-transform:uppercase;margin:0;">Nir Levy Method · Bodywork · Energy Work</p>
            </div>
        </div>
    </div>

    <!-- IMAGES 2 & 3: Side by side, tall — Photo 4 portrait + Photo 6 landscape -->
    <div style="display:grid;grid-template-columns:55fr 45fr;gap:4px;">

        <!-- Photo 4: portrait — face at top, hands at bottom. Use very tall height + show full portrait -->
        <div style="position:relative;overflow:hidden;" class="reveal-left">
            <img src="/images/gallery-portrait.jpg"
                 alt="Susan K. Pearson close-up healing"
                 style="width:100%;height:80vh;min-height:600px;object-fit:cover;object-position:50% 28%;display:block;transition:transform 1s ease;"
                 onmouseover="this.style.transform='scale(1.02)'"
                 onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,0.85) 0%,rgba(10,10,10,0) 45%);pointer-events:none;"></div>
            <div style="position:absolute;bottom:3rem;left:3rem;">
                <p style="font-family:var(--font-display);font-size:clamp(1.2rem,2vw,1.8rem);color:var(--white);font-style:italic;margin:0 0 0.5rem;font-weight:300;">One-to-One Sessions</p>
                <div style="display:flex;align-items:center;gap:0.8rem;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <p style="font-size:0.62rem;letter-spacing:0.25em;color:var(--gold);text-transform:uppercase;margin:0;">In-Person · Dubai Studio</p>
                </div>
            </div>
        </div>

        <!-- Photo 6: landscape — Susan leaning over client, pull to left to show her face & hands -->
        <div style="position:relative;overflow:hidden;" class="reveal-right">
            <img src="/images/gallery-landscape.jpg"
                 alt="Healing session"
                 style="width:100%;height:80vh;min-height:600px;object-fit:cover;object-position:12% 45%;display:block;transition:transform 1s ease;"
                 onmouseover="this.style.transform='scale(1.02)'"
                 onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,0.85) 0%,rgba(10,10,10,0) 45%);pointer-events:none;"></div>
            <div style="position:absolute;bottom:3rem;left:3rem;">
                <p style="font-family:var(--font-display);font-size:clamp(1.2rem,2vw,1.8rem);color:var(--white);font-style:italic;margin:0 0 0.5rem;font-weight:300;">The Work in Nature</p>
                <div style="display:flex;align-items:center;gap:0.8rem;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <p style="font-size:0.62rem;letter-spacing:0.25em;color:var(--gold);text-transform:uppercase;margin:0;">Outdoor &amp; Retreat Sessions</p>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- ROOMS & WORKING SPACE -->
<section style="background:var(--dark);">
    <div style="max-width:1300px;margin:0 auto;padding:6rem 5vw 3rem;">
        <div class="reveal" style="text-align:center;margin-bottom:3.5rem;">
            <p class="section-label">The Space</p>
            <h2 class="section-title">The <em>Sanctuary</em></h2>
            <div class="gold-line" style="margin:1rem auto 0;"></div>
        </div>
    </div>
    <!-- Full-width studio image -->
    <div style="overflow:hidden;max-height:70vh;" class="reveal">
        <img src="/images/sanctuary-studio.jpg" alt="The SKP Healing Studio" style="width:100%;height:70vh;object-fit:cover;object-position:center 40%;display:block;transition:transform 0.8s ease;">
    </div>
    <!-- Side by side: studio detail + text -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
        <div style="overflow:hidden;" class="reveal-left">
            <img src="/images/sanctuary-detail.jpg" alt="Studio detail" style="width:100%;height:100%;min-height:500px;object-fit:cover;object-position:center;display:block;transition:transform 0.8s ease;">
        </div>
        <div style="padding:5rem 5vw;background:var(--dark2);display:flex;flex-direction:column;justify-content:center;" class="reveal-right">
            <p class="section-label">Dubai Studio</p>
            <h3 style="font-family:var(--font-display);font-size:clamp(1.8rem,3vw,2.8rem);font-weight:300;color:var(--white);line-height:1.3;margin-bottom:1.5rem;">A space designed to hold <em style="color:var(--gold);font-style:italic;">whatever you bring</em></h3>
            <div class="gold-line"></div>
            <p class="section-text">
                Every detail of the studio has been intentionally curated — from the gallery of black-and-white portraits to the crystals, aromatherapy, and the plush treatment table — to support the nervous system and invite profound states of receptivity.
            </p>
            <br>
            <p class="section-text">
                Private, discreet, and considered. A space where something genuine can unfold.
            </p>
            <div style="margin-top:2.5rem;display:flex;gap:1.5rem;flex-wrap:wrap;">
                <button class="btn-primary" onclick="window.location.href='/intake-form'">Begin an Enquiry</button>
                <button class="btn-ghost" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">Explore the Sessions</button>
            </div>
        </div>
    </div>
</section>

<!-- TESTIMONIALS -->
<section style="background:var(--black);padding:8rem 5vw;">
    <div style="max-width:1300px;margin:0 auto;">

        <!-- Header -->
        <div class="reveal" style="text-align:center;margin-bottom:5rem;">
            <p class="section-label">Client Voices</p>
            <h2 class="section-title">What Clients <em>Say</em></h2>
            <div class="gold-line" style="margin:1rem auto 0;"></div>
        </div>

        <!-- Carousel wrapper -->
        <div style="position:relative;">

            <!-- Prev button -->
            <button onclick="prevSlide()" style="position:absolute;left:0;top:50%;transform:translateY(-50%);z-index:10;background:none;border:1px solid rgba(201,169,110,0.3);color:var(--gold);width:48px;height:48px;cursor:pointer;font-size:1.2rem;transition:all 0.3s;display:flex;align-items:center;justify-content:center;"
                    onmouseover="this.style.background='var(--gold-dim)';this.style.borderColor='var(--gold)'"
                    onmouseout="this.style.background='none';this.style.borderColor='rgba(201,169,110,0.3)'">‹</button>

            <!-- Slides container -->
            <div id="t-track" style="min-height:380px;display:flex;align-items:center;justify-content:center;padding:0 4rem;">

            <div class="t-slide" data-index="0" style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 4vw;max-width:800px;margin:0 auto;animation:fadeIn 0.5s ease;">
                <!-- Avatar -->
                <div style="width:110px;height:110px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);background:var(--black);margin-bottom:2rem;flex-shrink:0;">
                    <img src="/images/testimonial-1.jpg" 
                         style="width:110px;height:110px;object-fit:none;object-position:27% 68%;display:block;">
                </div>
                <!-- Stars -->
                <p style="color:var(--gold);font-size:1rem;letter-spacing:0.2em;margin-bottom:1.8rem;">★★★★★</p>
                <!-- Quote -->
                <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1rem,1.8vw,1.4rem);color:var(--white);line-height:1.75;font-weight:300;margin-bottom:2.5rem;">
                    "I felt seen, heard, and held in a way I had never experienced before. Susan's depth of understanding, combined with her intuitive awareness of exactly what I needed, created profound shifts that I can only describe as miraculous. Her Deep Alignment sessions helped me release patterns I didn't even know I was holding. The integration of Anma, Reiki, and body-led awareness is seamless and extraordinary. I've recommended her to everyone I know — she is truly exceptional."
                </p>
                <!-- Author -->
                <div style="display:flex;align-items:center;gap:1rem;justify-content:center;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <div>
                        <p style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin:0;">Lisa M.</p>
                        <p style="font-size:0.7rem;color:var(--gray);margin:0.25rem 0 0;letter-spacing:0.05em;">Ireland · Deep Alignment Sessions</p>
                    </div>
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                </div>
            </div>
            <div class="t-slide" data-index="1" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:0 4vw;max-width:800px;margin:0 auto;animation:fadeIn 0.5s ease;">
                <!-- Avatar -->
                <div style="width:110px;height:110px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);background:var(--black);margin-bottom:2rem;flex-shrink:0;">
                    <img src="/images/testimonial-2.jpg" 
                         style="width:110px;height:110px;object-fit:none;object-position:50% 82%;display:block;">
                </div>
                <!-- Stars -->
                <p style="color:var(--gold);font-size:1rem;letter-spacing:0.2em;margin-bottom:1.8rem;">★★★★★</p>
                <!-- Quote -->
                <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1rem,1.8vw,1.4rem);color:var(--white);line-height:1.75;font-weight:300;margin-bottom:2.5rem;">
                    "I went into the session carrying a fair amount of stress, and left feeling deeply elevated, grounded, and restored. What stood out most was the profound sense of safety she creates. I rarely allow myself to fully let go in sessions, yet I found myself completely relaxed — I even fell asleep, which almost never happens for me. Susan has a very calming, genuine, and reassuring presence. Her energy allows your nervous system to truly unwind and reset."
                </p>
                <!-- Author -->
                <div style="display:flex;align-items:center;gap:1rem;justify-content:center;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <div>
                        <p style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin:0;">S.B.</p>
                        <p style="font-size:0.7rem;color:var(--gray);margin:0.25rem 0 0;letter-spacing:0.05em;">Canada · Dubai · Nir Levi Method Session</p>
                    </div>
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                </div>
            </div>
            <div class="t-slide" data-index="2" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:0 4vw;max-width:800px;margin:0 auto;animation:fadeIn 0.5s ease;">
                <!-- Avatar -->
                <div style="width:110px;height:110px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);background:var(--black);margin-bottom:2rem;flex-shrink:0;">
                    <img src="/images/testimonial-3.jpg" 
                         style="width:110px;height:110px;object-fit:none;object-position:50% 55%;display:block;">
                </div>
                <!-- Stars -->
                <p style="color:var(--gold);font-size:1rem;letter-spacing:0.2em;margin-bottom:1.8rem;">★★★★★</p>
                <!-- Quote -->
                <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1rem,1.8vw,1.4rem);color:var(--white);line-height:1.75;font-weight:300;margin-bottom:2.5rem;">
                    "All these sessions have been an opportunity for profound learning in letting go and experiencing total well-being. Susan's voice, her expertise, her gentleness, and her kindness carry you toward serenity. This has significantly increased my ability to manage my emotions, and as a result, the quality of my sleep has improved. I highly recommend these sessions to anyone seeking to reconnect with themselves."
                </p>
                <!-- Author -->
                <div style="display:flex;align-items:center;gap:1rem;justify-content:center;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <div>
                        <p style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin:0;">Carole Damour</p>
                        <p style="font-size:0.7rem;color:var(--gray);margin:0.25rem 0 0;letter-spacing:0.05em;">France · Reiki Sessions</p>
                    </div>
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                </div>
            </div>
            <div class="t-slide" data-index="3" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:0 4vw;max-width:800px;margin:0 auto;animation:fadeIn 0.5s ease;">
                <!-- Avatar -->
                <div style="width:110px;height:110px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);background:var(--black);margin-bottom:2rem;flex-shrink:0;">
                    <img src="/images/testimonial-4.jpg" 
                         style="width:110px;height:110px;object-fit:none;object-position:50% 41%;display:block;">
                </div>
                <!-- Stars -->
                <p style="color:var(--gold);font-size:1rem;letter-spacing:0.2em;margin-bottom:1.8rem;">★★★★★</p>
                <!-- Quote -->
                <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1rem,1.8vw,1.4rem);color:var(--white);line-height:1.75;font-weight:300;margin-bottom:2.5rem;">
                    "Susan creates a calm, grounded environment where you immediately feel at ease. Her approach is intuitive and tailored, combining different techniques in a way that feels both seamless and highly effective. I was able to fully switch off during the session, which is not always easy for me. I left feeling deeply relaxed, rebalanced, and lighter overall. A truly refined and restorative experience. I would return without hesitation."
                </p>
                <!-- Author -->
                <div style="display:flex;align-items:center;gap:1rem;justify-content:center;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <div>
                        <p style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin:0;">Matthieu</p>
                        <p style="font-size:0.7rem;color:var(--gray);margin:0.25rem 0 0;letter-spacing:0.05em;">Dubai · Deep Alignment</p>
                    </div>
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                </div>
            </div>
            <div class="t-slide" data-index="4" style="display:none;flex-direction:column;align-items:center;text-align:center;padding:0 4vw;max-width:800px;margin:0 auto;animation:fadeIn 0.5s ease;">
                <!-- Avatar -->
                <div style="width:110px;height:110px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);background:var(--black);margin-bottom:2rem;flex-shrink:0;">
                    <img src="/images/testimonial-5.jpg" 
                         style="width:110px;height:110px;object-fit:none;object-position:18% 100%;display:block;">
                </div>
                <!-- Stars -->
                <p style="color:var(--gold);font-size:1rem;letter-spacing:0.2em;margin-bottom:1.8rem;">★★★★★</p>
                <!-- Quote -->
                <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1rem,1.8vw,1.4rem);color:var(--white);line-height:1.75;font-weight:300;margin-bottom:2.5rem;">
                    "Receiving a session from Susan felt something unique — each and every time. There's a softness and ease in how she works, but at the same time you can feel the depth and experience behind it. What I love most is how she blends energy work with the Nir Levi Method in her own unique way — no two sessions feel the same. She really tunes into what you and your soul need in that moment. Bonus is the elegance of her space. Thank you dear Susan!"
                </p>
                <!-- Author -->
                <div style="display:flex;align-items:center;gap:1rem;justify-content:center;">
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                    <div>
                        <p style="font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin:0;">Pırıl</p>
                        <p style="font-size:0.7rem;color:var(--gray);margin:0.25rem 0 0;letter-spacing:0.05em;">Istanbul, Turkey · Energy + Nir Levi</p>
                    </div>
                    <div style="width:30px;height:1px;background:var(--gold);"></div>
                </div>
            </div>
            </div>

            <!-- Next button -->
            <button onclick="nextSlide()" style="position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:10;background:none;border:1px solid rgba(201,169,110,0.3);color:var(--gold);width:48px;height:48px;cursor:pointer;font-size:1.2rem;transition:all 0.3s;display:flex;align-items:center;justify-content:center;"
                    onmouseover="this.style.background='var(--gold-dim)';this.style.borderColor='var(--gold)'"
                    onmouseout="this.style.background='none';this.style.borderColor='rgba(201,169,110,0.3)'">›</button>

        </div>

        <!-- Dot indicators -->
        <div style="display:flex;align-items:center;justify-content:center;gap:0.6rem;margin-top:3rem;">
            <button class="t-dot" data-i="0" onclick="goTo(0)" style="width:28px;height:8px;border-radius:4px;background:var(--gold);border:none;cursor:pointer;transition:all 0.4s ease;padding:0;"></button><button class="t-dot" data-i="1" onclick="goTo(1)" style="width:8px;height:8px;border-radius:4px;background:rgba(201,169,110,0.25);border:none;cursor:pointer;transition:all 0.4s ease;padding:0;"></button><button class="t-dot" data-i="2" onclick="goTo(2)" style="width:8px;height:8px;border-radius:4px;background:rgba(201,169,110,0.25);border:none;cursor:pointer;transition:all 0.4s ease;padding:0;"></button><button class="t-dot" data-i="3" onclick="goTo(3)" style="width:8px;height:8px;border-radius:4px;background:rgba(201,169,110,0.25);border:none;cursor:pointer;transition:all 0.4s ease;padding:0;"></button><button class="t-dot" data-i="4" onclick="goTo(4)" style="width:8px;height:8px;border-radius:4px;background:rgba(201,169,110,0.25);border:none;cursor:pointer;transition:all 0.4s ease;padding:0;"></button>
        </div>

        <!-- Stats bar -->
        <div class="reveal" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-top:5rem;">
            <div style="background:var(--dark2);padding:2.5rem;text-align:center;">
                <p style="font-family:var(--font-display);font-size:clamp(2rem,4vw,3.5rem);color:var(--gold);font-weight:300;margin:0 0 0.5rem;">20+</p>
                <p style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gray);margin:0;">Years of Experience</p>
            </div>

            <div style="background:var(--dark2);padding:2.5rem;text-align:center;">
                <p style="font-family:var(--font-display);font-size:clamp(2rem,4vw,3.5rem);color:var(--gold);font-weight:300;margin:0 0 0.5rem;">∞</p>
                <p style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gray);margin:0;">Continued Learning</p>
            </div>
            <div style="background:var(--dark2);padding:2.5rem;text-align:center;">
                <p style="font-family:var(--font-display);font-size:clamp(2rem,4vw,3.5rem);color:var(--gold);font-weight:300;margin:0 0 0.5rem;">20+</p>
                <p style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gray);margin:0;">Countries</p>
            </div>
        </div>

    </div>
</section>

<style>
@keyframes fadeIn {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
}
</style>

<script>
(function() {
    let current = 0;
    const total = 5;
    const slides = document.querySelectorAll('.t-slide');
    const dots   = document.querySelectorAll('.t-dot');
    let autoTimer;

    function goTo(n) {
        slides[current].style.display = 'none';
        dots[current].style.width = '8px';
        dots[current].style.background = 'rgba(201,169,110,0.25)';
        current = (n + total) % total;
        slides[current].style.display = 'flex';
        slides[current].style.animation = 'none';
        slides[current].offsetHeight; // reflow
        slides[current].style.animation = 'fadeIn 0.5s ease';
        dots[current].style.width = '28px';
        dots[current].style.background = 'var(--gold)';
        resetAuto();
    }

    function nextSlide() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }

    function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo(current + 1), 6000);
    }

    // Expose globally for inline onclick
    window.goTo = goTo;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    // Swipe support
    const track = document.getElementById('t-track');
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
    }, {passive:true});

    resetAuto();
})();
</script>

<!-- GALLERY -->

<section id="cta" class="cta-section">
    <div style="max-width:700px;margin:0 auto;text-align:center;padding:8rem 5vw;">
        <p class="section-label reveal">Get in Touch</p>
        <h2 class="section-title reveal">Ready to <em>Begin</em>?</h2>
        <div class="gold-line reveal" style="margin: 0 auto 2rem;"></div>
        <p class="section-text reveal" style="max-width: 500px; margin: 0 auto 2rem; text-align: center;">
            Every process begins with a conversation. Reach out to explore how we might work together.
        </p>
        <div class="cta-contacts reveal">
            <div class="cta-contact-item">✉ <a href="mailto:susankpearson@elementalskp.com">susankpearson@elementalskp.com</a></div>
            <div class="cta-contact-item">☎ <a href="tel:+971551770957">+971 55 177 0957</a></div>
        </div>
        <div style="display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;" class="reveal">
            <button class="btn-primary" onclick="window.location.href='/intake-form'">Begin an Enquiry</button>
            <button class="btn-ghost" onclick="window.location.href='/intake-form'">Complete Intake Form</button>
        </div>
    </div>
</section>

<!-- PERSONAL NOTE -->
<section style="background:var(--dark2);padding:7rem 5vw;border-top:1px solid rgba(201,169,110,0.1);">
    <div style="max-width:760px;margin:0 auto;text-align:center;" class="reveal">
        <p class="section-label">Beyond the Studio</p>
        <div class="gold-line" style="margin:1rem auto 2.5rem;"></div>
        <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1.1rem,1.8vw,1.5rem);color:var(--white);line-height:1.7;font-weight:300;margin-bottom:2rem;">
            Beyond my professional work, I share my life with a large family of rescued cats and am actively involved in supporting abandoned and vulnerable animals throughout the UAE.
        </p>
        <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:600px;margin:0 auto;">
            People often describe this as rescue work. But the truth is that the relationship is far more mutual than that.
            While I help provide care, safety, and support, these animals have given me just as much in return —
            teaching me patience, presence, resilience, and unconditional acceptance.
            In many ways, they rescue me too.
        </p>
        <p style="font-size:0.9rem;color:var(--gray);line-height:1.9;max-width:600px;margin:1.5rem auto 0;">
            The same philosophy appears everywhere in my life: I do not approach from the position of someone who already knows.
            I approach with curiosity, openness, and a willingness to be changed by what I encounter.
            I have learned as much from the beings I have cared for as from any teacher, training, or certification.
        </p>
        <div style="margin-top:2.5rem;">
            <a href="/cat-rescue" style="display:inline-flex;align-items:center;gap:0.6rem;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;border:1px solid rgba(201,169,110,0.3);padding:0.9rem 2rem;transition:all 0.3s;"
               onmouseover="this.style.background='var(--gold-dim)';this.style.borderColor='var(--gold)'"
               onmouseout="this.style.background='transparent';this.style.borderColor='rgba(201,169,110,0.3)'">The Cat Rescue Work →</a>
        </div>
    </div>
</section>


<!-- ANIMAL ADVOCATE INITIATIVE -->
<section style="background:var(--black);padding:8rem 5vw;text-align:center;border-top:1px solid rgba(201,169,110,0.1);">
    <div style="max-width:640px;margin:0 auto;" class="reveal">
        <div style="margin-bottom:2rem;display:flex;justify-content:center;">${daisyIcon(64, '#f5f0e8', '#c9a96e')}</div>
        <p class="section-label">An Initiative by Susan K. Pearson</p>
        <h2 class="section-title" style="margin-bottom:1.2rem;">Animal Advocate <em>Initiative</em></h2>
        <div class="gold-line" style="margin:0 auto 2rem;"></div>
        <p style="font-family:var(--font-display);font-style:italic;font-size:clamp(1.1rem,1.8vw,1.4rem);color:var(--gold-light);margin-bottom:1.8rem;">Honoring Life. Respecting All Creatures.</p>
        <p class="section-text" style="max-width:520px;margin:0 auto 2.5rem;">
            To create the conditions in which life — in all its forms — can flourish with dignity.
            A sustainable framework of compassion, stewardship, and respect for every being.
        </p>
        <a href="/cat-rescue#initiative" class="btn-ghost" style="text-decoration:none;display:inline-block;">Meet the Cats We're Rescuing</a>
    </div>
</section>

<!-- FOOTER -->
<footer style="background:var(--dark2);border-top:1px solid rgba(201,169,110,0.12);">

    <!-- Session info bar -->
    <div style="background:var(--dark);border-bottom:1px solid rgba(201,169,110,0.1);padding:1.2rem 5vw;">
        <div style="max-width:1300px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:2rem;">
            <div style="display:flex;align-items:center;gap:0.7rem;">
                <span style="color:var(--gold);font-size:0.7rem;">✦</span>
                <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gray-light);margin:0;">All sessions include pre-session consultation &amp; post-session integration support</p>
            </div>
            <div style="width:1px;height:16px;background:rgba(201,169,110,0.2);"></div>
            <div style="display:flex;align-items:center;gap:0.7rem;">
                <span style="color:var(--gold);font-size:0.7rem;">✦</span>
                <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gray-light);margin:0;">Cash &amp; Bank Transfer Accepted</p>
            </div>
            <div style="width:1px;height:16px;background:rgba(201,169,110,0.2);"></div>
            <div style="display:flex;align-items:center;gap:0.7rem;">
                <span style="color:var(--gold);font-size:0.7rem;">✦</span>
                <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gray-light);margin:0;">48-Hour Cancellation Policy</p>
            </div>
            <div style="width:1px;height:16px;background:rgba(201,169,110,0.2);"></div>
            <div style="display:flex;align-items:center;gap:0.7rem;">
                <span style="color:var(--gold);font-size:0.7rem;">✦</span>
                <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gray-light);margin:0;">Worldwide Practice</p>
            </div>
        </div>
    </div>

    <!-- Main footer grid -->
    <div style="max-width:1300px;margin:0 auto;padding:5rem 5vw 3rem;display:grid;grid-template-columns:1.5fr 1fr 1fr 1.2fr;gap:4rem;">

        <!-- Brand column -->
        <div>
            <div style="margin-bottom:1.8rem;">
                <div style="width:72px;height:72px;background:var(--black);border:1px solid var(--gold);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:8px;">
                    <svg width="44" height="40" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(44,52)">
                        <path d="M0,-48 C-4,-32 -4,-16 0,0 C4,-16 4,-32 0,-48Z" fill="#c9a96e"/>
                        <path d="M0,0 C-5,-20 -18,-38 -28,-48 C-18,-34 -8,-18 0,0Z" fill="#c9a96e" opacity="0.9"/>
                        <path d="M0,0 C5,-20 18,-38 28,-48 C18,-34 8,-18 0,0Z" fill="#c9a96e" opacity="0.9"/>
                        <path d="M0,0 C-10,-16 -28,-30 -44,-38 C-30,-26 -16,-12 0,0Z" fill="#c9a96e" opacity="0.75"/>
                        <path d="M0,0 C10,-16 28,-30 44,-38 C30,-26 16,-12 0,0Z" fill="#c9a96e" opacity="0.75"/>
                        <path d="M0,0 C-16,-8 -40,-12 -58,-12 C-40,-6 -20,-2 0,0Z" fill="#c9a96e" opacity="0.5"/>
                        <path d="M0,0 C16,-8 40,-12 58,-12 C40,-6 20,-2 0,0Z" fill="#c9a96e" opacity="0.5"/>
                        <line x1="-62" y1="0" x2="62" y2="0" stroke="#c9a96e" stroke-width="1" opacity="0.7"/>
                        <circle cx="0" cy="-52" r="2" fill="#c9a96e"/>
                      </g>
                    </svg>
                    <span style="font-family:'Raleway',sans-serif;font-size:0.42rem;color:#c9a96e;letter-spacing:0.22em;text-transform:uppercase;font-weight:500;">Susan K Pearson</span>
                </div>
            </div>
            <p style="font-size:0.85rem;color:var(--gray);line-height:1.9;margin-bottom:1.5rem;max-width:280px;">Practitioner · Facilitator · Witness. Creating the conditions in which your own process can unfold.</p>
            <p style="font-size:0.78rem;color:var(--gray-light);">Dubai, UAE · Available Worldwide</p>
            <p style="font-size:0.78rem;margin-top:0.4rem;"><a href="mailto:susankpearson@elementalskp.com" style="color:var(--gold);text-decoration:none;">susankpearson@elementalskp.com</a></p>
            <p style="font-size:0.78rem;margin-top:0.3rem;"><a href="tel:+971551770957" style="color:var(--gray-light);text-decoration:none;">+971 55 177 0957</a></p>
        </div>

        <!-- Navigation -->
        <div>
            <p style="font-size:0.62rem;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;">Navigation</p>
            <div style="display:flex;flex-direction:column;gap:0.7rem;">
                <a href="/" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Home</a>
                <a href="/#about" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">About</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Services</a>
                <a href="/pricing" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Pricing</a>
                <a href="/blog" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Blog</a>
                <a href="/faq" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">FAQ</a>
                <a href="/intake-form" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Intake Form</a>
            </div>
        </div>

        <!-- Services -->
        <div>
            <p style="font-size:0.62rem;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;">Services</p>
            <div style="display:flex;flex-direction:column;gap:0.7rem;">
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">The Nir Levy Method</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Deep Alignment Therapy</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Hara Release</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Energetic Recalibration</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gray-light);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray-light)'">Subconscious Shift Therapy</a>
                <a href="/#services" style="font-size:0.82rem;color:var(--gold);text-decoration:none;font-weight:500;">The Full Frequency Session</a>
            </div>
        </div>

        <!-- Cat Rescue -->
        <div>
            <p style="font-size:0.62rem;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;">🐾 Cat Rescue</p>
            <p style="font-size:0.82rem;color:var(--gray);line-height:1.85;margin-bottom:1.2rem;">Susan is also committed to supporting abandoned and street cats in the UAE. A portion of session proceeds contributes to rescue, medical care, and rehoming efforts for vulnerable animals in the local community.</p>
            <a href="/cat-rescue" style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:gap 0.3s;"
               onmouseover="this.style.gap='0.9rem'" onmouseout="this.style.gap='0.5rem'">Learn More →</a>
        </div>

    </div>

    <!-- Bottom bar -->
    <div style="border-top:1px solid rgba(201,169,110,0.1);padding:1.5rem 5vw;">
        <div style="max-width:1300px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <p style="font-size:0.72rem;color:var(--gray);">© 2026 Susan K. Pearson. All rights reserved.</p>
            <p style="font-size:0.72rem;color:var(--gray);">Dubai, UAE · <a href="/" style="color:var(--gray);text-decoration:none;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--gray)'">Privacy Policy</a></p>
        </div>
    </div>

</footer>

<script>
// Scroll animations
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => observer.observe(el));

// Nav scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Particles
const container = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = \`
        width: \${size}px;
        height: \${size}px;
        left: \${Math.random() * 100}%;
        animation-duration: \${Math.random() * 15 + 8}s;
        animation-delay: \${Math.random() * 10}s;
        opacity: \${Math.random() * 0.5 + 0.2};
    \`;
    container.appendChild(p);
}

// Practice image hover
document.querySelectorAll('.practice-img-hover').forEach(img => {
    img.parentElement.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
    img.parentElement.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});

</script>

<!-- FLOATING CHAT BUTTONS -->
<div style="position:fixed;bottom:2rem;right:2rem;display:flex;flex-direction:column;gap:0.8rem;z-index:9999;">

    <!-- AI Chat button -->
    <button onclick="toggleAiChat()"
            title="Chat with AI Assistant"
            style="width:52px;height:52px;border-radius:50%;background:#c9a96e;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.4);transition:transform 0.2s,box-shadow 0.2s;"
            onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 25px rgba(201,169,110,0.4)'"
            onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.4)'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#0a0a0a"/>
            <circle cx="8" cy="10" r="1.2" fill="#c9a96e"/>
            <circle cx="12" cy="10" r="1.2" fill="#c9a96e"/>
            <circle cx="16" cy="10" r="1.2" fill="#c9a96e"/>
        </svg>
    </button>

    <!-- WhatsApp button -->
    <a href="https://wa.me/971551770957" target="_blank"
       title="Chat on WhatsApp"
       style="width:52px;height:52px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.4);transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;"
       onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 25px rgba(37,211,102,0.4)'"
       onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 20px rgba(0,0,0,0.4)'">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    </a>

</div>

<!-- AI Chat Widget -->
<div id="ai-chat-widget" style="display:none;position:fixed;bottom:7rem;right:2rem;width:360px;max-height:500px;background:var(--dark2);border:1px solid rgba(201,169,110,0.2);box-shadow:0 20px 60px rgba(0,0,0,0.6);z-index:9998;flex-direction:column;border-radius:2px;">
    <div style="padding:1.2rem 1.5rem;border-bottom:1px solid rgba(201,169,110,0.1);display:flex;justify-content:space-between;align-items:center;">
        <div>
            <p style="font-family:var(--font-display);font-size:1rem;color:var(--white);margin:0;">Ask Susan's Assistant</p>
            <p style="font-size:0.65rem;color:var(--gold);margin:0;letter-spacing:0.1em;">Powered by AI · Available 24/7</p>
        </div>
        <button onclick="toggleAiChat()" style="background:none;border:none;color:var(--gray);cursor:pointer;font-size:1.2rem;padding:0.2rem;">×</button>
    </div>
    <div id="chat-messages" style="flex:1;overflow-y:auto;padding:1.2rem;display:flex;flex-direction:column;gap:0.8rem;min-height:200px;max-height:300px;">
        <div style="background:rgba(201,169,110,0.08);padding:0.9rem 1.1rem;border-radius:0 8px 8px 8px;max-width:85%;">
            <p style="font-size:0.82rem;color:var(--gray-light);margin:0;line-height:1.6;">Hello! I'm here to help you learn about Susan's work, sessions, pricing, and availability. What would you like to know?</p>
        </div>
    </div>
    <div style="padding:1rem;border-top:1px solid rgba(201,169,110,0.1);display:flex;gap:0.6rem;">
        <input id="chat-input" type="text" placeholder="Ask a question..."
               style="flex:1;padding:0.7rem 1rem;background:var(--black);border:1px solid rgba(201,169,110,0.2);color:var(--cream);font-family:var(--font-body);font-size:0.82rem;outline:none;border-radius:0;"
               onfocus="this.style.borderColor='var(--gold)'" onblur="this.style.borderColor='rgba(201,169,110,0.2)'"
               onkeydown="if(event.key==='Enter') sendChat()">
        <button onclick="sendChat()" style="background:var(--gold);border:none;color:var(--black);padding:0.7rem 1.1rem;cursor:pointer;font-size:0.8rem;font-weight:600;transition:background 0.2s;"
                onmouseover="this.style.background='var(--gold-light)'" onmouseout="this.style.background='var(--gold)'">→</button>
    </div>
</div>

<script>
function toggleAiChat() {
    const w = document.getElementById('ai-chat-widget');
    w.style.display = w.style.display === 'none' ? 'flex' : 'none';
    if (w.style.display === 'flex') {
        document.getElementById('chat-input').focus();
    }
}

async function sendChat() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const text = input.value.trim();
    if (!text) return;

    // User bubble
    const userBubble = document.createElement('div');
    userBubble.style.cssText = 'background:rgba(201,169,110,0.15);padding:0.9rem 1.1rem;border-radius:8px 0 8px 8px;max-width:85%;align-self:flex-end;';
    userBubble.innerHTML = \`<p style="font-size:0.82rem;color:var(--cream);margin:0;line-height:1.6;">\${text}</p>\`;
    messages.appendChild(userBubble);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Typing indicator
    const typing = document.createElement('div');
    typing.style.cssText = 'background:rgba(201,169,110,0.08);padding:0.9rem 1.1rem;border-radius:0 8px 8px 8px;max-width:85%;';
    typing.innerHTML = '<p style="font-size:0.82rem;color:var(--gray);margin:0;">...</p>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    try {
        // Calls the secure Cloudflare Worker proxy — API key never exposed
        const res = await fetch('https://skp-chat-proxy.warrenlisa2001.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });
        const data = await res.json();
        typing.innerHTML = \`<p style="font-size:0.82rem;color:var(--gray-light);margin:0;line-height:1.6;">\${data.reply}</p>\`;
    } catch(e) {
        typing.innerHTML = '<p style="font-size:0.82rem;color:var(--gray);margin:0;">Sorry, I'm having trouble connecting. Please WhatsApp Susan directly at +971 55 177 0957</p>';
    }
    messages.scrollTop = messages.scrollHeight;
}
</script>


    </body>
    </html>
  `)
})
// Deep Alignment Therapy page
app.get('/deep-alignment-therapy', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Deep Alignment Therapy with Susan K Pearson</title>
        <meta name="description" content="A full-spectrum healing journey combining energy alignment, hara work, meridian balancing, and subconscious transformation.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-black border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/#home"><img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-12 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-white hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-white hover:text-gold transition-colors">Services</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-20 pb-6 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-4">Deep Alignment Therapy</h1>
                <p class="text-xl text-cream/80 mb-4">A Full-Spectrum Healing Journey</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <h2 class="text-3xl font-serif text-charcoal mb-6">What is Deep Alignment Therapy?</h2>
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Deep Alignment Therapy is a comprehensive 90-minute session that addresses the full spectrum of your being—physical, energetic, emotional, and spiritual. This session combines energy alignment, hara work, meridian balancing, and subconscious transformation to restore clarity, guided breath, and inner spaciousness.
                    </p>
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        Each session is tailored intuitively to your body's intelligence, creating a safe container for profound shifts and lasting transformation.
                    </p>
                </div>

                <h2 class="text-3xl font-serif text-charcoal mb-6 text-center">What to Expect</h2>
                <div class="space-y-4 mb-12">
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Energy Alignment</h3>
                        <p class="text-charcoal/80">Master-level Reiki and chakra balancing to clear blockages and restore energetic flow throughout your system.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Hara Work</h3>
                        <p class="text-charcoal/80">Gentle abdominal therapy (Ampuku) to release emotional holdings stored in the belly and reconnect you to your center.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Meridian Balancing</h3>
                        <p class="text-charcoal/80">Hands-on bodywork along energy meridians to support circulation, tension release, and vitality.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Subconscious Integration</h3>
                        <p class="text-charcoal/80">Gentle integration work to help shifts settle into your conscious awareness and daily life.</p>
                    </div>
                </div>

                <div class="bg-charcoal p-10 rounded-sm shadow-xl text-center">
                    <h2 class="text-3xl font-serif text-cream mb-4">Investment</h2>
                    <p class="text-2xl text-gold mb-2">90 minutes — AED 950</p>
                    <p class="text-cream/70 mb-8">(approximately $260 USD)</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                        <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-cream px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium">Questions? Contact Susan</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-charcoal py-8 text-cream/50 text-center text-sm">
            <p>© 2026 Elemental Healing LLC. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `)
})

// Hara Release page
app.get('/hara-release', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hara Release (Anma & Ampuku) with Susan K Pearson</title>
        <meta name="description" content="Grounding. Opening. Releasing. Gentle abdominal unwinding that frees held emotional patterns and restores organ flow.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-black border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/#home"><img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-12 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-white hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-white hover:text-gold transition-colors">Services</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-20 pb-6 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-4">Hara Release</h1>
                <p class="text-xl text-cream/80 mb-4">Anma & Ampuku</p>
                <p class="text-2xl text-gold/90 mb-8 font-light">Grounding. Opening. Releasing.</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <h2 class="text-3xl font-serif text-charcoal mb-6">What is Hara Release?</h2>
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Hara Release is gentle abdominal unwinding that frees held emotional patterns, restores organ flow, and reconnects you to your center. This session combines two ancient Japanese healing arts:
                    </p>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-2xl font-serif text-charcoal mb-3">Anma (Traditional Japanese Bodywork)</h3>
                            <p class="text-charcoal/80 leading-relaxed">
                                Anma is a 1,000+ year-old Japanese massage tradition using rhythmic pressure and kneading along meridian pathways to release deep muscle tension, improve energy flow, promote circulation and vitality, and ground the body.
                            </p>
                        </div>
                        <div>
                            <h3 class="text-2xl font-serif text-charcoal mb-3">Ampuku (Abdominal Therapy)</h3>
                            <p class="text-charcoal/80 leading-relaxed">
                                Ampuku is abdominal therapy focusing on the hara—your energetic center. This work releases tension in the digestive system, addresses emotional holdings stored in the belly (fear, anxiety, grief), improves organ function, and restores connection to your core self.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bg-stone/30 p-8 rounded-sm mb-8">
                    <h2 class="text-2xl font-serif text-charcoal mb-4">Why the Belly Matters</h2>
                    <p class="text-charcoal/80 leading-relaxed">
                        In Eastern medicine, the hara (belly) is considered your second brain—a place where emotions, intuition, and life force energy gather. When the hara is blocked or tense, it affects your entire being. Hara Release creates space for the body to remember its natural capacity for flow, ease, and resilience.
                    </p>
                </div>

                <div class="bg-charcoal p-10 rounded-sm shadow-xl text-center">
                    <h2 class="text-3xl font-serif text-cream mb-4">Investment</h2>
                    <p class="text-2xl text-gold mb-2">60-75 minutes — AED 850</p>
                    <p class="text-cream/70 mb-8">(approximately $230 USD)</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                        <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-cream px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium">Questions? Contact Susan</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-charcoal py-8 text-cream/50 text-center text-sm">
            <p>© 2026 Elemental Healing LLC. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `)
})

// Energetic Recalibration page
app.get('/energetic-recalibration', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Energetic Recalibration (Reiki) with Susan K Pearson</title>
        <meta name="description" content="Master-level Reiki (20+ years) combined with chakra balancing to clear energetic blockages and restore flow.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-black border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/#home"><img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-12 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-white hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-white hover:text-gold transition-colors">Services</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-20 pb-6 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-4">Energetic Recalibration</h1>
                <p class="text-xl text-cream/80 mb-4">Reiki + Chakra Harmonizing</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <h2 class="text-3xl font-serif text-charcoal mb-6">What is Energetic Recalibration?</h2>
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Energetic Recalibration is a session dedicated to clearing energetic blockages, restoring flow, and harmonizing your subtle body systems. Susan brings over 20 years of Reiki mastery (Usui & Karuna traditions) combined with chakra balancing to support deep energetic alignment.
                    </p>
                    <p class="text-charcoal/80 leading-relaxed">
                        This session is ideal for those feeling energetically depleted, stuck, or seeking to recalibrate after major life transitions.
                    </p>
                </div>

                <h2 class="text-3xl font-serif text-charcoal mb-6 text-center">What You'll Experience</h2>
                <div class="space-y-4 mb-8">
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Master-Level Reiki (20+ Years)</h3>
                        <p class="text-charcoal/80">Susan channels universal life force energy through her hands, allowing energy to flow where it's most needed for healing on physical, emotional, mental, and spiritual levels.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Chakra Balancing</h3>
                        <p class="text-charcoal/80">Clearing and harmonizing your seven main energy centers to restore balance, vitality, and alignment throughout your entire system.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Subtle Body Harmonization</h3>
                        <p class="text-charcoal/80">Working with your aura and subtle energy layers to clear stagnation, repair energetic boundaries, and support overall well-being.</p>
                    </div>
                </div>

                <div class="bg-stone/30 p-8 rounded-sm mb-8">
                    <h2 class="text-2xl font-serif text-charcoal mb-4">What Makes Susan's Reiki Different</h2>
                    <p class="text-charcoal/80 leading-relaxed mb-4">
                        With over 20 years of practice, Susan integrates Reiki with somatic bodywork (Anma/Ampuku) for physical release and combines Reiki with hypnotherapy and the Nir Levy Method for enhanced effectiveness. This is not passive energy work—it's a full-spectrum healing experience.
                    </p>
                </div>

                <div class="bg-charcoal p-10 rounded-sm shadow-xl text-center">
                    <h2 class="text-3xl font-serif text-cream mb-4">Investment</h2>
                    <p class="text-2xl text-gold mb-2">60 minutes — AED 800</p>
                    <p class="text-cream/70 mb-8">(approximately $220 USD)</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                        <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-cream px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium">Questions? Contact Susan</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-charcoal py-8 text-cream/50 text-center text-sm">
            <p>© 2026 Elemental Healing LLC. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `)
})

// Subconscious Shift Therapy page  
app.get('/subconscious-shift-therapy', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Subconscious Shift Therapy with Susan K Pearson</title>
        <meta name="description" content="Repattern your inner landscape. Hypnotherapy and the Nir Levy Method resolve emotional blocks and rewire conditioned responses.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-black border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/#home"><img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-12 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-white hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-white hover:text-gold transition-colors">Services</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-20 pb-6 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-4">Subconscious Shift Therapy</h1>
                <p class="text-xl text-cream/80 mb-4">Hypnotherapy + Nir Levy Method</p>
                <p class="text-2xl text-gold/90 mb-8 font-light">Repattern your inner landscape.</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <h2 class="text-3xl font-serif text-charcoal mb-6">What is Subconscious Shift Therapy?</h2>
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Subconscious Shift Therapy is where Hypnotherapy and the Nir Levy Method work together to resolve emotional blocks and rewire conditioned responses. This session addresses the stories your body and mind are holding—often beneath conscious awareness—and supports you in creating new neural and somatic pathways.
                    </p>
                </div>

                <h2 class="text-3xl font-serif text-charcoal mb-6 text-center">What This Session Includes</h2>
                <div class="space-y-4 mb-8">
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Hypnotherapy (Ericksonian)</h3>
                        <p class="text-charcoal/80">Gentle, conversational hypnotherapy to access the subconscious mind. You remain fully in control while addressing limiting beliefs, breaking patterns, and creating lasting behavioral change.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Nir Levy Method Integration</h3>
                        <p class="text-charcoal/80">Advanced somatic and energetic healing to address where emotional patterns are held in the body. Combining Five Elements Body Reading with hands-on work to support release and recalibration.</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3">Nervous System Regulation</h3>
                        <p class="text-charcoal/80">Somatic techniques to help your nervous system move out of survival patterns and into regulation, safety, and resilience.</p>
                    </div>
                </div>

                <div class="bg-stone/30 p-8 rounded-sm mb-8">
                    <h2 class="text-2xl font-serif text-charcoal mb-4">Who This Is For</h2>
                    <ul class="space-y-3 text-charcoal/80">
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Those ready to break free from limiting patterns and beliefs</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Clients seeking deep subconscious repatterning</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Anyone feeling stuck in reactive or conditioned responses</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Those wanting to address both mental and somatic holding patterns</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-charcoal p-10 rounded-sm shadow-xl text-center">
                    <h2 class="text-3xl font-serif text-cream mb-4">Investment</h2>
                    <p class="text-2xl text-gold mb-2">75 minutes — AED 850</p>
                    <p class="text-cream/70 mb-8">(approximately $230 USD)</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                        <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-cream px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium">Questions? Contact Susan</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-charcoal py-8 text-cream/50 text-center text-sm">
            <p>© 2026 Elemental Healing LLC. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `)
})

// Full Frequency Session page
app.get('/full-frequency-session', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Full Frequency Session with Susan K Pearson</title>
        <meta name="description" content="All modalities. One deep journey. An immersive healing experience integrating every modality for profound transformation.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-black border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/#home"><img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-12 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-white hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-white hover:text-gold transition-colors">Services</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-20 pb-10 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <div class="mb-6">
                    <i class="fas fa-infinity text-gold text-5xl"></i>
                </div>
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">The Full Frequency Session</h1>
                <p class="text-2xl text-gold/90 mb-8">All Modalities | One Deep Journey</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <h2 class="text-3xl font-serif text-charcoal mb-6">What is The Full Frequency Session?</h2>
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        The Full Frequency Session is an immersive 2-hour journey integrating every modality Susan offers—Reiki, hara work, meridian balancing, chakra harmonizing, hypnotherapy, and the Nir Levy Method. This is for profound transformation and complete recalibration of body, mind, and spirit.
                    </p>
                    <p class="text-charcoal/80 leading-relaxed">
                        This session is designed for clients seeking the deepest level of healing work, those at major life transitions, or anyone ready for a comprehensive reset on all levels of being.
                    </p>
                </div>

                <h2 class="text-3xl font-serif text-charcoal mb-6 text-center">What's Included</h2>
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Master-Level Reiki (20+ years)</h3>
                        <p class="text-sm text-charcoal/80">Full energetic clearing and activation</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Hara Work (Anma & Ampuku)</h3>
                        <p class="text-sm text-charcoal/80">Deep abdominal release and grounding</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Meridian Balancing</h3>
                        <p class="text-sm text-charcoal/80">Full-body circulation and tension release</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Chakra Harmonizing</h3>
                        <p class="text-sm text-charcoal/80">Complete subtle body alignment</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Hypnotherapy</h3>
                        <p class="text-sm text-charcoal/80">Subconscious repatterning and integration</p>
                    </div>
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-lg font-serif text-charcoal mb-2">Nir Levy Method</h3>
                        <p class="text-sm text-charcoal/80">Five Elements Body Reading and somatic work</p>
                    </div>
                </div>

                <div class="bg-stone/30 p-8 rounded-sm mb-8">
                    <h2 class="text-2xl font-serif text-charcoal mb-4">Who This Is For</h2>
                    <ul class="space-y-3 text-charcoal/80">
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Clients seeking the deepest level of transformational work</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Those at major life transitions or crossroads</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Anyone ready for complete recalibration on all levels</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Experienced healing clients seeking the most comprehensive session</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-charcoal p-10 rounded-sm shadow-xl text-center">
                    <div class="mb-6">
                        <i class="fas fa-infinity text-gold text-4xl"></i>
                    </div>
                    <h2 class="text-3xl font-serif text-cream mb-4">Investment</h2>
                    <p class="text-2xl text-gold mb-2">120 minutes — AED 1,200</p>
                    <p class="text-cream/70 mb-8">(approximately $325 USD)</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                        <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-cream px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium">Questions? Contact Susan</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-charcoal py-8 text-cream/50 text-center text-sm">
            <p>© 2026 Elemental Healing LLC. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `)
})

// Nir Levy Method page
app.get('/nir-levy-method', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Nir Levy Method with Susan K Pearson | Elemental Healing</title>
        <meta name="description" content="Experience the Nir Levy Method—a holistic bodywork approach blending Five Elements Body Reading with hands-on meridian work. Certified practitioner Susan K Pearson.">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
          .section-spacing { padding: 4rem 0; }
        </style>
    </head>
    <body class="bg-cream">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home" class="flex items-center">
                        <img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto">
                    </a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#about" class="text-black hover:text-gold transition-colors">About</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Explore Working Together</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-20 pb-6 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-4">The Nir Levy Method</h1>
                <p class="text-xl text-cream/80 mb-4">with Susan K Pearson</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <!-- Introduction -->
        <section class="py-8 bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                    <p class="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Susan K Pearson offers the Nir Levy Method as a grounded, whole-person approach to healing—one that listens to what the body is holding and supports it in finding movement again.
                    </p>
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        The Nir Levy Method is based on the ancient healing art of <strong>Anma</strong>, originating in China around 5000 years ago. It is informed by Taoist philosophy, Yin–Yang, and the Five Elements theory. Nir Levi connected this lineage with a modern understanding of human behavior, creating a Five Elements Body Reading system and a distinct line of treatment designed to support the full human experience.
                    </p>
                    <div class="bg-cream/50 border-l-4 border-gold p-6 rounded-sm">
                        <p class="text-charcoal/80 italic text-sm">
                            A holistic bodywork experience that blends Five Elements Body Reading with hands-on meridian-based work to support release, circulation, and a deeper connection to your body's own wisdom. Rooted in the ancient art of Anma and informed by Taoism, Yin–Yang, and Five Elements theory, this method bridges traditional healing with a modern understanding of human behavior.
                        </p>
                    </div>
                </div>

                <div class="bg-gold/10 border border-gold/30 p-6 rounded-sm text-center">
                    <p class="text-charcoal font-medium">
                        <i class="fas fa-certificate text-gold mr-2"></i>
                        Susan K Pearson is a certified practitioner of the Nir Levy Method.
                    </p>
                </div>
            </div>
        </section>

        <!-- What This Work Is -->
        <section class="section-spacing bg-stone/30">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-4xl font-serif text-charcoal mb-8 text-center">What this work is</h2>
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                    <p class="text-lg text-charcoal/90 leading-relaxed mb-8 italic text-center">
                        "Our body remembers what our conscious mind forgot."
                    </p>
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        At the center of this method is a simple truth: the body carries a story—often more honestly than words can.
                    </p>
                    <h3 class="text-2xl font-serif text-charcoal mb-4">Sessions combine:</h3>
                    <ul class="space-y-4 text-charcoal/80">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-gold mr-3 mt-1"></i>
                            <div>
                                <strong>Five Elements Body Reading</strong> — a way of understanding the internal situation of the body by observing the external body.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-gold mr-3 mt-1"></i>
                            <div>
                                <strong>Hands-on bodywork</strong> — including stimulation techniques on Qi points along the body's meridians, plus stretches and movement to support tension release and healthier circulation.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- What to Expect -->
        <section class="section-spacing bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-4xl font-serif text-charcoal mb-8 text-center">What to expect in a session with Susan</h2>
                <p class="text-charcoal/70 text-center mb-8">Every session is individual, but most follow a gentle arc:</p>
                
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3 flex items-center">
                            <span class="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mr-3 text-gold font-medium">1</span>
                            Arrive + settle
                        </h3>
                        <p class="text-charcoal/80 leading-relaxed">
                            Susan begins by helping the nervous system land—so the body can be met with clarity and respect.
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3 flex items-center">
                            <span class="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mr-3 text-gold font-medium">2</span>
                            Body Reading (Five Elements)
                        </h3>
                        <p class="text-charcoal/80 leading-relaxed">
                            Observation is used to understand where the body may be compensating, bracing, or holding patterns that are ready for support.
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3 flex items-center">
                            <span class="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mr-3 text-gold font-medium">3</span>
                            Hands-on work + movement support
                        </h3>
                        <p class="text-charcoal/80 leading-relaxed">
                            Susan uses the Nir Levy Method's full-body physical work—working with meridians and Qi points, and incorporating stretches and techniques designed to stimulate energy movement and release muscular tension.
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-sm shadow border-l-4 border-gold">
                        <h3 class="text-xl font-serif text-charcoal mb-3 flex items-center">
                            <span class="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mr-3 text-gold font-medium">4</span>
                            Integration
                        </h3>
                        <p class="text-charcoal/80 leading-relaxed">
                            Time is given at the end for the work to settle—so what shifts in the body can be felt, understood, and carried into daily life.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blockages Section -->
        <section class="section-spacing bg-stone/30">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-4xl font-serif text-charcoal mb-8 text-center">The kinds of "blockages" this method works with</h2>
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        The Nir Levy Method views the body as a mirror of internal emotional and physical state and speaks about blockages as places where natural expression and flow get interrupted.
                    </p>
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        The method describes three levels of blockages:
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-dumbbell text-sage"></i>
                            </div>
                            <div>
                                <h3 class="font-serif text-xl text-charcoal mb-1">Physical</h3>
                                <p class="text-charcoal/70">Muscles and tendon blockages</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-bolt text-gold"></i>
                            </div>
                            <div>
                                <h3 class="font-serif text-xl text-charcoal mb-1">Energetic</h3>
                                <p class="text-charcoal/70">Internal organs and circulation blockages</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-earth/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-heart text-earth"></i>
                            </div>
                            <div>
                                <h3 class="font-serif text-xl text-charcoal mb-1">Emotional</h3>
                                <p class="text-charcoal/70">Heart and feelings blockages</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-charcoal/80 leading-relaxed mt-6 italic">
                        Susan's intention is not to "force" release, but to support a safer return to movement—so the body can do what it naturally knows how to do.
                    </p>
                </div>
            </div>
        </section>

        <!-- Who This Is For -->
        <section class="section-spacing bg-cream">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-4xl font-serif text-charcoal mb-8 text-center">Who this is for</h2>
                <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg">
                    <p class="text-charcoal/80 leading-relaxed mb-6">
                        This work can be supportive for clients who:
                    </p>
                    <ul class="space-y-3 text-charcoal/80">
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Feel chronically tense, braced, or "stuck"</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Sense that stress and lived experience is being carried in the body</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-circle text-gold mr-3 mt-1 text-xs"></i>
                            <span>Want bodywork that includes both the physical structure and the emotional layer of healing (without rushing either)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Video Section -->
        <section class="section-spacing bg-charcoal">
            <div class="max-w-5xl mx-auto px-4">
                <h2 class="text-4xl font-serif text-cream mb-8 text-center">Experience the Nir Levy Method</h2>
                
                <!-- Embedded YouTube Video -->
                <div class="mb-8">
                    <div class="relative w-full" style="padding-bottom: 56.25%;">
                        <iframe 
                            class="absolute top-0 left-0 w-full h-full rounded-sm shadow-2xl" 
                            src="https://www.youtube.com/embed/aA7Hzo5VuoY" 
                            title="The Nir Levy Method" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                
                <div class="bg-cream/10 p-6 rounded-sm text-center">
                    <p class="text-cream/80 mb-4 text-lg">
                        <i class="fas fa-play-circle text-gold text-2xl mr-2"></i>
                        Watch this video to understand the profound healing approach of the Nir Levy Method
                    </p>
                    <a href="https://www.youtube.com/watch?v=aA7Hzo5VuoY" target="_blank" rel="noopener" class="text-gold hover:text-champagne transition-colors inline-flex items-center">
                        Watch on YouTube <i class="fas fa-external-link-alt ml-2 text-sm"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Book a Session -->
        <section class="section-spacing bg-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-4xl font-serif text-charcoal mb-6">Book a session</h2>
                <p class="text-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                    If you feel drawn to this work, Susan welcomes you to book a session and experience what it's like to be met—steadily, clearly, and with care.
                </p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium text-lg">
                        Explore Working Together
                    </a>
                    <a href="mailto:susan@susankpearson.com" class="inline-block border-2 border-gold text-charcoal px-8 py-4 rounded-sm hover:bg-gold/10 transition-colors font-medium text-lg">
                        Questions? Contact Susan
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer Disclaimer -->
        <footer class="bg-charcoal py-12 text-cream/70 text-center">
            <div class="max-w-4xl mx-auto px-4">
                <p class="text-sm mb-4">
                    The Nir Levy Method is a holistic bodywork modality and is not a substitute for medical diagnosis or treatment.
                </p>
                <p class="text-xs text-cream/50">
                    © 2026 Elemental Healing LLC. All rights reserved.
                </p>
            </div>
        </footer>
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
        <title>Blog | Susan K Pearson</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
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
                ${blogPosts.slice().reverse().map(post => `
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

// Individual blog post route
app.get('/blog/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const post = blogPosts.find(p => p.id === id)
  
  if (!post) {
    return c.redirect('/blog')
  }
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${post.title} | Susan K Pearson</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  midnight: '#0A0A0A',
                  obsidian: '#000000',
                  charcoal: '#1A1A1A',
                  gold: '#C8A974',
                  champagne: '#D4AF37',
                  cream: '#FAF7F3',
                  bone: '#F4F2EF',
                  sage: '#B8B5A0',
                  stone: '#E8DCC8',
                  earth: '#8B7355'
                },
                fontFamily: {
                  serif: ['Cormorant Garamond', 'serif'],
                  sans: ['Montserrat', 'sans-serif']
                }
              }
            }
          }
        </script>
        
        <style>
          body { 
            font-family: 'Montserrat', sans-serif;
            line-height: 1.8;
          }
          h1, h2, h3, h4, h5, h6 { 
            font-family: 'Cormorant Garamond', serif;
            font-weight: 400;
          }
          .blog-content h3 {
            font-size: 1.75rem;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: #1A1A1A;
            font-weight: 500;
          }
          .blog-content h4 {
            font-size: 1.4rem;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: #3A3A3A;
            font-weight: 500;
          }
          .blog-content p {
            margin-bottom: 1.25rem;
            color: #4A4A4A;
          }
          .blog-content p.lead {
            font-size: 1.25rem;
            line-height: 1.7;
            color: #2A2A2A;
            margin-bottom: 2rem;
            font-weight: 400;
          }
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
          .blog-content li {
            margin-bottom: 0.5rem;
            color: #4A4A4A;
          }
          .blog-content strong {
            color: #1A1A1A;
            font-weight: 600;
          }
          .blog-content em {
            font-style: italic;
            color: #5A5A5A;
          }
          .blog-content a {
            color: #C8A974;
            text-decoration: underline;
          }
          .blog-content a:hover {
            color: #D4AF37;
          }
        </style>
    </head>
    <body class="bg-cream">
        <!-- Navigation -->
        <nav class="fixed w-full bg-black backdrop-blur-sm shadow-lg z-50 border-b border-gold/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <div class="flex items-center">
                        <a href="/" class="flex flex-col">
                            <div class="text-cream font-serif text-xl md:text-2xl tracking-wide">Susan K Pearson</div>
                            <div class="text-gold text-xs md:text-sm tracking-widest font-light">ENERGY · BODY · CONSCIOUSNESS</div>
                        </a>
                    </div>
                    <div class="flex items-center gap-6">
                        <a href="/" class="text-cream hover:text-gold transition-colors">Home</a>
                        <a href="/#blog" class="text-cream hover:text-gold transition-colors">All Posts</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Session</a>
                    </div>
                </div>
            </div>
        </nav>
        
        <!-- Blog Post Content -->
        <article class="pt-32 pb-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="mb-12">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="inline-block px-4 py-1 bg-gold/20 text-gold text-sm font-medium rounded-sm">
                            ${post.category}
                        </span>
                        <span class="text-charcoal/60 text-sm">
                            <i class="far fa-clock mr-2"></i>${post.readTime}
                        </span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">
                        ${post.title}
                    </h1>
                    <div class="flex items-center text-charcoal/60 text-sm">
                        <i class="far fa-calendar mr-2"></i>
                        <time datetime="${post.date}">${post.date}</time>
                        <span class="mx-3">•</span>
                        <span>By Susan K Pearson</span>
                    </div>
                </div>
                
                <!-- Divider -->
                <div class="w-32 h-1 bg-gold mb-12"></div>
                
                <!-- Blog Content -->
                <div class="blog-content prose prose-lg max-w-none">
                    ${post.content}
                </div>
                
                <!-- Author Bio -->
                <div class="mt-16 p-8 bg-white rounded-sm border-l-4 border-gold">
                    <div class="flex items-start gap-6">
                        <img src="/images/susan-professional.jpg" alt="Susan K Pearson" 
                            class="w-24 h-24 rounded-full object-cover border-2 border-gold">
                        <div>
                            <h3 class="text-2xl font-serif mb-2">About Susan K Pearson</h3>
                            <p class="text-charcoal/70 mb-4">
                                Susan is a Master-level Reiki practitioner (20+ years) and Hypnotherapist specializing in multidimensional healing. She integrates ancient wisdom with contemporary somatic practices to support transformational healing worldwide.
                            </p>
                            <div class="flex gap-4">
                                <a href="/#about" class="text-gold hover:text-champagne transition-colors font-medium">
                                    Learn More About Susan →
                                </a>
                                <a href="/#booking" class="text-gold hover:text-champagne transition-colors font-medium">
                                    Book a Session →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Related Posts -->
                <div class="mt-16">
                    <h3 class="text-3xl font-serif mb-8">Related Articles</h3>
                    <div class="grid md:grid-cols-3 gap-6">
                        ${blogPosts
                          .filter(p => p.id !== post.id)
                          .slice(0, 3)
                          .map(relatedPost => `
                            <a href="/blog/${relatedPost.id}" class="block bg-white p-6 rounded-sm hover:shadow-lg transition-shadow">
                                <span class="text-xs text-gold font-medium">${relatedPost.category}</span>
                                <h4 class="text-lg font-serif mt-2 mb-2 text-charcoal">${relatedPost.title}</h4>
                                <p class="text-sm text-charcoal/60 mb-3">${relatedPost.excerpt.substring(0, 100)}...</p>
                                <span class="text-gold text-sm font-medium">Read More →</span>
                            </a>
                          `).join('')}
                    </div>
                </div>
                
                <!-- Back to Blog -->
                <div class="mt-12 text-center">
                    <a href="/#blog" class="inline-block bg-charcoal text-cream px-8 py-3 rounded-sm hover:bg-gold hover:text-black transition-all duration-300 font-medium">
                        <i class="fas fa-arrow-left mr-2"></i>
                        Back to All Posts
                    </a>
                </div>
            </div>
        </article>
        
        <!-- Footer -->
        <footer class="bg-charcoal text-cream py-12">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <p class="text-cream/60 mb-4">© 2026 Susan K Pearson | Elemental Healing LLC</p>
                <div class="flex justify-center gap-6">
                    <a href="tel:+971551770957" class="text-gold hover:text-champagne transition-colors">
                        <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                    </a>
                    <a href="mailto:susan@susankpearson.com" class="text-gold hover:text-champagne transition-colors">
                        <i class="fas fa-envelope mr-2"></i>susan@susankpearson.com
                    </a>
                </div>
            </div>
        </footer>
    </body>
    </html>
  `)
})

// Intake Form Page
app.get('/intake-form', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client Intake Form - Susan K Pearson</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            midnight: '#0A0A0A',
                            charcoal: '#1A1A1A',
                            obsidian: '#000000',
                            gold: '#C8A974',
                            champagne: '#D4AF37',
                            cream: '#FAF7F3',
                            bone: '#F4F2EF',
                            taupe: '#7C7165'
                        }
                    }
                }
            }
        </script>
    </head>
    <body class="bg-cream text-charcoal">
        <!-- Navigation -->
        <nav class="fixed w-full bg-black backdrop-blur-sm shadow-lg z-50 border-b border-gold/40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center py-3">
                            <img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-16 w-auto">
                        </a>
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="/" class="text-white hover:text-gold transition-colors">Back to Home</a>
                        <a href="tel:+971551770957" class="text-gold hover:text-champagne transition-colors">
                            <i class="fas fa-phone mr-2"></i>+971 55 177 0957
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Form Content -->
        <div class="pt-24 pb-16 px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl md:text-5xl font-serif text-charcoal mb-4">Client Intake Form</h1>
                    <p class="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        This form helps me understand how to best support you. Please answer only what feels relevant and comfortable.
                    </p>
                </div>

                <!-- Form -->
                <form id="intakeForm" class="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
                    <!-- Personal Information -->
                    <div class="space-y-6">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">1. Personal Information</h2>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                                <input type="text" name="fullName" required 
                                    class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Date of Birth *</label>
                                <input type="date" name="dateOfBirth" required 
                                    class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold">
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Email *</label>
                                <input type="email" name="email" required 
                                    class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-charcoal mb-2">Phone / WhatsApp *</label>
                                <input type="tel" name="phone" required 
                                    class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold">
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Location</label>
                            <input type="text" name="location" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold">
                        </div>
                    </div>

                    <!-- What Brings You Here -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">2. What Brings You Here</h2>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">What has led you to seek this work at this time?</label>
                            <textarea name="reasonForSeeking" rows="4" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Current Experience -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">3. Current Experience</h2>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">How would you describe what you are currently experiencing?</label>
                            <textarea name="currentExperience" rows="4" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Previous Experience -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">4. Previous Experience</h2>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Have you experienced energy work, hypnotherapy, or bodywork before?</label>
                            <textarea name="previousExperience" rows="3" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Health & Wellbeing -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">5. Health & Wellbeing</h2>
                        
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Are you under medical care?</label>
                            <textarea name="medicalCare" rows="2" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Are you taking medication?</label>
                            <textarea name="medication" rows="2" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Any injuries or sensitivities?</label>
                            <textarea name="injuriesOrSensitivities" rows="2" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Nervous System -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">6. Nervous System</h2>
                        
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">How do you respond to stress?</label>
                            <textarea name="stressResponse" rows="3" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Are you comfortable with touch?</label>
                            <div class="flex space-x-6">
                                <label class="flex items-center">
                                    <input type="radio" name="comfortableWithTouch" value="yes" class="mr-2">
                                    <span>Yes</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="comfortableWithTouch" value="no" class="mr-2">
                                    <span>No</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="comfortableWithTouch" value="sometimes" class="mr-2">
                                    <span>Sometimes</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Emotional Patterns -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">7. Emotional Patterns</h2>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">Any patterns you would like to shift?</label>
                            <textarea name="emotionalPatterns" rows="4" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Intentions -->
                    <div class="space-y-4">
                        <h2 class="text-2xl font-serif text-gold border-b border-gold/20 pb-2">8. Intentions</h2>
                        <div>
                            <label class="block text-sm font-medium text-charcoal mb-2">What are you hoping to experience or discover?</label>
                            <textarea name="intentions" rows="4" 
                                class="w-full px-4 py-3 border border-charcoal/20 rounded-sm focus:outline-none focus:border-gold"></textarea>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex flex-col items-center space-y-4 pt-6">
                        <button type="submit" 
                            class="bg-gold text-black px-12 py-4 rounded-sm hover:bg-champagne transition-colors font-medium text-lg shadow-lg">
                            Submit Intake Form
                        </button>
                        <p class="text-sm text-charcoal/60 text-center">
                            Your information is confidential and will only be used to support your healing journey.
                        </p>
                    </div>
                </form>

                <!-- Success Message (Hidden) -->
                <div id="successMessage" class="hidden bg-green-50 border border-green-200 rounded-lg p-8 text-center mt-8">
                    <i class="fas fa-check-circle text-green-600 text-5xl mb-4"></i>
                    <h3 class="text-2xl font-serif text-green-800 mb-2">Thank You!</h3>
                    <p class="text-green-700">Your intake form has been submitted successfully. I look forward to working with you.</p>
                    <a href="/" class="inline-block mt-6 bg-gold text-black px-8 py-3 rounded-sm hover:bg-champagne transition-colors">
                        Return to Home
                    </a>
                </div>
            </div>
        </div>

        <script>
            document.getElementById('intakeForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                
                try {
                    const response = await fetch('/api/intake-form', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });
                    
                    if (response.ok) {
                        document.getElementById('intakeForm').classList.add('hidden');
                        document.getElementById('successMessage').classList.remove('hidden');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } catch (error) {
                    alert('There was an error submitting your form. Please try again or contact susan@susankpearson.com');
                }
            });
        </script>
    </body>
    </html>
  `)
})

// API endpoint to handle form submission
app.post('/api/intake-form', async (c) => {
  try {
    const data = await c.req.json()
    const timestamp = new Date().toISOString()
    
    // 1. Save to Cloudflare D1 Database
    const db = c.env.DB
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO intake_forms (
            full_name, email, phone, date_of_birth, location,
            reason_for_seeking, current_experience, previous_experience,
            medical_care, medication, injuries_or_sensitivities,
            stress_response, comfortable_with_touch, emotional_patterns, intentions
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          data.fullName,
          data.email,
          data.phone,
          data.dateOfBirth || null,
          data.location || null,
          data.reasonForSeeking || null,
          data.currentExperience || null,
          data.previousExperience || null,
          data.medicalCare || null,
          data.medication || null,
          data.injuriesOrSensitivities || null,
          data.stressResponse || null,
          data.comfortableWithTouch || null,
          data.emotionalPatterns || null,
          data.intentions || null
        ).run()
        
        console.log('✅ Saved to database:', data.email)
      } catch (dbError) {
        console.error('❌ Database error:', dbError)
      }
    }
    
    // 2. Send email notification using Resend API
    try {
      // Format the email body
      const emailBody = `
New Intake Form Submission
Time: ${new Date(timestamp).toLocaleString()}

PERSONAL INFORMATION:
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- Date of Birth: ${data.dateOfBirth || 'Not provided'}
- Location: ${data.location || 'Not provided'}

WHAT BRINGS YOU HERE:
${data.reasonForSeeking || 'Not provided'}

CURRENT EXPERIENCE:
${data.currentExperience || 'Not provided'}

PREVIOUS EXPERIENCE:
${data.previousExperience || 'Not provided'}

HEALTH & WELLBEING:
- Medical Care: ${data.medicalCare || 'Not provided'}
- Medication: ${data.medication || 'Not provided'}
- Injuries/Sensitivities: ${data.injuriesOrSensitivities || 'Not provided'}

NERVOUS SYSTEM:
- Stress Response: ${data.stressResponse || 'Not provided'}
- Comfortable with Touch: ${data.comfortableWithTouch || 'Not provided'}

EMOTIONAL PATTERNS:
${data.emotionalPatterns || 'Not provided'}

INTENTIONS:
${data.intentions || 'Not provided'}

---
View all submissions in your admin dashboard.
      `.trim()
      
      // Send email via Resend (you'll need to add RESEND_API_KEY to secrets)
      const resendApiKey = c.env.RESEND_API_KEY
      if (resendApiKey) {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Intake Forms <noreply@susankpearson.com>',
            to: 'susankatrynpearson@gmail.com',
            subject: `New Intake Form: ${data.fullName}`,
            text: emailBody
          })
        })
        
        if (emailResponse.ok) {
          console.log('✅ Email sent to susankatrynpearson@gmail.com')
        } else {
          console.error('❌ Email send failed:', await emailResponse.text())
        }
      } else {
        console.log('⚠️ No RESEND_API_KEY found - email not sent')
      }
    } catch (emailError) {
      console.error('❌ Email error:', emailError)
    }
    
    // 3. Log for debugging
    console.log('📋 Intake Form Submission:', {
      timestamp,
      name: data.fullName,
      email: data.email
    })
    
    return c.json({ 
      success: true, 
      message: 'Form submitted successfully',
      timestamp 
    })
    
  } catch (error) {
    console.error('❌ Form submission error:', error)
    return c.json({ 
      success: false, 
      message: 'Error submitting form' 
    }, 500)
  }
})

// Cat Rescue Page Route
app.get('/cat-rescue', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dubai Street Cat Rescue | Susan K Pearson</title>
        <meta name="description" content="Susan rescues, rehabilitates, and rehomes abandoned street cats in Dubai. Meet the cats looking for loving forever homes and support our rescue mission.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            cream: '#F5F1E8',
                            charcoal: '#2C2C2C',
                            gold: '#D4AF37',
                            champagne: '#F7E7CE'
                        }
                    }
                }
            }
        </script>
        <!-- Calendly Badge Widget Begin -->
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <!-- Calendly Badge Widget End -->
    </head>
    <body class="bg-cream text-charcoal">
        <!-- Navigation -->
        <nav class="fixed w-full bg-black backdrop-blur-sm shadow-lg z-50 border-b border-gold/40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-24 md:h-28">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center py-2">
                            <img src="/images/skp-logo-white.png" alt="Susan K Pearson - Elemental Healing" class="h-16 md:h-20 w-auto transition-transform hover:scale-105">
                        </a>
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <a href="/" class="text-white hover:text-gold transition-colors font-medium">Home</a>
                        <a href="/#about" class="text-white hover:text-gold transition-colors font-medium">About</a>
                        <a href="/cat-rescue" class="text-gold font-medium">Cat Rescue</a>
                        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/susankatrynpearson'});return false;" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium shadow-lg">Book Session</a>
                    </div>
                    <button id="mobileMenuBtn" class="md:hidden text-white">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-32 md:pt-36 pb-20 bg-gradient-to-b from-charcoal to-black text-white">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <div class="mb-8 flex justify-center items-center gap-4">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent to-gold/40"></div>
                    <i class="fas fa-heart text-gold text-2xl"></i>
                    <div class="w-16 h-px bg-gradient-to-l from-transparent to-gold/40"></div>
                </div>
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">Dubai Street Cat Rescue</h1>
                <p class="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-8">
                    Giving abandoned and vulnerable cats a second chance at life, love, and belonging
                </p>
                <div class="flex justify-center gap-4 flex-wrap">
                    <a href="#cats" class="bg-gold text-black px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium shadow-lg">
                        <i class="fas fa-paw mr-2"></i>Meet the Cats
                    </a>
                    <a href="#donate" class="border-2 border-gold text-gold px-8 py-3 rounded-sm hover:bg-gold hover:text-black transition-colors font-medium">
                        <i class="fas fa-hand-holding-heart mr-2"></i>Support Our Mission
                    </a>
                </div>
            </div>
        </section>
        ${renderInitiativeSection()}
        <!-- Mission Statement -->
        <section class="py-20 bg-cream">
            <div class="max-w-5xl mx-auto px-4">
                <div class="bg-white rounded-sm shadow-2xl p-8 md:p-12 border-l-4 border-gold">
                    <h2 class="text-3xl md:text-4xl font-serif font-light mb-6 text-charcoal">Susan's Mission</h2>
                    <div class="prose prose-lg max-w-none text-charcoal/80 space-y-4">
                        <p class="text-lg leading-relaxed">
                            Beyond my healing practice, I am deeply committed to supporting the most vulnerable beings in our community—the abandoned and street cats of Dubai. These beautiful souls deserve safety, care, and the chance to find loving forever homes.
                        </p>
                        <p class="text-lg leading-relaxed">
                            Every cat I rescue receives complete veterinary care, rehabilitation, and is spayed or neutered before finding their forever family. This work is entirely self-funded and driven by compassion. A portion of my session proceeds helps support these rescues, but the need is constant.
                        </p>
                        <p class="text-lg leading-relaxed font-medium text-gold">
                            Each cat has a story. Each one deserves a chance at the life they were meant to live—safe, loved, and cherished.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cats Available for Adoption -->
        <section id="cats" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light mb-4">Meet the Cats Looking for Home</h2>
                    <p class="text-xl text-charcoal/60 max-w-2xl mx-auto">
                        Each of these precious souls is ready to bring love, joy, and companionship into their forever home
                    </p>
                </div>

                <!-- Featured Bonded Pair: Beo & Foxy -->
                <div class="mb-16 bg-gradient-to-br from-gold/5 to-champagne/10 rounded-sm border-2 border-gold/30 overflow-hidden shadow-2xl">
                    <div class="grid md:grid-cols-2 gap-0">
                        <div class="h-96 md:h-auto">
                            <img src="/images/beo-and-foxy.jpg" alt="Beo and Foxy - Bonded Pair" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 md:p-12 flex flex-col justify-center">
                            <div class="inline-block bg-gold/20 text-gold px-4 py-2 rounded-sm text-sm font-medium mb-4 w-fit">
                                <i class="fas fa-heart mr-2"></i>Bonded Pair - Must Be Adopted Together
                            </div>
                            <h3 class="text-3xl md:text-4xl font-serif mb-3 text-charcoal">Beo & Foxy</h3>
                            <p class="text-lg text-gold font-medium mb-4">Best Friends | Soul Mates | Friends for Life</p>
                            
                            <div class="space-y-3 mb-6">
                                <p class="text-charcoal/80 flex items-start">
                                    <i class="fas fa-heart text-gold mr-3 mt-1"></i>
                                    <span><strong>Affectionate and loving</strong> - Always looking for a cuddle and ready to shower you with love</span>
                                </p>
                                <p class="text-charcoal/80 flex items-start">
                                    <i class="fas fa-play text-gold mr-3 mt-1"></i>
                                    <span><strong>Curious and playful</strong> - Keep each other entertained and will bring joy to your home</span>
                                </p>
                                <p class="text-charcoal/80 flex items-start">
                                    <i class="fas fa-child text-gold mr-3 mt-1"></i>
                                    <span><strong>Great with kids</strong> - Gentle, patient, and wonderful family companions</span>
                                </p>
                                <p class="text-charcoal/80 flex items-start">
                                    <i class="fas fa-users text-gold mr-3 mt-1"></i>
                                    <span><strong>Looking for a caring family</strong> - These two inseparable friends dream of finding their forever home together</span>
                                </p>
                            </div>

                            <div class="bg-white/80 rounded-sm p-4 mb-6 border-l-4 border-gold">
                                <p class="text-sm text-charcoal/70 italic">
                                    "Beo and Foxy are bonded soul mates who have been through everything together. Separating them would break their hearts. They need a family who understands the magic of their friendship and will give them both the loving home they deserve."
                                </p>
                            </div>

                            <div class="flex gap-3">
                                <a href="mailto:susankatrynpearson@gmail.com?subject=Adoption Inquiry: Beo and Foxy (Bonded Pair)" class="flex-1 bg-gold text-black px-6 py-3 rounded-sm hover:bg-champagne transition-colors text-center font-medium shadow-lg">
                                    <i class="fas fa-envelope mr-2"></i>Adopt This Bonded Pair
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mb-12">
                    <h3 class="text-3xl font-serif font-light text-charcoal mb-2">More Cats Looking for Love</h3>
                    <div class="w-24 h-px bg-gold/40 mx-auto"></div>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Cat Profile Template - Repeated for each cat -->
                    ${[
                      { name: "Luna", age: "2 years", gender: "Female", personality: "Gentle and affectionate, loves to curl up in sunny spots", story: "Found as a tiny kitten under a car in the summer heat. Now thriving and ready for her forever family." },
                      { name: "Shadow", age: "3 years", gender: "Male", personality: "Playful and curious, excellent with children", story: "Rescued from a construction site. Despite his rough start, he's incredibly loving and trusts humans completely." },
                      { name: "Whiskers", age: "1 year", gender: "Male", personality: "Energetic and social, loves interactive toys", story: "Abandoned in a cardboard box at a mall. He's overcome his fear and is now a confident, happy young cat." },
                      { name: "Pearl", age: "4 years", gender: "Female", personality: "Calm and elegant, perfect lap cat", story: "Lived on the streets for years before being rescued. She's now spayed, healthy, and craves the comfort of a loving home." },
                      { name: "Tiger", age: "2 years", gender: "Male", personality: "Bold and adventurous, loves climbing", story: "Found with an injured paw that has now fully healed. He's ready to explore a safe indoor environment." },
                      { name: "Bella", age: "5 years", gender: "Female", personality: "Sweet and quiet, ideal for a peaceful home", story: "Spent years surviving near a restaurant. Now she's ready to retire from street life and enjoy being pampered." },
                      { name: "Oliver", age: "1 year", gender: "Male", personality: "Affectionate and vocal, loves conversation", story: "Rescued from a busy highway. This brave boy has so much love to give and seeks a family who will cherish him." },
                      { name: "Cleo", age: "3 years", gender: "Female", personality: "Independent yet loving, enjoys her own space", story: "Found pregnant on the streets. Her kittens have all found homes, and now it's her turn for happiness." },
                      { name: "Max", age: "2 years", gender: "Male", personality: "Friendly and outgoing, great with other pets", story: "Abandoned when his family left Dubai. He's forgiving and ready to trust again with the right family." },
                      { name: "Daisy", age: "1 year", gender: "Female", personality: "Playful kitten energy, loves feather toys", story: "Rescued from under a building where she was trapped. Now healthy and full of life, ready for adventures." },
                      { name: "Simba", age: "4 years", gender: "Male", personality: "Majestic and dignified, loves head scratches", story: "Lived in a colony for years. He's tested, vaccinated, and neutered—ready for indoor luxury." },
                      { name: "Misty", age: "2 years", gender: "Female", personality: "Shy at first, then incredibly loyal", story: "Found hiding in bushes, terrified. With patience and love, she's blossomed into a trusting companion." },
                      { name: "Leo", age: "3 years", gender: "Male", personality: "Confident and charismatic, loves attention", story: "Rescued from a parking lot where he was struggling to survive. He's now healthy and ready to be someone's best friend." },
                      { name: "Rosie", age: "1 year", gender: "Female", personality: "Sweet and gentle, purrs constantly", story: "Found as a young kitten with an eye infection, now fully recovered and looking for a caring home." },
                      { name: "Milo", age: "2 years", gender: "Male", personality: "Intelligent and curious, loves puzzle toys", story: "Abandoned in a villa when tenants moved out. He's adaptable and will thrive in a loving environment." },
                      { name: "Ginger", age: "5 years", gender: "Female", personality: "Mature and calm, excellent companion", story: "Spent years as a community cat. She's earned her retirement and deserves a soft bed and endless cuddles." },
                      { name: "Charlie", age: "1 year", gender: "Male", personality: "Playful and energetic, loves to chase", story: "Rescued from a busy street. This lucky boy survived and is now ready to bring joy to his forever family." },
                      { name: "Nala", age: "3 years", gender: "Female", personality: "Affectionate and food-motivated, easy to train", story: "Found near a restaurant, always hungry. Now well-fed and healthy, she's ready for a home where she'll never worry about food again." },
                      { name: "Oscar", age: "4 years", gender: "Male", personality: "Laid-back and easygoing, perfect for first-time cat owners", story: "Lived in a warehouse before rescue. He's grateful for every moment of comfort and shows it with endless affection." },
                      { name: "Lily", age: "2 years", gender: "Female", personality: "Sweet-natured and gentle, loves being brushed", story: "Rescued from a construction zone. Despite her difficult past, she's optimistic, loving, and ready to find her person." }
                    ].map(cat => `
                      <div class="bg-cream rounded-sm shadow-lg overflow-hidden border border-gold/20 hover:shadow-2xl transition-shadow">
                        <div class="h-64 bg-gradient-to-br from-gold/20 to-champagne/30 flex items-center justify-center">
                          <i class="fas fa-cat text-gold/40 text-8xl"></i>
                        </div>
                        <div class="p-6">
                          <h3 class="text-2xl font-serif mb-2 text-gold">${cat.name}</h3>
                          <div class="flex gap-4 text-sm text-charcoal/60 mb-4">
                            <span><i class="fas fa-calendar-alt mr-1"></i>${cat.age}</span>
                            <span><i class="fas fa-${cat.gender === 'Female' ? 'venus' : 'mars'} mr-1"></i>${cat.gender}</span>
                          </div>
                          <p class="text-sm text-charcoal/80 mb-3"><strong>Personality:</strong> ${cat.personality}</p>
                          <p class="text-sm text-charcoal/70 mb-4 italic">"${cat.story}"</p>
                          <div class="flex gap-2">
                            <a href="mailto:susankatrynpearson@gmail.com?subject=Adoption Inquiry: ${cat.name}" class="flex-1 bg-gold text-black px-4 py-2 rounded-sm hover:bg-champagne transition-colors text-center text-sm font-medium">
                              <i class="fas fa-envelope mr-1"></i>Adopt ${cat.name}
                            </a>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Support Section -->
        <section id="donate" class="py-20 bg-charcoal text-white">
            <div class="max-w-5xl mx-auto px-4 text-center">
                <h2 class="text-4xl md:text-5xl font-serif font-light mb-6">Support Our Rescue Mission</h2>
                <p class="text-xl text-cream/80 mb-12 max-w-3xl mx-auto">
                    Every donation helps provide medical care, food, shelter, and hope to cats in need. Your support makes rescue and rehabilitation possible.
                </p>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-sm p-8 md:p-12 border border-gold/20 mb-12">
                    <h3 class="text-2xl font-serif mb-6 text-gold">How Your Support Helps</h3>
                    <div class="grid md:grid-cols-3 gap-8 text-left">
                        <div>
                            <i class="fas fa-stethoscope text-gold text-3xl mb-4"></i>
                            <h4 class="text-lg font-medium mb-2">Veterinary Care</h4>
                            <p class="text-cream/70 text-sm">Vaccinations, spaying/neutering, treatment for injuries and illnesses</p>
                        </div>
                        <div>
                            <i class="fas fa-utensils text-gold text-3xl mb-4"></i>
                            <h4 class="text-lg font-medium mb-2">Nutrition & Shelter</h4>
                            <p class="text-cream/70 text-sm">Quality food, safe housing, and comfortable bedding during recovery</p>
                        </div>
                        <div>
                            <i class="fas fa-home text-gold text-3xl mb-4"></i>
                            <h4 class="text-lg font-medium mb-2">Rehoming Support</h4>
                            <p class="text-cream/70 text-sm">Transport, documentation, and support to help cats find loving homes</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gold/10 rounded-sm p-8 border-l-4 border-gold">
                    <p class="text-lg mb-6 text-cream">
                        <strong class="text-gold">100% of donations</strong> go directly to cat rescue and care. This is a labor of love with no administrative costs.
                    </p>
                    <p class="text-cream/80 mb-8">
                        GoFundMe campaign coming soon. For now, please email to arrange direct support or to inquire about adoption.
                    </p>
                    <a href="mailto:susankatrynpearson@gmail.com?subject=Support for Cat Rescue" class="inline-block bg-gold text-black px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium shadow-lg">
                        <i class="fas fa-envelope mr-2"></i>Contact Susan
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black text-cream py-12">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <img src="/images/skp-logo-white.png" alt="Susan K Pearson" class="h-16 mx-auto mb-6">
                <div class="flex justify-center gap-6 mb-6">
                    <a href="/" class="hover:text-gold transition-colors">Home</a>
                    <a href="/#about" class="hover:text-gold transition-colors">About</a>
                    <a href="/cat-rescue" class="hover:text-gold transition-colors">Cat Rescue</a>
                    <a href="mailto:susankatrynpearson@gmail.com" class="hover:text-gold transition-colors">Contact</a>
                </div>
                <p class="text-cream/60 text-sm">
                    © ${new Date().getFullYear()} Susan K Pearson. All rights reserved. | Dubai Street Cat Rescue
                </p>
            </div>
        </footer>

        <script>
            // Mobile menu toggle
            document.getElementById('mobileMenuBtn')?.addEventListener('click', function() {
                const menu = document.getElementById('mobileMenu');
                if (menu) {
                    menu.classList.toggle('hidden');
                }
            });
        </script>
    </body>
    </html>
  `)
})

export default app
