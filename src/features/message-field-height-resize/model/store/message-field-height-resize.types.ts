export type MessageFieldHeightResizeStore = MessageFieldHeightResize & {
  actions: MessageFieldHeightResizeActions;
};

export type MessageFieldHeightResize = {
  height: number;
};

export type MessageFieldHeightResizeActions = {
  setHeight: (height: number) => void;
};
