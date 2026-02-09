import { Box, Typography } from "@zhenyzh/common-ui/components";

type ContentListProps<T> = {
  title?: string;
  data: T[] | undefined;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  listClassName?: string;
  isLoading?: boolean;
  skeleton?: React.ReactNode;
  emptyMessage?: string;
  skeletonCount?: number;
};

const SKELETON_ITEM_COUNT = 10;

export const List = <T,>({
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
      <Box className={className}>
        {isLoading
          ? Array.from({ length: skeletonCount || SKELETON_ITEM_COUNT }).map(
              (_, i) => <Box key={i}>{skeleton}</Box>,
            )
          : data.map((item, index) => (
              <Box key={index} className={listClassName}>
                {renderItem(item)}
              </Box>
            ))}
      </Box>
    </Box>
  );
};
