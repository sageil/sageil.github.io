"""Generate 1200x630 social preview images for the site and each essay.

Run after adding an essay: python3 scripts/og-images.py
Needs rsvg-convert (brew install librsvg).
"""

import html
import re
import subprocess
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ESSAYS = ROOT / 'src/content/writing'
OUT = ROOT / 'public/og'

BG, FG, MUTED, LINE, ACCENT = '#0f0e0d', '#ece6dc', '#a8a196', '#2e2a26', '#d9b779'
SERIF = "Georgia, 'Times New Roman', serif"
SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif"


def card(kicker: str, title: str, size: int = 64) -> str:
    width = 30 if size >= 64 else 36
    lines = textwrap.wrap(title, width)
    if len(lines) > 4 and size >= 64:
        return card(kicker, title, 54)
    tspans = ''.join(
        f'<tspan x="80" dy="{0 if i == 0 else round(size * 1.18)}">{html.escape(line)}</tspan>'
        for i, line in enumerate(lines)
    )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="{BG}"/>
<text x="80" y="118" font-family="{SANS}" font-size="20" letter-spacing="4" fill="{ACCENT}">{html.escape(kicker)}</text>
<circle cx="1084" cy="110" r="36" fill="none" stroke="{LINE}" stroke-width="2"/>
<text x="1084" y="118" text-anchor="middle" font-family="{SERIF}" font-size="22" fill="{FG}">SA</text>
<text x="80" y="236" font-family="{SERIF}" font-style="italic" font-size="{size}" fill="{FG}">{tspans}</text>
<line x1="80" y1="530" x2="1120" y2="530" stroke="{LINE}" stroke-width="2"/>
<text x="80" y="578" font-family="{SANS}" font-size="22" letter-spacing="1" fill="{MUTED}">sammyageil.com</text>
</svg>'''


def render(name: str, svg: str) -> None:
    subprocess.run(['rsvg-convert', '-w', '1200', '-h', '630', '-o', str(OUT / f'{name}.png')],
                   input=svg.encode(), check=True)


def main() -> None:
    OUT.mkdir(exist_ok=True)
    render('default', card('NOTES ON BUILDING, AND LEADING', 'Sammy Ageil', 96))
    for essay in sorted(ESSAYS.glob('*.md')):
        title = re.search(r'^title:\s*(.+)$', essay.read_text(), re.M).group(1).strip().strip('"')
        render(essay.stem, card('SAMMY AGEIL · WRITING', title))
        print(essay.stem)


if __name__ == '__main__':
    main()
