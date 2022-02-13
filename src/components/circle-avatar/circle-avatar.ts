import Block from "../../utils/block";
import "./circle-avatar.sass";

const template = `
img(src=url).circle-avatar
`;

type CircleAvatarProperties = {
  url: string;
};

export default class CircleAvatar extends Block<CircleAvatarProperties> {
  constructor(properties: CircleAvatarProperties) {
    super(template, properties);
  }
}
