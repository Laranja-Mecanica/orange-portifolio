import { Skeleton } from '@mui/material'

function SkeletonCard() {
  return (
    <Skeleton
      variant="rectangular"
      animation={false}
      sx={{
        width: '100%',
        height: 258,
        left: 445,
        borderRadius: '4px',
        backgroundColor: '#FAFBFC',
        display: { xs: 'none', sm: 'inline-block' },
      }}
    ></Skeleton>
  )
}

export default SkeletonCard
