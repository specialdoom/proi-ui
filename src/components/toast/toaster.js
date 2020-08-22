import {toast} from './store/toast'

export function send(slice) {
    toast.set(slice)
}


