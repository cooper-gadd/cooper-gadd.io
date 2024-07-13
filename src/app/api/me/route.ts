import { promises as fs } from "fs";
import path from "path";

const colors = {
  reset: "\x1b[0m",
  fg: {
    blue: "\x1b[38;2;97;175;239m",
    green: "\x1b[38;2;152;195;121m",
    cyan: "\x1b[38;2;86;182;194m",
    red: "\x1b[38;2;224;108;117m",
    yellow: "\x1b[38;2;229;192;123m",
  },
};

const asciiArt = `
${colors.fg.blue}  ____                               ____           _     _${colors.reset}
${colors.fg.green} / ___|___   ___  _ __   ___ _ __   / ___| __ _  __| | __| |${colors.reset}
${colors.fg.cyan}| |   / _ \\ / _ \\| '_ \\ / _ \\ '__| | |  _ / _\` |/ _\` |/ _\` |${colors.reset}
${colors.fg.red}| |__| (_) | (_) | |_) |  __/ |    | |_| | (_| | (_| | (_| |${colors.reset}
${colors.fg.yellow} \\____\\___/ \\___/| .__/ \\___|_|     \\____|\\__,_|\\__,_|\\__,_|${colors.reset}
${colors.fg.blue}                 |_|                                           ${colors.reset}
`;

export async function GET() {
  const filePath = path.join(process.cwd(), "src/data/me.txt");
  let me = await fs.readFile(filePath, "utf-8");

  me = me.replace(
    /^\? .*/gm,
    (match) => `${colors.fg.blue}${match}${colors.reset}`,
  );
  me = me.replace(
    /^◉ .*/gm,
    (match) => `${colors.fg.green}${match}${colors.reset}`,
  );
  me = me.replace(
    /^\(.*$/gm,
    (match) => `${colors.fg.cyan}${match}${colors.reset}`,
  );
  me = me.replace(
    /^◯ .*/gm,
    (match) => `${colors.fg.red}${match}${colors.reset}`,
  );
  me = me.replace(
    /^! .*/gm,
    (match) => `${colors.fg.yellow}${match}${colors.reset}`,
  );

  const content = `${asciiArt}\n${me}`;

  return new Response(content, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
