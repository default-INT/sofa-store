export const getBase64Uri = (val?: string | null) => {
  if (!val) return '';

  return `data:image/jpeg;base64,${val}`;
};
