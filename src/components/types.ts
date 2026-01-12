export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  onClose: () => void;
  animation?: "fade" | "pop" | "slide";
}

// Define the allowed positions
export type PositionType =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

// Define the properties for triggering a notification
export interface NotificationTriggerProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  duration: number;
  animation?: "fade" | "pop" | "slide";
}

// Define the return type of the hook
export interface UseNotificationReturn {
  NotificationComponent: JSX.Element;
  triggerNotification: (notificationProps: NotificationTriggerProps) => void;
}
