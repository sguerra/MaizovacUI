import { IUser } from '~/types'

let USERS = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        role: 'admin',
        status: 'active',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        role: 'admin',
        status: 'active',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        role: 'admin',
        status: 'active',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        role: 'admin',
        status: 'active',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        role: 'admin',
        status: 'active',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        role: 'admin',
        status: 'active',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        role: 'admin',
        status: 'active',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        role: 'admin',
        status: 'active',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        role: 'admin',
        status: 'active',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
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
