import React from "react";
import clsx from "clsx";
import { Box, Card, Skeleton } from "@zhenyzh/common-ui/components";
import s from "./messages.skeleton.module.scss";

export function MessagesSkeleton() {
  const SKELETON_MESSAGES = Array.from({ length: 2 }).map((_, i) => ({
    id: i,
    fromMe: i % 2 === 0,
  }));

  return (
    <>
      {SKELETON_MESSAGES.map((skeleton) => (
        <Card
          key={skeleton.id}
          className={clsx(s.message, skeleton.fromMe && s.me)}
        >
          <Skeleton circle className={s.avatar} />
          <Card style={{ width: "100%" }}>
            <Box className={s.bubble} style={{ paddingTop: 10 }}>
              <Skeleton width="70%" height={12} style={{ marginBottom: 4 }} />
              <Skeleton width="80%" height={14} style={{ marginBottom: 4 }} />
              <Skeleton width="60%" height={15} style={{ marginBottom: 4 }} />
              <Skeleton width="90%" height={13} />
            </Box>
          </Card>
        </Card>
      ))}
    </>
  );
}
