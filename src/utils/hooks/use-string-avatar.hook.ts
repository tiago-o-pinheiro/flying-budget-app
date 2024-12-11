function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export const useStringAvatar = (name: string) => {
  const stringName =
    name.split(" ").length > 1
      ? name.split(" ")[0][0] + name.split(" ")[1][0]
      : name[0];

  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 46,
      height: 46,
    },
    children: stringName,
  };
};
