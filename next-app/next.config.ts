import type { NextConfig } from "next";
import path from "path";
import fs from "fs";

const nextConfig: NextConfig = {
    trailingSlash: true,

    webpack: (config, { isServer }) => {
        // ---- Your existing upload folder logic ----
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // ---- FIX PDFKIT FONT ERROR ----
        // We force pdfkit to stay as a Node dependency so it can load:
        // node_modules/pdfkit/js/data/Helvetica.afm
        if (isServer) {
            config.externals = [
                ...(config.externals || []),
                { pdfkit: "commonjs pdfkit" },
            ];
        }

        return config;
    },
};

export default nextConfig;
