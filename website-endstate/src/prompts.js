'use strict';

/*
 * Detailed generation prompts for every media slot on the site, keyed by
 * placeholder id. ph() in lib.js uses these in place of the short inline
 * prompts, so the on-page placeholder panel, PLACEHOLDERS.md and the prompt
 * library all show the same text.
 *
 * prompt   : paste into an image generator (Midjourney, Flux, Imagen, Firefly).
 *            For video slots this produces the keyframe.
 * motion   : video slots only. Use with the keyframe in an image-to-video
 *            tool (Runway, Veo, Kling, Sora).
 * negative : paste into a negative-prompt field, or append as "Avoid: ...".
 */

const STYLE = 'Shot as high-end cinematic documentary photography for a defence technology company: restrained charcoal and muted sage-green colour grade, deep but detailed shadows, soft atmospheric haze, subtle natural film grain, photorealistic, ultra-detailed, 8K.';

const NEG_BASE = 'text, captions, watermarks, logos, brand names, flags, national insignia, unit patches, readable serial numbers or markings, visible faces, gore, explosions, fire, smoke plumes, weapons being fired, combat, cartoon, illustration, CGI look, oversaturated colour, lens flare overload, distorted hands, extra fingers';

module.exports = {
  // ---------------- Home ----------------
  'H-01': {
    prompt: `Wide aerial establishing shot at first light over a quiet, recovering former conflict landscape: a patchwork of green and ochre fields, a dark treeline, and a slow river bending through the frame under a thin layer of low mist. Near the lower right third, very small in the frame, a matte charcoal tracked autonomous ground robot moves along a faint straight survey line cut through dewy grass, a soft sage-green scan light sweeping the ground a metre ahead of it. The feeling is calm, vast and restored, land being made safe again. Drone altitude around 120 metres, 24mm lens, horizon in the top third, cool dawn light with a faint warm rim on the mist. ${STYLE} 16:9.`,
    motion: 'Very slow forward aerial drift with a gentle 5 degree clockwise yaw, 10 second seamless loop. Mist drifts slowly left to right; the robot advances a few metres along its line. No cuts.',
    negative: `${NEG_BASE}, craters, burning buildings, ruins in the foreground, people, vehicles other than the robot`
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
    prompt: `Vertical cinematic frame: an open grass field under heavy overcast sky. In the far background, a lone figure in plain field uniform and helmet stands still at a safe distance, seen from behind as a dark silhouette, arms relaxed. In the mid-ground, a small matte charcoal tracked robot works slowly across the grass with a sensor arm lowered close to the ground, a faint sage-green light on its sensor head. Protective, calm, deliberate: the machine takes the forward position. 85mm lens, camera low behind the robot looking toward the figure, shallow depth of field. ${STYLE} 3:4 vertical.`,
    motion: 'Static locked-off camera with a very slow 3 percent push-in, 8 second seamless loop. The robot creeps forward and the grass moves slightly in the wind; the figure does not move.',
    negative: `${NEG_BASE}, face visible, weapons raised, multiple soldiers, military vehicles`
  },
  'S-02': {
    prompt: `Vertical aerial view looking straight down over a large field that has just been cleared and is returning to farmland: fresh green crop rows on one half, lightly tilled brown earth on the other. A faint, glowing sage-green survey grid of thin lines is overlaid precisely on the ground, visibly fading out toward the green half as if the land has been verified and released. Soft morning light, long shadows from a single tree at the field edge. Hopeful, orderly, restored. Top-down drone shot at 80 metres. ${STYLE} 3:4 vertical.`,
    motion: 'Slow vertical drone rise, 8 second seamless loop, while the survey grid lines dissolve from top to bottom and disappear.',
    negative: `${NEG_BASE}, people, tractors, craters, burned ground, numbers on the grid`
  },
  'S-03': {
    prompt: `Vertical macro shot inside a clean, secure evidence and custody facility: a gloved hand in a black nitrile glove holds a compact handheld barcode scanner over a sealed tamper-evident bag with a blank barcode label, resting on a stainless steel bench scale. Just behind, softly out of focus, a rugged tablet shows a dark interface with a vertical timeline and a single sage-green step completing. Cool clinical top light, a thin red scanner line on the label. Precise, accountable, trustworthy. 100mm macro lens, shallow depth of field. ${STYLE} 3:4 vertical.`,
    motion: 'Static shot, 8 second seamless loop: the scanner line flickers across the label, the tablet timeline step fills with sage green, a tiny scale readout settles.',
    negative: `${NEG_BASE}, readable text on screen or label, drugs, cash, faces, messy desk`
  },
  'S-04': {
    prompt: `Vertical close-up in a clean industrial warehouse: two hands in heavy leather work gloves set a freshly cast recovered metal ingot onto a neat, perfectly aligned stack of matching ingots on a steel pallet. The ingots have a satin brushed finish with soft cool reflections from high clerestory windows. The background is a softly blurred orderly racking aisle. Solid, domestic, valuable: materials returning to supply. 50mm lens at waist height, shallow depth of field, cool daylight with a faint warm bounce from the metal. ${STYLE} 3:4 vertical.`,
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
    prompt: `Low, wide cinematic shot at dawn across open scrubland and dry grass on a former military training range. A compact matte charcoal tracked unmanned ground vehicle crosses left to right with its telescoping sensor mast raised; a ground-penetrating sensor array hangs just above the soil at the front, projecting a faint sage-green scan line that sweeps the ground ahead. Thin low mist, a distant line of bare trees, first sunlight catching the top of the mast. No people. Wide, low, patient: the machine goes first. 24mm lens at 40cm off the ground, robot in the right third, lots of sky. ${STYLE} 16:9.`,
    motion: 'Slow lateral tracking shot matching the robot left to right with a gentle push-in, 10 seconds. The scan line pulses softly across the ground; mist drifts.',
    negative: `${NEG_BASE}, people, weapons mounted on the robot, explosions, military tanks`
  },
  'D-02': {
    prompt: `A three-panel cinematic triptych in one wide frame, separated by thin black gutters and graded identically in muted charcoal and sage: left panel, a tracked unmanned ground robot on a gravel training range under overcast sky; centre panel, a small low-profile uncrewed surface vessel moving through a calm grey harbour past concrete quay walls; right panel, a sleek torpedo-shaped autonomous underwater vehicle gliding low over a rippled sandy seabed in blue-green filtered light with drifting particles. Each vehicle is matte dark grey with a single sage-green status light. Land, surface, underwater: one fleet. ${STYLE} 16:10.`,
    motion: 'Each panel moves independently for 8 seconds: the ground robot drives forward, the surface vessel crosses right, the underwater vehicle glides left with particles drifting. Seamless loop.',
    negative: `${NEG_BASE}, divers, crews on the boat, warships, torpedoes being launched, cartoon submarine`
  },
  'D-03': {
    prompt: `Premium dark-mode geospatial software interface filling the frame: a detailed 3D topographic terrain map viewed at a 45 degree angle, with several translucent data layers hovering above it in exploded view: magnetic field contour lines in pale sage, a ground-penetrating radar slice in soft grey gradients, and scattered sonar return points. Below, on the terrain, five small contacts glow sage-green, each surrounded by a thin concentric confidence ring. Clean sans-serif UI chrome at the edges with abstract labels and no readable real data. Minimal, precise, high-end defence software aesthetic, like a Palantir product screenshot. Charcoal background, soft glow, crisp vector lines. 16:10.`,
    motion: 'Smooth 10 second loop: data layers descend one at a time and merge into the terrain, then contacts light up with rings expanding once. Slow orbiting camera.',
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
    prompt: `Extreme macro cinematic image along the body of a weathered, corroded cylindrical munition casing resting on a matte black surface: rust bloom, flaking olive paint, pitted metal and a dirt-caked driving band in razor-sharp detail. Cool hard raking light from one side against a black void. A thin sage-green computer-vision outline traces the casing's profile with small tick marks, and a tiny abstract classification tag hovers just above it. Forensic, certain, quiet. 100mm macro lens, very shallow depth of field, subject on a diagonal from lower left to upper right. ${STYLE} 16:9.`,
    motion: 'Slow macro dolly along the casing from base to nose, 10 seconds, while the outline draws itself along the profile and the tag fades in at the end.',
    negative: `${NEG_BASE}, readable stencil markings, live explosions, hands, bright background`
  },
  'I-02': {
    prompt: `Over-the-shoulder photoreal shot in dry, stony earth: a gloved hand holds a rugged handheld inspection device aimed down at a partially buried, rust-covered cylindrical object half exposed in the soil. On the device screen, the live camera view shows the same object with a sage-green bounding box locked on and a small classification card with an abstract icon and confidence bar, no readable words. Soft overcast daylight, dust on the glove, the ground in front softly out of focus. Careful, confident, first contact. 35mm lens just behind the shoulder, focus on the screen. ${STYLE} 16:10.`,
    motion: 'Handheld-steady 8 second loop: the device moves slightly, the bounding box snaps from loose to tight lock, the card slides in.',
    negative: `${NEG_BASE}, readable text on screen, face, digging tools in hand, explosion, smartphone`
  },
  'I-03': {
    prompt: `High-end dark-mode inspection software screen, straight-on: the main panel shows a sharp photograph of a weathered munition casing on a black background, overlaid with four small annotated regions drawn as thin rounded rectangles, two in sage green and two in soft amber, highlighting corrosion and surface deformation. A right-hand sidebar shows a minimal handling-class badge, a condition bar, and a single confirm button, all with abstract placeholder shapes instead of readable text. Clean sans-serif UI, generous spacing, charcoal background, subtle glass panels. Human-in-the-loop, precise, trustworthy. 16:10.`,
    negative: 'readable text, numbers, real data, logos, red alarm colours, cluttered dashboard, neon cyberpunk, low-resolution UI'
  },
  'I-04': {
    prompt: `Top-down industrial camera view of a clean conveyor line inside a demilitarization facility: a row of identical cylindrical small-calibre and medium-calibre casings in neat rows moving left to right beneath a thin horizontal scanning light bar glowing pale white. Each item that has passed the bar carries a small sage-green check mark projected beside it; one item near the centre is outlined in soft amber, indicating it has been held. Matte steel rollers, cool even industrial lighting, crisp detail. Methodical, verified, nothing slips through. Perfectly overhead view, symmetrical. ${STYLE} 16:10.`,
    motion: '8 second seamless loop: items advance under the scan bar, each gets a check mark, then the line pauses as the amber item lights up.',
    negative: `${NEG_BASE}, readable stamps on casings, workers, sparks, messy scrap, bright colours`
  },
  'I-05': {
    prompt: `Minimal dark-mode record screen for a single item, straight-on: a vertical sage-green timeline runs down the left third with six evenly spaced nodes, each node paired with a small photographic thumbnail (a buried object, a scan view, a sealed bag, a scale, a closed chamber door, a bin of metal) and a short abstract label bar. The right side shows a large detail image of the selected step and a certificate-style panel with a seal icon. Clean sans-serif UI chrome, charcoal background, soft glass surfaces, no readable text or numbers. Complete, traceable, audit-ready. 16:10.`,
    negative: 'readable text, numbers, names, logos, busy spreadsheet look, bright colours, stock icons'
  },

  // ---------------- Remediation ----------------
  'R-01': {
    prompt: `Cinematic dusk image of a matte dark-olive mobile industrial trailer unit, a closed-chamber munitions destruction and recovery system, parked inside a secured compound. Its side doors are open and the interior chamber glows with a warm, contained amber light that spills onto wet concrete. Behind it, a tall perimeter fence and two soft floodlights with light haze in the beams; a deep blue sky with a last line of dusk. No people. Controlled, powerful, contained. 35mm anamorphic lens at low angle, trailer on the right third. ${STYLE} 16:9.`,
    motion: 'Slow push-in toward the open doors, 10 seconds; the interior glow breathes gently, haze drifts through the floodlight beams.',
    negative: `${NEG_BASE}, flames outside the unit, visible explosions, company branding, hazard placards, people`
  },
  'R-02': {
    prompt: `Photoreal macro shot inside a secure custody facility: gloved hands in black nitrile gloves scan a blank barcode tag attached to a sealed tamper-evident evidence bag containing boxed ammunition, resting on a stainless steel bench scale with a small dark digital readout. Beside it, a rugged tablet displays an abstract item record with a photo thumbnail and a sage-green status bar, no readable text. Cool clinical overhead light, stainless and matte black surfaces, spotless. Chain of custody made visible. 100mm macro lens, shallow depth of field. ${STYLE} 16:10.`,
    negative: `${NEG_BASE}, readable text, cash, drugs, faces, loose bullets scattered, messy bench`
  },
  'R-03': {
    prompt: `Cinematic close shot of a heavy sealed industrial chamber door on a destruction unit: brushed steel, thick hinges, a locked handle and a small indicator panel with three softly lit status lights, one glowing sage green. In the background, softly out of focus at a safe distance, an operator in plain grey coveralls watches a control readout, face turned away. Cool industrial lighting with a faint warm glow leaking from the door seal. Quiet, procedural, controlled. 50mm lens, focus on the door. ${STYLE} 16:10.`,
    motion: 'Starts close on the indicator panel, then a slow 10 second pull-back revealing the operator at the control station; one indicator changes to green.',
    negative: `${NEG_BASE}, flames, smoke, open door with fire, face visible, warning signs with text`
  },
  'R-04': {
    prompt: `Perfectly top-down photograph of six square industrial steel bins in a precise row on a clean concrete floor, each holding a different sorted metal fraction recovered from munitions: bright yellow brass casings, reddish copper jacket fragments, grey steel fragments, dull dark lead pieces, dense dark tungsten penetrator cores, and a small bin of fine electronic scrap with gold-coloured contacts. Each bin has a small blank white tag. Hard, even overhead light, crisp texture, rich metallic contrast. Orderly, graded, valuable. ${STYLE} 16:10.`,
    negative: `${NEG_BASE}, readable tags, live ammunition, whole bullets with primers, rust puddles, clutter`
  },
  'R-05': {
    prompt: `Premium dark-mode program dashboard screen, straight-on: across the top, a horizontal lifecycle timeline with five connected stages drawn as small icons (detection, identification, custody, destruction, recovery), the first four lit in sage green. Below, a large panel shows recovered metal fractions as a clean horizontal bar chart with muted metallic tones, and a side panel shows a map thumbnail and a certificate badge. Clean sans-serif UI with abstract placeholder labels, no readable text or numbers, charcoal background, subtle glass cards, generous spacing. One record, whole program. 16:10.`,
    motion: '10 second loop: timeline stages light up left to right, then the fraction bars grow in sequence; slow cursor moves to the certificate badge.',
    negative: 'readable text, numbers, logos, bright rainbow charts, cluttered BI dashboard, neon cyberpunk'
  },
  'R-06': {
    prompt: `Vertical photoreal industrial still inside a clean, modern metals warehouse: neat stacks of recovered metal ingots and tightly bundled bars of copper and brass on steel pallets in the foreground, perfectly aligned. Cool daylight pours from high clerestory windows in soft beams through light haze; a yellow forklift sits softly out of focus deep in the aisle. Polished concrete floor with gentle reflections. Orderly, domestic, industrial strength: yesterday's munitions returning to supply. 35mm lens at waist height, strong leading lines into the aisle. ${STYLE} 4:5 vertical.`,
    negative: `${NEG_BASE}, gold bars, logos or stamps on ingots, workers' faces, mess, molten metal`
  },
};
