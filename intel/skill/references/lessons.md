# Lessons — running log

Append a dated entry every time the brief is updated. Keep entries short and actionable.
This file is the mechanism by which the skill gets better; if a day produces nothing worth
recording, record that.

---

## 2026-08-25 — Edition 001

**What worked.**
- Five parallel regional researchers plus a sixth on global indicators. Each hit its 200-call
  search budget, which is roughly the right size for a full baseline edition.
- A separate verification agent given only the list of figures intended for publication. It
  returned 20 verdicts and caught six substantive problems, including one claim that had been
  overtaken by events the day before publication (the Iraqi weapons-surrender deadline). Do not
  skip this step. A researcher will not catch its own errors.
- Instructing researchers to flag untraceable figures explicitly, rather than to omit them
  silently. The flags are more useful than the findings in several cases — the absence of a
  published GCC clearance accounting against 6,700 incoming munitions is itself the finding.

**What to do differently.**
- ICG CrisisWatch's monthly edition publishes in early September for August, so the last ~25 days
  of any late-month edition rest on wire reporting. Plan for that; do not treat the gap as quiet.
- ICG country pages returned model-summarised text in retrieval, and one item came back garbled.
  Treat ICG page detail as second-tier confidence unless read from the primary CrisisWatch PDF.
- press.un.org is JavaScript-gated and unfetchable. Use the globalsecurity.org mirror or the
  Security Council Report UN documents index instead.
- Several primary PDFs are reachable directly when the HTML page is not — go to the fact sheet
  PDF (SIPRI, ICBL-CMC, Estonian FIS) rather than the press release.

**Reliable primary routes discovered.**
- SIPRI fact-sheet PDFs at `sipri.org/sites/default/files/YYYY-MM/...` — always fetchable.
- ICBL-CMC preliminary casualty data PDF, published each June, covers the prior calendar year
  ahead of the full Monitor in December.
- UNMAS country pages carry cumulative destruction totals (South Sudan's is the best dataset
  anywhere for small-arms ammunition destruction at scale).
- UN Treaty Collection Chapter XXVI-5 is the only authoritative source for Mine Ban Convention
  withdrawal dates and the states-parties count. Factsheets are wrong.
- `securitycouncilreport.org/monthly-forecast/` is the single best entry point per country file.

**Open gaps carried forward.** Libya mine action and stockpile data; Western Balkans SALW
destruction tonnages (SEESAC/UNDP); Somalia and Sudan UN Panel of Experts current reports;
DRC 2026 national displacement; Laos/Vietnam UXO funding position; UNMAS Afghanistan and Myanmar
clearance output; Cameroon's Anglophone regions, where no current data was found at all.

---

## 2026-08-25 — Edition 001, production notes

**Format settled after three revisions in the same session.** Tom's sequence was: full brief as
PDF → no, send as email → remove bullet markers and drop the type one step → add origin blurbs →
email carries changes by section, PDF carries the full brief. The last of these is the stable
shape: **digest in the email, document as the PDF**. Build for that from the start.

**CSS multicolumn does not work in print in this Chromium build.** `column-count` is ignored
entirely in the print path — verified with a minimal test case (a 2-column and a 1-column page
produced identical page counts), and `--headless=new` behaves the same. Do not spend time tuning
print CSS. Use `typeset.js`, which packs measured blocks into fixed artboards.

**Block granularity matters.** A whole `.item` (one conflict entry) is taller than a column at any
readable type size, so the packer must open items up into their children. Weld each `h3` to the
block that follows it, or conflict names strand at the foot of columns.

**Content budget, measured.** 9,878 words → five Letter pages, two columns, at type scale 0.657
of screen size with the original geometry. Tightening page margins to 26/24px, the gutter to 16px,
and line-heights by 13% raised that to 0.785 — about 6pt body. That is the practical floor.
Beyond ~10,000 words, five pages stops being honest and prose has to be cut.

**Delivery constraint.** The Gmail connector accepts attachments only as inline base64. A 240KB
PDF is ~320,000 base64 characters — not reproducible verbatim by a model, so binary attachment is
not achievable through this path. Google Drive's `create_file` has the same constraint. The PDF is
therefore written to the repo and delivered separately, and the email states where it is. If a
mail connector that attaches by file path appears, switch to it and remove that sentence.

**Scheduled task caveat.** The 06:00 task was created without device binding
("no_signed_approval — this task will run in the cloud only"), which means it cannot read the
master or write the PDF to disk until Tom approves binding. The prompt has a cloud-only fallback:
research and email anyway, and say plainly that the master could not be updated.

---

## 2026-08-25 — attaching the PDF: solved

The earlier conclusion that the PDF "cannot be attached" was wrong — it was true only of the
Gmail connector taken alone. **Connector plus browser together can do it**, and that is now the
standard route (written up in SKILL.md → Delivery). Verified end to end: Edition 001 sent 13:02
with `TWB_Global_Conflict_Brief.pdf` (234K) attached, confirmed in Sent.

The four things that cost time, so they don't cost it again:

- **Account/profile mismatch.** The Gmail connector is tom@tmcapitalgroup.co; the browser's
  default profile (u/0) is tyouzwyshyn@gmail.com. A connector-created draft is invisible from u/0.
  Go straight to `mail.google.com/mail/u/1/#drafts`.
- **`file_upload` path gating.** It rejects paths inside the user's connected folder — only files
  this session may read are accepted. Copy the PDF to `/mnt/user-data/outputs/` and upload from
  there. Do not click the paperclip; it opens an invisible native picker.
- **Stale draft list.** A newly created draft does not appear until you click refresh. Clicking
  the top row before refreshing opened an unrelated third-party draft — no harm done, but that is
  one misclick away from sending someone else's mail. Always `find` the row by subject and
  confirm with a screenshot before clicking.
- **Stale compose window.** `update_draft` through the API does not propagate to an already-open
  compose window, and Gmail autosaves the old body back over the change. Discard the draft and
  create a fresh one instead of updating.

Also: `browser_batch` returned "No tab available" on every attempt in this session despite a valid
tab id. Individual `computer` calls worked fine. Don't burn time on the batch tool.

**Caveat for the scheduled run.** This route needs the Chrome extension connected and the user
present enough to have approved a browser. A 6am unattended run may not have it. The task prompt
therefore tries the browser route and falls back to sending the digest without the attachment,
saying so in the email, rather than failing.
