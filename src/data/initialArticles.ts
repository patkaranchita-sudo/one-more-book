import { Article } from '../types';

export const CURATED_STOCK_IMAGES = [
  {
    id: 'stock-1',
    name: 'Antique Manuscript & Ink',
    url: '/src/assets/images/literary_classic_manuscript_1792103094046.jpg',
    category: 'Classic',
    credit: 'Studio Archive',
    description: 'Leather-bound journal open on oak writing desk with inkpot'
  },
  {
    id: 'stock-2',
    name: 'Arrakis Dune Horizon',
    url: '/src/assets/images/desert_sci_fi_dune_1792103095217.jpg',
    category: 'Sci-Fi',
    credit: 'Planetary Observatory',
    description: 'Vast golden dunes under dual moons at dusk'
  },
  {
    id: 'stock-3',
    name: 'Cosmic Stellar Nebula',
    url: '/src/assets/images/deep_space_astronomy_1792103094896.jpg',
    category: 'Sci-Fi',
    credit: 'Deep Field Observatory',
    description: 'Luminous starry interstellar dust cloud'
  },
  {
    id: 'stock-4',
    name: 'Shadows in the Corridor',
    url: '/src/assets/images/nocturnal_shadows_mystery_1792103094929.jpg',
    category: 'Thriller',
    credit: 'Noir Studies Collection',
    description: 'Film noir corridor with stark venetian blind shadows'
  },
  {
    id: 'stock-5',
    name: 'Gilded Roaring Twenties Ball',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    category: 'Classic',
    credit: 'Vintage Archive',
    description: 'Golden champagne flutes and lavish evening ballroom lights'
  },
  {
    id: 'stock-6',
    name: 'Minimalist Workspace System',
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80',
    category: 'Non-Fiction',
    credit: 'Modernist Desk',
    description: 'Structured notebook, fountain pen and clean coffee cup'
  },
  {
    id: 'stock-7',
    name: 'Grand Classical Library',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&auto=format&fit=crop&q=80',
    category: 'Fiction',
    credit: 'Bodleian Collection',
    description: 'Infinite mahogany book stacks illuminated by warm skylights'
  },
  {
    id: 'stock-8',
    name: 'Fire & Mythological Lotus',
    url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&auto=format&fit=crop&q=80',
    category: 'Mythology',
    credit: 'Epics Illustrated',
    description: 'Mystical golden embers glowing over water'
  },
  {
    id: 'stock-9',
    name: 'Isolated Island Fog',
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80',
    category: 'Thriller',
    credit: 'Devonshire Coast',
    description: 'Rocky cliffs and mist-covered shore'
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Sense and Sensibility: The Balance of Emotion and Reason",
    subtitle: "A critical study of Elinor and Marianne Dashwood in Regency society",
    author: "Jane Austen",
    category: "Classic",
    date: "October 14, 2026",
    readTime: "8 min read",
    wordCount: "1,850 words",
    coverImage: "/src/assets/images/literary_classic_manuscript_1792103094046.jpg",
    excerpt: "Jane Austen’s timeless exploration of two sisters—Elinor and Marianne Dashwood—navigating love, social expectations, and financial uncertainty.",
    seoKeywords: "Sense and Sensibility Jane Austen review, Elinor and Marianne analysis, classic Regency novel, Austen social commentary",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
    attachments: [
      {
        id: "att-1-1",
        url: "/src/assets/images/literary_classic_manuscript_1792103094046.jpg",
        caption: "Fig. 1 — Early manuscript draft of Elinor and Marianne, written circa 1795 in Steventon.",
        credit: "British Library Archives",
        alt: "Open antique journal with quill and inkpot",
        placement: "cover",
        addedAt: "October 14, 2026",
        fileSize: "1.4 MB"
      },
      {
        id: "att-1-2",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&auto=format&fit=crop&q=80",
        caption: "Fig. 2 — Regency era domestic interior reflecting the modest quarters of Barton Cottage.",
        credit: "National Trust Heritage",
        alt: "Quiet Regency reading parlor",
        placement: "in-body",
        addedAt: "October 14, 2026",
        fileSize: "840 KB"
      }
    ],
    content: `
      <p class="lead">In <em>Sense and Sensibility</em>, Jane Austen establishes an iconic philosophical tension through the contrasting dispositions of the Dashwood sisters. Elinor represents 'sense'—prudence, deliberate self-restraint, and civic propriety—while Marianne embodies 'sensibility'—unbridled romantic idealism and passionate transparency.</p>
      
      <h2>The Duality of Heart and Mind</h2>
      <p>Austen refuses to grant a simplistic victory to either extreme. Marianne's contempt for social conventions leaves her emotionally exposed and physically broken following Willoughby's deceitful betrayal. Conversely, Elinor's disciplined containment nearly suffocates her personal happiness as she suffers Edward Ferrars' secret engagement in agonizing solitude.</p>
      
      <blockquote>
        "It is not everyone who has the power of reasonable decision, but everyone can feel."
      </blockquote>

      <h2>Economic Reality in Regency England</h2>
      <p>Beneath the salon decorum and courtship dialogues lies Austen’s sharpest socioeconomic indictment: the structural vulnerability of women denied direct inheritance. Following the loss of Norland Park to their half-brother John Dashwood and his calculating wife Fanny, the sisters must renegotiate their dignity on a meager annuity of five hundred pounds a year.</p>

      <h2>The Resolution of Temperaments</h2>
      <p>The novel’s resolution does not demand the erasure of sensibility, but its steady tempering through experience. Marianne discovers genuine devotion in Colonel Brandon's quiet steadfastness, while Elinor permits herself to weep openly upon learning Edward has regained his freedom. Maturity emerges not from extinguishing sentiment, but in cultivating wisdom to govern it.</p>
    `
  },
  {
    id: 2,
    title: "Dune: Ecology, Religion, and the Peril of Prophecy",
    subtitle: "How Frank Herbert deconstructed the messiah archetype on Arrakis",
    author: "Frank Herbert",
    category: "Sci-Fi",
    date: "October 02, 2026",
    readTime: "10 min read",
    wordCount: "2,400 words",
    coverImage: "/src/assets/images/desert_sci_fi_dune_1792103095217.jpg",
    excerpt: "Set on the harsh desert world of Arrakis, Frank Herbert’s monumental epic weaves political intrigue, environmental scarcity, and messianic myth.",
    seoKeywords: "Dune Frank Herbert book review, Arrakis ecology, Paul Atreides Fremen analysis, sci-fi masterpiece",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    attachments: [
      {
        id: "att-2-1",
        url: "/src/assets/images/desert_sci_fi_dune_1792103095217.jpg",
        caption: "Fig. 1 — The deep southern erg of Arrakis, where spice blow migrations occur beyond the shield wall.",
        credit: "Arrakis Cartographic Guild",
        alt: "Vast desert dunes with traveler in stillsuit under two moons",
        placement: "cover",
        addedAt: "October 02, 2026",
        fileSize: "1.8 MB"
      },
      {
        id: "att-2-2",
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1000&auto=format&fit=crop&q=80",
        caption: "Fig. 2 — Sun glare over the shifting rock ridges of the deep desert.",
        credit: "Orbital Recon Archive",
        alt: "Harsh sunlight over desert terrain",
        placement: "in-body",
        addedAt: "October 02, 2026",
        fileSize: "920 KB"
      }
    ],
    content: `
      <p class="lead">Frank Herbert’s <em>Dune</em> stands as the towering benchmark of world-building in speculative literature. Arrakis is not merely a backdrop for planetary conflict; it is an active ecological protagonist whose extreme arid discipline shapes theology, economics, and human biology.</p>
      
      <h2>The Standard for Ecological Speculation</h2>
      <p>Long before modern climate fiction gained mainstream prominence, Herbert treated resource scarcity as the primary engine of civilization. Water on Arrakis is sacred currency: distilled by stillsuits, calculated in liters per breath, and wept over with ceremonial reverence. The Fremen culture proves how environmental boundaries forge resilient societal structures.</p>

      <blockquote>
        "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration."
      </blockquote>

      <h2>The Subversion of the White Savior</h2>
      <p>While surface readers may interpret Paul Atreides' ascension as a classic heroic odyssey, Herbert explicitly engineered the narrative as a cautionary treatise against charismatic saviors. The Bene Gesserit's century-long breeding program and the planted religious prophecies of the Missionaria Protectiva demonstrate how myth can be weaponized to harvest fanatic legions.</p>

      <h2>Conclusion: A Multi-Generational Masterwork</h2>
      <p>Dune reminds us that unchecked political power combined with holy war creates an unstoppable juggernaut that consumes both prophet and disciple.</p>
    `
  },
  {
    id: 3,
    title: "Project Hail Mary: Scientific Ingenuity and Interstellar Friendship",
    subtitle: "Ryland Grace, Rocky, and the cooperative spirit across light-years",
    author: "Andy Weir",
    category: "Sci-Fi",
    date: "September 24, 2026",
    readTime: "9 min read",
    wordCount: "2,200 words",
    coverImage: "/src/assets/images/deep_space_astronomy_1792103094896.jpg",
    excerpt: "A lone astronaut wakes up with amnesia in another star system on a desperate mission to save Earth from a solar extinction crisis.",
    seoKeywords: "Project Hail Mary Andy Weir review, Ryland Grace Rocky science fiction, Astrophage analysis",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
    attachments: [
      {
        id: "att-3-1",
        url: "/src/assets/images/deep_space_astronomy_1792103094896.jpg",
        caption: "Fig. 1 — Spectral emission of Tau Ceti as observed from the Hail Mary forward sensor array.",
        credit: "ESA / Deep Space Observatories",
        alt: "Vivid celestial nebula and telescope dome",
        placement: "cover",
        addedAt: "September 24, 2026",
        fileSize: "2.1 MB"
      }
    ],
    content: `
      <p class="lead">In <em>Project Hail Mary</em>, Andy Weir doubles down on the grounded scientific optimism that made <em>The Martian</em> a worldwide sensation. Dr. Ryland Grace awakes alone aboard an interstellar vessel, his crewmates dead and his memories clouded by coma drugs, tasked with halting a solar-eating microbe named Astrophage.</p>

      <h2>The Triumph of the Scientific Method</h2>
      <p>Weir turns empirical laboratory deduction into high-octane suspense. Rather than relying on speculative hyperspace drives or magical energy shields, Grace relies on pipettes, spectrographs, mass calculations, and trial-and-error chemistry to decipher alien biology.</p>

      <blockquote>
        "Human beings have a remarkable ability to accept the abnormal and make it normal."
      </blockquote>

      <h2>Rocky: An Unforgettable Alien Ally</h2>
      <p>The true emotional anchor is Grace’s meeting with Rocky, an Eridian engineer whose carapace, sonar-speech, and xenon metabolism couldn't be more distinct from human biology. Their gradual linguistic harmonization using musical chords illustrates that mathematics and empathy form a universal bridge.</p>
    `
  },
  {
    id: 4,
    title: "The Silent Patient: Psychological Deception and Silent Guilt",
    subtitle: "Deconstructing Alicia Berenson's enigmatic painting and Theo Faber's crusade",
    author: "Alex Michaelides",
    category: "Thriller",
    date: "September 10, 2026",
    readTime: "7 min read",
    wordCount: "1,600 words",
    coverImage: "/src/assets/images/nocturnal_shadows_mystery_1792103094929.jpg",
    excerpt: "Alicia Berenson shoots her husband five times and never speaks another word. Psychotherapist Theo Faber becomes obsessed with discovering why.",
    seoKeywords: "The Silent Patient book review, Alex Michaelides thriller, Alicia Berenson plot twist, Theo Faber psychology",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 12,
    attachments: [
      {
        id: "att-4-1",
        url: "/src/assets/images/nocturnal_shadows_mystery_1792103094929.jpg",
        caption: "Fig. 1 — The stone ambulatory at The Grove secure psychiatric unit.",
        credit: "St. Jude Forensic Archive",
        alt: "Man in trenchcoat walking down shadowed stone corridor with venetian light blinds",
        placement: "cover",
        addedAt: "September 10, 2026",
        fileSize: "1.6 MB"
      }
    ],
    content: `
      <p class="lead">Alex Michaelides' debut novel struck a deep chord with thriller aficionados by melding modern psychotherapy with the somber weight of Greek classical tragedy—specifically Euripides' <em>Alcestis</em>.</p>

      <h2>The Eloquence of Absolute Silence</h2>
      <p>When artist Alicia Berenson brutally murders her husband Gabriel and subsequently refuses to utter another syllable, she seals her truth inside a vault. Psychotherapist Theo Faber approaches her case not simply as a clinical assignment, but as a mirror to his own unprocessed marital traumas.</p>

      <blockquote>
        "We often mistake love for compatibility, or for excitement, or for being rescued."
      </blockquote>

      <h2>Dual Narratives and Structural Misdirection</h2>
      <p>Michaelides alternates between Theo’s first-person investigation and excerpts from Alicia’s intimate diary. The structural ingenuity lies in how narrative time is compressed and manipulated, leading to an ending that forces the reader to immediately flip back to page one.</p>
    `
  },
  {
    id: 5,
    title: "The Great Gatsby: Wealth, Longing, and the American Dream",
    subtitle: "F. Scott Fitzgerald's haunting dissection of the Jazz Age aristocracy",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    date: "August 28, 2026",
    readTime: "7 min read",
    wordCount: "1,700 words",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
    excerpt: "A tragic portrait of the Jazz Age exploring Jay Gatsby's obsessive pursuit of Daisy Buchanan amidst corporate excess and social decay.",
    seoKeywords: "The Great Gatsby analysis, F Scott Fitzgerald American Dream, Daisy Buchanan green light meaning",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 18,
    attachments: [
      {
        id: "att-5-1",
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — Midnight gala on the Long Island Gold Coast, summer of 1922.",
        credit: "New York Historical Archive",
        alt: "Champagne glasses and golden party lights",
        placement: "cover",
        addedAt: "August 28, 2026",
        fileSize: "1.1 MB"
      }
    ],
    content: `
      <p class="lead">Few novels have distilled the fragile glitter of American aspiration with the crystalline poetic economy of <em>The Great Gatsby</em>. Fitzgerald captures both the dazzling surface and the hollow moral decay of the 1920s boom.</p>

      <h2>The Architecture of an Illusion</h2>
      <p>Jay Gatsby is not a man who merely fell in love with a woman; he fell in love with the transcendent ideal of self-invention. His colossal West Egg mansion, the imported silk shirts thrown across the bed, and the endless revelers who drank his liquor without ever shaking his hand were all stagecraft designed to summon Daisy Buchanan across the bay.</p>

      <blockquote>
        "So we beat on, boats against the current, borne back ceaselessly into the past."
      </blockquote>

      <h2>The Green Light as Human Longing</h2>
      <p>The green dock light remains literature’s most enduring emblem of reaching for what has already slipped through our fingers. Nick Carraway’s voice guides us from amusement to profound lamentation for a society indifferent to human casualty.</p>
    `
  },
  {
    id: 6,
    title: "Atomic Habits: How 1% Changes Lead to Remarkable Results",
    subtitle: "James Clear's operational blueprint for compounding behavioral changes",
    author: "James Clear",
    category: "Non-Fiction",
    date: "August 15, 2026",
    readTime: "8 min read",
    wordCount: "1,900 words",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80",
    excerpt: "A practical guide to behavioral psychology that proves long-term success comes from small daily systems rather than grand resolutions.",
    seoKeywords: "Atomic Habits James Clear summary, habit stacking behavioral psychology, systems over goals",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 25,
    attachments: [
      {
        id: "att-6-1",
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — The disciplined morning workspace: friction reduction in physical environments.",
        credit: "Productivity Quarterly",
        alt: "Minimalist desk with notebook and fountain pen",
        placement: "cover",
        addedAt: "August 15, 2026",
        fileSize: "750 KB"
      }
    ],
    content: `
      <p class="lead">James Clear stripped modern productivity literature of its empty motivational bravado, grounding self-improvement in cognitive psychology and neurobiology.</p>

      <h2>Systems Beat Willpower</h2>
      <p>The core thesis of <em>Atomic Habits</em> is disarmingly simple: you do not rise to the level of your goals; you fall to the level of your systems. Willpower is a depleted finite resource, whereas automated environmental architecture endures through exhaustion and stress.</p>

      <blockquote>
        "You do not rise to the level of your goals. You fall to the level of your systems."
      </blockquote>

      <h2>Identity-Based Feedback Loops</h2>
      <p>Clear argues that lasting transformation happens not at the outcome level (running a marathon), but at the identity level (identifying as a runner). Every minute action is a vote cast for the person you wish to become.</p>
    `
  },
  {
    id: 7,
    title: "The Midnight Library: Regret, Choice, and Life’s Infinite Potential",
    subtitle: "Matt Haig's gentle fable on surviving the ghost lives we never lived",
    author: "Matt Haig",
    category: "Fiction",
    date: "August 01, 2026",
    readTime: "8 min read",
    wordCount: "1,750 words",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&auto=format&fit=crop&q=80",
    excerpt: "When Nora Seed enters a library where every book offers an alternate life based on a different choice, she tests what truly makes life worth living.",
    seoKeywords: "The Midnight Library Matt Haig review, parallel universes fiction, Nora Seed mental health",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 32,
    attachments: [
      {
        id: "att-7-1",
        url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — The boundless stacks of the liminal library between life and eternity.",
        credit: "Archive of Speculative Spaces",
        alt: "Infinite wooden bookshelves in cathedral-like library",
        placement: "cover",
        addedAt: "August 01, 2026",
        fileSize: "1.3 MB"
      }
    ],
    content: `
      <p class="lead">Between life and death lies an infinite library overseen by an empathetic librarian named Mrs. Elm. In Matt Haig's therapeutic fantasy, every book contains the life you would have lived had you made a different decision.</p>

      <h2>The Weight of The Book of Regrets</h2>
      <p>Nora Seed arrives at the Midnight Library convinced that her life is an unmitigated series of disappointments. By stepping into lives where she became a rock star, a glaciologist, an Olympic swimmer, or stayed in her hometown, she discovers that no version of reality is exempt from suffering.</p>

      <blockquote>
        "Never underestimate the big importance of small things."
      </blockquote>

      <h2>Finding Peace in the Present</h2>
      <p>Haig’s novel is a warm antidote to the modern epidemic of FOMO and paralyzing existential second-guessing.</p>
    `
  },
  {
    id: 8,
    title: "Do Epic Shit: Honest Reflections on Life, Failure, and Success",
    subtitle: "Ankur Warikoo's direct notebook on career pivots, ego, and financial autonomy",
    author: "Ankur Warikoo",
    category: "Non-Fiction",
    date: "July 20, 2026",
    readTime: "7 min read",
    wordCount: "1,500 words",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Entrepreneur Ankur Warikoo shares candid, bite-sized lessons on career building, financial discipline, personal habits, and learning from failure.",
    seoKeywords: "Do Epic Shit Ankur Warikoo review, career lessons entrepreneurship, failure mindset",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 40,
    attachments: [
      {
        id: "att-8-1",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — Open notebook pages with handwritten annotations.",
        credit: "Creator Studio Press",
        alt: "Open book and reading desk",
        placement: "cover",
        addedAt: "July 20, 2026",
        fileSize: "890 KB"
      }
    ],
    content: `
      <p class="lead">Ankur Warikoo’s collection of aphorisms and autobiographical notes presents an unfiltered account of what it means to build, fail, and start over in the modern startup landscape.</p>

      <h2>The Normalization of Missteps</h2>
      <p>Rather than packaging success as a pristine linear ascent, Warikoo details his bankruptcies, failed business pivots, and bouts of impostor syndrome with total transparency.</p>

      <blockquote>
        "Failure is not the opposite of success. It is part of success."
      </blockquote>

      <h2>Financial Literacy and Time Sovereignty</h2>
      <p>The book’s strongest sections focus on the distinction between looking rich and possessing true financial sovereignty, emphasizing long-term index investing and relentless self-reflection.</p>
    `
  },
  {
    id: 9,
    title: "The Palace of Illusions: Reimagining Mahabharata Through Panchaali",
    subtitle: "Chitra Banerjee Divakaruni's feminist reclamation of an ancient epic",
    author: "Chitra Banerjee Divakaruni",
    category: "Mythology",
    date: "July 05, 2026",
    readTime: "9 min read",
    wordCount: "2,100 words",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&auto=format&fit=crop&q=80",
    excerpt: "A feminist retelling of the epic Mahabharata from the fierce, poetic perspective of Draupadi (Panchaali).",
    seoKeywords: "The Palace of Illusions Draupadi review, Chitra Banerjee Divakaruni Mahabharata feminist retelling",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 50,
    attachments: [
      {
        id: "att-9-1",
        url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — Fire sacrificial altar evoking Panchaali's birth from sacred flames.",
        credit: "Heritage Epics Project",
        alt: "Sacred fire glowing warmly",
        placement: "cover",
        addedAt: "July 05, 2026",
        fileSize: "1.2 MB"
      }
    ],
    content: `
      <p class="lead">For millennia, the Sanskrit epic <em>Mahabharata</em> has been recounted as the heroic tragedy of warring brothers and royal dharma. Chitra Banerjee Divakaruni radically shifts the focal lens by positioning Draupadi—born from sacrificial fire and given to five husbands—as the central voice.</p>

      <h2>Maya, Pride, and the Palace of Illusions</h2>
      <p>The crystalline Palace constructed by Maya Danava becomes a physical extension of Draupadi’s interior life: filled with optical deceptions, impossible water basins, and dazzling tapestries that mirror both her triumph and her fateful laughter at Duryodhana.</p>

      <blockquote>
        "Love comes like a lotus out of the muddy water, but it requires cultivation to bloom."
      </blockquote>

      <h2>The Complex Longing for Karna</h2>
      <p>Divakaruni dares to explore the unspoken, fraught attraction between Panchaali and Karna, giving vulnerable human texture to characters often frozen in mythological stone.</p>
    `
  },
  {
    id: 10,
    title: "And Then There Were None: The Golden Standard of Murder Mystery",
    subtitle: "Agatha Christie's clinical masterpiece of claustrophobic paranoia on Soldier Island",
    author: "Agatha Christie",
    category: "Thriller",
    date: "June 18, 2026",
    readTime: "8 min read",
    wordCount: "1,950 words",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Ten strangers are lured to an isolated island off the Devon coast. One by one, they are executed according to a sinister nursery rhyme.",
    seoKeywords: "And Then There Were None Agatha Christie analysis, Soldier Island closed room murder, best mystery novels",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 65,
    attachments: [
      {
        id: "att-10-1",
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80",
        caption: "Fig. 1 — Soldier Island off Devonshire: an impenetrable granite monolith cut off by rough seas.",
        credit: "British Coastal Geological Survey",
        alt: "Foggy sea cliffs and rocky crags",
        placement: "cover",
        addedAt: "June 18, 2026",
        fileSize: "1.4 MB"
      }
    ],
    content: `
      <p class="lead">Published in 1939, Agatha Christie’s <em>And Then There Were None</em> stripped the traditional British whodunit of its cozy countryside illusions, transforming the genre into a relentless, mathematically precise countdown to extinction.</p>

      <h2>The Closed Circle of Damnation</h2>
      <p>Ten guests, each secretly guilty of causing another person’s death beyond the reach of standard court justice, arrive at a modernist mansion on Soldier Island. A gramophone recording accuses each by name, and an innocent nursery rhyme predicts their respective executions.</p>

      <blockquote>
        "There is no getting away from Island. It's that kind of world. You can't get away from things..."
      </blockquote>

      <h2>Pure Psychological Dread</h2>
      <p>With no outside contact and no Poirot or Marple to intervene, the terror resides in the realization that the killer is among them—eating at their table, sharing their brandy, and watching their sanity disintegrate.</p>
    `
  }
];
