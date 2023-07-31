import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "./utils/utils";

export const buttonVariants = cva(
  `active:scale-95 inline-flex items-center justify-center font-medium
  transition-all duration-150 focus:outline-none focus:ring-offset-2 disabled:opacity-30 focus:ring-2
  disabled:pointer-events-none focus:ring-slate-600 gap-2`,
  {
    variants: {
      variant: {
        default: "bg-slate-200 text-black hover:bg-slate-100",
        primary: "bg-primary text-white hover:bg-primaryHover",
        light: "bg-light text-black hover:bg-lightHover",
        outline:
          "bg-transparent text-black border-2 border-primary hover:bg-primaryHover hover:text-white",
        ghost: "bg-transparent hover:bg-primaryHover hover:text-white",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent"
      },
      size: {
        default: "h-10 py-2 px-4 text-base",
        sm: "h-9 px-2 text-md",
        lg: "h-12 px-8 text-xl leading-none"
      },
      rounded: {
        default: "rounded-3xl",
        sm: "rounded-xl",
        lg: "rounded-3xl",
        none: "rounded-none"
      },
      stateColor: {
        error:
          "bg-error hover:bg-errorHover border-error hover:border-errorHover text-black hover:text-black",
        success:
          "bg-success hover:bg-successHover border-success hover:border-successHover text-black hover:text-black",
        warning:
          "bg-warning hover:bg-warningHover border-warning hover:border-warningHover text-black hover:text-black",
        info: "bg-info hover:bg-infoHover border-info hover:border-infoHover text-black hover:text-black"
      },
      iconSize: {
        sm: "[&>svg]:w-6 [&>svg]:h-6",
        md: "[&>svg]:w-8 [&>svg]:h-8",
        xl: "[&>svg]:w-10 [&>svg]:h-10"
      },
      loading: {
        default: "disabled:opacity-80"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      iconSize: "sm"
    }
  }
);

type LoadingStyle = VariantProps<typeof buttonVariants>["loading"];

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button: FC<IButtonProps> = forwardRef<
  HTMLButtonElement,
  IButtonProps
>(
  (
    {
      isLoading,
      className,
      children,
      variant,
      size,
      rounded,
      leftIcon,
      rightIcon,
      iconSize,
      stateColor,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            stateColor,
            variant,
            size,
            rounded,
            iconSize,
            loading: isLoading
              ? ("default" as LoadingStyle)
              : ("" as LoadingStyle),
            className
          })
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </button>
    );
  }
);

Button.displayName = "Button";
