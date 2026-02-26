// 📍 Wathab Location Coordinates
const DEFAULT_COORDINATES = {
  latitude: 26.4251568,
  longitude: 50.0601249
};

const DEFAULT_LOCATION = 'Saudi Arabia';

function buildEmbedUrl(coordinates) {
  const { latitude, longitude } = coordinates;
  return `https://www.google.com/maps?q=${latitude},${longitude}&output=embed&zoom=15`;
}

export function MapSection({ coordinates = DEFAULT_COORDINATES, location = DEFAULT_LOCATION } = {}) {
  const embedUrl = buildEmbedUrl(coordinates);

  return (
    <section className="w-full overflow-hidden">
      <div className="h-[400px] w-full overflow-hidden rounded-xl md:h-[450px] lg:h-[500px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          title="Map"
          allowFullScreen
        />
      </div>
    </section>
  );
}
