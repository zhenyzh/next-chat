import React from "react";
import { Box } from "@zhenyzh/common-ui/components";

type ContentListProps<T> = {
  data: T[] | undefined;
  renderItem: (item: T, index: number, array: T[]) => React.ReactNode;
  getKey: (key: T) => React.Key;
  headerTitle?: React.ReactNode;
  skeleton?: React.ReactNode;
  className?: string;
  listClassName?: string;
  skeletonCount?: number;
  isLoading?: boolean;
};

const SKELETON_ITEM_COUNT = 10;

export const List = <T,>({
  headerTitle,
  data = [],
  renderItem,
  getKey,
  className,
  listClassName,
  isLoading,
  skeleton,
  skeletonCount,
}: ContentListProps<T>) => {
  return (
    <Box>
      {headerTitle && headerTitle}
      <Box className={className}>
        {isLoading
          ? Array.from({ length: skeletonCount ?? SKELETON_ITEM_COUNT }).map(
              (_, i) => <Box key={i}>{skeleton}</Box>,
            )
          : data.map((item, index, array) => (
              <Box key={getKey(item)} className={listClassName}>
                {renderItem(item, index, array)}
              </Box>
            ))}
      </Box>
    </Box>
  );
};
