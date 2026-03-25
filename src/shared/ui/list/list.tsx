import React from "react";
import { Box } from "@zhenyzh/common-ui/components";

type ContentListProps<T> = {
  data: T[] | undefined;
  renderItem: (item: T, index: number, array: T[]) => React.ReactNode;
  getKey?: (key: T) => React.Key;
  empty?: React.ReactNode;
  headerTitle?: React.ReactNode;
  skeleton?: React.ReactNode;
  className?: string;
  listClassName?: string | ((item: T, index: number, array: T[]) => string);
  skeletonCount?: number;
  isLoading?: boolean;
};

const SKELETON_ITEM_COUNT = 10;

export const List = <T,>({
  data = [],
  renderItem,
  getKey,
  empty,
  headerTitle,
  skeleton,
  className,
  listClassName,
  skeletonCount,
  isLoading,
}: ContentListProps<T>) => {
  return (
    <>
      {headerTitle && headerTitle}
      <Box className={className}>
        {isLoading
          ? Array.from({ length: skeletonCount ?? SKELETON_ITEM_COUNT }).map(
              (_, i) => <Box key={i}>{skeleton}</Box>,
            )
          : !!data.length
            ? data.map((item, index, array) => (
                <Box
                  key={getKey?.(item) ?? index}
                  className={
                    typeof listClassName === "function"
                      ? listClassName(item, index, array)
                      : listClassName
                  }
                >
                  {renderItem(item, index, array)}
                </Box>
              ))
            : empty}
      </Box>
    </>
  );
};
