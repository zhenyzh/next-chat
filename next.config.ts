import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `
      @use "@/app/themas/variables.scss" as *;
      @use "@/app/themas/mixins.scss" as *;
    `,
    includePaths: [path.join(__dirname, "@/app/themas")],
  },
  reactCompiler: true,
};

export default nextConfig;
