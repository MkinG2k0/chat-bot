const paths = (...paths: string[]) => '/'.concat(paths.join('/'))

export const route = {
	all: () => '*',
	auth: () => 'auth',
	group: () => 'group',
	main: () => '/',
	profile: () => 'profile',
	schedule: () => 'schedule',
	settings: () => 'settings',
}
