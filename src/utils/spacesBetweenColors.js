export const spacesBetweenColors = (colorName) => {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
};
