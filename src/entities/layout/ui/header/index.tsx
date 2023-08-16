import { ModeToggle } from 'entities/layout/ui/theme-mode'

import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from 'shared/ui/avatar'
import { Command, CommandItem } from 'shared/ui/command'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className={'px-4 py-2 bg-background text-accent-foreground row justify-between'}>
			<div></div>
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

	const onSignOut = () => {}

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
