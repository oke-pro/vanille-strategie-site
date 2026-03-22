"use client";

/**
 * Embedded Google Map using an iframe (Maps Embed API).
 * Uses NEXT_PUBLIC_GOOGLE_MAPS_API_KEY if available, otherwise falls back
 * to a keyless embed (limited).
 */
export function GoogleMap({
  lat,
  lng,
  name,
}: {
  lat: number;
  lng: number;
  name: string;
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const q = encodeURIComponent(name);

  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}&center=${lat},${lng}&zoom=15`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <iframe
      src={src}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Carte - ${name}`}
      className="w-full"
    />
  );
}
