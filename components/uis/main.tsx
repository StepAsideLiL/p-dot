import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mainVarients = cva("min-h-screen", {
  variants: {
    variant: {
      default: "py-4",
      md: "max-w-5xl mx-auto container space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface MainProps
  extends React.BaseHTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof mainVarients> {}

export const Main: React.FC<MainProps> = ({ className, variant, ...props }) => {
  return (
    <main className={cn(mainVarients({ variant, className }))} {...props} />
  );
};
