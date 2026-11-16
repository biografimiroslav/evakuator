import { Language } from '../types';

export const siteTranslations: Record<Language, {
  brandName: string;
  brandSub: string;
  topTicker: string;
  navServices: string;
  navHowItWorks: string;
  navReviews: string;
  navFaq: string;
  callShort: string;
  orderTowTruck: string;
  hotlinePhone: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroDescription: string;
  heroBtnOrder: string;
  heroBtnCall: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  howItWorksTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  serviceBtnOrder: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  verifiedReview: string;
  faqTitle: string;
  faqSubtitle: string;
  modalTitle: string;
  modalSubtitle: string;
  modalNameLabel: string;
  modalNamePlaceholder: string;
  modalPhoneLabel: string;
  modalPhonePlaceholder: string;
  modalVehicleLabel: string;
  modalVehiclePassenger: string;
  modalVehicleCrossover: string;
  modalVehicleVan: string;
  modalVehicleMoto: string;
  modalCondLabel: string;
  modalCondStandard: string;
  modalCondLocked: string;
  modalCondAccident: string;
  modalCondDitch: string;
  modalLocationLabel: string;
  modalLocationPlaceholder: string;
  modalGpsBtn: string;
  modalGpsFixed: string;
  modalMapClickHint: string;
  modalSubmitBtn: string;
  modalSubmitting: string;
  modalSuccessTitle: string;
  modalSuccessDesc: string;
  modalSuccessEta: string;
  modalSuccessClose: string;
  footerTagline: string;
  allRightsReserved: string;
}> = {
  UA: {
    brandName: 'AutoHelp',
    brandSub: 'Ужгород та Закарпаття',
    topTicker: 'Евакуація авто по Ужгороду, Закарпаттю та на кордонах (Чоп, Вишнє Нємецьке)',
    navServices: 'Послуги',
    navHowItWorks: 'Як це працює',
    navReviews: 'Відгуки',
    navFaq: 'Часті питання',
    callShort: 'Зателефонувати',
    orderTowTruck: 'Замовити евакуатор',
    hotlinePhone: '+38 (067) 277-88-00',
    heroBadge: 'СЛУЖБА ЕВАКУАЦІЇ ТА ТЕХДОПОМОГИ',
    heroTitle1: 'Автоевакуація в Ужгороді,',
    heroTitleHighlight: 'на кордонах та трасі М-06',
    heroTitle2: 'швидко та надійно',
    heroDescription: 'Швидка та безпечна доставка вашого авто в будь-якій ситуації на дорозі. Працюємо по місту Ужгород, на під\'їздах до пунктів пропуску зі Словаччиною (КПП Ужгород) та Угорщиною (КПП Чоп), а також по всій Закарпатській області.',
    heroBtnOrder: 'Замовити евакуатор',
    heroBtnCall: 'Зателефонувати',
    feature1: 'Швидкий виїзд за викликом',
    feature2: 'Виїзд по місту, області та до кордону',
    feature3: 'Акуратне завантаження та перевезення',
    feature4: 'Зручний виклик за геолокацією',
    howItWorksTitle: 'Як це працює',
    step1Title: '1. Заявка або дзвінок',
    step1Desc: 'Залишаєте коротку заявку на сайті, вказуєте точку на карті або телефонуєте напряму.',
    step2Title: '2. Уточнення деталей',
    step2Desc: 'Швидко зв\'язуємось з вами, узгоджуємо місцезнаходження та всі деталі замовлення.',
    step3Title: '3. Виїзд та допомога',
    step3Desc: 'Евакуатор виїжджає на місце, дбайливо завантажує автомобіль і доставляє до потрібної локації.',
    servicesTitle: 'Послуги евакуатора та техдопомоги',
    servicesSubtitle: 'Повний спектр допомоги на дорозі в Ужгороді та на прикордонних автошляхах',
    service1Title: 'Перевезення легкових авто та бусів',
    service1Desc: 'Транспортування міських автомобілів, універсалів, позашляховиків, мінівенів та комерційних бусів. Надійне кріплення колісними упорами та ременями.',
    service2Title: 'Витягування з кювету, снігу та багнюки',
    service2Desc: 'Акуратне вивільнення авто за допомогою лебідки в складних погодних умовах або при з\'їзді з дорожнього полотна без додаткових пошкоджень.',
    service3Title: 'Евакуація після ДТП та при заблокованих колесах',
    service3Desc: 'Дбайливе завантаження автомобілів з пошкодженою ходовою частиною, заблокованим кермом чи несправною автоматичною коробкою передач.',
    service4Title: 'Додаткова техдопомога на дорозі',
    service4Desc: 'Оперативний виїзд: запуск двигуна пусковим бустером при розрядженому акумуляторі, підвіз необхідного пального або допомога із заміною колеса.',
    serviceBtnOrder: 'Замовити',
    reviewsTitle: 'Відгуки водіїв',
    reviewsSubtitle: 'Досвід водіїв, які скористалися допомогою на дорогах Ужгорода та області',
    verifiedReview: 'Перевірений виклик',
    faqTitle: 'Часті запитання',
    faqSubtitle: 'Відповіді на типові питання щодо виклику, автопарку та термінів подачі',
    modalTitle: 'Замовити евакуатор онлайн',
    modalSubtitle: 'Вкажіть дані для зв\'язку — ми швидко зателефонуємо для уточнення деталей',
    modalNameLabel: 'Ваше ім\'я',
    modalNamePlaceholder: 'напр. Олександр',
    modalPhoneLabel: 'Номер телефону',
    modalPhonePlaceholder: '+380 (XX) XXX-XX-XX',
    modalVehicleLabel: 'Тип транспорту',
    modalVehiclePassenger: 'Легкова',
    modalVehicleCrossover: 'Кросовер / Джип',
    modalVehicleVan: 'Мікроавтобус / Бус',
    modalVehicleMoto: 'Мотоцикл',
    modalCondLabel: 'Стан авто',
    modalCondStandard: 'Звичайне перевезення',
    modalCondLocked: 'Заблоковані колеса / АКПП',
    modalCondAccident: 'Після ДТП',
    modalCondDitch: 'У кюветі / потрібна лебідка',
    modalLocationLabel: 'Де знаходиться авто (адреса або орієнтир)',
    modalLocationPlaceholder: 'напр. Траса М-06 біля Чопа або вул. Гагаріна, Ужгород',
    modalGpsBtn: 'Визначити моє місцезнаходження (GPS)',
    modalGpsFixed: 'GPS зафіксовано',
    modalMapClickHint: 'Або клікніть по карті нижче, щоб поставити точку подачі:',
    modalSubmitBtn: 'ВІДПРАВИТИ ЗАЯВКУ',
    modalSubmitting: 'ВІДПРАВКА...',
    modalSuccessTitle: 'ЗАЯВКУ ПРИЙНЯТО!',
    modalSuccessDesc: 'Ми отримали вашу заявку та координати. Диспетчер зв\'яжеться з вами за вказаним номером для узгодження виїзду.',
    modalSuccessEta: 'Швидка подача по місту та області',
    modalSuccessClose: 'Зрозуміло, чекаю дзвінка',
    footerTagline: 'Автоевакуація та техдопомога в Ужгороді, прикордонних пунктах та Закарпатській області.',
    allRightsReserved: 'Усі права захищено. AutoHelp.',
  },
  EN: {
    brandName: 'AutoHelp',
    brandSub: 'Uzhhorod & Transcarpathia',
    topTicker: 'Vehicle towing across Uzhhorod, Transcarpathia and border checkpoints (Chop, Vyšné Nemecké)',
    navServices: 'Services',
    navHowItWorks: 'How it works',
    navReviews: 'Reviews',
    navFaq: 'FAQ',
    callShort: 'Call Now',
    orderTowTruck: 'Request Tow Truck',
    hotlinePhone: '+38 (067) 277-88-00',
    heroBadge: 'TOWING & ROADSIDE ASSISTANCE',
    heroTitle1: 'Vehicle towing in Uzhhorod,',
    heroTitleHighlight: 'border crossings & M-06 highway',
    heroTitle2: 'fast & reliable',
    heroDescription: 'Prompt and safe delivery of your vehicle in any roadside situation. Serving Uzhhorod city, highway checkpoints to Slovakia and Hungary, and the entire Transcarpathia region.',
    heroBtnOrder: 'Request Tow Truck',
    heroBtnCall: 'Call Now',
    feature1: 'Fast prompt dispatch',
    feature2: 'Service in city, region & borders',
    feature3: 'Careful loading & transport',
    feature4: 'Convenient GPS location dispatch',
    howItWorksTitle: 'How It Works',
    step1Title: '1. Request or Call',
    step1Desc: 'Submit a quick online request, pinpoint your location on the map, or call directly.',
    step2Title: '2. Confirm Details',
    step2Desc: 'We quickly contact you to confirm the exact location and order details.',
    step3Title: '3. Dispatch & Rescue',
    step3Desc: 'The tow truck heads to your location, safely loads your vehicle, and transports it to your destination.',
    servicesTitle: 'Towing & Roadside Assistance',
    servicesSubtitle: 'Comprehensive roadside support across Uzhhorod and regional transit routes',
    service1Title: 'Transport for Passenger Cars & Vans',
    service1Desc: 'Safe transport of sedans, hatchbacks, crossovers, SUVs, and commercial minibuses with wheel-strap securing.',
    service2Title: 'Ditch, Mud & Snow Winch Recovery',
    service2Desc: 'Gentle winch retrieval of vehicles from snow banks, mud, or off-road ditches without additional damage.',
    service3Title: 'Accident & Locked-Wheel Towing',
    service3Desc: 'Specialized handling for vehicles with damaged steering, seized gearboxes, or damaged suspension.',
    service4Title: 'On-Demand Roadside Assistance',
    service4Desc: 'Jump start with portable 12V booster, emergency fuel delivery to your stranded spot, or tire change support.',
    serviceBtnOrder: 'Request',
    reviewsTitle: 'Driver Reviews',
    reviewsSubtitle: 'Real experiences from drivers assisted in Uzhhorod and on regional routes',
    verifiedReview: 'Verified Call',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Answers regarding dispatch times, vehicle types, and roadside procedures',
    modalTitle: 'Request Tow Truck Online',
    modalSubtitle: 'Provide your contact details — we will call you back shortly',
    modalNameLabel: 'Your Name',
    modalNamePlaceholder: 'e.g., Alex',
    modalPhoneLabel: 'Phone Number',
    modalPhonePlaceholder: '+380 / International number',
    modalVehicleLabel: 'Vehicle Type',
    modalVehiclePassenger: 'Passenger Car',
    modalVehicleCrossover: 'Crossover / SUV',
    modalVehicleVan: 'Minibus / Van',
    modalVehicleMoto: 'Motorcycle',
    modalCondLabel: 'Vehicle Condition',
    modalCondStandard: 'Standard Tow',
    modalCondLocked: 'Locked Wheels / Gearbox',
    modalCondAccident: 'Post-Accident',
    modalCondDitch: 'Ditch / Winch Needed',
    modalLocationLabel: 'Location of vehicle (address or landmark)',
    modalLocationPlaceholder: 'e.g., M-06 highway near Chop or Gagarin St, Uzhhorod',
    modalGpsBtn: 'Detect My Location (GPS)',
    modalGpsFixed: 'GPS Fixed',
    modalMapClickHint: 'Or click on the map below to pinpoint the pickup location:',
    modalSubmitBtn: 'SUBMIT REQUEST',
    modalSubmitting: 'SUBMITTING...',
    modalSuccessTitle: 'REQUEST RECEIVED!',
    modalSuccessDesc: 'We have received your request and coordinates. Our dispatcher will call you shortly to coordinate dispatch.',
    modalSuccessEta: 'Prompt arrival across city and region',
    modalSuccessClose: 'Understood, awaiting call',
    footerTagline: 'Vehicle towing and roadside assistance in Uzhhorod and Transcarpathia.',
    allRightsReserved: 'All rights reserved. AutoHelp.',
  },
  HU: {
    brandName: 'AutoHelp',
    brandSub: 'Ungvár és Kárpátalja',
    topTicker: 'Autómentés Ungváron, Kárpátalján és a határokon (Csap, Felsőnémeti)',
    navServices: 'Szolgáltatások',
    navHowItWorks: 'Hogyan működik',
    navReviews: 'Vélemények',
    navFaq: 'GYIK',
    callShort: 'Hívás most',
    orderTowTruck: 'Autómentő rendelése',
    hotlinePhone: '+38 (067) 277-88-00',
    heroBadge: 'AUTÓMENTŐ ÉS SEGÉLYSZOLGÁLAT',
    heroTitle1: 'Autómentés Ungváron,',
    heroTitleHighlight: 'a határátkelőkön és az M-06 úton',
    heroTitle2: 'gyorsan és megbízhatóan',
    heroDescription: 'Gyors és biztonságos segítségnyújtás bármilyen útmenti helyzetben. Szolgáltatásunk elérhető Ungvár városában, a szlovák és magyar határátkelők környékén és Kárpátalja egész területén.',
    heroBtnOrder: 'Autómentő rendelése',
    heroBtnCall: 'Hívás most',
    feature1: 'Gyors kiszállás hívásra',
    feature2: 'Kiszállás városban, vidéken és határon',
    feature3: 'Kíméletes felrakodás és szállítás',
    feature4: 'Kényelmes GPS helymeghatározás',
    howItWorksTitle: 'Hogyan működik',
    step1Title: '1. Igénylés vagy hívás',
    step1Desc: 'Küldjön gyors online megrendelést, jelölje be a helyszínt a térképen, vagy telefonáljon közvetlenül.',
    step2Title: '2. Részletek egyeztetése',
    step2Desc: 'Hamarosan visszahívjuk a pontos helyszín és a részletek egyeztetésére.',
    step3Title: '3. Kiszállás és mentés',
    step3Desc: 'Az autómentő a helyszínre érkezik, biztonságosan felrakja a járművet és elszállítja a kívánt címre.',
    servicesTitle: 'Autómentő és aszisztencia',
    servicesSubtitle: 'Teljes körű segítségnyújtás Ungvár útjain és a határ menti térségben',
    service1Title: 'Személygépkocsik és furgonok szállítása',
    service1Desc: 'Személyautók, SUV-ok és kisteherautók professzionális és biztonságos szállítása.',
    service2Title: 'Mentés árokból, hóból és sárból',
    service2Desc: 'Járművek kíméletes kihúzása csörlővel nehéz időjárási vagy terepviszonyok között.',
    service3Title: 'Baleseti mentés és blokkolt kerekek',
    service3Desc: 'Sérült futóművű vagy beragadt sebességváltójú járművek kíméletes elszállítása.',
    service4Title: 'Útmenti gyorssegély',
    service4Desc: 'Akkumulátor bikázás, üzemanyag kiszállítása a helyszínre vagy segítség kerékcserénél.',
    serviceBtnOrder: 'Megrendelés',
    reviewsTitle: 'Ügyfelek véleménye',
    reviewsSubtitle: 'Valós tapasztalatok Ungvár útjain és a környéken megsegített sofőröktől',
    verifiedReview: 'Ellenőrzött hívás',
    faqTitle: 'Gyakran ismételt kérdések',
    faqSubtitle: 'Válaszok a járművek típusával és a mentés menetével kapcsolatban',
    modalTitle: 'Autómentő rendelése online',
    modalSubtitle: 'Adja meg adatait — hamarosan visszahívjuk az egyeztetéshez',
    modalNameLabel: 'Az Ön neve',
    modalNamePlaceholder: 'pl. Péter',
    modalPhoneLabel: 'Telefonszám',
    modalPhonePlaceholder: '+380 / Nemzetközi szám',
    modalVehicleLabel: 'Jármű kategória',
    modalVehiclePassenger: 'Személyautó',
    modalVehicleCrossover: 'Terepjáró / SUV',
    modalVehicleVan: 'Kishaszonjármű / Furgon',
    modalVehicleMoto: 'Motorkerékpár',
    modalCondLabel: 'Jármű állapota',
    modalCondStandard: 'Normál szállítás',
    modalCondLocked: 'Blokkolt kerekek / váltó',
    modalCondAccident: 'Baleset utáni sérülés',
    modalCondDitch: 'Árokban van / csörlő szükséges',
    modalLocationLabel: 'A jármű pontos helye',
    modalLocationPlaceholder: 'pl. M-06 út Csap közelében vagy Ungvár belváros',
    modalGpsBtn: 'GPS helyzetem meghatározása',
    modalGpsFixed: 'GPS rögzítve',
    modalMapClickHint: 'Vagy kattintson a térképre a felvételi hely kijelöléséhez:',
    modalSubmitBtn: 'MEGRENDELÉS KÜLDÉSE',
    modalSubmitting: 'FOLYAMATBAN...',
    modalSuccessTitle: 'A HÍVÁST RÖGZÍTETTÜK!',
    modalSuccessDesc: 'Megkaptuk az adatait és a koordinátákat. Diszpécserünk hamarosan felhívja Önt.',
    modalSuccessEta: 'Gyors kiérkezés a térségben',
    modalSuccessClose: 'Rendben, várom a hívást',
    footerTagline: 'Autómentés és segítségnyújtás Ungváron és Kárpátalján.',
    allRightsReserved: 'Minden jog fenntartva. AutoHelp.',
  },
  SK: {
    brandName: 'AutoHelp',
    brandSub: 'Užhorod a Zakarpatsko',
    topTicker: 'Odťah vozidiel v Užhorode, Zakarpatsku a na hraniciach (Čop, Vyšné Nemecké)',
    navServices: 'Služby',
    navHowItWorks: 'Ako to funguje',
    navReviews: 'Hodnotenia',
    navFaq: 'Časté otázky',
    callShort: 'Zavolať',
    orderTowTruck: 'Objednať odťah',
    hotlinePhone: '+38 (067) 277-88-00',
    heroBadge: 'ODŤAHOVÁ A ASISTENČNÁ SLUŽBA',
    heroTitle1: 'Odťahová služba v Užhorode,',
    heroTitleHighlight: 'na hraniciach a ceste M-06',
    heroTitle2: 'rýchlo a spoľahlivo',
    heroDescription: 'Rýchla a bezpečná pomoc na cestách v akejkoľvek situácii. Pôsobíme v Užhorode, pri hraničných priechodoch na Slovensko a do Maďarska aj po celej Zakarpatskej oblasti.',
    heroBtnOrder: 'Objednať odťah',
    heroBtnCall: 'Zavolať',
    feature1: 'Rýchly výjazd na zavolanie',
    feature2: 'Výjazd v meste, regióne a na hranice',
    feature3: 'Šetrné naloženie a preprava',
    feature4: 'Jednoduché privolanie cez GPS',
    howItWorksTitle: 'Ako to funguje',
    step1Title: '1. Objednávka alebo hovor',
    step1Desc: 'Odošlite jednoduchý online formulár, označte bod na mape alebo priamo zavolajte.',
    step2Title: '2. Upresnenie detailov',
    step2Desc: 'Ihneď vás kontaktujeme pre potvrdenie presnej polohy a detailov.',
    step3Title: '3. Výjazd a pomoc',
    step3Desc: 'Odťahové vozidlo vyráža na miesto, šetrne naloží auto a bezpečne ho prepraví do cieľa.',
    servicesTitle: 'Služby odťahu a asistencie',
    servicesSubtitle: 'Komplexná pomoc na cestách v Užhorode a na tranzitných trasách',
    service1Title: 'Preprava osobných áut a dodávok',
    service1Desc: 'Bezpečná preprava osobných áut, SUV, terénnych vozidiel a úžitkových dodávok.',
    service2Title: 'Vyťahovanie z priekopy, snehu a blata',
    service2Desc: 'Šetrné vyprostenie vozidla navijakom z náročného terénu bez ďalšieho poškodenia.',
    service3Title: 'Odťah po nehode a so zablokovanými kolesami',
    service3Desc: 'Bezpečné naloženie vozidiel s poškodeným podvozkom, riadením alebo zablokovaným automatom.',
    service4Title: 'Doplnková pomoc na ceste',
    service4Desc: 'Núdzový štart motora boosterom pri vybitom akumulátore, dovoz paliva alebo pomoc s výmenou kolesa.',
    serviceBtnOrder: 'Objednať',
    reviewsTitle: 'Hodnotenia vodičov',
    reviewsSubtitle: 'Skúsenosti vodičov s pomocou na cestách v Užhorode a okolí',
    verifiedReview: 'Overený výjazd',
    faqTitle: 'Často kladené otázky',
    faqSubtitle: 'Odpovede na otázky ohľadom typov vozidiel, polohy a postupu pri poruche',
    modalTitle: 'Objednať odťahovku online',
    modalSubtitle: 'Vyplňte kontaktné údaje — čoskoro vám zavoláme pre upresnenie',
    modalNameLabel: 'Vaše meno',
    modalNamePlaceholder: 'napr. Martin',
    modalPhoneLabel: 'Telefónne číslo',
    modalPhonePlaceholder: '+421 / +380 číslo',
    modalVehicleLabel: 'Kategória vozidla',
    modalVehiclePassenger: 'Osobné auto',
    modalVehicleCrossover: 'SUV / 4x4',
    modalVehicleVan: 'Dodávka / Mikrobus',
    modalVehicleMoto: 'Motocykel',
    modalCondLabel: 'Stav vozidla',
    modalCondStandard: 'Bežný odťah',
    modalCondLocked: 'Zablokované kolesá / automat',
    modalCondAccident: 'Po nehode',
    modalCondDitch: 'V priekope / potrebný navijak',
    modalLocationLabel: 'Miesto naloženia (adresa alebo cesta)',
    modalLocationPlaceholder: 'napr. Cesta M-06 pri Čope alebo Užhorod centrum',
    modalGpsBtn: 'Zistiť moju GPS polohu',
    modalGpsFixed: 'GPS zamerané',
    modalMapClickHint: 'Alebo kliknite na mapu nižšie pre určenie miesta:',
    modalSubmitBtn: 'ODOSLAŤ OBJEDNÁVKU',
    modalSubmitting: 'ODOSIELANIE...',
    modalSuccessTitle: 'OBJEDNÁVKA PRIJATÁ!',
    modalSuccessDesc: 'Získali sme vaše údaje a polohu. Dispečer vás bude kontaktovať na potvrdenie výjazdu.',
    modalSuccessEta: 'Rýchly príchod v meste a regióne',
    modalSuccessClose: 'Rozumiem, čakám na hovor',
    footerTagline: 'Odťahová a asistenčná služba v Užhorode a Zakarpatsku.',
    allRightsReserved: 'Všetky práva vyhradené. AutoHelp.',
  },
};
