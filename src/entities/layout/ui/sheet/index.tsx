import { FC } from 'react'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from 'shared/ui/sheet'

export const MainSheet: FC = () => {
	return (
		<Sheet>
			<SheetTrigger>Open</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your account and remove your data from our
						servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
