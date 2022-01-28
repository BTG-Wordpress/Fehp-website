/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	env: {
		mapboxKey:
			"pk.eyJ1IjoiYm95YW5saXV1IiwiYSI6ImNrc2FtczVuMjA4MHgydXJ2Njh0dWJlMzAifQ.xE1HKdM9rxlXvAHpie1Xnw",
	},
	images: {
		domains: ["website-content.nyc3.digitaloceanspaces.com"],
	},
};

module.exports = nextConfig;
