export function dSniff(obj, pkey, ckey, value) {
	if(pkey === 'details') {
		if (typeof value === 'undefined')
			return obj[ckey];
		else {
			obj[ckey] = value;
			return obj;
		}
	} else if (typeof value === 'undefined'){
		return obj[pkey][ckey];
	} else {
		obj[pkey][ckey] = value;
		return obj;
	}
}
