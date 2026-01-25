# Simple FOIA

**Create records that matter.**

A privacy-first tool for generating FOIA requests, Inspector General complaints, and congressional letters. Every submission creates a federal record that can't be easily deleted.

Built by **Jung Hoon Son, M.D.**

[Buy me a coffee](https://buymeacoffee.com/junghoonson)

---

## Features

- **100% client-side** — No servers, no tracking, no cookies, no analytics
- **Zero dependencies** — Pure HTML, CSS, and JavaScript
- **Offline-capable** — Works without internet after first load
- **Mobile-friendly** — Responsive design for all devices
- **localStorage persistence** — Your info and progress saved locally

## Current Cases

- **Alex Pretti** — Border Patrol shooting, Minneapolis (Jan 24, 2026)
- **Renee Good** — ICE Agent Jonathan Ross, Minneapolis (Jan 7, 2026)
- **Geraldo Lunas Campos** — ICE detention death, Camp East Montana (Jan 3, 2026)
- **Keith Porter** — Off-duty ICE Agent Brian Palacios, Los Angeles (Dec 31, 2025)

## How It Works

Users fill in their contact info once, then generate professional templates for:

| Section | Purpose |
|---------|---------|
| **FOIA Requests** | Freedom of Information Act requests to federal agencies (FBI, DHS, ICE, CBP, DOJ) with proper legal citations |
| **IG Complaints** | Formal complaints to Inspector General offices with statutory references |
| **Congress Letters** | Letters to representatives requesting oversight |

Templates auto-fill with user info and can be copied or emailed directly.

## File Structure

```
index.html      # Landing page with case list
campaign.html   # Case detail page (HTML structure)
styles.css      # All CSS styles
campaigns.js    # Case data (edit this to add new cases)
app.js          # Application logic and template generation
README.md       # This file
CLAUDE.md       # AI assistant documentation
```

## Adding a New Case

Edit `campaigns.js` to add case data, and `index.html` to add it to the landing page sidebar:

```javascript
"your-case-id": {
  "id": "your-case-id",
  "title": "Case Title",
  "date": "2026-01-01",
  "status": "active",
  "summary": "Brief description of the case.",
  "keywords": ["searchable", "terms"],
  "sources": [
    {"name": "Source Name", "url": "https://..."}
  ],
  "agencies": {
    "agency-id": {
      "name": "SHORT",
      "fullName": "Full Agency Name",
      "description": "Why this agency matters.",
      "email": "foia@agency.gov",
      "portal": "https://agency.gov/foia",
      "address": "Mailing address...",
      "requests": [
        "Specific record request 1",
        "Specific record request 2"
      ]
    }
  },
  "complaints": {
    "complaint-id": {
      "name": "Office Name",
      "description": "What to report.",
      "email": "hotline@oig.gov",
      "portal": "https://oig.gov/hotline",
      "address": "Mailing address...",
      "subject": "Complaint subject line",
      "allegations": ["Allegation 1", "Allegation 2"],
      "actions": ["Requested action 1", "Requested action 2"]
    }
  },
  "congress": {
    "subject": "Letter subject",
    "background": ["Background point 1", "Background point 2"],
    "concerns": ["Concern 1", "Concern 2"],
    "actions": ["Requested action 1", "Requested action 2"]
  }
}
```

## Deployment

Static files only. Deploy anywhere:

- **Cloudflare Pages** — Connect repo, deploy automatically
- **GitHub Pages** — Enable in repo settings
- **Netlify** — Drag and drop
- **Any web server** — Just serve the HTML files

## Fork & Customize

1. Fork this repo
2. Edit case data in `campaigns.js` and `index.html`
3. Update branding (logo text in `.logo-main` in styles.css)
4. Deploy

No build process. No npm. No framework. Just HTML.

---

## License

MIT — Use freely, modify freely, credit appreciated.

## Support

If this helps you, consider [buying me a coffee](https://buymeacoffee.com/junghoonson).

## Links

- [About FOIA](https://www.foia.gov/)
- [Find Your Representative](https://www.congress.gov/members/find-your-member)
