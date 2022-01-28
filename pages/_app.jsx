import "../styles/globals.scss";
import "../styles/pages/map.scss";
import "antd/dist/antd.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
function App({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		window.addEventListener("load", function () {
			Weglot.initialize({
				api_key: "wg_86b4aefdf5597be7cd58a733975a877c1",
			});
		});
	}, [router.events]);
	return (
		<>
			<Script src='https://cdn.weglot.com/weglot.min.js' />

			<Component {...pageProps} />
		</>
	);
}

export default App;
