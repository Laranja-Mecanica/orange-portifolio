import { createUploadthing } from 'uploadthing/next-legacy'

const f = createUploadthing()

export const ourFileRouter = {
  thumbUploader: f({ image: { maxFileSize: '2MB' } })
    .middleware(async () => {})
    .onUploadComplete(async ({ metadata, file }) => {
      return { file }
    }),
}
