import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, Camera, Phone, Mail, MapPin, Clock, ShieldCheck, 
  FileText, Star, ChevronRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Updated images from curated online sources
const HERO_BG =
  "https://gehealthcare-ultrasound.com/media/_processed_/e/a/csm_Versana_essential_header_image_cf822698e9.png"; // GE HealthCare Versana Essential hero
const USG_IMG =
  "https://gehealthcare-ultrasound.com/media/ultrasound/Products/Versana/Versana_Essential/Webseite_Highlight__9_.png"; // GE HealthCare Versana Essential product
const XRAY_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Dedicated_chest_x-ray_room.jpg"; // Wikimedia Commons: Dedicated chest radiography room (CC BY-SA 4.0)

// Sliding strip images
const BANNER_IMAGES = [
  "https://gehealthcare-ultrasound.com/media/_processed_/e/a/csm_Versana_essential_header_image_cf822698e9.png",
  "https://gehealthcare-ultrasound.com/media/_processed_/3/7/csm_product-media-carousel-4C-RS-BPD-desktop__1__8a041c1c84.jpg", // OB/GYN: BPD with SonoBiometry (GE HealthCare)
  "https://gehealthcare-ultrasound.com/media/ultrasound/Products/Versana/Versana_Essential/Webseite_Highlight__9_.png",
  "https://gehealthcare-ultrasound.com/media/_processed_/0/b/csm_Patellar_Tendon_%E2%80%93_L6-12-RS_927afa5444.png",
  "https://gehealthcare-ultrasound.com/media/_processed_/0/f/csm_Abdomen__Pancreas_%E2%80%93_8C-RS_78103d1795.png",
  "https://gehealthcare-ultrasound.com/media/_processed_/e/2/csm_Abdominal_Aorta_B_Flow_Color_%E2%80%93_4C-RS_1f0f57549b.png",
  "https://gehealthcare-ultrasound.com/media/_processed_/f/6/csm_Thyroid_Follow_Up_Tool_%E2%80%93_L6-12-RS_2bbc8df76e.png"
];

export default function MalwaDiagnosticImaging() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Bar */}
      <div className="w-full bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><Phone size={16}/> <a href="tel:+918198800260" className="hover:underline">+91 81988 00260</a></span>
            <span className="hidden md:inline-flex items-center gap-2"><Mail size={16}/> <a href="mailto:astradiagnosticsxray@gmail.com" className="hover:underline">astradiagnosticsxray@gmail.com</a></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><MapPin size={16}/> New Vijay Nagar, near Tajpur Road, Ludhiana 141007</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">Malwa Diagnostic Imaging</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
              <a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a>
              <a href="#technology" className="hover:text-slate-900 text-slate-600">Technology</a>
              <a href="#doctors" className="hover:text-slate-900 text-slate-600">Team</a>
              <a href="#gallery" className="hover:text-slate-900 text-slate-600">Gallery</a>
              <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button asChild className="rounded-2xl px-4">
                <a href="https://wa.me/918198800260" target="_blank" rel="noreferrer">WhatsApp Appointment</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with sliding banner */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Versana Essential ultrasound — clinic" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-slate-900/60"/>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 text-white">
          <motion.h1
            initial={{opacity:0, y: 20}}
            animate={{opacity:1, y: 0}}
            transition={{duration:0.6}}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Trusted Ultrasound & Digital X-Ray Centre in Ludhiana
          </motion.h1>
          <p className="mt-4 max-w-2xl text-slate-100/90">
            High-quality imaging, quick reports, and compassionate care. NABL-style workflow and clinician-friendly, structured reporting.
          </p>
          {/* Sliding banner */}
          <div className="mt-8 overflow-hidden">
            <motion.div
              className="flex gap-4 animate-slide"
              initial={{x: 0}}
              animate={{x: [0, -800]}}
              transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            >
              {BANNER_IMAGES.concat(BANNER_IMAGES).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Banner ${idx}`} loading="lazy"
                  className="h-40 w-auto rounded-xl shadow object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Ultrasound Services</h2>
            <p className="mt-3 text-slate-600">Focused expertise with clear, clinician‑friendly reports.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Color Doppler */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Stethoscope/> Color Doppler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <ul className="space-y-2">
                  {[
                    "Carotid & vertebral Doppler",
                    "Peripheral arterial/venous Doppler (DVT)",
                    "Renal & portal venous Doppler",
                    "Obstetric Doppler (UA/MCA/CPR)",
                  ].map((i)=> (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> {i}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-xl w-full mt-3">
                  <a href="https://wa.me/918198800260" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center">Book Doppler <ChevronRight className="ml-1" size={16}/></a>
                </Button>
              </CardContent>
            </Card>

            {/* Small Parts */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Camera/> Small Parts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <ul className="space-y-2">
                  {[
                    "Breast ultrasound",
                    "Thyroid & neck nodes",
                    "Scrotum & inguinal region",
                    "MSK: tendons, ligaments, lumps",
                  ].map((i)=> (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> {i}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-xl w-full mt-3">
                  <a href="https://wa.me/918198800260" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center">Book Small Parts <ChevronRight className="ml-1" size={16}/></a>
                </Button>
              </CardContent>
            </Card>

            {/* Thyroid */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><FileText/> Thyroid Ultrasound</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <ul className="space-y-2">
                  {[
                    "TI‑RADS structured reporting",
                    "Vascularity assessment (Color Doppler)",
                    "Cystic vs solid nodule characterization",
                    "FNAC guidance (on request)",
                  ].map((i)=> (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> {i}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-xl w-full mt-3">
                  <a href="https://wa.me/918198800260" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center">Book Thyroid USG <ChevronRight className="ml-1" size={16}/></a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      {/* Prep & Pricing */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Preparation & Pricing</h2>
            <p className="mt-3 text-slate-600">Simple prep. Transparent rates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Prep */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Preparation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> <span>Fasting: <span className="font-semibold">6 hours</span> for abdomen/KUB scans unless advised otherwise.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Bring previous reports/prescription and a valid ID.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> Hydrate normally unless told otherwise.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="md:col-span-2 rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Price List</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center justify-between rounded-xl border p-3"><span>USG (Ultrasound)</span><span className="font-semibold">₹800</span></div>
                  <div className="flex items-center justify-between rounded-xl border p-3"><span>Color Doppler (Single Vessel)</span><span className="font-semibold">₹1,500</span></div>
                  <div className="flex items-center justify-between rounded-xl border p-3"><span>Level II Obstetric Ultrasound</span><span className="font-semibold">₹2,200</span></div>
                  <div className="flex items-center justify-between rounded-xl border p-3"><span>FWB (Fetal Well‑Being)</span><span className="font-semibold">₹1,000</span></div>
                </div>
                <p className="text-xs text-slate-500 mt-3">* Includes report. Govt. ID may be required for certain studies. Prices subject to change; confirm at reception.</p>
                <div className="flex gap-3 mt-4">
                  <Button asChild className="rounded-2xl"><a href="https://wa.me/918198800260" target="_blank" rel="noreferrer">Book on WhatsApp</a></Button>
                  <Button asChild variant="outline" className="rounded-2xl"><a href="tel:+918198800260">Call to Confirm</a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Advanced Technology</h2>
            <p className="mt-3 text-slate-600">Modern, radiation-safe, and patient-centric setup.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <Feature title="High-resolution Ultrasound" points={["Color Doppler & 3D/4D ready","High-frequency linear probe for MSK/small parts","Obstetric presets with biometric charts"]} />
              <Feature title="Fully Digital X-ray" points={["Low-dose, fast processing","Crystal-clear images & cloud sharing","All standard and special views"]} />
              <Feature title="Clean & Comfortable" points={["Trained staff & female chaperone on request","Strict sanitization protocols","Accessible ground-floor location"]} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={USG_IMG} alt="Ultrasound machine" loading="lazy" className="rounded-2xl shadow object-cover h-48 w-full"/>
              <img src={XRAY_IMG} alt="Digital X‑ray suite" loading="lazy" className="rounded-2xl shadow object-cover h-48 w-full"/>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Clinic Gallery</h2>
            <p className="mt-3 text-slate-600">A quick look at our setup and ambience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[HERO_BG, USG_IMG, XRAY_IMG].map((src, idx)=> (
              <motion.img
                key={idx}
                src={src}
                alt={`Gallery ${idx+1}`} loading="lazy"
                initial={{opacity:0, y: 10}}
                whileInView={{opacity:1, y: 0}}
                viewport={{once:true}}
                transition={{duration:0.5}}
                className="h-56 w-full object-cover rounded-2xl shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Credits */}
      <div className="py-6 text-center text-xs text-slate-500">
        Versana images © GE HealthCare. Used here for illustrative purposes. X‑ray room photo by <a className="underline" href="https://commons.wikimedia.org/wiki/User:Ptrump16" target="_blank" rel="noreferrer">Ptrump16</a> via <a className="underline" href="https://commons.wikimedia.org/wiki/File:Dedicated_chest_x-ray_room.jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a> (CC BY‑SA 4.0).
      </div>
    </div>
  );
}

function Feature({title, points}:{title:string; points:string[]}){
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="font-semibold text-slate-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {points.map((p)=> (
          <li key={p} className="flex gap-2"><CheckCircle2 className="mt-0.5" size={18}/> {p}</li>
        ))}
      </ul>
    </div>
  );
}

/* Tailwind CSS animation class for sliding */
// In your global.css or Tailwind config, add:
// .animate-slide {
//   display: flex;
//   animation: slide 20s linear infinite;
// }
// @keyframes slide {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
