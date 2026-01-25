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
index.html      # Landing page with campaign list and search
campaign.html   # Campaign detail page (HTML structure only)
styles.css      # All CSS styles
campaigns.js    # Campaign data (edit this to add new campaigns)
app.js          # Application logic and template generation
campaigns.json  # Data backup (legacy)
README.md       # User-facing documentation
og-image.svg    # Social media preview image
```

## Development

No build process. Edit HTML files directly and open in browser.

```bash
# Deploy (Cloudflare Pages auto-deploys on push)
git push origin main
```

## Architecture

### Data Structure

Campaign data is embedded directly in `campaign.html` as `const allCampaigns = {...}`:

```javascript
allCampaigns: {
  "campaign-id": {
    id, title, date, status, summary, keywords, sources,
    agencies: { "agency-id": { name, fullName, description, email, portal, address, requests } },
    complaints: { "complaint-id": { name, description, email, portal, address, subject, allegations, actions } },
    congress: { subject, background, concerns, actions }
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

Edit the `allCampaigns` object in `campaign.html`. Required fields:
- `id`, `title`, `date`, `status`, `summary`

Optional fields:
- `keywords`, `sources`, `agencies`, `complaints`, `congress`

## Important Notes

- **No build step** - Changes are immediate
- **Privacy-first** - No tracking, no analytics, works offline
- **Form fields** - Name and Email are required; address fields are optional
- **Templates** - Plain text, ready for copy/paste or mailto links
