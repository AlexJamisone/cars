export function parseUrl(url: string): string {
	const lastIndex = url.lastIndexOf('/');
	if (lastIndex !== -1) {
		return url.substring(lastIndex + 1);
	} else {
		return url;
	}
}
