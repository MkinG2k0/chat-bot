import { useContext } from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/dropdown-menu'
import { themeContext } from 'shared/hook/use-theme'
import { Button } from 'shared'

import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
	const { setTheme } = useContext(themeContext)

	const onToggleTheme = (theme: string) => {
		return () => {
			setTheme(theme)
		}
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className={'bg-background'} size={'icon'} variant={'ghost'}>
					<Sun className={'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'} />
					<Moon
						className={'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'}
					/>
					<span className={'sr-only'}>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={'end'}>
				<DropdownMenuItem onClick={onToggleTheme('light')}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={onToggleTheme('dark')}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={onToggleTheme('green')}>Green</DropdownMenuItem>
				<DropdownMenuItem onClick={onToggleTheme('system')}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
