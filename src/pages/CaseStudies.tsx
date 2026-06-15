import { useState } from 'react';
import { caseStudies } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

export default function CaseStudies() {
  const [active, setActive] = useState<number>(0);
  const cs = caseStudies[active];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Case studies"
          title="Selected work"
          description="A few examples of how I&apos;ve approached complex talent challenges and the outcomes we drove together."
        />

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-8">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {caseStudies.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                className={clsx(
                  'text-left p-4 rounded-lg border transition flex-shrink-0 md:w-full',
                  i === active
                    ? 'border-brand bg-teal-50 text-ink'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                )}
              >
                <div className="text-xs text-slate-500 mb-1">{c.company}</div>
                <div className="font-semibold text-sm flex items-center justify-between gap-2">
                  <span>{c.title}</span>
                  {i === active && <ChevronRight size={14} className="text-brand" />}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-sm text-brand font-semibold">{cs.company}</div>
            <h3 className="text-2xl font-bold text-ink mt-1">{cs.title}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {cs.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-lg bg-slate-50">
                  <div className="text-xl font-bold text-brand">{m.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Challenge</h4>
              <p className="text-slate-700">{cs.challenge}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Approach</h4>
              <ul className="space-y-2">
                {cs.approach.map((step, i) => (
                  <li key={step} className="flex gap-3 text-slate-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-5 rounded-lg bg-gradient-to-br from-brand to-brand-dark text-white">
              <h4 className="text-xs uppercase tracking-widest text-teal-100 font-semibold mb-1">Result</h4>
              <p>{cs.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
