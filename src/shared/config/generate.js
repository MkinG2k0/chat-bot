module.exports = {
	debug: true,
	isReplaceNameFolder: true,
	templates: {
		ent: {
			generate: 'src/entities/',
			template: 'src/shared/templates/entities',
		},
		'ent-api': {
			generate: 'src/entities/*/api',
			template: 'src/shared/templates/api',
		},
		'ent-ui': {
			generate: 'src/entities/*/ui/',
			template: 'src/shared/templates/comp',
		},
		feat: {
			generate: 'src/features/',
			template: 'src/shared/templates/feature',
		},
		'feat-api': {
			generate: 'src/features/*/api',
			template: 'src/shared/templates/api',
		},
		'feat-ui': {
			generate: 'src/features/*/ui/',
			template: 'src/shared/templates/comp',
		},
		page: {
			generate: 'src/pages/',
			template: 'src/shared/templates/page',
		},
		'page-ui': {
			generate: 'src/pages/*/ui/',
			template: 'src/shared/templates/comp',
		},
		slice: {
			generate: 'src/*/model',
			rootDir: false,
			template: 'src/shared/templates/slice',
		},
		ui: {
			generate: 'src/shared/ui/',
			template: 'src/shared/templates/comp',
		},
		wid: {
			generate: 'src/widget/',
			template: 'src/shared/templates/widget',
		},
		'wid-api': {
			generate: 'src/widget/*/api',
			template: 'src/shared/templates/api',
		},
		'wid-ui': {
			generate: 'src/widget/*/ui/',
			template: 'src/shared/templates/comp',
		},
	},
}
