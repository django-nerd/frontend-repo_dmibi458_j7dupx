import { Shield, Users, Lightbulb, Calendar } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Sicher durch den Prozess',
    desc: 'Checklisten, Vorlagen und Best Practices begleiten dich von der Idee bis zur Übergabe.'
  },
  {
    icon: Users,
    title: 'Starke Community',
    desc: 'Austausch auf Augenhöhe mit Unternehmer:innen, Nachfolger:innen und Expert:innen.'
  },
  {
    icon: Lightbulb,
    title: 'Wissen kompakt',
    desc: 'Kurz, klar und anwendbar: Artikel, Kurse und Case Studies aus der Praxis.'
  },
  {
    icon: Calendar,
    title: 'Events & Sprechstunden',
    desc: 'Regelmäßige Formate online und vor Ort – mit echten Kontakten, nicht nur Likes.'
  }
];

export default function Benefits() {
  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Warum Mitglied werden?</h2>
          <p className="mt-3 text-gray-600">Nachfolge ist komplex. Gemeinsam wird sie einfacher. Unsere Community bietet dir Struktur, Impulse und Menschen, die schon da waren, wo du hinwillst.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
