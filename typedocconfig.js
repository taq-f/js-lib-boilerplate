module.exports = {
	out: 'doc',
	mode: 'file',
	exclude: "**/+(browser|ColumnPropertyDefinition|EventEmitter|EventListenerManager|logo|myQuery|request|SortParam|StyleLoader|Utility|version).ts",
	excludeExternals: true,
	excludePrivate: true,
	ignoreCompilerErrors: true,
}
