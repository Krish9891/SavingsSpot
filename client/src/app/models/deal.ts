export interface Deal{
    dealId: number
    title: string
    description: string
    url: string
    valueForMoney?: number
    date?: string
    mrp: number
    currentPrice: number
    discount: number
    active: boolean
}