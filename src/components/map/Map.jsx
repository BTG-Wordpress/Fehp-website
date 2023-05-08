import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// component
import mapboxgl from "!mapbox-gl";
import { Table } from "antd";
//commet
// --------------------------
mapboxgl.accessToken =
	process.env.NEXT_PUBLIC_MAPBOX_KEY ||
	process.env.mapboxKey ||
	"pk.eyJ1IjoiYm95YW5saXV1IiwiYSI6ImNrc2FtczVuMjA4MHgydXJ2Njh0dWJlMzAifQ.xE1HKdM9rxlXvAHpie1Xnw";

const Popup = ({
	lppf,
	region,
	ordinanceDate,
	resolutionDate,
	localResourceUrl,
}) => {
	const ordinanceUrl =
		lppf === "Duval"
			? `COJ Passed Ordinance.pdf`
			: `${lppf} County Passed Ordinance.pdf`;
	const name = lppf === "Duval" ? "City of Jacksonville" : lppf;
	const resolutionUrl =
		lppf === "Duval"
			? `COJ Passed Resolution.pdf`
			: `${lppf} Passed Resolution.pdf`;

	return (
		<div className='popup'>
			<h3>{name} County LPPF</h3>
			<span>Region {region}</span>
			<div>
				<span>Ordinance Passed:&nbsp;</span>
				<a href={ordinanceUrl} target='_blank'>
					{ordinanceDate}
				</a>
			</div>
			<div>
				<span>Resolution Passed:&nbsp;</span>
				<a href={resolutionUrl} target='_blank'>
					{resolutionDate}
				</a>
			</div>
			<div>
				<a href={localResourceUrl} target='_blank'>
					Local Resources
				</a>
			</div>
		</div>
	);
};
export default function Map({ stateData, countiesData }) {
	const mapContainer = useRef(null);
	const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
	const map = useRef(null);
	const [lng, setLng] = useState(-82.8234);
	const [lat, setLat] = useState(28.1176);
	const [zoom, setZoom] = useState(6.06);
	const [curName, setCurName] = useState("");

	const data = [
		{
			key: 1,
			LPPF: "Bay",
			Region: 2,
			"Ordinance Passed": "08/17/2021",
			"Resolution Passed": "09/20/2022",
			"Local Resource": "https://www.baycountyfl.gov/",
		},
		{
			key: 15,
			LPPF: "Lake",
			Region: 3,
			"Ordinance Passed": "04/13/2022",
			"Resolution Passed": "09/13/2022",
			"Local Resource": "https://www.lakecountyfl.gov/home",
		},
		{
			key: 8,
			LPPF: "Brevard",
			Region: 7,
			"Ordinance Passed": "05/18/2021",
			"Resolution Passed": "09/13/2022",
			"Local Resource": "https://www.brevardfl.gov/eGovernment",
		},
		{
			key: 11,
			LPPF: "Charlotte",
			Region: 8,
			"Ordinance Passed": "07/13/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.charlottecountyfl.gov/",
		},
		{
			key: 4,
			LPPF: "Citrus",
			Region: 3,
			"Ordinance Passed": "09/14/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.citrusbocc.com/",
		},
		{
			key: 6,
			LPPF: "Clay",
			Region: 4,
			"Ordinance Passed": "06/22/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.claycountygov.com/",
		},
		{
			key: 10,
			LPPF: "Collier",
			Region: 8,
			"Ordinance Passed": "06/22/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.colliercountyfl.gov/",
		},
		{
			key: 7,
			LPPF: "Duval",
			Region: 4,
			"Ordinance Passed": "08/24/2021",
			"Resolution Passed": "09/28/2021",
			"Local Resource": "https://www.coj.net/",
		},
		{
			key: 0,
			LPPF: "Escambia",
			Region: 1,
			"Ordinance Passed": "04/22/2021",
			"Resolution Passed": "09/22/2022",
			"Local Resource": "https://myescambia.com/",
		},
		{
			key: 5,
			LPPF: "Hernando",
			Region: 3,
			"Ordinance Passed": "08/24/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.hernandocounty.us/",
		},
		{
			key: 13,
			LPPF: "Indian River",
			Region: 9,
			"Ordinance Passed": "09/14/2021",
			"Resolution Passed": "09/20/2022",
			"Local Resource": "https://www.ircgov.com/",
		},
		{
			key: 2,
			LPPF: "Leon",
			Region: 2,
			"Ordinance Passed": "09/14/2021",
			"Resolution Passed": "09/13/2022",
			"Local Resource": "https://cms.leoncountyfl.gov/",
		},
		{
			key: 3,
			LPPF: "Marion",
			Region: 3,
			"Ordinance Passed": "07/06/2021",
			"Resolution Passed": "09/20/2022",
			"Local Resource": "https://www.marionfl.org/",
		},
		{
			key: 14,
			LPPF: "Miami-Dade",
			Region: 11,
			"Ordinance Passed": "09/01/2021",
			"Resolution Passed": "09/01/2022",
			"Local Resource": "https://www.miamidade.gov/global/home.page",
		},
		{
			key: 16,
			LPPF: "Osceola",
			Region: 9,
			"Ordinance Passed": "06/06/2022",
			"Resolution Passed": "09/01/2022",
			"Local Resource": "https://www.osceola.org/",
		},
		{
			key: 9,
			LPPF: "Orange",
			Region: 7,
			"Ordinance Passed": "08/24/2021",
			"Resolution Passed": "09/27/2022",
			"Local Resource": "https://www.orangecountyfl.net/",
		},
		{
			key: 12,
			LPPF: "Palm Beach",
			Region: 9,
			"Ordinance Passed": "08/26/2021",
			"Resolution Passed": "09/13/2022",
			"Local Resource": "https://discover.pbcgov.org/Pages/default.aspx",
		},
		{
			key: 17,
			LPPF: "Volusia",
			Region: 4,
			"Ordinance Passed": "05/17/2022",
			"Resolution Passed": "10/18/2022",
			"Local Resource": "https://www.volusia.org/",
		},
		{
			key: 18,
			LPPF: "Polk",
			Region: 6,
			"Ordinance Passed": "05/03/2022",
			"Resolution Passed": "09/20/2022",
			"Local Resource": "https://www.polk-county.net/",
		},
		{
			key: 19,
			LPPF: "Hillsborough",
			Region: 6,
			"Ordinance Passed": "07/08/2022",
			"Resolution Passed": "11/03/2022",
			"Local Resource": "https://www.hillsboroughcounty.org/",
		},
		{
			key: 20,
			LPPF: "Broward",
			Region: 10,
			"Ordinance Passed": "04/13/2022",
			"Resolution Passed": "10/18/2022",
			"Local Resource": "https://www.broward.org/Pages/Welcome.aspx",
		},
	];
	const [idMap, setIdMap] = useState(() => {
		const res = {};
		for (let i of data) {
			res[i.LPPF] = i.key;
		}
		return res;
	});

	useEffect(() => {
		if (map.current) return; // initialize map only once
		const curMap = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		curMap.addControl(new mapboxgl.NavigationControl(), "top-right");
		map.current = curMap;
	}, []);
	const getCountyBoundaryData = (countyName) => {
		for (let curCounty of countiesData.features) {
			if (curCounty.properties.NAME === countyName) {
				return curCounty;
			}
		}
	};
	const removePreviousLayer = (layerName, sourceName) => {
		if (map.current.getLayer(layerName)) {
			map.current.removeLayer(layerName);
		}

		if (map.current.getSource(sourceName)) {
			map.current.removeSource(sourceName);
		}
	};
	const addHighlightLayer = (countyName) => {
		const data = getCountyBoundaryData(countyName);
		removePreviousLayer("county-highlight-layer", "county-highlight");

		map.current.addSource("county-highlight", {
			type: "geojson",
			data: data,
		});

		// Add a layer showing the state polygons.
		map.current.addLayer({
			id: "county-highlight-layer",
			type: "fill",
			source: "county-highlight",
			paint: {
				"fill-color": "rgba(200, 100, 240, 0.6)",
			},
		});
	};
	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
		map.current.on("load", () => {
			// Add a source for the state polygons.
			map.current.addSource("fl-state", {
				type: "geojson",
				data: countiesData,
			});

			// Add a layer showing the state polygons.
			map.current.addLayer({
				id: "fl-state-counties-layer",
				type: "fill",
				source: "fl-state",
				paint: {
					"fill-color": "rgba(200, 100, 240, 0.4)",
					"fill-outline-color": "rgba(200, 100, 240, 1)",
				},
			});

			// Change the cursor to a pointer when
			// the mouse is over the states layer.
			map.current.on("mouseenter", "fl-state-counties-layer", () => {
				map.current.getCanvas().style.cursor = "pointer";
			});

			// Change the cursor back to a pointer
			// when it leaves the states layer.
			map.current.on("mouseleave", "fl-state-counties-layer", () => {
				map.current.getCanvas().style.cursor = "";
			});

			map.current.on("click", "fl-state-counties-layer", (e) => {
				setCurName(e.features[0].properties.NAME);

				addHighlightLayer(e.features[0].properties.NAME);

				// handle popup
				const popupNode = document.createElement("div");
				const curState = data.find(
					(element) => element.LPPF === e.features[0].properties.NAME
				);
				console.log(curState);

				ReactDOM.render(
					<Popup
						lppf={curState.LPPF}
						region={curState.Region}
						ordinanceDate={curState["Ordinance Passed"]}
						resolutionDate={curState["Resolution Passed"]}
						localResourceUrl={curState["Local Resource"]}
					/>,
					popupNode
				);
				popUpRef.current
					.setLngLat(e.lngLat)
					.setDOMContent(popupNode)
					.addTo(map.current);
			});
		});
	}, []);
	// useEffect(() => {
	// 	if (!map.current || curName === "") return;

	// 	for (let curCounty of countiesData.features) {
	// 		if (curCounty.properties.NAME === curName) {
	// 			console.log(curCounty);
	// 			map.current.flyTo({
	// 				center: [
	// 					curCounty.geometry.coordinates[0][0][0],
	// 					curCounty.geometry.coordinates[0][0][1],
	// 				],
	// 				essential: true,
	// 			});
	// 		}

	// 		const ele = document.getElementsByTagName("tr");
	// 		const targetEle = null;
	// 		for (let i of ele) {
	// 			const curId = i.getAttribute("data-row-key");
	// 			i.style.backgroundColor = "white";
	// 			if (curId == idMap[curName]) {
	// 				i.scrollIntoView();
	// 				targetEle = i;
	// 			}
	// 		}
	// 		targetEle.style.backgroundColor = "lightblue";
	// 	}
	// }, [curName]);

	const onRowClick = (value) => {
		addHighlightLayer(value);
		setCurName(value);
	};

	const columns = [
		{
			title: "LPPF",
			dataIndex: "LPPF",
			key: "LPPF",
			render: (text, e) => {
				let name = e.LPPF;
				if (name === "Duval") name = "City of Jacksonville";
				return <span>{name}</span>;
			},
		},
		{
			title: "Region",
			dataIndex: "Region",
			key: "Region",
		},
		{
			title: "Ordinance Passed",
			dataIndex: "Ordinance Passed",
			key: "Ordinance Passed",
			render: (text, e) => {
				let name = e.LPPF;
				let url = `${name} County Passed Ordinance.pdf`;
				if (name === "Duval") {
					url = `COJ Passed Ordinance.pdf`;
				}

				return (
					<a href={url} target='_blank'>
						{text}
					</a>
				);
			},
		},
		{
			title: "Resolution Passed",
			key: "Resolution Passed",
			dataIndex: "Resolution Passed",
			render: (text, e) => {
				let name = e.LPPF;
				if (name === "Duval") {
					name = "COJ";
				}
				const url = `${name} Passed Resolution.pdf`;
				return (
					<a href={url} target='_blank'>
						{text}
					</a>
				);
			},
		},
		{
			title: "Local Resource",
			key: "Local Resource",
			dataIndex: "Local Resource",
			render: (text, rowInfo) => {
				return (
					<a href={text} target='_blank'>
						{`${rowInfo.LPPF} County`}
					</a>
				);
			},
		},
	];

	return (
		<section className='page-wrapper'>
			<Table
				pagination={false}
				className='table-container'
				columns={columns}
				dataSource={data}
				style={{
					fontSize: "12px!important",
					cursor: "pointer",
				}}
				onRow={(record, rowIndex) => {
					return {
						onClick: (event) => {
							onRowClick(record.LPPF);
						},
					};
				}}
			/>
			<div className='map-container' ref={mapContainer}></div>
		</section>
	);
}
