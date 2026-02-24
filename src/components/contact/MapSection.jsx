const DEFAULT_LOCATION = 'Saudi Arabia';

function buildEmbedUrl(location) {
  const encoded = encodeURIComponent(location);
  return `https://www.google.com/maps?q=${encoded}&output=embed`;
}

export function MapSection({ location = DEFAULT_LOCATION } = {}) {
  const embedUrl = buildEmbedUrl(location);

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
