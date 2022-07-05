function getTimeMap(X) {
	let timeMap = {
		w: 0, // 604800
		d: 0, // 86400
		h: 0, // 3600
		m: 0, // 60
		s: 0,	// 1
	}
	/* get weeks */
	let modByWeek = X % 604800;
	if (modByWeek != X || modByWeek == 0) {
		timeMap.w += Math.floor(X / 604800);
		X -= timeMap.w * 604800;
		if (X <= 0) {
			return timeMap;
		}
	}

	let modByDays = X % 86400;
	if (modByDays != X || modByDays == 0) {
		timeMap.d += Math.floor(X / 86400);
		X -= timeMap.d * 86400;
		if (X <= 0) {
			return timeMap;
		}
	}

	let modByHours = X % 3600;
	if (modByHours != X || modByHours == 0) {
		debugger;
		timeMap.h += Math.floor(X / 3600);
		X -= timeMap.h * 3600;
		if (X <= 0) {
			return timeMap;
		}
	}

	let modByMinutes = X % 60;
	if (modByMinutes != X || modByMinutes == 0) {
		timeMap.m += Math.floor(X / 60);
		X -= timeMap.m * 60;
		if (X <= 0) {
			return timeMap;
		}
	}

	timeMap.s = X;

	return timeMap;
}

function solution(X) {
	const timeMap = getTimeMap(X);
	let retArr = [];

	for (const time in timeMap) {
		if (timeMap[time] != 0) {
			retArr.push(`${timeMap[time]}${time}`);
			if (retArr.length == 2) {
				break;
			}
		}
	}

	console.log(timeMap);
	console.log(retArr.join(''));

}


//solution(1209600); // 2w
//solution(1468800); // 2w 3d
//solution(1483200); // 2w 3d 4h
//solution(1483500); // 2w 3d 4h 5m
//solution(1483530); // 2w 3d 4h 5m 30s
solution(7263); // 