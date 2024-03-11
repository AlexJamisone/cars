import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError, UTApi } from 'uploadthing/server';
import { auth } from '@clerk/nextjs';
const f = createUploadthing();

export const utapi = new UTApi();

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: '16MB', maxFileCount: 1 } })
		// Set permissions and file types for this FileRoute
		.middleware(async () => {
			const { userId } = auth();
			if (!userId) throw new UploadThingError('Unauthorized');
			return { userId };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log('Upload complete for userId:', metadata.userId);
			console.log('file url', file.url);
			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
