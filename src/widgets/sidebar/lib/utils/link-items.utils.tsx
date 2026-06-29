import {
  MessageCircleMoreIcon,
  SettingsIcon,
  UserPenIcon,
} from "@zhenyzh/common-ui/icons";
import type { LinkType } from "../../model/types";
import { paths } from "@/shared/configs";

export function linkItems() {
  return [
    {
      link: paths.profile(),
      label: "Профиль",
      icon: <UserPenIcon />,
    },
    {
      link: paths.chat(),
      label: "Чат",
      icon: <MessageCircleMoreIcon />,
    },
    {
      link: paths.settings(),
      label: "Настройки",
      icon: <SettingsIcon />,
    },
  ] satisfies LinkType[];
}
