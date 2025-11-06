import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="mitglied-werden" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Werde Teil der Community
            </h2>
            <p className="mt-4 text-blue-100 text-lg">
              Sichere dir Zugriff auf exklusive Inhalte, Events und ein Netzwerk, das dich durch die Nachfolge begleitet.
            </p>
          </div>
          <div className="flex items-center lg:justify-end">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-blue-700 font-medium shadow-sm hover:bg-blue-50">
              Unverbindlich anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
