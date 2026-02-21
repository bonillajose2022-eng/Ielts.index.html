/* ════════════════════════════════════════════════════════════════════
   data.js — All pedagogical content: exercises, reading, listening
   ════════════════════════════════════════════════════════════════════ */

/* ── MULTIPLE CHOICE (10 items) ─────────────────────────────────── */
const MC_DATA = [
  {
    q: "Which suffix correctly turns the adjective <em>happy</em> into a noun?",
    options: ["-ful", "-ness", "-ly", "-ment"],
    answer: 1,
    explanation: "<strong>-ness</strong> turns adjectives into nouns meaning 'state or quality of': happy → happiness."
  },
  {
    q: "Choose the word that means 'full of care':",
    options: ["careless", "carefully", "careful", "carefulness"],
    answer: 2,
    explanation: "<strong>-ful</strong> means 'full of'. The correct form is <em>careful</em> (adjective)."
  },
  {
    q: "The word <em>connection</em> contains which suffix?",
    options: ["-er", "-tion", "-ness", "-ic"],
    answer: 1,
    explanation: "<strong>-tion/-sion</strong> turns verbs into nouns: connect → connection."
  },
  {
    q: "Which sentence uses the <em>-able</em> suffix correctly?",
    options: [
      "The problem is comfortness.",
      "She is very comfortous.",
      "The chair is comfortable.",
      "He works comfortly."
    ],
    answer: 2,
    explanation: "<strong>-able/-ible</strong> means 'capable of' or 'suitable for': comfort → comfortable."
  },
  {
    q: "Select the adverb formed with the suffix <em>-ly</em>:",
    options: ["creative", "creativity", "creatively", "creation"],
    answer: 2,
    explanation: "<strong>-ly</strong> turns adjectives into adverbs: creative → creatively."
  },
  {
    q: "The suffix <em>-ity</em> usually forms a:",
    options: ["Verb", "Adverb", "Noun", "Adjective"],
    answer: 2,
    explanation: "<strong>-ity</strong> creates nouns from adjectives: creative → creativity, similar → similarity."
  },
  {
    q: "Which word means 'without hope'?",
    options: ["hopeful", "hopefully", "hopeless", "hope"],
    answer: 2,
    explanation: "<strong>-less</strong> means 'without': hope → hopeless."
  },
  {
    q: "What is the noun form of the verb <em>develop</em>?",
    options: ["developer", "developmental", "development", "developing"],
    answer: 2,
    explanation: "<strong>-ment</strong> creates nouns from verbs: develop → development."
  },
  {
    q: "Which suffix is used to form adjectives meaning 'relating to'?",
    options: ["-tion", "-ly", "-ment", "-al"],
    answer: 3,
    explanation: "<strong>-al</strong> forms adjectives meaning 'relating to': nature → natural, profession → professional."
  },
  {
    q: "Select the word that correctly uses the suffix <em>-ous</em>:",
    options: ["dangerly", "dangerous", "dangerment", "dangerness"],
    answer: 1,
    explanation: "<strong>-ous</strong> forms adjectives meaning 'having the quality of': danger → dangerous."
  }
];

/* ── GAP-FILL (10 items) ─────────────────────────────────────────── */
const GF_DATA = [
  {
    sentence: "The scientist made an important __________ in the field of medicine.",
    options: ["discovery", "discoverer", "discoverous", "discoverment"],
    answer: 0,
    explanation: "<em>Discovery</em> is the correct noun form (discover + -y/-ery)."
  },
  {
    sentence: "Her __________ to help others is truly inspiring.",
    options: ["willing", "willingness", "willingly", "willed"],
    answer: 1,
    explanation: "<em>Willingness</em> uses <strong>-ness</strong> to form a noun from the adjective 'willing'."
  },
  {
    sentence: "The new regulation will __________ affect small businesses.",
    options: ["significant", "significance", "significantly", "signification"],
    answer: 2,
    explanation: "<em>Significantly</em> is an adverb formed with <strong>-ly</strong>."
  },
  {
    sentence: "Pollution is a serious threat to our __________.",
    options: ["environment", "environmental", "environmentally", "environmentor"],
    answer: 0,
    explanation: "<em>Environment</em> is a noun. The context requires a noun after the possessive 'our'."
  },
  {
    sentence: "The manager was __________ in her decisions.",
    options: ["decisiveness", "decisive", "decisively", "decision"],
    answer: 1,
    explanation: "After the verb 'was', we need an adjective: <em>decisive</em> (decide + -ive)."
  },
  {
    sentence: "Children need encouragement to develop their natural __________.",
    options: ["creatively", "creativeness", "creativity", "creative"],
    answer: 2,
    explanation: "<em>Creativity</em> (creative + -ity) is the correct noun form."
  },
  {
    sentence: "The instructions were too complicated and completely __________.",
    options: ["understandful", "understanding", "understandable", "understandness"],
    answer: 2,
    explanation: "<em>Understandable</em> uses <strong>-able</strong> meaning 'can be understood'. Note: here used with 'not' implied."
  },
  {
    sentence: "The __________ of the project surprised everyone with its speed.",
    options: ["completing", "completive", "completion", "completous"],
    answer: 2,
    explanation: "<em>Completion</em> uses <strong>-tion</strong> to turn the verb 'complete' into a noun."
  },
  {
    sentence: "His speech was __________ and moved the entire audience.",
    options: ["emotionful", "emotional", "emotionally", "emotion"],
    answer: 1,
    explanation: "<em>Emotional</em> uses <strong>-al</strong> to form an adjective from 'emotion'."
  },
  {
    sentence: "The data shows a clear improvement in student __________.",
    options: ["performing", "performative", "performance", "performous"],
    answer: 2,
    explanation: "<em>Performance</em> is the correct noun form of 'perform' (perform + -ance)."
  }
];

/* ── WORD FORMATION — IELTS style (10 items) ────────────────────── */
const WF_DATA = [
  {
    sentence: "The research team celebrated the __________ of the new vaccine. (DEVELOP)",
    answer: "development",
    hint: "verb → noun (-ment)",
    explanation: "<em>Development</em>: develop + <strong>-ment</strong>."
  },
  {
    sentence: "She handled the crisis with great __________ and confidence. (EFFECTIVE)",
    answer: "effectiveness",
    hint: "adjective → noun (-ness)",
    explanation: "<em>Effectiveness</em>: effective + <strong>-ness</strong>."
  },
  {
    sentence: "The course promotes critical and __________ thinking. (CREATE)",
    answer: "creative",
    hint: "verb → adjective (-ive)",
    explanation: "<em>Creative</em>: create + <strong>-ive</strong>."
  },
  {
    sentence: "The problem of __________ in cities is growing rapidly. (HOME)",
    answer: "homelessness",
    hint: "noun → adjective (-less) → noun (-ness)",
    explanation: "<em>Homelessness</em>: home + <strong>-less</strong> + <strong>-ness</strong>."
  },
  {
    sentence: "Students improved their academic performance __________ after the course. (SIGNIFICANT)",
    answer: "significantly",
    hint: "adjective → adverb (-ly)",
    explanation: "<em>Significantly</em>: significant + <strong>-ly</strong>."
  },
  {
    sentence: "The __________ of sustainable energy is a global priority. (PRODUCE)",
    answer: "production",
    hint: "verb → noun (-tion)",
    explanation: "<em>Production</em>: produce → produc + <strong>-tion</strong>."
  },
  {
    sentence: "We need someone __________ to lead the team. (RESPONSIBILITY)",
    answer: "responsible",
    hint: "noun → adjective (-ible)",
    explanation: "<em>Responsible</em>: responsibil + <strong>-ible</strong> → responsible."
  },
  {
    sentence: "The new system is highly __________ and easy to use. (ADAPT)",
    answer: "adaptable",
    hint: "verb → adjective (-able)",
    explanation: "<em>Adaptable</em>: adapt + <strong>-able</strong>."
  },
  {
    sentence: "The film's __________ was widely praised by critics. (ORIGINAL)",
    answer: "originality",
    hint: "adjective → noun (-ity)",
    explanation: "<em>Originality</em>: original + <strong>-ity</strong>."
  },
  {
    sentence: "The new policy has been highly __________ in reducing crime. (EFFECT)",
    answer: "effective",
    hint: "noun → adjective (-ive)",
    explanation: "<em>Effective</em>: effect + <strong>-ive</strong>."
  }
];

/* ── READING PASSAGE ─────────────────────────────────────────────── */
const PASSAGE_HTML = `
<p>In recent years, the global demand for <mark class="sfx">educational</mark> <mark class="sfx">development</mark> has grown remarkably. Schools and universities are no longer the only places where people seek <mark class="sfx">knowledge</mark>. Online platforms have created countless <mark class="sfx">opportunities</mark> for <mark class="sfx">continuous</mark> learning, allowing individuals to improve their skills <mark class="sfx">independently</mark> and at their own pace.</p>

<p>One of the most <mark class="sfx">impressive</mark> aspects of this shift is its <mark class="sfx">accessibility</mark>. Students who previously faced <mark class="sfx">significant</mark> barriers — such as cost, distance, or <mark class="sfx">disability</mark> — can now participate in high-quality courses from the comfort of their homes. This <mark class="sfx">transformation</mark> is particularly <mark class="sfx">beneficial</mark> for people living in rural areas or developing countries, where <mark class="sfx">traditional</mark> educational <mark class="sfx">institutions</mark> may not be readily available.</p>

<p>However, digital learning also brings its own set of challenges. Many learners report a lack of <mark class="sfx">motivation</mark> when studying alone, and some feel that the absence of face-to-face <mark class="sfx">interaction</mark> reduces the overall <mark class="sfx">effectiveness</mark> of the learning process. Critics argue that without proper guidance and <mark class="sfx">assessment</mark>, self-directed learning can lead to <mark class="sfx">confusion</mark> rather than genuine <mark class="sfx">understanding</mark>.</p>

<p>Despite these concerns, most educators agree that blended learning — a <mark class="sfx">combination</mark> of online and in-person instruction — offers the best <mark class="sfx">solution</mark>. When technology is used <mark class="sfx">thoughtfully</mark>, it can complement <mark class="sfx">traditional</mark> teaching methods and dramatically increase student <mark class="sfx">achievement</mark>. The key lies in thoughtful design and ongoing <mark class="sfx">collaboration</mark> between teachers and technology experts.</p>
`;

/* ── READING QUESTIONS (6 items) ─────────────────────────────────── */
const READING_DATA = [
  {
    type: "Multiple Choice",
    q: "According to the passage, why has online learning become more popular?",
    options: [
      "Because traditional schools are closing down",
      "Because it allows people to learn independently and at their own pace",
      "Because employers now prefer online qualifications",
      "Because online courses are always free"
    ],
    answer: 1,
    explanation: "The passage states that online platforms allow individuals to improve their skills 'independently and at their own pace'."
  },
  {
    type: "True / False / Not Given",
    q: "The passage states that digital learning is ONLY useful for students in developing countries.",
    options: ["True", "False", "Not Given"],
    answer: 1,
    explanation: "<strong>False.</strong> The text says digital learning is <em>particularly</em> beneficial for rural/developing areas, but it benefits all learners."
  },
  {
    type: "True / False / Not Given",
    q: "According to the passage, self-directed learning can sometimes cause confusion.",
    options: ["True", "False", "Not Given"],
    answer: 0,
    explanation: "<strong>True.</strong> The passage mentions that without proper guidance, self-directed learning can lead to 'confusion rather than genuine understanding'."
  },
  {
    type: "Multiple Choice",
    q: "What do most educators recommend according to the final paragraph?",
    options: [
      "Replacing all face-to-face classes with online ones",
      "Banning the use of technology in classrooms",
      "Combining online and in-person teaching",
      "Testing students less frequently"
    ],
    answer: 2,
    explanation: "The passage clearly states that 'blended learning — a combination of online and in-person instruction — offers the best solution'."
  },
  {
    type: "Short Answer",
    q: "Which two groups are specifically mentioned as benefiting most from online accessibility? (Write both, separated by a comma)",
    options: [
      "Students in rural areas, people in developing countries",
      "Teachers, technology experts",
      "University students, school teachers",
      "Disabled learners, wealthy students"
    ],
    answer: 0,
    explanation: "The passage mentions 'people living in rural areas or developing countries' as those who benefit most from accessibility."
  },
  {
    type: "Matching Headings",
    q: "Which heading best fits the final paragraph?",
    options: [
      "The Dangers of Too Much Screen Time",
      "Why Students Prefer Working Alone",
      "A Balanced Approach to Modern Learning",
      "The End of Traditional Education"
    ],
    answer: 2,
    explanation: "The final paragraph advocates for a balanced 'blended learning' approach — mixing online and traditional methods."
  }
];

/* ── LISTENING SCRIPT ────────────────────────────────────────────── */
const LISTENING_SCRIPT = [
  { speaker: "Sara", text: "Good morning, Tom. Please take a seat. I understand you're looking for some career guidance." },
  { speaker: "Tom", text: "Yes, that's right. I've just finished my qualification in digital marketing, and I'm feeling a bit overwhelmed about what to do next." },
  { speaker: "Sara", text: "That's completely understandable. Many students feel that way after graduation. Your qualification in digital marketing is actually very valuable in today's employment landscape." },
  { speaker: "Tom", text: "Really? I wasn't sure if my specialisation was specific enough. I've been applying for positions without much success, and it's made me feel quite hopeless." },
  { speaker: "Sara", text: "Don't worry — that's a very common reaction. Let me tell you something: the development of digital skills is one of the fastest-growing areas in the global economy. Your knowledge and creativity are important assets." },
  { speaker: "Tom", text: "That's encouraging to hear. But I'm concerned about my professional presentation — my CV and my online visibility, for example." },
  { speaker: "Sara", text: "Good thinking. Presentation is crucial. You need to show your adaptability and your ability to solve real problems. Do you have any examples of successful projects you've worked on?" },
  { speaker: "Tom", text: "Yes, I led a social media campaign for a local organisation, and the results showed a significant improvement in their online engagement." },
  { speaker: "Sara", text: "Excellent! That's a wonderful demonstration of your effectiveness as a professional. You should highlight that achievement clearly. Employers love measurable outcomes." },
  { speaker: "Tom", text: "Should I also consider doing further certification?" },
  { speaker: "Sara", text: "Absolutely. Continuous improvement is essential. I'd recommend looking into courses that focus on data analytics or content creation — both are in high demand. Your motivation and your willingness to learn will really stand out." },
  { speaker: "Tom", text: "Thank you, Sara. I feel much more hopeful now. This conversation has been really helpful." },
  { speaker: "Sara", text: "You're very welcome. Remember, every successful career involves challenges and setbacks — what matters is your perseverance and your ability to reflect and grow. Good luck!" }
];

/* ── LISTENING QUESTIONS (8 items) ──────────────────────────────── */
const LISTENING_DATA = [
  {
    type: "Completion",
    q: "Tom has just finished a __________ in digital marketing.",
    options: ["degree", "qualification", "certificate", "internship"],
    answer: 1,
    explanation: "Sara says: 'Your qualification in digital marketing is actually very valuable'."
  },
  {
    type: "Multiple Choice",
    q: "How does Tom feel after applying for jobs without success?",
    options: ["Excited", "Angry", "Hopeless", "Bored"],
    answer: 2,
    explanation: "Tom says 'it's made me feel quite hopeless'."
  },
  {
    type: "Multiple Choice",
    q: "According to Sara, what is one of the fastest-growing areas in the economy?",
    options: [
      "Traditional manufacturing",
      "Development of digital skills",
      "Agricultural production",
      "International tourism"
    ],
    answer: 1,
    explanation: "Sara says: 'the development of digital skills is one of the fastest-growing areas in the global economy'."
  },
  {
    type: "Completion",
    q: "Sara advises Tom to show his __________ and ability to solve real problems.",
    options: ["adaptability", "appearance", "age", "address"],
    answer: 0,
    explanation: "Sara says: 'You need to show your adaptability and your ability to solve real problems'."
  },
  {
    type: "True / False / Not Given",
    q: "Tom led a social media campaign for an international company.",
    options: ["True", "False", "Not Given"],
    answer: 1,
    explanation: "<strong>False.</strong> Tom says it was for 'a local organisation', not an international company."
  },
  {
    type: "Matching",
    q: "Which two subjects does Sara recommend for further certification? (Choose two)",
    options: [
      "Data analytics and content creation",
      "Graphic design and finance",
      "Project management and sales",
      "Web development and law"
    ],
    answer: 0,
    explanation: "Sara recommends 'courses that focus on data analytics or content creation'."
  },
  {
    type: "Multiple Choice",
    q: "What does Sara say employers love?",
    options: ["Long CVs", "Measurable outcomes", "Social media followers", "Academic references"],
    answer: 1,
    explanation: "Sara says: 'Employers love measurable outcomes'."
  },
  {
    type: "Completion",
    q: "Sara says every successful career involves challenges and __________.",
    options: ["accidents", "setbacks", "failures", "mistakes"],
    answer: 1,
    explanation: "Sara says: 'every successful career involves challenges and setbacks'."
  }
];
