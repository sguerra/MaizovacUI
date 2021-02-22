import { IUser } from '~/types'

let USERS = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'bret',
        role: 'admin',
        status: 'active',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'antonette',
        role: 'admin',
        status: 'active',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'samantha',
        role: 'admin',
        status: 'active',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'karianne',
        role: 'admin',
        status: 'active',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'kamren',
        role: 'admin',
        status: 'active',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'leopoldo_corkery',
        role: 'admin',
        status: 'active',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'elwyn.skiles',
        role: 'admin',
        status: 'active',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'maxime_nienow',
        role: 'admin',
        status: 'active',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'delphine',
        role: 'admin',
        status: 'active',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'moriah.stanton',
        role: 'admin',
        status: 'active',
    },
] as IUser[]

class UsersApi {
    async find(): Promise<IUser[]> {
        return USERS
    }

    async create(user: IUser): Promise<IUser> {
        user.id = Math.floor(Math.random() * 10000)

        USERS.push(user)

        return user
    }

    async update(user: IUser): Promise<IUser> {
        let foundUser = USERS.find((u) => u.id === user.id)
        Object.assign(foundUser, user)

        if (!foundUser) {
            throw new Error('Eeergas')
        }

        return foundUser
    }

    async save(user: IUser): Promise<IUser> {
        if (!user.id) {
            return this.create(user)
        }

        return this.update(user)
    }

    async delete(user: IUser) {
        USERS = USERS.filter((u) => u.id !== user.id)
    }
}

export default UsersApi
