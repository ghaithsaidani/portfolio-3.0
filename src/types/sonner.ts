
interface SonnerProps {
    id: number | string
    status: 'success' | 'error' | 'warning' | 'info'
    message: string
}



export type {
    SonnerProps
}