import cardImage1 from "../assets/Vector1.png";
import cardImage2 from "../assets/Vector2.png";
import cardImage3 from "../assets/Vector3.png";
import cardImage4 from "../assets/Vector4.png";
import cardImage5 from "../assets/Vector5.png";

interface CardData {
  title: string;
  topic: string;
  tag: string;
  type: "link" | "video" | "pdf";
}

export const cardData: CardData[] = [
  {
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "link",
  },
  {
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "video",
  },
  {
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "link",
  },
  {
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Wellbeing",
    type: "video",
  },
  {
    title: "The ultimate guide to Workplace Chat",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "pdf",
  },
  {
    title: "Taking stock of mental health in your workplace",
    topic: "Sample Topic",
    tag: "Secure Base",
    type: "pdf",
  },
];

const images = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export const foundationPrinciples = [
  {
    title: "Secure Base",
    value: "Secure Base",
  },
  {
    title: "Sense of Appreciation",
    value: "Sense of Appreciation",
  },
  {
    title: "Learning Organisation",
    value: "learning Organisation",
  },
  {
    title: "Mission and Vision",
    value: "mission and Vision",
  },
  {
    title: "Wellbeing",
    value: "Wellbeing",
  },
];

export const documentTypes = [
  {
    title: "DOC",
    value: "doc",
  },
  {
    title: "Link",
    value: "link",
  },
  {
    title: "PDF",
    value: "pdf",
  },
  {
    title: "Video",
    value: "video",
  },
];

export const categories = [
  {
    title: "Category 1",
    value: "Category 1",
  },
  {
    title: "Category 2",
    value: "Category 2",
  },
  {
    title: "Category 3",
    value: "Category 3",
  },
  {
    title: "Category 4",
    value: "Category 4",
  },
];
