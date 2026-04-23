
import React from 'react';

const ShnoorLogo = ({ size = 100 }) => (
  <img
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/shnoor_tm_logo-removebg-preview-Y4LPVNJDezc30XEY.png"          // ← put your logo PNG/SVG in public/
    alt="SHNOOR Logo"
    width={size}
    height={size}
    style={{ objectFit: 'contain' }}
  />
);

export default ShnoorLogo;