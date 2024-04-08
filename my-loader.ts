export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const serverUrl = "https://opplending.com";
  return `${serverUrl}/${src}`;
}
