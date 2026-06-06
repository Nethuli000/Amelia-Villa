import { useState } from "react";

const photos = [
  { id: 1, src: "/gallery/room1.jpg", category: "rooms", caption: "Master Bedroom · Amelia Villa" },
  { id: 2, src: "/gallery/room2.jpg", category: "rooms", caption: "Dining Area · Amelia Villa" },
  { id: 3, src: "/gallery/room3.jpg", category: "rooms", caption: "Mirror & Cupboard · Amelia Villa" },
  { id: 4, src: "/gallery/room4.jpg", category: "rooms", caption: "Master Bedroom · Amelia Villa" },
  { id: 5, src: "/gallery/room5.jpg", category: "rooms", caption: "Master Bedroom · Amelia Villa" },
  { id: 6, src: "/gallery/room6.jpg", category: "rooms", caption: "Master Bedroom · Amelia Villa" },
  { id: 7, src: "/gallery/garden1.jpeg", category: "garden", caption: "Garden Terrace · Amelia Villa" },
  { id: 8, src: "/gallery/garden2.jpeg", category: "garden", caption: "Garden View · Amelia Villa" },
  { id: 9, src: "/gallery/view.jpg", category: "garden", caption: "Room View · Amelia Villa" },
  { id: 10, src: "/gallery/kitchen1.jpg", category: "kitchen", caption: "Kitchenette  · Amelia Villa" },
  { id: 11, src: "/gallery/washroom1.jpeg", category: "washroom", caption: "Washroom · Amelia Villa" },
  { id: 12, src: "/gallery/washroom2.jpeg", category: "washroom", caption: "Bathroom · Amelia Villa" },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "rooms", label: "Rooms" },
  { key: "garden", label: "Garden" },
  { key: "kitchen", label: "kitchen" },
  { key: "washroom", label: "washroom" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [previewIndex, setPreviewIndex] = useState(null);

  const filtered =
    activeTab === "all"
      ? photos.slice(0, 12)
      : photos.filter((p) => p.category === activeTab);

  const openPreview = (index) => setPreviewIndex(index);
  const closePreview = () => setPreviewIndex(null);

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPreviewIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPreviewIndex((i) => (i + 1) % filtered.length);
  };

  return (
    <section className="gallery-section" id="gallery">

      {/* Header */}
      <div className="gallery-header">
        <p className="gallery-label">Our Gallery</p>
        <h2 className="gallery-title">Every Corner, Crafted for Comfort</h2>
      </div>

      {/* Tabs */}
      <ul className="gallery-tabs">
        {tabs.map((tab) => (
          <li key={tab.key}>
            
              <a href="#gallery"
              className={activeTab === tab.key ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.key);
              }}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map((photo, index) => (
          <div
            key={photo.id}
            className="gallery-item"
            onClick={() => openPreview(index)}
          >
            <img src={photo.src} alt={photo.caption} />
            <div className="gallery-overlay">
              <span className="gallery-zoom-icon">&#9906;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Preview window */}
      {previewIndex !== null && (
        <div className="preview-backdrop" onClick={closePreview}>
          <div className="preview-window" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="preview-close" onClick={closePreview}>✕</button>

            {/* Left arrow */}
            <button className="preview-arrow left" onClick={prevPhoto}>&#8249;</button>

            {/* Image */}
            <img src={filtered[previewIndex].src} alt={filtered[previewIndex].caption} />

            {/* Caption + counter */}
            <div className="preview-footer">
              <p className="preview-caption">{filtered[previewIndex].caption}</p>
              <span className="preview-counter">{previewIndex + 1} / {filtered.length}</span>
            </div>

            {/* Right arrow */}
            <button className="preview-arrow right" onClick={nextPhoto}>&#8250;</button>

          </div>
        </div>
      )}

    </section>
  );
}