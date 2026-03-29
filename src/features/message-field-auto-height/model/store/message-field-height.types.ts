export type MessageFieldHeightStore = MessageFieldHeight & {
  actions: MessageFieldHeightActions;
};

export type MessageFieldHeight = {
  height: number;
};

export type MessageFieldHeightActions = {
  setHeight: (height: number) => void;
};
