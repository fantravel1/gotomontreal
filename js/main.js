/* ==========================================================================
   GoToMontreal.com — Main JavaScript
   City picker, personalized recommendations, scroll animations,
   FAQ accordion, Mobile menu, Navigation effects
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- City Data ---------- */
  var cityData = {
    'New York': {
      drive: '5.5h',
      flight: '1.5h',
      season: 'Fall',
      seasonClass: 'fall',
      seasonIcon: '\uD83C\uDF42',
      months: 'September \u2014 October',
      reason: 'Escape the concrete heat for Mount Royal\u2019s crimson canopy. Fall in Montr\u00e9al is intimate, cozy, and the food scene deepens while your wallet finally catches a break.',
      tagline: 'Everything you love about NYC\u2019s food scene, minus the $18 cocktails.',
      travelNote: 'An easy weekend drive up I-87 \u2014 or a quick hop from JFK, LGA, or EWR.',
      highlights: [
        { icon: '\uD83C\uDF42', text: 'Mount Royal foliage that puts Central Park to shame \u2014 and you can actually hear yourself think' },
        { icon: '\uD83E\uDD6F', text: 'The bagel debate gets personal: wood-fired vs. boiled. You\u2019ll switch sides.' },
        { icon: '\uD83D\uDCB0', text: 'Hotels 30\u201350% cheaper than Manhattan, BYOB restaurants with no wine markup' },
        { icon: '\uD83C\uDFB7', text: 'Jazz bars where the cover is $0 and the music is world-class' }
      ]
    },
    'Toronto': {
      drive: '5.5h',
      flight: '1h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'Festival season that transforms the entire city. Jazz Fest, Just for Laughs, Osheaga, and the Grand Prix \u2014 all under warm golden skies with patios spilling onto every sidewalk.',
      tagline: 'Your French-speaking sibling with better festivals and cheaper rent.',
      travelNote: 'A straight shot down the 401 \u2014 or a 1-hour flight from Pearson.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'More festivals per capita than almost any city in North America \u2014 and most are free' },
        { icon: '\uD83C\uDF7D\uFE0F', text: 'BYOB dining culture means world-class food without Toronto\u2019s restaurant markups' },
        { icon: '\uD83C\uDFD7\uFE0F', text: 'European architecture and cobblestones just 5.5 hours from your door' },
        { icon: '\uD83C\uDF1F', text: 'A genuinely bilingual city with a completely different energy and soul' }
      ]
    },
    'Boston': {
      drive: '4.5h',
      flight: '1h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'Late June \u2014 Early July',
      reason: 'Time it with Jazz Fest for the ultimate long weekend. The world\u2019s largest jazz festival, mostly free, with Montr\u00e9al\u2019s legendary patio season in full swing.',
      tagline: 'Your city\u2019s European charm, amplified \u2014 with better bagels.',
      travelNote: 'A beautiful 4.5-hour drive through Vermont \u2014 or a 1-hour flight.',
      highlights: [
        { icon: '\uD83C\uDFB6', text: 'Jazz Fest has 2M+ visitors and hundreds of free outdoor shows \u2014 plan your trip around it' },
        { icon: '\u2615', text: 'A caf\u00e9 culture that makes even Boston\u2019s best coffee shops look corporate' },
        { icon: '\uD83D\uDEB6', text: 'As walkable as Boston but without the confusing street grid' },
        { icon: '\uD83C\uDF3F', text: 'Drive through Vermont in either direction for a double dose of beauty' }
      ]
    },
    'Chicago': {
      drive: '13h',
      flight: '2h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'July \u2014 August',
      reason: 'You already know how to embrace winter. Now experience summer in a city that celebrates it like a religion \u2014 Osheaga, outdoor dining, and golden-hour terrasses on every block.',
      tagline: 'A fellow winter warrior city, but with more joie de vivre and smoked meat.',
      travelNote: 'Worth the 2-hour flight \u2014 direct from O\u2019Hare.',
      highlights: [
        { icon: '\uD83C\uDF89', text: 'Osheaga music festival: indie, hip-hop, and electronic on an island with skyline views' },
        { icon: '\uD83E\uDD69', text: 'Trade deep dish for smoked meat marinated ten days \u2014 both cities know how to eat' },
        { icon: '\uD83C\uDFD9\uFE0F', text: 'Griffintown\u2019s canal-side energy will feel like home \u2014 but in French' },
        { icon: '\uD83C\uDF7A', text: 'Bring your own wine to extraordinary restaurants. Yes, really.' }
      ]
    },
    'Philadelphia': {
      drive: '7h',
      flight: '1.5h',
      season: 'Fall',
      seasonClass: 'fall',
      seasonIcon: '\uD83C\uDF42',
      months: 'September \u2014 November',
      reason: 'Mount Royal in autumn makes Fairmount Park blush. Fewer tourists, deeper caf\u00e9 culture, and a food scene that matches Philly\u2019s grit but with French finesse.',
      tagline: 'Philly\u2019s food passion meets French-Canadian craft \u2014 bring your appetite.',
      travelNote: 'A scenic 7-hour drive or quick 1.5-hour flight.',
      highlights: [
        { icon: '\uD83C\uDF41', text: 'Mount Royal\u2019s fall foliage is one of eastern North America\u2019s best-kept secrets' },
        { icon: '\uD83E\uDD6F', text: 'A bagel debate to rival your cheesesteak wars \u2014 and it\u2019s just as passionate' },
        { icon: '\uD83C\uDFA8', text: 'Street art, gallery openings, and creative neighborhoods that rival Fishtown' },
        { icon: '\uD83D\uDCB0', text: 'Way more affordable than NYC \u2014 you already know the value of a great food city' }
      ]
    },
    'Washington DC': {
      drive: '8h',
      flight: '1.5h',
      season: 'Spring',
      seasonClass: 'spring',
      seasonIcon: '\uD83C\uDF38',
      months: 'April \u2014 May',
      reason: 'Cherry blossoms AND sugar shack season. Montr\u00e9al in spring is a city shaking off winter with maple everything, the first terrasses, and pure optimism in the air.',
      tagline: 'Swap marble monuments for cobblestone streets and politics for joie de vivre.',
      travelNote: 'An 8-hour road trip or a quick 1.5-hour direct flight.',
      highlights: [
        { icon: '\uD83C\uDF3B', text: 'Sugar shack season: maple taffy on snow, pancake breakfasts, and the sweetest traditions' },
        { icon: '\uD83E\uDDC0', text: 'Jean-Talon Market in spring is an explosion of fresh produce, cheese, and flowers' },
        { icon: '\u2615', text: 'First terrasses of the year \u2014 the whole city comes alive after winter' },
        { icon: '\uD83C\uDF38', text: 'Cherry blossoms along the canal, without the National Mall crowds' }
      ]
    },
    'Ottawa': {
      drive: '2h',
      flight: '\u2014',
      season: 'Winter',
      seasonClass: 'winter',
      seasonIcon: '\u2744\uFE0F',
      months: 'January \u2014 February',
      reason: 'You have Winterlude. Montr\u00e9al has Igloofest \u2014 an outdoor electronic music festival in the freezing cold with snowsuits, dancing, and pure madness. It\u2019s the winter you deserve.',
      tagline: 'You\u2019re basically neighbors. It\u2019s time you visited the cool sibling.',
      travelNote: 'Just 2 hours on the 417. No flight needed \u2014 it\u2019s a day trip.',
      highlights: [
        { icon: '\uD83E\uDD76', text: 'Igloofest makes Winterlude look tame \u2014 snowsuit raving in -20\u00B0C' },
        { icon: '\uD83E\uDD69', text: 'Schwartz\u2019s smoked meat is worth the drive alone' },
        { icon: '\uD83C\uDF06', text: 'A completely different energy \u2014 artistic, rebellious, and sensual' },
        { icon: '\uD83C\uDF77', text: 'Natural wine bars, speakeasies, and nightlife that Ottawa can\u2019t touch' }
      ]
    },
    'Detroit': {
      drive: '8h',
      flight: '1.5h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'Two cities with creative rebirth in their DNA. Montr\u00e9al\u2019s summer festival season matches Detroit\u2019s artistic energy \u2014 but with cobblestones, French, and patios on every corner.',
      tagline: 'Same creative grit, different language, equally incredible food.',
      travelNote: 'An 8-hour drive through Ontario or a direct 1.5-hour flight.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'Festival season that matches Movement\u2019s energy \u2014 but lasts all summer long' },
        { icon: '\uD83C\uDFD7\uFE0F', text: 'Griffintown\u2019s warehouse conversions will feel familiar \u2014 but with canal-side dining' },
        { icon: '\uD83C\uDFA8', text: 'A street art and gallery scene that rivals your city\u2019s creative renaissance' },
        { icon: '\uD83C\uDF54', text: 'Late-night poutine at 3 AM is Detroit coney island energy, Quebec-style' }
      ]
    },
    'Pittsburgh': {
      drive: '9h',
      flight: '2h',
      season: 'Fall',
      seasonClass: 'fall',
      seasonIcon: '\uD83C\uDF42',
      months: 'September \u2014 October',
      reason: 'Your bridge city meets our mountain city. Fall in Montr\u00e9al is golden foliage on Mount Royal, deep caf\u00e9 culture, and a food scene that rewards the adventurous.',
      tagline: 'Pittsburgh knows reinvention. Montr\u00e9al knows how to live. Meet in the middle.',
      travelNote: 'A 9-hour scenic drive through New York State, or a 2-hour flight.',
      highlights: [
        { icon: '\u26F0\uFE0F', text: 'Mount Royal\u2019s summit view is your Mount Washington overlook \u2014 but surrounded by forest' },
        { icon: '\uD83E\uDD6F', text: 'Wood-fired bagels at midnight \u2014 a food culture that never sleeps' },
        { icon: '\uD83C\uDF42', text: 'Fall foliage that makes even western PA look understated' },
        { icon: '\uD83C\uDF7A', text: 'Craft beer scene and BYOB culture that respects your budget' }
      ]
    },
    'Cleveland': {
      drive: '9h',
      flight: '2h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'July \u2014 August',
      reason: 'Swap Lake Erie for the St. Lawrence. Montr\u00e9al\u2019s summer is a nonstop festival with the same blue-collar food pride Cleveland carries \u2014 just with French flair.',
      tagline: 'A lakefront city that gets it \u2014 now try the river city that lives it.',
      travelNote: '9 hours through Ontario or a direct 2-hour flight.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'Osheaga music festival: your Lollapalooza alternative, on an island' },
        { icon: '\uD83E\uDD69', text: 'Smoked meat and poutine \u2014 honest, no-pretension food you\u2019ll respect' },
        { icon: '\uD83C\uDFD9\uFE0F', text: 'A waterfront that\u2019s been done right \u2014 walkable, alive, and beautiful' },
        { icon: '\uD83C\uDFA4', text: 'Just for Laughs: the world\u2019s biggest comedy festival, right here' }
      ]
    },
    'Hartford': {
      drive: '4h',
      flight: '1h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 July',
      reason: 'Four hours to a city that feels like another continent. Time it with Jazz Fest and your weekend becomes legendary \u2014 free outdoor concerts, world-class food, and electric energy.',
      tagline: 'Close enough for a long weekend. Far enough to feel like an escape.',
      travelNote: 'An easy 4-hour drive straight up I-91 through Vermont.',
      highlights: [
        { icon: '\uD83C\uDFB7', text: 'Jazz Fest is just 4 hours away \u2014 the world\u2019s largest, and mostly free' },
        { icon: '\uD83C\uDF0D', text: 'A bilingual, European-feeling city without crossing an ocean' },
        { icon: '\uD83E\uDD6F', text: '24-hour wood-fired bagel shops \u2014 worth the drive alone' },
        { icon: '\uD83C\uDF77', text: 'BYOB restaurants where you bring the wine and they bring genius food' }
      ]
    },
    'Portland ME': {
      drive: '4.5h',
      flight: '1h',
      season: 'Winter',
      seasonClass: 'winter',
      seasonIcon: '\u2744\uFE0F',
      months: 'January \u2014 February',
      reason: 'You already love a small city with serious food culture. Now imagine that, but bigger, French, and with an outdoor electronic music festival in the snow.',
      tagline: 'Portland\u2019s food soul in a bigger body \u2014 with more festivals and French.',
      travelNote: '4.5 hours through New Hampshire and Vermont \u2014 a gorgeous winter drive.',
      highlights: [
        { icon: '\u2744\uFE0F', text: 'Igloofest: dance outside in January like only Canadians would dare' },
        { icon: '\uD83E\uDD6F', text: 'A food scene that matches Portland\u2019s passion but with 10x the population' },
        { icon: '\uD83C\uDFD9\uFE0F', text: 'Old Montr\u00e9al\u2019s cobblestones make Old Port feel even cozier' },
        { icon: '\uD83C\uDF19', text: 'Nuit Blanche: an all-night art event that takes over the entire city' }
      ]
    },
    'Burlington': {
      drive: '1.5h',
      flight: '\u2014',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'You\u2019re 90 minutes away from the biggest festival city in North America. There is no excuse. Jazz Fest, Just for Laughs, Osheaga, the Grand Prix \u2014 pick one and go.',
      tagline: 'You\u2019re basically a neighbor. Start acting like one.',
      travelNote: 'Just 1.5 hours on I-89. This is a day trip or a spontaneous weekend.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'More festivals in one summer than Burlington has all year \u2014 and you\u2019re 90 min away' },
        { icon: '\uD83C\uDF54', text: 'Late-night food scene that goes until 3 AM \u2014 a major upgrade from Church Street' },
        { icon: '\uD83C\uDFD7\uFE0F', text: 'A real city with the creative energy Burlington aspires to' },
        { icon: '\uD83C\uDF77', text: 'Natural wine bars and speakeasies hidden behind unmarked doors' }
      ]
    },
    'Albany': {
      drive: '3h',
      flight: '1h',
      season: 'Fall',
      seasonClass: 'fall',
      seasonIcon: '\uD83C\uDF42',
      months: 'September \u2014 October',
      reason: 'Three hours north and you\u2019re in a completely different world. Fall foliage on Mount Royal, deep caf\u00e9 culture, and a city that feels more like Paris than anything on I-87.',
      tagline: 'The international escape that\u2019s closer than Manhattan.',
      travelNote: 'Just 3 hours up I-87 / the Adirondack Northway. An easy weekend.',
      highlights: [
        { icon: '\uD83C\uDF41', text: 'Mount Royal\u2019s autumn colors rivaling the Adirondacks \u2014 but with caf\u00e9s at the summit' },
        { icon: '\uD83C\uDF0D', text: 'Europe without a passport \u2014 cobblestones, French, and terrasses everywhere' },
        { icon: '\uD83E\uDD6F', text: 'Fairmount or St-Viateur? The great bagel debate awaits you.' },
        { icon: '\uD83D\uDCB0', text: 'A world-class city that costs half of what NYC charges for the same experience' }
      ]
    },
    'Syracuse': {
      drive: '4h',
      flight: '1.5h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'Four hours and you\u2019re in festival paradise. Montr\u00e9al\u2019s summer is an explosion of music, comedy, food, and golden-hour patios that make the drive feel like nothing.',
      tagline: 'The big-city energy you crave, closer than you think.',
      travelNote: '4 hours on I-81 North through the Thousand Islands \u2014 a beautiful drive.',
      highlights: [
        { icon: '\uD83C\uDFB6', text: 'Jazz Fest, Just for Laughs, Osheaga \u2014 three festivals, one incredible city' },
        { icon: '\uD83C\uDF7D\uFE0F', text: 'A food scene that\u2019ll redefine what you think a city can offer' },
        { icon: '\uD83D\uDEB4', text: '900+ km of bike paths and one of North America\u2019s most walkable cities' },
        { icon: '\u2615', text: 'Caf\u00e9 culture that makes every morning feel like a vacation' }
      ]
    },
    'Providence': {
      drive: '5h',
      flight: '1.5h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'July \u2014 August',
      reason: 'You already appreciate a small city with outsized food culture and art scene. Now imagine that at festival scale \u2014 Montr\u00e9al\u2019s summer is Providence\u2019s WaterFire on steroids.',
      tagline: 'Providence\u2019s creative DNA, but in French and at ten times the scale.',
      travelNote: '5 hours through Massachusetts and Vermont \u2014 or a quick flight.',
      highlights: [
        { icon: '\uD83C\uDFA8', text: 'A street art and gallery scene that matches RISD\u2019s creative output' },
        { icon: '\uD83C\uDFB5', text: 'Osheaga music festival: indie, hip-hop, and electronic on a river island' },
        { icon: '\uD83C\uDF7D\uFE0F', text: 'Food culture that\u2019s democratic and extraordinary \u2014 your people' },
        { icon: '\uD83C\uDF19', text: 'Nuit Blanche: WaterFire meets city-wide art installation, all night long' }
      ]
    },
    'Minneapolis': {
      drive: '18h',
      flight: '3h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'Same winter DNA, completely different summer personality. Montr\u00e9al\u2019s festival season is the reward for surviving cold \u2014 and nobody understands that better than you.',
      tagline: 'Two cities that know winter\u2019s price \u2014 and summer\u2019s reward.',
      travelNote: 'Worth the flight \u2014 direct from MSP, about 3 hours.',
      highlights: [
        { icon: '\u2744\uFE0F', text: 'A fellow -30\u00B0C city that doesn\u2019t apologize for winter \u2014 it throws festivals in it' },
        { icon: '\uD83C\uDFB5', text: 'Jazz Fest and Osheaga: your Soundset and Rock the Garden, but French' },
        { icon: '\uD83E\uDD6F', text: 'Wood-fired bagels at 2 AM \u2014 something even Minneapolis can\u2019t offer' },
        { icon: '\uD83C\uDF0D', text: 'A bilingual, European-feeling city on your own continent' }
      ]
    },
    'Qu\u00e9bec City': {
      drive: '2.5h',
      flight: '\u2014',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'You know the charm of Old Qu\u00e9bec. Now experience the energy of Montr\u00e9al \u2014 bigger, louder, more diverse, and overflowing with festivals. It\u2019s the yang to your yin.',
      tagline: 'Same province, completely different heartbeat.',
      travelNote: 'Just 2.5 hours on the 20. A spontaneous weekend trip.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'Festival season that dwarfs anything on the Plaines d\u2019Abraham' },
        { icon: '\uD83C\uDFD9\uFE0F', text: 'Bigger, more diverse, more neighborhoods to discover' },
        { icon: '\uD83C\uDF19', text: 'A nightlife scene that goes past midnight \u2014 way past' },
        { icon: '\uD83C\uDFA8', text: 'Mile End and the Plateau: creative neighborhoods with no tourist equivalent' }
      ]
    },
    'Halifax': {
      drive: '12h',
      flight: '2h',
      season: 'Fall',
      seasonClass: 'fall',
      seasonIcon: '\uD83C\uDF42',
      months: 'September \u2014 November',
      reason: 'You love a waterfront city with maritime soul. Montr\u00e9al in fall trades the ocean for mountain foliage, adds French caf\u00e9 culture, and turns the food scene up to eleven.',
      tagline: 'Maritime warmth meets Qu\u00e9b\u00e9cois fire \u2014 a perfect contrast.',
      travelNote: 'A 2-hour direct flight or an epic 12-hour Maritime road trip.',
      highlights: [
        { icon: '\uD83C\uDF42', text: 'Mount Royal\u2019s fall colors are a different kind of beautiful than your Atlantic coast' },
        { icon: '\uD83E\uDD6F', text: 'Wood-fired bagels and smoked meat \u2014 a food culture as proud as Halifax\u2019s seafood' },
        { icon: '\uD83C\uDFB7', text: 'A music and arts scene that runs year-round, not just festival weekends' },
        { icon: '\uD83C\uDF77', text: 'Natural wine bars and BYOB dining \u2014 your maritime drinking culture, elevated' }
      ]
    },
    'Winnipeg': {
      drive: '22h',
      flight: '3h',
      season: 'Summer',
      seasonClass: 'summer',
      seasonIcon: '\u2600\uFE0F',
      months: 'June \u2014 August',
      reason: 'You know cold. You know flat. Now experience a city that turns summer into a nonstop celebration with mountains, cobblestones, and more festivals than you can count.',
      tagline: 'Two prairie-adjacent cities that earn every ray of summer sun.',
      travelNote: 'Worth the 3-hour flight \u2014 it\u2019s another world.',
      highlights: [
        { icon: '\uD83C\uDFB5', text: 'Your Folk Fest energy, but amplified across Jazz Fest, Osheaga, and more' },
        { icon: '\u26F0\uFE0F', text: 'Mount Royal: an actual mountain in the middle of the city. Imagine.' },
        { icon: '\uD83C\uDF0D', text: 'French, English, cobblestones, terrasses \u2014 Europe without the passport' },
        { icon: '\uD83C\uDF54', text: 'Poutine at 3 AM, bagels at midnight \u2014 a late-night food scene that never quits' }
      ]
    }
  };

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimations();
    initFaqAccordion();
    initCityPicker();
  }

  /* ---------- Navigation Scroll Effect ---------- */
  function initNavScroll() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var scrolled = false;

    function checkScroll() {
      var shouldScroll = window.scrollY > 60;
      if (shouldScroll !== scrolled) {
        scrolled = shouldScroll;
        nav.classList.toggle('nav--scrolled', scrolled);
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector('.nav__toggle');
    var mobile = document.querySelector('.nav__mobile');
    if (!toggle || !mobile) return;

    var isOpen = false;

    toggle.addEventListener('click', function () {
      isOpen = !isOpen;
      toggle.classList.toggle('active', isOpen);
      mobile.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    var links = mobile.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        isOpen = false;
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var navHeight = document.getElementById('nav')
          ? document.getElementById('nav').offsetHeight
          : 0;
        var targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  /* ---------- Scroll Reveal Animations ---------- */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- FAQ Accordion ---------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector('.faq-item__question');
      if (!question) return;

      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all items
        items.forEach(function (otherItem) {
          otherItem.classList.remove('active');
        });

        // Open clicked item (toggle behavior)
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  /* ---------- City Picker & Personalized Recommendations ---------- */
  function initCityPicker() {
    var cityBtns = document.querySelectorAll('.hero__city-btn[data-city]');
    var moreBtn = document.getElementById('heroMoreBtn');
    var expandedSection = document.getElementById('heroCitiesExpanded');
    var recDefault = document.getElementById('recDefault');
    var recResult = document.getElementById('recResult');
    var recResetBtn = document.getElementById('recResetBtn');

    if (!cityBtns.length || !recDefault || !recResult) return;

    // More cities toggle
    if (moreBtn && expandedSection) {
      moreBtn.addEventListener('click', function () {
        expandedSection.classList.toggle('show');
        moreBtn.textContent = expandedSection.classList.contains('show')
          ? 'Fewer Cities'
          : 'More Cities';
      });
    }

    // City button click
    cityBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var city = this.getAttribute('data-city');
        if (!cityData[city]) return;

        // Update active state
        document.querySelectorAll('.hero__city-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        // Show recommendation
        showRecommendation(city);
      });
    });

    // Reset button
    if (recResetBtn) {
      recResetBtn.addEventListener('click', function () {
        resetRecommendation();
      });
    }
  }

  function showRecommendation(city) {
    var data = cityData[city];
    if (!data) return;

    var recDefault = document.getElementById('recDefault');
    var recResult = document.getElementById('recResult');

    // Populate the recommendation
    document.getElementById('recFrom').textContent = city;
    document.getElementById('recTagline').textContent = data.tagline;
    document.getElementById('recSeason').textContent = data.season;
    document.getElementById('recMonths').textContent = data.months;
    document.getElementById('recReason').textContent = data.reason;
    document.getElementById('recDrive').textContent = data.drive;
    document.getElementById('recFlight').textContent = data.flight;
    document.getElementById('recTravelNote').textContent = data.travelNote;

    // Season icon
    var iconEl = document.getElementById('recSeasonIcon');
    iconEl.textContent = data.seasonIcon;
    iconEl.className = 'rec__card-icon ' + data.seasonClass;

    // Highlights
    var highlightsEl = document.getElementById('recHighlights');
    highlightsEl.innerHTML = '';
    data.highlights.forEach(function (h) {
      var div = document.createElement('div');
      div.className = 'rec__highlight';
      div.innerHTML =
        '<span class="rec__highlight-icon">' + h.icon + '</span>' +
        '<span class="rec__highlight-text">' + h.text + '</span>';
      highlightsEl.appendChild(div);
    });

    // Show result, hide default
    recDefault.style.display = 'none';
    recResult.classList.add('show');

    // Scroll to recommendation section
    var recSection = document.getElementById('recommendation');
    if (recSection) {
      var navHeight = document.getElementById('nav')
        ? document.getElementById('nav').offsetHeight
        : 0;
      var targetPosition =
        recSection.getBoundingClientRect().top + window.scrollY - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  function resetRecommendation() {
    var recDefault = document.getElementById('recDefault');
    var recResult = document.getElementById('recResult');

    recResult.classList.remove('show');
    recDefault.style.display = '';

    // Remove active state from city buttons
    document.querySelectorAll('.hero__city-btn').forEach(function (b) {
      b.classList.remove('active');
    });

    // Scroll back to hero
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
})();
