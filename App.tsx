

import React from 'react';
import { HeartIcon, EyeIcon, SparkleIcon, CheckIcon, ArrowLeftIcon, ArrowDownIcon } from './components/icons';

const UPAY_LINK = 'https://app.upay.co.il/API6/s.php?m=clpYYzdxaG5kY2dNekVMalVRSVVvdz09';
const BITPAY_LINK = 'https://www.bitpay.co.il/app/share-info?i=202738567169_19l9WK6M';

const whoIsItForItems = [
  { text: 'למי שמרגישה אינטואיציה חזקה ורוצה להבין אותה', icon: HeartIcon },
  { text: 'למי שמרגישה עומק פנימי שלא מקבל מקום', icon: EyeIcon },
  { text: 'למטפלות שרוצות להרחיב את סל הכלים', icon: SparkleIcon },
  { text: 'למי ששואלת שאלות פנימיות ורוצה בהירות', icon: EyeIcon },
  { text: 'למי שמרגישה שזה הזמן שלה להתחבר לעצמה', icon: HeartIcon },
  { text: 'למי שרוצה לדעת לתקשר בביטחון מלא', icon: SparkleIcon }
];

const whatYouWillLearnItems = [
  'איך להיכנס למצב תודעתי שבו תקשור נהיה ברור',
  'איך להבדיל בין מחשבה לבין מסר אמיתי',
  'כיצד לתרגל תקשור גם בלי ניסיון',
  'הטעות שמונעת מאנשים לתקשר',
  'תרגיל קצר שמראה שהיכולת קיימת בך'
];

const participantResults = [
    'בהירות פנימית חדשה',
    'פתיחה אנרגטית ברורה',
    'חיבור לקלפים ולמסרים',
    'תחושת ביטחון וחיבור ללב'
];

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-10 md:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto max-w-4xl">{children}</div>
  </section>
);

interface VideoEmbedProps {
  vimeoId: string;
  autoplay?: boolean;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ vimeoId, autoplay = false, title }) => {
  const src = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479${autoplay ? '&autoplay=1&muted=1' : ''}`;
  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden ring-2 ring-purple-500/30 shadow-2xl shadow-purple-500/20">
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
        className="w-full h-full"
        title={title}
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '', icon}) => {
    const isExternal = href.startsWith('http');
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : ""}
            className={`inline-flex items-center justify-center gap-3 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 text-white font-bold text-lg md:text-xl rounded-full px-10 py-4 shadow-lg shadow-cyan-500/40 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/60 ${className}`}
        >
            {children}
            {icon ? icon : <ArrowLeftIcon className="w-6 h-6" />}
        </a>
    );
}

const BitButton: React.FC<{href: string}> = ({ href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 text-center bg-blue-600 text-white font-bold text-lg md:text-xl rounded-full px-10 py-4 shadow-lg shadow-blue-500/40 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60"
    >
        הרשמה עם הביט
    </a>
);


export default function App() {
  return (
    <div className="bg-[#0f0c29] text-gray-200 starry-bg">
      <main>
        {/* Hero Section */}
        <Section className="!pt-16 md:!pt-24 text-center">
            <div className="inline-block bg-purple-500/20 text-purple-200 text-sm font-semibold rounded-full px-4 py-1 mb-6 border border-purple-400/30">
             ✨ מכור מראש למחזור הקרוב
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              תקשור היא לא <span className="text-cyan-400">יכולת על טבעית</span><br /> היא מיומנות
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
             גלו איך להיכנס למצב תודעתי עמוק ולהתחיל לקבל מסרים – <span className="text-cyan-400 font-semibold">גם אם</span> מעולם לא עשיתן זאת לפני כן.
            </p>
            <CTAButton href="#registration-section" icon={<ArrowDownIcon className="w-6 h-6" />}>
              אני רוצה להרשם לשיעור הראשון
            </CTAButton>
            <p className="mt-4 text-sm text-gray-400">מלא | נפתח</p>
        </Section>
        
        {/* First Video Section */}
        <Section className="!pt-0 md:!pt-0">
            <VideoEmbed vimeoId="1143137311" autoplay title="הכשרת תקשור עם אביב אפרת 1" />
            <p className="mt-6 text-lg text-gray-300 text-center">צפו בפתיח וחוו את האנרגיה של התקשור כבר מהרגע הראשון.</p>
        </Section>

        <Section>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">למי ההדרכה מתאימה?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoIsItForItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10 transition-transform hover:scale-105 hover:bg-white/10">
                <div className="flex-shrink-0 text-purple-400">
                  <item.icon className="w-7 h-7" />
                </div>
                <p className="text-lg text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section>
             <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">התבוננות עמוקה בדרך שבה מתחילים לתקשר</h3>
            <VideoEmbed vimeoId="1143137188" title="הכשרת תקשור עם אביב אפרת 2" />
        </Section>

        <Section>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">מה תלמדי בוובינר?</h2>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {whatYouWillLearnItems.map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                   <div className="flex-shrink-0 text-green-400 mt-1">
                        <CheckIcon className="w-6 h-6" />
                    </div>
                    <p className="text-xl text-gray-200">{text}</p>
                </div>
            ))}
          </div>
        </Section>
        
        <Section>
             <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">הבנה דרך סינכרונים אנרגטיים</h3>
            <VideoEmbed vimeoId="1143141484" title="5 סינכרונים" />
        </Section>
        
        <Section>
          <div className="text-center p-8 bg-black/20 rounded-2xl border border-white/10">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">תקשור הוא שפה פנימית</h3>
            <p className="text-xl text-gray-300 leading-loose">
              הוא לא שמור ליחידי סגולה.
              <br />
              הוא נמצא בכולנו.
              <br />
              הרגע שבו מישהו מראה לך את הדרך הוא הרגע שבו משהו נפתח.
            </p>
          </div>
        </Section>

        <Section>
             <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">תובנות דרך חלומות</h3>
            <VideoEmbed vimeoId="1143146785" title="1- חלומות" />
        </Section>

        <Section>
            <div className="bg-indigo-900/20 p-8 rounded-2xl text-center border border-indigo-500/20">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">מה קורה אחרי הוובינר?</h2>
                 <div className="text-lg text-gray-300 space-y-3 leading-relaxed max-w-xl mx-auto">
                    <p>תוכלי להצטרף למסע של תשעה מפגשי עומק.</p>
                    <p>בכל מפגש נכנסים למצב תודעתי עמוק, מתרגלים עם שותפה ומעבירים מסרים.</p>
                    <p className="font-semibold text-white">רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני.</p>
                 </div>
            </div>
        </section>

        <Section>
             <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">הבנה דרך צלילים ומוזיקה</h3>
            <VideoEmbed vimeoId="1143146491" title="2 צלילים ומוזיקה" />
        </Section>
        
        <Section>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">תוצאות של משתתפות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {participantResults.map((text, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                   <p className="text-lg font-medium text-gray-200">{text}</p>
                </div>
            ))}
          </div>
        </Section>

        <Section>
            <VideoEmbed vimeoId="1143175432" title="הכשרת תקשור סיום" />
        </Section>

        <Section className="text-center" id="registration-section">
            <div className="mb-8 p-6 bg-black/20 rounded-2xl border border-white/10 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                    למי שסיים את כל ההדרכה פה מקבל את השיעור הראשון <br/>
                    במקום <s className="text-red-400/80 text-2xl">250₪</s> <span className="font-bold text-cyan-400 text-4xl">120₪</span>
                </p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <CTAButton href={UPAY_LINK} className="text-2xl px-12 py-5">
                    אני רוצה להרשם לשיעור הראשון
                </CTAButton>
                <BitButton href={BITPAY_LINK} />
            </div>
        </Section>
      </main>
      <footer className="text-center p-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}