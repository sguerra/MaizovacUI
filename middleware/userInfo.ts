import { userBalancesApi, BaseApi } from '~/api'

export default function (middleware: any) {
    const { $auth } = middleware

    if ($auth.loggedIn && !$auth.user.profileInfo) {
        const token = $auth.strategy.token.get()

        // Set the token to execute calls to the API
        BaseApi.token = token

        // Fetch userdata data from the API
        return userBalancesApi.findCurrent().then((data: any) => {

            // Save the user data to the auth object
            $auth.setUser({
                ...$auth.user,
                profileInfo: data,
                isAdmin: data.User.role === 'admin',
            })
        })
    }
}
