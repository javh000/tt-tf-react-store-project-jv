import React from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { ListGroup } from "react-bootstrap";

export default function SocialLinks() {

    const iconSize = 32;

  return (
    <ListGroup horizontal className="gap-4 p-0 list-unstyled justify-content-center">
      <ListGroup.Item className="bg-transparent border-0 p-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-light"
        >
          <SiFacebook size={iconSize} />
        </a>
      </ListGroup.Item>
      <ListGroup.Item className="bg-transparent border-0 p-0">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-light"
        >
          <SiInstagram size={iconSize} />
        </a>
      </ListGroup.Item>
      <ListGroup.Item className="bg-transparent border-0 p-0">
        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-light"
        >
          <SiWhatsapp size={iconSize} />
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
}
