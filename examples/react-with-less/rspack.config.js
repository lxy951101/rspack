const path = require("path");
/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	mode: "development",
	entry: {
		main: ["./src/index.jsx"]
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		],
		define: {
			"process.env.NODE_ENV": "'development'"
		}
	},
	module: {
		rules: [
			{
				test: /.less$/,
				use: ["less-loader"],
				type: "css"
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "dist")
	}
};
module.exports = config;
