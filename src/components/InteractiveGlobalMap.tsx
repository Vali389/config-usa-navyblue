import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Globe, MapPin, Phone, Mail, Navigation, ExternalLink, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export interface OfficeLocation {
  id: string;
  name: string;
  country: string;
  city: string;
  state: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  coords: [number, number];
  zoomLevel: number;
  timeZone: string;
  teamSize: string;
  isHQ?: boolean;
}

export const officeLocations: OfficeLocation[] = [
  {
    id: "united-states",
    name: "ConfigUSA (Global Headquarters)",
    country: "United States",
    city: "Plainsboro",
    state: "New Jersey",
    tag: "Global Headquarters",
    address: "666 Plainsboro Road, Suite 1237, Plainsboro, NJ 08536, United States",
    phone: "+1 (609) 934-3184",
    email: "usa@configusa.com",
    coords: [40.334, -74.5938],
    zoomLevel: 12,
    timeZone: "EST (UTC-5)",
    teamSize: "150+ Onshore Experts",
    isHQ: true,
  },
  {
    id: "canada",
    name: "ConfigUSA (Canada Office)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    tag: "North America Hub",
    address: "1585 Markham Road, Suite # 309, Toronto, ON M1B 2W1, Canada",
    phone: "+1 (647) 557-6968",
    email: "canada@configusa.com",
    coords: [43.7915, -79.2274],
    zoomLevel: 12,
    timeZone: "EST (UTC-5)",
    teamSize: "50+ Technology Consultants",
  },
  {
    id: "india",
    name: "ConfigUSA (India Delivery Center)",
    country: "India",
    city: "Hyderabad",
    state: "Telangana",
    tag: "Global Delivery & Engineering Center",
    address: "Trendz Sapphire, 3rd Floor, Flat No. 1-99/V/2, Vittal Rao Nagar, Madhapur, Hitech City, Hyderabad – 500081, Telangana, India",
    phone: "+91 80746 83380",
    email: "india@configusa.com",
    coords: [17.4474, 78.3762],
    zoomLevel: 12,
    timeZone: "IST (UTC+5:30)",
    teamSize: "350+ Global Engineers",
  },
];

export function InteractiveGlobalMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(officeLocations[0]);
  const [activeTab, setActiveTab] = useState<string>("united-states");
  const [mapReady, setMapReady] = useState<boolean>(false);

  // Initialize Leaflet Map
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: officeLocations[0].coords,
      zoom: 11,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;
    setMapReady(true);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Sync Markers when selectedOffice or mapReady changes
  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    // Remove old markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    officeLocations.forEach((office) => {
      const isSelected = selectedOffice.id === office.id;

      const markerHtml = isSelected
        ? `<div class="relative flex items-center justify-center">
             <div class="absolute -inset-2 rounded-full bg-gold/40 animate-ping"></div>
             <div class="absolute -inset-1 rounded-full bg-gold/50"></div>
             <div class="relative h-7 w-7 rounded-full bg-[#102B4E] border-[2.5px] border-gold shadow-xl flex items-center justify-center">
               <div class="h-2.5 w-2.5 rounded-full bg-gold"></div>
             </div>
           </div>`
        : `<div class="relative flex items-center justify-center group cursor-pointer">
             <div class="h-5 w-5 rounded-full bg-[#102B4E] border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-125 group-hover:bg-[#1e4976]"></div>
           </div>`;

      const customIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: markerHtml,
        iconSize: isSelected ? [32, 32] : [22, 22],
        iconAnchor: isSelected ? [16, 16] : [11, 11],
      });

      const marker = L.marker(office.coords, { icon: customIcon }).addTo(map);

      marker.on("click", () => {
        setSelectedOffice(office);
        setActiveTab(office.id);
        map.flyTo(office.coords, office.zoomLevel, { duration: 1.2 });
      });

      markersRef.current[office.id] = marker;
    });
  }, [mapReady, selectedOffice]);

  // Handle Tab Switch
  const handleSelectOffice = (office: OfficeLocation) => {
    setSelectedOffice(office);
    setActiveTab(office.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(office.coords, office.zoomLevel, { duration: 1.2 });
    }
  };

  const handleSelectAll = () => {
    setActiveTab("all");
    if (mapInstanceRef.current) {
      const bounds = L.latLngBounds(officeLocations.map((o) => o.coords));
      mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 5 });
    }
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header Bar with Active Location Tabs */}
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50/90 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-bold tracking-tight text-[#102B4E] sm:text-base">
              3 Strategic Global Locations · Direct Delivery Network
            </span>
          </div>

          {/* Active Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSelectAll}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#102B4E] text-white shadow-sm ring-1 ring-gold"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-gold" />
              All 3 Locations
            </button>

            {officeLocations.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => handleSelectOffice(office)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#102B4E] text-white shadow-sm ring-1 ring-gold"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-gold" : "bg-slate-400"
                    }`}
                  />
                  {office.country}
                </button>
              );
            })}
          </div>
        </div>

        {/* Map & Office Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
          {/* Map Column */}
          <div className="relative h-[380px] sm:h-[440px] lg:col-span-7 xl:col-span-8 lg:h-full bg-slate-100">
            <div ref={mapContainerRef} className="h-full w-full z-0" />

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 z-[400] hidden sm:flex items-center gap-4 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#102B4E] border border-white" />
                <span>Office Location</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-gold border border-[#102B4E]" />
                <span>Selected Office</span>
              </div>
            </div>

            {/* Recenter Button */}
            <button
              type="button"
              onClick={() => handleSelectOffice(selectedOffice)}
              className="absolute top-4 right-4 z-[400] rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
            >
              Recenter Map
            </button>
          </div>

          {/* Office Information Column */}
          <div className="flex flex-col justify-between border-t border-slate-200 bg-white lg:col-span-5 xl:col-span-4 lg:border-t-0 lg:border-l">
            {/* Selected Office Details */}
            <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="inline-block rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#102B4E]">
                  {selectedOffice.tag}
                </span>
                <span className="text-xs font-medium text-slate-500">{selectedOffice.timeZone}</span>
              </div>

              <h4 className="font-display text-xl font-bold text-[#102B4E] leading-snug">
                {selectedOffice.name}
              </h4>
              <p className="mt-0.5 text-xs font-semibold text-slate-500">
                {selectedOffice.city}, {selectedOffice.state} • {selectedOffice.country}
              </p>

              {/* Verified Contact Card */}
              <div className="mt-5 space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-xs shadow-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                  <span className="leading-relaxed font-medium">{selectedOffice.address}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2.5 border-t border-slate-100">
                  <a
                    href={`tel:${selectedOffice.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-1.5 font-bold text-[#102B4E] hover:text-gold transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    <span>{selectedOffice.phone}</span>
                  </a>
                  <a
                    href={`mailto:${selectedOffice.email}`}
                    className="flex items-center gap-1 text-[#102B4E] hover:text-gold font-semibold transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-gold" />
                    <span>{selectedOffice.email}</span>
                  </a>
                </div>

                {selectedOffice.teamSize && (
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>
                      <strong className="text-slate-800">Capability:</strong> {selectedOffice.teamSize}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${selectedOffice.name}, ${selectedOffice.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#102B4E] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#0c223e] shadow-sm hover:shadow"
                >
                  <Navigation className="h-3.5 w-3.5 text-gold" />
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
                <a
                  href="#form"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition-all hover:bg-slate-50"
                >
                  <span>Inquire</span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick Switcher List */}
            <div className="p-5 sm:p-6 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select An Office Location
              </p>
              {officeLocations.map((office) => {
                const isSelected = office.id === selectedOffice.id;
                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => handleSelectOffice(office)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#102B4E]/5 border-2 border-[#102B4E] shadow-xs"
                        : "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-[#102B4E] text-gold" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#102B4E]">{office.name}</p>
                        <p className="text-[11px] text-slate-500">
                          {office.city}, {office.country}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected ? "text-gold translate-x-1" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

