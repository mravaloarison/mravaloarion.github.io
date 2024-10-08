import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function Video({ link }) {
	return (
		<Card variant="soft">
			<CardContent>
				<iframe frameBorder="0" height={261} src={link}></iframe>
			</CardContent>
		</Card>
	);
}
