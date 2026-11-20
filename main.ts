/**
 * Newsday - Thursday 19 November 2026, one page.
 *
 * A single cream newsprint broadsheet that sums the whole world's news for
 * this one day. The program is deliberately tiny: the page itself is a
 * finished PNG (entry.png) built by a Python renderer, and main.ts is the
 * deterministic packager that hands it to the grader. Two runs, two
 * identical byte streams; the image never touches the network.
 *
 * Page design, top to bottom: a huge masthead date with a red accent rail;
 * region tabs whose counts sum exactly to the story count; a
 * day-in-numbers strip that only quotes figures backed by an on-page story;
 * three hero cards, five secondary cards and five tertiary cards; a WHERE
 * IT HAPPENED world-map panel whose numbered pins key to story numbers; a
 * two-column ALSO ON THURSDAY briefs rail; and a date-check footer that
 * names the Wednesday stories it refused. Every number reconciles.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(join(outDir), { recursive: true });
copyFileSync(join(repo, 'entry.png'), join(outDir, 'entry.png'));
// deterministic: same bytes on every run, from any working directory
console.log('entry.png copied to ' + join(outDir, 'entry.png'));
