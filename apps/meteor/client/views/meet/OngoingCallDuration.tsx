import { Box } from '@rocket.chat/fuselage';
import React, { useEffect, useState } from 'react';

type OngoingCallDurationProps = {
	counter: number;
};

const OngoingCallDuration = ({ counter: defaultCounter = 0 }: OngoingCallDurationProps) => {
	const [counter, setCounter] = useState(defaultCounter);
	useEffect(() => {
		setTimeout(() => setCounter(counter + 1), 1000);
	}, [counter]);

	return (
		<Box color='white' textAlign='center'>
			{new Date(counter * 1000).toISOString().slice(11, 19)}
		</Box>
	);
};

export default OngoingCallDuration;
