import { EMAIL_PUBLIC_KEY } from '$env/static/private'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
    return {
        emailPublicKey: EMAIL_PUBLIC_KEY
    }
} 