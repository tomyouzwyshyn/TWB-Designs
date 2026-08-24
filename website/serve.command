#!/bin/zsh
# TWB Designs — local site server. Double-click this file, then open:
#   http://localhost:4630
cd "$(dirname "$0")"
echo "Serving TWB Designs site at http://localhost:4630  (Ctrl+C to stop)"
exec python3 -m http.server 4630
