import { Card, Typography } from "@zhenyzh/common-ui/components";
import s from "./error-component.module.scss";

export function ErrorComponent({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) {
  return (
    <Card className={s.container}>
      <Typography variant="h1" className={s.text}>
        Что-то пошло не так!
      </Typography>
      {errorMessage && (
        <Typography className={s.text} variant="h2">
          {errorMessage}
        </Typography>
      )}
    </Card>
  );
}
