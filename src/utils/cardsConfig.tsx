type CardItem = {
  title: string;
  text: string;
  technologies: string[];
  imageUrl: string;
};

export const cardsConfig: CardItem[] = [
  {
    title: "Project one",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, metus arcu vivamus class taciti pellentesque. Nunc hendrerit primis natoque suspendisse nisl neque pharetra magna cras tellus mollis, faucibus arcu sapien tortor dictum at quam vulputate rhoncus imperdiet.",
    technologies: ["React.js", "Mui", "Storybook"],
    imageUrl:
      "https://42studio.io/wp-content/uploads/2021/10/shutterstock_1818798476-1.jpg",
  },
];
