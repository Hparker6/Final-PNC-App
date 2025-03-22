import { Card, CardProps } from '@mui/material';
import { motion, HTMLMotionProps } from 'framer-motion';

type AnimatedCardProps = Omit<CardProps, keyof HTMLMotionProps<"div">> & HTMLMotionProps<"div">;

const MotionCard = motion(Card);

export const AnimatedCard = ({ children, sx, ...props }: AnimatedCardProps) => {
  return (
    <MotionCard
      {...props}
      initial={{ y: 0 }}
      whileHover={{ 
        y: -16,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      sx={{ 
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        },
        ...sx
      }}
    >
      {children}
    </MotionCard>
  );
};
