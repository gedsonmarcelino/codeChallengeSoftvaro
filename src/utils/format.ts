
/**
 * Format date to PT-BR
 * @param value Date
 * @returns string
 */
export const formatDate = ( value: Date ) : string => new Intl.DateTimeFormat('pt-BR', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
}).format(value)