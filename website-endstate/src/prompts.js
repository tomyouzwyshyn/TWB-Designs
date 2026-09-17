'use strict';

/*
 * Detailed generation prompts for every media slot on the site, keyed by
 * placeholder id. ph() in lib.js uses these in place of the short inline
 * prompts, so the on-page placeholder panel, PLACEHOLDERS.md and the prompt
 * library all show the same text.
 *
 * prompt   : paste into an image generator (Midjourney, Flux, Imagen, Firefly).
 *            Every prompt is a single still photograph. For video slots the
 *            photo is saved as the slot's .jpg and shows on the site until
 *            the .mp4 exists, and it is also the source frame for the video.
 * motion   : video slots only. Use with that photo in an image-to-video
 *            tool (Runway, Veo, Kling, Sora).
 * negative : paste into a negative-prompt field, or append as "Avoid: ...".
 */

const STYLE = 'Shot as high-end cinematic documentary photography for a defence technology company: restrained charcoal and muted sage-green colour grade, deep but detailed shadows, soft atmospheric haze, subtle natural film grain, photorealistic, ultra-detailed, 8K.';

const NEG_BASE = 'text, captions, watermarks, logos, brand names, flags, national insignia, unit patches, readable serial numbers or markings, visible faces, gore, explosions, fire, smoke plumes, weapons being fired, combat, cartoon, illustration, CGI look, oversaturated colour, lens flare overload, distorted hands, extra fingers';

module.exports = {
  // ---------------- Home ----------------
  'H-01': {
    prompt: `Single still photograph, wide aerial view at first light over a quiet, recovering former conflict landscape: a patchwork of green and ochre fields, a dark treeline and a slow river bending through the frame under a thin layer of low mist, all far below. In the right third, sharp and fairly small in the frame, a matte charcoal survey drone flies level across the scene, seen from slightly above and behind: a compact quadcopter with folded-in arms, a gimballed sensor pod underneath pointed at the ground, and a single sage-green status light. A very faint sage-green sensing footprint lies on the mist-covered field below it. Calm, vast and restored: land being made safe again, watched from above. Captured from a second drone at around 150 metres, 35mm lens, horizon in the top third, cool dawn light with a faint warm rim on the drone's edges and the mist, the centre of the frame kept open for a headline. ${STYLE} 16:9.`,
    motion: 'From the still, 10 second seamless loop: the camera tracks alongside the drone as both drift slowly forward, the landscape passes gently beneath, the sensing footprint slides across the fields, mist drifts left to right. No cuts, no sudden moves.',
    negative: `${NEG_BASE}, craters, burning buildings, ruins in the foreground, people, ground vehicles, robots on the ground, weapons or munitions on the drone, consumer camera drone styling, propeller motion blur artefacts, multiple drones`
  },
  'T-01': {
    prompt: `Long-lens dawn scene on a pebbled coastline: in the foreground right, a compact matte charcoal tracked unmanned ground vehicle with a short sensor mast stands at the water's edge, its sensor head glowing faintly sage-green. Fifty metres offshore on flat grey water, a small low-profile uncrewed surface vessel with a stubby antenna mast moves parallel to the shore, leaving a thin wake. Soft mist sits on the water, a pale overcast sky with a thin line of sunrise on the horizon. The mood is quiet and methodical: machines going first. 200mm telephoto compression, eye-level camera, generous negative space in the upper left for text. ${STYLE} Ultra-wide 2:1 aspect ratio.`,
    negative: `${NEG_BASE}, people, beach tourists, boats with crews, warships, rough seas`
  },
  'T-02': {
    prompt: `Studio-style close-up of a single weathered, corroded cylindrical artillery-style munition casing lying on its side on a matte black rubberised inspection mat. Hard cool raking light from the left picks out rust bloom, pitting and flaking paint. A precise thin sage-green computer-vision outline traces the exact silhouette of the object, with small corner brackets, and a minimal dark translucent classification card floats beside it containing abstract bars and icons but no readable words. Clinical, certain, forensic. 100mm macro lens, camera at 30 degrees above the surface, very shallow depth of field falling off to black. ${STYLE} Ultra-wide 2:1 aspect ratio, subject on the right third.`,
    negative: `${NEG_BASE}, readable text on the card, stencilled lettering, hands, explosions, bright colours`
  },
  'T-03': {
    prompt: `Wide overcast daylight view inside a secured fenced compound: a matte dark-olive mobile industrial trailer unit, clean and utilitarian with a closed-chamber module and side access doors, parked on grey concrete behind a tall chain-link perimeter fence. In the sharp foreground, a neat row of four industrial steel bins holding sorted recovered metal fractions: coiled reddish copper, bright yellow brass casings, grey steel fragments and dull grey lead. Destruction and recovery in one frame. 35mm lens, camera at hip height just behind the bins, deep focus, flat soft light. ${STYLE} Ultra-wide 2:1 aspect ratio.`,
    negative: `${NEG_BASE}, company names on the trailer, hazard placards, people, clutter, rain`
  },
  'S-01': {
    prompt: `Single still photograph, vertical: an open grass field under heavy overcast sky. In the far background a lone figure in plain field uniform and helmet stands still at a safe distance, seen from behind as a dark silhouette, arms relaxed. In the mid-ground a small matte charcoal tracked robot is frozen mid-task with its sensor arm lowered close to the grass, a faint sage-green light on its sensor head. Protective, calm, deliberate: the machine takes the forward position. 85mm lens, camera low behind the robot looking toward the figure, shallow depth of field, darker lower third so a caption reads cleanly. ${STYLE} 3:4 vertical.`,
    motion: 'Static locked-off camera with a very slow 3 percent push-in, 8 second seamless loop. The robot creeps forward and the grass moves slightly in the wind; the figure does not move.',
    negative: `${NEG_BASE}, face visible, weapons raised, multiple soldiers, military vehicles`
  },
  'S-02': {
    prompt: `Single still photograph, vertical aerial view looking straight down over a large field returning to farmland: fresh green crop rows fill the upper half, lightly tilled brown earth the lower half. Thin, glowing sage-green survey grid lines are laid precisely over the brown earth only and stop cleanly at the edge of the green rows, as if the land has been verified and released. Soft morning light, long shadows from a single tree at the field edge. Hopeful, orderly, restored. Top-down drone shot at 80 metres. ${STYLE} 3:4 vertical.`,
    motion: 'From the still, 8 second slow vertical drone rise while the survey grid lines gently fade and the green rows sway. Seamless loop.',
    negative: `${NEG_BASE}, people, tractors, craters, burned ground, numbers on the grid`
  },
  'S-03': {
    prompt: `Single still photograph, vertical macro inside a clean, secure custody facility: a hand in a black nitrile glove holds a compact handheld barcode scanner over a sealed tamper-evident bag with a blank barcode label, resting on a stainless steel bench scale; a thin red scanner line lies across the label. Just behind, softly out of focus, a rugged tablet shows a dark interface with a vertical timeline and one step glowing sage green. Cool clinical top light. Precise, accountable, trustworthy. 100mm macro lens, shallow depth of field. ${STYLE} 3:4 vertical.`,
    motion: 'Static shot, 8 second seamless loop: the scanner line flickers across the label, the tablet timeline step fills with sage green, a tiny scale readout settles.',
    negative: `${NEG_BASE}, readable text on screen or label, drugs, cash, faces, messy desk`
  },
  'S-04': {
    prompt: `Single still photograph, vertical close-up in a clean industrial warehouse: two hands in heavy leather work gloves rest a recovered metal ingot squarely on top of a perfectly aligned stack of matching ingots on a steel pallet. Satin brushed finish, soft cool reflections from high clerestory windows, a clean glint along the top edges. Background is a softly blurred orderly racking aisle. Solid, domestic, valuable: materials returning to supply. 50mm lens at waist height, shallow depth of field, cool daylight with a faint warm bounce from the metal. ${STYLE} 3:4 vertical.`,
    motion: 'Slow 8 second loop: the ingot is lowered and settles onto the stack, a slight light glint travels across the top surfaces, subtle rack focus from hands to stack.',
    negative: `${NEG_BASE}, gold bars, bank vault, stamped logos or text on ingots, sparks, molten metal`
  },
  'H-02': {
    prompt: `Three-quarter documentary view of a matte dark-olive mobile industrial trailer unit, an ammunition demilitarization and materials recovery system, set up and operating on a grey concrete pad inside a fenced military depot compound. Side doors are open showing an orderly interior with a control panel glowing softly, stabiliser legs deployed, cables neatly run to a small generator unit. Two crew members in plain grey coveralls and hard hats stand at a working distance, seen from behind or in profile silhouette. Overcast daylight, wet concrete with soft reflections, chain-link fence and low storage buildings in the background. 35mm lens at eye level. ${STYLE} 16:9.`,
    negative: `${NEG_BASE}, hazard placards, company branding, faces, smoke from the unit, tanks, weapons`
  },
  'H-03': {
    prompt: `Wide dusk photograph of an orderly military munitions storage depot: long parallel rows of grass-covered earth-mounded bunkers with concrete entrance faces and closed steel doors, each lit by a single soft sodium floodlight. A tall perimeter fence with angled top runs across the foreground, slightly out of focus. Deep blue hour sky with a thin fading band of warm light on the horizon. Quiet, controlled, sovereign: nothing leaves without authorisation. 35mm lens, camera just behind the fence at head height, balanced symmetrical composition. ${STYLE} 4:3.`,
    negative: `${NEG_BASE}, guards, dogs, vehicles, barbed wire close-ups, stars, moon, snow`
  },

  // ---------------- Detection ----------------
  'D-01': {
    prompt: `Single still photograph, low and wide at dawn across open scrubland and dry grass on a former military training range. A compact matte charcoal tracked unmanned ground vehicle sits in the right third facing left, telescoping sensor mast raised; a ground-penetrating sensor array hangs just above the soil at its front and throws a faint sage-green scan line onto the ground ahead. Thin low mist, a distant line of bare trees, first sunlight catching the top of the mast. No people. Wide, low, patient: the machine goes first. 24mm lens at 40cm off the ground, lots of sky. ${STYLE} 16:9.`,
    motion: 'Slow lateral tracking shot matching the robot left to right with a gentle push-in, 10 seconds. The scan line pulses softly across the ground; mist drifts.',
    negative: `${NEG_BASE}, people, weapons mounted on the robot, explosions, military tanks`
  },
  'D-02': {
    prompt: `Single still photograph, one frame and no panels: a calm grey harbour mouth at dawn where a low concrete slipway meets the water. On the wet slipway in the foreground left, a matte charcoal tracked unmanned ground robot faces the sea. In the mid-ground on flat water, a small low-profile uncrewed surface vessel with a stubby antenna mast holds position, and a sleek torpedo-shaped autonomous underwater vehicle floats beside it, half submerged, its upper hull breaking the surface. All three are matte dark grey with a single sage-green status light each. Land, surface and underwater: one fleet. Thin mist, overcast sky, 50mm lens at slipway height. ${STYLE} 16:10.`,
    motion: 'From the still, 8 seconds: the ground robot rolls slowly toward the waterline, the surface vessel drifts right, the underwater vehicle sinks gently out of sight; mist moves. Seamless loop.',
    negative: `${NEG_BASE}, divers, crews on the boat, warships, torpedoes being launched, cartoon submarine`
  },
  'D-03': {
    prompt: `Single still photograph of a large high-resolution monitor in a dim operations room, shot straight-on so the screen fills about 90 percent of the frame with a thin dark bezel and a soft reflection at one edge. On screen, a premium dark-mode geospatial interface: a detailed 3D topographic terrain map at a 45 degree angle with thin magnetic contour lines in pale sage and scattered sonar return points laid directly on the surface, and five small contacts glowing sage green, each inside a thin confidence ring. Clean sans-serif UI chrome at the edges with abstract labels and no readable real data. Minimal, precise, high-end defence software aesthetic. Charcoal tones, soft screen glow, crisp vector lines, photoreal. 16:10.`,
    motion: 'From the still, 10 seconds: very slow push-in on the screen, the confidence rings pulse outward once in sequence, a faint scan sweep crosses the terrain. Seamless loop.',
    negative: 'readable text, real place names, coordinates, numbers, logos, bright colours, busy neon cyberpunk style, clutter'
  },
  'D-04': {
    prompt: `Minimal conceptual illustration rendered as a luminous dark-UI diagram: on the left, a vertical column of eight small, precise line-drawn munition silhouettes (shells, rounds, a fuze), each with a tiny sage-green check mark; thin glowing lines flow from them into a central softly glowing neural network node made of fine interconnected points; from that node, lines radiate out to the right into a topographic survey map with contour lines and a handful of highlighted contact points. The idea: every item destroyed teaches detection what to find next. Charcoal background, sage-green and off-white lines only, generous negative space, precise thin strokes, no numbers or text. 16:10.`,
    negative: 'text, numbers, labels, logos, 3D clip art, bright colours, cluttered infographic, stock icons, human figures'
  },
  'D-05': {
    prompt: `Close photoreal shot at the edge of an open survey area: a gloved hand holds a rugged military-grade field tablet with a thick rubber bumper. The screen shows a dark map interface with contour lines, a dotted survey boundary, several small sage-green marked contacts, and one contact card open with a thumbnail image and abstract bars, no readable words. Behind the tablet, softly out of focus, flagged survey stakes and grass stretch to a treeline under flat overcast light. Accountable, connected, calm. 50mm lens over the shoulder, shallow depth of field, screen perfectly legible in design but with no readable text. ${STYLE} 16:10.`,
    negative: `${NEG_BASE}, readable text on screen, smartphone, consumer tablet, cracked screen, faces`
  },

  // ---------------- Identification ----------------
  'I-01': {
    prompt: `Single still photograph, extreme macro along the body of a weathered, corroded cylindrical munition casing resting on a matte black surface: rust bloom, flaking olive paint, pitted metal and a dirt-caked driving band in razor-sharp detail. Cool hard raking light from one side against a black void. A thin sage-green computer-vision outline traces the full profile with small tick marks, and a tiny abstract classification tag sits just above the nose. Forensic, certain, quiet. 100mm macro lens, very shallow depth of field, subject on a diagonal from lower left to upper right. ${STYLE} 16:9.`,
    motion: 'Slow macro dolly along the casing from base to nose, 10 seconds, while the outline draws itself along the profile and the tag fades in at the end.',
    negative: `${NEG_BASE}, readable stencil markings, live explosions, hands, bright background`
  },
  'I-02': {
    prompt: `Single still photograph, over the shoulder in dry, stony earth: a gloved hand holds a rugged handheld inspection device aimed down at a partially buried, rust-covered cylindrical object half exposed in the soil. On the device screen, the live camera view shows the same object with a tight sage-green bounding box locked on and a small classification card with an abstract icon and confidence bar, no readable words. Soft overcast daylight, dust on the glove, the ground in front softly out of focus. Careful, confident, first contact. 35mm lens just behind the shoulder, focus on the screen. ${STYLE} 16:10.`,
    motion: 'Handheld-steady 8 second loop: the device moves slightly, the bounding box snaps from loose to tight lock, the card slides in.',
    negative: `${NEG_BASE}, readable text on screen, face, digging tools in hand, explosion, smartphone`
  },
  'I-03': {
    prompt: `High-end dark-mode inspection software screen, straight-on: the main panel shows a sharp photograph of a weathered munition casing on a black background, overlaid with four small annotated regions drawn as thin rounded rectangles, two in sage green and two in soft amber, highlighting corrosion and surface deformation. A right-hand sidebar shows a minimal handling-class badge, a condition bar, and a single confirm button, all with abstract placeholder shapes instead of readable text. Clean sans-serif UI, generous spacing, charcoal background, subtle glass panels. Human-in-the-loop, precise, trustworthy. 16:10.`,
    negative: 'readable text, numbers, real data, logos, red alarm colours, cluttered dashboard, neon cyberpunk, low-resolution UI'
  },
  'I-04': {
    prompt: `Single still photograph, perfectly top-down view of a clean conveyor line inside a demilitarization facility: rows of identical small and medium calibre cylindrical casings sit beneath a thin horizontal scanning light bar glowing pale white across the centre. Items past the bar each carry a small projected sage-green check mark; one item just past the bar is outlined in soft amber, held for review. Matte steel rollers, cool even industrial lighting, crisp detail, symmetrical. Methodical, verified, nothing slips through. ${STYLE} 16:10.`,
    motion: '8 second seamless loop: items advance under the scan bar, each gets a check mark, then the line pauses as the amber item lights up.',
    negative: `${NEG_BASE}, readable stamps on casings, workers, sparks, messy scrap, bright colours`
  },
  'I-05': {
    prompt: `Minimal dark-mode record screen for a single item, straight-on: a vertical sage-green timeline runs down the left third with six evenly spaced nodes, each node paired with a small photographic thumbnail (a buried object, a scan view, a sealed bag, a scale, a closed chamber door, a bin of metal) and a short abstract label bar. The right side shows a large detail image of the selected step and a certificate-style panel with a seal icon. Clean sans-serif UI chrome, charcoal background, soft glass surfaces, no readable text or numbers. Complete, traceable, audit-ready. 16:10.`,
    negative: 'readable text, numbers, names, logos, busy spreadsheet look, bright colours, stock icons'
  },

  // ---------------- Remediation ----------------
  'R-01': {
    prompt: `Single still photograph at dusk of a matte dark-olive mobile industrial trailer unit, a closed-chamber munitions destruction and recovery system, parked inside a secured compound. Its side doors are open and the interior chamber glows with a warm, contained amber light that spills across wet concrete. Behind it, a tall perimeter fence and two soft floodlights with haze visible in the beams; a deep blue sky with a last line of dusk. No people. Controlled, powerful, contained. 35mm anamorphic lens at low angle, trailer on the right third, open sky at left for a headline. ${STYLE} 16:9.`,
    motion: 'Slow push-in toward the open doors, 10 seconds; the interior glow breathes gently, haze drifts through the floodlight beams.',
    negative: `${NEG_BASE}, flames outside the unit, visible explosions, company branding, hazard placards, people`
  },
  'R-02': {
    prompt: `Photoreal macro shot inside a secure custody facility: gloved hands in black nitrile gloves scan a blank barcode tag attached to a sealed tamper-evident evidence bag containing boxed ammunition, resting on a stainless steel bench scale with a small dark digital readout. Beside it, a rugged tablet displays an abstract item record with a photo thumbnail and a sage-green status bar, no readable text. Cool clinical overhead light, stainless and matte black surfaces, spotless. Chain of custody made visible. 100mm macro lens, shallow depth of field. ${STYLE} 16:10.`,
    negative: `${NEG_BASE}, readable text, cash, drugs, faces, loose bullets scattered, messy bench`
  },
  'R-03': {
    prompt: `Single still photograph, medium shot of a heavy sealed industrial chamber door on a destruction unit: brushed steel, thick hinges, a locked handle and a small indicator panel with three softly lit status lights, the lowest glowing sage green, in sharp focus in the left half. In the right half, softly out of focus at a safe distance, an operator in plain grey coveralls stands at a control readout, face turned away. Cool industrial lighting with a faint warm glow leaking from the door seal. Quiet, procedural, controlled. 50mm lens. ${STYLE} 16:10.`,
    motion: 'Starts close on the indicator panel, then a slow 10 second pull-back revealing the operator at the control station; one indicator changes to green.',
    negative: `${NEG_BASE}, flames, smoke, open door with fire, face visible, warning signs with text`
  },
  'R-04': {
    prompt: `Perfectly top-down photograph of six square industrial steel bins in a precise row on a clean concrete floor, each holding a different sorted metal fraction recovered from munitions: bright yellow brass casings, reddish copper jacket fragments, grey steel fragments, dull dark lead pieces, dense dark tungsten penetrator cores, and a small bin of fine electronic scrap with gold-coloured contacts. Each bin has a small blank white tag. Hard, even overhead light, crisp texture, rich metallic contrast. Orderly, graded, valuable. ${STYLE} 16:10.`,
    negative: `${NEG_BASE}, readable tags, live ammunition, whole bullets with primers, rust puddles, clutter`
  },
  'R-05': {
    prompt: `Single still photograph of a large high-resolution monitor in a dim, orderly program office, shot straight-on so the screen fills about 90 percent of the frame with a thin dark bezel. On screen, a premium dark-mode program dashboard: across the top, a horizontal lifecycle timeline with five connected stage icons (detection, identification, custody, destruction, recovery), all five lit in sage green; below, a clean horizontal bar chart of recovered metal fractions in muted metallic tones; at the side, a map thumbnail and a certificate badge. Abstract placeholder labels, no readable text or numbers, subtle glass cards, generous spacing. One record, whole program. Soft screen glow, photoreal. 16:10.`,
    motion: 'From the still, 10 seconds: slow push-in on the screen, the timeline stages pulse left to right, the fraction bars ease from shorter to full length, the certificate badge glows once. Seamless loop.',
    negative: 'readable text, numbers, logos, bright rainbow charts, cluttered BI dashboard, neon cyberpunk'
  },
  'R-06': {
    prompt: `Vertical photoreal industrial still inside a clean, modern metals warehouse: neat stacks of recovered metal ingots and tightly bundled bars of copper and brass on steel pallets in the foreground, perfectly aligned. Cool daylight pours from high clerestory windows in soft beams through light haze; a yellow forklift sits softly out of focus deep in the aisle. Polished concrete floor with gentle reflections. Orderly, domestic, industrial strength: yesterday's munitions returning to supply. 35mm lens at waist height, strong leading lines into the aisle. ${STYLE} 4:5 vertical.`,
    negative: `${NEG_BASE}, gold bars, logos or stamps on ingots, workers' faces, mess, molten metal`
  },
};
