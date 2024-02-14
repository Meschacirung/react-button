import {
  button,
  ghostButton,
  ghostIconButton,
  ghostLeadingIconButton,
  ghostTrailingIconButton,
  iconButton,
  leadingIconButton,
  outlinedButton,
  outlinedIconButton,
  outlinedLeadingIconButton,
  outlinedTrailingIconButton,
  softButton,
  softIconButton,
  softLeadingIconButton,
  softTrailingIconButton,
  trailingIconButton
} from "@tailus/themer-button";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn, cloneElement } from 'lib/utils';
import React from "react";

const variantsMap = {
  solid: {
    only: iconButton,
    leading: leadingIconButton,
    trailing: trailingIconButton,
  },
  soft: {
    only: softIconButton,
    leading: softLeadingIconButton,
    trailing: softTrailingIconButton,
  },
  ghost: {
    only: ghostIconButton,
    leading: ghostLeadingIconButton,
    trailing: ghostTrailingIconButton,
  },
  outlined: {
    only: outlinedIconButton,
    leading: outlinedLeadingIconButton,
    trailing: outlinedTrailingIconButton,
  }
};

const simpleButtonVariants = {
  solid: button,
  soft: softButton,
  ghost: ghostButton,
  outlined: outlinedButton,
}

const colorsMap = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
  gray: 'gray',
  neutral: 'neutral',
};

const sizesMap = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const buttonVariants = cva([''], {
  variants: {
    variant: variantsMap,
    colorVariant: colorsMap,
    size: sizesMap,
  },
  defaultVariants: {
    variant: "solid",
    colorVariant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  label?: string;
  icon?: 'only' | 'leading' | 'trailing';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  colorVariant,
  variant,
  size,
  disabled,
  label,
  icon,
  href,
  children,
  ...props
}) => {

  const buttonUtilities = simpleButtonVariants[variant!][colorVariant!]?.[size!];
  const iconButtons =  icon && variantsMap[variant!][icon][colorVariant!][size!]
  
  const classes = icon ? cn(iconButtons, className) : cn(buttonUtilities, className);
  const Component = href ? 'a' : 'button';

  return (
    <Component href={href} className={classes} {...props} disabled={disabled}>
        {!icon && <span>{label}</span>}
        { icon === 'only' && <span className="sr-only">{label}</span> }
        {icon === 'trailing' && <span>{label}</span>}
        { icon &&
          cloneElement(children as React.ReactElement, variantsMap[variant!][icon!].icon[size!])
        }
        { icon === 'leading' && <span>{label}</span> }
    </Component>
  )
};

Button.defaultProps = {
  variant: "solid",
  colorVariant: "primary",
  size: "md",
}

export default Button