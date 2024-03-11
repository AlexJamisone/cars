export function parseUrls(url: string | string[]): string | string[] {
	if (typeof url === 'string') {
		const parts = url.split('/');
		return parts[parts.length - 1];
	} else if (Array.isArray(url)) {
		return url.map((url) => {
			const parts = url.split('/');
			return parts[parts.length - 1];
		});
	} else {
		throw new Error('Invalid input. Expected string or string array.');
	}
}
