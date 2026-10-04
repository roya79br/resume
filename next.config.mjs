/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set only in the GitHub Pages workflow (site lives at /resume there); empty on your computer
  basePath: process.env.BASE_PATH ?? "",
  // keep your other options here, if you have any
};

export default nextConfig;