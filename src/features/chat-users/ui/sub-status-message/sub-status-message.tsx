import type { StatusMessage } from "@/entities/messages/model/types";
import { CheckStatusMessage } from "@/shared/ui";

type Props = {
  status: StatusMessage;
};

export function SubStatusMessage({ status }: Props) {
  return <CheckStatusMessage status={status} />;
}
