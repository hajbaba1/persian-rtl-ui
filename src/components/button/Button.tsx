import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
export type ButtonVariant='primary'|'secondary'|'outline'|'ghost'|'danger'
export type ButtonSize='sm'|'md'|'lg'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:ButtonVariant;size?:ButtonSize}
const variants:Record<ButtonVariant,string>={primary:'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',secondary:'bg-zinc-900 text-white hover:bg-zinc-800 disabled:bg-zinc-400',outline:'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 disabled:text-zinc-400',ghost:'bg-transparent text-zinc-900 hover:bg-zinc-100 disabled:text-zinc-400',danger:'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300'}
const sizes:Record<ButtonSize,string>={sm:'min-h-9 px-3 text-sm rounded-lg',md:'min-h-10 px-4 text-sm rounded-xl',lg:'min-h-12 px-5 text-base rounded-xl'}
export function Button({className,variant='primary',size='md',type='button',...props}:ButtonProps){return <button type={type} className={cn('inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70',variants[variant],sizes[size],className)} {...props}/>}
