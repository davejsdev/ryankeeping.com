import React from "react";
import ButtonLink from "./ButtonLink";
import Card from "./Card.tsx";

const formatDate = new Intl.DateTimeFormat('en-CA', {
    day: '2-digit',
    month: 'long',
	weekday: 'long',
    timeZone: 'UTC',
	
  }).format;

type Dates = {
    day: string;
    date: Date;
    distance: number;
    start: string;
    startProvince: string;
    end: string;
    endProvince: string;
    description?: string;
    accomodations?: string;
};

const CurrentLocation = ({ schedule }: { schedule: Dates[]}) => {
	const currentDate = new Date();

	const currentLocation = schedule.find(({ date }) => {
		return date.getUTCDate() === currentDate.getUTCDate() && date.getUTCMonth() === currentDate.getUTCMonth();
	});

	const formattedDate = formatDate(currentLocation?.date);

	return (
		<Card title={`Today's Run - ${formattedDate}`}>
			{currentLocation?.start}, {currentLocation?.startProvince} → {currentLocation?.end}, {currentLocation?.endProvince}

			<ButtonLink href="/route">Full Route</ButtonLink>
		</Card>
	);
}

export default CurrentLocation;