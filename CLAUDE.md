# CLAUDE.md

## Project Overview

Mass FOIA is a privacy-first FOIA (Freedom of Information Act) request generator. It's a static HTML/CSS/JavaScript application with zero dependencies, no build process, and no backend. All data persists in localStorage.

## Tech Stack

- **Pure HTML5/CSS3/Vanilla JavaScript** - No frameworks, no dependencies
- **Static hosting** on Cloudflare Pages (auto-deploys from GitHub)
- **System fonts only** - No external CSS/icon libraries
- **Inline SVGs** for all icons

## File Structure

```
index.html      # Landing page (includes slimmed campaign data for search/display)
campaign.html   # Campaign detail page (HTML structure only)
campaigns.js    # Full campaign data (edit this to add new campaigns)
app.js          # Application logic and template generation
styles.css      # All CSS styles
README.md       # User-facing documentation
og-image.svg    # Social media preview image
```

**Note:** Campaign data exists in TWO places:
- `campaigns.js` - Full data with all FOIA requests, complaints, congress letters
- `index.html` - Slimmed data (id, title, date, status, category, summary, keywords) for landing page

## Development

No build process. Edit HTML files directly and open in browser.

```bash
# Deploy (Cloudflare Pages auto-deploys on push)
git push origin main
```

## Architecture

### Data Structure

Campaign data lives in `campaigns.js` as `const allCampaigns = {...}`. The index page also has a slimmed-down copy in `index.html` for the landing page.

**CRITICAL: Field Type Requirements**

The template generators in `app.js` call `.map()` on certain fields, so they MUST be arrays:

| Field | Type | Used By |
|-------|------|---------|
| `agencies[id].requests` | `string[]` | `generateFOIA()` |
| `complaints[id].allegations` | `string[]` | `generateComplaint()` |
| `complaints[id].actions` | `string[]` | `generateComplaint()` |
| `congress.background` | `string[]` | `generateCongress()` |
| `congress.concerns` | `string[]` | `generateCongress()` |
| `congress.actions` | `string[]` | `generateCongress()` |
| `keywords` | `string[]` | Search filtering |
| `sources` | `object[]` | Source card rendering |

**Full Schema:**

```javascript
allCampaigns: {
  "campaign-id": {
    // Required (strings)
    id: "campaign-id",           // Must match the key
    title: "Case Title",
    date: "YYYY-MM-DD",
    status: "active",            // "active" shows green dot
    summary: "Brief description",

    // Optional
    image: "images/photo.jpg",   // Case photo
    keywords: ["array", "of", "search", "terms"],
    sources: [{ name: "Source Name", url: "https://..." }],

    // FOIA requests (optional)
    agencies: {
      "agency-id": {
        name: "SHORT",           // e.g., "DOJ", "FBI"
        fullName: "Full Agency Name",
        description: "Why this agency",
        email: "email@agency.gov" | null,  // null = portal only
        portal: "https://...",
        address: "Multi-line\naddress",
        requests: ["Request 1", "Request 2"]  // MUST BE ARRAY
      }
    },

    // IG Complaints (optional)
    complaints: {
      "complaint-id": {
        name: "Office Name",
        description: "Brief description",
        email: "email@oig.gov",
        portal: "https://...",
        address: "Multi-line\naddress",
        subject: "Complaint subject line",
        allegations: ["Allegation 1", "Allegation 2"],  // MUST BE ARRAY
        actions: ["Requested action 1", "Action 2"]     // MUST BE ARRAY
      }
    },

    // Congressional letter (optional)
    congress: {
      subject: "Letter subject",
      background: ["Fact 1", "Fact 2"],   // MUST BE ARRAY
      concerns: ["Concern 1", "Concern 2"], // MUST BE ARRAY
      actions: ["Action 1", "Action 2"]    // MUST BE ARRAY
    }
  }
}
```

### Key Functions

- `generateFOIA(agency)` - Creates FOIA request letters
- `generateComplaint(complaint)` - Creates Inspector General complaint letters
- `generateCongress()` - Creates congressional letters
- `getSenderBlock(formData)` - Builds sender address block (only includes filled fields)
- `updateTemplates()` - Refreshes all templates when form changes
- `copyTemplate(id, btn)` - Clipboard copy with fallback

### State Management

- localStorage keys: `foia_*` for user form data
- `foia_completed_${campaignId}_${sectionId}` for completion checkboxes
- DOM-based UI state (classList toggles)

## Conventions

### Code Style

- Functional/procedural style, no classes
- Top-level functions with global state variables
- Event handlers via onclick attributes and addEventListener
- BEM-style CSS class naming (e.g., `.sticky-form`, `.sticky-form-inner`)

### CSS Variables (Design System)

```css
--bg, --surface, --text, --text-secondary, --text-muted
--border, --border-subtle, --accent, --ring
--success (#22c55e), --blue (#2563eb)
```

### Responsive Breakpoint

- Mobile: < 700px (sidebar becomes overlay, sticky header adjusts)
- Desktop: >= 700px (fixed 256px sidebar)

### Campaign ID Format

Use kebab-case: `renee-good`, `keith-porter`, `geraldo-lunas-campos`

## Adding New Campaigns

1. Edit `campaigns.js` - add to `allCampaigns` object
2. Edit `index.html` - add slimmed-down entry to `campaigns` object (for landing page)

**Required fields:** `id`, `title`, `date`, `status`, `summary`

**Optional fields:** `image`, `keywords`, `sources`, `agencies`, `complaints`, `congress`

**Checklist when adding/editing:**
- [ ] `id` matches the object key (kebab-case)
- [ ] All list fields are arrays, not strings (see schema above)
- [ ] Agency has either `email` or `portal` (or both)
- [ ] Multi-line addresses use `\n` for line breaks
- [ ] Sources have both `name` and `url`

## Common Pitfalls

| Mistake | Symptom | Fix |
|---------|---------|-----|
| `background: "string"` instead of `["array"]` | Template shows one character per line | Convert to array |
| Missing campaign in `index.html` | Case doesn't appear on landing page | Add to both files |
| `email: ""` instead of `email: null` | Empty mailto link shown | Use `null` for portal-only |
| Forgetting `id` field | Campaign won't load | Add `id` matching the key |

## Important Notes

- **No build step** - Changes are immediate
- **Privacy-first** - No tracking, no analytics, works offline
- **Form fields** - Name and Email are required; address fields are optional
- **Templates** - Plain text, ready for copy/paste or mailto links
- **Two data locations** - Full data in `campaigns.js`, summary in `index.html`
