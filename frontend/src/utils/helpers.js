export const isInputStr = (e) => {
	const isNumber = /[0-9]/.test(e.key);
	const isDot = '.' === e.key;
	const isDash = '-' === e.key;
	const isShortcutKey = e.ctrlKey || e.metaKey;
	const isBackspace = e.key === 'Backspace' || e.key === 'Delete';

	if (!isNumber && !isShortcutKey && !isBackspace && !isDot && !isDash) {
		e.preventDefault();
	}
};
