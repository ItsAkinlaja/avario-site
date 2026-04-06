import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "none";
}

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "none";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b4d400] ring-offset-background disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[#0d3e2d] text-white hover:bg-[#b4d400] hover:text-[#0d3e2d] border border-transparent",
  secondary:
    "border-2 border-[#0d3e2d] text-[#0d3e2d] hover:bg-[#b4d400] hover:border-[#b4d400] hover:text-[#0d3e2d]",
};

// Arrow icon component
const ArrowIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon = "none",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon === "arrow" && <ArrowIcon />}
    </button>
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  icon = "none",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon === "arrow" && <ArrowIcon />}
    </Link>
  );
}
