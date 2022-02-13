import Block from "../../utils/block";

const template = `
input(id= id, type= type, name= name)
`;

type InputProperties = {
  id: string;
  type: string;
  name: string;
};

export default class Input extends Block<InputProperties> {
  constructor(properties: InputProperties) {
    super(template, properties);
  }
}
