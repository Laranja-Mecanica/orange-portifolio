import { Skeleton } from "@mui/material"

function SkeletonCard() {
  return (
    <Skeleton
      variant="rectangular"
      animation={false}
      sx={{
        width: 390,
        height: 258,
        left: 445,
        borderRadius: "4px",
        backgroundColor: "#FAFBFC",
        display: { xs: "none", md: "inline-block" }

      }}
    >
    </Skeleton>
  )
}

export default SkeletonCard
