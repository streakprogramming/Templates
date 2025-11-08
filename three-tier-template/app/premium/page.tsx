"use client";

import { useMemo, useState } from "react";
import Protected from "@/components/Protected";

type LanguageCode = "EN" | "TR" | "AZ";

const translations: Record<LanguageCode, {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutBody: string;
  servicesTitle: string;
  services: string[];
  galleryTitle: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  contactTitle: string;
  contactBody: string;
}> = {
  EN: {
    heroTitle: "Premium Digital Suite",
    heroSubtitle:
      "A polished ecosystem for enterprises, featuring layered storytelling and immersive visuals.",
    aboutTitle: "About the Premium Experience",
    aboutBody:
      "Premium is ideal for brands who need an editorial-grade digital presence. Combine long-form storytelling, custom illustrations, and modular page templates for campaigns, resources, and product launches.",
    servicesTitle: "What we deliver",
    services: [
      "Strategy & research",
      "UX architecture",
      "Design systems",
      "Interactive storytelling",
      "Content migrations",
      "Performance optimization",
    ],
    galleryTitle: "Gallery Preview",
    faqTitle: "Questions, answered",
    faq: [
      {
        q: "How many pages are included?",
        a: "We plan for 10+ unique layouts, expandable with reusable sections.",
      },
      {
        q: "Do you handle localization?",
        a: "Yes, we support multi-language workflows and translation management.",
      },
      {
        q: "What about animations?",
        a: "Micro-interactions and scroll-based storytelling are part of the package.",
      },
      {
        q: "Can you integrate CMS platforms?",
        a: "We integrate with headless CMS options like Contentful or Sanity.",
      },
      {
        q: "Is support included?",
        a: "A dedicated success manager and roadmap workshops are included for 90 days.",
      },
    ],
    contactTitle: "Partner with us",
    contactBody:
      "Tell us about your roadmap, audience, and KPIs. We will co-create a premium experience tailored to your team.",
  },
  TR: {
    heroTitle: "Premium Dijital Paket",
    heroSubtitle:
      "Katmanlı anlatım ve etkileyici görsellerle işletmeler için kusursuz bir deneyim.",
    aboutTitle: "Premium Deneyimi Hakkında",
    aboutBody:
      "Premium, editoryal düzeyde dijital bir vitrine ihtiyaç duyan markalar için idealdir. Uzun formlu hikaye anlatımı, özel illüstrasyonlar ve kampanyalar için modüler sayfalar sunar.",
    servicesTitle: "Teslimatlar",
    services: [
      "Strateji ve araştırma",
      "UX mimarisi",
      "Tasarım sistemleri",
      "Etkileşimli hikaye",
      "İçerik taşıma",
      "Performans optimizasyonu",
    ],
    galleryTitle: "Galeri Önizlemesi",
    faqTitle: "Sorular ve cevaplar",
    faq: [
      {
        q: "Kaç sayfa dahil?",
        a: "10'dan fazla benzersiz yerleşim planlanır ve tekrar kullanılabilir bölümlerle genişletilebilir.",
      },
      {
        q: "Yerelleştirme yapıyor musunuz?",
        a: "Evet, çok dilli iş akışlarını ve çeviri yönetimini destekliyoruz.",
      },
      {
        q: "Animasyonlar var mı?",
        a: "Mikro etkileşimler ve kaydırmaya dayalı hikaye anlatımı pakete dahildir.",
      },
      {
        q: "CMS entegrasyonları mümkün mü?",
        a: "Contentful veya Sanity gibi headless CMS çözümleriyle entegre oluyoruz.",
      },
      {
        q: "Destek sağlanıyor mu?",
        a: "90 gün boyunca özel başarı yöneticisi ve yol haritası atölyeleri sunuyoruz.",
      },
    ],
    contactTitle: "Birlikte çalışalım",
    contactBody:
      "Yol haritanız, kitleniz ve hedefleriniz hakkında bilgi verin. Ekibiniz için premium bir deneyim oluşturalım.",
  },
  AZ: {
    heroTitle: "Premium Rəqəmsal Paket",
    heroSubtitle:
      "Şirkətlər üçün mərhələli hekayəçilik və cəlbedici vizuallarla yüksək səviyyəli təcrübə.",
    aboutTitle: "Premium Təcrübə haqqında",
    aboutBody:
      "Premium, redaksiya səviyyəsində rəqəmsal vitrinə ehtiyacı olan brendlər üçün uyğundur. Uzun mətnli hekayəçilik, xüsusi illüstrasiyalar və kampaniyalar üçün modul səhifələr təqdim edir.",
    servicesTitle: "Təqdim etdiklərimiz",
    services: [
      "Strategiya və araşdırma",
      "UX memarlığı",
      "Dizayn sistemləri",
      "İnteraktiv hekayə",
      "Məzmun köçürülməsi",
      "Performans optimizasiyası",
    ],
    galleryTitle: "Qalereya Ön Baxış",
    faqTitle: "Suallar və cavablar",
    faq: [
      {
        q: "Neçə səhifə daxildir?",
        a: "10-dan çox unikal tərtibat planlaşdırılır və təkrar istifadə olunan bölmələrlə genişləndirilir.",
      },
      {
        q: "Lokallaşdırma edirsinizmi?",
        a: "Bəli, çoxdilli iş axınlarını və tərcümə idarəçiliyini dəstəkləyirik.",
      },
      {
        q: "Animasiya varmı?",
        a: "Mikro qarşılıqlı əlaqələr və scroll əsaslı hekayəçilik paketə daxildir.",
      },
      {
        q: "CMS inteqrasiyası mümkündürmü?",
        a: "Contentful və ya Sanity kimi headless CMS həlləri ilə inteqrasiya edirik.",
      },
      {
        q: "Dəstək verilir?",
        a: "90 gün ərzində xüsusi uğur meneceri və yol xəritəsi sessiyaları təqdim edirik.",
      },
    ],
    contactTitle: "Əməkdaşlıq edək",
    contactBody:
      "Planlarınızı, auditoriyanızı və hədəflərinizi paylaşın. Komandanız üçün premium təcrübə quraq.",
  },
};

export default function PremiumPage() {
  const [language, setLanguage] = useState<LanguageCode>("EN");
  const content = useMemo(() => translations[language], [language]);

  return (
    <Protected>
      <div className="space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-slate-900 via-indigo-900/40 to-slate-950 p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl font-bold text-indigo-100 sm:text-5xl">{content.heroTitle}</h1>
              <p className="text-lg text-indigo-200/90">{content.heroSubtitle}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-200" htmlFor="language">
                Language
              </label>
              <select
                id="language"
                className="rounded-full border border-indigo-400/60 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-indigo-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={language}
                onChange={(event) => setLanguage(event.target.value as LanguageCode)}
              >
                <option value="EN">EN</option>
                <option value="TR">TR</option>
                <option value="AZ">AZ</option>
              </select>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-200">{content.aboutTitle}</h2>
            <p className="mt-4 text-slate-300">{content.aboutBody}</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              "We partner closely with in-house teams to launch premium experiences that scale across campaigns."
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              "Dedicated workshops align leadership, marketing, and product stakeholders on a unified journey."
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-200">{content.servicesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {content.services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm font-medium text-slate-200 shadow-lg"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-200">{content.galleryTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl border border-slate-800 bg-slate-900/60"
              >
                <div className="flex h-full items-center justify-center text-sm text-slate-500">
                  Placeholder {index + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-200">{content.faqTitle}</h2>
          <div className="space-y-3">
            {content.faq.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-100">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-500/40 bg-indigo-500/10 p-10">
          <h2 className="text-2xl font-semibold text-indigo-200">{content.contactTitle}</h2>
          <p className="mt-3 max-w-3xl text-slate-200">{content.contactBody}</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Name"
              type="text"
            />
            <input
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="md:col-span-2 h-32 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Share your timeline and goals"
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-400"
            >
              Request consultation
            </button>
          </form>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Streak Programming. All rights reserved.</span>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="#">
              Twitter
            </a>
            <a className="transition hover:text-white" href="#">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </Protected>
  );
}
