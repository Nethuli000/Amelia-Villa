import { useEffect } from "react";
import "./App.css";
import Gallery from "./gallery";
import WhatsAppButton from "./WhatsAppButton";


function App() {

  useEffect(() => {
    const btn = document.querySelector(".whatsapp-btn");
    const onScroll = () => {
      btn?.classList.toggle("scrolled", window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const href = link.getAttribute("href"); // e.g. "#about"
            link.classList.toggle(
              "nav-link--active",
              href === `#${entry.target.id}`
            );
          });
        }
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px", // triggers when section is in the middle third of the viewport
      threshold: 0,
    }
  );

  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}, []);

  return (
    <div>
      <nav id="navbar">
        <a className="nav-logo" href="#home">
          <img src="/logo.ico" alt="Amelia Villa" />
          <div className="logotext">
            Amelia Villa <span>Dondra ~ Sri Lanka</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>

        
        <a  href="https://www.booking.com/hotel/lk/amelia-villa.html"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-book"
        >
          Book Now
        </a>
      </nav>

      <section className="villa-about" id="about">
        <div className="about-img">
          <img src="/img1.jpeg" alt="Front view of villa" />
        </div>

        <div className="about-text">
          <h1>Your Beachside Sanctuary Awaits</h1>
          <p>A beautifully designed private villa just 2 minutes from Devinuwara Beach. Spacious rooms, tropical garden, and a host who goes the extra mile.</p>
          <div className="about-buttons">
            <a href="https://www.booking.com/hotel/lk/amelia-villa.html" className="btn btn-booking" target="_blank" rel="noopener noreferrer">RESERVE ON BOOKING.COM</a>
            <a href="#gallery" className="btn btn-explore">EXPLORE VILLA</a>
          </div>
        </div>

        <div className="img-badge">
          <div className="badge-score">10</div>
          <div className="badge-label">Exceptional</div>
          <div className="badge-sub">
            2 reviews · Booking.com<br />
            All categories rated 10
          </div>
        </div>
      </section>

      <div className="facilities">
        <div className="box"><h4>200m</h4><p>TO BEACH</p></div>
        <div className="box"><h4>10/10</h4><p>RATING</p></div>
        <div className="box"><h4>FREE</h4><p>WIFI & PARKING</p></div>
        <div className="box"><h4>A/C</h4><p>ROOMS</p></div>
        <div className="box"><h4>BREAKFAST</h4><p>INCLUDED</p></div>
      </div>

      <div className="intro">
        <div className="intro-img">
          <img src="/img2.jpg" alt="Villa interior" />
        </div>
        <div className="intro-text">
          <h3>About Amelia Villa</h3>
          <h2>A Private Retreat Steps from the Southern Shore</h2>
          <p>Nestled in the tranquil village of Gandara West, Dondra, Amelia Villa is a beautifully crafted guesthouse offering spacious family rooms with lush garden views. Devinuwara Beach is just a 2-minute walk away.</p>
          <p>From canopy beds with mosquito nets to a fully equipped kitchenette and a warm, welcoming garden terrace - every detail has been designed for a peaceful, comfortable stay.</p>
          <div className="intro-stats">
            <div className="intro-box"><h4>200m</h4><p>TO BEACH</p></div>
            <div className="intro-box"><h4>10/10</h4><p>SCORE</p></div>
            <div className="intro-box"><h4>FREE</h4><p>BREAKFAST</p></div>
          </div>
          <div className="host">
            <p>Hosted by Vipul Sellahewa</p>
            <p>Host score: 10/10 ~ English spoken ~ Responds promptly</p>
          </div>
        </div>
      </div>

      <Gallery />

      <section className="Facilities" id="amenities">
        <div className="left-box">
          <h4>FACILITIES</h4>
          <h2>Everything Included</h2>
          <p>Amelia Villa is equipped with all modern comforts for a relaxed tropical stay.</p>
          <div className="facility-box">
            <div className="greenbox"><p>✈ Airport Shuttle</p></div>
            <div className="greenbox"><p>🍳 Breakfast Daily</p></div>
            <div className="greenbox"><p>📶 Free WiFi</p></div>
            <div className="greenbox"><p>🚗 Free Parking</p></div>
          </div>
        </div>
        <div className="right-box">
          <div className="brownshadow-box"><div className="icon">🏖️</div><h3>Beach Access</h3><p>Devinuwara Beach just 200m away — a 2-minute walk.</p></div>
          <div className="brownshadow-box"><div className="icon">🛏️</div><h3>Canopy Beds</h3><p>Four-poster beds with draped mosquito nets and quality linen.</p></div>
          <div className="brownshadow-box"><div className="icon">❄️</div><h3>Air Conditioning</h3><p>Split-unit AC in all rooms for cool, restful nights.</p></div>
          <div className="brownshadow-box"><div className="icon">🍳</div><h3>Kitchenette</h3><p>Fully equipped with kettle, refrigerator, kitchenware & dining table.</p></div>
          <div className="brownshadow-box"><div className="icon">🚿</div><h3>Private Bathroom</h3><p>En-suite with shower, bathtub, bidet, toilet and towels.</p></div>
          <div className="brownshadow-box"><div className="icon">🌿</div><h3>Garden & Terrace</h3><p>Lush private garden with outdoor furniture and terrace seating.</p></div>
          <div className="brownshadow-box"><div className="icon">☕</div><h3>Breakfast</h3><p>Continental buffet with local specialties, pancakes & fresh fruits.</p></div>
          <div className="brownshadow-box"><div className="icon">🚗</div><h3>Free Parking</h3><p>Private on-site parking within gated compound, no reservation needed.</p></div>
          <div className="brownshadow-box"><div className="icon">👨‍👩‍👧</div><h3>Family Friendly</h3><p>Family rooms, free cribs, children's books & DVDs available.</p></div>
        </div>
      </section>

      <section>
        <div className="rules">
          <p>VILLA RULES</p>
          <h2>Good to Know</h2>
          <div className="rules-grid">
            <div className="rule-box"><div className="icon">🕑</div><h4>CHECK-IN</h4><p>From 2:00 PM to 6:00 PM</p></div>
            <div className="rule-box"><div className="icon">🕗</div><h4>CHECK-OUT</h4><p>Available 24 hours</p></div>
            <div className="rule-box"><div className="icon">💵</div><h4>PAYMENT</h4><p>Cash only. No card payments accepted.</p></div>
            <div className="rule-box"><div className="icon">🚭</div><h4>SMOKING</h4><p>Non-smoking rooms. Designated smoking area available.</p></div>
            <div className="rule-box"><div className="icon">🐾</div><h4>PETS</h4><p>Pets are not allowed on the property.</p></div>
            <div className="rule-box"><div className="icon">👶</div><h4>CHILDREN</h4><p>All ages welcome. Free crib (0-6 yrs). Extra bed US$5/night (7+ yrs).</p></div>
          </div>
        </div>
      </section>

      <section className="Location" id="location">
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967!2d80.5960!3d5.9278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae139007686c669%3A0x52bb42d00cd63ca0!2sAmelia+Villa!5e0!3m2!1sen!2slk!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amelia Villa Location"
          />
        </div>
        <div className="distance">
          <h4>LOCATION</h4>
          <h2>Gandara West, Dondra - Rated 10/10</h2>
          <p>Located in the serene southern tip of Sri Lanka near the Dondra lighthouse - one of the country's most scenic coastal areas.</p>
          <div className="list">
            <div className="place">
              <ul>
                <li>Devinuwara Beach</li>
                <li>Wawwa Beach</li>
                <li>Wellamadama Surfing Beach</li>
                <li>Matara Fort</li>
                <li>Weherahena Buddhist Temple</li>
                <li>Matara Railway Station</li>
                <li>Galle Fort (UNESCO)</li>
                <li>Koggala Airport</li>
              </ul>
            </div>
            <div className="km">
              <ul>
                <li>200m</li>
                <li>1km</li>
                <li>2.6km</li>
                <li>6km</li>
                <li>~6km</li>
                <li>7km</li>
                <li>31mi</li>
                <li>38km</li>
              </ul>
            </div>
          </div>
          <a href="https://www.google.com/maps/place/Amelia+Villa/@5.927845,80.5933899,17z/data=!3m1!4b1!4m9!3m8!1s0x3ae139007686c669:0x52bb42d00cd63ca0!5m2!4m1!1i2!8m2!3d5.9278397!4d80.5959648!16s%2Fg%2F11ypchtbmf?authuser=0&entry=tts&g_ep=EgoyMDI2MDQxNC4wIPu8ASoASAFQAw%3D%3D&skid=ec21b74c-517b-4d8a-8946-b5a63f9e183f">OPEN IN GOOGLE MAPS</a>
        </div>
      </section>

      <section className="reveiws" id="reviews">
        <h4>GUEST REVIEWS</h4>
        <h2>What Our Guests Say</h2>
        <div className="reviews-grid">
          <div className="review-box"><div className="condition">Staff</div><div className="marks">10</div></div>
          <div className="review-box"><div className="condition">Facilities</div><div className="marks">10</div></div>
          <div className="review-box"><div className="condition">Cleanliness</div><div className="marks">10</div></div>
          <div className="review-box"><div className="condition">Comfort</div><div className="marks">10</div></div>
          <div className="review-box"><div className="condition">Value for Money</div><div className="marks">10</div></div>
          <div className="review-box"><div className="condition">Location</div><div className="marks">10</div></div>
        </div>
        <div className="guest-reveiws">
          <div className="marinoni">
            <div className="intro-review">
              <div className="icon"><img src="/marinoni.ico" alt="Marinoni" /></div>
              <div className="name">Marinoni<br />🇮🇹 Italy</div>
            </div>
            <div className="para-review">
              <p>★★★★★</p>
              <p>"A beautiful apartment with every comfort you need, a kitchen and a big bathroom, the apartment is very spacious and it's 2 minutes from the ocean. The family host is very kind and friendly, they'll do everything to make your stay perfect."</p>
            </div>
          </div>
          <div className="laurie">
            <div className="intro-review">
              <div className="icon"><img src="/laurie.ico" alt="Laurie" /></div>
              <div className="name">Laurie<br />🇻🇳 Vietnam</div>
            </div>
            <div className="para-review">
              <p>★★★★★</p>
              <p>"Lovely villa close to the beach. Everything is new and clean and the host, Vipul was the sweetest host ever. We booked an additional night because it was such a nice and peaceful place. Highly recommend."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reserve">
        <h4>RESERVE YOUR STAY</h4>
        <h2>Begin Your Southern Escape</h2>
        <p>Book directly through Booking.com for instant confirmation. Amelia Villa welcomes families, couples and solo travellers of all ages.</p>
        <div className="book-card">
          <h3>Deluxe Queen Room</h3>
          <h2>From US$25</h2>
          <p>per night · room only</p>
          <p>1 Queen bed · Garden view · AC · Private bathroom · Free WiFi</p>
          <div className="availability">
            <a href="https://www.booking.com/hotel/lk/amelia-villa.en-gb.html" target="_blank" rel="noopener noreferrer">CHECK AVAILABILITY</a>
          </div>
        </div>
        <hr />
        <div className="booking-boxes">
          <div className="options"><p>CHECK-IN</p><h3>From 2:00 PM</h3></div>
          <div className="options"><p>CHECK-OUT</p><h3>24 Hours</h3></div>
          <div className="options"><p>PAYMENT</p><h3>Cash Only</h3></div>
          <div className="options"><p>BREAKFAST</p><h3>Included</h3></div>
          <div className="options"><p>LANGUAGES</p><h3>English, Sinhala</h3></div>
        </div>
      </section>

      <footer>
        <div className="footer-text">
          <div className="left-text">
            <img src="/logo.ico" alt="Logo of the villa" />
            <span>AMELIA VILLA</span>
          </div>
          <div className="middle-text">
            <p>Dondra 81000, Gandara West, Sri Lanka</p>
            <p>Hosted by Vipul Sellahewa</p>
            <a className="footer-link--booking" href="https://www.booking.com/hotel/lk/amelia-villa.en-gb.html" target="_blank" rel="noopener noreferrer">Book on Booking.com</a>
            <a className="footer-link--maps" href="https://www.google.com/maps/place/Amelia+Villa/@5.9278397,80.5959648,17z" target="_blank" rel="noopener noreferrer">Google Maps</a>
            <a className="footer-link--fb" href="https://www.facebook.com/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="right-text">
            <p>© 2026 Amelia Villa · All rights reserved</p>
            <p>Cash only · No smoking · No pets</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;