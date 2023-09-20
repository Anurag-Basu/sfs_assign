export const importAllImages = async (imagePaths: string[]) => {
  const imageElements = await Promise.all(
    imagePaths.map(async (imagePath) => {
      try {
        const module = await import(`../../../assets/${imagePath}`);
        const imageSrc = module.default;
        return <img key={imagePath} src={imageSrc} alt={imagePath} />;
      } catch (error) {
        console.error(`Error loading image: ${imagePath}`, error);
        return null;
      }
    })
  );

  return imageElements.filter((element) => element !== null);
};
