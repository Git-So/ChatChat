export enum MessageType {
  Chat,
  Alert,
  Card,
  Other,
}

export interface Message {
  id: number;
  type: MessageType;
  sender_id: string;
  sender_avatar: string;
  sender_name: string;
  content: string;
  is_self: boolean;
}
