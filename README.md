# PermanentRecord

**Create records that matter.**

A privacy-first tool for generating FOIA requests, Inspector General complaints, and congressional letters. Every submission creates a federal record that can't be easily deleted.

Built by **Jung Hoon Son, M.D.**

[Buy me a coffee](https://buymeacoffee.com/junghoonson) ☕

---

## Features

- **100% client-side** — No servers, no tracking, no cookies, no analytics
- **Zero dependencies** — Pure HTML, CSS, and JavaScript
- **Offline-capable** — Works without internet after first load
- **Mobile-friendly** — Responsive design for all devices
- **localStorage persistence** — Your info and progress saved locally

## How It Works

Users fill in their contact info once, then generate professional templates for:

| Section | Purpose |
|---------|---------|
| **FOIA Requests** | Freedom of Information Act requests to federal agencies (FBI, DHS, ICE, DOJ) with proper legal citations |
| **IG Complaints** | Formal complaints to Inspector General offices with statutory references |
| **Congress Letters** | Letters to representatives requesting oversight |

Templates auto-fill with user info and can be copied or emailed directly.

## File Structure

```
├── index.html      # Landing page with case list
├── campaign.html   # Campaign detail page with all templates
└── README.md
```

All campaign data is embedded directly in the HTML files — no JSON fetches, no build step.

## Adding a New Campaign

Edit the `allCampaigns` object in `campaign.html` (and `campaigns` in `index.html` for the sidebar):

```javascript
"your-campaign-id": {
  "id": "your-campaign-id",
  "title": "Campaign Title",
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
2. Edit campaign data in `campaign.html` and `index.html`
3. Update branding (logo text in `.logo-main`)
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
