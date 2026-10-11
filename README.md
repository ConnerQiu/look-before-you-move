# Look Before You Move

Project page for **Look Before You Move: Agent-Interface-Aligned Supervision for Open-World Mobile Manipulation**.

The method is **Agent-Interface Data Alignment (AIDA)**; the trained agent is **AIDA-OWMM**.

## Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8765. This is a static HTML/CSS/JavaScript website with no build step or external runtime dependencies. The publishable site is in `dist/`; pushing this repository does not itself enable GitHub Pages.

## Contents

- Title, author links, and paper download
- Native HTML/SVG comparison of trajectory-derived labels and teacher-generated skill calls
- Task, five skills, and complete original system figure
- Teacher, spatial-state annotator, and shared harness
- Sequential stage-success chart, teacher comparison, and harness ablation
- Real-robot results, full-width four-panel experiment video, and complete original qualitative figure

The page uses bright mint (#72FFD7), deep burgundy (#2C0014), and white. It was independently implemented with KRAFT as a visual reference; no Framer template source or assets were imported. Paper figures are displayed whole. Space Grotesk is bundled with its SIL Open Font License in `dist/assets/SpaceGrotesk-OFL.txt`.

## Pending resources

Code and arXiv buttons remain disabled pending repository and arXiv URLs; the separate Read paper link opens the bundled PDF. Yiting He's name remains unlinked pending a homepage URL.

Local design studies, editing sources, backups, and old preview archives are excluded from Git.

## Video asset

`dist/assets/videos/experiment_4panel_2x.mp4` is the supplied 2000 × 1440 H.264 video (75.47 seconds), copied without re-encoding. The adjacent JPEG is its first-frame poster. Playback uses native controls, inline playback, and metadata-only preload.
