import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-1/2 h-72 w-[120%] translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/50 via-indigo-200/40 to-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              <Star className="h-3.5 w-3.5" /> Für den Mittelstand gemacht
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Die Community für erfolgreiche Unternehmensnachfolge
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Wir verbinden Unternehmer:innen, Nachfolger:innen und Expert:innen. Mit Wissen, Erfahrungsaustausch und echten Kontakten machen wir Nachfolge planbar – menschlich, digital und praxisnah.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#mitglied-werden" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">
                Jetzt Mitglied werden
              </a>
              <a href="#wissen" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">
                Mehr erfahren
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-blue-600"/> Praxiserprobte Leitfäden</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-blue-600"/> Moderierte Foren</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-2 shadow-inner">
              <div className="h-full w-full rounded-lg bg-white shadow-sm flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop" alt="Community" className="h-full w-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
