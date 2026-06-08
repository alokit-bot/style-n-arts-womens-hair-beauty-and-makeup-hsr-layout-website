import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  CalendarCheck,
  ChevronRight,
  Clock,
  Flower2,
  Heart,
  MapPin,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import './styles.css';

const phone = '+917760711425';
const displayPhone = '+91 77607 11425';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Style%20n%20Arts%20Women%27s%20hair%20Beauty%20and%20Makeup%20HSR%20Layout%20Bengaluru';

const serviceGroups = {
  Hair: [
    ['Haircut & Style', 'Wash, cut and blow finish', '₹499+'],
    ['Hair Spa', 'Nourishing care for dry or stressed hair', '₹999+'],
    ['Smooth Finish', 'Frizz-control and polished styling consult', '₹2,499+'],
  ],
  Beauty: [
    ['Facial Cleanup', 'Glow-focused skin refresh', '₹699+'],
    ['Threading & Waxing', 'Everyday grooming essentials', '₹99+'],
    ['Manicure / Pedicure', 'Clean, relaxed hand and foot care', '₹799+'],
  ],
  Makeup: [
    ['Party Makeup', 'Fresh, camera-ready finish for events', '₹2,499+'],
    ['Engagement Look', 'Consulted look with hair styling support', '₹4,999+'],
    ['Bridal Trial', 'Discuss your look, drape and timing plan', 'Call'],
  ],
  Packages: [
    ['Self-Care Combo', 'Cleanup, threading and blow dry', '₹1,499+'],
    ['Event Ready', 'Hair styling with party makeup', '₹3,499+'],
    ['Hair + Beauty Day', 'Salon care planned around your schedule', 'Call'],
  ],
};

const occasions = ['Workday polish', 'Party glam', 'Bridal trials', 'Travel-ready grooming'];

const gallery = [
  ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80', 'Hair styling chair'],
  ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80', 'Makeup detail'],
  ['https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80', 'Salon finish'],
];

function App() {
  const [active, setActive] = useState('Hair');

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Style n Arts home">
          <span className="brandMark">S</span>
          <span>
            <strong>Style n Arts</strong>
            <small>HSR Layout</small>
          </span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#occasions">Occasions</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="callButton" href={`tel:${phone}`}>
          <Phone size={17} /> Call
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <div className="ratingPill">
              <Star size={16} fill="currentColor" /> 4.9 on Google <span>1,700+ reviews</span>
            </div>
            <h1>
              Hair, Beauty & Makeup <span>made for you, in HSR Layout.</span>
            </h1>
            <p>
              A trusted women&apos;s salon on ITI Layout Main Road for quick touch-ups,
              self-care days, party looks and bridal trials.
            </p>
            <div className="heroActions">
              <a className="primaryAction" href={`tel:${phone}`}>
                <Phone size={18} /> Call to Book {displayPhone}
              </a>
              <a className="secondaryAction" href={mapsUrl}>
                <MapPin size={18} /> Get Directions
              </a>
            </div>
            <div className="quickFacts">
              <Fact icon={<Clock />} label="Open Today" value="10 AM - 8:30 PM" />
              <Fact icon={<Heart />} label="For" value="Women only" />
              <Fact icon={<MapPin />} label="Locate" value="HSR Layout" />
            </div>
          </div>
          <div className="heroImage">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80"
              alt="Style n Arts salon interior in HSR Layout"
            />
            <div className="imageCard">
              <span>Style n Arts</span>
              <a href={`tel:${phone}`}>Book a Slot</a>
            </div>
          </div>
        </section>

        <section className="trustBand" aria-label="Salon highlights">
          <span><Star size={17} /> 4.9★ rated on Google</span>
          <span><Sparkles size={17} /> 1,700+ happy reviews</span>
          <span><MapPin size={17} /> ITI Layout Main Road</span>
          <span><ShieldCheck size={17} /> Hygienic, sanitised tools</span>
        </section>

        <section className="section" id="services">
          <div className="sectionHead">
            <small>Our Menu</small>
            <h2>Services for hair, skin and the big day.</h2>
            <p>Indicative starting prices in ₹. Final pricing depends on length, technique and products.</p>
          </div>
          <div className="tabs" role="tablist" aria-label="Service categories">
            {Object.keys(serviceGroups).map((name) => (
              <button
                key={name}
                className={active === name ? 'active' : ''}
                onClick={() => setActive(name)}
                type="button"
              >
                {name}
              </button>
            ))}
          </div>
          <div className="serviceGrid">
            {serviceGroups[active].map(([title, desc, price]) => (
              <article className="serviceCard" key={title}>
                <div>
                  <Scissors size={19} />
                  <h3>{title}</h3>
                </div>
                <p>{desc}</p>
                <strong>{price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="occasionBlock" id="occasions">
          <div>
            <small>Occasions</small>
            <h2>From everyday grooming to event-ready looks.</h2>
            <p>
              Book a quick appointment, plan a party look, or talk through a bridal trial.
              The site keeps every action direct: call or get directions.
            </p>
          </div>
          <div className="occasionList">
            {occasions.map((item) => (
              <span key={item}><ChevronRight size={17} /> {item}</span>
            ))}
          </div>
        </section>

        <section className="section why">
          <div className="sectionHead">
            <small>Why Visit</small>
            <h2>A calm, appointment-friendly salon experience.</h2>
          </div>
          <div className="whyGrid">
            <Reason icon={<CalendarCheck />} title="Easy to book" text="Tap to call and confirm the right slot before you visit." />
            <Reason icon={<ShieldCheck />} title="Care-led service" text="Clear categories, hygienic tools and service guidance." />
            <Reason icon={<Flower2 />} title="Women-focused" text="Hair, beauty and makeup services designed around women&apos;s routines." />
          </div>
        </section>

        <section className="gallery" aria-label="Salon gallery">
          {gallery.map(([src, alt]) => (
            <img key={src} src={src} alt={alt} />
          ))}
        </section>

        <section className="contact" id="contact">
          <div>
            <small>Contact</small>
            <h2>Call before you visit.</h2>
            <p>Style n Arts Women&apos;s hair, Beauty and Makeup, ITI Layout Main Road, HSR Layout, Bengaluru.</p>
            <div className="contactActions">
              <a className="primaryAction" href={`tel:${phone}`}>
                <Phone size={18} /> {displayPhone}
              </a>
              <a className="secondaryAction" href={mapsUrl}>
                <MapPin size={18} /> Open in Maps
              </a>
            </div>
          </div>
          <iframe
            title="Style n Arts map"
            src="https://www.google.com/maps?q=Style%20n%20Arts%20Women%27s%20hair%20Beauty%20and%20Makeup%20HSR%20Layout%20Bengaluru&output=embed"
            loading="lazy"
          />
        </section>
      </main>

      <footer>
        <strong>Style n Arts</strong>
        <span>Women&apos;s Hair, Beauty & Makeup - HSR Layout</span>
      </footer>

      <div className="mobileBar">
        <a href={`tel:${phone}`}><Phone size={17} /> Call</a>
        <a href={mapsUrl}><MapPin size={17} /> Directions</a>
      </div>
    </div>
  );
}

function Fact({ icon, label, value }) {
  return (
    <div className="fact">
      {React.cloneElement(icon, { size: 19 })}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Reason({ icon, title, text }) {
  return (
    <article className="reason">
      {React.cloneElement(icon, { size: 24 })}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

createRoot(document.getElementById('root')).render(<App />);
