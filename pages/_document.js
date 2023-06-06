import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>

					<link
						href='https://fonts.googleapis.com/css2?family=Lora&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.min.css'
						rel='stylesheet'
					/>
					<link
						href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&family=Tinos&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
						rel='stylesheet'
					/>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-ZR50Q16JBQ"
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ZR50Q16JBQ');
              `,
						}}
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
