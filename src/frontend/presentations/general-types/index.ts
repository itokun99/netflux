import { UrlObject } from 'url';

export type ColorType = 'dark' | 'light' | 'error' | 'primary' | 'warning' | 'secondary';
export type InputType = 'text' | 'number' | 'password' | 'textarea' | 'search' | 'email' | 'date';
export type ButtonVariantType = 'contained' | 'outlined';
export type SizeType = 'small' | 'default' | 'large';

export type UrlType = string | (UrlObject & string);

export interface MenuItemInterface {
  id: number;
  title: string;
  href: UrlType;
}