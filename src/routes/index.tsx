import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, Facebook, Scissors, Clock, Users, DollarSign, Heart, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import shop1 from "@/assets/shop-interior-1.jpg";
import shop2 from "@/assets/shop-interior-2.jpg";
import cut1 from "@/assets/cut-1.jpg";
import cut2 from "@/assets/cut-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "West End Barbershop - Cuts, Style & Community | Portland, ME" },
      { name: "description", content: "Classic neighborhood barbershop in Portland's West End. Walk-ins welcome. Quality haircuts, beard trims, hot towel shaves at honest prices." },
    ],
  }),
  component: Home,
});

const PHONE = "+12075360936";
const PHONE_DISPLAY = "(207) 536-0936";
const FB = "https://www.facebook.com/share/14eyePcj8d1/?mibextid=wwXIfr";
const ADDRESS = "2 Pine St, Portland, ME 04102";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#hours", label: "Hours" },
];

const SERVICES = [
  { icon: Scissors, title: "Haircuts", desc: "Sharp classic cuts, modern fades, kids' cuts - tailored to your style." },
  { icon: Scissors, title: "Beard Trims", desc: "Clean lines, perfect shape. Keep your beard looking dialed-in." },
  { icon: Scissors, title: "Hot Towel Shaves", desc: "Old-school straight razor shave with hot towel finish. Pure relaxation." },
  { icon: Scissors, title: "Head Shaves", desc: "Smooth, even head shaves done right - clean, comfortable, no nicks." },
];

const WHY = [
  { icon: Users, title: "Walk-Ins Welcome", desc: "No appointment, no problem. Stop in any time during business hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Honest neighborhood prices - quality cuts without the markup." },
  { icon: Heart, title: "Friendly Neighborhood Shop", desc: "Real conversations, real community. You're a neighbor, not a number." },
];

const GALLERY = [
  { src: shop1, alt: "Inside West End Barbershop — barber chairs and streetwear display" },
  { src: cut1, alt: "Tight fade haircut and beard trim at West End Barbershop" },
  { src: shop2, alt: "West End Barbershop station with tools and products" },
  { src: cut2, alt: "Modern mullet cut and beard styling at West End Barbershop" },
];

const REVIEWS = [
  { name: "Aaron Chadbourne", text: "So nice to have a new neighborhood barbershop in the West End of Portland. Love that they're open until 6pm so I can sneak in after work. Awesome cut and beard trim. Heather is a pro with lots of experience. Walk in with no appointment! Will be back often!" },
  { name: "Jessica Jackman", text: "I brought my son here for his first ever haircut. Heather did such an amazing job! Price was very reasonable and parking was a breeze. Highly recommend this establishment!" },
  { name: "Prince Tyrion", text: "Walked in and got a great haircut and some good conversation. Perfect barber shop experience!" },
  { name: "Michael Boudewyns", text: "Heather is fantastic! She's cut my hair since 2017. Plus, she offers the best price for a haircut in town. Amazing hours - open even on Sundays!" },
];

const HOURS = [
  ["Monday", "9:30 AM – 6:00 PM"],
  ["Tuesday", "9:30 AM – 6:00 PM"],
  ["Wednesday", "9:30 AM – 6:00 PM"],
  ["Thursday", "7:30 AM – 6:00 PM"],
  ["Friday", "9:30 AM – 6:00 PM"],
  ["Saturday", "7:30 AM – 3:00 PM"],
  ["Sunday", "7:30 AM – 3:00 PM"],
];

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-in-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useFadeIn();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 h-20 ${
          scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="West End Barbershop" className="h-14 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold uppercase tracking-wider text-silver hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#hours"
              className="px-4 py-2.5 rounded-md bg-[var(--gold)] text-navy-deep font-bold uppercase text-xs tracking-wider hover:brightness-110 transition"
            >
              Walk In Today
            </a>
            <a
              href={`tel:${PHONE}`}
              className="px-4 py-2.5 rounded-md border border-silver/40 text-silver font-bold uppercase text-xs tracking-wider hover:bg-silver hover:text-navy-deep transition flex items-center gap-2"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
          <button
            className="lg:hidden text-silver"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-navy-deep border-t border-silver/10">
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-silver font-semibold uppercase text-sm tracking-wider py-2"
                >
                  {n.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="#hours" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-3 rounded-md bg-[var(--gold)] text-navy-deep font-bold uppercase text-xs tracking-wider">Walk In Today</a>
                <a href={`tel:${PHONE}`} className="flex-1 text-center px-4 py-3 rounded-md border border-silver/40 text-silver font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2"><Phone size={14}/> Call</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 w-full">
            <div className="max-w-2xl">
              <p className="text-gold font-display uppercase tracking-[0.3em] text-sm mb-5">Portland · West End</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] uppercase">
                Classic Cuts.
                <br />
                <span className="text-gradient-silver">Modern Style.</span>
              </h1>
              <p className="mt-6 text-lg text-silver/90 max-w-xl leading-relaxed">
                Cuts, style & community in the heart of the West End. Walk in, sit back, and leave looking sharp.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#hours" className="px-7 py-4 rounded-md bg-[var(--gold)] text-navy-deep font-bold uppercase text-sm tracking-wider hover:brightness-110 transition shadow-glow">
                  Walk In Today
                </a>
                <a href={`tel:${PHONE}`} className="px-7 py-4 rounded-md border-2 border-silver text-silver font-bold uppercase text-sm tracking-wider hover:bg-silver hover:text-navy-deep transition flex items-center gap-2">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 bg-background fade-in-section">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--wood)] font-semibold mb-4">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-navy mb-8">A Shop Built for the Neighborhood</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                West End Barbershop was started by <strong className="text-navy">Heather</strong>, a longtime West End
                resident who wanted to give the neighborhood a place to call its own - somewhere you could grab a quality
                cut without dropping a paycheck.
              </p>
              <p>
                What started as a one-chair vision has grown into a true community spot: a blend of classic barbershop
                tradition and modern streetwear culture. You'll find sneakers and tees on the wall, conversation in the
                air, and the kind of cuts that get people talking.
              </p>
              <p className="text-navy font-semibold italic font-display text-xl pt-2">
                "We're not just cutting hair - we're building a neighborhood."
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 bg-navy-deep text-white fade-in-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">What We Do</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-white">Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group bg-navy border border-silver/15 rounded-lg p-8 hover:border-gold hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition">
                    <s.icon className="text-gold" size={26} />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-white mb-3">{s.title}</h3>
                  <p className="text-silver/80 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-24 bg-background fade-in-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--wood)] font-semibold mb-4">The Difference</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-navy">Why Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {WHY.map((w) => (
                <div key={w.title} className="bg-card rounded-lg p-8 shadow-card border border-border text-center hover:-translate-y-1 transition">
                  <div className="w-16 h-16 rounded-full bg-navy text-gold mx-auto flex items-center justify-center mb-5">
                    <w.icon size={28} />
                  </div>
                  <h3 className="font-display text-xl uppercase text-navy mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-24 bg-muted fade-in-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--wood)] font-semibold mb-4">Step Inside</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-navy">Our Shop & Our Work</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GALLERY.map((g, i) => (
                <div key={i} className="group overflow-hidden rounded-lg aspect-[3/4] shadow-card">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-24 bg-background fade-in-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--wood)] font-semibold mb-4">Real Talk</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-navy">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {REVIEWS.map((r) => (
                <div key={r.name} className="bg-card rounded-lg p-7 shadow-card border border-border hover:-translate-y-1 hover:shadow-lg transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                      <Users size={22} />
                    </div>
                    <div>
                      <p className="font-display text-lg uppercase text-navy">{r.name}</p>
                      <div className="flex gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOURS */}
        <section id="hours" className="py-24 bg-navy-deep text-white fade-in-section">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <Clock className="text-gold mx-auto mb-4" size={36} />
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">Stop By</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-white">Business Hours</h2>
            </div>
            <div className="bg-navy rounded-lg border border-silver/15 overflow-hidden">
              {HOURS.map(([day, time], i) => (
                <div
                  key={day}
                  className={`flex justify-between items-center px-6 sm:px-8 py-4 ${
                    i !== HOURS.length - 1 ? "border-b border-silver/10" : ""
                  }`}
                >
                  <span className="font-display uppercase text-silver tracking-wider">{day}</span>
                  <span className="text-white font-semibold text-sm sm:text-base">{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-[var(--gold)] text-navy-deep font-bold uppercase text-sm tracking-wider hover:brightness-110 transition">
                <Phone size={16}/> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section id="map" className="py-24 bg-background fade-in-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <MapPin className="text-navy mx-auto mb-4" size={36} />
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--wood)] font-semibold mb-4">Visit Us</p>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-navy">{ADDRESS}</h2>
            </div>
            <div className="rounded-lg overflow-hidden shadow-card border border-border aspect-[16/9]">
              <iframe
                title="Map to West End Barbershop"
                src="https://www.google.com/maps?q=2+Pine+St,+Portland,+ME+04102&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-silver pt-16 pb-8 border-t border-silver/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <img src={logo} alt="West End Barbershop" className="h-24 w-auto mb-4" />
              <p className="text-sm leading-relaxed text-silver/70 max-w-xs">
                Classic cuts, modern style, and a neighborhood feel in Portland's West End.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg uppercase text-white mb-4 tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-gold shrink-0 mt-0.5"/>{ADDRESS}</li>
                <li><a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-gold transition"><Phone size={16} className="text-gold"/>{PHONE_DISPLAY}</a></li>
                <li><a href={FB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition"><Facebook size={16} className="text-gold"/>Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg uppercase text-white mb-4 tracking-wider">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-y-2 text-sm">
                {[...NAV, { href: "#map", label: "Find Us" }].map((n) => (
                  <li key={n.href}><a href={n.href} className="hover:text-gold transition">{n.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-silver/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-silver/60">
            <p>© {new Date().getFullYear()} West End Barbershop. All rights reserved.</p>
            <p>Cuts, Style & Community — Portland, Maine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
