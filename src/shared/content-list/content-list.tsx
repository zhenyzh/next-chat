import clsx from "clsx";

import { Box, Typography } from "@zhenyzh/common-ui/components";

type ContentListProps<T> = {
  title?: string;
  data: T[] | undefined;
  renderItem: (item?: T) => React.ReactNode;
  className?: string;
  listClassName?: string;
  isLoading?: boolean;
  skeleton?: React.ReactNode;
  emptyMessage?: string;
  skeletonCount?: number;
};

const SKELETON_ITEM_COUNT = 10;

export const ContentList = <T,>({
  title,
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
      {title && <Typography variant="h2">{title}</Typography>}
      <Box className={clsx(className, listClassName)}>
        {isLoading
          ? Array.from({ length: SKELETON_ITEM_COUNT || skeletonCount }).map(
              (_, i) => <Box key={i}>{skeleton}</Box>,
            )
          : data.map((item, index) => (
              <Box key={index}>{renderItem(item)}</Box>
            ))}
      </Box>
    </Box>
  );
};
