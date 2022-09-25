export type MethodsPayment = 'credit' | 'debit' | 'money'
export type ListPayments = Array<{ type: MethodsPayment; label: string }>
