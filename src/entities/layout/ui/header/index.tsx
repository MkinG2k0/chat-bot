import { useContext } from 'react'

import { ModeToggle } from 'entities/layout/ui/theme-mode'
import { authService } from 'entities/auth/model'

import { NavigationMenu, NavigationMenuList } from 'shared/ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from 'shared/ui/avatar'
import { Command, CommandItem } from 'shared/ui/command'
import { Button, Large, NavBtn } from 'shared'

import { route } from 'core/providers/with-router/config'
import { Menu } from 'lucide-react'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className={'border-b-accent border-b-2 px-4 py-2 text-accent-foreground row justify-between'}>
			<Button className={'sm:hidden px-2'} variant={'outline'}>
				<Menu />
			</Button>
			<NavigationMenu className={'max-sm:hidden'}>
				<NavigationMenuList>
					<NavBtn to={route.main()} variant={'ghost'}>
						Главная
					</NavBtn>
					<NavBtn to={route.group()} variant={'ghost'}>
						Группы
					</NavBtn>
					<NavBtn to={route.schedule()} variant={'ghost'}>
						Расписание
					</NavBtn>
					<NavBtn to={route.settings()} variant={'ghost'}>
						Настройки
					</NavBtn>
				</NavigationMenuList>
			</NavigationMenu>
			<div className={'row gap-4'}>
				<ModeToggle />
				<UserAvatar />
			</div>
		</div>
	)
}

const UserAvatar = () => {
	const image = ''
	const name = 'MK'

	const onSignOut = () => {
		authService.logout()
		console.log('asd')
	}

	const onSignIn = () => {}

	return (
		<Popover>
			<PopoverTrigger>
				<Avatar>
					<AvatarImage src={image} />
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			</PopoverTrigger>
			<PopoverContent>
				<Command>
					<CommandItem>Профиль</CommandItem>
					<CommandItem>Настройки</CommandItem>
					<CommandItem onSelect={onSignOut}>Выход</CommandItem>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
