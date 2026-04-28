const docLink = (slug, label) => `<a href="/docs/${slug}" class="text-emerald-700 font-semibold underline underline-offset-2 hover:text-emerald-800">${label}</a>`;

const makePost = ({
  intro,
  meaning,
  steps,
  documents,
  tips,
  conclusion,
  labels = {
    intro: 'Introduction',
    meaning: 'Explanation and Meaning',
    steps: 'Step-by-Step Process',
    documents: 'Required Documents',
    tips: 'Important Tips',
    checklist: 'Practical Checklist Before You Proceed',
    conclusion: 'Conclusion',
  },
  checklist = {
    paragraphs: [
      'Before acting on this topic, compare the latest official record with your own document set. Revenue portals, registration databases, and court systems do not always update at the same speed, so a cautious reader should verify names, dates, survey numbers, document numbers, and property descriptions across more than one source. This small verification step prevents many avoidable mistakes in legal and property work.',
      'It also helps to maintain a single working file containing ID proofs, acknowledgments, payment receipts, supporting annexures, earlier records, and the final version of any deed or online extract. When a bank, advocate, registrar, or revenue official asks a follow-up question, organized records allow you to answer quickly instead of rebuilding the file from scattered screenshots and forwarded messages.',
      'Many people lose time not because the process is impossible, but because they move ahead with incomplete paperwork or unverified details. A careful checklist-based approach gives you stronger evidence, better clarity, and a cleaner path whether the next step is registration, mutation, filing, correction, or formal legal action.',
    ],
    points: [
      'Cross-check all names and addresses with government ID before submission or execution.',
      'Keep screenshots or receipts for every online step, especially where fees or OTP verification are involved.',
      'Read property schedules, survey details, and case numbers digit by digit rather than by visual guesswork.',
      'Do not rely only on oral assurances when a document, portal entry, or order copy can confirm the position.',
      'Preserve older records as well as new ones because historical continuity often matters in legal review.',
      'Where the facts are disputed or the stakes are high, seek document review before taking an irreversible step.',
    ],
  },
}) =>
  `
    <section>
      <h2>${labels.intro}</h2>
      ${intro.map((paragraph) => `<p>${paragraph}</p>`).join('')}
    </section>
    <section>
      <h2>${labels.meaning}</h2>
      ${meaning.map((paragraph) => `<p>${paragraph}</p>`).join('')}
    </section>
    <section>
      <h2>${labels.steps}</h2>
      ${steps.map((step) => `<h3>${step.heading}</h3><p>${step.text}</p>`).join('')}
    </section>
    <section>
      <h2>${labels.documents}</h2>
      <ul>
        ${documents.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </section>
    <section>
      <h2>${labels.tips}</h2>
      <ul>
        ${tips.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </section>
    <section>
      <h2>${labels.checklist}</h2>
      ${checklist.paragraphs.slice(0, 2).map((paragraph) => `<p>${paragraph}</p>`).join('')}
      <ul>
        ${checklist.points.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <p>${checklist.paragraphs[2]}</p>
    </section>
    <section>
      <h2>${labels.conclusion}</h2>
      ${conclusion.map((paragraph) => `<p>${paragraph}</p>`).join('')}
    </section>
  `;

export const blogs = [
  {
    slug: 'how-to-fill-rental-agreement-form-tamil',
    title: 'வாடகை ஒப்பந்தப் படிவம் எப்படி நிரப்புவது',
    description:
      'வாடகை ஒப்பந்தம் எப்படி எழுதுவது, எந்த விவரங்கள் கட்டாயம் சேர்க்க வேண்டும், எந்த ஆவணங்கள் தேவை, என்ன தவறுகள் தவிர்க்க வேண்டும் என்பதற்கான தமிழில் வழிகாட்டி.',
    content: makePost({
      intro: [
        `தமிழ்நாட்டில் வீடு, ஃப்ளாட், கடை, அலுவலகம் போன்ற சொத்துகளை வாடகைக்கு விடும்போது பலர் முதலில் வாய்மொழியாக பேசிவிட்டு பின்னர் சிக்கலில் விழுகிறார்கள். வாடகை தொகை, அட்வான்ஸ், கால அவகாசம், மின்சாரம் யார் கட்ட வேண்டும், முன் அறிவிப்பு எத்தனை நாள் என்பவை தெளிவாக எழுதப்படாததால் பிரச்சினை உருவாகிறது.`,
        `வாடகை ஒப்பந்தப் படிவம் சரியாக நிரப்பப்பட்டால் வீட்டுவாடகையாளர் மற்றும் வாடகையாளர் இருவருக்கும் பாதுகாப்பு கிடைக்கும். பின்னர் வாக்குவாதம் வந்தாலும் ஒப்பந்தத்தில் என்ன எழுதப்பட்டுள்ளது என்பதை அடிப்படையாக வைத்து தீர்வு காண முடியும்.`,
        `உங்களுக்கு தயாரான format தேவைப்பட்டால் ${docLink('lease-deed', '₹9 க்கு Rental Agreement format பதிவிறக்கம் செய்ய')} அல்லது ${docLink('sale-agreement', '₹9 க்கு Sale Agreement format பார்க்க')}லாம். இதை பார்த்தால் சட்டப் படிவத்தில் எந்த வகையில் clauses எழுத வேண்டும் என்பது தெளிவாகும்.`,
      ],
      meaning: [
        `வாடகை ஒப்பந்தம் என்பது சொத்து உரிமையாளர் மற்றும் வாடகையாளர் இடையே செய்யப்படும் எழுத்து மூல உடன்படிக்கை. இதில் மாத வாடகை, அட்வான்ஸ், ஒப்பந்த காலம், பயன்படுத்தும் நோக்கம், பராமரிப்பு பொறுப்பு, வெளியேறும் விதிமுறைகள் போன்றவை எழுதப்படும்.`,
        `ஒப்பந்தப் படிவம் நிரப்புவது என்றால் பெயர் மற்றும் வாடகை மட்டும் எழுதுவது அல்ல. சொத்தின் முழு முகவரி சரியாக இருக்க வேண்டும், ஆதார் அல்லது PAN போன்ற அடையாள விவரங்கள் தவறாமல் இருக்க வேண்டும், பணத் தொகை எண்களிலும் எழுத்திலும் இருக்க வேண்டும், இரு தரப்பினரின் பொறுப்புகள் தெளிவாக இருக்க வேண்டும். தெளிவில்லாத ஒப்பந்தம் தான் பெரும்பாலான பிரச்சினைகளுக்கு காரணம்.`,
      ],
      steps: [
        {
          heading: '1. வீட்டுவாடகையாளர் மற்றும் வாடகையாளர் முழு விவரங்களை எழுதவும்',
          text: 'இருவரின் முழுப் பெயர், தந்தை அல்லது கணவர் பெயர், நிரந்தர முகவரி, மொபைல் எண், ஆதார் அல்லது பிற ID விவரங்களை சரியாக பதிவு செய்ய வேண்டும். ஆதாரத்தில் இருக்கும் spelling எப்படி உள்ளதோ அப்படியே எழுதுவது நல்லது. Agent மூலம் ஒப்பந்தம் செய்தால் power of attorney விவரமும் சேர்க்க வேண்டும்.',
        },
        {
          heading: '2. சொத்து விவரத்தை தெளிவாக குறிப்பிடவும்',
          text: 'வீட்டு எண், தெரு, பகுதி, ஊர், மாவட்டம், PIN code, மாடி எண், flat எண், shop அல்லது house என சொத்து எந்த வகை என்பது எல்லாம் எழுத வேண்டும். கார் பார்க்கிங், furniture, AC, cot போன்றவை உடன் தரப்பட்டால் அவையும் பட்டியலிடப்பட வேண்டும். பின்னர் இது எந்த property என்று குழப்பம் வரக்கூடாது.',
        },
        {
          heading: '3. மாத வாடகை, அட்வான்ஸ் மற்றும் கட்டும் தேதியை குறிப்பிடவும்',
          text: 'மாத வாடகை எவ்வளவு, advance எவ்வளவு, எந்த தேதிக்குள் கட்ட வேண்டும், cash/UPI/bank transfer என்ன mode, தாமதம் ஆனால் penalty இருக்கிறதா போன்ற விவரங்களை எழுதவும். Rent revision இருந்தால் எத்தனை மாதத்திற்கு ஒருமுறை உயர்த்தலாம் என்றும் குறிப்பிட வேண்டும். காலியாக இடம் விடாதீர்கள்.',
        },
        {
          heading: '4. ஒப்பந்த காலம் மற்றும் புதுப்பிப்பு விதிமுறையை எழுதவும்',
          text: 'ஒப்பந்தம் எந்த தேதி முதல் எந்த தேதி வரை செல்லுபடியாகும் என்று எழுத வேண்டும். 11 மாதமா, 1 ஆண்டா, அதன் பிறகு mutual consent மூலம் renew செய்வோமா என்பதை குறிப்பிடவும். Lock-in period இருந்தால் அதைத் தெளிவாக எழுத வேண்டும். இதை எழுதாமல் விட்டால் வெளியேறும்போது தகராறு அதிகமாக வரும்.',
        },
        {
          heading: '5. மின்சாரம், maintenance, notice period போன்றவற்றை சேர்க்கவும்',
          text: 'மின்சாரம், தண்ணீர், association charge, minor repairs யார் கட்ட வேண்டும் என்பதை எழுத வேண்டும். வீட்டை காலி செய்யும் முன் 30 நாள் notice வேண்டுமா, 60 நாள் notice வேண்டுமா என்பதையும் சேர்க்கவும். Subletting அனுமதி உள்ளதா, commercial use செய்யலாமா, pets அனுமதி உள்ளதா என்பதையும் குறிப்பிட்டால் நல்லது.',
        },
        {
          heading: '6. கையொப்பம், சாட்சிகள் மற்றும் copy பாதுகாப்பு',
          text: 'ஒவ்வொரு பக்கத்தையும் சரிபார்த்த பிறகு இரு தரப்பினரும் கையொப்பமிட வேண்டும். முடிந்தால் சாட்சிகளின் கையொப்பமும் பெறுங்கள். இருவருக்கும் தனித் copy இருக்க வேண்டும். நீண்டகால ஒப்பந்தம் என்றால் stamp paper, registration தேவையா என்பதை முன்பே பார்க்க வேண்டும்.',
        },
      ],
      documents: [
        'வீட்டுவாடகையாளர் மற்றும் வாடகையாளரின் ஆதார், PAN, வாக்காளர் அட்டை போன்ற ID proof',
        'இரு தரப்பினரின் address proof',
        'சொத்து உரிமையை நிரூபிக்கும் deed அல்லது tax receipt',
        'தேவைப்பட்டால் passport size photo',
        'சமீபத்திய EB bill அல்லது property tax receipt',
        'சாட்சி விவரங்கள் மற்றும் contact number',
      ],
      tips: [
        'பெயர் மற்றும் முகவரி spelling ஆதார ஆவணத்துடன் பொருந்த வேண்டும்.',
        'பணத் தொகைகளை எண்களிலும் எழுத்திலும் குறிப்பிடுங்கள்.',
        'Furniture, fan, cot, AC, fridge போன்ற inventory இருந்தால் பட்டியலிடுங்கள்.',
        'கையொப்பமிட்ட பக்கங்களில் வெற்று இடம் விடாதீர்கள்.',
        'நீண்டகால ஒப்பந்தம் என்றால் stamp duty மற்றும் registration பற்றி முன்பே அறியுங்கள்.',
        'WhatsApp-ல் வரும் random draft பயன்படுத்தாமல் சரியான legal format பயன்படுத்துங்கள்.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'இதன் பொருள் என்ன?',
        steps: 'படிப்படியாக செய்யும் முறை',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'செய்யும் முன் கவனிக்க வேண்டியவை',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'வாடகை ஒப்பந்தம் எழுதுவதற்கு முன் property address, survey number இருந்தால் அது, owner பெயர், tenant பெயர், advance தொகை போன்றவற்றை ஒருமுறை document-களுடன் ஒப்பிட்டு பார்க்க வேண்டும். சிறிய spelling mistake கூட பின்னர் bank account transfer, police verification அல்லது deposit refund நேரத்தில் சிக்கலாகலாம்.',
          'ஒரே file-ல் draft copy, signed copy, ID proof, EB bill, tax receipt, payment proof போன்றவற்றை வைத்திருப்பது நல்லது. பின்னர் notice அனுப்ப வேண்டிய நிலை வந்தாலும், deposit குறித்து வாதம் ஏற்பட்டாலும் இந்த records மிகவும் உதவும்.',
          'பலர் format இருக்கிறது என்பதால் அவசரமாக நிரப்பிவிடுகிறார்கள். ஆனால் ஒரு முறை அமைதியாக படித்து, பணம், notice, maintenance, damage, renewal போன்ற clauses சரியா என்பதை சரிபார்த்தால் பிறகு பெரிய பிரச்சினைகளை தவிர்க்க முடியும்.',
        ],
        points: [
          'அனைத்து பெயர்களும் ID proof-க்கு ஏற்ப உள்ளதா என்று சரிபார்க்கவும்.',
          'Advance மற்றும் rent தொகையில் பிழை இல்லையா என்பதை பார்க்கவும்.',
          'ஒப்பந்த காலம் தெளிவாக உள்ளதா என்று உறுதி செய்யவும்.',
          'வீடு காலி செய்யும் முன் notice period கட்டாயம் சேர்க்கவும்.',
          'கையொப்பத்திற்கு முன் ஒவ்வொரு பக்கத்தையும் வாசித்து பார்க்கவும்.',
          'Signed copy-யின் photo அல்லது scan சேமித்து வைத்துக்கொள்ளவும்.',
        ],
      },
      conclusion: [
        `வாடகை ஒப்பந்தப் படிவம் எப்படி நிரப்புவது என்று தேடும் பலருக்கும் முக்கியமான பதில் ஒன்று தான்: இது சாதாரண காகிதம் அல்ல, சட்டப் பதிவு மதிப்பு உள்ள ஆவணம். அதனால் பெயர், முகவரி, rent, advance, notice period, maintenance போன்றவற்றை தெளிவாக எழுத வேண்டும்.`,
        `கையொப்பத்திற்கு முன் இறுதி draft-ஐ மீண்டும் சரிபார்த்து வைத்துக்கொள்ளுங்கள். தயாரான document வேண்டும் என்றால் ${docLink('lease-deed', '₹9 க்கு Lease Deed format பதிவிறக்கம் செய்ய')}லாம்.`,
      ],
    }),
  },
  {
    slug: 'cancel-settlement-deed-tamil',
    title: 'Settlement Deed ரத்து செய்வது எப்படி',
    description:
      'Settlement deed cancel செய்வது எப்போது சாத்தியம், unilateral cancellation சரியா, எந்த ஆவணங்கள் தேவை, எப்போது court செல்ல வேண்டும் என்பதற்கான தமிழில் வழிகாட்டி.',
    content: makePost({
      intro: [
        `குடும்ப சொத்து விஷயங்களில் அதிகமாக தேடப்படும் கேள்விகளில் ஒன்று settlement deed cancel செய்வது எப்படி என்பதாகும். தந்தை, தாய், மூத்தவர், உறவினர் யாராவது அன்புக்காக settlement deed செய்து வைத்திருக்கலாம். ஆனால் பின்னர் குடும்பத் தகராறு, ஏமாற்றம், பராமரிப்பு இல்லாமை, அல்லது தவறான புரிதல் காரணமாக அந்த deed-ஐ ரத்து செய்ய வேண்டும் என்று எண்ணப்படலாம்.`,
        `ஆனால் settlement deed ரத்து செய்வது வெறும் புதிய காகிதம் எழுதுவது போல எளிதல்ல. ஏற்கனவே settlement deed பதிவு செய்யப்பட்டு beneficiary ஏற்றுக்கொண்டிருந்தால், unilateral cancellation பல நேரங்களில் சட்ட ரீதியாக செல்லாது. Deed-ல் revocation clause உள்ளதா, possession கொடுக்கப்பட்டதா, condition இருந்ததா போன்றவை முக்கியம்.`,
        `இந்த நிலைகளில் reference ஆக ${docLink('revocation-settlement-deed', '₹9 க்கு Revocation of Settlement Deed format பதிவிறக்கம் செய்ய')} அல்லது ${docLink('cancellation-deed', '₹9 க்கு Cancellation Deed format பார்க்க')}லாம்.`,
      ],
      meaning: [
        `Settlement deed என்பது பொதுவாக குடும்ப உறுப்பினருக்கு சொத்தை அன்பு காரணமாக அல்லது குடும்ப ஒழுங்குக்காக மாற்றிக் கொடுக்கும் ஆவணம். இது பதிவு செய்யப்பட்டதும் beneficiary அதைப் பெற்றுக்கொண்டதும் அவருக்கு உரிமை உருவாகும்.`,
        `Settlement deed ரத்து செய்வது என்றால் அந்த உரிமை மாற்றத்தை சட்டப்படி திரும்ப மாற்றுவது. இது mutual cancellation ஆக இருக்கலாம், deed-ல் இருந்த valid revocation clause அடிப்படையாக இருக்கலாம், அல்லது fraud, coercion, misrepresentation, mental incapacity, condition breach போன்ற காரணங்களால் court-ல் challenge செய்யப்படலாம்.`,
      ],
      steps: [
        {
          heading: '1. முதலில் original settlement deed-ஐ முழுவதும் வாசிக்கவும்',
          text: 'அதில் revocation clause இருக்கிறதா, settlor-க்கு life interest வைத்திருக்கிறாரா, beneficiary ஏதாவது condition பின்பற்ற வேண்டும் என்று உள்ளதா என்பதைக் காண வேண்டும். Possession ஏற்கனவே கொடுக்கப்பட்டதா என்பதும் முக்கியம்.',
        },
        {
          heading: '2. ரத்து செய்யும் காரணத்தை தெளிவாக நிர்ணயிக்கவும்',
          text: 'குடும்ப சண்டை என்ற காரணம் மட்டும் போதாது. Fraud நடந்ததா, அழுத்தத்தில் கையெழுத்து போட்டாரா, condition மீறப்பட்டதா, mutual consent இருக்கிறதா, execution time-ல் mistake உண்டானதா என்பதைக் கண்டுபிடிக்க வேண்டும். இதில்தான் சட்ட வழி மாறும்.',
        },
        {
          heading: '3. அனைத்து ஆதார ஆவணங்களையும் சேகரிக்கவும்',
          text: 'Registered settlement deed copy, parent document, encumbrance certificate, patta, tax receipt, ID proof, fraud அல்லது coercion இருந்ததைக் காட்டும் messages, audio, witnesses போன்றவை இருப்பின் அனைத்தையும் சேமிக்க வேண்டும்.',
        },
        {
          heading: '4. Mutual revocation வேண்டுமா அல்லது court வழியா என்று தீர்மானிக்கவும்',
          text: 'இரு தரப்பும் சம்மதித்தால் cancellation அல்லது revocation deed பதிவு செய்வது சில சூழல்களில் சாத்தியமாகலாம். ஆனால் beneficiary சம்மதிக்கவில்லை என்றால் civil court வழியே declaration அல்லது injunction போன்ற relief தேவைப்படலாம். ஒருதலைப்பட்சமாக deed பதிவு செய்தாலே எல்லாம் முடிந்துவிடாது.',
        },
        {
          heading: '5. Draft சரியாக தயாரிக்கவும்',
          text: 'Original settlement deed number, date, property schedule, parties பெயர், cancellation/revocation காரணம் எல்லாம் தெளிவாக வர வேண்டும். Survey number அல்லது boundary தவறாக இருந்தால் பின்னர் இன்னொரு பிரச்சினை உருவாகும்.',
        },
        {
          heading: '6. பதிவு மற்றும் record update செய்யவும்',
          text: 'Valid revocation deed பதிவு செய்யப்பட்டால் EC மற்றும் revenue record update ஆனதா என்பதைக் கவனிக்க வேண்டும். Court case சென்றால் interim order எதுவும் கிடைத்ததா, அந்த இடையில் property வேறு யாருக்கும் transfer ஆகாதபடி பார்த்துக்கொள்ள வேண்டும்.',
        },
      ],
      documents: [
        'Original settlement deed certified copy',
        'Parent document மற்றும் link document',
        'Encumbrance certificate',
        'இரு தரப்பினரின் ID proof மற்றும் address proof',
        'Fraud அல்லது coercion இருந்தால் அதற்கான ஆதாரங்கள்',
        'Patta, tax receipt, possession record போன்ற supporting papers',
      ],
      tips: [
        'ஒவ்வொரு settlement deed-யும் unilateral-ஆக cancel செய்ய முடியாது என்பதை நினைவில் கொள்ளுங்கள்.',
        'Beneficiary deed-ஐ ஏற்றுக்கொண்டாரா, possession கிடைத்ததா என பார்க்கவும்.',
        'Document number, survey number, schedule எல்லாம் original deed போலவே எழுதவும்.',
        'Family settlement பேசப்பட்டால் அதை எழுதிப் பாதுகாக்கவும்.',
        'Property resale ஆகும் அபாயம் இருந்தால் உடனே நடவடிக்கை எடுக்கவும்.',
        'Draft செய்வதற்கு முன் legal format பார்த்து எழுதுவது பாதுகாப்பானது.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'Settlement deed ரத்து என்பதன் பொருள்',
        steps: 'ரத்து செய்யும் நடைமுறை',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'நடவடிக்கை எடுக்கும் முன் சரிபார்க்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'Settlement deed ரத்து செய்ய வேண்டும் என்று நினைத்த உடனே புதிய deed எழுதுவது சரியான வழி அல்ல. முதலில் original deed, registration details, beneficiary acceptance, possession நிலை, revocation clause போன்றவற்றை தெளிவாக பார்க்க வேண்டும்.',
          'பல குடும்பங்களில் வாய்மொழியாக பேசப்பட்ட விஷயங்கள் பின்னர் court-ல் உதவாது. அதனால் messages, witnesses, medical proof, complaint copy போன்ற supporting evidence இருந்தால் அவற்றை பாதுகாக்க வேண்டும்.',
          'சொத்து தொடர்பான பிரச்சினைகளில் தவறான ஒரு document step கூட நீண்டகால litigation-க்கு வழிவகுக்கும். எனவே draft செய்வதற்கு முன் grounds சரியா என்பதை உறுதிப்படுத்துவது மிகவும் அவசியம்.',
        ],
        points: [
          'Original deed மற்றும் EC copy கையில் இருக்க வேண்டும்.',
          'Property ஏற்கனவே transfer ஆனதா என்பதை சரிபார்க்கவும்.',
          'Beneficiary சம்மதமா இல்லையா என்பதை தெளிவுபடுத்தவும்.',
          'Fraud அல்லது coercion என்றால் ஆதாரங்களை சேகரிக்கவும்.',
          'தேவைப்பட்டால் injunction பற்றி உடனே ஆலோசிக்கவும்.',
          'Record update ஆகும் வரை follow-up செய்யவும்.',
        ],
      },
      conclusion: [
        `Settlement deed ரத்து செய்வது என்பது வெறும் மனம் மாறியதால் செய்யும் செயல் அல்ல; deed உருவான விதம், beneficiary நிலை, possession, fraud அல்லது condition breach போன்ற உண்மைகளின் அடிப்படையில் தான் சட்ட நடவடிக்கை எடுக்க முடியும்.`,
        `அடுத்த படி எடுக்கும் முன் original deed-ஐ கவனமாக ஆய்வு செய்து ஆதாரங்களை சேகரிக்கவும். தேவைப்பட்டால் ${docLink('revocation-settlement-deed', '₹9 க்கு Revocation of Settlement Deed format பார்க்க')}லாம்.`,
      ],
    }),
  },
  {
    slug: 'check-court-case-status',
    title: 'கோர்ட் கேஸ் ஸ்டேட்டஸ் எப்படி பார்க்கலாம்',
    description:
      'Court case status online-ல் எப்படி பார்க்கலாம், CNR number என்ன, party name மூலம் எப்படி search செய்வது, next hearing date மற்றும் order details எங்கு காணலாம் என்பதற்கான தமிழில் வழிகாட்டி.',
    content: makePost({
      intro: [
        `ஒரு வழக்கின் அடுத்த hearing எப்போது, order upload ஆனதா, case dispose ஆனதா, transfer ஆனதா என்று தெரிந்துகொள்ள இன்று பலரும் online-ல் court case status பார்க்க முயற்சிக்கிறார்கள். முன்பு advocate அல்லது court staff மூலம் மட்டுமே தகவல் கிடைத்தது. இப்போது official portal மூலம் பல அடிப்படை தகவல்களை நேரடியாக பார்க்க முடிகிறது.`,
        `District court, subordinate court வழக்குகளுக்கு eCourts portal மிகவும் பயனுள்ளதாக இருக்கும். High Court மற்றும் Supreme Court-க்கு தனித்த portal இருக்கலாம். முக்கியம் என்னவென்றால், உங்கள் கையில் உள்ள தகவலை சரியாக பயன்படுத்தி சரியான portal-ல் search செய்வது தான்.`,
        `Property அல்லது document dispute தொடர்பான வழக்கு என்றால் case papers-ஐ ஒழுங்காக வைத்திருக்கவும். அதற்காக ${docLink('general-power-of-attorney', '₹9 க்கு General Power of Attorney format பார்க்க')} அல்லது ${docLink('document-history', '₹9 க்கு Document History format பதிவிறக்கம் செய்ய')}லாம்.`,
      ],
      meaning: [
        `Court case status என்பது ஒரு வழக்கு தற்போது எந்த நிலையில் இருக்கிறது என்பதைக் காட்டும் தகவல். Filing முடிந்ததா, objections இருக்கிறதா, next hearing date என்ன, எந்த court hall, எந்த stage, order upload ஆனதா, dispose ஆனதா போன்ற தகவல்கள் இதில் இருக்கலாம்.`,
        `இந்தியாவில் eCourts portal-ல் CNR number மிகவும் முக்கியமான search key ஆகும். அது இல்லாவிட்டாலும் case number, party name, advocate name, filing number போன்றவற்றால் தேடலாம். ஆனால் எந்த தகவல் நம்பகமானது என்பதை புரிந்துகொள்வது அவசியம்.`,
      ],
      steps: [
        {
          heading: '1. வழக்கு எந்த court-ல் உள்ளது என்பதை முதலில் தெரிந்துகொள்ளவும்',
          text: 'Supreme Court-ஆ, High Court-ஆ, District Court-ஆ, Family Court-ஆ அல்லது tribunal-ஆ என்பதை முதலில் கண்டுபிடிக்க வேண்டும். தவறான portal-ல் search செய்தால் case இல்லை என்று நினைத்துவிடலாம்.',
        },
        {
          heading: '2. உங்களிடம் உள்ள சரியான விவரத்தை பயன்படுத்தி search செய்யவும்',
          text: 'CNR number இருந்தால் முதலில் அதைப் பயன்படுத்துங்கள். அது மிகச்சரியான method. இல்லையெனில் case type, case number, filing year, party name, advocate name மூலம் தேடலாம். பெயர் spelling மாறுபாடு இருந்தால் சில result-கள் வராமல் போகலாம்.',
        },
        {
          heading: '3. வந்துள்ள case details சரியாக உங்களுடையதா என்று பார்க்கவும்',
          text: 'Party names, advocate details, filing date, registration date, current stage, next hearing date, court hall, bench விவரங்களை சரிபார்க்க வேண்டும். ஒரே பெயரில் பல வழக்குகள் இருக்கலாம் என்பதால் தவறான record-ஐ பார்க்காமல் கவனமாக இருங்கள்.',
        },
        {
          heading: '4. Order history அல்லது daily order link இருந்தால் அதை திறந்து பார்க்கவும்',
          text: 'பல portal-களில் order copy, judgment, case history link இருக்கும். Latest order date, adjournment, stay, interim order, final disposal போன்றவை அங்கே தெளிவாக இருக்கும். Status line மட்டும் பார்த்தால் முழு தகவல் கிடைக்காமல் போகலாம்.',
        },
        {
          heading: '5. Hearing நடந்த பிறகு மீண்டும் status பார்க்கவும்',
          text: 'அதே நாளில் update வராத சூழலும் இருக்கும். Hearing முடிந்த உடனே portal refresh ஆகாமல் இருக்கலாம். அவசர case என்றால் advocate-யிடம் அல்லது court filing source-இடமும் உறுதி செய்யுங்கள்.',
        },
        {
          heading: '6. Screenshot அல்லது note எடுத்து வைத்துக்கொள்ளவும்',
          text: 'CNR number, case number, next date, order details போன்றவை note செய்து வைத்துக்கொண்டால் பிறகு ஒப்பிட எளிதாக இருக்கும். குடும்பம் அல்லது சொத்து தொடர்பான பல வழக்குகள் இருந்தால் இது மிக அவசியம்.',
        },
      ],
      documents: [
        'Case number அல்லது CNR number',
        'Court பெயர், மாவட்டம், மாநிலம்',
        'Filing year',
        'Party names அல்லது advocate பெயர்',
        'முன்னைய order copy அல்லது notice copy',
      ],
      tips: [
        'CNR number இருந்தால் அதையே முதலில் பயன்படுத்தவும்.',
        'Party name spelling சரியா உள்ளதா என்று மீண்டும் பார்க்கவும்.',
        'Status page மட்டும் அல்ல, latest order copy-யும் பார்க்கவும்.',
        'Urgent matter என்றால் advocate-யிடமும் உறுதி செய்யுங்கள்.',
        'முக்கிய status change வந்தால் screenshot சேமிக்கவும்.',
        'Case papers அனைத்தையும் ஒரே folder-ல் வைத்திருங்கள்.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'Court case status என்றால் என்ன?',
        steps: 'ஆன்லைனில் பார்க்கும் முறை',
        documents: 'தேவையான விவரங்கள்',
        tips: 'பயனுள்ள குறிப்புகள்',
        checklist: 'Status பார்ப்பதற்கு முன் கவனிக்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'Court case status பார்க்கும்போது first impression அடிப்படையில் முடிவு எடுக்கக்கூடாது. ஒரே பெயரில் பல வழக்குகள் இருக்கலாம். அதனால் case number, CNR number, filing year, court name ஆகியவற்றை ஒப்பிட்டு பார்த்த பிறகே அது உங்கள் வழக்கு என்பதை உறுதி செய்யவும்.',
          'Portal-ல் தெரியும் தகவல் மற்றும் actual order copy இடையே சிறிய வேறுபாடு இருக்கக்கூடும். Hearing நடந்த உடனே status update ஆகாமல் இருக்கலாம். எனவே முக்கியமான வழக்குகளில் order upload ஆனதா என்பதை தனியாகவும் பார்க்க வேண்டும்.',
          'வழக்கின் அடுத்த தேதி, stage, order reference ஆகியவற்றை note செய்து வைத்துக்கொண்டால் advocate-யுடன் பேசும்போதும், family members-க்கு update கொடுக்கும்போதும் குழப்பம் குறையும்.',
        ],
        points: [
          'சரியான court portal-ஐ பயன்படுத்தவும்.',
          'CNR number இருந்தால் முதலில் அதிலேயே search செய்யவும்.',
          'Order date மற்றும் next hearing date-ஐ பதிவு செய்யவும்.',
          'பல connected cases இருந்தால் தனித்த note வைத்துக்கொள்ளவும்.',
          'Status update தாமதமாக இருந்தால் மீண்டும் பார்க்கவும்.',
          'தேவைப்பட்டால் advocate confirmation பெறவும்.',
        ],
      },
      conclusion: [
        `Court case status online-ல் பார்ப்பது litigant-களுக்கு நேரத்தை மிச்சப்படுத்தும். சரியான portal-ல் CNR number அல்லது துல்லியமான case details வைத்து search செய்தால் hearing date, order status, case stage போன்ற முக்கிய தகவல்களை உடனே தெரிந்துகொள்ளலாம்.`,
        `இது legal advice-ஐ மாற்றாது. ஆனால் வழக்கின் முன்னேற்றத்தை தொடர்ந்து கண்காணிக்க இது மிகவும் உதவும். Case identifiers மற்றும் related papers-ஐ ஒழுங்காக வைத்திருந்தால் follow-up எளிதாக இருக்கும்.`,
      ],
    }),
  },
  {
    slug: 'download-slr-copy-online',
    title: 'How to Download SLR Copy Online',
    description:
      'Learn how to download SLR copy online, what an SLR extract usually contains, where it is used, and what details to verify before relying on it.',
    content: makePost({
      intro: [
        `Searches for how to download SLR copy online usually come from people dealing with land measurement, survey boundaries, or property verification. SLR is commonly understood in practice as a survey land record or related survey extract used to confirm land details, sub-division references, and map-linked entries depending on the state system.`,
        `Because land administration terminology differs across states, the exact portal name and format may vary. Even when the copy is available online, users should remember that revenue records, survey records, and title documents serve different legal purposes. An online record helps verification, but it may not by itself prove title.`,
        `When you are cross-checking survey entries against transactional paperwork, it helps to keep supporting templates ready. For example, ${docLink('sale-conveyance-deed', 'Download Sale/Conveyance Deed Format @ ₹9')} and ${docLink('rectification-deed', 'Download Rectification Deed Format @ ₹9')} are useful if the record later reveals a description mismatch.`,
      ],
      meaning: [
        `An SLR copy generally refers to a survey-related land record extract showing land particulars such as survey number, sub-division, extent, village details, or map references. In many property transactions, people use this record to compare the land described in sale deeds, pattas, and field-level measurements.`,
        `The online download process is not just about getting a PDF. You must verify whether the extracted record belongs to the correct district, taluk, village, survey number, and sub-division. A wrong digit in survey details can attach you to the wrong parcel of land and lead to serious confusion.`,
      ],
      steps: [
        {
          heading: '1. Visit the relevant official state land or survey portal',
          text: 'Use the official land records or survey department website for the relevant state. Avoid third-party websites that ask for payment or sensitive details unless they are officially authorized service centers. State-specific interfaces may differ, but most require district, taluk, village, and survey inputs.',
        },
        {
          heading: '2. Select the service for survey or land record extract',
          text: 'Look for options that mention survey extract, village map, land record copy, or SLR-related service. Read the service name carefully because nearby menu items may relate to EC, mutation, or tax records instead of survey extracts.',
        },
        {
          heading: '3. Enter property particulars exactly',
          text: 'Fill in district, taluk, village, survey number, sub-division number, patta number, or owner details depending on what the system asks. Use your existing document copy to avoid data entry mistakes. One wrong field can return either no result or someone else’s land details.',
        },
        {
          heading: '4. Verify the record preview before downloading',
          text: 'If the portal shows a preview, compare the village name, survey number, extent, classification, and ownership reference with your existing document set. Do not rush to download the first matching screen. Survey records can look similar across adjacent parcels.',
        },
        {
          heading: '5. Complete OTP, fee, or captcha steps if required',
          text: 'Some portals allow free viewing while others require captcha validation, mobile OTP, or nominal online payment. Complete those formalities only on the official portal and save the receipt if a government fee is charged.',
        },
        {
          heading: '6. Download and preserve the file securely',
          text: 'Once the file is generated, save the PDF with a useful name such as district-village-survey-number-date. Keep both the download and a screenshot of the search page if the record is urgently needed for registration, litigation, or bank scrutiny.',
        },
      ],
      documents: [
        'Copy of sale deed, patta, or prior land record showing survey details',
        'District, taluk, village, survey number, and sub-division number',
        'Patta number or owner name if the portal supports those search fields',
        'Mobile number for OTP, if required by the portal',
        'Online payment method if the service has a fee',
      ],
      tips: [
        'Use official state portals only for downloading land or survey records.',
        'Compare the downloaded extract with the registered deed and patta before relying on it.',
        'Do not treat a survey extract alone as proof of title ownership.',
        'If the extent or boundary description differs, consider a corrective legal document or survey clarification.',
        'Save the file with clear naming and date for future verification.',
        'Check whether a newer mutation, subdivision, or resurvey may have changed the visible entries.',
      ],
      conclusion: [
        `If you need to know how to download SLR copy online, focus on three things: use the official portal, enter survey details accurately, and verify the downloaded extract against your deed and revenue records. That combination gives the online copy real practical value.`,
        `When survey details do not align with registered documents, move carefully and document the discrepancy. Templates like the ${docLink('rectification-deed', 'Rectification Deed format')} can be useful later if a correction becomes necessary.`,
      ],
    }),
  },
  {
    slug: 'file-vakalatnama-online',
    title: 'How to File Vakalatnama Online',
    description:
      'A simple guide on how to file vakalatnama online, including what a vakalatnama means, common portal steps, and the papers usually needed.',
    content: makePost({
      intro: [
        `Many litigants ask how to file vakalatnama online after moving to e-filing systems used by courts and tribunals. A vakalatnama is not just a formality. It is the document by which a party authorizes an advocate to appear, plead, act, and receive case-related notices on that party’s behalf.`,
        `As courts increasingly support digital filing, vakalatnama submission may happen through e-filing portals, scanned uploads, e-sign workflows, or hybrid filing processes. The exact steps vary between forums, but the legal purpose remains the same: recording advocate authorization in a clear and verifiable manner.`,
        `If you also need supporting legal paperwork in document-heavy disputes, templates like ${docLink('special-power-of-attorney', 'Download Special Power of Attorney Format @ ₹9')} and ${docLink('affidavit-loss-receipt', 'Download Affidavit Format @ ₹9')} can help organize related records.`,
      ],
      meaning: [
        `A vakalatnama is an authorization document executed by a litigant in favor of an advocate. It usually states that the advocate can file pleadings, appear before the court, engage other counsel where permitted, receive notices, and take procedural steps in the matter.`,
        `Filing it online means converting this authority document into a court-accepted digital filing. Depending on the platform, the signed vakalatnama may need to be scanned, digitally signed, verified by OTP, or uploaded with an e-filing bundle. Courts may also insist on advocate registration and party verification before acceptance.`,
      ],
      steps: [
        {
          heading: '1. Confirm the e-filing rules of the relevant court',
          text: 'Before preparing the upload, check whether the court accepts vakalatnama through its e-filing portal, whether physical submission is still needed later, and whether any format or size limits apply. Different courts have different technical requirements and naming conventions.',
        },
        {
          heading: '2. Prepare the signed vakalatnama',
          text: 'Fill in the case details, court name, party names, and advocate details correctly. Get the litigant’s signature where required and ensure advocate acceptance is included if the format requires it. If there are multiple petitioners or respondents represented jointly, confirm whether each signature is mandatory.',
        },
        {
          heading: '3. Scan the document clearly',
          text: 'Use a clean scan in PDF format with all signatures visible. Cropped pages, skewed scans, or unclear annexures often lead to objections. If the portal has a maximum file size, compress the PDF without making signatures unreadable.',
        },
        {
          heading: '4. Upload through the e-filing account',
          text: 'Log in with the advocate or authorized filing account, open the relevant case or new filing module, and upload the vakalatnama in the specified document category. Enter party and advocate details exactly as they appear in the case to avoid registry mismatch.',
        },
        {
          heading: '5. Complete digital verification steps',
          text: 'Some systems ask for OTP verification, DSC, or e-sign completion. Others generate a provisional filing number pending scrutiny. Complete every validation prompt and download the acknowledgment after submission.',
        },
        {
          heading: '6. Monitor scrutiny and defects',
          text: 'After filing, check whether the registry raised any defect such as missing signature, missing advocate enrollment details, unreadable scan, or mismatch in party name. Rectifying minor defects quickly prevents delay in listing or appearance.',
        },
      ],
      documents: [
        'Signed vakalatnama with correct case or party details',
        'Advocate enrollment information where required',
        'Case number, filing number, or party name details',
        'Identity or authorization documents if the court seeks verification',
        'Scanned annexures or affidavits filed along with the vakalatnama',
      ],
      tips: [
        'Use the latest court-approved vakalatnama format where available.',
        'Check file size, page order, and readability before upload.',
        'Match the spelling of party names with the case record exactly.',
        'Keep the acknowledgment receipt after e-filing.',
        'Respond to scrutiny defects quickly to avoid procedural delay.',
        'Where a power or special authorization is relevant, align it with the vakalatnama details.',
      ],
      conclusion: [
        `Knowing how to file vakalatnama online is mainly about combining the legal authorization requirement with the technical rules of the e-filing portal. Accurate party details, visible signatures, and proper upload classification make the process much smoother.`,
        `If you are dealing with connected property, family, or document disputes, keep your supporting records organized alongside the filing receipt so your court follow-up stays efficient and consistent.`,
      ],
    }),
  },
  {
    slug: 'easement-act-1882-in-tamil',
    title: 'Easement Act 1882 எளிய தமிழில் விளக்கம்',
    description:
      'Easement Act 1882 பற்றி எளிய தமிழில் விளக்கம். பாதை உரிமை, தண்ணீர் செல்லும் உரிமை, வெளிச்சம், காற்றோட்டம், அண்டை நிலத் தகராறு போன்ற விஷயங்களை புரிந்துகொள்ள உதவும் வழிகாட்டி.',
    content: makePost({
      intro: [
        `பாதை உரிமை, அண்டை நிலம் வழியாகச் செல்லும் பிரச்சினை, தண்ணீர் வெளியேறும் வழி, ஜன்னல் வெளிச்சம், காற்றோட்டம் போன்ற விவகாரங்களில் மக்கள் அடிக்கடி “Easement Act 1882” பற்றி தேடுகிறார்கள். குறிப்பாக கிராமப் பகுதிகள், பழைய layout-கள், family partition ஆன சொத்துகள், narrow access உள்ள வீடுகள் போன்ற இடங்களில் இந்த பிரச்சினைகள் அதிகமாக வரும்.`,
        `ஒரு நிலத்தைப் பயன்படுத்த மற்றொரு நிலத்தின் மீது ஒரு வரையறுக்கப்பட்ட உரிமை உருவாகலாம் என்பதையே இந்த சட்டம் விளக்குகிறது. எளிதாகச் சொன்னால், “இந்த பாதையை நான் தொடர்ந்து பயன்படுத்தலாமா?”, “இந்த நீர்வழியை யாராவது தடுக்கலாமா?”, “பல வருடங்களாக இருந்த அணுகலை திடீரென்று நிறுத்தலாமா?” என்ற கேள்விகளுக்கான சட்ட அடிப்படை இதுவாகும்.`,
        `Property division அல்லது family arrangement தொடர்பான document-களையும் இணைத்து பார்க்க வேண்டுமென்றால் ${docLink('partition-deed', '₹9 க்கு Partition Deed format பதிவிறக்கம் செய்ய')} மற்றும் ${docLink('release-deed', '₹9 க்கு Release Deed format பார்க்க')}லாம்.`,
      ],
      meaning: [
        `Easement என்றால், ஒரு நிலத்தின் உரிமையாளர் அல்லது பயனாளி, தன் நிலத்தை நன்றாக பயன்படுத்துவதற்காக மற்றொரு நிலத்தின் மீது கொண்டிருக்கும் வரையறுக்கப்பட்ட உரிமை. உதாரணமாக பாதை உரிமை, வெளிச்சம் மற்றும் காற்று பெறும் உரிமை, தண்ணீர் எடுக்கும் உரிமை, நீர் வெளியேறும் வழி போன்றவை.`,
        `இந்த உரிமை கிடைக்கும் நிலம் dominant heritage என்று கூறப்படுகிறது; அதன் சுமையை ஏற்க வேண்டிய நிலம் servient heritage என்று கூறப்படுகிறது. இந்த உரிமை express grant, necessity, long use, implication, custom போன்ற பல காரணங்களால் உருவாகலாம். Deed-இல் எழுதப்படவில்லை என்றாலும் பல வருட பயன்பாடு இருந்தால் அது முக்கிய ஆதாரமாக மாறும்.`,
      ],
      steps: [
        {
          heading: '1. எந்த easement right பற்றி பிரச்சினை உள்ளது என்பதை முதலில் கண்டுபிடிக்கவும்',
          text: 'இது பாதை பிரச்சினையா, drainage பிரச்சினையா, தண்ணீர் ஓடும் வழியா, light and air விஷயமா, அல்லது support related பிரச்சினையா என்பதைத் தெளிவுபடுத்த வேண்டும். “அண்டை வீட்டார் சிரமப்படுத்துகிறார்கள்” என்ற பொதுவான குற்றச்சாட்டு போதாது. எந்த உரிமை மறுக்கப்படுகிறது என்பதைத் துல்லியமாகச் சொல்வது முக்கியம்.',
        },
        {
          heading: '2. அந்த உரிமை எப்படி உருவானது என்பதை பார்க்கவும்',
          text: 'Deed-ல் நேரடியாகக் கொடுக்கப்பட்டதா, நிலம் landlocked ஆக இருப்பதால் necessity மூலம் உருவானதா, பல வருடங்களாக தொடர்ச்சியாகப் பயன்படுத்தியதாலா, அல்லது family arrangement/custom மூலமா என்பதை ஆராய வேண்டும். உரிமையின் மூல காரணம் தான் case-இன் வலிமையை நிர்ணயிக்கும்.',
        },
        {
          heading: '3. ஆவணங்களும் நிலத்தின் actual evidence-மும் சேகரிக்கவும்',
          text: 'Sale deed, partition deed, settlement papers, patta, field map, survey sketch, பழைய புகைப்படங்கள், அண்டைநில உரிமையாளர்களின் சாட்சி போன்றவை முக்கியம். பாதை வழக்கு என்றால் measurement மற்றும் site inspection மிகவும் உதவும். பல வருட பயன்பாடு இருந்தது என்று வாய்மொழியாகச் சொல்வது மட்டும் போதாது.',
        },
        {
          heading: '4. அந்த உரிமை இன்னும் தேவையா, சட்டபூர்வமா என்று சரிபார்க்கவும்',
          text: 'Easement of necessity இருந்தால், வேறு lawful access பிறகு கிடைத்துவிட்டால் அது தொடராமல் போகலாம். அதேபோல் பழைய pedestrian path-ஐ தானாகவே vehicle access route-ஆக மாற்ற முடியாது. முதலில் இருந்த பயன்பாடு என்ன, இப்போது கேட்கும் பயன்பாடு என்ன என்பதை ஒப்பிட்டு பார்க்க வேண்டும்.',
        },
        {
          heading: '5. Court செல்லும் முன் practical settlement முயற்சி செய்யவும்',
          text: 'பல easement பிரச்சினைகள் எழுதப்படாத புரிதல்களால் தான் பெரிதாகின்றன. பாதையின் அகலம், பயன்படுத்தும் நேரம், drainage line, maintenance responsibility போன்றவை mutually settle செய்து எழுதிவைத்தால் நீண்டகால litigation தவிர்க்கலாம். உறவினர்கள் மற்றும் அண்டைநில உரிமையாளர்கள் இடையே இது மிகவும் உதவும்.',
        },
        {
          heading: '6. தடை தொடர்ந்தால் சட்ட நடவடிக்கை எடுக்கவும்',
          text: 'உரிமை மறுக்கப்பட்டால் injunction, declaration, mandatory relief போன்ற legal remedies தேவைப்படலாம். கட்டுமானம் செய்து பாதையை அடைத்துவிட்டால் அல்லது drainage line மாற்றப்பட்டால் உடனடி நடவடிக்கை அவசியமாகலாம். தாமதித்தால் நிலைமை மேலும் சிக்கலாகும்.',
        },
      ],
      documents: [
        'Parent deed, sale deed அல்லது partition deed',
        'Survey map, field sketch, layout plan',
        'Patta, tax receipt, possession record',
        'பாதை, drain, access point பயன்பாட்டை காட்டும் புகைப்படங்கள்',
        'அண்டைவர்கள் அல்லது உறவினர்களின் witness details',
        'முன்னர் செய்யப்பட்ட written arrangement, notice, compromise memo',
      ],
      tips: [
        'சரியான route, width, usage pattern ஆகியவற்றை map செய்து வைத்துக்கொள்ளவும்.',
        'முன்னர் இருந்த உரிமையை விட அதிகமாக claim செய்யாதீர்கள்.',
        'Family property dispute என்றால் பழைய documents உடனே சேகரிக்கவும்.',
        'அண்டைவர்கள் இடையே வாழ வேண்டிய நிலை என்றால் compromise முயற்சி நல்லது.',
        'Partition பிறகு பிரச்சினை என்றால் partition schedule-ஐ கவனமாகப் படிக்கவும்.',
        'Property records தெளிவாக இருந்தால் future dispute குறையும்.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'Easement right என்றால் என்ன?',
        steps: 'பிரச்சினை வந்தால் என்ன செய்ய வேண்டும்',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'நடவடிக்கை எடுக்கும் முன் கவனிக்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'Easement dispute வந்தவுடன் பலர் உடனே “இந்த பாதை எங்கள் உரிமை” என்று சொல்வார்கள். ஆனால் சட்டரீதியாக அது எந்த அடிப்படையில் உரிமை என்பதை நிரூபிக்க வேண்டும். Usage history, necessity, document clause, custom போன்றவற்றில் எது உங்களுக்கு ஆதரவாக உள்ளது என்பதை முதலில் புரிந்துகொள்ளுங்கள்.',
          'Ground reality மற்றும் document position இரண்டும் சில நேரங்களில் வேறுபடலாம். பழைய வீதியோ, family pathway-யோ, drain line-யோ map-ல் இல்லாமல் பயன்படுத்தப்பட்டிருக்கலாம். அப்படிப்பட்ட சூழலில் photo, witness, old records, survey sketch ஆகியவை முக்கிய பங்கு வகிக்கின்றன.',
          'Court செல்லும் முன் நீங்கள் கேட்கும் உரிமை எவ்வளவு வரையறுக்கப்பட்டது, எவ்வளவு practical-ஆக அமல்படுத்தலாம் என்பதை யோசித்தால் unnecessary escalation குறையும்.',
        ],
        points: [
          'Claim செய்யும் right-ஐ தெளிவாக எழுதிக்கொள்ளவும்.',
          'Old deed மற்றும் current survey records இரண்டையும் ஒப்பிடவும்.',
          'Pathway width அல்லது drain line detail note எடுக்கவும்.',
          'பல வருட பயன்பாட்டை photo அல்லது witness மூலம் support செய்யவும்.',
          'Compromise சாத்தியமா என்று பார்க்கவும்.',
          'தேவைப்பட்டால் injunction delay செய்யாமல் அணுகவும்.',
        ],
      },
      conclusion: [
        `Easement Act 1882 பற்றி புரிந்துகொள்வது pathway, drainage, light, access போன்ற பிரச்சினைகளில் மிகவும் அவசியம். உண்மையான பயன்பாட்டு உரிமையை இந்த சட்டம் காப்பாற்றுகிறது; ஆனால் அந்த உரிமை எந்த அடிப்படையில் வந்தது, எவ்வளவு அளவுக்கு உள்ளது என்பதைக் facts மற்றும் documents மூலம் நிரூபிக்க வேண்டும்.`,
        `உங்கள் property papers தெளிவாக இல்லையெனில் dispute பெரிதாகும் முன் document side-ஐ சரிசெய்யுங்கள். தேவையானால் ${docLink('partition-deed', '₹9 க்கு Partition Deed format பார்க்க')}லாம்.`,
      ],
    }),
  },
  {
    slug: 'udr-patta-rules-in-tamil-nadu',
    title: 'தமிழ்நாட்டில் UDR பட்டா விதிகள்',
    description:
      'UDR patta rules in Tamil Nadu பற்றி எளிய தமிழில் விளக்கம். UDR பட்டா என்றால் என்ன, பெயர் அல்லது survey mismatch வந்தால் என்ன செய்ய வேண்டும், எந்த ஆவணங்கள் தேவை என்பதற்கான வழிகாட்டி.',
    content: makePost({
      intro: [
        `தமிழ்நாட்டில் நிலம் வாங்கும் போது, partition செய்யும் போது, bank loan எடுக்கும்போது, அல்லது patta transfer செய்யும் போது UDR patta பற்றி பலர் கேட்கிறார்கள். பழைய document-களில் உள்ள survey number, extent, owner name போன்றவை பின்னர் கிடைக்கும் UDR patta-வில் மாறுபடுவது சாதாரணமாக காணப்படுகிறது.`,
        `பலர் patta இருக்கிறது என்றால் title பிரச்சினை இல்லை என்று நினைக்கிறார்கள். ஆனால் patta என்பது revenue record. அது முக்கியமானது தான்; இருந்தாலும் registered sale deed, parent document, EC, field map ஆகியவற்றோடு சேர்த்து தான் பார்க்க வேண்டும். இதை புரிந்துகொள்ளாமல் செயல்பட்டால் sale நேரத்தில், bank scrutiny-யில், family dispute-ல் பெரிய சிக்கல் வரும்.`,
        `UDR patta mismatch அல்லது correction தொடர்பாக document தயாரிக்க வேண்டுமென்றால் ${docLink('sale-conveyance-deed', '₹9 க்கு Sale/Conveyance Deed format பார்க்க')} மற்றும் ${docLink('partition-deed', '₹9 க்கு Partition Deed format பதிவிறக்கம் செய்ய')}லாம்.`,
      ],
      meaning: [
        `UDR என்பது பொதுவாக revenue records update செய்யப்பட்ட ஒரு நடைமுறையை குறிக்கப் பயன்படுத்தப்படும் சொல். மக்கள் நடைமுறையில் “UDR patta” என்று சொல்வது, பழைய title documents-க்கு பிறகு revenue records modernize செய்யப்பட்ட நிலையில் இருக்கும் patta entry-களை குறிக்கும்.`,
        `இதில் முக்கியமான விதி என்னவென்றால் patta என்பது title certificate அல்ல. அது revenue side recognition. பெயர் மாற்றம், inheritance, partition, correction போன்ற காரணங்களால் patta entry மாறலாம். ஆனால் title குறித்து பெரிய dispute இருந்தால் registered deed chain தான் முக்கியம்.`,
      ],
      steps: [
        {
          heading: '1. UDR patta copy-ஐ title document-களுடன் ஒப்பிடவும்',
          text: 'Owner name, survey number, subdivision, extent, village name, classification ஆகியவற்றை sale deed அல்லது family document-களுடன் ஒப்பிடுங்கள். Bank அல்லது buyer line by line பார்க்கும்போது தான் பல mismatch-கள் தெரிய வரும்.',
        },
        {
          heading: '2. இது clerical mistake ஆ அல்லது title issue ஆ என்று கண்டுபிடிக்கவும்',
          text: 'பெயர் spelling mistake, extent typing mistake, subdivision விடுபட்டது போன்றவை ஒரு வகை. வேறு ஒருவரின் பெயர் owner-ஆக இருப்பது வேறு வகை. முதல் நிலை correction மூலம் சரியாகலாம்; இரண்டாவது நிலை title dispute-ஆக மாறலாம்.',
        },
        {
          heading: '3. Revenue மற்றும் registration records அனைத்தையும் சேகரிக்கவும்',
          text: 'Patta, chitta, adangal, field map, parent document, latest sale deed, encumbrance certificate, tax receipt, legal heir papers போன்றவற்றை ஒன்றாக வைத்துக்கொள்ள வேண்டும். இதனால் உங்கள் claim தொடர்ச்சியாக இருப்பது தெரியும்.',
        },
        {
          heading: '4. சரியான அதிகாரியிடம் correction அல்லது mutation விண்ணப்பிக்கவும்',
          text: 'Taluk office அல்லது உரிய revenue authority-க்கு விண்ணப்பிக்கும் போது ownership proof, identity proof, survey details அனைத்தும் consistent-ஆக இருக்க வேண்டும். பழைய deed-இல் தவறு இருந்தால் patta correction மட்டும் போதாது; document correction-மும் தேவைப்படலாம்.',
        },
        {
          heading: '5. Inquiry அல்லது field verification வந்தால் கலந்து கொள்ளவும்',
          text: 'Revenue officers local inquiry நடத்தலாம், field verification செய்யலாம், interested parties-க்கு notice அனுப்பலாம். அப்போது title history-ஐ documents மூலம் தெளிவாக விளக்க வேண்டும். Boundary issue, inheritance claim, partition disagreement இங்கே வெளிப்படும்.',
        },
        {
          heading: '6. Final updated record கிடைத்த பிறகு மீண்டும் சரிபார்க்கவும்',
          text: 'Correction அல்லது mutation முடிந்ததும் updated patta copy எடுத்து மீண்டும் deed-உடன் ஒப்பிடுங்கள். Order எதிராக இருந்தால் appeal அல்லது review வாய்ப்பு என்ன என்பதை தெரிந்துகொள்ள வேண்டும்.',
        },
      ],
      documents: [
        'UDR patta copy',
        'Sale deed / settlement deed / partition deed',
        'Parent documents மற்றும் encumbrance certificate',
        'Tax receipt மற்றும் possession proof',
        'Field map, sketch, subdivision record',
        'Inheritance case என்றால் legal heir documents',
      ],
      tips: [
        'Patta மட்டும் பார்த்து ownership முடிவு செய்யாதீர்கள்.',
        'Survey number, subdivision references எல்லாம் ஒரே மாதிரி இருக்க வேண்டும்.',
        'Clerical error மற்றும் title dispute-ஐ தனித்தனியாக அணுகவும்.',
        'Underlying deed தவறு இருந்தால் அதையும் திருத்துங்கள்.',
        'Inquiry-க்கு originals மற்றும் photocopies ஒழுங்காக எடுத்துச் செல்லுங்கள்.',
        'Updated patta copy மற்றும் final order-ஐ பாதுகாப்பாக வைத்திருங்கள்.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'UDR பட்டா என்றால் என்ன?',
        steps: 'UDR பட்டா சிக்கல் வந்தால் என்ன செய்ய வேண்டும்',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'Correction செய்யும் முன் கவனிக்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'UDR patta issue வந்தால் பலர் உடனே “பட்டா தவறாக இருக்கிறது, title போய்விட்டது” என்று பயப்படுகிறார்கள். எல்லா mismatch-மும் title loss ஆகாது. சில நேரங்களில் அது data entry அல்லது revenue updation பிரச்சினை மட்டுமே இருக்கலாம்.',
          'ஆனால் அதை லேசாக எடுத்துக்கொள்ளவும் கூடாது. Buyer, bank, court, family members யாராக இருந்தாலும் அவர்கள் revenue record-ஐ பார்க்கும்போது கேள்வி எழுப்பலாம். அதனால் deed chain மற்றும் patta entry ஒன்றுக்கு ஒன்று பொருந்துகிறதா என்பதை ஆதாரங்களுடன் நிரூபிக்கத் தயாராக இருக்க வேண்டும்.',
          'சரியான ஆவணங்களுடன் correction request கொடுத்தால் பல சிக்கல்கள் ஆரம்ப கட்டத்திலேயே தீர்ந்து விடும். ஆதாரமில்லாமல் பலமுறை விண்ணப்பித்து நேரம் இழப்பதை தவிர்க்கலாம்.',
        ],
        points: [
          'Patta copy மற்றும் deed copy இரண்டும் கையில் இருக்க வேண்டும்.',
          'Survey number, subdivision, extent ஆகியவற்றை மூன்று முறை சரிபார்க்கவும்.',
          'EC-யில் வரும் entry-களையும் ஒப்பிடுங்கள்.',
          'Inheritance case என்றால் heir proof தயாராக வைத்திருங்கள்.',
          'Field verification வந்தால் நேரில் கலந்து கொள்ளுங்கள்.',
          'Correction order copy-ஐ download செய்து சேமிக்கவும்.',
        ],
      },
      conclusion: [
        `UDR patta rules in Tamil Nadu பற்றி புரிந்துகொள்ள வேண்டிய மிக முக்கியமான விஷயம்: patta முக்கியம் தான், ஆனால் அது registered title documents-ஓடு பொருந்தியிருக்க வேண்டும். இரண்டையும் சேர்த்து பார்க்காமல் முடிவு எடுத்தால் பின்னர் சிக்கல் வரும்.`,
        `Sale, partition, rectification அல்லது patta correction எதற்காக இருந்தாலும் revenue side மற்றும் registration side இரண்டையும் இணைத்து அணுகுங்கள். அதுவே future objection-களை குறைக்கும்.`,
      ],
    }),
  },
  {
    slug: 'patta-process-tamil-nadu',
    title: 'தமிழ்நாட்டில் பட்டா மாற்றம் செய்வது எப்படி',
    description:
      'Patta process Tamil Nadu பற்றி எளிய தமிழில். பெயர் மாற்றம், விண்ணப்ப முறை, தேவையான ஆவணங்கள், field verification, follow-up போன்ற அனைத்தையும் அறியுங்கள்.',
    content: makePost({
      intro: [
        `தமிழ்நாட்டில் நிலம் வாங்கிய பிறகு அல்லது குடும்பச் சொத்து பிரித்துக் கொண்ட பிறகு “பட்டா மாற்றம் எப்படி செய்வது?” என்ற கேள்வி அதிகமாக வருகிறது. Sale deed பதிவு செய்ததும் எல்லாம் முடிந்துவிட்டது என்று பலர் நினைக்கிறார்கள். ஆனால் revenue records-ல் பெயர் update ஆகாவிட்டால் bank loan, resale, family proof, local verification போன்ற விஷயங்களில் சிக்கல் ஏற்படலாம்.`,
        `Patta என்பது revenue record. இது property யார் பெயரில் revenue department-ல் காணப்படுகிறது என்பதை காட்டும் முக்கிய ஆவணம். அதனால் sale deed, settlement deed, partition deed, inheritance போன்ற மாற்றங்களுக்குப் பிறகு patta transfer அல்லது patta correction செய்வது வழக்கமாக அவசியமாகிறது.`,
        `Document side-ஐ சரியாக வைத்திருக்க ${docLink('sale-conveyance-deed', '₹9 க்கு Sale/Conveyance Deed format பதிவிறக்கம் செய்ய')} அல்லது ${docLink('partition-deed', '₹9 க்கு Partition Deed format பார்க்க')}லாம்.`,
      ],
      meaning: [
        `Patta process Tamil Nadu என்றால், ஒரு நிலம் அல்லது வீட்டு நிலம் தொடர்பான revenue record-ல் உரிமையாளர் பெயர் மற்றும் survey particulars update ஆகும் நடைமுறை என்று பொதுவாக பொருள். இது sale, settlement, inheritance, partition, release, court order போன்ற காரணங்களால் தேவையாகலாம்.`,
        `Patta பெயர் வந்துவிட்டது என்ற alone title முடிந்துவிட்டது என்பதல்ல. அதேபோல் patta transfer ஆகாததால் title இல்லை என்றும் சொல்ல முடியாது. ஆனால் நடைமுறையில் patta update செய்து வைத்திருப்பது மிகவும் உதவிகரமானது.`,
      ],
      steps: [
        {
          heading: '1. முதலில் supporting documents தயாராக வைத்துக்கொள்ளவும்',
          text: 'Registered sale deed, settlement deed, partition deed, release deed, legal heir certificate, death certificate, EC, tax receipt போன்ற தேவையான papers எது applicable ஆகிறதோ அதைத் தயார் செய்ய வேண்டும். பெயர் மாற்றம் எந்த காரணத்தால் கேட்கிறீர்கள் என்பதை documents தெளிவாக காட்ட வேண்டும்.',
        },
        {
          heading: '2. Survey number மற்றும் extent-ஐ சரிபார்க்கவும்',
          text: 'பல விண்ணப்பங்கள் survey number அல்லது subdivision mistake காரணமாக தாமதமாகின்றன. Deed-இல் உள்ள extent, village name, taluk, district, patta number, old patta details ஆகியவை சரியா என்பதை முன்பே சரிபார்க்க வேண்டும்.',
        },
        {
          heading: '3. உரிய online portal அல்லது office மூலம் விண்ணப்பிக்கவும்',
          text: 'தமிழ்நாட்டில் பலர் e-service அல்லது taluk office வழியாக patta transfer விண்ணப்பிக்கிறார்கள். எந்த வழியாக செய்தாலும் application-ல் owner name, document number, registration year, survey details, address ஆகியவை சரியாக இருக்க வேண்டும்.',
        },
        {
          heading: '4. Supporting documents upload அல்லது attach செய்யவும்',
          text: 'Application number உருவான பிறகு தேவையான documents scan செய்து upload செய்ய வேண்டும் அல்லது office-ல் submit செய்ய வேண்டும். Readable copy கொடுப்பது முக்கியம். Half scan, blurred copy, incomplete pages இருந்தால் objection வர வாய்ப்பு அதிகம்.',
        },
        {
          heading: '5. Field verification அல்லது inquiry வந்தால் கலந்து கொள்ளவும்',
          text: 'சில patta transfer applications-க்கு VAO, surveyor அல்லது revenue official field verification நடத்தலாம். அப்போது neighboring owners, possession, boundary, usage போன்றவை பார்க்கப்படலாம். நீங்கள் அல்லது உங்களது representative கலந்து கொண்டால் விளக்கம் அளிக்க எளிதாக இருக்கும்.',
        },
        {
          heading: '6. Final status பார்த்து corrected patta copy சேமிக்கவும்',
          text: 'Patta change approve ஆன பிறகு updated patta copy எடுத்து, பெயர், survey number, extent, subdivision, address சரியா உள்ளதா பார்க்க வேண்டும். ஏதேனும் தவறு இருந்தால் உடனே follow-up செய்ய வேண்டும். Approved copy-ஐ future sale, loan, legal need க்கு பாதுகாப்பாக வைத்திருக்கவும்.',
        },
      ],
      documents: [
        'Registered sale deed / settlement deed / partition deed',
        'Encumbrance certificate',
        'Patta copy அல்லது old patta details',
        'Tax receipt',
        'Legal heir certificate, death certificate போன்ற succession papers',
        'Identity proof மற்றும் address proof',
      ],
      tips: [
        'Patta transfer செய்யும் முன் deed-இல் mistake இல்லையா என்று பார்க்கவும்.',
        'Survey number, extent, village details-ஐ consistent-ஆக வைத்திருக்கவும்.',
        'Upload செய்யும் scanned copies தெளிவாக இருக்க வேண்டும்.',
        'Application number note செய்து வைத்துக்கொள்ளவும்.',
        'Field verification-ஐ உதாசீனம் செய்யாதீர்கள்.',
        'Updated patta வந்ததும் உடனே சரிபார்க்கவும்.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'பட்டா மாற்றம் என்றால் என்ன?',
        steps: 'பட்டா process படிப்படியாக',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'விண்ணப்பிக்கும் முன் கவனிக்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'Patta process Tamil Nadu பற்றி தெரிந்துகொள்ளும் பலர் ஒரு பொதுவான தவறு செய்கிறார்கள்: sale deed பதிவு ஆனதும் patta தானாக மாறிவிடும் என்று நினைக்கிறார்கள். நடைமுறையில் பல இடங்களில் தனியாக follow-up தேவைப்படலாம்.',
          'Document-ல் இருக்கும் பெயர், revenue record-ல் இருக்கும் பெயர், tax receipt-ல் இருக்கும் பெயர் ஆகியவை முரண்படுமானால் application தாமதமாகலாம். எனவே விண்ணப்பிக்கும் முன் இந்த மூன்று நிலைகளையும் ஒப்பிட்டு பார்க்க வேண்டும்.',
          'Application submit செய்த பிறகும் status பார்க்க வேண்டும். Approved ஆனது, pending ஆனது, objection வந்தது என்பதைக் கவனிக்காமல் விடாதீர்கள்.',
        ],
        points: [
          'Document number சரியா உள்ளது என்பதை பார்க்கவும்.',
          'Survey details அனைத்தும் ஒரே மாதிரி இருக்க வேண்டும்.',
          'Tax dues ஏதேனும் உள்ளதா என்று சரிபார்க்கவும்.',
          'Heirship case என்றால் அனைத்து heirs விவரங்களையும் தயார் வைத்திருங்கள்.',
          'Application acknowledgement சேமிக்கவும்.',
          'Approved patta copy download செய்து backup எடுக்கவும்.',
        ],
      },
      conclusion: [
        `தமிழ்நாட்டில் பட்டா மாற்றம் செய்வது பெரிய சிக்கலான வேலை அல்ல. ஆனால் சரியான document, சரியான survey details, மற்றும் தொடர்ந்து follow-up இருந்தால் தான் அது எளிதாக முடியும்.`,
        `Sale deed பதிவு செய்ததோடு வேலையை நிறுத்தாமல் patta update ஆனதா என்பதையும் கவனியுங்கள். தேவையானால் ${docLink('sale-conveyance-deed', '₹9 க்கு Sale Deed format பார்க்க')} மற்றும் தொடர்புடைய property document pages-ஐ பயன்படுத்தி உங்கள் file-ஐ complete ஆக்கலாம்.`,
      ],
    }),
  },
  {
    slug: 'land-registration-process-in-tamil',
    title: 'தமிழ்நாட்டில் நில பதிவு செய்வது எப்படி',
    description:
      'தமிழ்நாட்டில் land registration process பற்றி எளிய தமிழில். sale deed அல்லது settlement deed பதிவு செய்ய முன் என்ன பார்க்க வேண்டும், stamp duty, registration charges, document checking, post-registration follow-up ஆகிய அனைத்தையும் அறியுங்கள்.',
    content: makePost({
      intro: [
        `தமிழ்நாட்டில் நிலம் வாங்குவது அல்லது குடும்பத்துக்குள் சொத்தை மாற்றுவது போன்ற விஷயங்களில் மிக முக்கியமான படி registration ஆகும். பலர் deed-ல் கையெழுத்து போட்டால் வேலை முடிந்துவிட்டது என்று நினைக்கிறார்கள். ஆனால் உண்மையில் registration என்பது document draft, title verification, stamp duty calculation, party verification, execution, பதிவு, அதன் பிறகான follow-up ஆகிய பல படிகளைக் கொண்ட நடைமுறை.`,
        `Registration நேரத்தில் பெயர், survey number, extent, boundary, ID details, consideration amount போன்றவற்றில் தவறு இருந்தால் பின்னர் buyer, bank, patta transfer, family dispute போன்ற பல நிலைகளில் சிக்கல் உருவாகும். அதனால் registration office செல்லும் முன்பே முழு checklist வைத்து தயார் ஆகுவது நல்லது.`,
        `நல்ல draft-ஆக ஆரம்பிக்க ${docLink('sale-conveyance-deed', '₹9 க்கு Sale/Conveyance Deed format பதிவிறக்கம் செய்ய')}, ${docLink('settlement-deed', '₹9 க்கு Settlement Deed format பார்க்க')}, அல்லது ${docLink('gift-deed', '₹9 க்கு Gift Deed format பார்க்க')}லாம்.`,
      ],
      meaning: [
        `Land registration என்பது ஒரு நிலம் அல்லது immovable property தொடர்பான transaction-ஐ registration authority முன் முறையாகப் பதிவு செய்வது. இதனால் அந்த transaction public record-இல் சேர்கிறது. பின்னர் title verification, mutation, resale, bank loan, family proof போன்ற எல்லா நிலைகளிலும் இது முக்கிய ஆதாரமாக இருக்கும்.`,
        `Sale deed, settlement deed, release deed, gift deed, mortgage deed, power of attorney போன்றவற்றுக்கு நடைமுறை சிறிய வேறுபாடு இருந்தாலும் மையம் ஒன்றே: சரியான draft, சரியான document, சரியான duty payment, சரியான execution, அதன் பிறகு proper record keeping.`,
      ],
      steps: [
        {
          heading: '1. Title மற்றும் property details-ஐ முன்பே சரிபார்க்கவும்',
          text: 'Parent document, encumbrance certificate, patta, tax receipt, layout approval, physical possession போன்றவற்றை draft செய்வதற்கு முன் சரிபார்க்க வேண்டும். Missing link, wrong survey number, pending family claim போன்றவை இதே stage-இல் கண்டுபிடிக்கப்பட வேண்டும். Registration office-ல் தான் முதன்முறையாக document பார்க்கக் கூடாது.',
        },
        {
          heading: '2. சரியான registration document draft செய்யவும்',
          text: 'Sale deed-ஆ, settlement deed-ஆ, gift deed-ஆ, release deed-ஆ, rectification deed-ஆ என்பதை transaction nature-க்கு ஏற்ப தேர்வு செய்ய வேண்டும். Draft-இல் party names, consideration, schedule property, boundary, survey number, subdivision, transfer clauses அனைத்தும் தெளிவாக இருக்க வேண்டும். தவறான draft பின்னர் title பிரச்சினைக்கு காரணமாகும்.',
        },
        {
          heading: '3. Stamp duty மற்றும் registration charges கணக்கிடவும்',
          text: 'State rules, guideline value, document type, parties relationship போன்றவற்றின் அடிப்படையில் stamp duty மற்றும் registration fees மாறும். குறைவாக கட்டினால் objection அல்லது deficit duty issue வரும். எனவே payment calculation தெளிவாக இருக்க வேண்டும்.',
        },
        {
          heading: '4. Registration நாளுக்கான documents தயாராக வைத்திருக்கவும்',
          text: 'ID proof, PAN, photo, witness details, payment proof, final draft copy ஆகியவை எல்லாம் தயாராக இருக்க வேண்டும். Parties அனைவரும் வர முடியுமா, பெயர் ஆதார ஆவணங்களுடன் பொருந்துகிறதா என சரிபார்க்கவும். Power of attorney மூலம் ஒருவர் வருவாரானால் அந்த authorization document சரியாக இருக்க வேண்டும்.',
        },
        {
          heading: '5. Sub-Registrar office-ல் registration நிறைவு செய்யவும்',
          text: 'Parties கையெழுத்திட்டு execution admit செய்வார்கள். Photo, biometric போன்ற formalities முடியும். Witness-கள் தேவையானால் அவர்களும் தயாராக இருக்க வேண்டும். ஒவ்வொரு பக்கத்தையும் execution-க்கு முன் மற்றும் பின் சரிபார்ப்பது முக்கியம்.',
        },
        {
          heading: '6. Registration முடிந்த பிறகு follow-up செய்யவும்',
          text: 'Registered copy கிடைத்ததும் document number, schedule, boundary, survey details எல்லாம் சரியா என்று பார்க்க வேண்டும். அதன் பிறகு patta transfer, mutation, EC update போன்ற follow-up இருந்தால் அது செய்ய வேண்டும். Registration மட்டும் செய்து நிறுத்திவிட்டால் record side incomplete ஆகலாம்.',
        },
      ],
      documents: [
        'Parent documents மற்றும் latest title deed',
        'Encumbrance certificate',
        'Patta, tax receipt, survey details',
        'ID proof மற்றும் PAN',
        'Witness identity details',
        'தேவைப்பட்டால் power of attorney document',
      ],
      tips: [
        'Draft schedule-ஐ previous deed-உடன் line by line compare செய்யவும்.',
        'உறவினர்கள் இடையேயான transaction என்றாலும் EC, patta, tax verification தவறவிடாதீர்கள்.',
        'சரியான deed category-ஐ பயன்படுத்துங்கள்.',
        'Originals மற்றும் photocopies ஒழுங்காக file செய்து கொண்டு செல்லுங்கள்.',
        'Registration பிறகு uploaded record மற்றும் mutation status பார்க்கவும்.',
        'Draft செய்வதற்கு முன் clean format வைத்திருப்பது நல்லது.',
      ],
      labels: {
        intro: 'அறிமுகம்',
        meaning: 'Land registration என்றால் என்ன?',
        steps: 'படிப்படியாக registration process',
        documents: 'தேவையான ஆவணங்கள்',
        tips: 'முக்கிய குறிப்புகள்',
        checklist: 'Registrationக்கு முன் கவனிக்கவும்',
        conclusion: 'முடிவு',
      },
      checklist: {
        paragraphs: [
          'Registration process-ல் பெரிய தவறு ஒன்று என்னவென்றால், deed draft தயார் ஆன பிறகுதான் details பார்க்கிறார்கள். உண்மையில் draft-க்கு முன்பே title, survey, extent, party identity ஆகியவற்றை சரிபார்த்தால் objections குறையும்.',
          'Document number, previous title link, consideration amount, boundary description போன்றவை buyer மற்றும் seller இருவரும் ஒன்றாக உறுதிப்படுத்திக் கொள்ள வேண்டும். அப்போது மட்டுமே later dispute வாய்ப்பு குறையும்.',
          'Registration முடிந்ததும் file-ஐ பாதுகாப்பாக வைத்திருப்பதும் equally important. Registered copy, receipt, EC update, patta follow-up ஆகியவை future use-க்கு அவசியம்.',
        ],
        points: [
          'Parent deed மற்றும் latest deed chain சரியா இருக்க வேண்டும்.',
          'Survey number, extent, boundary ஆகியவற்றை மீண்டும் சரிபார்க்கவும்.',
          'Stamp duty calculation-ஐ தெளிவாக வைத்திருக்கவும்.',
          'Party names ID proof-க்கு பொருந்த வேண்டும்.',
          'Witness details advance-ஆக தயார் வைத்திருக்கவும்.',
          'Registration பிறகு mutation/patta follow-up மறக்காதீர்கள்.',
        ],
      },
      conclusion: [
        `தமிழ்நாட்டில் land registration process-ஐ சரியாக அணுகினால் அது கடினமான வேலை அல்ல. சரியான title verification, நல்ல draft, சரியான fee payment, proper registration, அதன் பிறகான follow-up ஆகியவை சேர்ந்தால்தான் safe property record உருவாகும்.`,
        `நீங்கள் draft செய்யும் நிலையில் இருந்தால் சரியான format-இலிருந்து தொடங்குவது சிறந்தது. தேவையானால் ${docLink('sale-conveyance-deed', '₹9 க்கு Sale/Conveyance Deed format பார்க்க')}லாம்.`,
      ],
    }),
  },
  {
    slug: 'phodi-process-in-karnataka',
    title: 'Phodi Process in Karnataka',
    description:
      'Understand the phodi process in Karnataka, why phodi is needed, the common application steps, and the records to keep ready for survey subdivision work.',
    content: makePost({
      intro: [
        `The phodi process in Karnataka is a common concern for landowners dealing with subdivision, inheritance division, sale of part-extent land, or mismatch between old records and actual possession. In Karnataka property practice, phodi broadly refers to the sub-division of a survey number into separate identifiable extents, often following partition, sale, or family settlement.`,
        `Without phodi, buyers may face difficulty in getting clean revenue records for a separated share, and family members may continue arguing over boundaries even after executing documents. That is why registration and revenue subdivision must often move together rather than as isolated steps.`,
        `If your phodi issue arises after family division or a transfer, ${docLink('partition-deed', 'Download Partition Deed Format @ ₹9')} and ${docLink('sale-conveyance-deed', 'Download Sale/Conveyance Deed Format @ ₹9')} are useful related templates to review.`,
      ],
      meaning: [
        `Phodi is the process by which one survey number is measured and split into separate sub-numbers so that each share is independently identifiable in revenue records. It helps align documentary rights with ground-level land segregation.`,
        `In practical terms, phodi becomes necessary when land that was once held as one unit is later divided among co-owners, heirs, or purchasers. Even if a sale deed or partition deed exists, the absence of phodi can make later mutation, fencing, resale, or financing more difficult.`,
      ],
      steps: [
        {
          heading: '1. Confirm the need for subdivision',
          text: 'Review whether the land has already been separately identified in revenue records or whether a fresh phodi is required. A common scenario is sale of a part extent from a larger survey number or inheritance-based division where each heir now needs an identifiable share.',
        },
        {
          heading: '2. Gather the title and revenue chain',
          text: 'Collect the sale deed, partition deed, mutation records, RTC or other revenue extracts, survey sketches, and identity proofs. The subdivision request should match the share created under the underlying legal document. If the deed itself is ambiguous, phodi can become delayed or contested.',
        },
        {
          heading: '3. Apply before the competent revenue authority',
          text: 'Submit the application through the applicable Karnataka land records or revenue channel, providing survey number, village details, owner information, and the basis for subdivision. Follow the official process and keep acknowledgment details safely for tracking.',
        },
        {
          heading: '4. Attend survey and field measurement',
          text: 'Field officials may inspect the land, measure the extent, and compare possession with the supporting documents. Presence of neighboring landholders or co-sharers may matter in contentious cases. Clear cooperation during measurement reduces later objections.',
        },
        {
          heading: '5. Resolve objections or discrepancies',
          text: 'If there is overlap, boundary conflict, or mismatch between document extent and physical extent, authorities may seek clarification. This is often where old family disputes reappear. If required, a corrective deed or boundary settlement may be needed before subdivision is finalized.',
        },
        {
          heading: '6. Obtain updated subdivision records',
          text: 'After approval, collect the updated sketch, subdivision number details, and corresponding revenue record changes. Compare these records with the original deed so future sale, loan, or partition work reflects the newly recognized sub-division correctly.',
        },
      ],
      documents: [
        'Sale deed, partition deed, inheritance document, or settlement record',
        'Existing RTC or relevant revenue extract',
        'Survey sketch and village details',
        'Identity proof of the applicant',
        'Mutation order or earlier revenue proceedings if available',
        'Tax payment records and possession proof',
      ],
      tips: [
        'Ensure the share claimed for phodi matches the deed exactly.',
        'Attend field measurement personally or through an informed representative.',
        'Keep neighbors and co-sharers informed where joint boundary understanding is necessary.',
        'Do not postpone phodi after sale or partition if the land is meant to function independently.',
        'Preserve the updated sketch carefully for future registration and fencing work.',
        'If the underlying document has mistakes, correct that first instead of forcing the phodi application through.',
      ],
      conclusion: [
        `The phodi process in Karnataka is a vital bridge between documentary rights and practical land identification. When subdivision is done properly, future mutation, sale, and possession management become much smoother.`,
        `If the land is being divided based on a prior transaction, review the foundational deed first. A clean draft such as a ${docLink('partition-deed', 'Partition Deed format')} can make the later revenue process much more defensible.`,
      ],
    }),
  },
  {
    slug: 'types-of-land-registration-in-andhra-pradesh',
    title: 'Types of Land Registration in Andhra Pradesh',
    description:
      'Explore the main types of land registration in Andhra Pradesh, including sale, gift, settlement, release, mortgage, and rectification-related transactions.',
    content: makePost({
      intro: [
        `People often search for types of land registration in Andhra Pradesh when they are unsure what kind of deed fits their transaction. This confusion is common because many property dealings involve family members, inherited land, agricultural extents, or part-share arrangements where the legal form of transfer matters as much as the intention.`,
        `Choosing the wrong type of registration can create tax, stamp duty, title, and mutation complications later. A gift should not be drafted like a sale, and a correction deed should not be used to mask a fresh transfer. Understanding the common categories helps owners and purchasers avoid those mistakes.`,
        `If you want to compare formats, ServiceLocal provides templates such as ${docLink('sale-conveyance-deed', 'Sale/Conveyance Deed @ ₹9')}, ${docLink('gift-deed', 'Gift Deed @ ₹9')}, ${docLink('settlement-deed', 'Settlement Deed @ ₹9')}, and ${docLink('release-deed', 'Release Deed @ ₹9')}.`,
      ],
      meaning: [
        `Land registration refers to recording a legal instrument concerning immovable property before the competent registration authority. The “type” of registration depends on the nature of the legal act being recorded: sale, gift, settlement, partition, release, mortgage, power of attorney, cancellation, or rectification.`,
        `In Andhra Pradesh, as elsewhere, each category carries its own documentary logic, stamp implications, and post-registration consequences. The most important rule is to match the deed type with the actual legal transaction instead of selecting a convenient label merely to reduce paperwork or cost.`,
      ],
      steps: [
        {
          heading: '1. Identify whether ownership is being transferred for consideration',
          text: 'If land is being sold for money, the typical route is a sale deed or conveyance deed. This is the most common registration category and usually involves full title transfer in exchange for consideration. Sale transactions require especially careful title verification and schedule drafting.',
        },
        {
          heading: '2. Check whether the transfer is without consideration',
          text: 'When property is transferred out of love and affection, especially among family members, a gift deed or settlement deed may be appropriate depending on the relationship and intended legal effect. The exact choice should reflect the transaction substance, not only family custom.',
        },
        {
          heading: '3. Determine whether the issue is division or release of rights',
          text: 'A partition deed is generally used when co-owners divide property into separate shares. A release deed is often used when one co-owner relinquishes rights in favor of another. These are structurally different from sale or gift transactions and should be drafted with the correct background recital.',
        },
        {
          heading: '4. Consider security-based or authority-based documents',
          text: 'If the purpose is creating a charge over land rather than transferring ownership, a mortgage instrument may be relevant. If a person needs representation for registration or management, a power of attorney may be used, but it should clearly define the scope of authority.',
        },
        {
          heading: '5. Use rectification or cancellation only for genuine corrective needs',
          text: 'Rectification deeds are meant to correct mistakes in an earlier registered document, such as schedule or spelling errors. Cancellation-related deeds must be approached carefully because the legal validity depends on the nature of the original document and the parties involved.',
        },
        {
          heading: '6. Align the chosen deed with mutation and future use',
          text: 'Before finalizing the registration type, think ahead to revenue mutation, bank scrutiny, family acceptance, and resale. The correct form today reduces future objections and creates a cleaner documentary trail.',
        },
      ],
      documents: [
        'Parent title documents and encumbrance certificate',
        'Identity and address proof of all parties',
        'Patta or revenue records where relevant',
        'Supporting family documents for gift, settlement, or inheritance cases',
        'Existing registered deed if rectification or cancellation is involved',
        'Power of attorney papers if any party is represented',
      ],
      tips: [
        'Choose the deed category based on legal substance, not convenience.',
        'Check the stamp duty and registration consequences before drafting.',
        'Do not use rectification to disguise a fresh transfer of ownership.',
        'Family transactions should still have precise property schedules and party details.',
        'Plan for post-registration mutation early in the process.',
        'Compare formats from reliable templates instead of informal copied drafts.',
      ],
      conclusion: [
        `Understanding the types of land registration in Andhra Pradesh helps you choose a document that matches the real transaction and stands up better during mutation, resale, or legal scrutiny. The correct deed type is the foundation of clean property paperwork.`,
        `If you are still deciding between categories, compare the underlying purpose of the transfer first, then review a structured template such as the ${docLink('sale-conveyance-deed', 'Sale/Conveyance Deed')} or ${docLink('gift-deed', 'Gift Deed')} page on ServiceLocal.`,
      ],
    }),
  },
  {
    slug: 'download-udr-copy-online',
    title: 'How to Download UDR Copy Online',
    description:
      'Learn how to download UDR copy online, what details you need, how to verify the record, and why it should be compared with title documents before use.',
    content: makePost({
      intro: [
        `Searches for how to download UDR copy online usually arise when a buyer, owner, or family member wants to inspect updated revenue records before sale, loan application, patta correction, or court use. UDR-related entries are often checked when there is a doubt about owner name, extent, survey details, or comparison between older documents and updated records.`,
        `Downloading the copy is only one part of the work. The more important task is checking whether the online entry matches the deed chain and the actual land details. Many property disputes begin because someone relies on a downloaded record without reading the survey or ownership fields carefully.`,
        `When UDR discrepancies affect a transaction draft, ${docLink('rectification-deed', 'Download Rectification Deed Format @ ₹9')} and ${docLink('sale-conveyance-deed', 'Download Sale/Conveyance Deed Format @ ₹9')} are useful related document pages.`,
      ],
      meaning: [
        `A UDR copy generally refers to a revenue record copy reflecting land details as captured or updated under a UDR-related records framework. In practical usage, people download it to confirm owner name, survey number, extent, subdivision, or classification before proceeding with another legal step.`,
        `An online UDR copy can support due diligence, but it should not be treated as a standalone title certificate. Revenue records are important, yet the registered document chain and encumbrance position remain equally significant when evaluating ownership.`,
      ],
      steps: [
        {
          heading: '1. Use the official land records portal',
          text: 'Start with the authorized state land records website or approved service interface. Avoid unofficial portals that simply mirror public data without explaining whether the copy is current or legally usable. Official sources are always safer for property verification.',
        },
        {
          heading: '2. Select the correct UDR or patta-related service',
          text: 'Read the service labels carefully because nearby menu options may relate to EC, tax, village map, or field extract instead of UDR-linked records. Choose the service that corresponds to patta or updated revenue copy viewing and downloading.',
        },
        {
          heading: '3. Enter survey and location details accurately',
          text: 'Fill in district, taluk, village, survey number, subdivision number, patta number, or owner name depending on the portal fields. Use your sale deed or prior copy as a reference while typing. Accuracy at this stage determines whether the retrieved record is useful.',
        },
        {
          heading: '4. Verify the displayed owner and extent',
          text: 'Before downloading, compare the visible entry with the name, extent, and survey particulars from your deed or family document. If the owner name is old or the extent does not match, note that discrepancy instead of overlooking it.',
        },
        {
          heading: '5. Complete OTP, captcha, or payment steps',
          text: 'Some systems may require captcha, OTP, or a nominal fee before permitting PDF download. Complete those formalities only on the official portal and preserve the transaction acknowledgment if payment is made.',
        },
        {
          heading: '6. Save and cross-check the downloaded copy',
          text: 'After downloading, save the file with clear naming and compare it again with the registered deed, EC, and tax receipts. If there is a mismatch, plan the next corrective step instead of continuing the transaction blindly.',
        },
      ],
      documents: [
        'Sale deed, partition deed, or settlement deed showing survey details',
        'Patta number, survey number, and subdivision number',
        'District, taluk, and village information',
        'Owner name as shown in earlier records',
        'Mobile number or payment method if OTP or fee applies',
      ],
      tips: [
        'Always compare the UDR copy with the latest registered document and EC.',
        'Use the exact survey and subdivision details from existing records while searching.',
        'Save both the PDF and screenshot of the search result if the record is important.',
        'Treat ownership mismatch as a red flag that needs clarification.',
        'Do not rely on forwarded PDFs from brokers without checking the official portal yourself.',
        'If the issue stems from a document mistake, consider a rectification route before resale.',
      ],
      conclusion: [
        `Knowing how to download UDR copy online helps owners and buyers perform faster document checks, but the real value comes from careful comparison after download. Survey number, owner name, extent, and subdivision details should align with the core title papers.`,
        `If the downloaded entry reveals a discrepancy, pause the transaction and identify whether the problem lies in the revenue record, the registered deed, or both. That extra step can prevent expensive future disputes.`,
      ],
    }),
  },
  {
    slug: 'legal-heir-certificate-online-andhra-pradesh',
    title: 'How to Get Legal Heir Certificate Online in Andhra Pradesh',
    description:
      'A practical guide to getting a legal heir certificate online in Andhra Pradesh, including purpose, process, required papers, and common mistakes to avoid.',
    content: makePost({
      intro: [
        `Many families search for how to get legal heir certificate online in Andhra Pradesh soon after a death in the family, especially when bank accounts, pension benefits, utility transfers, or property-related follow-up must be handled. During this period, families are often under emotional stress, so a clear process guide can save time and confusion.`,
        `A legal heir certificate is commonly used to identify the surviving family members of a deceased person for limited administrative purposes. It does not automatically settle every title issue, but it is an important supporting record for many government and private follow-up tasks.`,
        `If the certificate later supports inheritance-based document drafting, related pages such as ${docLink('settlement-deed', 'Download Settlement Deed Format @ ₹9')} and ${docLink('release-deed', 'Download Release Deed Format @ ₹9')} may be useful references.`,
      ],
      meaning: [
        `A legal heir certificate is an official record identifying the recognized legal heirs of a deceased person based on the application and supporting materials submitted. Families often use it for pension claims, service benefits, transfer of utilities, bank procedures, insurance follow-up, and certain revenue-related applications.`,
        `It is important to distinguish this certificate from broader succession litigation or formal title adjudication. In straightforward cases, it is an administrative recognition tool. In disputed inheritance matters, further legal steps may still be necessary even after obtaining the certificate.`,
      ],
      steps: [
        {
          heading: '1. Collect the basic family and death records',
          text: 'Before applying online, gather the death certificate, identity proof of the deceased and surviving family members, address proof, and any family relationship proof available. The smoother the initial document set, the easier the online application becomes.',
        },
        {
          heading: '2. Access the authorized Andhra Pradesh service portal',
          text: 'Use the official state service delivery portal or approved citizen service channel for applying. Look for the service specifically named legal heir certificate or surviving member-related certificate as applicable under the portal structure.',
        },
        {
          heading: '3. Fill in applicant and deceased person details carefully',
          text: 'Enter the deceased person’s name, date of death, address, and relationship details correctly. Then list all the surviving heirs requested in the application. Spelling mistakes or omission of an heir can trigger delay or future objections.',
        },
        {
          heading: '4. Upload the required supporting documents',
          text: 'Attach the death certificate and other requested identity or family documents in the specified format. Make sure scans are legible and that names are consistent across records. If address or identity information differs across documents, be prepared to explain that inconsistency.',
        },
        {
          heading: '5. Complete payment and acknowledgment steps',
          text: 'If the portal requires a service fee, pay it through the official gateway and save the acknowledgment reference. Most online systems provide an application number that is essential for tracking progress later.',
        },
        {
          heading: '6. Track status and respond to verification',
          text: 'Authorities may verify the request through local revenue channels or seek clarification. Track the application using the reference number and respond quickly if additional documents are requested. Once issued, save both digital and printed copies for future use.',
        },
      ],
      documents: [
        'Death certificate of the deceased person',
        'Identity proof of the applicant and other legal heirs',
        'Address proof of the deceased or family residence',
        'Family relationship proof such as ration card or other supporting record',
        'Passport-size photographs if the portal or service center requests them',
        'Application reference and payment acknowledgment',
      ],
      tips: [
        'List all eligible heirs accurately to avoid later conflict.',
        'Keep spellings of names consistent with the death certificate and ID documents.',
        'Use clear scans with readable text and complete edges of the document.',
        'Save the application number immediately after submission.',
        'Understand that a legal heir certificate supports administration but may not by itself settle disputed title.',
        'Use additional family settlement or release documents if heirs later decide how property will be shared.',
      ],
      conclusion: [
        `If you need to know how to get legal heir certificate online in Andhra Pradesh, the process is usually manageable when approached methodically: collect the death and family records first, apply through the official portal, and track the application using the acknowledgment number.`,
        `Once issued, keep the certificate with the rest of the deceased person’s property and financial papers. It often becomes an important supporting document for later succession-related transactions and family settlements.`,
      ],
    }),
  },
  {
    slug: 'joint-declaration-in-lieu-of-marriage-certificate',
    title: 'Joint Declaration in Lieu of Marriage Certificate',
    description:
      'Understand when a joint declaration in lieu of marriage certificate is used, what it usually contains, and how to prepare it carefully for administrative or document purposes.',
    content: makePost({
      intro: [
        `People search for joint declaration in lieu of marriage certificate when a formal marriage certificate is not immediately available but some authority, institution, or document process asks the spouses to establish their marital relationship. This commonly arises in passport, visa, employment, insurance, pension, or property-related administrative settings.`,
        `A joint declaration is not a substitute for every legal purpose, and its acceptability depends on the department or institution asking for it. Still, in many practical situations it helps as a supporting declaration when combined with other records such as address proof, IDs, photographs, and affidavits.`,
        `If you are assembling supporting declarations, related formats such as ${docLink('indemnity-bond', 'Download Indemnity Bond Format @ ₹9')} or ${docLink('affidavit-loss-receipt', 'Download Affidavit Format @ ₹9')} may also be helpful.`,
      ],
      meaning: [
        `A joint declaration in lieu of marriage certificate is a signed statement by both spouses confirming that they are married and providing the basic details of the marriage, residence, and identity of the parties. It is often used when the official marriage certificate has not yet been obtained, has been misplaced, or is not readily available.`,
        `The declaration is generally evidentiary and supportive in nature. It may help satisfy preliminary administrative requirements, but whether it is sufficient depends on the receiving authority. For sensitive legal rights, a registered marriage certificate may still be preferred or required.`,
      ],
      steps: [
        {
          heading: '1. Check why the declaration is required',
          text: 'Before drafting anything, confirm the exact purpose: passport correction, spouse name addition, insurance claim, HR records, or another administrative need. The receiving authority may have a prescribed wording or may insist on notarization. Knowing the purpose prevents wasted effort.',
        },
        {
          heading: '2. Gather basic marriage and identity details',
          text: 'Collect full names of both spouses, date of birth, addresses, date and place of marriage, and supporting ID documents. If there are alternative spellings across records, decide which version should be used consistently and keep evidence ready.',
        },
        {
          heading: '3. Draft the declaration clearly',
          text: 'The declaration should state that both parties jointly confirm the marriage, mention when and where it took place, and explain that the marriage certificate is unavailable or not enclosed for the stated reason. Avoid unnecessary storytelling; clarity and accuracy matter most.',
        },
        {
          heading: '4. Add supporting annexures where useful',
          text: 'Many authorities are more comfortable accepting the declaration when it is accompanied by ID proofs, joint address proof, wedding photos, invitation card, children’s birth certificates, or other documents showing the marital relationship over time.',
        },
        {
          heading: '5. Sign before the required authority',
          text: 'Depending on the receiving institution, the declaration may need to be notarized, witnessed, or executed on stamp paper. Follow the exact format requested rather than guessing. If both spouses are not physically present, check whether separate declarations or attestation are needed.',
        },
        {
          heading: '6. Keep it as a supporting record, not the only proof',
          text: 'After submission, preserve the signed copy and acknowledgment. Where possible, continue the process of obtaining the official marriage certificate because some future departments may insist on it even if one authority accepted the declaration.',
        },
      ],
      documents: [
        'Identity proof of both spouses',
        'Address proof showing present or past shared residence',
        'Date and place details of the marriage ceremony',
        'Wedding invitation, photos, or other supporting relationship proof where available',
        'Any prescribed format or checklist from the authority requesting the declaration',
      ],
      tips: [
        'Check the exact wording or notarization requirement of the receiving authority.',
        'Keep names consistent with passport, Aadhaar, PAN, and other major IDs.',
        'Use a concise declaration focused on facts, not emotional narration.',
        'Attach supporting proof whenever possible to improve acceptance.',
        'Do not assume the declaration permanently replaces a marriage certificate.',
        'If a formal certificate can be obtained, pursue it in parallel for long-term convenience.',
      ],
      conclusion: [
        `A joint declaration in lieu of marriage certificate can be a useful practical document when an official marriage certificate is temporarily unavailable and an authority needs immediate confirmation of the marital relationship. Its strength comes from clear wording and strong supporting records.`,
        `Use it thoughtfully, follow the exact requirements of the receiving office, and treat it as supportive evidence rather than a universal substitute. If additional declarations are required, the ${docLink('indemnity-bond', 'Indemnity Bond format')} page may also help you prepare related paperwork.`,
      ],
    }),
  },
];

const tamilBlogSlugs = new Set([
  'how-to-fill-rental-agreement-form-tamil',
  'cancel-settlement-deed-tamil',
  'check-court-case-status',
  'easement-act-1882-in-tamil',
  'udr-patta-rules-in-tamil-nadu',
  'land-registration-process-in-tamil',
  'patta-process-tamil-nadu',
]);

const tamilSeoBooster = `
  <section>
    <h2>தமிழ்நாடு பயனர்களுக்கான கூடுதல் வழிகாட்டி</h2>
    <p>
      தமிழ்நாட்டில் legal document, patta, settlement, rental, court status போன்ற விஷயங்களில் மக்கள் அதிகமாக online-ல் தேடுவதற்கான முக்கிய காரணம், ஒவ்வொரு office-லும் நடைமுறை சிறிது மாறுபடக்கூடும் என்பதுதான். Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli போன்ற மாவட்டங்களில் process ஒரே மாதிரியாக தோன்றினாலும், supporting document கேட்கும் விதம், follow-up முறை, field verification நிலை, portal update வேகம் போன்றவை நடைமுறையில் மாறலாம். அதனால் எந்த online guide-ஐ பார்த்தாலும் அதை உங்கள் actual records-ஓடு ஒப்பிட்டு பயன்படுத்துவது நல்ல நடைமுறை.
    </p>
    <p>
      குறிப்பாக property மற்றும் family document தொடர்பான விஷயங்களில் பெயர் spelling, initials, survey number, subdivision, village name, registration year, document number போன்ற சிறிய விவரங்களே பெரிய முடிவுகளை பாதிக்கக்கூடும். ஒரு எழுத்து தவறு, ஒரு digit தவறு, அல்லது பழைய பெயர் தொடர்வது போன்ற காரணங்களால் patta transfer தாமதமாகலாம், buyer objection எழுப்பலாம், bank scrutiny நின்றுவிடலாம், அல்லது court filing-ல் clarification கேட்கப்படலாம். அதனால் final submission செய்யும் முன் line by line verification செய்வது மிகவும் அவசியம்.
    </p>
    <ul>
      <li>Online portal-ல் காணும் entry-ஐ deed copy, tax receipt, EC, patta copy போன்றவற்றோடு ஒப்பிட்டு பார்க்கவும்.</li>
      <li>Application number, acknowledgment, screenshot, payment receipt ஆகியவற்றை தனியாக சேமிக்கவும்.</li>
      <li>தேவைப்பட்டால் village administrative records, survey sketch, field map போன்றவற்றையும் compare செய்யவும்.</li>
      <li>Document drafting செய்யும் முன் சரியான format பயன்படுத்துவது பின்னர் correction தேவையை குறைக்கும்.</li>
      <li>Family property matter என்றால் அனைத்து உரிமை கோரும் நபர்களின் நிலையும் புரிந்துகொண்டு நடவடிக்கை எடுக்கவும்.</li>
      <li>சிக்கல் அதிகமானால் oral advice-ஐ மட்டும் நம்பாமல் record-based approach எடுத்துக்கொள்ளவும்.</li>
    </ul>
    <p>
      ServiceLocal போன்ற தளங்களில் document format-களை reference ஆகப் பயன்படுத்துவது ஒரு நல்ல தொடக்கம். ஆனால் format இருந்தாலே போதாது; அதில் உள்ள உள்ளடக்கம் உங்கள் நிலைமைக்கு பொருந்த வேண்டும். அதனால் இந்த blog-களை வாசிக்கும் போது, அடுத்த படியாக எந்த document page பார்க்க வேண்டும், எந்த records கையில் இருக்க வேண்டும், எந்த தகவலை முன்கூட்டியே சேகரிக்க வேண்டும் என்ற நோக்கத்துடன் செயல்பட்டால் conversions மட்டுமல்ல, உங்கள் actual legal work-மும் சீராக நடக்கும்.
    </p>
  </section>
`;

const localizedBlogs = blogs.map((blog) => ({
  ...blog,
  language: tamilBlogSlugs.has(blog.slug) ? 'ta' : 'en',
  content: tamilBlogSlugs.has(blog.slug) ? `${blog.content}${tamilSeoBooster}` : blog.content,
}));

export default localizedBlogs;
