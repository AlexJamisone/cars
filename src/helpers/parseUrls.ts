export function parseUrls(urls: string[]): string[] {
	return urls.map((url) => {
		const parts = url.split('/');
		return parts[parts.length - 1];
	});
}
