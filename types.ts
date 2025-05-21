export type RootStackParamList = {
  Directories: undefined;
  Messages: {
    directoryId: string;
    directoryName: string;
  };
};

export interface Directory {
  id: string;
  name: string;
  messageCount: number;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  sender: string;
}

export interface MessageDataType {
  [key: string]: Message[];
}