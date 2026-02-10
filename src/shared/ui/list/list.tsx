import React from "react";
import { Box } from "@zhenyzh/common-ui/components";

type ContentListProps<T> = {
  headerTitle?: React.ReactNode;
  data: T[] | undefined;
  renderItem: (item: T, index?: number) => React.ReactNode;
  className?: string;
  listClassName?: string;
  isLoading?: boolean;
  skeleton?: React.ReactNode;
  skeletonCount?: number;
};

const SKELETON_ITEM_COUNT = 10;

export const List = <T,>({
  headerTitle,
  data = [],
  renderItem,
  className,
  listClassName,
  isLoading,
  skeleton,
  skeletonCount,
}: ContentListProps<T>) => {
  return (
    <Box as="section">
      {headerTitle && headerTitle}
      <Box className={className}>
        {isLoading
          ? Array.from({ length: skeletonCount || SKELETON_ITEM_COUNT }).map(
              (_, i) => <Box key={i}>{skeleton}</Box>,
            )
          : data.map((item, index) => (
              <Box key={index} className={listClassName}>
                {renderItem(item, index)}
              </Box>
            ))}
      </Box>
    </Box>
  );
};
