import { CONTACT } from "../../../data/contact";

export default function ContactMapSection() {
  return (
    <section className="w-full overflow-hidden">
      <iframe
        title="Nowa location map"
        src={CONTACT.mapEmbedUrl}
        width="100%"
        height="460"
        className="w-full border-0 block grayscale"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
