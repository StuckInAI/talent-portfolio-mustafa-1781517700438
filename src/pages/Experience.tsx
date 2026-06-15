import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';

export default function Experience() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of building teams"
          description="From boutique agency recruiting to leading in-house TA at scale."
        />

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" aria-hidden />
          <div className="space-y-12">
            {experience.map((item, idx) => (
              <div
                key={item.company}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand ring-4 ring-white" />

                <div
                  className={`pl-12 md:pl-0 [direction:ltr] ${
                    idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="text-sm text-brand font-semibold">{item.period}</div>
                  <h3 className="text-xl font-bold text-ink mt-1">{item.role}</h3>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mt-1 md:justify-end">
                    <Briefcase size={14} />
                    <span>{item.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mt-1 md:justify-end">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="pl-12 md:pl-0 mt-4 md:mt-0 [direction:ltr]">
                  <ul className="space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-brand mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
