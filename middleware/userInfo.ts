import { userBalancesApi } from '~/api'

export default function (middleware: any) {
    const { $auth } = middleware

    if ($auth.loggedIn && !$auth.user.profileInfo) {
        const token = $auth.strategy.token.get()

        console.log('token', token);
        
        userBalancesApi.setToken(token)

        return userBalancesApi.findCurrent().then((data: any) => {
            $auth.setUser({ ...$auth.user, profileInfo: data, isAdmin: data.User.role === 'admin' })
        })
    }
}
