import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import { profile, stats, testimonials } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-brand text-xs font-medium mb-5">
              <Sparkles size={14} /> Currently open to new opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
              Hi, I&apos;m {profile.name.split(' ')[0]}. <br />
              <span className="text-brand">{profile.role}.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-white font-medium hover:bg-brand-dark transition"
              >
                View my work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-ink font-medium hover:border-brand hover:text-brand transition"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/20 rounded-full blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-brand/20 shadow-sm"
                />
                <div>
                  <div className="font-semibold text-ink">{profile.name}</div>
                  <div className="text-sm text-slate-500">{profile.location}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-lg bg-slate-50">
                    <div className="text-2xl font-bold text-brand">{s.value}</div>
                    <div className="text-xs text-slate-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="What I do"
            title="Talent strategy that drives business outcomes"
            description="I partner with founders and executive teams to design hiring engines that scale — without sacrificing quality, culture, or candidate experience."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Target,
                title: 'Executive & Leadership Search',
                body: 'Closed VP and C-suite roles across engineering, product, and GTM with rigor and discretion.',
              },
              {
                icon: TrendingUp,
                title: 'Hiring at Scale',
                body: 'Built recruiting engines that doubled headcount in 12 months while improving offer-accept rates.',
              },
              {
                icon: Users,
                title: 'Inclusive Hiring',
                body: 'Designed DEI sourcing programs that meaningfully shifted representation in leadership.',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-xl border border-slate-200 hover:border-brand hover:shadow-md transition bg-white"
                >
                  <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-ink text-lg">{card.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-mist">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Kind words"
            title="What leaders say"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t) => (
              <figure key={t.author} className="p-6 rounded-xl bg-white border border-slate-200">
                <blockquote className="text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 pt-4 border-t border-slate-100">
                  <div className="font-semibold text-ink text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s build your next great team.</h2>
          <p className="mt-3 text-teal-50">
            Whether you&apos;re scaling, restructuring, or hiring your first leadership team — I can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-md bg-white text-brand font-medium hover:bg-slate-100 transition"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
