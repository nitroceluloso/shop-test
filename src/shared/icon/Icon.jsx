import { getIcon } from "./Icon.helper";

const Icon = ({ name, height, width }) => getIcon(name, height, width);

export default Icon;