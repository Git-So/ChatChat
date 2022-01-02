export enum ChatType {
  Contact = "contact", // 联系人
  Group = "group", // 群组
  Channel = "channel", // 频道
  Other = "other", // 其他
}

export interface Chat {
  id: number;
  title: string;
  avatar: string;
  type: ChatType;
  type_value: string;
  preview: string;
  unread: number;
  time: number;
}
