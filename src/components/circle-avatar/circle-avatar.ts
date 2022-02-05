import Block from "../../utils/block";
import "./circle-avatar.sass";

const template = `
img(src=url).circle-avatar
`;

type CircleAvatarProperties = {
  url: string;
  [key: string]: any;
};

export default class CircleAvatar extends Block {
  constructor(properties: CircleAvatarProperties) {
    super(template, properties);
  }
}
