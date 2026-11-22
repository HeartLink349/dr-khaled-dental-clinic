/* ==========================================================================
   Dr. Khaled Abo Grasha Dental Clinic — Interactive Application Logic
   Bilingual (AR/EN), Theme Persistence, Smart WhatsApp Booking & Swiper/AOS
   ========================================================================== */

(function () {
  "use strict";

  const CLINIC_WHATSAPP = "201129231198";
  const CLINIC_DISPLAY_PHONE = "01129231198";

  const I18N = {
    ar: {
      pageTitle: "عيادات د. خالد أبو جريشة | طب وجراحة وتجميل الأسنان — المعادي",
      ribbonText: "معاينة تجريبية رسمية مُعدّة خصيصاً لعيادات د. خالد أبو جريشة — للتفعيل والتخصيص الكامل",
      ribbonCta: "تواصل مع المطوّر",
      brandName: "عيادات د. خالد أبو جريشة",
      brandSub: "طب وجراحة وتجميل الأسنان",
      navHome: "الرئيسية",
      navServices: "الخدمات",
      navStandards: "معايير العيادة",
      navBooking: "حجز موعد",
      navBranches: "الفروع",
      navFaq: "الأسئلة الشائعة",
      bookNow: "احجز موعدك",
      langToggle: "EN",
      heroKicker: "فرعان في المعادي • حدائق المعادي وزهراء المعادي",
      heroTitlePrefix: "ابتسامة صحية واثقة برعاية طبية ",
      heroTitleAccent: "متكاملة ودقيقة",
      heroDesc:
        "في عيادات د. خالد أبو جريشة لطب وجراحة الفم والأسنان نجمع بين الخبرة الإكلينيكية، أحدث بروتوكولات التعقيم، وتجربة علاج مريحة في فرعينا بحدائق المعادي وزهراء المعادي.",
      heroPrimaryCta: "احجز استشارتك الآن",
      heroSecondaryCta: "اتصال مباشر",
      trust1Title: "فرعان بالمعادي",
      trust1Sub: "حدائق المعادي وزهراء المعادي",
      trust2Title: "بروتوكول تعقيم صارم",
      trust2Sub: "أدوات معقمة ومغلفة لكل مريض",
      trust3Title: "حجز واتساب فوري",
      trust3Sub: "تأكيد سريع لموعدك بدون انتظار",
      heroTopPill: "رعاية شاملة لجميع أفراد الأسرة",
      heroFloatTitle: "حجز مسبق منظم للفرعين",
      heroFloatSub: "الأحد – الخميس • تأكيد فوري عبر واتساب العيادة",
      servicesEyebrow: "التخصصات الطبية",
      servicesTitle: "خدمات طب وتجميل الأسنان المتكاملة",
      servicesSub:
        "خطط علاجية مخصصة لكل حالة باستخدام خامات عالمية معتمدة لضمان أعلى كفاءة وظيفية وجمالية.",
      bookServiceCta: "احجز هذه الخدمة",
      s1Title: "زراعة الأسنان",
      s1Desc: "تعويض الأسنان المفقودة بغرسات تيتانيوم معتمدة تمنحك ثباتاً وشكلاً طبيعياً يدوم لسنوات طويلة.",
      s1t1: "زراعة فورية",
      s1t2: "خامات معتمدة",
      s2Title: "تجميل الأسنان والفينير",
      s2Desc: "تصميم ابتسامة طبيعية متناسقة مع ملامح الوجه عبر عدسات الإيماكس والفينير والحشوات التجميلية.",
      s2t1: "ابتسامة هوليوود",
      s2t2: "عدسات E-max",
      s3Title: "تقويم الأسنان",
      s3Desc: "تصحيح إطباق وتناسق الأسنان للأطفال والبالغين بالتقويم المعدني والشفاف مع متابعة دورية دقيقة.",
      s3t1: "تقويم شفاف",
      s3t2: "تقويم معدني",
      s4Title: "علاج الجذور وحشو العصب",
      s4Desc: "علاج التهابات العصب وإنقاذ الأسنان الطبيعية بأجهزة دقيقة وبأقصى درجات الراحة وتقليل الألم.",
      s4t1: "جلسات مريحة",
      s4t2: "علاج دقيق",
      s5Title: "التركيبات الثابتة والمتحركة",
      s5Desc: "تيجان وجسور زيركون وإيماكس عالية المتانة والجمال لحماية الأسنان واستعادة كفاءة المضغ.",
      s5t1: "تركيبات زيركون",
      s5t2: "دقة عالية",
      s6Title: "تنظيف وتبييض وعناية الأطفال",
      s6Desc: "إزالة الجير وتلميع وتبييض آمن للأسنان مع عناية لطيفة ووقائية مخصصة لأسنان الأطفال.",
      s6t1: "تبييض آمن",
      s6t2: "أسنان الأطفال",
      standardsEyebrow: "معايير الجودة والأمان",
      standardsTitle: "لماذا يثق المرضى بعيادات د. خالد أبو جريشة؟",
      standardsSub:
        "نلتزم بأعلى المعايير الطبية في كل خطوة؛ من لحظة التشخيص الأولي وحتى المتابعة بعد انتهاء العلاج.",
      p1Title: "تعقيم بمواصفات قياسية",
      p1Desc: "تطبيق كامل لدورة التعقيم بالأوتوكلاف وتغليف كل أداة على حدة لضمان بيئة علاجية آمنة 100%.",
      p2Title: "تشخيص وخطة علاج واضحة",
      p2Desc: "شرح مفصّل لحالة الأسنان والبدائل المتاحة والمدة المتوقعة قبل البدء في أي إجراء علاجي.",
      p3Title: "راحة المريض وتقليل الألم",
      p3Desc: "استخدام تقنيات تخدير موضعي لطيفة وبيئة هادئة تراعي المرضى الذين يشعرون بقلق من زيارة طبيب الأسنان.",
      p4Title: "متابعة مستمرة وقرب الموقع",
      p4Desc: "تواجدنا في فرعين بالمعادي يسهّل الوصول والمتابعة الدورية مع تواصل مباشر عبر واتساب العيادة.",
      bookingEyebrow: "الحجز الإلكتروني السريع",
      bookingTitle: "احجز موعدك في أقل من دقيقة",
      bookingSub: "اختر الفرع والخدمة المطلوبة وسيتم تجهيز رسالة الحجز الرسمية مباشرة إلى واتساب العيادة.",
      asideTitle: "حجز منظم بدون مكالمات متكررة",
      asideDesc: "اختر تفاصيل زيارتك وسيقوم فريق الاستقبال بتأكيد أقرب موعد مناسب لك في الفرع المختار.",
      step1Title: "1. اختر الفرع والخدمة",
      step1Sub: "حدائق المعادي أو زهراء المعادي",
      step2Title: "2. أدخل بياناتك الأساسية",
      step2Sub: "الاسم ورقم الموبايل والفترة المفضلة",
      step3Title: "3. تأكيد فوري عبر واتساب",
      step3Sub: "تُفتح رسالة منسقة مباشرة على رقم العيادة",
      directCallLabel: "الخط المباشر والواتساب للفرعين",
      labelName: "الاسم الكامل *",
      phName: "اكتب اسمك الثلاثي أو الثنائي",
      labelPhone: "رقم الهاتف / واتساب *",
      phPhone: "01xxxxxxxxx",
      labelBranch: "اختر الفرع المفضل *",
      b1Short: "فرع حدائق المعادي",
      b1Mini: "12 برج النادي، أول شارع أحمد زكي",
      b2Short: "فرع زهراء المعادي",
      b2Mini: "برج الحجاز جاردنز، أول المعراج السفلي",
      labelService: "الخدمة المطلوبة *",
      optChoose: "— اختر الخدمة —",
      optConsult: "كشف واستشارة عامة",
      optImplant: "زراعة الأسنان",
      optCosmetic: "تجميل الأسنان / فينير / ابتسامة هوليوود",
      optOrtho: "تقويم الأسنان",
      optRoot: "علاج الجذور وحشو العصب",
      optCrown: "التركيبات الثابتة والمتحركة (زيركون / إيماكس)",
      optClean: "تنظيف الجير وتبييض الأسنان",
      optKids: "طب أسنان الأطفال",
      labelPeriod: "الفترة المفضلة للزيارة",
      periodEve: "الفترة المسائية (5 م – 11 م)",
      periodNoon: "فترة الظهيرة (12 ظ – 5 م)",
      periodAny: "أقرب موعد متاح",
      labelNotes: "ملاحظات إضافية (اختياري)",
      phNotes: "هل يوجد ألم حالي أو استفسار معين تود إضافته؟",
      submitBooking: "تأكيد الحجز عبر واتساب العيادة",
      branchesEyebrow: "مواقعنا في القاهرة",
      branchesTitle: "فرعان لخدمتكم في المعادي",
      branchesSub: "اختر الفرع الأقرب إليك وتواصل معنا لتأكيد موعد زيارتك بكل سهولة.",
      branch1Chip: "الفرع الأول",
      branch1Name: "فرع حدائق المعادي",
      branch1Addr: "12 برج النادي، أول شارع أحمد زكي (فوق أسماك شبارة وأمام نادي المعادي)، الدور الرابع.",
      branch2Chip: "الفرع الثاني",
      branch2Name: "فرع زهراء المعادي",
      branch2Addr: "برج الحجاز جاردنز (جراند بلازا)، أول المعراج السفلي، زهراء المعادي، الدور الثامن، شقة 808.",
      branchHours: "الأحد إلى الخميس (يُرجى تأكيد المواعيد الحالية عبر الاتصال أو واتساب قبل الحضور).",
      openMaps: "فتح على خرائط جوجل",
      bookBranch: "احجز في هذا الفرع",
      faqEyebrow: "إجابات سريعة",
      faqTitle: "الأسئلة الشائعة للمرضى",
      faqSub: "أهم المعلومات التي تحتاجها قبل زيارتك الأولى لعيادات د. خالد أبو جريشة.",
      q1: "كيف يمكنني حجز موعد في أحد فرعي العيادة؟",
      a1: "يمكنك الحجز مباشرة من نموذج الحجز الإلكتروني أعلى هذه الصفحة باختيار الفرع والخدمة، أو التواصل هاتفياً وعبر واتساب على الرقم 01129231198 لتأكيد أقرب موعد مناسب.",
      q2: "أين تقع فروع عيادات د. خالد أبو جريشة؟",
      a2: "نخدمكم من فرعين في المعادي: فرع حدائق المعادي (12 برج النادي، أول شارع أحمد زكي أمام نادي المعادي، الدور الرابع) وفرع زهراء المعادي (برج الحجاز جاردنز، أول المعراج السفلي، الدور الثامن، شقة 808).",
      q3: "هل يتطلب إجراء الزراعة أو التقويم كشفاً مبدئياً أولاً؟",
      a3: "نعم، يبدأ كل إجراء تجميلي أو علاجي متقدم بكشف دقيق وتقييم لحالة اللثة والعظام لوضع خطة علاج واضحة ومناسبة لحالتك قبل التنفيذ.",
      q4: "ما هي معايير التعقيم المتبعة داخل العيادة؟",
      a4: "نلتزم بتعقيم جميع الأدوات باستخدام أجهزة التعقيم المعتمدة وتغليفها بشكل منفصل لكل مريض، مع تطهير كامل للوحدة العلاجية بين كل زيارة وأخرى.",
      footerDesc:
        "رعاية متكاملة لطب وجراحة وتجميل الأسنان في فرعي حدائق المعادي وزهراء المعادي بأعلى معايير الدقة والتعقيم.",
      footerQuick: "روابط سريعة",
      footerContact: "التواصل المباشر",
      footerRights: "© 2026 عيادات د. خالد أبو جريشة لطب الأسنان — نموذج معاينة تفاعلي.",
      devCreditPrefix: "تصميم وتطوير المعاينة بواسطة",
      devName: "مصطفى عبد العاطي",
      floatingWa: "حجز واتساب",
      errRequired: "يرجى إدخال الاسم ورقم الهاتف واختيار الخدمة المطلوبة أولاً.",
      errPhone: "يرجى إدخال رقم هاتف مصري صحيح (مثال: 010xxxxxxxx).",
      okRedirect: "تم تجهيز رسالة الحجز — جاري فتح واتساب العيادة..."
    },
    en: {
      pageTitle: "Dr. Khaled Abo Grasha Dental Clinic | Maadi, Cairo",
      ribbonText: "Official interactive preview prepared exclusively for Dr. Khaled Abo Grasha Dental Clinic",
      ribbonCta: "Contact Developer",
      brandName: "Dr. Khaled Abo Grasha",
      brandSub: "Dental & Cosmetic Dentistry Clinics",
      navHome: "Home",
      navServices: "Services",
      navStandards: "Standards",
      navBooking: "Book Now",
      navBranches: "Branches",
      navFaq: "FAQ",
      bookNow: "Book Appointment",
      langToggle: "عربي",
      heroKicker: "2 Branches in Maadi • Hadayek El Maadi & Zahraa El Maadi",
      heroTitlePrefix: "Confident, Healthy Smiles Backed by ",
      heroTitleAccent: "Clinical Precision",
      heroDesc:
        "At Dr. Khaled Abo Grasha Dental Clinics, we combine clinical expertise, strict sterilization protocols, and gentle patient care across our two branches in Maadi, Cairo.",
      heroPrimaryCta: "Book Consultation",
      heroSecondaryCta: "Call Clinic",
      trust1Title: "2 Maadi Branches",
      trust1Sub: "Hadayek & Zahraa El Maadi",
      trust2Title: "Strict Sterilization",
      trust2Sub: "Sealed sterile kits per patient",
      trust3Title: "Instant WhatsApp",
      trust3Sub: "Fast booking confirmation",
      heroTopPill: "Comprehensive Family Dental Care",
      heroFloatTitle: "Organized Appointments Across Both Branches",
      heroFloatSub: "Sun – Thu • Direct confirmation via Clinic WhatsApp",
      servicesEyebrow: "Clinical Specialties",
      servicesTitle: "Comprehensive Dental & Cosmetic Care",
      servicesSub:
        "Tailored treatment plans using certified materials to deliver lasting dental health and natural aesthetics.",
      bookServiceCta: "Book This Service",
      s1Title: "Dental Implants",
      s1Desc: "Reliable replacement of missing teeth using certified titanium implants designed for natural look and function.",
      s1t1: "Immediate Implants",
      s1t2: "Certified Systems",
      s2Title: "Cosmetic Dentistry & Veneers",
      s2Desc: "Natural smile makeovers tailored to facial harmony with E-max veneers and aesthetic composite artistry.",
      s2t1: "Smile Design",
      s2t2: "E-max Veneers",
      s3Title: "Orthodontics & Aligners",
      s3Desc: "Modern alignment solutions for teens and adults including clear aligners and precision metal braces.",
      s3t1: "Clear Aligners",
      s3t2: "Braces",
      s4Title: "Root Canal Therapy",
      s4Desc: "Precision endodontic treatment focused on saving natural teeth with maximum comfort and minimal pain.",
      s4t1: "Comfort-First",
      s4t2: "High Precision",
      s5Title: "Crowns & Prosthodontics",
      s5Desc: "Durable, natural-looking Zirconia and E-max crowns and bridges to restore strength and aesthetics.",
      s5t1: "Zirconia Crowns",
      s5t2: "Exact Fit",
      s6Title: "Whitening, Scaling & Kids Care",
      s6Desc: "Gentle tartar removal, safe teeth whitening, and preventive pediatric dentistry for healthy young smiles.",
      s6t1: "Safe Whitening",
      s6t2: "Pediatric Care",
      standardsEyebrow: "Quality & Patient Safety",
      standardsTitle: "Why Patients Choose Dr. Khaled Abo Grasha Clinics",
      standardsSub:
        "Every step of your visit is guided by strict medical standards, transparent diagnostics, and genuine comfort.",
      p1Title: "Hospital-Grade Sterilization",
      p1Desc: "Full autoclave sterilization cycles with individually sealed instrument pouches for every patient.",
      p2Title: "Clear Diagnosis & Treatment Plan",
      p2Desc: "Transparent explanation of your condition, available options, and timeline before any procedure starts.",
      p3Title: "Gentle, Pain-Minimized Care",
      p3Desc: "Calm clinical environment and gentle local anesthesia tailored for patients with dental anxiety.",
      p4Title: "Accessible Maadi Locations",
      p4Desc: "Two convenient branches in Maadi with direct reception coordination on WhatsApp.",
      bookingEyebrow: "Online Appointment Request",
      bookingTitle: "Book Your Visit in Under a Minute",
      bookingSub: "Select your preferred branch and service to send a structured booking request directly to clinic WhatsApp.",
      asideTitle: "Fast, Organized Scheduling",
      asideDesc: "Choose your visit details and our reception desk will confirm the earliest available slot at your chosen branch.",
      step1Title: "1. Choose Branch & Service",
      step1Sub: "Hadayek El Maadi or Zahraa El Maadi",
      step2Title: "2. Enter Your Details",
      step2Sub: "Full name, phone number & preferred slot",
      step3Title: "3. Instant WhatsApp Confirmation",
      step3Sub: "Opens a ready-to-send booking card to clinic WhatsApp",
      directCallLabel: "Direct Phone & WhatsApp (Both Branches)",
      labelName: "Full Name *",
      phName: "Enter your full name",
      labelPhone: "Phone / WhatsApp Number *",
      phPhone: "01xxxxxxxxx",
      labelBranch: "Select Preferred Branch *",
      b1Short: "Hadayek El Maadi Branch",
      b1Mini: "12 El-Nady Tower, Ahmed Zaky St.",
      b2Short: "Zahraa El Maadi Branch",
      b2Mini: "Hegaz Gardens Tower, Lower El-Merag",
      labelService: "Required Service *",
      optChoose: "— Select a service —",
      optConsult: "General Consultation & Checkup",
      optImplant: "Dental Implants",
      optCosmetic: "Cosmetic Dentistry / Veneers / Hollywood Smile",
      optOrtho: "Orthodontics & Aligners",
      optRoot: "Root Canal Treatment",
      optCrown: "Fixed & Removable Prosthodontics (Zirconia / E-max)",
      optClean: "Scaling, Polishing & Teeth Whitening",
      optKids: "Pediatric Dentistry",
      labelPeriod: "Preferred Time Slot",
      periodEve: "Evening Shift (5:00 PM – 11:00 PM)",
      periodNoon: "Afternoon Shift (12:00 PM – 5:00 PM)",
      periodAny: "Earliest Available Slot",
      labelNotes: "Additional Notes (Optional)",
      phNotes: "Any current pain, question, or preference you'd like to share?",
      submitBooking: "Confirm Booking via Clinic WhatsApp",
      branchesEyebrow: "Cairo Locations",
      branchesTitle: "Two Branches Serving Maadi",
      branchesSub: "Visit the branch closest to you or reach out directly to confirm your appointment.",
      branch1Chip: "Branch 01",
      branch1Name: "Hadayek El Maadi Branch",
      branch1Addr: "12 El-Nady Tower, Beginning of Ahmed Zaky St. (above Shabara Fish, opposite Maadi Club), 4th Floor.",
      branch2Chip: "Branch 02",
      branch2Name: "Zahraa El Maadi Branch",
      branch2Addr: "Hegaz Gardens Tower (Grand Plaza), First Lower El-Merag, Zahraa El Maadi, 8th Floor, Apt 808.",
      branchHours: "Sunday – Thursday (Please confirm exact daily shift hours via call or WhatsApp prior to visiting).",
      openMaps: "Open in Google Maps",
      bookBranch: "Book This Branch",
      faqEyebrow: "Quick Answers",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Helpful details to prepare for your visit at Dr. Khaled Abo Grasha Dental Clinics.",
      q1: "How can I book an appointment at either branch?",
      a1: "Use the quick booking form above to select your preferred branch and service, or call / WhatsApp 01129231198 directly to confirm the earliest slot.",
      q2: "Where are the clinic branches located?",
      a2: "We serve patients across two Maadi locations: Hadayek El Maadi (12 El-Nady Tower, Ahmed Zaky St., 4th Floor) and Zahraa El Maadi (Hegaz Gardens Tower, First Lower El-Merag, 8th Floor, Apt 808).",
      q3: "Do implants or orthodontics require an initial consultation?",
      a3: "Yes. Every advanced cosmetic or restorative procedure starts with a thorough assessment to provide a clear, personalized treatment plan.",
      q4: "What sterilization standards are followed at the clinic?",
      a4: "All dental instruments undergo strict autoclave sterilization and individual sealed packaging for each patient, with thorough chair disinfection between visits.",
      footerDesc:
        "Comprehensive dental, restorative, and cosmetic care across Hadayek El Maadi and Zahraa El Maadi with clinical precision.",
      footerQuick: "Quick Links",
      footerContact: "Direct Contact",
      footerRights: "© 2026 Dr. Khaled Abo Grasha Dental Clinics — Interactive Concept Preview.",
      devCreditPrefix: "Preview designed & built by",
      devName: "Mostafa Abd El Atty",
      floatingWa: "WhatsApp",
      errRequired: "Please enter your name, phone number, and select a service first.",
      errPhone: "Please enter a valid Egyptian phone number (e.g. 010xxxxxxxx).",
      okRedirect: "Booking details ready — opening Clinic WhatsApp..."
    }
  };

  let currentLang = localStorage.getItem("dk_clinic_lang") === "en" ? "en" : "ar";
  let currentTheme = localStorage.getItem("dk_clinic_theme") === "dark" ? "dark" : "light";
  let selectedBranch = "حدائق المعادي";
  let standardsSwiper = null;

  function initSwiper() {
    if (typeof window.Swiper !== "function") return;
    if (standardsSwiper) {
      standardsSwiper.destroy(true, true);
      standardsSwiper = null;
    }
    standardsSwiper = new window.Swiper(".standards-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 18 }
      }
    });
  }

  function applyTheme(theme) {
    currentTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("dk_clinic_theme", currentTheme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.innerHTML =
        currentTheme === "dark"
          ? '<i data-lucide="sun" width="17" height="17"></i>'
          : '<i data-lucide="moon" width="17" height="17"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ar";
    localStorage.setItem("dk_clinic_lang", currentLang);
    const dict = I18N[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.title = dict.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    initSwiper();
  }

  function selectBranch(branchKey) {
    selectedBranch = branchKey;
    document.querySelectorAll(".branch-option").forEach((btn) => {
      const isMatch = btn.getAttribute("data-branch") === branchKey;
      btn.classList.toggle("is-selected", isMatch);
      btn.setAttribute("aria-pressed", String(isMatch));
    });
  }

  function preselectServiceAndScroll(serviceValue) {
    const sel = document.getElementById("bookService");
    if (sel && serviceValue) {
      sel.value = serviceValue;
    }
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const nameInput = document.getElementById("bookName");
        if (nameInput) nameInput.focus();
      }, 520);
    }
  }

  function preselectBranchAndScroll(branchKey) {
    selectBranch(branchKey);
    const target = document.getElementById("booking");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setupBookingForm() {
    const form = document.getElementById("clinicBookingForm");
    const statusEl = document.getElementById("bookingStatus");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = I18N[currentLang];
      const name = (document.getElementById("bookName")?.value || "").trim();
      const rawPhone = (document.getElementById("bookPhone")?.value || "")
        .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
        .replace(/\s|-/g, "")
        .trim();
      const serviceSelect = document.getElementById("bookService");
      const serviceVal = serviceSelect?.value || "";
      const serviceLabel = serviceSelect?.options[serviceSelect.selectedIndex]?.text || "";
      const periodSelect = document.getElementById("bookPeriod");
      const periodLabel = periodSelect?.options[periodSelect.selectedIndex]?.text || "";
      const notes = (document.getElementById("bookNotes")?.value || "").trim();

      if (!name || !rawPhone || !serviceVal) {
        statusEl.className = "form-status";
        statusEl.textContent = dict.errRequired;
        return;
      }

      if (!/^(\+?20)?0?1[0125][0-9]{8}$/.test(rawPhone)) {
        statusEl.className = "form-status";
        statusEl.textContent = dict.errPhone;
        return;
      }

      statusEl.className = "form-status ok";
      statusEl.textContent = dict.okRedirect;

      const branchDisplay =
        selectedBranch === "زهراء المعادي"
          ? currentLang === "ar"
            ? "فرع زهراء المعادي (برج الحجاز جاردنز)"
            : "Zahraa El Maadi Branch (Hegaz Gardens Tower)"
          : currentLang === "ar"
          ? "فرع حدائق المعادي (12 برج النادي - أول شارع أحمد زكي)"
          : "Hadayek El Maadi Branch (12 El-Nady Tower, Ahmed Zaky St.)";

      const lines =
        currentLang === "ar"
          ? [
              "السلام عليكم عيادات د. خالد أبو جريشة 🦷",
              "أرغب في حجز موعد عبر الموقع:",
              `• الاسم: ${name}`,
              `• رقم الهاتف: ${rawPhone}`,
              `• الفرع: ${branchDisplay}`,
              `• الخدمة: ${serviceLabel}`,
              `• الفترة المفضلة: ${periodLabel}`,
              notes ? `• ملاحظات: ${notes}` : null
            ].filter(Boolean)
          : [
              "Hello Dr. Khaled Abo Grasha Dental Clinic 🦷",
              "I would like to request an appointment:",
              `• Name: ${name}`,
              `• Phone: ${rawPhone}`,
              `• Branch: ${branchDisplay}`,
              `• Service: ${serviceLabel}`,
              `• Preferred Slot: ${periodLabel}`,
              notes ? `• Notes: ${notes}` : null
            ].filter(Boolean);

      const waUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  function setupFaq() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const btn = item.querySelector(".faq-trigger");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const willOpen = !item.classList.contains("open");
        items.forEach((other) => {
          other.classList.remove("open");
          const ob = other.querySelector(".faq-trigger");
          if (ob) ob.setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function setupNavigation() {
    const header = document.getElementById("siteHeader");
    const scrollBtn = document.getElementById("scrollTopBtn");
    const drawer = document.getElementById("mobileDrawer");
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    function closeDrawer() {
      if (drawer) drawer.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (openMenuBtn && drawer) {
      openMenuBtn.addEventListener("click", () => {
        drawer.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }
    if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeDrawer);
    if (drawer) {
      drawer.addEventListener("click", (e) => {
        if (e.target === drawer) closeDrawer();
      });
      drawer.querySelectorAll("a, button.drawer-cta").forEach((el) => {
        el.addEventListener("click", closeDrawer);
      });
    }

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".desktop-nav .nav-link"));

    function onScroll() {
      const y = window.scrollY || 0;
      if (header) header.classList.toggle("is-scrolled", y > 16);
      if (scrollBtn) scrollBtn.classList.toggle("visible", y > 420);

      let activeId = "home";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 130;
        if (y >= top) activeId = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    selectBranch("حدائق المعادي");

    if (window.lucide) window.lucide.createIcons();
    if (window.AOS) {
      window.AOS.init({
        duration: 560,
        easing: "ease-out-cubic",
        once: true,
        offset: 12
      });
      window.addEventListener("load", () => {
        if (window.AOS) window.AOS.refreshHard();
      });
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("aos-animate");
            }
          });
        },
        { rootMargin: "60px 0px 60px 0px", threshold: 0.02 }
      );
      document.querySelectorAll("[data-aos]").forEach((el) => io.observe(el));
    }

    document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });

    document.getElementById("langToggleBtn")?.addEventListener("click", () => {
      applyLanguage(currentLang === "ar" ? "en" : "ar");
      if (window.lucide) window.lucide.createIcons();
    });

    document.querySelectorAll(".branch-option").forEach((btn) => {
      btn.addEventListener("click", () => selectBranch(btn.getAttribute("data-branch")));
    });

    document.querySelectorAll("[data-book-service]").forEach((btn) => {
      btn.addEventListener("click", () => preselectServiceAndScroll(btn.getAttribute("data-book-service")));
    });

    document.querySelectorAll("[data-book-branch]").forEach((btn) => {
      btn.addEventListener("click", () => preselectBranchAndScroll(btn.getAttribute("data-book-branch")));
    });

    setupBookingForm();
    setupFaq();
    setupNavigation();
  });
})();
