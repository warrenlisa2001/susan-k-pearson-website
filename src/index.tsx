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
    location: "Ireland",
    rating: 5,
    text: "Working with Susan has been nothing short of life-changing. I came to her feeling disconnected and carrying years of unresolved tension. From the very first session, I felt seen, heard, and held in a way I had never experienced before. Susan's mastery of energy work, combined with her intuitive understanding of exactly what I needed, created profound shifts that I can only describe as miraculous. Her Deep Alignment sessions helped me release patterns I didn't even know I was holding. The integration of Anma, Reiki, and the Nir Levy Method is seamless and extraordinary. I've recommended her to everyone I know - she is truly exceptional. If you're looking for genuine, transformational healing, Susan is the only practitioner you need.",
    image: "👩🏻"
  },
  {
    id: 2,
    name: "Catherine R.",
    location: "New York, USA",
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
    text: "Susan has a rare gift that transcends technique. Her Reiki sessions are deeply restorative, and I always leave feeling renewed on every level - physically, emotionally, and spiritually. She creates such a sacred, elegant space for healing. The chakra balancing work she does is the most profound I've experienced. I've worked with many practitioners over the years, and Susan stands out as truly exceptional. She is the healer other healers go to.",
    image: "👩🏻‍🦱"
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "The SKP Method is unlike anything I've experienced across three continents. Susan's integration of somatic work, energy medicine, and the Nir Levy Method helped me reconnect with my body in a way I never thought possible after years of disconnection following a traumatic accident. Her wisdom, professionalism, and genuine care for her clients' wellbeing shine through in every session. The Ampuku work alone was worth the investment, but combined with everything else she offers, it's truly transformational. Worth every dirham.",
    image: "👨🏻"
  },
  {
    id: 6,
    name: "Sophia Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I came to Susan after trying everything - traditional therapy, medication, various alternative treatments. Nothing prepared me for the depth of her work. The way she combines Japanese healing arts with modern consciousness techniques is revolutionary. Her Anma sessions released tension I didn't know I was holding, and the hypnotherapy helped me finally break free from anxiety patterns that had controlled my life. Susan's space is a sanctuary of elegance and healing power. She is a true master of her craft.",
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
        <title>Susan K Pearson | Elemental Healing</title>
        <meta name="description" content="Master-level Reiki, Energy Medicine, and Hypnotherapy. Elemental Guidance to awaken Your Healing Intelligence. Worldwide practice serving clients remotely and in-person.">
        
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
        <!-- End Google Tag Manager -->
        
        <!-- Google Analytics 4 -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        </script>
        <!-- End Google Analytics 4 -->
        
        <!-- Schema.org Structured Data -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Susan K Pearson - Elemental Healing",
          "image": "https://susankpearson.com/images/skp-logo-new.png",
          "@id": "https://susankpearson.com",
          "url": "https://susankpearson.com",
          "telephone": "+971551770957",
          "email": "susan@susankpearson.com",
          "priceRange": "AED 800 - AED 1,200",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Worldwide",
            "addressLocality": "Remote & In-Person Sessions"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2048,
            "longitude": 55.2708
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.facebook.com/susankpearson",
            "https://www.instagram.com/susankpearson",
            "https://wa.me/971551770957"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "6"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Healing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep Alignment Therapy",
                  "description": "Full-spectrum healing: Energy alignment, hara work, meridian balancing, subconscious integration",
                  "provider": {
                    "@type": "Person",
                    "name": "Susan K Pearson"
                  }
                },
                "price": "950",
                "priceCurrency": "AED"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "The Nir Levy Method",
                  "description": "Ancient Anma bodywork with Five Elements Body Reading",
                  "provider": {
                    "@type": "Person",
                    "name": "Susan K Pearson"
                  }
                },
                "price": "950",
                "priceCurrency": "AED"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "The Full Frequency Session",
                  "description": "All modalities integrated: Reiki, hara work, meridian balancing, chakra harmonizing, hypnotherapy, Nir Levy Method",
                  "provider": {
                    "@type": "Person",
                    "name": "Susan K Pearson"
                  }
                },
                "price": "1200",
                "priceCurrency": "AED"
              }
            ]
          }
        }
        </script>
        
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Susan K Pearson",
          "url": "https://susankpearson.com",
          "image": "https://susankpearson.com/images/susan-professional.jpg",
          "jobTitle": "Multidimensional Healing Practitioner",
          "description": "Master-level Reiki practitioner (20+ years) and Clinical Hypnotherapist specializing in multidimensional healing",
          "email": "susan@susankpearson.com",
          "telephone": "+971551770957",
          "knowsAbout": [
            "Reiki",
            "Energy Medicine",
            "Hypnotherapy",
            "Nir Levy Method",
            "Anma",
            "Ampuku",
            "Chakra Balancing",
            "Somatic Healing"
          ],
          "sameAs": [
            "https://www.facebook.com/susankpearson",
            "https://www.instagram.com/susankpearson"
          ]
        }
        </script>
        <!-- End Schema.org Structured Data -->
        
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
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        <!-- Navigation -->
        <nav class="fixed w-full bg-black backdrop-blur-sm shadow-lg z-50 border-b border-gold/40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-28 md:h-32">
                    <div class="flex items-center">
                        <a href="#home" class="flex items-center py-2">
                            <img src="/images/skp-logo-new.png" alt="Susan K Pearson - Healing Therapies" class="h-24 md:h-28 w-auto">
                        </a>
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <a href="#home" class="text-gold hover:text-champagne transition-colors font-medium">Home</a>
                        <a href="#about" class="text-gold hover:text-champagne transition-colors font-medium">About</a>
                        <div class="relative group">
                            <button class="text-gold hover:text-champagne transition-colors font-medium flex items-center">
                                Services <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute left-0 mt-2 w-80 bg-charcoal rounded-sm shadow-xl border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <a href="/nir-levy-method" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">The Nir Levy Method</div>
                                    <div class="text-xs text-cream/60">Holistic bodywork with Five Elements</div>
                                </a>
                                <a href="/deep-alignment-therapy" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">Deep Alignment Therapy</div>
                                    <div class="text-xs text-cream/60">Full-spectrum healing journey</div>
                                </a>
                                <a href="/hara-release" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">Hara Release</div>
                                    <div class="text-xs text-cream/60">Anma & Ampuku bodywork</div>
                                </a>
                                <a href="/energetic-recalibration" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">Energetic Recalibration</div>
                                    <div class="text-xs text-cream/60">Reiki + Chakra harmonizing</div>
                                </a>
                                <a href="/subconscious-shift-therapy" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">Subconscious Shift Therapy</div>
                                    <div class="text-xs text-cream/60">Hypnotherapy + Nir Levy Method</div>
                                </a>
                                <a href="/full-frequency-session" class="block px-6 py-3 hover:bg-gold/10 border-b border-gold/10 transition-colors">
                                    <div class="font-medium text-cream">The Full Frequency Session</div>
                                    <div class="text-xs text-cream/60">All modalities | One deep journey</div>
                                </a>
                                <a href="#services" class="block px-6 py-3 hover:bg-gold/10 text-gold transition-colors font-medium">
                                    View All Services →
                                </a>
                            </div>
                        </div>
                        <a href="#pricing" class="text-gold hover:text-champagne transition-colors font-medium">Pricing</a>
                        <a href="#blog" class="text-gold hover:text-champagne transition-colors font-medium">Blog</a>
                        <a href="#faq" class="text-gold hover:text-champagne transition-colors font-medium">FAQ</a>
                        <a href="#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium shadow-lg">Book Session</a>
                    </div>
                    <button id="mobileMenuBtn" class="md:hidden text-gold">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobileMenu" class="hidden md:hidden bg-charcoal border-t border-gold/40">
                <div class="px-4 py-4 space-y-3">
                    <a href="#home" class="block text-gold hover:text-champagne transition-colors font-medium">Home</a>
                    <a href="#about" class="block text-gold hover:text-champagne transition-colors font-medium">About</a>
                    <div class="border-l-2 border-gold/40 pl-3 space-y-2">
                        <div class="text-xs text-gold/80 uppercase tracking-wide mb-2">Services</div>
                        <a href="/nir-levy-method" class="block text-cream hover:text-gold transition-colors text-sm">The Nir Levy Method</a>
                        <a href="/deep-alignment-therapy" class="block text-cream hover:text-gold transition-colors text-sm">Deep Alignment Therapy</a>
                        <a href="/hara-release" class="block text-cream hover:text-gold transition-colors text-sm">Hara Release</a>
                        <a href="/energetic-recalibration" class="block text-cream hover:text-gold transition-colors text-sm">Energetic Recalibration</a>
                        <a href="/subconscious-shift-therapy" class="block text-cream hover:text-gold transition-colors text-sm">Subconscious Shift Therapy</a>
                        <a href="/full-frequency-session" class="block text-cream hover:text-gold transition-colors text-sm">Full Frequency Session</a>
                        <a href="#services" class="block text-gold hover:text-champagne transition-colors text-sm font-medium">All Services →</a>
                    </div>
                    <a href="#pricing" class="block text-gold hover:text-champagne transition-colors font-medium">Pricing</a>
                    <a href="#blog" class="block text-gold hover:text-champagne transition-colors font-medium">Blog</a>
                    <a href="#faq" class="block text-gold hover:text-champagne transition-colors font-medium">FAQ</a>
                    <a href="#booking" class="block bg-gold text-black px-4 py-2 rounded-sm hover:bg-champagne transition-colors font-medium text-center shadow-lg">Book Session</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="pt-28 md:pt-32 relative overflow-hidden bg-black">
            <div class="relative w-full py-24 md:py-32 flex items-center justify-center">
                <!-- Subtle Lotus Pattern Background -->
                <div class="absolute inset-0 opacity-5">
                    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400">
                        <!-- Left Lotus Petals -->
                        <ellipse cx="300" cy="200" rx="80" ry="120" fill="#C8A974" transform="rotate(-30 300 200)"/>
                        <ellipse cx="280" cy="200" rx="70" ry="110" fill="#C8A974" transform="rotate(-50 280 200)"/>
                        <ellipse cx="320" cy="200" rx="70" ry="110" fill="#C8A974" transform="rotate(-10 320 200)"/>
                        <!-- Right Lotus Petals -->
                        <ellipse cx="900" cy="200" rx="80" ry="120" fill="#C8A974" transform="rotate(30 900 200)"/>
                        <ellipse cx="920" cy="200" rx="70" ry="110" fill="#C8A974" transform="rotate(50 920 200)"/>
                        <ellipse cx="880" cy="200" rx="70" ry="110" fill="#C8A974" transform="rotate(10 880 200)"/>
                    </svg>
                </div>
                
                <div class="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <!-- Delicate Top Flourish -->
                    <div class="mb-8 flex justify-center items-center gap-4">
                        <div class="w-16 h-px bg-gradient-to-r from-transparent to-gold/40"></div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gold/60">
                            <circle cx="12" cy="12" r="2" fill="currentColor"/>
                            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M5 5 L8 8 M16 16 L19 19 M19 5 L16 8 M8 16 L5 19" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
                        </svg>
                        <div class="w-16 h-px bg-gradient-to-l from-transparent to-gold/40"></div>
                    </div>
                    
                    <p class="text-3xl md:text-4xl text-gold font-light mb-8 leading-relaxed tracking-wide" style="font-family: 'Cormorant Garamond', serif;">
                        Elemental Guidance to awaken Your Healing Intelligence
                    </p>
                    
                    <!-- Subtle Divider -->
                    <div class="flex justify-center items-center gap-3 mb-10">
                        <div class="w-8 h-px bg-gold/30"></div>
                        <div class="w-1.5 h-1.5 rounded-full bg-gold/50"></div>
                        <div class="w-8 h-px bg-gold/30"></div>
                    </div>
                    
                    <a href="#booking" class="inline-block bg-gold text-black px-12 py-4 rounded-sm hover:bg-champagne transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-gold/20">
                        Book a Session
                    </a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-cream">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Susan's Photo -->
                <div class="text-center mb-12">
                    <img src="/images/susan-professional.jpg" alt="Susan K Pearson" class="profile-image mx-auto mb-6 shadow-2xl">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-2">Susan K Pearson</h2>
                    <p class="text-xl text-gold/90 font-medium mb-4">Healing Therapies | Worldwide</p>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <div class="flex justify-center gap-6 text-charcoal/70">
                        <a href="tel:+971551770957" class="hover:text-gold transition-colors">
                            <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                        </a>
                        <a href="mailto:susan@susankpearson.com" class="hover:text-gold transition-colors">
                            <i class="fas fa-envelope mr-2"></i>susan@susankpearson.com
                        </a>
                    </div>
                </div>
                
                <!-- Bio Content -->
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg mb-8">
                        <div class="space-y-6 text-charcoal/80 leading-relaxed">
                            <p class="text-xl font-medium text-charcoal mb-8">
                                Susan K Pearson is a practitioner of multidimensional healing, integrating Reiki, 
                                the Nir Levy Method, hypnotherapy, Anma, Ampuku, and chakra balancing into a singular, elegant approach.
                            </p>
                            
                            <p class="mb-6">
                                Step into a space designed for transformation. In a room shaped by calm, depth, and beauty, 
                                you are guided through a process of hara alignment, energetic clearing, and subconscious release. 
                                Every session is tailored intuitively to your body's intelligence — a blend of ancient Japanese 
                                bodywork, Reiki, and deep inner work.
                            </p>
                            
                            <p class="mb-6">
                                With a background rooted in both <em>somatic wisdom<sup>*</sup></em> and consciousness work, 
                                Susan combines precision touch with energetic attunement, allowing clients to release emotional 
                                density, reconnect with their center, and awaken the intelligence stored within the body.
                            </p>
                            
                            <p class="mb-8">
                                Her practice is guided by presence, intuition, and respect for the body's natural capacity to heal.
                            </p>
                            
                            <div class="bg-cream/30 border-l-4 border-gold p-6 rounded-sm">
                                <p class="text-sm text-charcoal/70 italic">
                                    <sup>*</sup><strong>Somatic wisdom:</strong> the body as a deep source of intelligence, holding 
                                    intuitive knowledge, emotions, and experiences. Listening to physical sensations, breath, and 
                                    movement guides us toward wholeness and authentic living, rather than relying solely on the mind.
                                </p>
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
                                    <span>Holy Fire® III Reiki Master</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Holy Fire® III Karuna Reiki Master</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>Multi dimensional therapeutic practitioner</span>
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
                                    <span>Anma (Traditional Japanese Bodywork)</span>
                                </li>
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
                                    <span>Worldwide Practice | Remote & In-Person Sessions</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mr-3 mt-1"></i>
                                    <span>20+ Years Professional Practice</span>
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
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Core Sessions</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
                        Step into a space designed for transformation. In a room shaped by calm, depth, and beauty, 
                        you are guided through a process of hara alignment, energetic clearing, and subconscious release.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Deep Alignment Therapy -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-spa text-sage text-xl"></i>
                            </div>
                            <h3 class="text-xl font-serif text-charcoal mb-2">Deep Alignment Therapy</h3>
                            <p class="text-xs text-gold mb-4 uppercase tracking-wide">Full-Spectrum Healing</p>
                        </div>
                        <p class="text-charcoal/70 mb-6 leading-relaxed text-sm">
                            A full-spectrum healing journey. Combining energy alignment, hara work, meridian balancing, 
                            and subconscious transformation, this session restores clarity, guided breath, and inner spaciousness.
                        </p>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium text-sm">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <!-- Hara Release Session -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-earth/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-hands-helping text-earth text-xl"></i>
                            </div>
                            <h3 class="text-xl font-serif text-charcoal mb-2">Hara Release</h3>
                            <p class="text-xs text-gold mb-4 uppercase tracking-wide">Anma & Ampuku</p>
                        </div>
                        <p class="text-charcoal/70 mb-4 leading-relaxed text-sm">
                            <strong>Grounding. Opening. Releasing.</strong>
                        </p>
                        <p class="text-charcoal/70 mb-6 leading-relaxed text-sm">
                            Gentle abdominal unwinding that frees held emotional patterns, restores organ flow, 
                            and reconnects you to your center.
                        </p>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium text-sm">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <!-- Energetic Recalibration -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-atom text-gold text-xl"></i>
                            </div>
                            <h3 class="text-xl font-serif text-charcoal mb-2">Energetic Recalibration</h3>
                            <p class="text-xs text-gold mb-4 uppercase tracking-wide">Reiki + Chakra Harmonizing</p>
                        </div>
                        <p class="text-charcoal/70 mb-6 leading-relaxed text-sm">
                            Master-level Reiki (20+ years) combined with chakra balancing to clear energetic blockages, 
                            restore flow, and harmonize your subtle body systems.
                        </p>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium text-sm">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <!-- Subconscious Shift Therapy -->
                    <div class="bg-white p-8 rounded-sm card-hover">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                <i class="fas fa-brain text-sage text-xl"></i>
                            </div>
                            <h3 class="text-xl font-serif text-charcoal mb-2">Subconscious Shift Therapy</h3>
                            <p class="text-xs text-gold mb-4 uppercase tracking-wide">Hypnotherapy + Nir Levy Method</p>
                        </div>
                        <p class="text-charcoal/70 mb-4 leading-relaxed text-sm">
                            <strong>Repattern your inner landscape.</strong>
                        </p>
                        <p class="text-charcoal/70 mb-6 leading-relaxed text-sm">
                            Hypnotherapy and the Nir Levy Method work together to resolve emotional blocks 
                            and rewire conditioned responses.
                        </p>
                        <a href="#booking" class="text-gold hover:text-gold/80 transition-colors font-medium text-sm">
                            Book Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Fifth Session - Full Frequency -->
                <div class="mt-8 max-w-4xl mx-auto">
                    <div class="bg-charcoal p-10 rounded-sm shadow-xl">
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-infinity text-gold text-2xl"></i>
                            </div>
                            <h3 class="text-3xl font-serif text-cream mb-2">The Full Frequency Session</h3>
                            <p class="text-gold uppercase tracking-widest text-xs">All Modalities | One Deep Journey</p>
                        </div>
                        <p class="text-cream/90 leading-relaxed text-center max-w-2xl mx-auto">
                            An immersive journey integrating every modality — Reiki, hara work, meridian balancing, 
                            chakra harmonizing, hypnotherapy, and the Nir Levy Method. For profound transformation 
                            and complete recalibration of body, mind, and spirit.
                        </p>
                        <div class="text-center mt-8">
                            <a href="#booking" class="inline-block bg-gold text-charcoal px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                                Experience Full Frequency <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
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

                    <!-- Hypnotherapy Pricing -->
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
                        <span><i class="fas fa-globe text-gold mr-2"></i>Worldwide Practice</span>
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
                
                <!-- Testimonials Carousel -->
                <div class="relative max-w-5xl mx-auto">
                    <!-- Carousel Container -->
                    <div class="overflow-hidden rounded-sm">
                        <div id="testimonialCarousel" class="flex transition-transform duration-500 ease-in-out">
                            ${testimonials.map((testimonial, index) => `
                                <div class="min-w-full px-4">
                                    <div class="bg-midnight border-2 border-gold/30 p-8 md:p-12 rounded-sm">
                                        <!-- Quote Icon -->
                                        <div class="text-center mb-6">
                                            <i class="fas fa-quote-left text-gold text-4xl opacity-50"></i>
                                        </div>
                                        
                                        <!-- Testimonial Text -->
                                        <p class="text-cream/90 text-lg md:text-xl leading-relaxed italic text-center mb-8">
                                            "${testimonial.text}"
                                        </p>
                                        
                                        <!-- Client Info -->
                                        <div class="flex flex-col items-center">
                                            <div class="text-5xl mb-4">${testimonial.image}</div>
                                            <h4 class="font-serif text-2xl text-gold mb-1">${testimonial.name}</h4>
                                            <p class="text-sm text-cream/60 mb-3">${testimonial.location}</p>
                                            <div class="flex gap-1">
                                                ${Array(testimonial.rating).fill('').map(() => '<i class="fas fa-star text-gold"></i>').join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button id="prevTestimonial" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gold hover:bg-champagne text-midnight w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button id="nextTestimonial" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gold hover:bg-champagne text-midnight w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    
                    <!-- Dots Indicator -->
                    <div class="flex justify-center gap-3 mt-8">
                        ${testimonials.map((_, index) => `
                            <button class="testimonial-dot w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-gold w-8' : 'bg-cream/30 hover:bg-cream/50'}" data-index="${index}"></button>
                        `).join('')}
                    </div>
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

        <!-- Q&A / FAQ Section -->
        <section id="faq" class="py-20 bg-cream">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-serif font-light text-charcoal mb-4">Frequently Asked Questions</h2>
                    <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p class="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        Everything you need to know about sessions, healing modalities, and what to expect
                    </p>
                </div>

                <!-- FAQ Categories -->
                <div class="mb-12 flex flex-wrap justify-center gap-4">
                    <button class="faq-category-btn active px-6 py-2 rounded-sm bg-gold text-black font-medium transition-all" data-category="all">
                        All Questions
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-sm bg-white border border-gold/30 text-charcoal hover:bg-gold/10 font-medium transition-all" data-category="general">
                        General
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-sm bg-white border border-gold/30 text-charcoal hover:bg-gold/10 font-medium transition-all" data-category="sessions">
                        Sessions
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-sm bg-white border border-gold/30 text-charcoal hover:bg-gold/10 font-medium transition-all" data-category="modalities">
                        Modalities
                    </button>
                    <button class="faq-category-btn px-6 py-2 rounded-sm bg-white border border-gold/30 text-charcoal hover:bg-gold/10 font-medium transition-all" data-category="practical">
                        Practical Info
                    </button>
                </div>

                <!-- FAQ Items -->
                <div class="space-y-4" id="faqContainer">
                    <!-- General Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What makes your approach different from traditional therapy or massage?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">My work integrates multiple healing modalities to address the whole person—physical, emotional, energetic, and spiritual. Unlike traditional massage, which focuses primarily on muscle tension, or talk therapy, which works with the conscious mind, I work with:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Energy systems:</strong> Chakras, meridians, and the subtle body</li>
                                <li><strong>The subconscious mind:</strong> Through hypnotherapy to address root causes</li>
                                <li><strong>The nervous system:</strong> Using somatic techniques to release trauma held in the body</li>
                                <li><strong>The physical body:</strong> Through Anma, Ampuku, and bodywork</li>
                            </ul>
                            <p class="mt-3">This integrative approach allows for deeper, more lasting transformation than any single modality alone.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Do I need to believe in energy healing for it to work?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">No, you don't need to believe in energy healing for it to be effective. Energy work operates on a physical, measurable level—your body's bioelectromagnetic fields—regardless of your beliefs.</p>
                            <p class="mb-3">That said, an open, receptive attitude does enhance the experience. If you're skeptical, that's completely fine—many of my clients started as skeptics. I encourage you to:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Come with curiosity rather than expectation</li>
                                <li>Notice what you experience without judgment</li>
                                <li>Give yourself permission to simply receive</li>
                            </ul>
                            <p class="mt-3">The results speak for themselves, and many former skeptics become my most enthusiastic advocates!</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Is energy healing safe? Are there any side effects?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Energy healing is extremely safe and non-invasive. It works with your body's natural healing processes, never forcing or overriding them. However, as your body releases stored tension and energy, you may experience:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Emotional releases:</strong> Tears, laughter, or other emotions</li>
                                <li><strong>Physical sensations:</strong> Tingling, warmth, temporary soreness</li>
                                <li><strong>Fatigue:</strong> As your body integrates the work</li>
                                <li><strong>Vivid dreams:</strong> As processing continues during sleep</li>
                                <li><strong>Temporary symptom increase:</strong> Before improvement (healing crisis)</li>
                            </ul>
                            <p class="mt-3">These are all normal signs of healing and typically resolve within 24-48 hours. I provide integration support to help you navigate any responses.</p>
                        </div>
                    </div>

                    <!-- Session Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How long is a typical session and how much does it cost?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Session lengths and investment vary by modality:</p>
                            <ul class="list-disc pl-6 space-y-3">
                                <li><strong>Deep Alignment Therapy:</strong> 90 minutes - AED 950 (≈$260 USD)<br>
                                    <span class="text-sm text-charcoal/60">Full-spectrum healing: Energy alignment, hara work, meridian balancing, subconscious integration</span>
                                </li>
                                <li><strong>Hara Release (Anma & Ampuku):</strong> 60-75 minutes - AED 850 (≈$230 USD)<br>
                                    <span class="text-sm text-charcoal/60">Traditional Japanese bodywork for grounding, opening, and releasing</span>
                                </li>
                                <li><strong>Energetic Recalibration (Reiki):</strong> 60 minutes - AED 800 (≈$220 USD)<br>
                                    <span class="text-sm text-charcoal/60">Master-level Reiki (20+ years) with chakra harmonizing</span>
                                </li>
                                <li><strong>Subconscious Shift Therapy:</strong> 75 minutes - AED 850 (≈$230 USD)<br>
                                    <span class="text-sm text-charcoal/60">Hypnotherapy + Nir Levy Method for emotional blocks and conditioned patterns</span>
                                </li>
                                <li><strong>The Nir Levy Method:</strong> 90 minutes - AED 950 (≈$260 USD)<br>
                                    <span class="text-sm text-charcoal/60">Ancient Anma bodywork with Five Elements Body Reading</span>
                                </li>
                                <li><strong>The Full Frequency Session:</strong> 120 minutes - AED 1,200 (≈$325 USD)<br>
                                    <span class="text-sm text-charcoal/60">All modalities integrated: Reiki, hara work, meridian balancing, chakra harmonizing, hypnotherapy, Nir Levy Method</span>
                                </li>
                            </ul>
                            <p class="mt-3">Package discounts are available for multiple sessions. All sessions include pre-consultation and integration support.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How many sessions will I need?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">This varies greatly depending on your goals, the issues we're addressing, and your body's healing timeline. As a general guide:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Acute stress or tension:</strong> 1-3 sessions</li>
                                <li><strong>Chronic patterns or pain:</strong> 3-6 sessions</li>
                                <li><strong>Deep trauma or complex issues:</strong> 6-12+ sessions</li>
                                <li><strong>Ongoing wellness support:</strong> Monthly maintenance sessions</li>
                            </ul>
                            <p class="mt-3">Many clients notice improvements after just one session, with changes deepening over time. We'll discuss your specific needs during our initial consultation and create a personalized plan. You're never locked into a specific number of sessions—we'll work at your pace.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What should I wear to a session? Do I need to undress?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Comfort is key! Here's what to wear for different modalities:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Reiki & Energy Work:</strong> You remain fully clothed. Wear comfortable, loose clothing (yoga wear, soft fabrics)</li>
                                <li><strong>Hypnotherapy:</strong> Whatever makes you feel comfortable—you'll be sitting or reclining in a chair</li>
                                <li><strong>Somatic Work & Bodywork:</strong> Comfortable, stretchy clothing that allows movement. For Anma and Ampuku, I may need access to your abdomen (you can lift your shirt or I can work through clothing)</li>
                            </ul>
                            <p class="mt-3">You never need to undress unless you choose to for your comfort. Everything is done with full consent and respect for your boundaries.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What does a typical session look like?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Here's what you can expect in a Deep Alignment Session:</p>
                            <ol class="list-decimal pl-6 space-y-3">
                                <li><strong>Welcome & Check-In (10 min):</strong> We discuss what brings you in, your intentions, and any specific concerns</li>
                                <li><strong>Energy Assessment (5 min):</strong> I scan your energy field and chakras to identify blockages or imbalances</li>
                                <li><strong>Hands-On Healing (60 min):</strong> You lie comfortably on a massage table while I work with Reiki, energy medicine, and somatic techniques. Many clients enter a deep meditative state</li>
                                <li><strong>Integration (10 min):</strong> Time to process, ask questions, and receive guidance for continued healing</li>
                                <li><strong>Closing (5 min):</strong> Recommendations for aftercare and scheduling if needed</li>
                            </ol>
                            <p class="mt-3">Sessions are conducted in a safe, sacred space with soft lighting, gentle music, and complete privacy.</p>
                        </div>
                    </div>

                    <!-- Modality Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What is Reiki and how does it work?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>Reiki</strong> (pronounced "ray-key") is a Japanese healing technique that translates to "universal life force energy." Developed by Mikao Usui in the early 1900s, it's now practiced worldwide as a gentle yet powerful healing modality.</p>
                            
                            <p class="mb-3"><strong>What Reiki Is:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Energy Medicine:</strong> Works with your body's bioelectromagnetic field and subtle energy systems</li>
                                <li><strong>Non-invasive:</strong> Fully clothed, hands placed on or above the body</li>
                                <li><strong>Intelligent Energy:</strong> Reiki goes where it's needed most—you don't have to direct it</li>
                                <li><strong>Holistic:</strong> Addresses physical, emotional, mental, and spiritual imbalances simultaneously</li>
                                <li><strong>Complementary:</strong> Works beautifully alongside medical treatment, never interfering</li>
                            </ul>

                            <p class="mb-3"><strong>How Reiki Works:</strong></p>
                            <ol class="list-decimal pl-6 space-y-2 mb-3">
                                <li><strong>Energy Channeling:</strong> As a Master-level practitioner, I've been attuned to channel high-frequency healing energy. I serve as a conduit, not the source—the energy comes through me, not from me.</li>
                                <li><strong>Biofield Balancing:</strong> Reiki clears blockages in your energy field (chakras, meridians, aura) that may be causing physical or emotional symptoms</li>
                                <li><strong>Resonance Healing:</strong> The high-frequency Reiki energy raises your body's vibration, helping cells return to their optimal state</li>
                                <li><strong>Nervous System Reset:</strong> Shifts you from sympathetic (stress) to parasympathetic (healing) mode, allowing deep restoration</li>
                                <li><strong>Subconscious Release:</strong> Often releases suppressed emotions, traumas, or limiting beliefs held in the energy field</li>
                            </ol>

                            <p class="mb-3"><strong>What You Might Experience:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Physical:</strong> Warmth, tingling, pulsing, coolness, heaviness, or floating sensations</li>
                                <li><strong>Emotional:</strong> Deep peace, emotional releases (tears, laughter), joy, or feelings of love</li>
                                <li><strong>Visual:</strong> Colors, light, images, or memories with eyes closed</li>
                                <li><strong>Mental:</strong> Clarity, insights, downloads of information, or gentle awareness shifts</li>
                                <li><strong>Spiritual:</strong> Sense of connection, expanded consciousness, or divine presence</li>
                            </ul>

                            <p class="mb-3"><strong>My Training & Approach:</strong></p>
                            <p class="mb-3">I hold Master-level certifications in both:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Usui Reiki:</strong> The foundational system, gentle and balancing</li>
                                <li><strong>Karuna Reiki®:</strong> Advanced system for deep emotional healing and compassionate action</li>
                            </ul>

                            <p class="mb-3"><strong>Scientific Support:</strong></p>
                            <p class="mb-2">Research has shown Reiki may:</p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Reduce pain, anxiety, and depression (numerous peer-reviewed studies)</li>
                                <li>Lower blood pressure and heart rate</li>
                                <li>Improve sleep quality</li>
                                <li>Enhance recovery from surgery</li>
                                <li>Support immune function</li>
                                <li>Increase feelings of peace and well-being</li>
                            </ul>

                            <p class="mt-3"><strong>What Makes My Reiki Different:</strong></p>
                            <p class="mb-2">I integrate Reiki with other modalities for enhanced effectiveness:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Combined with somatic bodywork (Anma/Ampuku) for physical release</li>
                                <li>Layered with energy medicine protocols for specific conditions</li>
                                <li>Integrated with hypnotherapy for subconscious reprogramming</li>
                                <li>Enhanced with chakra balancing and meridian clearing</li>
                            </ul>

                            <p class="mt-3">Reiki is deeply peaceful, safe for all ages, and many clients describe it as the most relaxing experience they've ever had. It's especially effective for stress, anxiety, pain, insomnia, and supporting overall wellness.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What is hypnotherapy and will I be under your control?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>Let me dispel the myths immediately:</strong> You remain fully conscious and in complete control during hypnotherapy. You're not asleep, unconscious, or under anyone's control. You cannot be made to do anything against your will or values. Hypnosis is simply a deeply relaxed, focused state (similar to meditation or daydreaming) where your subconscious mind becomes more receptive to positive suggestions and healing.</p>
                            
                            <p class="mb-3"><strong>What Hypnotherapy Really Is:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>A Natural Brain State:</strong> Theta brainwave state (4-8 Hz) you enter naturally many times daily—when absorbed in a book, driving on autopilot, or in the moments before sleep</li>
                                <li><strong>Heightened Suggestibility:</strong> Your critical conscious mind relaxes, allowing direct communication with the subconscious (where habits, beliefs, and patterns live)</li>
                                <li><strong>Focused Awareness:</strong> You're deeply relaxed yet mentally alert and aware of everything happening</li>
                                <li><strong>Therapeutic Tool:</strong> Used clinically for behavior change, pain management, trauma healing, and personal transformation</li>
                                <li><strong>Evidence-Based:</strong> Recognized by the American Psychological Association and used in medical settings worldwide</li>
                            </ul>

                            <p class="mb-3"><strong>How Hypnotherapy Works:</strong></p>
                            <p class="mb-2">Your mind has two primary aspects:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Conscious Mind (10%):</strong> Logical, analytical, willpower-driven. This is where you make decisions and try to change through effort.</li>
                                <li><strong>Subconscious Mind (90%):</strong> Holds all your memories, beliefs, habits, emotions, and automatic responses. This runs 95% of your daily behavior.</li>
                            </ul>
                            <p class="mb-3">When you try to change through willpower alone (conscious mind), you're fighting against the much more powerful subconscious. Hypnotherapy bypasses the conscious mind's resistance to communicate directly with the subconscious, where lasting change happens.</p>

                            <p class="mb-3"><strong>My Hypnotherapy Approach (Ericksonian Method):</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Permissive vs. Authoritarian:</strong> I use gentle, indirect suggestions that honor your autonomy (Ericksonian approach) rather than commanding directives</li>
                                <li><strong>Metaphor & Story:</strong> The subconscious speaks in symbols, so I use metaphors, guided imagery, and storytelling</li>
                                <li><strong>Customized:</strong> Every session is tailored to your unique needs, language patterns, and goals</li>
                                <li><strong>Multi-Layered:</strong> I address not just the symptom but the root cause and underlying needs</li>
                            </ul>

                            <p class="mb-3"><strong>What Hypnotherapy Can Help With:</strong></p>
                            <p class="mb-2"><strong>Behavioral Patterns:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Breaking unwanted habits (smoking, nail biting, emotional eating)</li>
                                <li>Building new positive habits and routines</li>
                                <li>Overcoming procrastination and self-sabotage</li>
                                <li>Enhancing motivation and discipline</li>
                            </ul>

                            <p class="mb-2"><strong>Emotional Healing:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Anxiety, panic attacks, and phobias</li>
                                <li>Depression and low mood</li>
                                <li>Anger and emotional regulation</li>
                                <li>Grief and loss processing</li>
                                <li>Trauma resolution (PTSD, childhood wounds)</li>
                            </ul>

                            <p class="mb-2"><strong>Belief System Work:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Reprogramming limiting beliefs ("I'm not good enough," "I don't deserve happiness")</li>
                                <li>Building self-esteem and confidence</li>
                                <li>Releasing perfectionism and people-pleasing</li>
                                <li>Installing empowering beliefs and identity shifts</li>
                            </ul>

                            <p class="mb-2"><strong>Physical Applications:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Pain management (chronic pain, migraines)</li>
                                <li>Sleep disorders and insomnia</li>
                                <li>IBS and stress-related digestive issues</li>
                                <li>Preparation for surgery or medical procedures</li>
                            </ul>

                            <p class="mb-3"><strong>A Typical Hypnotherapy Session (75 minutes):</strong></p>
                            <ol class="list-decimal pl-6 space-y-2 mb-3">
                                <li><strong>Consultation (15 mins):</strong> We discuss your goals, history, and what you'd like to shift. I explain the process and answer questions.</li>
                                <li><strong>Induction (10 mins):</strong> Guided relaxation using breath, body awareness, and visualization to enter the hypnotic state</li>
                                <li><strong>Deepening (5 mins):</strong> Using techniques like counting down stairs, progressive relaxation, or imagery to deepen the trance</li>
                                <li><strong>Therapeutic Work (30-35 mins):</strong> The core healing work using techniques like:
                                    <ul class="list-disc pl-8 space-y-1 mt-2">
                                        <li><strong>Regression:</strong> Revisiting past events to release emotional charge</li>
                                        <li><strong>Parts Therapy:</strong> Dialoguing with different aspects of self</li>
                                        <li><strong>Future Pacing:</strong> Rehearsing new behaviors and outcomes</li>
                                        <li><strong>Metaphor Therapy:</strong> Using stories for unconscious change</li>
                                        <li><strong>Suggestion Work:</strong> Installing new beliefs and patterns</li>
                                        <li><strong>Resource Building:</strong> Anchoring states of calm, confidence, power</li>
                                    </ul>
                                </li>
                                <li><strong>Emergence (5 mins):</strong> Gently bringing you back to full waking consciousness, feeling refreshed</li>
                                <li><strong>Integration (10 mins):</strong> Discussing the experience, insights gained, and providing tools for continued transformation</li>
                            </ol>

                            <p class="mb-3"><strong>What You'll Experience:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Deep Relaxation:</strong> Your body feels heavy, relaxed, and comfortable—like sinking into a warm bath</li>
                                <li><strong>Focused Awareness:</strong> Distractions fade away; you're absorbed in the process</li>
                                <li><strong>Time Distortion:</strong> 45 minutes might feel like 10 minutes (or vice versa)</li>
                                <li><strong>Vivid Imagery:</strong> Visualizations feel more real and immersive</li>
                                <li><strong>Emotional Releases:</strong> Tears, laughter, or other emotions may arise as old patterns release</li>
                                <li><strong>Physical Sensations:</strong> Tingling, warmth, lightness, or energy moving</li>
                                <li><strong>Insights & Clarity:</strong> Sudden understanding of patterns, "aha" moments</li>
                                <li><strong>Complete Memory:</strong> You remember the session (unlike stage hypnosis portrayals)</li>
                                <li><strong>Refreshed After:</strong> Most feel energized, clear, and lighter afterward</li>
                            </ul>

                            <p class="mb-3"><strong>Important Truths About Hypnotherapy:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>✓ You remain in complete control at all times</li>
                                <li>✓ You hear everything and can speak anytime</li>
                                <li>✓ You can open your eyes and end the session whenever you choose</li>
                                <li>✓ You cannot be made to do anything against your will, morals, or values</li>
                                <li>✓ It's a collaborative process—you're an active, empowered participant</li>
                                <li>✓ You cannot get "stuck" in hypnosis (you'd simply open your eyes or fall asleep)</li>
                            </ul>

                            <p class=\"mb-3\"><strong>Research & Effectiveness:</strong></p>\n                            <p class=\"mb-2\">Clinical studies show hypnotherapy can be highly effective for:</p>\n                            <ul class=\"list-disc pl-6 space-y-1 mb-3\">\n                                <li>Breaking habits: 90%+ success rate for smoking cessation after 6 sessions</li>\n                                <li>Anxiety reduction: Comparable to medication without side effects</li>\n                                <li>Pain management: Used in hospitals for surgery, childbirth, chronic pain</li>\n                                <li>IBS: APA recognizes hypnotherapy as evidence-based treatment for IBS</li>\n                                <li>PTSD: Effective for trauma resolution when combined with other therapies</li>\n                            </ul>

                            <p class="mb-3"><strong>Why Choose Hypnotherapy?</strong></p>\n                            <p class="mb-2">Consider hypnotherapy if:</p>\n                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>You've tried to change through willpower alone without lasting results</li>
                                <li>You know what you want to change but can't seem to stop the behavior</li>
                                <li>You have deep-seated beliefs or patterns that feel hardwired</li>
                                <li>You want to accelerate healing and transformation</li>
                                <li>You're open to a mind-body approach to change</li>
                            </ul>

                            <p class="mt-3"><strong>My Approach:</strong> I use Ericksonian hypnotherapy, which is gentle, conversational, respectful, and client-centered. It's more like guided meditation with therapeutic suggestions than stage hypnosis. I create a safe, supportive space where your subconscious can heal at its own pace, in its own way.</p>
                            
                            <p class="mt-3">Hypnotherapy is one of the fastest paths to lasting change when you're ready to work with—not against—your subconscious mind.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What are Anma and Ampuku?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>Anma</strong> and <strong>Ampuku</strong> are ancient Japanese therapeutic bodywork modalities that I've integrated into my practice to address the physical, energetic, and emotional layers of healing simultaneously.</p>

                            <p class="mb-3"><strong>ANMA (按摩): Traditional Japanese Therapeutic Massage</strong></p>
                            <p class="mb-2"><strong>History & Philosophy:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>Dating back over 1,300 years, Anma predates modern massage</li>
                                <li>Arrived in Japan from China in the 6th century</li>
                                <li>The term means "press-rub" or "calming with hand pressure"</li>
                                <li>Based on Traditional Chinese Medicine principles of Qi (energy) and meridians</li>
                                <li>Practiced fully clothed on a futon or massage table</li>
                            </ul>

                            <p class="mb-3"><strong>Anma Techniques:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Pressing (Oshi):</strong> Deep, sustained pressure on meridian points and trigger points</li>
                                <li><strong>Rubbing (Ma):</strong> Friction techniques to warm tissues and improve circulation</li>
                                <li><strong>Kneading (Jyunetsu):</strong> Deep tissue kneading to release muscle tension</li>
                                <li><strong>Percussion (Tataki):</strong> Rhythmic tapping to invigorate and energize</li>
                                <li><strong>Stretching (Shin):</strong> Passive joint mobilization and muscle stretching</li>
                                <li><strong>Vibration (Shindo):</strong> Trembling movements to release stagnation</li>
                            </ul>

                            <p class="mb-3"><strong>What Anma Addresses:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Physical:</strong> Chronic muscle tension, poor circulation, joint stiffness, fatigue</li>
                                <li><strong>Energetic:</strong> Meridian blockages, stagnant Qi, depleted vitality</li>
                                <li><strong>Nervous System:</strong> Stress, anxiety, autonomic imbalance</li>
                                <li><strong>Grounding:</strong> Feeling spacey, ungrounded, disconnected from body</li>
                            </ul>

                            <p class="mb-3"><strong>AMPUKU (腹診): Japanese Abdominal Therapy</strong></p>
                            <p class="mb-2"><strong>Philosophy & Approach:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Hara (腹):</strong> The belly/abdomen—considered the body's physical and energetic center in Japanese medicine</li>
                                <li><strong>"Second Brain":</strong> The gut contains 500 million neurons and produces 90% of the body's serotonin</li>
                                <li><strong>Emotional Storage:</strong> The belly holds unprocessed emotions (fear, grief, anxiety, trauma)</li>
                                <li><strong>Diagnostic & Therapeutic:</strong> Ampuku both assesses and treats imbalances through abdominal palpation</li>
                            </ul>

                            <p class="mb-3"><strong>What Ampuku Treats:</strong></p>
                            <p class="mb-2"><strong>Physical Issues:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Digestive disorders: IBS, bloating, constipation, acid reflux</li>
                                <li>Reproductive concerns: menstrual cramps, PMS, fertility support</li>
                                <li>Back and hip pain (often rooted in abdominal tension)</li>
                                <li>Chronic tension and armoring in the belly</li>
                            </ul>

                            <p class="mb-2"><strong>Emotional & Energetic:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Anxiety and worry (held in the solar plexus)</li>
                                <li>Fear and insecurity (held in the lower belly)</li>
                                <li>Grief and sadness (constricting the diaphragm)</li>
                                <li>Power issues and boundaries (solar plexus chakra)</li>
                                <li>Disconnection from intuition and "gut feelings"</li>
                                <li>Lack of groundedness or centeredness</li>
                            </ul>

                            <p class="mb-3"><strong>The Ampuku Experience:</strong></p>
                            <p class="mb-2">During Ampuku, I use:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Gentle Palpation:</strong> Feeling for areas of tension, coldness, heat, or pulsation</li>
                                <li><strong>Sustained Pressure:</strong> Holding specific points to release deep holdings</li>
                                <li><strong>Breathing Coordination:</strong> Working with your breath to deepen the release</li>
                                <li><strong>Intention & Presence:</strong> Creating a safe container for emotional release</li>
                            </ul>

                            <p class="mb-3"><strong>What You Might Experience:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Physical:</strong> Gurgling, warmth spreading through belly, softening of abdominal wall, deeper breathing</li>
                                <li><strong>Emotional:</strong> Tears, laughter, sighs, or release of stored emotions</li>
                                <li><strong>Energetic:</strong> Feeling more grounded, centered, "at home" in your body</li>
                                <li><strong>Digestive:</strong> Improved digestion, reduced bloating, regular elimination</li>
                                <li><strong>Mental:</strong> Clearer intuition, better decision-making ("trusting your gut")</li>
                            </ul>

                            <p class="mb-3"><strong>Why Anma & Ampuku Are Powerful:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Addresses Root Causes:</strong> Not just symptom relief but addressing underlying imbalances</li>
                                <li><strong>Body-Mind Integration:</strong> Releases both physical tension and emotional holdings simultaneously</li>
                                <li><strong>Deeply Grounding:</strong> Brings you back into your body after trauma or dissociation</li>
                                <li><strong>Energetically Clearing:</strong> Removes blockages in meridians and chakras</li>
                                <li><strong>Nervous System Reset:</strong> Shifts from stress (sympathetic) to rest/digest (parasympathetic)</li>
                            </ul>

                            <p class="mb-3"><strong>How I Use Them:</strong></p>
                            <p class="mb-2">I integrate Anma and Ampuku into Deep Alignment Sessions and the SKP Method:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Assessment:</strong> Begin with Ampuku abdominal diagnosis to identify imbalances</li>
                                <li><strong>Full-Body Work:</strong> Use Anma meridian therapy to release tension and improve flow</li>
                                <li><strong>Targeted Release:</strong> Deep Ampuku work to address emotional holdings in the belly</li>
                                <li><strong>Integration:</strong> Combine with Reiki, energy medicine, or hypnotherapy for multi-layered healing</li>
                            </ul>

                            <p class="mt-3"><strong>Who Benefits Most:</strong></p>
                            <p class="mb-2">These modalities are especially effective for:</p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>People who carry tension in their belly or gut</li>
                                <li>Those with digestive issues tied to stress or emotion</li>
                                <li>Individuals who are "in their head" and disconnected from their body</li>
                                <li>Anyone seeking deep grounding and centering</li>
                                <li>Those who want therapeutic bodywork beyond surface-level massage</li>
                            </ul>

                            <p class="mt-3">Both Anma and Ampuku honor the body's wisdom and work with—not against—its natural healing capacity. They're deeply relaxing yet profoundly therapeutic, often releasing years of held tension in a single session.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What is the Nir Levy Method / SKP Method?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">This question gets to the heart of my most advanced and comprehensive healing offering. Let me explain both the <strong>Nir Levy Method</strong> and how it integrates into my signature <strong>SKP Method (Soul Key Process™)</strong>.</p>

                            <p class="mb-3"><strong>THE NIR LEVY METHOD</strong></p>
                            <p class="mb-2"><strong>Overview & Philosophy:</strong></p>
                            <p class="mb-3">The Nir Levy Method is an advanced somatic and energetic healing system developed by Israeli master healer Nir Levy. It represents the cutting edge of consciousness-based healing, integrating ancient wisdom with modern neuroscience and trauma research. I'm completing my certification in February 2026 and am one of the first practitioners in the Middle East to offer this transformative work.</p>

                            <p class="mb-3"><strong>Core Principles:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Trauma Lives in the Body:</strong> Past experiences are stored as somatic patterns, not just memories</li>
                                <li><strong>Nervous System Repatterning:</strong> Healing requires resetting the autonomic nervous system, not just understanding trauma cognitively</li>
                                <li><strong>Energy Follows Consciousness:</strong> Where we place our awareness determines how energy moves and heals</li>
                                <li><strong>Cellular Memory:</strong> Every cell holds consciousness and can be reprogrammed</li>
                                <li><strong>Wholeness, Not Fixing:</strong> You're not broken—healing is remembering your innate wholeness</li>
                            </ul>

                            <p class="mb-3"><strong>What the Nir Levy Method Addresses:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Complex Trauma & PTSD:</strong> Including developmental trauma, shock trauma, and attachment wounds</li>
                                <li><strong>Chronic Nervous System Dysregulation:</strong> Stuck in fight/flight/freeze/fawn responses</li>
                                <li><strong>Somatic Symptoms:</strong> Physical pain, chronic tension, or illness rooted in unresolved trauma</li>
                                <li><strong>Dissociation & Numbing:</strong> Feeling disconnected from body, emotions, or life</li>
                                <li><strong>Repeating Patterns:</strong> Relationship dynamics, self-sabotage, or limiting beliefs that won't shift</li>
                                <li><strong>Spiritual Emergencies:</strong> Awakening experiences that feel destabilizing</li>
                                <li><strong>Ancestral & Karmic Patterns:</strong> Inherited trauma and soul-level wounds</li>
                            </ul>

                            <p class="mb-3"><strong>Key Techniques & Approaches:</strong></p>
                            <ol class="list-decimal pl-6 space-y-3 mb-3">
                                <li><strong>Somatic Resourcing:</strong> Building capacity in the nervous system to hold more activation without overwhelm. We establish "islands of safety" in the body before addressing trauma.</li>
                                
                                <li><strong>Pendulation:</strong> Gently moving between activation (trauma charge) and regulation (safety/calm), gradually increasing the nervous system's window of tolerance.</li>
                                
                                <li><strong>Completion of Defensive Responses:</strong> Trauma often occurs when the body's natural defensive responses (fight/flight) are thwarted. We allow the body to complete these incomplete survival responses.</li>
                                
                                <li><strong>Energetic Surgery:</strong> Advanced energy work to remove energetic cords, attachments, implants, and foreign energies that don't serve your highest good.</li>
                                
                                <li><strong>Timeline Healing:</strong> Working across past, present, and even future timelines to heal wounds at their source and prevent pattern repetition.</li>
                                
                                <li><strong>Cellular Reprogramming:</strong> Communicating directly with cells and organs to release stored trauma and install new, healthy programming.</li>
                                
                                <li><strong>Integration of Fragmented Parts:</strong> Addressing dissociated aspects of self (similar to Internal Family Systems) but with somatic and energetic components.</li>
                                
                                <li><strong>Awakening Dormant Capacities:</strong> Activating latent abilities, gifts, and potentials that have been suppressed or shut down.</li>
                            </ol>

                            <p class="mb-3"><strong>What Makes It Different:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Non-Retraumatizing:</strong> No need to retell traumatic stories or relive painful experiences</li>
                                <li><strong>Works at Root Level:</strong> Addresses the energetic and somatic imprints, not just the mental understanding</li>
                                <li><strong>Rapid Yet Gentle:</strong> Profound shifts can occur quickly because we bypass cognitive defenses</li>
                                <li><strong>Holistic Integration:</strong> Addresses physical, emotional, mental, energetic, and spiritual dimensions simultaneously</li>
                                <li><strong>Empowering:</strong> Restores your sense of agency, power, and sovereignty</li>
                            </ul>

                            <p class="mb-3"><strong>THE SKP METHOD (SOUL KEY PROCESS™)</strong></p>
                            <p class="mb-2"><strong>My Signature Integration:</strong></p>
                            <p class="mb-3">The SKP Method is my unique synthesis of the Nir Levy Method with all the modalities I've mastered over 20+ years of practice. It's designed for those seeking profound, lasting transformation—not just symptom relief.</p>

                            <p class="mb-3"><strong>What SKP Method Includes:</strong></p>
                            <ol class="list-decimal pl-6 space-y-3 mb-3">
                                <li><strong>Nir Levy Method Protocols:</strong> Advanced somatic and energetic healing techniques described above</li>
                                
                                <li><strong>Master-Level Reiki (Usui & Karuna):</strong> High-frequency energy healing for balancing, clearing, and activation</li>
                                
                                <li><strong>Hypnotherapy (Ericksonian):</strong> Subconscious reprogramming and belief system transformation</li>
                                
                                <li><strong>Energy Medicine:</strong> Chakra balancing, meridian clearing, biofield optimization</li>
                                
                                <li><strong>Somatic Bodywork (Anma & Ampuku):</strong> Deep tissue release, abdominal therapy, and nervous system regulation through touch</li>
                                
                                <li><strong>Trauma-Informed Practices:</strong> Working gently with the nervous system's capacity, honoring your pace</li>
                                
                                <li><strong>Intuitive Guidance:</strong> I'm guided to use exactly what your system needs in each moment</li>
                            </ol>

                            <p class="mb-3"><strong>The SKP Method Session (120 minutes):</strong></p>
                            <p class="mb-2"><strong>Part 1 - Assessment & Preparation (20 mins):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Deep discussion of what you're experiencing and what you're ready to shift</li>
                                <li>Assessment of nervous system state, energy field, and somatic patterns</li>
                                <li>Setting clear intentions for the session</li>
                                <li>Establishing safety and building resources in the body</li>
                            </ul>

                            <p class="mb-2"><strong>Part 2 - Multi-Layered Healing Work (80 mins):</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Somatic & Nervous System Work:</strong> Nir Levy Method protocols to address trauma, complete defensive responses, and increase capacity</li>
                                <li><strong>Energetic Clearing:</strong> Reiki and energy medicine to clear blockages, cords, and attachments</li>
                                <li><strong>Subconscious Reprogramming:</strong> Hypnotherapy to install new beliefs and patterns</li>
                                <li><strong>Bodywork Integration:</strong> Anma/Ampuku to release physical holdings and ground the shifts</li>
                                <li><strong>Timeline & Cellular Healing:</strong> Working across time and with cellular consciousness</li>
                                <li><strong>Activation & Empowerment:</strong> Awakening dormant capacities and restoring your full power</li>
                            </ul>

                            <p class="mb-2"><strong>Part 3 - Integration & Embodiment (20 mins):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Grounding and integrating all the shifts that occurred</li>
                                <li>Discussing your experience and any insights</li>
                                <li>Providing integration practices tailored to your needs</li>
                                <li>Establishing ongoing support and next steps</li>
                            </ul>

                            <p class="mb-3"><strong>Who Is SKP Method For?</strong></p>
                            <p class="mb-2">This intensive is ideal for:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Complex Healing Needs:</strong> Multiple layers of trauma, chronic patterns, or deep-seated issues</li>
                                <li><strong>Advanced Seekers:</strong> Those already doing inner work who are ready for the next level</li>
                                <li><strong>Major Transitions:</strong> Life crossroads, spiritual awakening, or significant transformation</li>
                                <li><strong>Exhausted by Other Approaches:</strong> Tried therapy, medication, or other modalities without lasting results</li>
                                <li><strong>Deep Commitment:</strong> Ready to invest in comprehensive, transformational healing</li>
                                <li><strong>Accelerated Healing:</strong> Want to compress months or years of healing into focused, intensive sessions</li>
                            </ul>

                            <p class="mb-3"><strong>What Clients Say:</strong></p>
                            <p class="mb-2 italic text-charcoal/80">"The SKP Method session was like months of therapy condensed into two hours. I felt layers of old trauma lift that I'd been carrying for decades. Susan's intuitive integration of all her modalities is masterful."</p>
                            <p class="mb-3 italic text-charcoal/80">"I finally understand what 'embodied healing' means. The Nir Levy Method work Susan does goes so deep—I've never experienced anything like it. This isn't just healing; it's transformation."</p>

                            <p class="mb-3"><strong>Investment & Commitment:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Session Length:</strong> 120 minutes (2 full hours of intensive work)</li>
                                <li><strong>Investment:</strong> AED 1,200 (≈$325 USD)</li>
                                <li><strong>Recommended:</strong> Series of 3-6 sessions for complex issues (package pricing available)</li>
                                <li><strong>Integration Support:</strong> Email support between sessions, integration practices, follow-up guidance</li>
                            </ul>

                            <p class="mt-3"><strong>Why "Soul Key Process"?</strong></p>
                            <p class="mb-3">I call this the Soul Key Process because it unlocks your deepest potential by addressing all the locks that have kept you from full expression—trauma patterns, limiting beliefs, energetic blockages, somatic armoring, and disconnection from your true self. It's not just about healing what's broken; it's about remembering who you really are and activating your soul's full capacity.</p>

                            <p class="mt-3">This is the most comprehensive, powerful work I offer. It's for those ready to go deep, heal fully, and emerge transformed.</p>
                        </div>
                    </div>

                    <!-- Practical Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Where are you located and do you offer online sessions?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>In-Person Sessions:</strong> I offer in-person sessions in a private, peaceful studio designed for deep healing work. Location details provided upon booking.</p>
                            <p class="mb-3"><strong>Distance Sessions:</strong> Yes! I offer distance healing worldwide for:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Reiki & Energy Work:</strong> Energy transcends physical distance. Distance Reiki is just as effective as in-person</li>
                                <li><strong>Hypnotherapy:</strong> Conducted via secure video call</li>
                                <li><strong>Consultation & Integration Support:</strong> Via phone, WhatsApp, or video</li>
                            </ul>
                            <p class="mt-3">Distance sessions are ideal for clients traveling, living abroad, or unable to come in person. Many of my international clients work exclusively via distance.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What forms of payment do you accept?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">I accept:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Cash:</strong> AED or USD</li>
                                <li><strong>Bank Transfer:</strong> Local UAE transfer or international wire</li>
                                <li><strong>Payment Plans:</strong> Available for package purchases</li>
                            </ul>
                            <p class="mt-3">Payment is due at the time of service unless we've arranged a package or payment plan in advance.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What is your cancellation policy?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">I understand that life happens and schedules change. My policy is:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>48+ hours notice:</strong> Full refund or reschedule at no charge</li>
                                <li><strong>24-48 hours notice:</strong> Reschedule once at no charge (subsequent late cancellations charged 50%)</li>
                                <li><strong>Less than 24 hours or no-show:</strong> Full session fee applies</li>
                            </ul>
                            <p class="mt-3">I reserve your session time specifically for you and turn away other clients during that slot, so advance notice is appreciated. For emergencies, please contact me directly—I'm happy to work with you.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How do I prepare for my first session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">To get the most from your session:</p>
                            <p class="mb-3"><strong>24 Hours Before:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>Drink plenty of water</li>
                                <li>Reduce caffeine and sugar if possible</li>
                                <li>Get adequate sleep</li>
                                <li>Set an intention for what you'd like to receive</li>
                            </ul>
                            <p class="mb-3"><strong>Day Of:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>Eat lightly 2 hours before</li>
                                <li>Avoid alcohol or recreational substances</li>
                                <li>Arrive 5-10 minutes early to settle in</li>
                                <li>Wear comfortable clothing</li>
                                <li>Turn off or silence your phone</li>
                            </ul>
                            <p class="mb-3"><strong>After Your Session:</strong></p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Drink extra water</li>
                                <li>Rest if possible—avoid rushing back to activities</li>
                                <li>Avoid alcohol for 24 hours</li>
                                <li>Early bedtime helps integration</li>
                                <li>Gentle movement (walking, stretching) supports processing</li>
                            </ul>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Can energy healing replace medical treatment?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>No.</strong> Energy healing is complementary to, not a replacement for, medical care. I am not a doctor and do not diagnose or treat medical conditions.</p>
                            <p class="mb-3">That said, energy healing works beautifully alongside conventional medicine:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Reduces stress and anxiety</li>
                                <li>Supports the body's natural healing processes</li>
                                <li>Helps manage pain and side effects</li>
                                <li>Accelerates recovery from surgery or illness</li>
                                <li>Addresses the emotional and spiritual aspects of healing</li>
                            </ul>
                            <p class="mt-3">Always consult your healthcare provider for medical concerns. I'm happy to work in coordination with your medical team for the most comprehensive care.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What issues can you help with?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">My clients seek support for a wide range of issues including:</p>
                            <p class="mb-3"><strong>Emotional & Mental:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Stress, anxiety, panic attacks</li>
                                <li>Depression and low mood</li>
                                <li>Trauma (PTSD, childhood trauma, relationship trauma)</li>
                                <li>Grief and loss</li>
                                <li>Life transitions and uncertainty</li>
                            </ul>
                            <p class="mb-3"><strong>Physical:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Chronic pain and tension</li>
                                <li>Fatigue and low energy</li>
                                <li>Sleep issues and insomnia</li>
                                <li>Digestive concerns</li>
                                <li>Headaches and migraines</li>
                            </ul>
                            <p class="mb-3"><strong>Behavioral & Patterns:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Breaking unwanted habits</li>
                                <li>Confidence and self-esteem</li>
                                <li>Relationship patterns</li>
                                <li>Performance enhancement</li>
                            </ul>
                            <p class="mb-3"><strong>Spiritual & Growth:</strong></p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Disconnection from self or purpose</li>
                                <li>Spiritual awakening support</li>
                                <li>Personal transformation</li>
                                <li>Conscious living</li>
                            </ul>
                        </div>
                    </div>

                    <!-- More Session Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Can I bring someone with me to a session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">For your first session, I prefer clients to come alone to create a safe, confidential space for deep work. The healing environment is most effective when you can fully relax without concern for others.</p>
                            <p class="mb-3">However, exceptions can be made for:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Minors (parent/guardian must be present)</li>
                                <li>Clients with mobility issues requiring assistance</li>
                                <li>Those with specific cultural or personal needs</li>
                            </ul>
                            <p class="mt-3">If you have concerns about coming alone, please discuss this with me when booking—I'm here to ensure your comfort.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What happens during a hypnotherapy session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">A hypnotherapy session typically unfolds in stages:</p>
                            <ol class="list-decimal pl-6 space-y-3 mb-3">
                                <li><strong>Consultation (15 mins):</strong> We discuss your goals, concerns, and what you'd like to shift</li>
                                <li><strong>Induction (10 mins):</strong> Guided relaxation to access the theta brainwave state where the subconscious is receptive</li>
                                <li><strong>Deepening (5-10 mins):</strong> Moving into deeper relaxation while maintaining awareness</li>
                                <li><strong>Therapeutic Work (30-40 mins):</strong> Using techniques like regression, parts work, visualization, and suggestion to address your specific goals</li>
                                <li><strong>Emergence (5 mins):</strong> Gently returning to full conscious awareness</li>
                                <li><strong>Integration (10 mins):</strong> Discussing the experience and providing tools for continued transformation</li>
                            </ol>
                            <p class="mt-3">You remain conscious and in control throughout. Many describe it as a deeply relaxed, meditative state—similar to daydreaming or the moments before sleep.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What will I feel during a Reiki or energy session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Everyone's experience is unique, but common sensations include:</p>
                            <p class="mb-3"><strong>Physical Sensations:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Warmth, tingling, or pulsing in various areas</li>
                                <li>Deep relaxation and heavy limbs</li>
                                <li>Cool breezes or temperature shifts</li>
                                <li>Gentle twitching as tension releases</li>
                                <li>Waves of energy moving through the body</li>
                            </ul>
                            <p class="mb-3"><strong>Emotional/Energetic:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Profound peace and calm</li>
                                <li>Emotional releases (tears, laughter)</li>
                                <li>Memories or insights arising</li>
                                <li>Colors or visions behind closed eyes</li>
                                <li>Feeling "lighter" or more spacious</li>
                            </ul>
                            <p class="mt-3">Some people feel subtle shifts, while others have dramatic experiences. There's no "right" way to experience energy work—whatever you feel is perfect for you.</p>
                        </div>
                    </div>

                    <!-- Modality Deep-Dive Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What's the difference between Usui Reiki and Karuna Reiki?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>Usui Reiki</strong> (the foundation system) focuses on:</p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Physical healing and energy balance</li>
                                <li>Chakra clearing and alignment</li>
                                <li>Grounding and centering energy</li>
                                <li>General wellness and stress relief</li>
                            </ul>
                            <p class="mb-3"><strong>Karuna Reiki</strong> (advanced system) works with:</p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Deep emotional and trauma healing</li>
                                <li>Shadow work and subconscious patterns</li>
                                <li>Karmic and ancestral clearing</li>
                                <li>Compassionate action (Karuna = compassionate action)</li>
                                <li>Higher vibrational frequencies for spiritual evolution</li>
                            </ul>
                            <p class="mt-3">As a Master in both systems, I intuitively select which frequencies will best serve your healing in each session. Often, I combine both for comprehensive support.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How is your bodywork different from a regular massage?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">While massage primarily addresses muscular tension, my somatic bodywork integrates:</p>
                            <p class="mb-3"><strong>Anma (Japanese therapeutic massage):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Meridian-based work to balance energy flow</li>
                                <li>Rhythmic pressure and stretching</li>
                                <li>Focus on Ki (life force) circulation</li>
                            </ul>
                            <p class="mb-3"><strong>Ampuku (Japanese abdominal therapy):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Addresses the "Hara" (energetic center below the navel)</li>
                                <li>Releases deep emotional holding patterns</li>
                                <li>Supports digestive health and nervous system regulation</li>
                                <li>Grounds and centers your energy</li>
                            </ul>
                            <p class="mb-3"><strong>Somatic Alignment:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Works with the nervous system to release trauma held in tissues</li>
                                <li>Honors the body's innate wisdom and timing</li>
                                <li>Combines gentle touch with awareness and presence</li>
                            </ul>
                            <p class="mt-3">This isn't relaxation massage—it's therapeutic bodywork that addresses physical, energetic, and emotional layers simultaneously.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="modalities">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What makes the SKP Method unique?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">The SKP Method (Soul Key Process™) is my signature integration of everything I've mastered over 15+ years, including the transformative Nir Levy Method. It's designed for those seeking profound, lasting transformation rather than temporary relief.</p>
                            <p class="mb-3"><strong>What makes it different:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Full-Spectrum Integration:</strong> Combines Reiki, energy medicine, hypnotherapy, somatic work, and the Nir Levy Method in one comprehensive session</li>
                                <li><strong>Personalized Protocol:</strong> Each session is uniquely designed for your specific needs and healing timeline</li>
                                <li><strong>Deeper Layers:</strong> Works simultaneously with physical, emotional, mental, energetic, and spiritual bodies</li>
                                <li><strong>Root-Level Shifts:</strong> Addresses not just symptoms but the underlying patterns creating them</li>
                                <li><strong>Extended Integration Support:</strong> Includes follow-up guidance and practices tailored to your journey</li>
                            </ul>
                            <p class="mt-3">This 120-minute session is ideal for complex issues, trauma healing, major life transitions, or when you're ready for significant transformation. Many clients describe it as "months of therapy in one session."</p>
                        </div>
                    </div>

                    <!-- Credentials & Experience Questions -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What are your qualifications and training?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">I bring 20+ years of experience and comprehensive training across multiple healing disciplines:</p>
                            <p class="mb-3"><strong>Master-Level Certifications:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Usui Reiki Master/Teacher</li>
                                <li>Karuna Reiki® Master</li>
                                <li>Certified Energy Medicine Specialist</li>
                                <li>Hypnotherapy Certification (Ericksonian approach)</li>
                            </ul>
                            <p class="mb-3"><strong>Specialized Training:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Anma (Japanese Therapeutic Massage)</li>
                                <li>Ampuku (Hara-Centered Abdominal Therapy)</li>
                                <li>Somatic Alignment & Trauma-Informed Touch</li>
                                <li>Chakra Balancing & Energy Clearing</li>
                                <li>Nir Levy Method Certification (February 2026)</li>
                            </ul>
                            <p class="mb-3"><strong>Ongoing Education:</strong></p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Regular continuing education in somatic psychology</li>
                                <li>Advanced energy medicine techniques</li>
                                <li>Trauma-informed healing practices</li>
                            </ul>
                            <p class="mt-3">I maintain professional liability insurance and approach this work with deep reverence, continuous learning, and commitment to ethical practice. I serve clients worldwide both in-person and remotely.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How long have you been practicing?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">I've been a professional healing practitioner for over 20 years, serving clients worldwide both in-person and remotely.</p>
                            <p class="mb-3">Over this time, I've:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Worked with hundreds of clients across 5 continents</li>
                                <li>Specialized in serving high-achieving professionals, expatriates, and those navigating complex life transitions</li>
                                <li>Developed the SKP Method based on years of clinical observation and refinement</li>
                                <li>Maintained a private practice focused on depth, discretion, and lasting results</li>
                                <li>Continuously expanded my skills through advanced trainings and mentorship</li>
                            </ul>
                            <p class="mt-3">This work isn't a side practice—it's my life's calling, and I bring the full depth of my experience to every session.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="general">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Do you work with men, women, and all genders?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes, absolutely. I welcome clients of all genders, ages (18+), backgrounds, and belief systems. Healing is a universal human need, and my practice is a safe, inclusive space for anyone seeking transformation.</p>
                            <p class="mb-3">My diverse client base includes:</p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li>Men and women from their 20s to their 70s</li>
                                <li>LGBTQ+ individuals</li>
                                <li>People of all cultural and religious backgrounds</li>
                                <li>Believers, skeptics, and everyone in between</li>
                                <li>Expatriates, locals, and international visitors</li>
                            </ul>
                            <p class="mt-3">What matters most is your openness to healing and your commitment to your own growth. I honor each person's unique path and create a space of deep respect, confidentiality, and non-judgment.</p>
                        </div>
                    </div>

                    <!-- Specific Conditions & Concerns -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Can you help with anxiety and panic attacks?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes, anxiety is one of the most common issues I address, and my multi-modal approach is particularly effective for:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Generalized anxiety</strong> and persistent worry</li>
                                <li><strong>Panic attacks</strong> and panic disorder</li>
                                <li><strong>Social anxiety</strong> and performance anxiety</li>
                                <li><strong>Health anxiety</strong> and hypervigilance</li>
                                <li><strong>Trauma-related anxiety</strong> (PTSD)</li>
                            </ul>
                            <p class="mb-3"><strong>How I work with anxiety:</strong></p>
                            <ol class="list-decimal pl-6 space-y-2 mb-3">
                                <li><strong>Nervous System Regulation:</strong> Somatic techniques to shift from sympathetic (fight/flight) to parasympathetic (rest/digest) states</li>
                                <li><strong>Energy Clearing:</strong> Release stuck energy in the solar plexus, heart, and throat chakras where anxiety typically lodges</li>
                                <li><strong>Hypnotherapy:</strong> Reprogram the subconscious patterns triggering anxious responses</li>
                                <li><strong>Root Cause Work:</strong> Address underlying beliefs, past experiences, or trauma fueling the anxiety</li>
                            </ol>
                            <p class="mt-3">Many clients report significant relief after just 1-2 sessions, with continued improvement over time. I also teach self-regulation tools you can use between sessions.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Can energy healing help with physical pain?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes, especially for pain with an energetic or emotional component. While I cannot diagnose or treat medical conditions, energy healing is remarkably effective for:</p>
                            <p class="mb-3"><strong>Chronic Pain Conditions:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Back, neck, and shoulder tension</li>
                                <li>Headaches and migraines</li>
                                <li>Fibromyalgia and chronic fatigue</li>
                                <li>Joint pain and arthritis symptoms</li>
                                <li>Digestive discomfort (IBS, tension)</li>
                            </ul>
                            <p class="mb-3"><strong>How it works:</strong></p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Releases energetic blockages</strong> that contribute to inflammation and tension</li>
                                <li><strong>Relaxes the nervous system,</strong> reducing pain signaling</li>
                                <li><strong>Addresses emotional components</strong>—many physical pains have emotional roots (e.g., shouldering burdens = shoulder pain)</li>
                                <li><strong>Stimulates the body's natural healing</strong> through improved energy flow</li>
                            </ul>
                            <p class="mt-3">I work in complement to your medical care, not as a replacement. Always consult your doctor for physical symptoms, and share your treatment plan with me so we can coordinate the most effective support.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Can you help me break unwanted habits or addictions?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Hypnotherapy is particularly powerful for habit change and addiction support. I work with clients on:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>Smoking cessation</li>
                                <li>Emotional eating and food compulsions</li>
                                <li>Alcohol reduction or sobriety support</li>
                                <li>Nail biting, skin picking, hair pulling</li>
                                <li>Technology/phone addictions</li>
                                <li>Procrastination and avoidance patterns</li>
                            </ul>
                            <p class="mb-3"><strong>My approach addresses:</strong></p>
                            <ol class="list-decimal pl-6 space-y-2">
                                <li><strong>The subconscious triggers:</strong> What's really driving the behavior?</li>
                                <li><strong>The underlying needs:</strong> What is the habit providing (comfort, distraction, control)?</li>
                                <li><strong>Pattern interruption:</strong> Creating new neural pathways and responses</li>
                                <li><strong>Healthier alternatives:</strong> Installing new behaviors that meet the same needs</li>
                                <li><strong>Energetic clearing:</strong> Releasing attachments on all levels</li>
                            </ol>
                            <p class="mt-3"><strong>Important:</strong> For substance addictions, I work best as part of a comprehensive treatment team (medical supervision, support groups, therapy). I'm not a substitute for medical detox or addiction counseling, but I'm a powerful complement to traditional treatment.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="sessions">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Do you work with trauma and PTSD?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes, trauma healing is central to my work. I'm trained in trauma-informed approaches and work with clients experiencing:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>PTSD (post-traumatic stress disorder)</li>
                                <li>Complex trauma (C-PTSD)</li>
                                <li>Childhood trauma and adverse childhood experiences</li>
                                <li>Relationship trauma and betrayal</li>
                                <li>Medical trauma and birth trauma</li>
                                <li>Acute trauma from recent events</li>
                            </ul>
                            <p class="mb-3"><strong>My trauma-informed approach:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Safety first:</strong> We work at YOUR pace, honoring your nervous system's capacity</li>
                                <li><strong>Somatic focus:</strong> Trauma lives in the body—we address it where it's stored</li>
                                <li><strong>Gentle, indirect:</strong> No forced "reliving" of traumatic events</li>
                                <li><strong>Resource building:</strong> Developing safety and regulation skills before deep work</li>
                                <li><strong>Energy clearing:</strong> Releasing imprints without having to retell the story</li>
                            </ul>
                            <p class="mt-3">I'm experienced in working with complex trauma and understand the layers involved. However, if you're in active crisis or have complex mental health needs, I'll recommend working with a trauma therapist alongside our sessions for comprehensive support.</p>
                        </div>
                    </div>

                    <!-- Practical Deep Dive -->
                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Do you offer online/remote sessions?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes, I offer remote sessions via secure video call for clients worldwide who:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>Prefer the comfort and privacy of their own space</li>
                                <li>Are traveling or live internationally</li>
                                <li>Have mobility or transportation challenges</li>
                                <li>Want continuity of care regardless of location</li>
                            </ul>
                            <p class="mb-3"><strong>What works well remotely:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Hypnotherapy sessions (actually ideal via video)</li>
                                <li>Distance Reiki and energy healing</li>
                                <li>Energy clearing and chakra balancing</li>
                                <li>Consultation and integration sessions</li>
                            </ul>
                            <p class="mb-3"><strong>What requires in-person:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Anma and Ampuku bodywork (hands-on required)</li>
                                <li>Full SKP Method sessions (best in-person)</li>
                            </ul>
                            <p class="mt-3">Remote sessions are equally powerful—energy transcends physical distance. I recommend starting in-person if possible, then transitioning to remote as needed. Same rates apply for all formats.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What if I need to reschedule or cancel?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Life happens, and I understand scheduling conflicts arise. My cancellation policy is:</p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>48+ hours notice:</strong> Full refund or free rescheduling</li>
                                <li><strong>24-48 hours notice:</strong> 50% fee, remaining credit toward future session</li>
                                <li><strong>Less than 24 hours:</strong> Full session fee (no refund or credit)</li>
                                <li><strong>No-show:</strong> Full session fee charged</li>
                            </ul>
                            <p class="mb-3"><strong>Exceptions made for:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Medical emergencies (documentation required)</li>
                                <li>Family emergencies</li>
                                <li>Sudden illness</li>
                            </ul>
                            <p class="mt-3">Please contact me as soon as possible if you need to change your appointment. I hold sacred space for each client and often decline other bookings to accommodate your session, so timely notice is appreciated.</p>
                            <p class="mt-2"><strong>To reschedule:</strong> Call/WhatsApp +971 55 177 0957 or email susan@susankpearson.com</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Do you offer package deals or multiple-session discounts?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Yes! Deep healing often unfolds over multiple sessions, so I offer packages that provide both savings and accountability:</p>
                            <p class="mb-3"><strong>Foundation Package (3 sessions):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>AED 2,550 (save AED 300)</li>
                                <li>Ideal for: Addressing a specific issue or establishing a healing foundation</li>
                                <li>Valid for 3 months</li>
                            </ul>
                            <p class="mb-3"><strong>Transformation Package (6 sessions):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>AED 5,100 (save AED 600)</li>
                                <li>Ideal for: Chronic patterns, trauma healing, or major life transitions</li>
                                <li>Valid for 6 months</li>
                            </ul>
                            <p class="mb-3"><strong>Custom Packages:</strong></p>
                            <p class="mb-2">For ongoing support or specialized programs, I can create custom packages tailored to your needs and budget. Contact me to discuss.</p>
                            <p class="mt-3"><strong>Package benefits:</strong></p>
                            <ul class="list-disc pl-6 space-y-1">
                                <li>Cost savings (10-15% discount)</li>
                                <li>Consistent appointment times (priority scheduling)</li>
                                <li>Deeper transformation through committed work</li>
                                <li>Flexible modality selection within the package</li>
                            </ul>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">Is my information confidential?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Absolutely. Confidentiality is sacred in this work. Everything you share—verbally or energetically—is held in complete confidence.</p>
                            <p class="mb-3"><strong>My confidentiality commitment:</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li>I never disclose client names, details, or session content</li>
                                <li>Client records are stored securely and encrypted</li>
                                <li>Testimonials are shared only with explicit written permission</li>
                                <li>Your healing journey is yours alone—I'm merely the witness</li>
                            </ul>
                            <p class="mb-3"><strong>Exceptions (legally required):</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Threat of harm to self or others</li>
                                <li>Child abuse or neglect</li>
                                <li>Court order or legal subpoena</li>
                            </ul>
                            <p class="mt-3">I value discretion deeply, and your privacy is paramount. You can trust that your healing space is completely safe and confidential.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">What should I avoid before or after a session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3"><strong>Before your session (24 hours):</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Avoid:</strong> Heavy alcohol consumption (light is okay)</li>
                                <li><strong>Avoid:</strong> Recreational substances that alter consciousness</li>
                                <li><strong>Minimize:</strong> Caffeine intake (reduces nervous system reactivity)</li>
                                <li><strong>Hydrate well:</strong> Water supports energy flow</li>
                            </ul>
                            <p class="mb-3"><strong>Day of session:</strong></p>
                            <ul class="list-disc pl-6 space-y-1 mb-3">
                                <li>Eat lightly 1-2 hours before (not on full or empty stomach)</li>
                                <li>Avoid wearing strong perfumes or scents</li>
                                <li>Wear comfortable, loose clothing</li>
                                <li>Silence your phone during the session</li>
                            </ul>
                            <p class="mb-3"><strong>After your session (24-48 hours):</strong></p>
                            <ul class="list-disc pl-6 space-y-2 mb-3">
                                <li><strong>Rest:</strong> Allow your body to integrate; avoid scheduling intense activities</li>
                                <li><strong>Hydrate:</strong> Drink extra water to support energy clearing</li>
                                <li><strong>Gentle movement:</strong> Walking, stretching, or gentle yoga (avoid intense exercise)</li>
                                <li><strong>Limit alcohol/substances:</strong> Your system is more sensitive post-session</li>
                                <li><strong>Journal:</strong> Note insights, dreams, or shifts you experience</li>
                                <li><strong>Be gentle with yourself:</strong> Honor any emotional releases or fatigue</li>
                            </ul>
                            <p class="mt-3">Integration is as important as the session itself. Treat the 48 hours after as sacred time for embodying your shifts.</p>
                        </div>
                    </div>

                    <div class="faq-item bg-white rounded-sm shadow-sm border-l-4 border-gold" data-category="practical">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-cream/50 transition-colors">
                            <span class="text-lg font-medium text-charcoal pr-8">How do I book a session?</span>
                            <i class="fas fa-chevron-down text-gold transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden px-6 pb-6 text-charcoal/80 leading-relaxed">
                            <p class="mb-3">Booking is easy:</p>
                            <ol class="list-decimal pl-6 space-y-2 mb-3">
                                <li><strong>Use the booking form</strong> at the bottom of this page to request your preferred date and time</li>
                                <li><strong>Call or WhatsApp:</strong> +971 55 177 0957</li>
                                <li><strong>Email:</strong> susan@susankpearson.com</li>
                            </ol>
                            <p class="mb-3">I'll respond within 24 hours to confirm your appointment. If you have questions before booking, feel free to reach out—I'm happy to discuss which modality might be best for your needs.</p>
                            <p class="mt-3">For your first session, I recommend scheduling when you have no major obligations afterward, allowing time for integration and rest.</p>
                        </div>
                    </div>
                </div>

                <!-- Still Have Questions CTA -->
                <div class="mt-16 text-center bg-white p-8 rounded-sm border-2 border-gold/30">
                    <h3 class="text-2xl font-serif text-charcoal mb-4">Still Have Questions?</h3>
                    <p class="text-charcoal/70 mb-6">
                        I'm happy to answer any questions you have about my work, approach, or whether a session would be right for you.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+971551770957" class="inline-flex items-center justify-center bg-gold text-black px-8 py-3 rounded-sm hover:bg-champagne transition-colors font-medium">
                            <i class="fas fa-phone-alt mr-2"></i>
                            Call +971 55 177 0957
                        </a>
                        <a href="mailto:susan@susankpearson.com" class="inline-flex items-center justify-center bg-charcoal text-cream px-8 py-3 rounded-sm hover:bg-gold hover:text-black transition-colors font-medium">
                            <i class="fas fa-envelope mr-2"></i>
                            Email Me
                        </a>
                    </div>
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
                                    <option value="hypnotherapy">Hypnotherapy (75 min) - AED 850</option>
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
                            <a href="mailto:susan@susankpearson.com" class="text-gold hover:text-champagne transition-colors font-medium">
                                <i class="fas fa-envelope mr-2"></i>susan@susankpearson.com
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
                                <option>Hypnotherapy</option>
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
                    <p class="text-charcoal/70 mb-6">Connect With Us</p>
                    <div class="flex justify-center space-x-8">
                        <a href="mailto:susan@susankpearson.com" class="text-gold hover:text-champagne transition-colors transform hover:scale-110" title="Email">
                            <i class="fas fa-envelope text-2xl"></i>
                        </a>
                        <a href="tel:+971551770957" class="text-gold hover:text-champagne transition-colors transform hover:scale-110" title="Phone">
                            <i class="fas fa-phone text-2xl"></i>
                        </a>
                        <a href="https://wa.me/971551770957?text=Hello%2C%20I%20would%20like%20to%20book%20a%20session%20with%20Susan" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-champagne transition-colors transform hover:scale-110" title="WhatsApp">
                            <i class="fab fa-whatsapp text-2xl"></i>
                        </a>
                        <a href="https://www.facebook.com/susankpearson" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-champagne transition-colors transform hover:scale-110" title="Facebook">
                            <i class="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="https://www.instagram.com/susankpearson" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-champagne transition-colors transform hover:scale-110" title="Instagram">
                            <i class="fab fa-instagram text-2xl"></i>
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
                    <p class="mb-4 elegant-text text-lg">Susan K Pearson | Elemental Healing</p>
                    <p class="text-sm mb-2">Energy Medicine • Reiki Master • Hypnotherapy • Somatic Alignment</p>
                    <p class="text-sm mb-2">
                        <i class="fas fa-phone-alt mr-2"></i>+971 55 177 0957
                    </p>
                    <p class="text-sm mb-6">
                        <i class="fas fa-envelope mr-2"></i>susan@susankpearson.com
                    </p>
                    <div class="flex justify-center space-x-6 mb-6">
                        <a href="https://wa.me/971551770957" target="_blank" rel="noopener noreferrer" class="text-cream/70 hover:text-gold transition-colors" title="WhatsApp">
                            <i class="fab fa-whatsapp text-2xl"></i>
                        </a>
                        <a href="https://www.facebook.com/susankpearson" target="_blank" rel="noopener noreferrer" class="text-cream/70 hover:text-gold transition-colors" title="Facebook">
                            <i class="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="https://www.instagram.com/susankpearson" target="_blank" rel="noopener noreferrer" class="text-cream/70 hover:text-gold transition-colors" title="Instagram">
                            <i class="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                    <div class="section-divider opacity-30"></div>
                    <p class="text-xs mt-6">© 2026 Elemental Healing LLC. All rights reserved. | Confidential & Proprietary</p>
                </div>
            </div>
        </footer>

        <!-- Floating WhatsApp Button -->
        <a href="https://wa.me/971551770957?text=Hello%2C%20I%20would%20like%20to%20book%20a%20session%20with%20Susan" 
           target="_blank" 
           rel="noopener noreferrer"
           class="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce"
           title="Chat on WhatsApp"
           id="whatsappButton">
            <i class="fab fa-whatsapp text-3xl"></i>
        </a>

        <!-- AI Chatbot Widget -->
        <div id="chatbotWidget" class="fixed bottom-24 right-6 z-50">
            <!-- Chat Button -->
            <button id="chatbotToggle" class="bg-gold text-black rounded-full p-4 shadow-2xl hover:bg-champagne transition-all duration-300 hover:scale-110">
                <i class="fas fa-comments text-3xl"></i>
            </button>
            
            <!-- Chat Window -->
            <div id="chatbotWindow" class="hidden absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-2xl border-2 border-gold/30 overflow-hidden">
                <!-- Chat Header -->
                <div class="bg-gold text-black p-4 flex justify-between items-center">
                    <div class="flex items-center">
                        <i class="fas fa-robot text-2xl mr-3"></i>
                        <div>
                            <h3 class="font-semibold">Susan's Assistant</h3>
                            <p class="text-xs opacity-80">Ask me anything!</p>
                        </div>
                    </div>
                    <button id="chatbotClose" class="text-black hover:text-charcoal transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <!-- Chat Messages -->
                <div id="chatbotMessages" class="h-80 overflow-y-auto p-4 bg-cream/50">
                    <div class="mb-4">
                        <div class="bg-white rounded-lg p-3 shadow-sm border border-gold/20">
                            <p class="text-sm text-charcoal">
                                👋 Hello! I'm Susan's virtual assistant. I can help you with:
                            </p>
                            <ul class="text-sm text-charcoal mt-2 space-y-1">
                                <li>• Booking sessions</li>
                                <li>• Learning about services</li>
                                <li>• Pricing information</li>
                                <li>• Answering FAQs</li>
                            </ul>
                            <p class="text-sm text-charcoal mt-2">
                                How can I assist you today?
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Actions -->
                <div class="p-3 bg-cream border-t border-gold/20">
                    <p class="text-xs text-charcoal/70 mb-2">Quick Actions:</p>
                    <div class="grid grid-cols-2 gap-2">
                        <button class="chatbot-quick-btn bg-white hover:bg-gold/10 border border-gold/30 rounded-lg p-2 text-xs text-charcoal transition-colors" data-action="book">
                            📅 Book Session
                        </button>
                        <button class="chatbot-quick-btn bg-white hover:bg-gold/10 border border-gold/30 rounded-lg p-2 text-xs text-charcoal transition-colors" data-action="services">
                            💆 View Services
                        </button>
                        <button class="chatbot-quick-btn bg-white hover:bg-gold/10 border border-gold/30 rounded-lg p-2 text-xs text-charcoal transition-colors" data-action="pricing">
                            💰 Pricing
                        </button>
                        <button class="chatbot-quick-btn bg-white hover:bg-gold/10 border border-gold/30 rounded-lg p-2 text-xs text-charcoal transition-colors" data-action="contact">
                            📞 Contact
                        </button>
                    </div>
                </div>
                
                <!-- Chat Input -->
                <div class="p-4 bg-white border-t border-gold/20">
                    <div class="flex space-x-2">
                        <input 
                            type="text" 
                            id="chatbotInput" 
                            placeholder="Type your message..."
                            class="flex-1 border border-gold/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                        >
                        <button id="chatbotSend" class="bg-gold text-black rounded-lg px-4 py-2 hover:bg-champagne transition-colors">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <p class="text-xs text-charcoal/50 mt-2 text-center">
                        Or <a href="https://wa.me/971551770957" class="text-gold hover:underline">chat on WhatsApp</a>
                    </p>
                </div>
            </div>
        </div>

        
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
                  formMessage.textContent = 'There was an error submitting your request. Please contact us directly at +971 55 177 0957 or susan@susankpearson.com';
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

            // Testimonials Carousel
            const carousel = document.getElementById('testimonialCarousel');
            const prevBtn = document.getElementById('prevTestimonial');
            const nextBtn = document.getElementById('nextTestimonial');
            const dots = document.querySelectorAll('.testimonial-dot');
            let currentSlide = 0;
            const totalSlides = ${testimonials.length};
            let autoplayInterval;

            function updateCarousel() {
                carousel.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.remove('bg-cream/30', 'w-3');
                        dot.classList.add('bg-gold', 'w-8');
                    } else {
                        dot.classList.remove('bg-gold', 'w-8');
                        dot.classList.add('bg-cream/30', 'w-3');
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }

            function goToSlide(index) {
                currentSlide = index;
                updateCarousel();
            }

            function startAutoplay() {
                autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
            }

            function stopAutoplay() {
                clearInterval(autoplayInterval);
            }

            // Event listeners
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoplay();
                startAutoplay();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoplay();
                startAutoplay();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    stopAutoplay();
                    startAutoplay();
                });
            });

            // Pause autoplay on hover
            carousel.parentElement.addEventListener('mouseenter', stopAutoplay);
            carousel.parentElement.addEventListener('mouseleave', startAutoplay);

            // Start autoplay
            startAutoplay();

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    stopAutoplay();
                    startAutoplay();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    stopAutoplay();
                    startAutoplay();
                }
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

            // FAQ Accordion functionality
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('i');
                    const isOpen = !answer.classList.contains('hidden');
                    
                    if (isOpen) {
                        answer.classList.add('hidden');
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    } else {
                        answer.classList.remove('hidden');
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    }
                });
            });

            // FAQ Category filtering
            document.querySelectorAll('.faq-category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const category = btn.getAttribute('data-category');
                    
                    // Update active button
                    document.querySelectorAll('.faq-category-btn').forEach(b => {
                        b.classList.remove('active', 'bg-gold', 'text-black');
                        b.classList.add('bg-white', 'border-gold/30', 'text-charcoal');
                    });
                    btn.classList.add('active', 'bg-gold', 'text-black');
                    btn.classList.remove('bg-white', 'border-gold/30', 'text-charcoal');
                    
                    // Filter FAQ items
                    document.querySelectorAll('.faq-item').forEach(item => {
                        if (category === 'all' || item.getAttribute('data-category') === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Contact form handling
            document.getElementById('contactForm').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your interest. Your message has been received. I will respond within 24 hours.\\n\\nFor immediate assistance, please call +971 55 177 0957 or email susan@susankpearson.com');
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

            // Chatbot functionality
            const chatbotToggle = document.getElementById('chatbotToggle');
            const chatbotWindow = document.getElementById('chatbotWindow');
            const chatbotClose = document.getElementById('chatbotClose');
            const chatbotInput = document.getElementById('chatbotInput');
            const chatbotSend = document.getElementById('chatbotSend');
            const chatbotMessages = document.getElementById('chatbotMessages');
            const quickBtns = document.querySelectorAll('.chatbot-quick-btn');

            // Toggle chatbot
            chatbotToggle.addEventListener('click', () => {
                chatbotWindow.classList.toggle('hidden');
                if (!chatbotWindow.classList.contains('hidden')) {
                    chatbotInput.focus();
                }
            });

            chatbotClose.addEventListener('click', () => {
                chatbotWindow.classList.add('hidden');
            });

            // Send message function
            function addMessage(text, isUser = false) {
                const messageDiv = document.createElement('div');
                messageDiv.className = \`mb-4 \${isUser ? 'text-right' : ''}\`;
                messageDiv.innerHTML = \`
                    <div class="\${isUser ? 'bg-gold text-black ml-auto' : 'bg-white border border-gold/20'} rounded-lg p-3 shadow-sm inline-block max-w-[80%]">
                        <p class="text-sm">\${text}</p>
                    </div>
                \`;
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }

            // Bot responses
            function getBotResponse(message) {
                const msg = message.toLowerCase();
                
                if (msg.includes('book') || msg.includes('appointment') || msg.includes('session')) {
                    return "I'd be happy to help you book a session! You can:<br>• Fill out our <a href='#booking' class='text-gold hover:underline'>booking form</a><br>• Call +971 55 177 0957<br>• <a href='https://wa.me/971551770957' class='text-gold hover:underline'>WhatsApp us</a>";
                } else if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing')) {
                    return "Our session pricing:<br>• Deep Alignment (90 min): AED 950<br>• Hypnotherapy (75 min): AED 850<br>• SKP Method (120 min): AED 1,200<br><br>Check our <a href='#pricing' class='text-gold hover:underline'>pricing page</a> for packages!";
                } else if (msg.includes('service') || msg.includes('what do you do')) {
                    return "Susan offers:<br>• Deep Alignment Therapy<br>• Hara Release (Anma & Ampuku)<br>• Energetic Recalibration (Reiki)<br>• Subconscious Shift Therapy<br>• The Full Frequency Session<br><br>Learn more in our <a href='#services' class='text-gold hover:underline'>services section</a>!";
                } else if (msg.includes('location') || msg.includes('where')) {
                    return "Sessions available worldwide - both remote and in-person. Contact us at +971 55 177 0957 to discuss your preferred session format and location details.";
                } else if (msg.includes('hour') || msg.includes('time') || msg.includes('schedule')) {
                    return "Sessions are by appointment. We're flexible with scheduling globally! Please call +971 55 177 0957 or book via our <a href='#booking' class='text-gold hover:underline'>booking form</a>.";
                } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
                    return "Hello! 👋 How can I assist you today? I can help with booking, pricing, services, or any questions you have!";
                } else if (msg.includes('thank')) {
                    return "You're welcome! Feel free to reach out anytime. Have a wonderful day! 🌟";
                } else {
                    return "I'm here to help! For detailed information, please:<br>• Check our <a href='#faq' class='text-gold hover:underline'>FAQ section</a><br>• Call +971 55 177 0957<br>• Email susan@susankpearson.com<br><br>What specific information can I help you find?";
                }
            }

            // Send message
            function sendMessage() {
                const message = chatbotInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    chatbotInput.value = '';
                    
                    setTimeout(() => {
                        const response = getBotResponse(message);
                        addMessage(response, false);
                    }, 500);
                }
            }

            chatbotSend.addEventListener('click', sendMessage);
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });

            // Quick action buttons
            quickBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const action = btn.getAttribute('data-action');
                    let response = '';
                    
                    switch(action) {
                        case 'book':
                            response = "Great! You can book a session by:<br>• Filling our <a href='#booking' class='text-gold hover:underline'>booking form</a><br>• Calling +971 55 177 0957<br>• <a href='https://wa.me/971551770957' class='text-gold hover:underline'>WhatsApp</a><br><br>What type of session interests you?";
                            break;
                        case 'services':
                            response = "Our core healing sessions include:<br>• <strong>Deep Alignment Therapy</strong><br>• <strong>Hara Release</strong> (Anma & Ampuku)<br>• <strong>Energetic Recalibration</strong> (Reiki)<br>• <strong>Subconscious Shift Therapy</strong><br>• <strong>Full Frequency Session</strong><br><br>Check <a href='#services' class='text-gold hover:underline'>services</a> for details!";
                            break;
                        case 'pricing':
                            response = "Pricing:<br>• Deep Alignment: AED 950<br>• Hypnotherapy: AED 850<br>• SKP Method: AED 1,200<br><br>Packages available! See <a href='#pricing' class='text-gold hover:underline'>pricing</a>";
                            break;
                        case 'contact':
                            response = "Contact Susan:<br>📞 +971 55 177 0957<br>✉️ susan@susankpearson.com<br>💬 <a href='https://wa.me/971551770957' class='text-gold hover:underline'>WhatsApp</a><br>🌍 Worldwide Practice";
                            break;
                    }
                    
                    addMessage(response, false);
                });
            });

            // Stop WhatsApp button animation after 5 seconds
            setTimeout(() => {
                document.getElementById('whatsappButton').classList.remove('animate-bounce');
            }, 5000);
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
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home"><img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">Deep Alignment Therapy</h1>
                <p class="text-xl text-cream/80 mb-8">A Full-Spectrum Healing Journey</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-16 bg-cream">
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
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
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
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home"><img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">Hara Release</h1>
                <p class="text-xl text-cream/80 mb-4">Anma & Ampuku</p>
                <p class="text-2xl text-gold/90 mb-8 font-light">Grounding. Opening. Releasing.</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-16 bg-cream">
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
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
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
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home"><img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">Energetic Recalibration</h1>
                <p class="text-xl text-cream/80 mb-8">Reiki + Chakra Harmonizing</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-16 bg-cream">
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
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
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
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home"><img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">Subconscious Shift Therapy</h1>
                <p class="text-xl text-cream/80 mb-4">Hypnotherapy + Nir Levy Method</p>
                <p class="text-2xl text-gold/90 mb-8 font-light">Repattern your inner landscape.</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-16 bg-cream">
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
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
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
        <style>
          body { font-family: 'Montserrat', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Cormorant Garamond', serif; }
        </style>
    </head>
    <body class="bg-cream">
        <nav class="fixed top-0 left-0 right-0 bg-cream border-b border-gold/20 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/#home"><img src="/images/skp-brand-logo.png" alt="Susan K Pearson" class="h-14 w-auto"></a>
                    <div class="flex space-x-6 items-center">
                        <a href="/#home" class="text-black hover:text-gold transition-colors">Home</a>
                        <a href="/#services" class="text-black hover:text-gold transition-colors">Services</a>
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <div class="mb-6">
                    <i class="fas fa-infinity text-gold text-5xl"></i>
                </div>
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">The Full Frequency Session</h1>
                <p class="text-2xl text-gold/90 mb-8">All Modalities | One Deep Journey</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <section class="py-16 bg-cream">
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
                        <a href="/#booking" class="inline-block bg-gold text-black px-8 py-4 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
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
                        <a href="/#booking" class="bg-gold text-black px-6 py-2 rounded-sm hover:bg-champagne transition-colors font-medium">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-32 pb-16 bg-charcoal text-cream">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-serif font-light mb-6">The Nir Levy Method</h1>
                <p class="text-xl text-cream/80 mb-8">with Susan K Pearson</p>
                <div class="w-24 h-1 bg-gold mx-auto"></div>
            </div>
        </section>

        <!-- Introduction -->
        <section class="section-spacing bg-cream">
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
                        Book Now
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

export default app
