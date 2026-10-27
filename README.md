# PXL Drift / Pixel Records

Product landing page and public binary distribution for PXL Drift.

Website: https://tomislavrupic.github.io/PXL-Drift/

Buildless static HTML, CSS and JavaScript, served from the main branch root by GitHub Pages. No external fonts, analytics, cookies or dependencies. Decorative animations respect reduced motion, can be paused, and pause while the document is hidden. The actual native demonstration video plays only on request and includes real processor audio.

This repository contains the product website and actual native captures. It does not contain the plugin engine source. The release ZIP contains Apple Silicon AU/VST3 bundles, original factory presets and installation instructions. The 0.3.2 development build is Developer ID signed and Apple notarized; actual Logic/Ableton validation remains pending. Reported latency is 2048 samples.

## Local preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/ .

Copyright 2026 Pixel Records. Creator: https://tomislav-rupic.com/

## Notarized Mac plugin release — 27 October 2026

AU/VST3 download: https://github.com/tomislavrupic/PXL-Drift/releases/download/notarized-2026-10-27/PXL-Drift-0.3.2-macOS-arm64-Notarized-2026-10-27.zip

This release contains the signed, Apple-notarized plugin bundles with stapled tickets. Standalone apps are not part of this Mac plugin ZIP. Save your session, back up previous copies, install whole bundles and restart/rescan your DAW. Existing Windows downloads and artwork remain available.
