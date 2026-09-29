"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "Moving Homes",
    image: "/images/home-moving.jpg",
    description:
      "Safe and reliable residential relocation for houses, apartments and families.",
  },
  {
    title: "Moving Offices",
    image: "/images/office-moving.jpg",
    description:
      "Professional office relocation with careful handling of furniture and equipment.",
  },
  {
    title: "Furniture Delivery",
    image: "/images/loading.jpg",
    description:
      "Reliable transportation and delivery of furniture for homes, offices and businesses.",
  },
  {
    title: "After Moving Cleaning",
    image: "/images/home-moving.jpg",
    description:
      "Convenient cleaning support to leave your old or new space fresh and ready.",
  },
  {
    title: "Loading & Offloading",
    image: "/images/loading.jpg",
    description:
      "Experienced loading and offloading support for heavy furniture, boxes and equipment.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Moving Homes");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const sendQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Royal Movers Ltd,

I would like to request a moving service.

Name: ${name}
Phone: ${phone}
Service: ${service}
Moving Location: ${location}

Message:
${message || "I would like to discuss my moving requirements."}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/256741417077?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* TOP CONTACT BAR */}
      <div className="bg-slate-950 px-5 py-3 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="font-medium">
            Royal Movers Ltd — Your Move • Our Priority
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+256741417077"
              className="transition hover:text-yellow-400"
            >
              +256 741 417 077
            </a>

            <span className="hidden text-slate-500 sm:inline">|</span>

            <a
              href="tel:+256779828724"
              className="transition hover:text-yellow-400"
            >
              +256 779 828 724
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

          <button
            onClick={() => scrollTo("home")}
            className="flex items-center"
            aria-label="Royal Movers Ltd home"
          >
            <img
              src="/royal%20movers.jpg"
              alt="Royal Movers Ltd"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 lg:flex">
            <button
              onClick={() => scrollTo("home")}
              className="font-semibold text-slate-700 transition hover:text-blue-700"
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="font-semibold text-slate-700 transition hover:text-blue-700"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="font-semibold text-slate-700 transition hover:text-blue-700"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("process")}
              className="font-semibold text-slate-700 transition hover:text-blue-700"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="font-semibold text-slate-700 transition hover:text-blue-700"
            >
              Contact
            </button>

            <button
              onClick={() => scrollTo("quote")}
              className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
            >
              Get a Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-300 p-3 lg:hidden"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-slate-900"></span>
              <span className="block h-0.5 w-6 bg-slate-900"></span>
              <span className="block h-0.5 w-6 bg-slate-900"></span>
            </div>
          </button>
        </nav>

        {/* MOBILE NAV */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden">
            <div className="flex flex-col gap-4">

              <button
                onClick={() => scrollTo("home")}
                className="text-left font-semibold text-slate-700"
              >
                Home
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="text-left font-semibold text-slate-700"
              >
                Services
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="text-left font-semibold text-slate-700"
              >
                About
              </button>

              <button
                onClick={() => scrollTo("process")}
                className="text-left font-semibold text-slate-700"
              >
                How It Works
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="text-left font-semibold text-slate-700"
              >
                Contact
              </button>

              <button
                onClick={() => scrollTo("quote")}
                className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white"
              >
                Get a Quote
              </button>

            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-slate-950 text-white"
      >
        <div className="absolute inset-0">
          <img
            src="/images/home-moving.jpg"
            alt="Royal Movers Ltd moving service"
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-slate-950/75"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-yellow-400">
              Royal Movers Ltd
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
              Your Move. Our Priority.
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Professional
              <span className="block text-blue-400">
                Moving & Logistics
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Reliable moving, furniture delivery, loading and offloading
              services for homes, offices and businesses.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => scrollTo("quote")}
                className="rounded-full bg-yellow-500 px-8 py-4 font-black text-slate-950 shadow-xl transition hover:bg-yellow-400"
              >
                Get a Free Quote
              </button>

              <a
                href="https://wa.me/256741417077"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                WhatsApp Us
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <span>✓ Reliable</span>
              <span>✓ Professional</span>
              <span>✓ Careful Handling</span>
            </div>
          </div>

          {/* HERO IMAGE CARD */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="/images/home-moving.jpg"
                alt="Professional movers"
                className="h-[430px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-5 text-slate-950 shadow-2xl sm:left-6">
              <p className="text-2xl font-black text-blue-700">
                ROYAL MOVERS
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Your Move • Our Priority
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-slate-50 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              Moving services you can depend on
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From packing and loading to transportation and delivery,
              Royal Movers Ltd is ready to make your move easier.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 3 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 font-black text-white shadow-lg">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <button
                    onClick={() => scrollTo("quote")}
                    className="mt-5 font-bold text-blue-700 transition hover:text-blue-900"
                  >
                    Request This Service →
                  </button>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-blue-700 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Why Royal Movers
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                We take your move seriously.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Moving can be stressful. Our goal is to provide dependable
                support and careful handling so you can concentrate on what
                matters most.
              </p>

              <button
                onClick={() => scrollTo("quote")}
                className="mt-8 rounded-full bg-yellow-500 px-7 py-4 font-black text-slate-950 transition hover:bg-yellow-400"
              >
                Plan Your Move
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-slate-950">
                  ✓
                </div>

                <h3 className="text-xl font-black">
                  Reliable Service
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  We focus on dependable service from the first conversation
                  to the completion of your move.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-slate-950">
                  ★
                </div>

                <h3 className="text-xl font-black">
                  Professional Approach
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  We approach every moving job with care, organization and
                  attention to your requirements.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-slate-950">
                  ◆
                </div>

                <h3 className="text-xl font-black">
                  Careful Handling
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Furniture, boxes and equipment are handled with attention
                  throughout the moving process.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-slate-950">
                  +
                </div>

                <h3 className="text-xl font-black">
                  Flexible Support
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  From homes and offices to furniture deliveries, we provide
                  support based on your moving needs.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-white px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/loading.jpg"
                alt="Royal Movers Ltd moving and loading service"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-blue-700 px-7 py-6 text-white shadow-xl sm:right-6">
              <p className="text-3xl font-black">
                ROYAL
              </p>

              <p className="text-sm font-semibold uppercase tracking-widest">
                Movers Ltd
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              About Royal Movers Ltd
            </p>

            <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Moving you with care, reliability and professionalism.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Royal Movers Ltd is a professional moving and logistics company
              dedicated to making relocation simple, safe and stress-free for
              individuals, families, offices and businesses.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              From careful loading and transportation to furniture delivery
              and after-moving cleaning, our team is focused on handling your
              property responsibly from the beginning of your move to the end.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-lg font-black text-white">
                  ✓
                </div>

                <h3 className="font-bold text-slate-950">
                  Reliable Service
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We treat every move with responsibility and attention to
                  detail.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 text-lg font-black text-slate-950">
                  ★
                </div>

                <h3 className="font-bold text-slate-950">
                  Professional Team
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Our team is ready to support your home, office and delivery
                  needs.
                </p>
              </div>

            </div>

            <button
              onClick={() => scrollTo("quote")}
              className="mt-8 rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              Request a Moving Quote
            </button>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="bg-slate-50 px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              Simple Process
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              How it works
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Getting started with Royal Movers Ltd is simple.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                01
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Contact Us
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tell us about your moving requirements and preferred service.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-xl font-black text-slate-950">
                02
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Plan Your Move
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We discuss your requirements and organize the moving service.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                03
              </div>

              <h3 className="mt-6 text-2xl font-black">
                We Move You
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Our team helps with your move, delivery, loading and
                offloading needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="bg-slate-950 px-5 py-24 text-white lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
              Get a Quote
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Tell us what you need moved.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Complete the form and send your request directly to Royal
              Movers Ltd on WhatsApp.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <p>
                <span className="font-bold text-white">
                  Phone:
                </span>{" "}
                +256 741 417 077
              </p>

              <p>
                <span className="font-bold text-white">
                  Alternative:
                </span>{" "}
                +256 779 828 724
              </p>

              <p>
                <span className="font-bold text-white">
                  WhatsApp:
                </span>{" "}
                +256 741 417 077
              </p>
            </div>
          </div>

          <form
            onSubmit={sendQuote}
            className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl sm:p-9"
          >
            <div className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+256..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold"
                >
                  Service Needed
                </label>

                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Moving Homes</option>
                  <option>Moving Offices</option>
                  <option>Furniture Delivery</option>
                  <option>After Moving Cleaning</option>
                  <option>Loading & Offloading</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-bold"
                >
                  Moving Location
                </label>

                <input
                  id="location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Example: Kampala to Wakiso"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Additional Details
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your move..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-6 py-4 font-black text-white shadow-lg transition hover:bg-blue-800"
              >
                Send Quote Request on WhatsApp
              </button>

            </div>
          </form>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-white px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              Contact Royal Movers
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              Ready to move?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Contact us today and let us help you plan your move.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <a
              href="tel:+256741417077"
              className="rounded-3xl bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                ☎
              </div>

              <h3 className="mt-5 text-xl font-black">
                Call Us
              </h3>

              <p className="mt-2 text-slate-600">
                +256 741 417 077
              </p>
            </a>

            <a
              href="tel:+256779828724"
              className="rounded-3xl bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-black text-slate-950">
                ☎
              </div>

              <h3 className="mt-5 text-xl font-black">
                Alternative Number
              </h3>

              <p className="mt-2 text-slate-600">
                +256 779 828 724
              </p>
            </a>

            <a
              href="https://wa.me/256741417077"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-slate-50 p-8 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">
                W
              </div>

              <h3 className="mt-5 text-xl font-black">
                WhatsApp
              </h3>

              <p className="mt-2 text-slate-600">
                Chat with Royal Movers
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <img
                src="/royal%20movers.jpg"
                alt="Royal Movers Ltd"
                className="h-24 w-auto object-contain"
              />

              <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Professional moving and logistics services for homes,
                offices and businesses.
              </p>

              <p className="mt-4 font-bold text-yellow-400">
                Your Move • Our Priority
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-slate-400">

                <button
                  onClick={() => scrollTo("home")}
                  className="text-left transition hover:text-white"
                >
                  Home
                </button>

                <button
                  onClick={() => scrollTo("services")}
                  className="text-left transition hover:text-white"
                >
                  Services
                </button>

                <button
                  onClick={() => scrollTo("about")}
                  className="text-left transition hover:text-white"
                >
                  About
                </button>

                <button
                  onClick={() => scrollTo("quote")}
                  className="text-left transition hover:text-white"
                >
                  Get a Quote
                </button>

              </div>
            </div>

            <div>
              <h3 className="text-lg font-black">
                Contact
              </h3>

              <div className="mt-5 space-y-3 text-slate-400">

                <p>
                  +256 741 417 077
                </p>

                <p>
                  +256 779 828 724
                </p>

                <a
                  href="https://wa.me/256741417077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  WhatsApp Us
                </a>

              </div>
            </div>

          </div>

          <div className="mt-12 border-t border-slate-800 pt-7 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Royal Movers Ltd. All rights reserved.
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/256741417077"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Royal Movers Ltd on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        W
      </a>

    </main>
  );
}