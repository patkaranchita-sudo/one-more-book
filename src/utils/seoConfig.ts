export interface PageSeoData {
  slug: string;
  urlPath: string;
  mainKeyword: string;
  titleTag: string; // Must be 50-60 characters
  metaDescription: string; // Must be 150-160 characters
  h1: string;
  h2Sections: {
    heading: string;
    isQuestion: boolean;
    answerFirstParagraph: string;
    expandedBody?: string;
  }[];
  image: {
    url: string;
    alt: string;
    caption: string;
  };
  internalLinks: {
    title: string;
    path: string;
    context: string;
  }[];
}

export const SEO_PAGES: Record<string, PageSeoData> = {
  'home': {
    slug: '',
    urlPath: '/',
    mainKeyword: 'long-form book reviews',
    titleTag: 'One More Book: Long-Form Book Reviews & Literary Essays', // 54 chars
    metaDescription: 'Discover in-depth long-form book reviews, literary essays, and illustrated critiques of classic and modern novels with comprehensive analysis on One More Book.', // 158 chars
    h1: 'Stories That Stay With You: Curated Long-Form Book Reviews',
    h2Sections: [
      {
        heading: 'What Makes Our Long-Form Book Reviews Distinctive?',
        isQuestion: true,
        answerFirstParagraph: 'Our long-form book reviews provide comprehensive thematic, historical, and psychological breakdowns of enduring literature, replacing superficial star ratings with rigorous critical analysis and high-resolution archival plates.',
        expandedBody: 'Every study pairs academic depth with an accessible reading rhythm designed for discerning bibliophiles.'
      },
      {
        heading: 'Curated Critical Studies & Illustrated Novels',
        isQuestion: false,
        answerFirstParagraph: 'Our curated catalog features landmark literary works spanning classic Regency fiction, contemporary philosophical narratives, and mythic retellings, each illuminated by visual figure plates and thematic analysis.',
        expandedBody: 'Browse our complete library below or jump directly into our featured long-form reviews.'
      },
      {
        heading: 'Why Does Slow Literary Reading Matter Today?',
        isQuestion: true,
        answerFirstParagraph: 'Slow literary reading fosters sustained attention, emotional empathy, and nuanced discernment in an era dominated by transient digital snippets. Deep engagement with complex texts allows readers to process intricate moral and philosophical dilemmas.',
        expandedBody: 'By taking time to reflect upon the prose, readers rediscover the contemplative beauty of dedicated long-form reading.'
      },
      {
        heading: 'How Do Visual Plates and Figure Attachments Deepen Literary Analysis?',
        isQuestion: true,
        answerFirstParagraph: 'Visual plates anchor literary themes in tangible material culture, allowing readers to examine vintage cover typography, original manuscripts, and historical settings alongside the critical text.',
        expandedBody: 'These curated images transform digital essays into museum-grade reading journeys.'
      }
    ],
    image: {
      url: '/src/assets/images/sense_and_sensibility_cover_1792104952064.jpg',
      alt: 'One More Book literary journal collection featuring vintage book editions and illustrated critiques',
      caption: 'The One More Book library of long-form literary critiques and visual plates.'
    },
    internalLinks: [
      {
        title: 'Sense and Sensibility Book Review',
        path: '/sense-and-sensibility',
        context: 'Explore Jane Austen’s classic examination of reason and emotion.'
      },
      {
        title: 'The Midnight Library Book Analysis',
        path: '/the-midnight-library',
        context: 'Discover Matt Haig’s philosophical journey through parallel lives.'
      },
      {
        title: 'The Palace of Illusions Book Review',
        path: '/the-palace-of-illusions',
        context: 'Read the feminist reclamation of the Sanskrit epic Mahabharata.'
      }
    ]
  },

  'sense-and-sensibility': {
    slug: 'sense-and-sensibility',
    urlPath: '/sense-and-sensibility',
    mainKeyword: 'Sense and Sensibility book review',
    titleTag: 'Sense and Sensibility Book Review: Themes & Character Arc', // 57 chars
    metaDescription: "Read our Sense and Sensibility book review examining Jane Austen's themes of reason versus emotion, Regency social limits, and Elinor's quiet sacrifices today.", // 158 chars
    h1: 'Sense and Sensibility Book Review: Emotion, Reason, and Society',
    h2Sections: [
      {
        heading: 'What Is the Central Dilemma in Sense and Sensibility?',
        isQuestion: true,
        answerFirstParagraph: 'The central dilemma of Sense and Sensibility is whether emotional fulfillment should be guided by social restraint and reason or by unrestrained romantic passion. Jane Austen investigates this conflict through the divergent life choices of the Dashwood sisters, demonstrating that an enduring, mature life requires the harmonizing of both faculties rather than the unilateral triumph of either.',
        expandedBody: "Elinor represents 'sense'—prudence, deliberate self-restraint, and civic propriety—while Marianne embodies 'sensibility'—unbridled romantic idealism and passionate transparency."
      },
      {
        heading: 'How Do Elinor and Marianne Dashwood Contrast Emotion and Reason?',
        isQuestion: true,
        answerFirstParagraph: 'Elinor and Marianne Dashwood represent opposing reactions to romantic vulnerability within a rigid social hierarchy. Elinor practices deliberate prudence and self-containment to protect her family from scandal, whereas Marianne champions raw emotional authenticity, openly displaying her joy and despair until Willoughby’s deceitful betrayal forces her to reckon with the perils of unchecked sensibility.',
        expandedBody: "Austen refuses to grant a simplistic victory to either extreme. Marianne's contempt for social conventions leaves her emotionally exposed and physically broken. Conversely, Elinor's disciplined containment nearly suffocates her personal happiness as she suffers Edward Ferrars' secret engagement in agonizing solitude."
      },
      {
        heading: 'Economic Realities and Marriage Constraints in Regency England',
        isQuestion: false,
        answerFirstParagraph: 'In Regency England, marriage functioned as an urgent economic imperative for women denied direct inheritance rights under primogeniture laws. Following the eviction of the Dashwood women from Norland Park, their reduced five-hundred-pound annuity underscores how societal decorum often masked severe financial precarity.',
        expandedBody: 'Beneath the salon decorum and courtship dialogues lies Austen’s sharpest socioeconomic indictment: women without fortunes were forced into strategic negotiations for basic survival and domestic security.'
      },
      {
        heading: 'Why Does Sense and Sensibility Remain Relevant for Modern Readers?',
        isQuestion: true,
        answerFirstParagraph: 'Sense and Sensibility endures because modern readers still navigate the universal friction between emotional authenticity and societal responsibility. Austen’s incisive psychological wit, sharp character foils, and refusal to indulge simplistic romantic clichés provide an enduring study of emotional resilience.',
        expandedBody: 'Maturity emerges not from extinguishing sentiment, but in cultivating wisdom to govern it.'
      }
    ],
    image: {
      url: '/src/assets/images/sense_and_sensibility_cover_1792104952064.jpg',
      alt: 'Sense and Sensibility book review vintage paperback edition by Jane Austen on rose floral cloth',
      caption: 'Fig. 1 — Sense and Sensibility Oxford World\'s Classics edition with vintage floral coquette aesthetic.'
    },
    internalLinks: [
      {
        title: 'The Midnight Library Book Analysis',
        path: '/the-midnight-library',
        context: 'Compare how internal emotional choices and regret shape human destiny across different eras.'
      },
      {
        title: 'The Palace of Illusions Book Review',
        path: '/the-palace-of-illusions',
        context: 'Contrast female agency, societal confinement, and unspoken desire with Panchaali\'s narrative.'
      },
      {
        title: 'One More Book Homepage Catalog',
        path: '/',
        context: 'Return to the main literary catalog to browse all long-form book reviews and essays.'
      }
    ]
  },

  'the-midnight-library': {
    slug: 'the-midnight-library',
    urlPath: '/the-midnight-library',
    mainKeyword: 'The Midnight Library book analysis',
    titleTag: 'The Midnight Library Book Analysis: Summary and Themes', // 54 chars
    metaDescription: 'Read our The Midnight Library book analysis exploring Nora Seed\'s parallel lives, the philosophy of regret, and how to embrace peace in the present moment now.', // 159 chars
    h1: 'The Midnight Library Book Analysis: Regret, Choice, and Living',
    h2Sections: [
      {
        heading: 'What Is the Core Premise of The Midnight Library?',
        isQuestion: true,
        answerFirstParagraph: 'The core premise of The Midnight Library is that between life and death lies a purgatorial library where every volume offers the reader a chance to experience an alternate life branch based on past choices. Matt Haig uses this magical realist conceit to help protagonist Nora Seed test whether any of her unchosen pathways would have produced enduring happiness.',
        expandedBody: 'Overseen by an empathetic librarian named Mrs. Elm, the library serves as a liminal sanctuary where time freezes at midnight while Nora investigates her unlived possibilities.'
      },
      {
        heading: 'How Does Nora Seed Confront the Paralyzing Weight of Regret?',
        isQuestion: true,
        answerFirstParagraph: 'Nora Seed confronts regret by opening \'The Book of Regrets,\' an endlessly heavy tome recording every perceived failure of her life. By methodically living out her parallel possibilities—as an Olympic swimmer, a glaciologist, a rock musician, and a quiet country vineyard owner—she discovers that eliminating a past mistake merely substitutes one set of struggles for another.',
        expandedBody: 'As she tests the lives she thought she wanted, Nora realizes that regret is built on the flawed assumption that an alternate choice would have led to unconditional bliss.'
      },
      {
        heading: 'Parallel Realities: Why Every Single Life Contains Suffering',
        isQuestion: false,
        answerFirstParagraph: 'Every parallel life branch in the multiverse inevitably contains its own brand of tragedy, grief, and disillusionment. Haig deconstructs the seductive illusion of perfection, showing that the pursuit of a flawless timeline is inherently self-defeating.',
        expandedBody: 'Even in lives where Nora achieves international celebrity or wealth, she encounters loneliness, familial loss, and unexpected compromises that ground the narrative in emotional realism.'
      },
      {
        heading: 'What Is the Ultimate Lesson Matt Haig Offers on Existential Despair?',
        isQuestion: true,
        answerFirstParagraph: 'Matt Haig\'s ultimate lesson is that true fulfillment comes not from altering the past, but from developing unconditional gratitude and active presence in our current life. Life\'s beauty emerges from ordinary, unglamorous moments rather than spectacular alternate destinies.',
        expandedBody: 'The book concludes with a powerful affirmation of self-compassion: you do not need to play every game to appreciate the infinite value of simply being alive.'
      }
    ],
    image: {
      url: '/src/assets/images/the_midnight_library_cover_1792104953917.jpg',
      alt: 'The Midnight Library book analysis aesthetic polaroid photo showing candlelit cathedral bookshelves',
      caption: 'Fig. 1 — The Midnight Library aesthetic polaroid: the infinite candlelit library open at midnight.'
    },
    internalLinks: [
      {
        title: 'Sense and Sensibility Book Review',
        path: '/sense-and-sensibility',
        context: 'Explore how social expectations and emotional balance govern our everyday choices.'
      },
      {
        title: 'The Palace of Illusions Book Review',
        path: '/the-palace-of-illusions',
        context: 'Discover how mythic destinies, illusions, and human regrets intertwine in Divakaruni\'s work.'
      },
      {
        title: 'One More Book Homepage Catalog',
        path: '/',
        context: 'Browse all curated long-form essays, critical studies, and book reviews.'
      }
    ]
  },

  'the-palace-of-illusions': {
    slug: 'the-palace-of-illusions',
    urlPath: '/the-palace-of-illusions',
    mainKeyword: 'The Palace of Illusions book review',
    titleTag: 'The Palace of Illusions Book Review: Panchaali Retold', // 53 chars
    metaDescription: 'Explore our The Palace of Illusions book review tracing Draupadi\'s fierce feminist perspective, mythic honor, and the Kurukshetra war in Divakaruni\'s classic.', // 158 chars
    h1: 'The Palace of Illusions Book Review: Draupadi and the Mahabharata',
    h2Sections: [
      {
        heading: 'What Makes The Palace of Illusions a Groundbreaking Retelling?',
        isQuestion: true,
        answerFirstParagraph: 'The Palace of Illusions is groundbreaking because it reclaims the ancient Sanskrit epic Mahabharata from the first-person perspective of Panchaali (Draupadi), historically portrayed merely as a catalyst for male warfare. Chitra Banerjee Divakaruni transforms her into a complex, ambitious heroine whose agency and inner desires reshape the moral architecture of the epic.',
        expandedBody: 'Born of fire alongside her brother Dhristadyumna, Panchaali\'s childhood is defined by a fiery prophecy that marks her as the catalyst for changing history.'
      },
      {
        heading: 'How Does Panchaali Challenge Ancient Patriarchal Power?',
        isQuestion: true,
        answerFirstParagraph: 'Panchaali challenges patriarchal authority by refusing silent subservience, openly questioning kings, sages, and her five husbands even when bound by ancient warrior codes. Her legendary defiance in the Hastinapur court exposes the moral bankruptcy of men who prioritized abstract honor over living justice.',
        expandedBody: 'Her refusal to accept victimhood during the infamous dice game remains one of world literature\'s most potent indictments of systemic complicity.'
      },
      {
        heading: 'The Palace of Illusions: Architecture as a Mirror of Pride',
        isQuestion: false,
        answerFirstParagraph: 'The miraculous crystal Palace built by Maya Danava acts as a visual metaphor for human ego, optical deception, and vanity. Its shifting illusions and deceptive water mirrors reflect Panchaali\'s intoxicating royal power while foreshadowing the cataclysmic conflict at Kurukshetra.',
        expandedBody: 'The palace walls deceive the senses, mirroring how human characters mistake transient political dominance for eternal security.'
      },
      {
        heading: 'Why Is Panchaali\'s Unspoken Longing for Karna So Poignant?',
        isQuestion: true,
        answerFirstParagraph: 'Panchaali\'s unspoken connection with Karna is poignant because it represents the tragic path of mutual recognition between two proud outsiders who were denied their rightful status by arbitrary societal caste and birth traditions. Their quiet mutual fascination infuses ancient myth with profound emotional vulnerability.',
        expandedBody: 'Divakaruni humanizes both figures, turning mythic adversaries into soulful counterparts bound by fate and silence.'
      }
    ],
    image: {
      url: '/src/assets/images/the_palace_of_illusions_cover_1792104955365.jpg',
      alt: 'The Palace of Illusions book review cover showing green palace arch on knitted blanket with coffee',
      caption: 'Fig. 1 — The Palace of Illusions book with green ornate palace archway on a cozy knit blanket with coffee.'
    },
    internalLinks: [
      {
        title: 'Sense and Sensibility Book Review',
        path: '/sense-and-sensibility',
        context: 'Compare how Regency women and ancient queens navigated institutional patriarchal limits.'
      },
      {
        title: 'The Midnight Library Book Analysis',
        path: '/the-midnight-library',
        context: 'Examine how parallel choices, mythic fate, and the weight of regrets shape personal destiny.'
      },
      {
        title: 'One More Book Homepage Catalog',
        path: '/',
        context: 'Return to the complete literary archives to explore all featured articles and reviews.'
      }
    ]
  }
};
