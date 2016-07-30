
export function incrementCounter() {
    return {type: 'INCREMENT'}
}

export function updateRouterState(state) {
    return { type: 'UPDATE_ROUTER_STATE', state: state }
}
