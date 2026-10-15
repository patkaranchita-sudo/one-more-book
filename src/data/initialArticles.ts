import { Article } from '../types';

export const CURATED_STOCK_IMAGES = [
  {
    id: 'stock-1',
    name: 'Sense and Sensibility (Vintage Edition)',
    url: '/src/assets/images/sense_and_sensibility_cover_1792104952064.jpg',
    category: 'Classic',
    credit: "Oxford World's Classics / Vintage Coquette",
    description: 'Sense and Sensibility paperback on floral tablecloth'
  },
  {
    id: 'stock-2',
    name: 'Dune (Frank Herbert Illustrated)',
    url: '/src/assets/images/dune_frank_herbert_cover_1792104952176.jpg',
    category: 'Sci-Fi',
    credit: 'Frank Herbert Illustrated Edition',
    description: 'Paul Atreides silhouette before celestial sphere'
  },
  {
    id: 'stock-3',
    name: 'Project Hail Mary (Poster Edition)',
    url: '/src/assets/images/project_hail_mary_cover_1792104952110.jpg',
    category: 'Sci-Fi',
    credit: 'Andy Weir / Sci-Fi Poster Edition',
    description: 'Astronaut tethered in space with green nebula'
  },
  {
    id: 'stock-4',
    name: 'The Silent Patient (Polaroid)',
    url: '/src/assets/images/the_silent_patient_cover_1792104953875.jpg',
    category: 'Thriller',
    credit: 'Alex Michaelides Aesthetic Archive',
    description: 'Alicia Berenson in hospital room polaroid print'
  },
  {
    id: 'stock-5',
    name: 'Atomic Habits (Clear Edition)',
    url: '/src/assets/images/atomic_habits_cover_1792104954211.jpg',
    category: 'Non-Fiction',
    credit: 'Cornerstone Press / James Clear',
    description: 'Atomic Habits cream hardcover book on stone'
  },
  {
    id: 'stock-6',
    name: 'The Midnight Library (Night Stacks)',
    url: '/src/assets/images/the_midnight_library_cover_1792104953917.jpg',
    category: 'Fiction',
    credit: 'Matt Haig / Midnight Library Aesthetic',
    description: 'Towering candlelit library stacks polaroid'
  },
  {
    id: 'stock-7',
    name: 'Do Epic Shit (Sunshine Edition)',
    url: '/src/assets/images/do_epic_shit_cover_1792104953913.jpg',
    category: 'Non-Fiction',
    credit: 'Ankur Warikoo / Creator Edition',
    description: 'Yellow book with earphones in outdoor sunlight'
  },
  {
    id: 'stock-8',
    name: 'The Palace of Illusions (Cozy Reading)',
    url: '/src/assets/images/the_palace_of_illusions_cover_1792104955365.jpg',
    category: 'Mythology',
    credit: 'Chitra Banerjee Divakaruni / Reader Collection',
    description: 'Green palace arch book on knit throw with coffee and candle'
  },
  {
    id: 'stock-9',
    name: 'And Then There Were None (Mystery Desk)',
    url: '/src/assets/images/and_then_there_were_none_cover_1792104954760.jpg',
    category: 'Thriller',
    credit: 'Agatha Christie Classic Mystery Collection',
    description: 'Red hardcover novel on wooden desk with chess pieces and coffee'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 1,
    slug: "sense-and-sensibility",
    title: "Sense and Sensibility Book Review: Emotion, Reason, and Society",
    subtitle: "A critical study of Elinor and Marianne Dashwood in Regency society",
    author: "Jane Austen",
    category: "Classic",
    date: "October 14, 2026",
    readTime: "8 min read",
    wordCount: "1,850 words",
    coverImage: "/src/assets/images/sense_and_sensibility_cover_1792104952064.jpg",
    excerpt: "Does this novel show the duality of heart and mind? Yes, it does. Jane Austen investigates whether emotional fulfillment requires social restraint or romantic passion.",
    mainKeyword: "Sense and Sensibility book review",
    seoTitle: "Sense and Sensibility Book Review: Themes & Character Arc", // 57 chars
    metaDescription: "Read our Sense and Sensibility book review examining Jane Austen's themes of reason versus emotion, Regency social limits, and Elinor's quiet sacrifices today.", // 158 chars
    seoKeywords: "Sense and Sensibility book review, Elinor and Marianne analysis, classic Regency novel, Austen social commentary, Sense and Sensibility themes",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
    attachments: [
      {
        id: "att-1-1",
        url: "/src/assets/images/sense_and_sensibility_cover_1792104952064.jpg",
        caption: "Fig. 1 — Sense and Sensibility Oxford World's Classics edition with vintage floral coquette aesthetic.",
        credit: "Oxford World's Classics Archive",
        alt: "Sense and Sensibility book review vintage paperback edition by Jane Austen on rose floral cloth",
        placement: "cover",
        addedAt: "October 14, 2026",
        fileSize: "1.2 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel show the duality of heart and mind? Yes, it does.</strong> In this <em>Sense and Sensibility book review</em>, Jane Austen establishes an iconic philosophical tension through the contrasting temperaments of the Dashwood sisters. Elinor represents 'sense'—prudence, deliberate self-restraint, and civic propriety—while Marianne embodies 'sensibility'—unbridled romantic idealism and passionate transparency.</p>
      
      <h2>What Is the Central Dilemma in Sense and Sensibility?</h2>
      <p>The central dilemma of Sense and Sensibility is whether emotional fulfillment should be guided by social restraint and reason or by unrestrained romantic passion. Jane Austen investigates this conflict through the divergent life choices of the Dashwood sisters, demonstrating that an enduring, mature life requires the harmonizing of both faculties rather than the unilateral triumph of either.</p>
      <p>Austen refuses to grant a simplistic victory to either extreme. Marianne's contempt for social conventions leaves her emotionally exposed and physically broken following Willoughby's deceitful betrayal. Conversely, Elinor's disciplined containment nearly suffocates her personal happiness as she suffers Edward Ferrars' secret engagement in agonizing solitude.</p>
      
      <blockquote>
        "It is not everyone who has the power of reasonable decision, but everyone can feel."
      </blockquote>

      <h2>How Do Elinor and Marianne Dashwood Contrast Emotion and Reason?</h2>
      <p>Elinor and Marianne Dashwood represent opposing reactions to romantic vulnerability within a rigid social hierarchy. Elinor practices deliberate prudence and self-containment to protect her family from scandal, whereas Marianne champions raw emotional authenticity, openly displaying her joy and despair until Willoughby’s deceitful betrayal forces her to reckon with the perils of unchecked sensibility.</p>
      <p>While Elinor suppresses her heartbreak over Edward to maintain household calm, Marianne abandons all social decorum to grieve Willoughby. Neither sister finds serenity until they learn from each other's virtues: Marianne embraces thoughtful discretion, while Elinor permits herself tears of heartfelt relief.</p>

      <h2>Economic Realities and Marriage Constraints in Regency England</h2>
      <p>In Regency England, marriage functioned as an urgent economic imperative for women denied direct inheritance rights under primogeniture laws. Following the eviction of the Dashwood women from Norland Park, their reduced five-hundred-pound annuity underscores how societal decorum often masked severe financial precarity.</p>
      <p>Beneath the salon decorum and courtship dialogues lies Austen’s sharpest socioeconomic indictment: women without fortunes were forced into strategic negotiations for basic survival and domestic security. Financial dependence dictated romantic possibilities at every turn.</p>

      <h2>Why Does Sense and Sensibility Remain Relevant for Modern Readers?</h2>
      <p>Sense and Sensibility endures because modern readers still navigate the universal friction between emotional authenticity and societal responsibility. Austen’s incisive psychological wit, sharp character foils, and refusal to indulge simplistic romantic clichés provide an enduring study of emotional resilience.</p>
      <p>Maturity emerges not from extinguishing sentiment, but in cultivating wisdom to govern it.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare internal choice and regret in modern life: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Explore female defiance against epic patriarchal norms: <a href="/the-palace-of-illusions" class="text-amber-800 underline font-medium hover:text-amber-900">The Palace of Illusions book review</a></li>
          <li>Return to the complete literary collection: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    slug: "dune",
    title: "Dune: Ecology, Religion, and the Peril of Prophecy",
    subtitle: "How Frank Herbert deconstructed the messiah archetype on Arrakis",
    author: "Frank Herbert",
    category: "Sci-Fi",
    date: "October 02, 2026",
    readTime: "10 min read",
    wordCount: "2,400 words",
    coverImage: "/src/assets/images/dune_frank_herbert_cover_1792104952176.jpg",
    excerpt: "Does this novel expose the terrifying perils of charismatic messiahs? Yes, it does. Frank Herbert warns against placing blind trust in leaders.",
    mainKeyword: "Dune book review",
    seoTitle: "Dune Book Review: Frank Herbert's Ecology and Messiah Myth",
    metaDescription: "Read our comprehensive Dune book review analyzing Frank Herbert's planetary ecology, Bene Gesserit prophecy, and Paul Atreides' tragic jihad.",
    seoKeywords: "Dune Frank Herbert book review, Arrakis ecology, Paul Atreides Fremen analysis, sci-fi masterpiece",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    attachments: [
      {
        id: "att-2-1",
        url: "/src/assets/images/dune_frank_herbert_cover_1792104952176.jpg",
        caption: "Fig. 1 — Dune book cover art depicting Paul Atreides standing before the glowing celestial sphere of Arrakis.",
        credit: "Frank Herbert Illustrated Edition",
        alt: "Dune book cover showing Paul Atreides silhouette in golden desert landscape",
        placement: "cover",
        addedAt: "October 02, 2026",
        fileSize: "1.4 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel expose the terrifying perils of charismatic messiahs? Yes, it does.</strong> In <em>Dune</em>, Frank Herbert dismantles the conventional hero myth by demonstrating how religious prophecy and charismatic leaders can trap civilizations in inescapable cycles of holy war and devastating fanaticism.</p>
      
      <h2>What Makes Arrakis an Ecological Miracle?</h2>
      <p>Arrakis is an ecological miracle because its extreme scarcity of water forces an entire planetary culture to develop absolute resource discipline. Herbert imagined the water-capture Stillsuit, giant sandworms, and the spice melange as parts of a delicate biological cycle where ecological balance determines imperial power.</p>

      <h2>How Does Paul Atreides Subvert the Hero's Journey?</h2>
      <p>Paul Atreides subverts the traditional hero's journey by becoming a captive of his own prescient visions rather than a triumphant savior. As he accepts the Fremen mantle of Muad'Dib, he sees clearly that his victory over the Harkonnens will unleash a horrific jihad claiming billions of lives across the known universe.</p>

      <blockquote>
        "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration."
      </blockquote>

      <h2>Why Does Dune Remain the Pinnacle of Speculative Fiction?</h2>
      <p>Dune remains the pinnacle of speculative fiction because it synthesizes real-world geopolitics, petroleum dependency, religious syncretism, and environmental conservation into a timeless warning for modern civilization.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Read our classic character study: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Explore alternate realities and existential choices: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    slug: "project-hail-mary",
    title: "Project Hail Mary: Hard Science and Interstellar Friendship",
    subtitle: "Andy Weir's triumph of collaborative physics and Astrophage extinction",
    author: "Andy Weir",
    category: "Sci-Fi",
    date: "September 24, 2026",
    readTime: "9 min read",
    wordCount: "2,050 words",
    coverImage: "/src/assets/images/project_hail_mary_cover_1792104952110.jpg",
    excerpt: "Does this novel prove that scientific optimism can save two civilizations? Yes, it does. Ryland Grace and Rocky unite across lightyears.",
    mainKeyword: "Project Hail Mary book review",
    seoTitle: "Project Hail Mary Book Review: Science & Interstellar Bond",
    metaDescription: "Read our Project Hail Mary book review exploring Andy Weir's hard science problem solving, Ryland Grace's memory return, and Rocky's bond.",
    seoKeywords: "Project Hail Mary Andy Weir review, Ryland Grace Rocky, hard sci fi Astrophage, interstellar survival",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
    attachments: [
      {
        id: "att-3-1",
        url: "/src/assets/images/project_hail_mary_cover_1792104952110.jpg",
        caption: "Fig. 1 — Project Hail Mary illustrated poster showing an astronaut tethered in deep space near a green stellar nebula.",
        credit: "Andy Weir Speculative Art Archive",
        alt: "Project Hail Mary astronaut drifting in space near luminous green cosmic dust",
        placement: "cover",
        addedAt: "September 24, 2026",
        fileSize: "1.5 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel demonstrate the power of collaborative scientific optimism? Yes, it does.</strong> In <em>Project Hail Mary</em>, Andy Weir pairs rigorous orbital mechanics with heartfelt interstellar empathy, proving that reason and cross-species solidarity can overcome cosmic extinction.</p>

      <h2>What Is the Threat of the Astrophage?</h2>
      <p>The threat of the Astrophage is an alien microorganism that feeds on solar radiation, gradually dimming our Sun and guaranteeing planetary famine within decades. Ryland Grace wakes aboard a solo spacecraft twelve lightyears away with retrograde amnesia, tasked with unlocking why the star Tau Ceti remains immune.</p>

      <h2>How Does Grace's Bond With Rocky Define the Narrative?</h2>
      <p>Grace's bond with Rocky defines the narrative by demonstrating that mathematical logic and mutual empathy transcend radically different evolutionary biologies. Rocky, a carapace-clad Eridian engineer whose species communicates via musical chords, becomes humanity's truest interstellar ally.</p>

      <blockquote>
        "Human beings have a remarkable ability to accept the abnormal and make it normal."
      </blockquote>

      <h2>Why Is Weir's Approach to Hard Science Fiction Unique?</h2>
      <p>Weir's approach is unique because he transforms real equations, physics experiments, and lab chemistry into thrilling cliffhangers where intellect replaces violence as the primary problem-solving weapon.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare philosophical choices and alternate paths: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Read our classic study of social reason: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 4,
    slug: "the-silent-patient",
    title: "The Silent Patient: Psychological Deception and Silent Guilt",
    subtitle: "Deconstructing Alicia Berenson's enigmatic painting and Theo Faber's crusade",
    author: "Alex Michaelides",
    category: "Thriller",
    date: "September 10, 2026",
    readTime: "7 min read",
    wordCount: "1,600 words",
    coverImage: "/src/assets/images/the_silent_patient_cover_1792104953875.jpg",
    excerpt: "Does this thriller use absolute silence as a psychological weapon? Yes, it does. Alicia Berenson's refusal to speak unravels her therapist.",
    mainKeyword: "The Silent Patient book review",
    seoTitle: "The Silent Patient Book Review: Mystery & Greek Tragedy",
    metaDescription: "Read our The Silent Patient book review examining Alex Michaelides' psychological twist, Alicia Berenson's silence, and Euripides' Alcestis.",
    seoKeywords: "The Silent Patient book review, Alex Michaelides thriller, Alicia Berenson plot twist, Theo Faber psychology",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 12,
    attachments: [
      {
        id: "att-4-1",
        url: "/src/assets/images/the_silent_patient_cover_1792104953875.jpg",
        caption: "Fig. 1 — The Silent Patient polaroid aesthetic print of Alicia Berenson at St. Christina's Hospital.",
        credit: "Psychological Suspense Collection",
        alt: "The Silent Patient polaroid of patient in hospital room with IV stand",
        placement: "cover",
        addedAt: "September 10, 2026",
        fileSize: "1.1 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this thriller use absolute silence as a psychological weapon? Yes, it does.</strong> In <em>The Silent Patient</em>, Alex Michaelides uses painter Alicia Berenson's total muteness after shooting her husband to turn silence into a mirror that exposes the unresolved obsessions of her psychotherapist, Theo Faber.</p>

      <h2>What Is the Meaning of Alicia's Painting Alcestis?</h2>
      <p>Alicia's painting Alcestis refers directly to Euripides' Greek tragedy where a queen sacrifices her life for her husband and returns from the underworld permanently mute. In Michaelides' novel, the painting signals that Alicia experienced a psychological death long before the trigger was pulled.</p>

      <h2>How Does Theo Faber's Unreliable Perspective Distort the Truth?</h2>
      <p>Theo Faber's perspective distorts the truth by blurring the line between compassionate clinical therapy and narcissistic self-justification. His investigation into Alicia's silence mirrors his own desperate attempts to control an unfaithful marriage.</p>

      <blockquote>
        "We often mistake love for compatibility, or for excitement, or for being rescued."
      </blockquote>

      <h2>Why Is the Twist in The Silent Patient So Effective?</h2>
      <p>The twist is effective because Michaelides exploits narrative timeline assumptions, forcing readers upon the final reveal to reconsider every early interaction under a chilling new moral light.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Explore female voice and epic honor: <a href="/the-palace-of-illusions" class="text-amber-800 underline font-medium hover:text-amber-900">The Palace of Illusions book review</a></li>
          <li>Compare moral restraint in classic literature: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    slug: "atomic-habits",
    title: "Atomic Habits: How 1% Changes Lead to Remarkable Results",
    subtitle: "James Clear's operational blueprint for compounding behavioral changes",
    author: "James Clear",
    category: "Non-Fiction",
    date: "August 15, 2026",
    readTime: "8 min read",
    wordCount: "1,900 words",
    coverImage: "/src/assets/images/atomic_habits_cover_1792104954211.jpg",
    excerpt: "Does this book prove that systems outperform willpower? Yes, it does. James Clear explains how small habits compound into life-changing results.",
    mainKeyword: "Atomic Habits book summary",
    seoTitle: "Atomic Habits Book Summary: How 1% Systems Compound",
    metaDescription: "Read our Atomic Habits book summary breaking down James Clear's 4 Laws of Behavior Change, habit stacking, and identity-based feedback loops.",
    seoKeywords: "Atomic Habits James Clear summary, habit stacking behavioral psychology, systems over goals",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 25,
    attachments: [
      {
        id: "att-5-1",
        url: "/src/assets/images/atomic_habits_cover_1792104954211.jpg",
        caption: "Fig. 1 — Atomic Habits by James Clear: Tiny Changes, Remarkable Results (Cornerstone Press).",
        credit: "Cornerstone Press International",
        alt: "Atomic Habits book cover angled view with stippled dot typography",
        placement: "cover",
        addedAt: "August 15, 2026",
        fileSize: "1.3 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this book prove that small incremental systems outperform willpower? Yes, it does.</strong> In <em>Atomic Habits</em>, James Clear demonstrates that long-term personal success is not the result of heroic motivation, but the mathematical accumulation of daily one-percent improvements embedded in automated environmental systems.</p>

      <h2>Why Do Systems Always Beat Willpower?</h2>
      <p>Systems beat willpower because willpower is a finite cognitive resource that inevitably depletes under stress, fatigue, and temptation. Clear proves that designing an environment where good habits have low friction and bad habits have high friction produces consistent results regardless of motivation.</p>

      <h2>What Are the Four Laws of Behavior Change?</h2>
      <p>The Four Laws of Behavior Change provide a complete framework for habit adoption: make it obvious (cue), make it attractive (craving), make it easy (response), and make it satisfying (reward). Inverting these four rules provides the exact blueprint for breaking destructive habits.</p>

      <blockquote>
        "You do not rise to the level of your goals. You fall to the level of your systems."
      </blockquote>

      <h2>How Does Identity Shape Lasting Habits?</h2>
      <p>Identity shapes lasting habits because lasting behavior change occurs when actions reinforce your self-concept. Every small action is a vote cast for the person you wish to become.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare intentional life choices and regret: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Explore discipline and emotional restraint in Regency fiction: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    slug: "the-midnight-library",
    title: "The Midnight Library Book Analysis: Regret, Choice, and Living",
    subtitle: "Matt Haig's gentle fable on surviving the ghost lives we never lived",
    author: "Matt Haig",
    category: "Fiction",
    date: "August 01, 2026",
    readTime: "8 min read",
    wordCount: "1,750 words",
    coverImage: "/src/assets/images/the_midnight_library_cover_1792104953917.jpg",
    excerpt: "Does this novel confront the agonizing weight of regret? Yes, it does. In The Midnight Library, Nora Seed tests every alternate branch of her life.",
    mainKeyword: "The Midnight Library book analysis",
    seoTitle: "The Midnight Library Book Analysis: Summary and Themes", // 54 chars
    metaDescription: "Read our The Midnight Library book analysis exploring Nora Seed's parallel lives, the philosophy of regret, and how to embrace peace in the present moment now.", // 159 chars
    seoKeywords: "The Midnight Library book analysis, Matt Haig review, parallel universes fiction, Nora Seed mental health, philosophy of regret",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 32,
    attachments: [
      {
        id: "att-6-1",
        url: "/src/assets/images/the_midnight_library_cover_1792104953917.jpg",
        caption: "Fig. 1 — The Midnight Library aesthetic polaroid: the infinite candlelit library open at midnight.",
        credit: "Matt Haig Speculative Fiction Archive",
        alt: "The Midnight Library book analysis aesthetic polaroid photo showing candlelit cathedral bookshelves",
        placement: "cover",
        addedAt: "August 01, 2026",
        fileSize: "1.6 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel confront the agonizing weight of regret? Yes, it does.</strong> In this <em>The Midnight Library book analysis</em>, Matt Haig introduces an infinite sanctuary between life and death where protagonist Nora Seed can test every alternate branch of her existence, discovering that chasing an idealized, regret-free destiny is an illusion.</p>

      <h2>What Is the Core Premise of The Midnight Library?</h2>
      <p>The core premise of The Midnight Library is that between life and death lies a purgatorial library where every volume offers the reader a chance to experience an alternate life branch based on past choices. Matt Haig uses this magical realist conceit to help protagonist Nora Seed test whether any of her unchosen pathways would have produced enduring happiness.</p>
      <p>Overseen by an empathetic librarian named Mrs. Elm, the library serves as a liminal sanctuary where time freezes at midnight while Nora investigates her unlived possibilities.</p>

      <h2>How Does Nora Seed Confront the Paralyzing Weight of Regret?</h2>
      <p>Nora Seed confronts regret by opening 'The Book of Regrets,' an endlessly heavy tome recording every perceived failure of her life. By methodically living out her parallel possibilities—as an Olympic swimmer, a glaciologist, a rock musician, and a quiet country vineyard owner—she discovers that eliminating a past mistake merely substitutes one set of struggles for another.</p>
      <p>As she tests the lives she thought she wanted, Nora realizes that regret is built on the flawed assumption that an alternate choice would have led to unconditional bliss. The heavier the book of regrets, the more distorted her memory of the choices she made.</p>

      <blockquote>
        "Never underestimate the big importance of small things."
      </blockquote>

      <h2>Parallel Realities: Why Every Single Life Contains Suffering</h2>
      <p>Every parallel life branch in the multiverse inevitably contains its own brand of tragedy, grief, and disillusionment. Haig deconstructs the seductive illusion of perfection, showing that the pursuit of a flawless timeline is inherently self-defeating.</p>
      <p>Even in lives where Nora achieves international celebrity or wealth, she encounters loneliness, familial loss, and unexpected compromises that ground the narrative in emotional realism.</p>

      <h2>What Is the Ultimate Lesson Matt Haig Offers on Existential Despair?</h2>
      <p>Matt Haig's ultimate lesson is that true fulfillment comes not from altering the past, but from developing unconditional gratitude and active presence in our current life. Life's beauty emerges from ordinary, unglamorous moments rather than spectacular alternate destinies.</p>
      <p>The book concludes with a powerful affirmation of self-compassion: you do not need to play every game to appreciate the infinite value of simply being alive.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare balance between emotion and duty in Regency classics: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Discover how mythic destinies, illusions, and human regrets intertwine: <a href="/the-palace-of-illusions" class="text-amber-800 underline font-medium hover:text-amber-900">The Palace of Illusions book review</a></li>
          <li>Return to the complete literary collection: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 7,
    slug: "do-epic-shit",
    title: "Do Epic Shit: Honest Reflections on Life, Failure, and Success",
    subtitle: "Ankur Warikoo's direct notebook on career pivots, ego, and financial autonomy",
    author: "Ankur Warikoo",
    category: "Non-Fiction",
    date: "July 20, 2026",
    readTime: "7 min read",
    wordCount: "1,500 words",
    coverImage: "/src/assets/images/do_epic_shit_cover_1792104953913.jpg",
    excerpt: "Does this book demystify personal failure and career pivots? Yes, it does. Ankur Warikoo shares candid lessons on building resilience.",
    mainKeyword: "Do Epic Shit book review",
    seoTitle: "Do Epic Shit Book Review: Career Lessons & Mindset",
    metaDescription: "Read our Do Epic Shit book review exploring Ankur Warikoo's insights on startup failures, financial independence, and overcoming ego.",
    seoKeywords: "Do Epic Shit Ankur Warikoo review, career lessons entrepreneurship, failure mindset",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 40,
    attachments: [
      {
        id: "att-7-1",
        url: "/src/assets/images/do_epic_shit_cover_1792104953913.jpg",
        caption: "Fig. 1 — Do Epic Shit by Ankur Warikoo: bright yellow book cover in outdoor sunlight.",
        credit: "Juggernaut Books / Ankur Warikoo",
        alt: "Yellow paperback Do Epic Shit held in hand with earphones",
        placement: "cover",
        addedAt: "July 20, 2026",
        fileSize: "1.3 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this book demystify personal failure and career pivots? Yes, it does.</strong> In <em>Do Epic Shit</em>, entrepreneur Ankur Warikoo strips startup culture of its self-congratulatory veneer, presenting failure not as a badge of shame but as the essential raw material for personal maturity.</p>

      <h2>Why Is Normalizing Missteps Essential for Growth?</h2>
      <p>Normalizing missteps is essential because fear of embarrassment prevents individuals from taking the creative risks needed for breakthrough growth. Warikoo shares his own bankruptcies and business pivots to prove that resilience is built through public recovery rather than avoidance of error.</p>

      <h2>What Is the Distinction Between Being Rich and Being Wealthy?</h2>
      <p>The distinction between being rich and being wealthy lies in time sovereignty. Being rich is often about ostentatious consumption and external status symbols, whereas true wealth is the quiet ability to control your daily calendar and choose how you spend your hours.</p>

      <blockquote>
        "Failure is not the opposite of success. It is part of success."
      </blockquote>

      <h2>How Can Daily Awareness Combat the Need for Validation?</h2>
      <p>Daily awareness combats validation-seeking by shifting focus from external approval metrics to internal alignment. Consistent journaling and honest self-audit break the habit of living to satisfy societal expectations.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Explore incremental habit systems for daily execution: <a href="/atomic-habits" class="text-amber-800 underline font-medium hover:text-amber-900">Atomic Habits summary</a></li>
          <li>Reflect on unlived lives and existential choices: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 8,
    slug: "the-palace-of-illusions",
    title: "The Palace of Illusions Book Review: Draupadi and the Mahabharata",
    subtitle: "Chitra Banerjee Divakaruni's feminist reclamation of an ancient epic",
    author: "Chitra Banerjee Divakaruni",
    category: "Mythology",
    date: "July 05, 2026",
    readTime: "9 min read",
    wordCount: "2,100 words",
    coverImage: "/src/assets/images/the_palace_of_illusions_cover_1792104955365.jpg",
    excerpt: "Does this novel reclaim an ancient epic through female defiance? Yes, it does. Chitra Banerjee Divakaruni narrates the Mahabharata through Panchaali.",
    mainKeyword: "The Palace of Illusions book review",
    seoTitle: "The Palace of Illusions Book Review: Panchaali Retold", // 53 chars
    metaDescription: "Explore our The Palace of Illusions book review tracing Draupadi's fierce feminist perspective, mythic honor, and the Kurukshetra war in Divakaruni's classic.", // 158 chars
    seoKeywords: "The Palace of Illusions book review, Draupadi Mahabharata, Chitra Banerjee Divakaruni feminist retelling, Kurukshetra analysis",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 50,
    attachments: [
      {
        id: "att-8-1",
        url: "/src/assets/images/the_palace_of_illusions_cover_1792104955365.jpg",
        caption: "Fig. 1 — The Palace of Illusions book with green ornate palace archway on a cozy knit blanket with coffee.",
        credit: "Anchor Books / Chitra Banerjee Divakaruni",
        alt: "The Palace of Illusions book review cover showing green palace arch on knitted blanket with coffee",
        placement: "cover",
        addedAt: "July 05, 2026",
        fileSize: "1.4 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel reclaim an ancient epic through female defiance? Yes, it does.</strong> In this <em>The Palace of Illusions book review</em>, Chitra Banerjee Divakaruni radically reframes the Sanskrit epic Mahabharata from the passionate, unvarnished perspective of Panchaali (Draupadi), giving voice to a woman whose fiery agency altered the destiny of kings.</p>

      <h2>What Makes The Palace of Illusions a Groundbreaking Retelling?</h2>
      <p>The Palace of Illusions is groundbreaking because it reclaims the ancient Sanskrit epic Mahabharata from the first-person perspective of Panchaali (Draupadi), historically portrayed merely as a catalyst for male warfare. Chitra Banerjee Divakaruni transforms her into a complex, ambitious heroine whose agency and inner desires reshape the moral architecture of the epic.</p>
      <p>Born of fire alongside her brother Dhristadyumna, Panchaali's childhood is defined by a fiery prophecy that marks her as the catalyst for changing history.</p>

      <h2>How Does Panchaali Challenge Ancient Patriarchal Power?</h2>
      <p>Panchaali challenges patriarchal authority by refusing silent subservience, openly questioning kings, sages, and her five husbands even when bound by ancient warrior codes. Her legendary defiance in the Hastinapur court exposes the moral bankruptcy of men who prioritized abstract honor over living justice.</p>
      <p>Her refusal to accept victimhood during the infamous dice game remains one of world literature's most potent indictments of systemic complicity.</p>

      <blockquote>
        "Love comes like a lotus out of the muddy water, but it requires cultivation to bloom."
      </blockquote>

      <h2>The Palace of Illusions: Architecture as a Mirror of Pride</h2>
      <p>The miraculous crystal Palace built by Maya Danava acts as a visual metaphor for human ego, optical deception, and vanity. Its shifting illusions and deceptive water mirrors reflect Panchaali's intoxicating royal power while foreshadowing the cataclysmic conflict at Kurukshetra.</p>
      <p>The palace walls deceive the senses, mirroring how human characters mistake transient political dominance for eternal security.</p>

      <h2>Why Is Panchaali's Unspoken Longing for Karna So Poignant?</h2>
      <p>Panchaali's unspoken connection with Karna is poignant because it represents the tragic path of mutual recognition between two proud outsiders who were denied their rightful status by arbitrary societal caste and birth traditions. Their quiet mutual fascination infuses ancient myth with profound emotional vulnerability.</p>
      <p>Divakaruni humanizes both figures, turning mythic adversaries into soulful counterparts bound by fate and silence.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare how Regency women and ancient queens navigated institutional patriarchal limits: <a href="/sense-and-sensibility" class="text-amber-800 underline font-medium hover:text-amber-900">Sense and Sensibility book review</a></li>
          <li>Examine how parallel choices, mythic fate, and the weight of regrets shape personal destiny: <a href="/the-midnight-library" class="text-amber-800 underline font-medium hover:text-amber-900">The Midnight Library book analysis</a></li>
          <li>Return to the complete literary archives to explore all featured articles: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  },
  {
    id: 9,
    slug: "and-then-there-were-none",
    title: "And Then There Were None: The Golden Standard of Murder Mystery",
    subtitle: "Agatha Christie's clinical masterpiece of claustrophobic paranoia on Soldier Island",
    author: "Agatha Christie",
    category: "Thriller",
    date: "June 18, 2026",
    readTime: "8 min read",
    wordCount: "1,950 words",
    coverImage: "/src/assets/images/and_then_there_were_none_cover_1792104954760.jpg",
    excerpt: "Does this novel construct the ultimate closed-circle murder countdown? Yes, it does. Agatha Christie traps ten guilty strangers on an isolated island.",
    mainKeyword: "And Then There Were None review",
    seoTitle: "And Then There Were None Book Review: Mystery Analysis",
    metaDescription: "Read our And Then There Were None book review exploring Agatha Christie's locked island thriller, moral reckoning, and nursery rhyme deaths.",
    seoKeywords: "And Then There Were None Agatha Christie analysis, Soldier Island closed room murder, best mystery novels",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 65,
    attachments: [
      {
        id: "att-9-1",
        url: "/src/assets/images/and_then_there_were_none_cover_1792104954760.jpg",
        caption: "Fig. 1 — And Then There Were None red hardcover edition on dark wood desk with chess pieces.",
        credit: "Agatha Christie Mystery Archive",
        alt: "And Then There Were None book on wooden desk with coffee and chess",
        placement: "cover",
        addedAt: "June 18, 2026",
        fileSize: "1.5 MB"
      }
    ],
    content: `
      <p class="lead"><strong>Does this novel construct the ultimate closed-circle murder countdown? Yes, it does.</strong> In <em>And Then There Were None</em>, Agatha Christie strips the cozy British whodunit of its pastoral comforts, trapping ten morally compromised strangers on an unreachable island where each must confront their own buried crimes.</p>

      <h2>How Does Soldier Island Create Unrelenting Claustrophobia?</h2>
      <p>Soldier Island creates claustrophobia by completely severing communication with the mainland during a violent coastal storm. With no detective to arrive and restore order, the characters recognize that their executioner is among them, dining at their table and calculating their demise.</p>

      <h2>What Is the Moral Function of the Nursery Rhyme?</h2>
      <p>The nursery rhyme functions as an inexorable psychological countdown, weaponizing childhood innocence into an omen of inescapable doom. Each stanza dictates a specific manner of execution, dismantling the guests' sanity long before physical death arrives.</p>

      <blockquote>
        "There is no getting away from Island. It's that kind of world. You can't get away from things..."
      </blockquote>

      <h2>Why Does This Remain Christie's Crowning Technical Achievement?</h2>
      <p>This remains Christie's crowning technical achievement because she constructed an airtight mystery with zero outside suspects, solving an impossible crime through a hidden confession manuscript that rewards repeated readings.</p>

      <div class="mt-8 pt-6 border-t border-stone-200 text-sm text-stone-600 space-y-2 not-prose">
        <p class="font-medium text-stone-800">Related In-Depth Studies &amp; Internal Links:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Compare psychological guilt and silence in modern thrillers: <a href="/the-silent-patient" class="text-amber-800 underline font-medium hover:text-amber-900">The Silent Patient book review</a></li>
          <li>Discover how fate and retribution unfold in ancient epics: <a href="/the-palace-of-illusions" class="text-amber-800 underline font-medium hover:text-amber-900">The Palace of Illusions book review</a></li>
          <li>Return to the library catalog: <a href="/" class="text-amber-800 underline font-medium hover:text-amber-900">One More Book homepage catalog</a></li>
        </ul>
      </div>
    `
  }
];
