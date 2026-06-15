import { profile, skills } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';
import { Award, BookOpen, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 items-center mb-12">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-3 bg-gradient-to-br from-brand/30 to-accent/20 rounded-2xl blur-xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-56 h-56 md:w-60 md:h-60 rounded-2xl object-cover shadow-xl border-4 border-white"
            />
          </div>
          <SectionHeader
            eyebrow="About me"
            title="People-first. Data-informed. Results-obsessed."
            description={profile.summary}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <Award className="text-brand mb-3" />
            <h3 className="font-semibold text-ink">Recognition</h3>
            <p className="text-sm text-slate-600 mt-2">
              SHRM-CP certified. Featured speaker at TA Week 2023. President&apos;s Club recruiter for 3 years.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <BookOpen className="text-brand mb-3" />
            <h3 className="font-semibold text-ink">Education</h3>
            <p className="text-sm text-slate-600 mt-2">
              B.A. Organizational Psychology, UC Berkeley. Coursework in workforce analytics at MIT Sloan Exec Ed.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <Globe className="text-brand mb-3" />
            <h3 className="font-semibold text-ink">Reach</h3>
            <p className="text-sm text-slate-600 mt-2">
              Built hiring programs across North America, EMEA, and APAC. Comfortable in distributed-team environments.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-ink">Core skills</h3>
            <p className="text-slate-600 mt-2 text-sm">
              A blend of strategy, operations, and human craft — sharpened over a decade.
            </p>
          </div>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-ink font-medium">{skill.name}</span>
                  <span className="text-slate-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white">
          <h3 className="text-2xl font-bold">My philosophy</h3>
          <p className="mt-3 text-teal-50 max-w-3xl leading-relaxed">
            Great hiring is a craft — not a transaction. Every candidate deserves a thoughtful, respectful process,
            and every hiring manager deserves a partner who challenges them. The best teams aren&apos;t found, they&apos;re
            built — through clear strategy, intentional sourcing, and a relentless focus on candidate experience.
          </p>
        </div>
      </div>
    </div>
  );
}
