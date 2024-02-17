import { socials } from "../data";

export default function ContactButton({ color }) {
  return (
    <div className="contactContainer">
      <a href={socials.whatsApp} target="_blank">
        <div className="contactButton" style={{ background: color }}>
          CONTACT US
        </div>
      </a>
    </div>
  );
}
